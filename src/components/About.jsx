export default function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Engineering reliable autonomy</h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            We are a robotics company focused on elegant, robust solutions. From perception to motion planning, our systems are built with safety, security, and maintainability in mind.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              title: 'Precision Hardware',
              desc: 'Modular mechatronics, high‑tolerance assemblies, and serviceable designs.',
            },
            {
              title: 'Intelligent Software',
              desc: 'Realtime perception, SLAM, planning, and fleet orchestration at scale.',
            },
            {
              title: 'Trusted Delivery',
              desc: 'Pilots to production with rigorous testing and enterprise support.',
            },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
