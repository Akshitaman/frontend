import { useState, useRef, useEffect } from 'react';

const classOptions = ['Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11 (Science)', 'Class 11 (Commerce)', 'Class 12 (Science)', 'Class 12 (Commerce)'];

const FOUNDATION_SUBJECTS  = ['Maths', 'Science', 'Social Science', 'English'];
const SCIENCE_SUBJECTS     = ['Physics', 'Chemistry', 'Biology'];
const COMMERCE_SUBJECTS    = ['Accountancy', 'Business Studies', 'Economics'];

function getSubjectOptions(cls) {
  if (!cls) return FOUNDATION_SUBJECTS;
  if (cls.includes('Science')) return SCIENCE_SUBJECTS;
  if (cls.includes('Commerce')) return COMMERCE_SUBJECTS;
  return FOUNDATION_SUBJECTS; // Class 5–10
}

function CustomSelect({ id, placeholder, options, value, onChange, onOpenChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const setOpenState = (val) => {
    setOpen(val);
    onOpenChange?.(val);
  };

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpenState(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <input type="hidden" id={id} value={value} required />
      <button
        type="button"
        className="select-btn flex items-center justify-between w-full px-5 py-4 rounded-xl bg-[#f5ebe4]/50 hover:bg-[#f5ebe4] focus:ring-2 focus:ring-[#924a28]/30 transition-all text-left group"
        onClick={(e) => { e.stopPropagation(); setOpenState((o) => !o); }}
      >
        <span className={value ? 'text-[#3b2d28] font-medium' : 'text-[#a6968f] font-medium'}>
          {value || placeholder}
        </span>
        <span className="material-symbols-outlined text-[#a6968f] group-hover:text-[#924a28] transition-colors">
          {open ? 'expand_less' : 'expand_more'}
        </span>
      </button>
      {open && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-[#f5ebe4] rounded-xl shadow-2xl shadow-[#924a28]/10 overflow-hidden">
          <ul className="max-h-52 overflow-y-auto py-2 px-2 dropdown-scroll" data-lenis-prevent>
            {options.map((opt) => (
              <li
                key={opt}
                className="px-4 py-3 rounded-lg text-center hover:bg-[#f5ebe4] hover:text-[#924a28] font-medium text-[#54433c] cursor-pointer transition-colors"
                onClick={() => { onChange(opt); setOpenState(false); }}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function ContactSection() {
  const [studentName, setStudentName]       = useState('');
  const [studentClass, setStudentClass]     = useState('');
  const [studentSubject, setStudentSubject] = useState('');
  const [phoneNumber, setPhoneNumber]       = useState('');
  const [userMessage, setUserMessage]       = useState('');

  const [classOpen, setClassOpen]     = useState(false);
  const [subjectOpen, setSubjectOpen] = useState(false);

  // Reset subject whenever class changes so stale selections don't persist
  const handleClassChange = (cls) => {
    setStudentClass(cls);
    setStudentSubject('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text =
      `*New Demo Class Enquiry!* 🚀\n\n` +
      `*Student Name:* ${studentName}\n` +
      `*Class:* ${studentClass}\n` +
      `*Subject:* ${studentSubject}\n` +
      `*Phone:* ${phoneNumber}\n` +
      (userMessage ? `\n*Message:*\n${userMessage}` : '');

    window.open(`https://wa.me/919801955373?text=${encodeURIComponent(text)}`, '_blank');
  };

  const inputClass =
    'w-full px-5 py-4 rounded-xl bg-[#f5ebe4]/50 border-none focus:ring-2 focus:ring-[#924a28]/30 focus:bg-[#f5ebe4] transition-all text-[#3b2d28] placeholder-[#a6968f] font-medium';
  const labelClass = 'text-sm font-bold text-[#54433c] px-2 mb-1 block';

  return (
    <section className="px-4 py-8 md:py-14 bg-[#FBEFEF]" id="contact">
      <div
        className="max-w-3xl mx-auto my-0 md:my-0 p-6 md:p-12 rounded-3xl bg-white border border-[#924a28]/10 shadow-xl shadow-[#924a28]/05"
      >
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-3 text-[#54433c]">Start Your Excellence Journey</h2>
          <p className="text-sm md:text-lg text-[#85736c] font-medium leading-relaxed">
            Fill out the form below and our educational consultants will contact you shortly.
          </p>
        </div>

        <form id="demo-form" className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>

          {/* Student Name — full width */}
          <div className="md:col-span-2 space-y-1.5 md:space-y-2">
            <label className={labelClass}>Student Name *</label>
            <input
              id="student-name" required className={inputClass}
              placeholder="e.g. Aarav Kumar" type="text"
              value={studentName} onChange={(e) => setStudentName(e.target.value)}
            />
          </div>

          {/* Class */}
          <div className="space-y-1.5 md:space-y-2 relative" style={{ zIndex: classOpen ? 40 : 'auto' }}>
            <label className={labelClass}>Class *</label>
            <CustomSelect
              id="student-class" placeholder="Select Class"
              options={classOptions} value={studentClass}
              onChange={handleClassChange} onOpenChange={setClassOpen}
            />
          </div>

          {/* Subject — options depend on selected class */}
          <div className="space-y-1.5 md:space-y-2 relative" style={{ zIndex: subjectOpen ? 40 : 'auto' }}>
            <label className={labelClass}>Subject *</label>
            <CustomSelect
              id="student-subject" placeholder="Select Subject"
              options={getSubjectOptions(studentClass)} value={studentSubject}
              onChange={setStudentSubject} onOpenChange={setSubjectOpen}
            />
          </div>

          {/* Phone Number — required */}
          <div className="md:col-span-2 space-y-1.5 md:space-y-2">
            <label className={labelClass}>Phone Number *</label>
            <input
              id="phone-number" required className={inputClass}
              placeholder="+91 98XXXXXXXX" type="tel"
              value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {/* Message — full width */}
          <div className="md:col-span-2 space-y-1 md:space-y-1.5">
            <label className={labelClass}>Message (Optional)</label>
            <textarea
              id="user-message" className={`${inputClass} !py-3 md:!py-4`}
              placeholder="Any specific requirements..."
              rows="3"
              value={userMessage} onChange={(e) => setUserMessage(e.target.value)}
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 mt-2 md:mt-4">
            <button
              type="submit"
              className="w-full h-[56px] md:h-auto flex items-center justify-center gap-3 bg-[#924a28] text-[#ffffff] py-3 md:py-4 rounded-full text-base md:text-lg font-bold shadow-xl shadow-[#924a28]/20 hover:opacity-90 transition-all hover:scale-[1.02]"
            >
              <span className="material-symbols-outlined text-[1.1rem] md:text-[1.25rem]">send</span>
              Book Free Demo Class
            </button>
            <p className="text-center text-[11px] md:text-sm text-[#a6968f] mt-3 md:mt-4 font-medium px-4">
              We respect your privacy. Your details will not be shared.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
