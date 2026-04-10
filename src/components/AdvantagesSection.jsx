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
  return (
    <section className="py-20 md:py-24 px-6 bg-[#FBEFEF]" id="advantages">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 px-4">
          <span className="label-md text-tertiary tracking-[0.1em] font-bold uppercase mb-4 block">
            The Scholar Edge
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center">
            Why Choose Our Pedagogy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center text-center">
          {advantages.map((a) => (
            <div key={a.title} className="flex flex-col items-center advantage-card">
              <div className={`oval-container ${a.bg}`}>
                <img src={a.img} alt={a.title} className="oval-img" />
              </div>
              <h3 className="text-xl font-bold text-[#3b2d28] mb-3 mt-6">{a.title}</h3>
              <p className="text-[#85736c] leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
