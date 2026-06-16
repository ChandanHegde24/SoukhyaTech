export default function Hero() {
  return (
    <section className="bg-dark min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <h1 className="text-6xl font-bold text-white">
          Integrated IoT &
          <span className="text-primary">
            {" "}IIoT Platforms
          </span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl">
          Connecting devices, data and intelligence to drive
          digital transformation.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-primary px-6 py-3 rounded-lg text-black font-semibold hover:opacity-90 transition">
            Learn More
          </button>

          <button className="border border-primary px-6 py-3 rounded-lg text-primary hover:bg-primary hover:text-black transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
