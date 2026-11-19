import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

const PORT = 5190;
const CDP_PORT = 9225;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff2': 'font/woff2',
};

// 1. Static HTTP Server
function createServer() {
  return http.createServer((req, res) => {
    let cleanUrl = req.url.split('?')[0];
    let filePath = path.join(distDir, cleanUrl === '/' ? 'index.html' : cleanUrl);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, {
        'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
        'Cache-Control': 'public, max-age=31536000',
      });
      fs.createReadStream(filePath).pipe(res);
    } else {
      // SPA Fallback
      filePath = path.join(distDir, 'index.html');
      res.writeHead(200, { 'Content-Type': 'text/html', 'Cache-Control': 'no-cache' });
      fs.createReadStream(filePath).pipe(res);
    }
  });
}

// 2. Simple CDP Client
class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.id = 1;
    this.callbacks = new Map();
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = (err) => reject(err);
      this.ws.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        if (data.id && this.callbacks.has(data.id)) {
          const cb = this.callbacks.get(data.id);
          this.callbacks.delete(data.id);
          if (data.error) cb.reject(new Error(data.error.message));
          else cb.resolve(data.result);
        }
      };
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function getWsUrl(port) {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/list`);
      const list = await res.json();
      if (list && list.length > 0 && list[0].webSocketDebuggerUrl) {
        return list[0].webSocketDebuggerUrl;
      }
    } catch {
      await new Promise((r) => setTimeout(r, 200));
    }
  }
  throw new Error('Chrome CDP failed to initialize');
}

async function auditRoute(cdp, route, isMobile = false) {
  const width = isMobile ? 390 : 1920;
  const height = isMobile ? 844 : 1080;

  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: isMobile ? 3 : 1,
    mobile: isMobile,
  });

  const consoleLogs = [];
  await cdp.send('Console.enable');

  await cdp.send('Page.navigate', { url: `http://127.0.0.1:${PORT}${route}` });
  await new Promise((r) => setTimeout(r, 3500)); // wait for video and framer-motion animations

  const evalResult = await cdp.send('Runtime.evaluate', {
    expression: `
      (() => {
        const nav = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        const fcpEntry = paint.find(p => p.name === 'first-contentful-paint');
        const fcp = fcpEntry ? fcpEntry.startTime : null;

        const video = document.querySelector('video');
        let videoInfo = null;
        if (video) {
          videoInfo = {
            readyState: video.readyState,
            paused: video.paused,
            currentTime: video.currentTime,
            duration: video.duration,
            videoWidth: video.videoWidth,
            videoHeight: video.videoHeight,
            currentSrc: video.currentSrc,
            hasPoster: !!video.poster
          };
        }

        const resources = performance.getEntriesByType('resource');
        let totalTransfer = 0;
        let byType = { js: 0, css: 0, img: 0, media: 0, other: 0 };
        resources.forEach(r => {
          const sz = r.transferSize || r.encodedBodySize || 0;
          totalTransfer += sz;
          if (r.name.includes('.js')) byType.js += sz;
          else if (r.name.includes('.css')) byType.css += sz;
          else if (r.name.includes('.webp') || r.name.includes('.png') || r.name.includes('.jpg')) byType.img += sz;
          else if (r.name.includes('.mp4') || r.name.includes('.webm')) byType.media += sz;
          else byType.other += sz;
        });

        return {
          domContentLoaded: nav ? nav.domContentLoadedEventEnd - nav.startTime : 0,
          loadComplete: nav ? nav.loadEventEnd - nav.startTime : 0,
          fcp: fcp,
          videoInfo: videoInfo,
          totalTransferBytes: totalTransfer,
          resourcesCount: resources.length,
          breakdown: byType
        };
      })()
    `,
    returnByValue: true,
  });

  return evalResult.result.value;
}

async function main() {
  console.log('=== STARTING COMPLETE AUDIT & VERIFICATION ===');
  const server = createServer();
  await new Promise((r) => server.listen(PORT, '127.0.0.1', r));
  console.log(`Production server running at http://127.0.0.1:${PORT}`);

  const chromeUserData = path.join(projectRoot, '.chrome-temp-profile');
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    `--remote-debugging-port=${CDP_PORT}`,
    `--user-data-dir=${chromeUserData}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--mute-audio',
    '--autoplay-policy=no-user-gesture-required',
    `http://127.0.0.1:${PORT}`,
  ]);
  chromeProc.stderr.on('data', (d) => {
    // console.error('[Chrome STDERR]', d.toString());
  });

  try {
    const wsUrl = await getWsUrl(CDP_PORT);
    console.log('Connected to Chrome Headless via CDP');
    const cdp = new CDPClient(wsUrl);
    await cdp.connect();
    await cdp.send('Page.enable');

    console.log('\n--- 1. DESKTOP PERFORMANCE AUDIT ---');
    const desktopHome = await auditRoute(cdp, '/', false);
    console.log('Desktop Home Results:');
    console.log(`  - FCP: ${desktopHome.fcp ? desktopHome.fcp.toFixed(1) + 'ms' : 'N/A'}`);
    console.log(`  - DOM Content Loaded: ${desktopHome.domContentLoaded.toFixed(1)}ms`);
    console.log(`  - Load Event Complete: ${desktopHome.loadComplete.toFixed(1)}ms`);
    console.log(`  - Total Transferred: ${(desktopHome.totalTransferBytes / 1024).toFixed(1)} KB`);
    console.log(`  - Resource Count: ${desktopHome.resourcesCount}`);
    console.log(`  - JS Transferred: ${(desktopHome.breakdown.js / 1024).toFixed(1)} KB`);
    console.log(`  - CSS Transferred: ${(desktopHome.breakdown.css / 1024).toFixed(1)} KB`);
    console.log(`  - Images Transferred: ${(desktopHome.breakdown.img / 1024).toFixed(1)} KB`);
    console.log(`  - Video Transferred: ${(desktopHome.breakdown.media / 1024).toFixed(1)} KB`);
    if (desktopHome.videoInfo) {
      console.log('  - Hero Video State:');
      console.log(`      * ReadyState: ${desktopHome.videoInfo.readyState} (HAVE_ENOUGH_DATA=4)`);
      console.log(`      * Paused: ${desktopHome.videoInfo.paused} (false = playing)`);
      console.log(`      * CurrentTime: ${desktopHome.videoInfo.currentTime.toFixed(2)}s`);
      console.log(`      * Dimensions: ${desktopHome.videoInfo.videoWidth}x${desktopHome.videoInfo.videoHeight}`);
      console.log(`      * Active Source: ${path.basename(desktopHome.videoInfo.currentSrc)}`);
      console.log(`      * Has Poster: ${desktopHome.videoInfo.hasPoster}`);
    }

    console.log('\n--- 2. MOBILE PERFORMANCE AUDIT (390x844) ---');
    const mobileHome = await auditRoute(cdp, '/', true);
    console.log('Mobile Home Results:');
    console.log(`  - FCP: ${mobileHome.fcp ? mobileHome.fcp.toFixed(1) + 'ms' : 'N/A'}`);
    console.log(`  - Total Transferred: ${(mobileHome.totalTransferBytes / 1024).toFixed(1)} KB`);
    if (mobileHome.videoInfo) {
      console.log('  - Mobile Video State:');
      console.log(`      * ReadyState: ${mobileHome.videoInfo.readyState}`);
      console.log(`      * Paused: ${mobileHome.videoInfo.paused}`);
      console.log(`      * CurrentTime: ${mobileHome.videoInfo.currentTime.toFixed(2)}s`);
      console.log(`      * Dimensions: ${mobileHome.videoInfo.videoWidth}x${mobileHome.videoInfo.videoHeight}`);
    }

    console.log('\n--- 3. ALL 6 ROUTES VERIFICATION ---');
    const routes = ['/services', '/solutions', '/about', '/product', '/contact'];
    for (const route of routes) {
      const res = await auditRoute(cdp, route, false);
      console.log(`Route ${route.padEnd(12)} -> FCP: ${res.fcp ? res.fcp.toFixed(1) + 'ms' : 'N/A'} | Resources: ${res.resourcesCount} | Transferred: ${(res.totalTransferBytes / 1024).toFixed(1)} KB`);
    }

    cdp.close();
  } finally {
    chromeProc.kill();
    server.close();
    try {
      fs.rmSync(chromeUserData, { recursive: true, force: true });
    } catch {}
  }
}

main().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});
