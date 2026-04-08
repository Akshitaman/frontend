export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <span className="text-2xl font-extrabold text-[#475ba2] tracking-tighter">
          Shaharyar Classes
        </span>
        <div className="hidden md:flex items-center space-x-8">
          <a className="text-slate-600 hover:text-[#475ba2] transition-colors" href="#philosophy">Home</a>
          <a className="text-slate-600 hover:text-[#475ba2] transition-colors" href="#subjects">Subjects</a>
          <a className="text-slate-600 hover:text-[#475ba2] transition-colors" href="#advantages">Advantages</a>
          <a className="text-slate-600 hover:text-[#475ba2] transition-colors" href="#contact">Contact</a>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all active:scale-95">
            Enrol Now
          </button>
        </div>
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
