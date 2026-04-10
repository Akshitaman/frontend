const scienceSubjects = [
  {
    icon: 'experiment',
    bg: 'bg-primary-container',
    iconColor: 'text-on-primary-container',
    title: 'Physics',
    desc: 'Mechanics, Optics, and Modern Physics.',
    topics: [
      'Mechanics – Kinematics, Laws of Motion, Work & Energy',
      'Rotational Motion & Gravitation',
      'Thermodynamics & Kinetic Theory of Gases',
      'Waves & Oscillations',
      'Electrostatics & Current Electricity',
      'Magnetic Effects & Electromagnetic Induction',
      'Optics – Ray & Wave Optics',
      'Modern Physics – Dual Nature, Atoms, Nuclei',
      'Semiconductor Electronics'
    ]
  },
  {
    icon: 'science',
    bg: 'bg-secondary-container',
    iconColor: 'text-on-secondary-container',
    title: 'Chemistry',
    desc: 'Organic, Inorganic, and Physical mastery.',
    topics: [
      'Physical Chemistry – Mole Concept, Thermodynamics',
      'Chemical Equilibrium & Ionic Equilibrium',
      'Electrochemistry & Chemical Kinetics',
      'Organic Chemistry – Hydrocarbons, Reactions',
      'Aldehydes, Ketones, Carboxylic Acids',
      'Amines, Polymers & Biomolecules',
      'Inorganic Chemistry – Periodic Table, Bonding',
      'Coordination Compounds & Metallurgy',
      'Surface Chemistry & Solutions'
    ]
  },
  {
    icon: 'psychiatry',
    bg: 'bg-tertiary-container',
    iconColor: 'text-on-tertiary-container',
    title: 'Biology',
    desc: 'Genetics, Human Physiology, and Botany.',
    topics: [
      'Cell Biology & Biomolecules',
      'Plant Anatomy & Morphology',
      'Human Physiology – Digestion, Respiration, Circulation',
      'Nervous System & Endocrine System',
      'Genetics & Molecular Biology',
      'Evolution & Ecology',
      'Reproduction in Organisms',
      'Biotechnology & Its Applications',
      'Human Health & Diseases'
    ]
  },
];

const commerceSubjects = [
  {
    icon: 'account_balance_wallet',
    bg: 'bg-primary-fixed-dim',
    iconColor: 'text-on-primary-container',
    title: 'Accountancy',
    desc: 'Financial statements and corporate accounting.',
    topics: [
      'Introduction to Accounting & Accounting Standards',
      'Journal, Ledger, Trial Balance',
      'Financial Statements – Trading, P&L, Balance Sheet',
      'Depreciation, Provisions & Reserves',
      'Bills of Exchange & Bank Reconciliation',
      'Partnership Accounts – Admission, Retirement, Death',
      'Company Accounts – Issue of Shares & Debentures',
      'Analysis of Financial Statements & Ratios',
      'Cash Flow Statement'
    ]
  },
  {
    icon: 'corporate_fare',
    bg: 'bg-secondary-fixed-dim',
    iconColor: 'text-on-secondary-container',
    title: 'Business Studies',
    desc: 'Management principles and marketing strategy.',
    topics: [
      'Principles & Functions of Management',
      'Business Environment & Planning',
      'Organizing, Staffing & Directing',
      'Financial Management & Markets',
      'Marketing Management',
      'Consumer Protection & Entrepreneurship'
    ]
  },
  {
    icon: 'trending_up',
    bg: 'bg-tertiary-fixed-dim',
    iconColor: 'text-on-tertiary-container',
    title: 'Economics',
    desc: 'Micro, Macro, and Global economic trends.',
    topics: [
      'Microeconomics: Demand & Supply',
      'Macroeconomics: National Income',
      'Money & Banking',
      'Income & Employment Determination',
      'Government Budget & Economy',
      'Balance of Payments',
      'Development Experience of India'
    ]
  },
];

function StreamCard({ icon, bg, iconColor, title, desc, topics }) {
  return (
    <div className="flip-card w-full h-[420px] overflow-visible">
      <div className="flip-animate relative w-full h-full">
        {/* Front */}
        <div 
          className="absolute inset-0 clay-card p-10 pb-14 rounded-xl flex flex-col items-start backface-hidden"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className={`w-16 h-16 rounded-lg ${bg} mb-8 flex items-center justify-center clay-icon`}>
            <span className={`material-symbols-outlined ${iconColor} text-3xl`}>{icon}</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-on-surface-variant leading-relaxed flex-1">{desc}</p>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 clay-card p-10 pb-14 rounded-xl flex flex-col items-start backface-hidden"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <h3 className="text-xl font-bold text-on-surface mb-4 border-b pb-2 w-full">{title} Topics</h3>
          <ul 
            className="space-y-2 overflow-y-auto w-full custom-scrollbar pr-2 flex-1"
            data-lenis-prevent
          >
            {topics.map((topic, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed">
                <span className="text-tertiary font-bold mt-0.5 text-xs">✓</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function SeniorSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-surface" id="seniors">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-32">
          {/* Science Stream */}
          <div>
            <div className="mb-12">
              <span className="label-md text-tertiary tracking-[0.15em] font-bold uppercase mb-3 block">
                Class 11-12 Focus
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-4">
                Science Stream
              </h2>
              <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Advanced concepts and rigorous preparation for engineering and medical aspirations with a structured modular curriculum.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {scienceSubjects.map((s) => <StreamCard key={s.title} {...s} />)}
            </div>
          </div>

          {/* Commerce Stream */}
          <div>
            <div className="mb-12 text-right">
              <span className="label-md text-tertiary tracking-[0.15em] font-bold uppercase mb-3 block">
                Professional Path
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-4">
                Commerce Stream
              </h2>
              <p className="text-lg text-on-surface-variant ml-auto max-w-2xl leading-relaxed">
                Building the foundation for business, finance, and economic leadership through real-world case studies and analytical training.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {commerceSubjects.map((s) => <StreamCard key={s.title} {...s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
