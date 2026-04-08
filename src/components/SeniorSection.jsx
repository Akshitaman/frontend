const scienceSubjects = [
  {
    icon: 'experiment',
    bg: 'bg-primary-container',
    iconColor: 'text-on-primary-container',
    title: 'Physics',
    desc: 'Mechanics, Optics, and Modern Physics.',
  },
  {
    icon: 'science',
    bg: 'bg-secondary-container',
    iconColor: 'text-on-secondary-container',
    title: 'Chemistry',
    desc: 'Organic, Inorganic, and Physical mastery.',
  },
  {
    icon: 'psychiatry',
    bg: 'bg-tertiary-container',
    iconColor: 'text-on-tertiary-container',
    title: 'Biology',
    desc: 'Genetics, Human Physiology, and Botany.',
  },
];

const commerceSubjects = [
  {
    icon: 'account_balance_wallet',
    bg: 'bg-primary-fixed-dim',
    iconColor: 'text-on-primary-container',
    title: 'Accountancy',
    desc: 'Financial statements and corporate accounting.',
  },
  {
    icon: 'corporate_fare',
    bg: 'bg-secondary-fixed-dim',
    iconColor: 'text-on-secondary-container',
    title: 'Business Studies',
    desc: 'Management principles and marketing strategy.',
  },
  {
    icon: 'trending_up',
    bg: 'bg-tertiary-fixed-dim',
    iconColor: 'text-on-tertiary-container',
    title: 'Economics',
    desc: 'Micro, Macro, and Global economic trends.',
  },
];

function StreamCard({ icon, bg, iconColor, title, desc }) {
  return (
    <div className="flex items-center p-6 bg-surface-container-low rounded-lg gap-6 transition-colors hover:bg-surface-container-high">
      <div className={`w-14 h-14 shrink-0 ${bg} rounded-lg flex items-center justify-center clay-icon`}>
        <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
      </div>
      <div>
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-sm text-on-surface-variant">{desc}</p>
      </div>
    </div>
  );
}

export default function SeniorSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Science Stream */}
          <div className="space-y-12">
            <div>
              <span className="label-md text-tertiary tracking-[0.1em] font-bold uppercase mb-4 block">
                Class 11-12
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
                Science Stream
              </h2>
              <p className="mt-4 text-on-surface-variant">
                Advanced preparation for engineering and medical aspirations.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {scienceSubjects.map((s) => <StreamCard key={s.title} {...s} />)}
            </div>
          </div>

          {/* Commerce Stream */}
          <div className="space-y-12">
            <div>
              <span className="label-md text-tertiary tracking-[0.1em] font-bold uppercase mb-4 block">
                Class 11-12
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
                Commerce Stream
              </h2>
              <p className="mt-4 text-on-surface-variant">
                Building the foundation for business and economic leadership.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {commerceSubjects.map((s) => <StreamCard key={s.title} {...s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
