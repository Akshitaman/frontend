import { useState } from 'react';

const advantages = [
  {
    bg: 'bg-[#f0ebff]',
    img: 'https://illustrations.popsy.co/amber/student-going-to-school.svg',
    title: 'Batch Size: Only 5 Students',
    desc: 'Maximum personal attention with just 5 students per batch — guaranteed individual focus',
  },
  {
    bg: 'bg-[#e6f2ff]',
    img: 'https://illustrations.popsy.co/amber/remote-work.svg',
    title: 'Online & Offline',
    desc: 'Attend live classes from anywhere or visit our centre',
  },
  {
    bg: 'bg-[#ffdee9]',
    img: 'https://illustrations.popsy.co/amber/surreal-hourglass.svg',
    title: 'Proven Results',
    desc: '95%+ students score above 90% in board exams',
  },
  {
    bg: 'bg-[#fff4e6]',
    img: 'https://illustrations.popsy.co/amber/man-riding-a-rocket.svg',
    title: 'Flexible Timings',
    desc: 'Weekend & evening batches for working parents',
  },
  {
    bg: 'bg-[#e6fffa]',
    img: 'https://illustrations.popsy.co/amber/customer-support.svg',
    title: 'Doubt Support 24/7',
    desc: 'Get your doubts cleared anytime via WhatsApp chat or direct call to your teacher',
  },
  {
    bg: 'bg-[#f5ffe6]',
    img: 'https://illustrations.popsy.co/amber/presentation.svg',
    title: 'Progress Tracking',
    desc: 'Regular tests and detailed performance reports',
  }
];

export default function AdvantagesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const cardWidth = e.target.offsetWidth * 0.78 + 24; // 78vw + gap-6
    const index = Math.round(scrollLeft / cardWidth);
    if (index !== activeIndex) setActiveIndex(index);
  };

  return (
    <section className="py-8 md:py-24 px-6 bg-[#FBEFEF]" id="advantages">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16 px-4">
          <span className="label-md text-tertiary tracking-[0.1em] font-bold uppercase mb-2 md:mb-4 block text-xs md:text-sm">
            The Scholar Edge
          </span>
          <h2 className="text-2xl md:text-5xl font-extrabold tracking-tight text-center">
            Why Choose Our Pedagogy
          </h2>
        </div>

        <div className="relative">
          {/* Fade Edge */}
          <div className="md:hidden absolute top-0 right-0 w-16 h-full pointer-events-none bg-gradient-to-r from-transparent to-[#FBEFEF] z-10" />

          <div 
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-6 md:gap-12 pb-4 md:pb-0 scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            {advantages.map((a) => (
              <div key={a.title} className="flex-shrink-0 w-[78vw] md:w-auto snap-start flex flex-col items-center advantage-card">
                <div className={`oval-container ${a.bg} transform scale-75 md:scale-100`}>
                  <img src={a.img} alt={a.title} className="oval-img" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#3b2d28] mb-2 md:mb-3 mt-4 md:mt-6">{a.title}</h3>
                <p className="text-sm md:text-base text-[#85736c] leading-relaxed px-4 md:px-0">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicators - Mobile Only */}
        <div className="md:hidden mt-6 flex flex-col items-center">
          <div className="flex gap-2">
            {advantages.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 bg-[#924a28]' : 'w-1.5 bg-[#924a28]/20'}`} 
              />
            ))}
          </div>
          <p className="text-[12px] text-[#85736c]/60 mt-3 flex items-center gap-1 font-medium">
            Swipe to see more <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </p>
        </div>
      </div>
    </section>
  );
}
