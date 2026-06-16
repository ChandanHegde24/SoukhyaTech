import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import heroImage from '../assets/images/hero-ai-visor.png';
import {
  expertServices,
  featuredOfferings,
  homeIntro,
  solutions,
  whyChooseSoukhya,
} from '../data/siteContent';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <section className="home-stage" aria-labelledby="home-title">
        <div className="home-hero-card">
          <div className="hero-copy">
            <div className="hero-team" aria-label="Soukhya operators online">
              <span className="avatar avatar-one">ST</span>
              <span className="avatar avatar-two">AI</span>
              <span className="avatar avatar-more">+</span>
            </div>

            <p className="hero-kicker">Soukhya Tech</p>
            <h1 id="home-title">
              DEVICES
              <span>DATA</span>
              <span>DECISIONS</span>
            </h1>
            <p className="hero-intro">{homeIntro}</p>

            <div className="hero-actions">
              <Link to="/contact" className="primary-pill">
                Get Started <span aria-hidden="true">-&gt;</span>
              </Link>
              <button className="icon-button" type="button" aria-label="Play overview">
                <span className="play-icon" aria-hidden="true" />
              </button>
              <button className="icon-button" type="button" aria-label="Open platform">
                <span className="spark-icon" aria-hidden="true">S</span>
              </button>
            </div>
          </div>

          <img
            className="hero-visual"
            src={heroImage}
            alt="Professional wearing an augmented reality visor against a blue technology backdrop"
          />

          <span className="floating-tag tag-one">IoT / IIoT</span>
          <span className="floating-tag tag-two">Predictive Insights</span>
        </div>

        <div className="home-grid">
          <article className="signal-card dark-card">
            <div>
              <p>{featuredOfferings[0].eyebrow}</p>
              <h2>{featuredOfferings[0].title}</h2>
            </div>
            <p className="card-copy">{featuredOfferings[0].description}</p>
            <div className="metric-row">
              <div>
                <strong>24/7</strong>
                <span>Early alerts</span>
              </div>
              <div>
                <strong>I-ES</strong>
                <span>Earth pit intelligence</span>
              </div>
            </div>
          </article>

          <article className="signal-card visual-card">
            <button className="play-button" type="button" aria-label="Play platform breakdown">
              <span className="play-icon" aria-hidden="true" />
            </button>
            <div className="device-render" aria-hidden="true">
              <span />
            </div>
            <h2>{featuredOfferings[2].title}: {featuredOfferings[2].description}</h2>
          </article>

          <article className="signal-card lime-card">
            <div>
              <p>{featuredOfferings[1].eyebrow}</p>
              <h2>{featuredOfferings[1].title}</h2>
              <span>{featuredOfferings[1].description}</span>
            </div>
            <div className="growth-visual" aria-hidden="true">
              <span className="leaf leaf-one" />
              <span className="leaf leaf-two" />
              <span className="leaf leaf-three" />
            </div>
            <div className="mini-tools" aria-hidden="true">
              <span />
              <span />
            </div>
          </article>
        </div>

        <section className="home-content-section" aria-labelledby="services-title">
          <div className="section-heading">
            <p>Our Expertised Services</p>
            <h2 id="services-title">
              Hardware, firmware, analytics, and rollout planning for connected operations.
            </h2>
          </div>
          <div className="content-card-grid">
            {expertServices.map((service) => (
              <article className="content-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-content-section" aria-labelledby="why-title">
          <div className="section-heading">
            <p>Why Choose Soukhya</p>
            <h2 id="why-title">Secure, scalable, industry-aware IoT delivery.</h2>
          </div>
          <div className="why-chip-grid">
            {whyChooseSoukhya.map((reason) => (
              <span key={reason}>{reason}</span>
            ))}
          </div>
        </section>

        <section className="home-content-section" aria-labelledby="solutions-title">
          <div className="section-heading">
            <p>Our Solutions</p>
            <h2 id="solutions-title">Connected systems built for industry, infrastructure, and scale.</h2>
          </div>
          <div className="content-card-grid solutions-preview-grid">
            {solutions.map((solution) => (
              <article className="content-card solution-preview-card" key={solution.title}>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
