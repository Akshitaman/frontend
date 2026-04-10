import { useState } from 'react';

const mathTopics = [
  'Number Systems & Arithmetic Operations',
  'Algebra – Linear Equations, Quadratics, Polynomials',
  'Geometry – Triangles, Circles, Coordinate Geometry',
  'Mensuration – Area, Volume, Surface Area',
  'Trigonometry – Ratios, Identities, Heights & Distances',
  'Statistics – Mean, Median, Mode, Probability',
];

const scienceTopics = [
  'Physics – Force, Motion, Laws of Newton',
  'Physics – Light, Sound, Electricity & Magnetism',
  'Chemistry – Atoms, Molecules, Chemical Reactions',
  'Chemistry – Acids, Bases, Salts, Periodic Table',
  'Biology – Cell Biology, Life Processes',
  'Biology – Genetics, Evolution, Ecology',
  'Practical & Lab Experiments',
  'Diagram Practice & Numerical Problem Solving',
];

const socialScienceTopics = [
  'History – Ancient India, Medieval India, Modern India',
  'History – French Revolution, Nationalism, World Wars',
  'Geography – Physical Geography, Climate, Resources',
  'Geography – Agriculture, Industries, Map Work',
  'Civics – Indian Constitution, Democracy, Government',
  'Economics – Development, Sectors, Money & Credit',
  'Disaster Management',
  'Answer Writing & Map Pointing Practice',
];

const englishTopics = [
  'Grammar – Tenses, Voice, Narration, Clauses',
  'Vocabulary Building & Word Power',
  'Literature – Prose, Poetry & Drama Analysis',
  'Comprehension – Unseen Passages & Note Making',
  'Essay, Letter, Report & Article Writing',
  'Creative Writing & Story Composition',
  'Spoken English & Communication Skills',
  'Board Exam Formats & Scoring Techniques',
];

const subjects = [
  {
    icon: 'calculate',
    bgClass: 'bg-primary-container',
    iconClass: 'text-on-primary-container',
    title: 'Maths',
    desc: 'Mastering numbers through visual logic and practical puzzles.',
    modalKey: 'math',
  },
  {
    icon: 'biotech',
    bgClass: 'bg-secondary-container',
    iconClass: 'text-on-secondary-container',
    title: 'Science',
    desc: 'Exploring the laws of nature with interactive experiments.',
    modalKey: 'science',
  },
  {
    icon: 'public',
    bgClass: 'bg-tertiary-container',
    iconClass: 'text-on-tertiary-container',
    title: 'Social Science',
    desc: "Understanding our world's past, present, and civic structure.",
    modalKey: 'social',
  },
  {
    icon: 'menu_book',
    bgClass: 'bg-surface-container-highest',
    iconClass: 'text-on-surface',
    title: 'English',
    desc: 'Developing articulate voices and a love for global literature.',
    modalKey: 'english',
  },
];

const modalData = {
  math: {
    icon: 'calculate',
    bgClass: 'bg-primary-container',
    iconClass: 'text-on-primary-container',
    title: 'Mathematics',
    subtitle: 'From foundations to advanced algebra & geometry — Class 5 to 10',
    desc: 'Our Mathematics program builds strong fundamentals and advances to competitive-level problem solving. Students receive weekly tests, formula sheets, and step-by-step problem solving techniques. Classes available for Class 5–10 (CBSE, ICSE & State Board).',
    topics: mathTopics,
  },
  science: {
    icon: 'biotech',
    bgClass: 'bg-secondary-container',
    iconClass: 'text-on-secondary-container',
    title: 'Science',
    subtitle: 'Physics, Chemistry & Biology with practicals — Class 5 to 10',
    desc: 'Complete Science coaching covering Physics, Chemistry and Biology. Emphasis on conceptual clarity, practical experiments, diagram-based learning and NCERT-aligned curriculum. Regular lab practice sessions and model paper solving.',
    topics: scienceTopics,
  },
  social: {
    icon: 'public',
    bgClass: 'bg-tertiary-container',
    iconClass: 'text-on-tertiary-container',
    title: 'Social Science',
    subtitle: 'History, Geography, Civics & Economics — Class 5 to 10',
    desc: 'Comprehensive Social Science coaching covering History, Geography, Political Science and Economics. Map work, timeline practice, and answer-writing skills are emphasized. Students learn structured answers for board exams.',
    topics: socialScienceTopics,
  },
  english: {
    icon: 'menu_book',
    bgClass: 'bg-surface-container-highest',
    iconClass: 'text-on-surface',
    title: 'English',
    subtitle: 'Grammar, literature & communication skills — Class 5 to 12',
    desc: 'English coaching focuses on Grammar, Literature, Writing Skills, and Communication. We cover prose, poetry, drama analysis, essay and letter writing, and spoken English. Students practice comprehension, creative writing and exam-oriented formats.',
    topics: englishTopics,
  },
};

function TopicsModal({ modalKey, onClose }) {
  const data = modalData[modalKey];
  if (!data) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-9 h-9 ${data.bgClass} rounded-lg flex items-center justify-center`}>
            <span className={`material-symbols-outlined ${data.iconClass} text-lg`}>{data.icon}</span>
          </div>
          <h2 className="text-2xl font-extrabold text-on-surface">{data.title}</h2>
        </div>

        <p className="text-sm text-on-surface-variant mb-1">{data.subtitle}</p>

        <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{data.desc}</p>

        {/* Topics */}
        <p className="font-bold text-on-surface mb-3">Topics Covered</p>
        <ul className="space-y-2">
          {data.topics.map((topic) => (
            <li key={topic} className="flex items-start gap-3 text-sm text-on-surface">
              <span className="text-tertiary font-bold mt-0.5">✓</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function FoundationSection() {
  return (
    <>
      <section className="py-20 md:py-32 px-6 bg-[#FBEFEF]" id="subjects">
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
              <div 
                key={s.title} 
                className="flip-card subject-card w-full overflow-visible"
              >
                <div 
                  className="flip-animate relative w-full h-[420px]"
                >
                  {/* Front */}
                  <div 
                    className="absolute inset-0 clay-card p-10 rounded-xl flex flex-col items-start backface-hidden overflow-hidden"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                  >
                    <div className={`w-16 h-16 rounded-lg ${s.bgClass} mb-8 flex items-center justify-center clay-icon`}>
                      <span className={`material-symbols-outlined ${s.iconClass} text-3xl`}>{s.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed flex-1">{s.desc}</p>
                  </div>

                  {/* Back */}
                  <div 
                    className="absolute inset-0 clay-card p-10 rounded-xl flex flex-col items-start backface-hidden overflow-hidden"
                    style={{ 
                      backfaceVisibility: 'hidden', 
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <h3 className="text-xl font-bold text-on-surface mb-4 border-b pb-2 w-full">{s.title} Topics</h3>
                    <ul 
                      className="space-y-2 overflow-y-auto pr-2 custom-scrollbar flex-1"
                      data-lenis-prevent
                    >
                      {modalData[s.modalKey].topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
                          <span className="text-tertiary font-bold mt-0.5 text-xs">✓</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                      <div className="h-10 w-full" /> {/* Bottom spacer for curved corner clearage */}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
