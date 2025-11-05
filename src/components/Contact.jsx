import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Let’s build your automation roadmap</h2>
            <p className="mt-3 text-gray-600">
              Share your goals and constraints—our team will follow up with a tailored proposal and a live demo.
            </p>
            <div className="mt-8 space-y-4 text-sm text-gray-700">
              <p className="flex items-center gap-3"><Mail className="h-4 w-4" /> hello@yourrobotics.co</p>
              <p className="flex items-center gap-3"><Phone className="h-4 w-4" /> +1 (555) 012-3456</p>
              <p className="flex items-center gap-3"><MapPin className="h-4 w-4" /> 123 Innovation Way, San Francisco, CA</p>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-gray-700">First name</label>
                <input className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10" required />
              </div>
              <div>
                <label className="text-sm text-gray-700">Last name</label>
                <input className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10" required />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-700">Work email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10" required />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-700">Project details</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Timeline, environment, key requirements…" />
              </div>
            </div>
            <button type="submit" className="mt-4 w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90">
              Request consultation
            </button>
            <p className="mt-3 text-center text-xs text-gray-500">We respond within 1 business day.</p>
          </form>
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} Your Robotics Co. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#robots" className="hover:text-gray-900">Robots</a>
            <a href="#use-cases" className="hover:text-gray-900">Use cases</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </footer>
      </div>
    </section>
  );
}
