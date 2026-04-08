// Singleton holder for the Lenis instance
// App.jsx calls setLenis() once on init.
// Any component can import scrollTo() to trigger smooth scrolling.

let _lenis = null;

export const setLenis = (instance) => {
  _lenis = instance;
};

export const scrollTo = (target, options = {}) => {
  if (_lenis) {
    _lenis.scrollTo(target, { duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), ...options });
  } else {
    // Fallback if Lenis hasn't initialised yet
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  }
};
