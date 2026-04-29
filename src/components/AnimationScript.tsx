import { useEffect } from 'react';

const AnimationScript = () => {
  useEffect(() => {
    let ticking = false;
    let parallaxElements: HTMLElement[] = [];

    const handleParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          parallaxElements.forEach((el) => {
            if (el.classList.contains('active')) {
              const speed = el.getAttribute('data-speed') || '0.1';
              const yPos = -(scrolled * parseFloat(speed));
              el.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleParallax, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe elements with animation classes
    document.querySelectorAll('.animate-on-scroll, .parallax').forEach((element) => {
      observer.observe(element);
      if (element.classList.contains('parallax')) {
        parallaxElements.push(element as HTMLElement);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleParallax);
      document.querySelectorAll('.animate-on-scroll, .parallax').forEach((element) => {
        observer.unobserve(element);
      });
      parallaxElements = [];
    };
  }, []);

  return null;
};

export default AnimationScript;
