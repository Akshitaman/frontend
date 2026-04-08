export default function Footer() {
  return (
    <footer className="w-full bg-[#f3f4f2]">
      {/* Main footer content — 3 columns */}
      <div className="w-full px-6 md:px-16 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {/* Column 1: Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[#475ba2]">school</span>
            <span className="flex items-center gap-2 text-xl font-bold text-slate-800">
              <span>Shaharyar</span>
              <span>Classes</span>
            </span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed mb-3">
            Expert coaching for Class 5–12 students. Building bright futures since 2020.
          </p>
          <p className="text-sm text-slate-500 leading-relaxed mb-3">
            At Shaharyar Classes, we believe every student has the potential to excel. Our experienced educators provide personalised attention, concept-first teaching, and regular assessments to ensure each child grows with confidence.
          </p>
          <p className="text-sm text-slate-500 leading-relaxed">
            Covering foundational subjects for Classes 5–10 and specialised Science &amp; Commerce streams for Classes 11–12, we prepare students not just for exams but for lifelong learning.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3">
            <li><a className="text-sm text-slate-500 hover:text-[#475ba2] transition-colors" href="#">Home</a></li>
            <li><a className="text-sm text-slate-500 hover:text-[#475ba2] transition-colors" href="#subjects">Programs</a></li>
            <li><a className="text-sm text-slate-500 hover:text-[#475ba2] transition-colors" href="#advantages">Why Us</a></li>
            <li><a className="text-sm text-slate-500 hover:text-[#475ba2] transition-colors" href="#reviews">Testimonials</a></li>
            <li><a className="text-sm text-slate-500 hover:text-[#475ba2] transition-colors" href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-slate-500">
              <span className="material-symbols-outlined text-[#475ba2] text-base">location_on</span>
              Bihar, India
            </li>
            <li className="flex items-center gap-2 text-sm text-slate-500">
              <span className="material-symbols-outlined text-[#475ba2] text-base">call</span>
              +91 9801955373
            </li>
            <li className="flex items-center gap-2 text-sm text-slate-500">
              <span className="material-symbols-outlined text-[#475ba2] text-base">mail</span>
              s.shaharyarkhan@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 px-6 md:px-12 py-4 md:py-6 text-center">
        <p className="text-xs text-slate-400">
          © 2020 Shaharyar Classes. All rights reserved. Unauthorized reproduction prohibited.
        </p>
      </div>
    </footer>
  );
}
