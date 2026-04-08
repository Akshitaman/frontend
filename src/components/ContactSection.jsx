import { useState, useRef, useEffect } from 'react';

const classOptions = ['Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];
const subjectOptions = ['Maths', 'Science', 'English', 'Social Science', 'Physics', 'Chemistry', 'Biology', 'Accountancy', 'Economics', 'Business Studies'];

function CustomSelect({ id, placeholder, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="relative custom-select" ref={ref} style={{ zIndex: open ? 50 : 1 }}>
      <input type="hidden" id={id} value={value} required />
      <button
        type="button"
        className="select-btn flex items-center justify-between w-full px-6 py-4 rounded-lg bg-surface-container-low border hover:border-primary/20 border-transparent focus:ring-2 focus:ring-primary/20 transition-all text-left group"
        onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
      >
        <span className={value ? 'text-on-surface' : 'text-slate-500'}>
          {value || placeholder}
        </span>
        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">
          expand_more
        </span>
      </button>
      {open && (
        <div className="dropdown-menu absolute z-50 w-full mt-2 bg-surface border border-surface-container-highest rounded-xl shadow-2xl">
          <ul className="max-h-60 overflow-y-auto py-2 px-2 no-scrollbar">
            {options.map((opt) => (
              <li
                key={opt}
                className="px-4 py-3 rounded-lg hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors"
                onClick={() => { onChange(opt); setOpen(false); }}
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
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [studentSubject, setStudentSubject] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text =
      `*New Demo Class Enquiry!* 🚀\n\n` +
      `*Parent / Guardian:* ${parentName}\n` +
      `*Student Name:* ${studentName}\n` +
      `*Class:* ${studentClass}\n` +
      `*Subject:* ${studentSubject}\n` +
      `*Phone:* ${phoneNumber}\n` +
      `*WhatsApp:* ${whatsappNumber}\n` +
      (emailAddress ? `*Email:* ${emailAddress}\n` : '') +
      (userMessage ? `\n*Message:*\n${userMessage}` : '');

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919801955373?text=${encodedText}`, '_blank');
  };

  const inputClass =
    'w-full px-6 py-4 rounded-lg bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all';
  const labelClass = 'text-sm font-bold text-on-surface-variant px-2';

  return (
    <section className="px-6 py-24 bg-[#FBEFEF]" id="contact">
      <div className="max-w-5xl mx-auto clay-card p-12 md:p-20 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Start Your Excellence Journey</h2>
          <p className="text-on-surface-variant">
            Fill out the form below and our educational consultants will contact you shortly.
          </p>
        </div>

        <form id="demo-form" className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className={labelClass}>Parent / Guardian Name *</label>
            <input
              id="parent-name"
              required
              className={inputClass}
              placeholder="e.g. Rajesh Kumar"
              type="text"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className={labelClass}>Student Name *</label>
            <input
              id="student-name"
              required
              className={inputClass}
              placeholder="e.g. Aarav Kumar"
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className={labelClass}>Class *</label>
            <CustomSelect
              id="student-class"
              placeholder="Select Class"
              options={classOptions}
              value={studentClass}
              onChange={setStudentClass}
            />
          </div>
          <div className="space-y-2">
            <label className={labelClass}>Subject *</label>
            <CustomSelect
              id="student-subject"
              placeholder="Select Subject"
              options={subjectOptions}
              value={studentSubject}
              onChange={setStudentSubject}
            />
          </div>

          <div className="space-y-2">
            <label className={labelClass}>Phone Number *</label>
            <input
              id="phone-number"
              required
              className={inputClass}
              placeholder="+91 98XXXXXXXX"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className={labelClass}>WhatsApp Number *</label>
            <input
              id="whatsapp-number"
              required
              className={inputClass}
              placeholder="+91 98XXXXXXXX"
              type="tel"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className={labelClass}>Email (Optional)</label>
            <input
              id="email-address"
              className={inputClass}
              placeholder="parent@email.com"
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className={labelClass}>Message (Optional)</label>
            <textarea
              id="user-message"
              className={inputClass}
              placeholder="Any specific requirements or preferred timings..."
              rows="4"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-br from-primary to-primary-container text-on-primary py-5 rounded-full text-lg font-bold shadow-xl shadow-primary/20 hover:opacity-90 transition-all"
            >
              <span className="material-symbols-outlined text-[1.25rem]">send</span>
              Book Free Demo Class
            </button>
            <p className="text-center text-sm text-on-surface-variant mt-6">
              We respect your privacy. Your details will not be shared.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
