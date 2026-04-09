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
      <div className="relative z-10 w-full max-w-6xl px-6 pt-24 text-center md:text-left">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center bg-surface-container-low/30 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-white/10">
            <span className="text-[#ffdbcd] font-semibold tracking-widest text-[10px] uppercase">
              Elite Academic Mentorship
            </span>
          </div>

          {/* Heading — hero-reveal class required for GSAP word-split animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#fff8f2] leading-[1.1] tracking-tight mb-8 hero-reveal">
            Unleash Your Potential <span className="text-[#ffdbcd]">through Energy.</span>
          </h1>

          {/* Paragraph — animated by GSAP via ".hero-reveal ~ p" */}
          <p className="text-lg md:text-xl text-[#fbf2e8]/90 max-w-xl mb-12 leading-relaxed">
            A refined coaching experience for Classes 5–10, focusing on the synergy of academics and personal growth.
          </p>

          {/* Buttons — animated by GSAP via ".hero-reveal ~ div button" */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => scrollTo('#contact')}
              className="bg-[#924a28] text-[#ffffff] px-10 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-xl shadow-[#924a28]/20"
            >
              Book Free Demo
            </button>
            <button
              onClick={() => scrollTo('#subjects')}
              className="glass-panel text-[#1e1b15] px-10 py-5 rounded-full font-bold text-lg hover:bg-surface-container-high transition-all hover:scale-105 border border-white/20"
            >
              View Courses
            </button>
          </div>

        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 mt-auto mb-12 w-full max-w-5xl px-6">
        <div className="glass-panel rounded-xl p-8 md:p-10 flex flex-wrap justify-center md:justify-between items-center gap-8 shadow-2xl">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-3xl font-extrabold text-[#924a28] mb-1 tracking-tighter">10k+</span>
            <span className="text-sm font-medium text-[#54433c] uppercase tracking-widest">Active Students</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-outline-variant/30" />
          <div className="flex flex-col items-center md:items-start">
            <span className="text-3xl font-extrabold text-[#924a28] mb-1 tracking-tighter">98%</span>
            <span className="text-sm font-medium text-[#54433c] uppercase tracking-widest">Success Rate</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-outline-variant/30" />
          <div className="flex flex-col items-center md:items-start">
            <span className="text-3xl font-extrabold text-[#924a28] mb-1 tracking-tighter">4.9/5</span>
            <span className="text-sm font-medium text-[#54433c] uppercase tracking-widest">Parent Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
