import Hero from './components/Hero';
import About from './components/About';
import Robots from './components/Robots';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-sm font-medium">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-white text-black">R</span>
            Robotics Co.
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="text-white/80 hover:text-white">About</a>
            <a href="#robots" className="text-white/80 hover:text-white">Robots</a>
            <a href="#use-cases" className="text-white/80 hover:text-white">Use cases</a>
            <a href="#contact" className="rounded-md bg-white px-3 py-1.5 font-medium text-black hover:bg-white/90">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Robots />
        <Contact />
      </main>
    </div>
  );
}

export default App;
