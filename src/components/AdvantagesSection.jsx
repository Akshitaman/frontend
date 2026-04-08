const advantages = [
  {
    bg: 'bg-[#f0ebff]',
    img: 'https://illustrations.popsy.co/amber/student-going-to-school.svg',
    alt: 'Conceptual clarity',
    title: 'Conceptual clarity through visualisation',
  },
  {
    bg: 'bg-[#e6f2ff]',
    img: 'https://illustrations.popsy.co/amber/remote-work.svg',
    alt: 'Personalised learning',
    title: 'Personalised learning programs',
  },
  {
    bg: 'bg-[#ffeef5]',
    img: 'https://illustrations.popsy.co/amber/video-call.svg',
    alt: 'Individual attention',
    title: 'Unmatched individual attention',
  },
];

export default function AdvantagesSection() {
  return (
    <section className="py-24 px-6 bg-[#FBEFEF]" id="advantages">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="label-md text-tertiary tracking-[0.1em] font-bold uppercase mb-4 block">
            The Scholar Edge
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Why Choose Our Pedagogy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {advantages.map((a) => (
            <div key={a.title} className="flex flex-col items-center">
              <div className={`oval-container ${a.bg}`}>
                <img src={a.img} alt={a.alt} className="oval-img" />
              </div>
              <h3 className="advantage-heading">{a.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
