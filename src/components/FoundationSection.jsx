const subjects = [
  {
    icon: 'calculate',
    bgClass: 'bg-primary-container',
    iconClass: 'text-on-primary-container',
    title: 'Maths',
    desc: 'Mastering numbers through visual logic and practical puzzles.',
  },
  {
    icon: 'biotech',
    bgClass: 'bg-secondary-container',
    iconClass: 'text-on-secondary-container',
    title: 'Science',
    desc: 'Exploring the laws of nature with interactive experiments.',
  },
  {
    icon: 'public',
    bgClass: 'bg-tertiary-container',
    iconClass: 'text-on-tertiary-container',
    title: 'Social Science',
    desc: "Understanding our world's past, present, and civic structure.",
  },
  {
    icon: 'menu_book',
    bgClass: 'bg-surface-container-highest',
    iconClass: 'text-on-surface',
    title: 'English',
    desc: 'Developing articulate voices and a love for global literature.',
  },
];

export default function FoundationSection() {
  return (
    <section className="py-32 px-6 bg-[#FBEFEF]" id="subjects">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="label-md text-tertiary tracking-[0.1em] font-bold uppercase mb-4 block">
            Junior Academy
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
            Foundation Years (Classes 5-10)
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map((s) => (
            <div key={s.title} className="clay-card p-10 rounded-xl group">
              <div className={`w-16 h-16 rounded-lg ${s.bgClass} mb-8 flex items-center justify-center clay-icon`}>
                <span className={`material-symbols-outlined ${s.iconClass} text-3xl`}>{s.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
