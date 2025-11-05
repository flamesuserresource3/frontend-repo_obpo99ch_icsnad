import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/utrirTwDrFc8TLoE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft glow/gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(99,102,241,0.25),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center sm:pt-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs tracking-wide text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Next‑gen Automation
        </span>
        <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Robotic Solutions for a Smarter Future
        </h1>
        <p className="mx-auto max-w-2xl text-base text-white/70 sm:text-lg">
          We design, build, and deploy intelligent robots that elevate safety, efficiency, and scalability across industries.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90">
            Get a Demo
          </a>
          <a href="#robots" className="rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/5">
            Explore Robots
          </a>
        </div>
      </div>
    </section>
  );
}
