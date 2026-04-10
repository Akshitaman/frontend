import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setLenis } from './utils/lenisInstance';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FoundationSection from './components/FoundationSection';
import SeniorSection from './components/SeniorSection';
import AdvantagesSection from './components/AdvantagesSection';
import ReviewsSection from './components/ReviewsSection';
import DirectContactSection from './components/DirectContactSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [showDirectContact, setShowDirectContact] = useState(false);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      smoothTouch: false,
    });
    setLenis(lenis); // register globally

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);


    // Hero Text Reveal
    const heroText = document.querySelector('.hero-reveal');
    if (heroText) {
      const text = heroText.innerText.trim();
      heroText.innerHTML = '';
      const words = text.split(' ');
      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        const innerSpan = document.createElement('span');
        innerSpan.innerHTML = word;
        innerSpan.style.display = 'inline-block';
        wordSpan.appendChild(innerSpan);
        heroText.appendChild(wordSpan);
        
        // Add a standard breaking space between words for perfect wrap/alignment
        if (index < words.length - 1) {
          heroText.appendChild(document.createTextNode(' '));
        }
      });

      const spansToAnimate = heroText.querySelectorAll('span > span');
      gsap.fromTo(spansToAnimate,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.hero-reveal',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Hero paragraph and buttons fade up
    gsap.fromTo('.hero-reveal ~ p, .hero-reveal ~ div button',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.hero-reveal', start: 'top 80%', toggleActions: 'play none none none' },
      }
    );

    // Floating clay shapes parallax — target ONLY the blob elements, not the bg image
    gsap.to('.hero-blob', {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: 'section.min-h-screen',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Animate section headings
    gsap.utils.toArray('h2, .label-md').forEach((heading) => {
      gsap.fromTo(heading,
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        }
      );
    });

    // Animate specific cards (Subject cards and Advantage cards)
    gsap.utils.toArray('.subject-card, .advantage-card').forEach((card, i) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: (i % 3) * 0.15,
        }
      );
    });

    // Direct Contact Info card
    if (showDirectContact) {
      gsap.fromTo('#direct-contact .direct-contact-card',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: '#direct-contact',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Contact section — entire card fades + slides up at once
    gsap.fromTo('#contact .clay-card',
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 90%', // Reveal slightly earlier for a smoother transition
          toggleActions: 'play none none none',
        },
      }
    );

    // Footer — fades + slides up at once
    gsap.fromTo('footer',
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Enrol Now → scroll to contact
    const navBtns = document.querySelectorAll('nav button');
    navBtns.forEach((btn) => {
      if (btn.innerText.trim().toLowerCase().includes('enrol now')) {
        btn.addEventListener('click', () => lenis.scrollTo('#contact', { offset: -70 }));
      }
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar onContactRequest={() => {
        setShowDirectContact(true);
        // We use a small timeout to ensure the DOM has rendered before scrolling
        setTimeout(() => {
          const lenis = document.querySelector('html').__lenis; // This is a hacky way if setLenis isn't enough, but I have scrollTo imported in utils
          import('./utils/lenisInstance').then(({ scrollTo }) => {
            scrollTo('#direct-contact', { offset: -70 });
          });
        }, 50);
      }} />
      <HeroSection />
      <FoundationSection />
      <SeniorSection />
      <AdvantagesSection />
      <ReviewsSection />
      {showDirectContact && <DirectContactSection onClose={() => setShowDirectContact(false)} />}
      <ContactSection />
      <Footer />
    </div>
  );
}
