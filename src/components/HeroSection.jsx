import { scrollTo } from '../utils/lenisInstance';

export default function HeroSection() {
  return (
    <section
      id="philosophy"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Image with Overlay — style locks prevent GSAP transform bleed */}
      <div className="absolute inset-0 z-0" style={{ transform: 'none', willChange: 'auto' }}>
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZsdu5tKjla7Gzn6ySsak5g0dCDwH14P5m5AJHQPtqNQ-SQIreRl296Mkjz4Wn55OKAVExZXrCrcCKSi3kJskADwhYr2EFS74V5UYJJOwlmwe0ZTdnerYAUqX9oHAUgLavRuc9qbOB1nJBiG2bpKrOfAcrmYNM9ouDzTSNro25vHUivFVwcgbh8jm4zZaA6n5bknyWeW9m5PiYJYMPlLPCB_SH75WNiUumBqjbVfpSL0e9x7csZMQn-630Z7RyTA0nyewwF0vw5OGI"
          alt="A modern, warm and inspiring study environment"
        />
        <div className="absolute inset-0 bg-stone-900/40 backdrop-brightness-75" />
      </div>

      {/* Floating clay blobs — .hero-blob is targeted by GSAP parallax only */}
      <div className="hero-blob absolute top-1/4 -left-20 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl" />
      <div className="hero-blob absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary-container/20 rounded-full blur-3xl" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl px-6 pt-24 flex-1 flex flex-col justify-center text-center">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center px-4">

          {/* Badge */}
          <div className="inline-flex items-center bg-surface-container-low/30 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-white/10">
            <span className="text-[#ffdbcd] font-semibold tracking-widest text-[10px] uppercase text-center w-full">
              5,000+ Active Students
            </span>
          </div>

          {/* Heading — hero-reveal class required for GSAP word-split animation */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-[#fff8f2] leading-[1.15] tracking-tight mb-8 hero-reveal text-center w-full">
            Unleash Your Potential <span className="text-[#ffdbcd]">through Energy.</span>
          </h1>

          {/* Paragraph — animated by GSAP via ".hero-reveal ~ p" */}
          <p className="text-base md:text-xl text-[#fbf2e8]/90 max-w-xl mx-auto mb-8 md:mb-12 leading-relaxed text-center">
            A refined coaching experience for Classes 5–12, focusing on the synergy of academics and personal growth.
          </p>

          {/* Buttons — animated by GSAP via ".hero-reveal ~ div button" */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full px-4 sm:px-0">
            <button
              onClick={() => scrollTo('#contact')}
              className="bg-[#924a28] text-[#ffffff] px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg hover:opacity-90 transition-all hover:scale-105 shadow-xl shadow-[#924a28]/20"
            >
              Book Free Demo
            </button>
            <button
              onClick={() => scrollTo('#subjects')}
              className="glass-panel text-[#1e1b15] px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-surface-container-high transition-all hover:scale-105 border border-white/20"
            >
              View Courses
            </button>
          </div>

        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 mt-auto mb-8 md:mb-12 w-full max-w-5xl px-4 md:px-6">
        <div className="glass-panel rounded-2xl p-6 md:p-10 flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8 shadow-2xl">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl md:text-3xl font-extrabold text-[#924a28] mb-1 tracking-tighter">6+</span>
            <span className="text-[10px] md:text-sm font-bold text-[#54433c] uppercase tracking-widest">Years Exp.</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl md:text-3xl font-extrabold text-[#924a28] mb-1 tracking-tighter">5+</span>
            <span className="text-[10px] md:text-sm font-bold text-[#54433c] uppercase tracking-widest">Expert Tutors</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl md:text-3xl font-extrabold text-[#924a28] mb-1 tracking-tighter">95%</span>
            <span className="text-[10px] md:text-sm font-bold text-[#54433c] uppercase tracking-widest">Pass Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
