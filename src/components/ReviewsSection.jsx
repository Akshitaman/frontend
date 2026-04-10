import { useEffect, useRef, useState } from 'react';

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
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-8 md:py-32 bg-[#f0ece6] overflow-x-hidden max-w-[100vw]" id="reviews">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center md:text-left mb-8 md:mb-16">
        <span className="text-orange-500 tracking-widest font-bold uppercase mb-2 md:mb-4 block text-[11px] md:text-[13px]">
          SUCCESS STORIES
        </span>
        <h2
          className="text-[#1a1a2e] tracking-tight text-3xl md:text-5xl font-extrabold leading-tight md:leading-[1.1] mb-2 md:mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          What Our Students Say
        </h2>
        <p className="text-[#85736c] text-sm md:text-lg font-medium">
          Trusted by 5000+ students and parents
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-12">
        {baseReviews.map((r, i) => (
          <div 
            key={i} 
            className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-black/5"
          >
            <div className="flex gap-[2px] text-[#facc15] mb-6 text-xl">
              {[...Array(5)].map((_, si) => <span key={si} className="material-symbols-outlined fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
            </div>
            <p
              className="text-gray-600 italic leading-relaxed mb-8 flex-grow text-base"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {r.quote}
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <img
                className="w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] rounded-full object-cover shadow-sm"
                src={r.avatar}
                alt={r.author}
              />
              <div>
                <h4 className="review-author text-[#1a1a2e] text-lg font-bold leading-snug">{r.author}</h4>
                <p className="text-[13px] text-gray-500 mt-[2px] font-medium">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden space-y-3 px-6 pb-6">
        {baseReviews.map((r, i) => (
          <div key={i} className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <div className="flex items-center gap-3">
                <img src={r.avatar} className="w-8 h-8 rounded-full object-cover" alt="" />
                <span className="font-bold text-[#1a1a2e] text-sm">{r.author}</span>
              </div>
              <span className="material-symbols-outlined text-gray-400">
                {openIndex === i ? 'remove' : 'add'}
              </span>
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100 px-5 pb-6' : 'max-h-0 opacity-0 px-5 pb-0'}`}
              style={{ overflow: 'hidden' }}
            >
              <div className="flex gap-[2px] text-[#facc15] mb-3 text-xs">
                {[...Array(5)].map((_, si) => <span key={si}>★</span>)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-4">{r.quote}</p>
              <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">{r.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
