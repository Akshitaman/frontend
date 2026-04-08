import { scrollTo } from '../utils/lenisInstance';

export default function HeroSection() {
  return (
    <section
      id="philosophy"
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(249, 249, 247, 0.6), rgba(249, 249, 247, 0.95)), url('/hero_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0 0 2rem 2rem',
        boxShadow: 'inset 0 -20px 40px rgba(249, 249, 247, 1)',
      }}
    >
      {/* Floating clay blobs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary-container/20 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight hero-reveal leading-[1.1] mb-8">
            Unlock Your Academic Potential
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
            Expert coaching for Class 5–12 students across CBSE, ICSE &amp; State boards.
            Join Bihar's most result-driven tuition — online &amp; offline.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-14">
            <button
              onClick={() => scrollTo('#contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-5 rounded-full text-lg font-bold shadow-xl shadow-primary/20 hover:opacity-90 transition-all active:scale-95"
            >
              Book Free Demo{' '}
              <span className="material-symbols-outlined text-[1.25rem]">arrow_forward</span>
            </button>
            <button className="w-full sm:w-auto bg-surface-container-highest border border-surface-container-highest text-on-surface px-10 py-5 rounded-full text-lg font-bold hover:bg-surface-container-high transition-all">
              Explore Programs
            </button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-12 sm:gap-20 pt-10 border-t border-surface-container-highest/60 w-max">
            <div className="text-left">
              <h3 className="text-4xl md:text-5xl font-extrabold hero-reveal mb-2">6+</h3>
              <p className="text-sm font-semibold text-on-surface-variant">Years Exp.</p>
            </div>
            <div className="text-left">
              <h3 className="text-4xl md:text-5xl font-extrabold hero-reveal mb-2">5+</h3>
              <p className="text-sm font-semibold text-on-surface-variant">Expert Tutors</p>
            </div>
            <div className="text-left">
              <h3 className="text-4xl md:text-5xl font-extrabold hero-reveal mb-2">95%</h3>
              <p className="text-sm font-semibold text-on-surface-variant">Pass Rate</p>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 w-full relative">
          <img
            src="/student_hero.png"
            alt="Student showing academic excellence"
            className="w-full h-auto object-contain drop-shadow-2xl max-w-[600px] mx-auto lg:ml-auto"
          />
        </div>
      </div>
    </section>
  );
}
