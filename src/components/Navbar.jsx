import { useState } from 'react';
import { scrollTo } from '../utils/lenisInstance';

const navLinks = [
  { label: 'Home',      target: '#philosophy' },
  { label: 'Subject',   target: '#subjects'   },
  { label: 'Advantage', target: '#advantages' },
  { label: 'Contact',   target: '#contact'    },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (target) => {
    scrollTo(target);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0px_12px_32px_rgba(30,27,21,0.06)]">
      {/* Top bar */}
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto tracking-tight leading-relaxed">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter text-orange-950">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6l9-4.91V17h2V9L12 3zM3.89 9L12 4.57L20.11 9L12 13.43L3.89 9zM12 15.5l-7 3.82V21l7 3.82l7-3.82v-1.68l-7-3.82z" />
            </svg>
            <span>Shaharyar Classes</span>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {navLinks.map(({ label, target }, i) => (
            <button
              key={label}
              onClick={() => handleNav(target)}
              className={`nav-link bg-transparent border-none cursor-pointer text-base transition-colors duration-300 ${
                i === 0
                  ? 'text-[#924a28] font-semibold border-b-2 border-[#924a28] pb-1'
                  : 'text-slate-600 hover:text-[#924a28]'
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="bg-[#924a28] text-[#ffffff] px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#924a28]/30 active:scale-95"
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
              className="text-slate-600 hover:text-[#924a28] transition-colors bg-transparent border-none cursor-pointer text-base text-left py-3 border-b border-surface-container-highest/20 last:border-none"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-3 bg-[#924a28] text-[#ffffff] px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all active:scale-95 text-center"
          >
            Enrol Now
          </button>
        </div>
      </div>
    </nav>
  );
}
