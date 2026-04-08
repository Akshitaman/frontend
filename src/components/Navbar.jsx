import { useState } from 'react';
import { scrollTo } from '../utils/lenisInstance';

const navLinks = [
  { label: 'Home',       target: '#philosophy' },
  { label: 'Subjects',   target: '#subjects'   },
  { label: 'Advantages', target: '#advantages' },
  { label: 'Contact',    target: '#contact'    },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (target) => {
    scrollTo(target);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      {/* Top bar */}
      <div className="flex justify-between items-center px-6 md:px-10 py-4 w-full">
        <span className="flex items-center gap-2 text-2xl font-extrabold text-[#475ba2]">
          <span className="material-symbols-outlined text-[1.5rem]">school</span>
          <span>Shaharyar</span>
          <span>Classes</span>
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ label, target }) => (
            <button
              key={label}
              onClick={() => handleNav(target)}
              className="nav-link text-slate-600 bg-transparent border-none cursor-pointer text-base"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
          >
            Enrol Now
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-on-surface p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pb-6 border-t border-surface-container-highest/30">
          {navLinks.map(({ label, target }) => (
            <button
              key={label}
              onClick={() => handleNav(target)}
              className="text-slate-600 hover:text-[#475ba2] transition-colors bg-transparent border-none cursor-pointer text-base text-left py-3 border-b border-surface-container-highest/20 last:border-none"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-3 bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all active:scale-95 text-center"
          >
            Enrol Now
          </button>
        </div>
      </div>
    </nav>
  );
}
