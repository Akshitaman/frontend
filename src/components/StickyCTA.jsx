import React from 'react';

export default function StickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-lg border-t border-[#924a28]/10 px-4 py-3 z-[100] flex gap-3 shadow-[0_-8px_30px_rgb(0,0,0,0.08)]">
      <a 
        href="tel:+919801955373"
        className="flex-1 flex items-center justify-center gap-2 bg-[#f5ebe4] text-[#924a28] py-3.5 rounded-full font-bold text-sm"
      >
        <span className="material-symbols-outlined text-lg">call</span>
        Call Now
      </a>
      <a 
        href="https://wa.me/919801955373"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#924a28] text-white py-3.5 rounded-full font-bold text-sm shadow-lg shadow-[#924a28]/20"
      >
        <span className="material-symbols-outlined text-lg">chat_bubble</span>
        WhatsApp Us
      </a>
    </div>
  );
}
