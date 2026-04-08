import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis for smooth scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smooth: true,
    smoothTouch: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Integrate Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

document.addEventListener("DOMContentLoaded", () => {

    // 1. Navbar Slide In
    gsap.from(".glass-nav", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
    });

    // 2. Hero Text Reveal (On Scroll)
    const heroText = document.querySelector('.hero-reveal');
    if (heroText) {
        const text = heroText.innerText.trim();
        heroText.innerHTML = '';

        const words = text.split(" ");
        words.forEach((word, index) => {
            const wordSpan = document.createElement("span");
            wordSpan.innerHTML = word + (index < words.length - 1 ? "&nbsp;" : "");
            wordSpan.style.display = "inline-block";

            const innerSpan = document.createElement("span");
            innerSpan.innerHTML = wordSpan.innerHTML;
            innerSpan.style.display = "inline-block";

            wordSpan.innerHTML = '';
            wordSpan.appendChild(innerSpan);
            heroText.appendChild(wordSpan);
        });

        // Trigger staggered reveal
        const spansToAnimate = heroText.querySelectorAll('span > span');
        gsap.fromTo(spansToAnimate,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".hero-reveal",
                    start: "top 90%", // Triggers mostly immediately on load, but works on scroll too
                    toggleActions: "play none none none"
                }
            }
        );
    }

    // Hero paragraph and buttons fade up
    gsap.fromTo(".hero-reveal ~ p, .hero-reveal ~ div button",
        { y: 30, opacity: 0 },
        {
            y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out",
            scrollTrigger: { trigger: ".hero-reveal", start: "top 80%", toggleActions: "play none none none" }
        }
    );

    // Hero Abstract 3D clay shapes float
    gsap.to(".absolute.blur-3xl", {
        y: -50,
        rotation: 15,
        ease: "none",
        scrollTrigger: {
            trigger: "section.min-h-screen",
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });

    // 3. Scroll Triggered Animation for the Whole Web
    // Animate every section heading
    gsap.utils.toArray('h2, .label-md').forEach((heading) => {
        gsap.fromTo(heading,
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: heading,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            }
        );
    });

    // Animate inner elements inside lists/grids (e.g., Clay cards, Advantages, Reviews)
    gsap.utils.toArray('.grid > div').forEach((card, i) => {
        gsap.fromTo(card,
            { y: 60, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                delay: (i % 3) * 0.15 // simple stagger effect per row
            }
        );
    });

    // Form fade-in
    gsap.fromTo("form",
        { y: 40, opacity: 0 },
        {
            y: 0, opacity: 1, duration: 1,
            scrollTrigger: { trigger: "form", start: "top 85%", toggleActions: "play none none none" }
        }
    );

    // Connect Navbar "Enrol Now" button to scroll to contact section
    const navEnrolBtns = document.querySelectorAll('nav button');
    navEnrolBtns.forEach(btn => {
        if (btn.innerText.trim().toLowerCase().includes('enrol now')) {
            btn.addEventListener('click', () => {
                lenis.scrollTo('#contact');
            });
        }
    });

    // Handle Form submission via WhatsApp
    const demoForm = document.getElementById('demo-form');
    if (demoForm) {
        demoForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const parentName = document.getElementById('parent-name').value.trim();
            const studentName = document.getElementById('student-name').value.trim();
            const studentClass = document.getElementById('student-class').value;
            const studentSubject = document.getElementById('student-subject').value;
            const phoneNumber = document.getElementById('phone-number').value.trim();
            const whatsappNumber = document.getElementById('whatsapp-number').value.trim();
            const emailAddress = document.getElementById('email-address').value.trim();
            const userMessage = document.getElementById('user-message').value.trim();

            const text = `*New Demo Class Enquiry!* 🚀\n\n` +
                         `*Parent / Guardian:* ${parentName}\n` +
                         `*Student Name:* ${studentName}\n` +
                         `*Class:* ${studentClass}\n` +
                         `*Subject:* ${studentSubject}\n` +
                         `*Phone:* ${phoneNumber}\n` +
                         `*WhatsApp:* ${whatsappNumber}\n` +
                         (emailAddress ? `*Email:* ${emailAddress}\n` : '') +
                         (userMessage ? `\n*Message:*\n${userMessage}` : '');

            const encodedText = encodeURIComponent(text);
            const waUrl = `https://wa.me/919801955373?text=${encodedText}`;
            window.open(waUrl, '_blank');
        });
    }

    // Custom Dropdown logic
    const customSelects = document.querySelectorAll('.custom-select');
    customSelects.forEach(select => {
        const btn = select.querySelector('.select-btn');
        const menu = select.querySelector('.dropdown-menu');
        const hiddenInput = select.querySelector('input[type="hidden"]');
        const selectedValueSpan = select.querySelector('.selected-value');
        const options = select.querySelectorAll('li');

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Close other menus first
            document.querySelectorAll('.dropdown-menu').forEach(m => {
                if (m !== menu) {
                    m.classList.add('opacity-0', 'invisible', 'translate-y-2');
                    m.closest('.custom-select').style.zIndex = '1';
                }
            });
            // Toggle current menu
            menu.classList.toggle('opacity-0');
            menu.classList.toggle('invisible');
            menu.classList.toggle('translate-y-2');
            
            // Fix stacking context
            if (menu.classList.contains('opacity-0')) {
                select.style.zIndex = '1';
            } else {
                select.style.zIndex = '50';
            }
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                const value = option.getAttribute('data-value');
                hiddenInput.value = value;
                selectedValueSpan.innerText = value;
                selectedValueSpan.classList.remove('text-slate-500');
                selectedValueSpan.classList.add('text-on-surface');
                
                // close menu
                menu.classList.add('opacity-0', 'invisible', 'translate-y-2');
                select.style.zIndex = '1';
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.add('opacity-0', 'invisible', 'translate-y-2');
            menu.closest('.custom-select').style.zIndex = '1';
        });
    });
});
