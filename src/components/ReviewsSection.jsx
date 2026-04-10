import { useEffect, useRef } from 'react';

const baseReviews = [
  {
    quote:
      '"The level of personalization here is unmatched. My daughter\'s confidence in Mathematics improved significantly within just three months."',
    author: 'Ananya Sharma',
    role: 'Parent of Grade 9 Student',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBoKTPk5Bi3IB2h35Y2kPrefmfti1cE-RdiSEK0ZHEysUe4gturqZp5p8gZKfi3daAPwRJJPTF6MBvDKndHxhFirzKeOyHm1Pdvxu6c2WR-Md5A93usXW491xxfvHCY0Bepn25BgW2xSO5GxRsFwpd-YfLvjAFfmFPbHxEBorjaR56pxDsJItEnCp9doU8XP2TL0p0hPonyFdW2b_VV9XNPJtrE1wHZ6uw8amK_srQDXp4UCndA_kBasuoHrfSHiydozD5ZzyBPQ-M',
  },
  {
    quote:
      '"The Commerce faculty makes Economics feel like a story. The practical approach helped me secure a 98% in my board exams."',
    author: 'Rohan Malhotra',
    role: 'Class 12, Commerce',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB42eR383hIuZfjTmOxbzLx2Pobz9b9VGK4yaKbFe-8783rZbvyLAawAeoMqZj-RmcWizKzTkZtZ7F1kgVVXKhRjDlfNWFHHbIT2IbxM5r0xHz2mWq_Qdwf8qLRCqhQ64lncXD_OaKJGOhMprfXsXlDtyo3ltreJdqmBj68YkZt5-PVPKtO5C1QXyE1WcbkJOgMd59lHSJDRauPXdhX3RwqcdjjEeHElfyFlj1wrMzYYSnx3CNLKqh0ZENWvkE-AdQeaD908WvL_T8',
  },
  {
    quote:
      '"Foundation years at Tactile Scholar were the best decision. The 3D icons and visual aids actually made Science fun!"',
    author: 'Saira Verma',
    role: 'Class 10, ICSE Board',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCNFYmyNNNx23xiJRtppeeLhjGExknIhZjk_Fd8ehFPHvMVrVWvRf9wtpmq7GFXpeKjZEB8ZijvdlWnp6ymmE-eV8ljJ36QVrylaSBxVXFfQTC4pvu1VJqS7o-aBfLACd67nqEkx9yDjVt_VW06XRR6d9gSbXJIA5RmQFS5aoUoxwrohgQ5RROLb73Ui_oNYgddhxgZ2a0KgNW3E5gk032-pX1EKEivQfCl33wh9Ea0mgNfbiwm678NksquOGU2Vkmkv1buJoWju2M',
  },
];

// Duplicate 16x for infinite scroll
const reviews = Array.from({ length: 16 }, () => baseReviews).flat();

export default function ReviewsSection() {
  const wrapperRef = useRef(null);
  const currentNudge = useRef(-2000);

  const nudgeMarquee = (dir) => {
    const wrapper = wrapperRef.current;
    const content = wrapper?.querySelector('.marquee-content');
    const card = wrapper?.querySelector('.review-card');
    if (!wrapper || !content || !card) return;

    const cardWidth = card.offsetWidth;
    const gapStr = window.getComputedStyle(content).gap;
    let gap = parseFloat(gapStr) || 0;
    if (gapStr.includes('rem')) gap = parseFloat(gapStr) * 16;

    const step = cardWidth + gap;
    currentNudge.current += dir * step;
    if (currentNudge.current > 0) currentNudge.current = 0;
    if (currentNudge.current < -8000) currentNudge.current = -8000;

    wrapper.style.transform = `translateX(${currentNudge.current}px)`;
  };

  return (
    <section className="py-20 md:py-32 bg-[#f0ece6] overflow-x-hidden max-w-[100vw]" id="reviews">
      <div className="max-w-[1400px] mx-auto mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 px-6 md:px-12">
        {/* Left */}
        <div className="text-center md:text-left w-full md:w-auto">
          <span className="text-orange-500 tracking-widest font-bold uppercase mb-4 block text-[13px]">
            SUCCESS STORIES
          </span>
          <h2
            className="text-[#1a1a2e] tracking-tight text-[clamp(26px,6vw,36px)] lg:text-5xl"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, lineHeight: 1.1 }}
          >
            Voted Most Trusted<br />Coaching Center
          </h2>
        </div>
        {/* Arrow buttons — desktop only */}
        <div className="hidden md:flex gap-4">
          <button
            className="w-12 h-12 rounded-full border border-gray-400 bg-transparent flex items-center justify-center hover:bg-[#1a1a2e] text-[#1a1a2e] hover:text-white transition-all duration-300"
            onClick={() => nudgeMarquee(1)}
          >
            <span className="material-symbols-outlined font-light">arrow_back</span>
          </button>
          <button
            className="w-12 h-12 rounded-full border border-gray-400 bg-transparent flex items-center justify-center hover:bg-[#1a1a2e] text-[#1a1a2e] hover:text-white transition-all duration-300"
            onClick={() => nudgeMarquee(-1)}
          >
            <span className="material-symbols-outlined font-light">arrow_forward</span>
          </button>
        </div>
      </div>

      <div className="marquee-container relative pb-8 max-w-[1600px] mx-auto">
        <div
          className="marquee-nudge-wrapper"
          ref={wrapperRef}
          style={{ transform: 'translateX(-2010px)' }}
        >
          <div className="marquee-content">
            {reviews.map((r, i) => (
              <div key={i} className="review-card">
                <div className="flex gap-[2px] text-[#facc15] mb-6 text-xl">
                  {[...Array(5)].map((_, si) => <span key={si}>★</span>)}
                </div>
                <p
                  className="text-gray-600 italic leading-relaxed mb-8 flex-grow"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {r.quote}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    className="w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] rounded-full object-cover"
                    src={r.avatar}
                    alt="Avatar"
                  />
                  <div>
                    <h4 className="review-author text-[#1a1a2e] text-[17px] leading-snug">{r.author}</h4>
                    <p className="text-[13px] text-gray-500 mt-[2px]">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
