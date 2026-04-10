export default function DirectContactSection({ onClose }) {
  return (
    <section className="px-6 py-10 bg-[#FBEFEF]" id="direct-contact">
      <div 
        className="max-w-xl mx-auto p-8 rounded-3xl bg-white border border-[#924a28]/10 shadow-xl shadow-[#924a28]/05 direct-contact-card relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-[#a6968f] hover:text-[#924a28] transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-[#54433c]">Direct Contact</h2>
          <p className="text-[#85736c] font-medium mt-1">Reach out to us directly for quick enquiries.</p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Phone */}
          <a 
            href="tel:+919801955373"
            className="flex items-center gap-6 p-4 rounded-2xl bg-[#f5ebe4]/30 hover:bg-[#f5ebe4] transition-all border border-transparent hover:border-[#924a28]/20 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#924a28]/10 flex items-center justify-center text-[#924a28] group-hover:bg-[#924a28] group-hover:text-white transition-all">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <p className="text-xs font-bold text-[#a6968f] uppercase tracking-widest mb-0.5">Call Us</p>
              <p className="text-lg font-bold text-[#3b2d28]">+91 9801955373</p>
            </div>
          </a>

          {/* Email */}
          <a 
            href="mailto:s.shaharyarkhan@gmail.com"
            className="flex items-center gap-6 p-4 rounded-2xl bg-[#f5ebe4]/30 hover:bg-[#f5ebe4] transition-all border border-transparent hover:border-[#924a28]/20 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#924a28]/10 flex items-center justify-center text-[#924a28] group-hover:bg-[#924a28] group-hover:text-white transition-all">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p className="text-xs font-bold text-[#a6968f] uppercase tracking-widest mb-0.5">Email Us</p>
              <p className="text-lg font-bold text-[#3b2d28]">s.shaharyarkhan@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
