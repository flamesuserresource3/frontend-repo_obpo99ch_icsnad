import { Bot, Cpu, Shield, Rocket } from 'lucide-react';

const robots = [
  {
    name: 'Atlas-Mini',
    tagline: 'Mobile inspection robot',
    icon: Bot,
    specs: ['8hr battery', 'IP67', '4K vision'],
  },
  {
    name: 'Delta-Arm',
    tagline: 'High-speed pick & place',
    icon: Cpu,
    specs: ['±0.1mm', '300 cpm', 'Modular EOAT'],
  },
  {
    name: 'Sentinel',
    tagline: 'Autonomous security rover',
    icon: Shield,
    specs: ['Thermal + RGB', 'Lidar 64', 'Edge AI'],
  },
];

const useCases = [
  {
    title: 'Manufacturing',
    desc: 'Automated handling, assembly, and end‑of‑line QA to increase throughput and consistency.',
  },
  {
    title: 'Warehousing',
    desc: 'Dynamic routing, inventory scanning, and pallet moves with fleet orchestration.',
  },
  {
    title: 'Security',
    desc: '24/7 autonomous patrols with anomaly detection and incident reporting.',
  },
  {
    title: 'Healthcare',
    desc: 'Safe, collaborative assistance for logistics and routine tasks in clinical settings.',
  },
];

export default function Robots() {
  return (
    <section id="robots" className="relative border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Featured robots</h2>
            <p className="mt-3 max-w-xl text-gray-600">
              Purpose‑built platforms designed for reliability, safety, and performance in real‑world environments.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/90">
            <Rocket className="h-4 w-4" /> Request pricing
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {robots.map(({ name, tagline, icon: Icon, specs }) => (
            <div key={name} className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{name}</h3>
                  <p className="text-sm text-gray-600">{tagline}</p>
                </div>
              </div>
              <div className="relative h-36 overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_60%_at_60%_10%,rgba(0,0,0,0.06),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="h-16 w-16 text-gray-800/70" />
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {specs.map((s) => (
                  <li key={s} className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-700">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="use-cases" className="mt-16">
          <h3 className="text-xl font-medium text-gray-900">Use cases</h3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h4 className="text-base font-medium text-gray-900">{u.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
