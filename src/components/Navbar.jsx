import { useState } from 'react';
import { scrollTo } from '../utils/lenisInstance';

const navLinks = [
  { label: 'Home',      target: '#philosophy' },
  { label: 'Subject',   target: '#subjects'   },
  { label: 'Advantage', target: '#advantages' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (target) => {
    scrollTo(target, { offset: -70 });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0px_12px_32px_rgba(30,27,21,0.06)]">
      {/* Top bar */}
      <div className="flex justify-between items-center w-full px-4 md:px-10 py-5 tracking-tight leading-relaxed">

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
        <div className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto">
          {navLinks.map(({ label, target }, i) => (
            <button
              key={label}
              onClick={() => handleNav(target)}
              className={`nav-link bg-transparent border-none cursor-pointer text-sm lg:text-base transition-colors duration-300 ${
                i === 0
                  ? 'text-[#924a28] font-semibold border-b-2 border-[#924a28] pb-1'
                  : 'text-slate-600 hover:text-[#924a28]'
              }`}
            >
              {label}
            </button>
          ))}

          {/* Quick Contact — Desktop Only */}
          <div className="flex items-center gap-3 ml-2 lg:ml-4">
            <a 
              href="tel:+919801955373"
              className="flex items-center gap-2 bg-[#f5ebe4] text-[#924a28] px-4 py-2.5 rounded-full font-bold text-xs lg:text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#924a28]/10 active:scale-95"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              +91 98019 55373
            </a>
            <a 
              href="https://wa.me/919801955373"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full font-bold text-xs lg:text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/30 active:scale-95"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          <button
            onClick={() => handleNav('#contact')}
            className="bg-[#924a28] text-[#ffffff] px-6 lg:px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#924a28]/30 active:scale-95"
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
              className="text-slate-600 hover:text-[#924a28] transition-colors bg-transparent border-none cursor-pointer text-base text-left py-4 min-h-[44px] border-b border-surface-container-highest/20 last:border-none"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-4 bg-[#924a28] text-[#ffffff] px-8 py-4 min-h-[44px] rounded-full font-bold hover:opacity-90 transition-all active:scale-95 text-center flex items-center justify-center"
          >
            Enrol Now
          </button>
        </div>
      </div>
    </nav>
  );
}
