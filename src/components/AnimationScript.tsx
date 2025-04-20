
import { useEffect } from 'react';

const AnimationScript = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              
              // Add parallax effect to elements with parallax class
              if (entry.target.classList.contains('parallax')) {
                const handleParallax = () => {
                  const scrolled = window.scrollY;
                  const speed = entry.target.getAttribute('data-speed') || '0.1';
                  const yPos = -(scrolled * parseFloat(speed));
                  // Fix: Cast the element to HTMLElement to access style property
                  (entry.target as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
                };
                
                window.addEventListener('scroll', handleParallax);
                return () => window.removeEventListener('scroll', handleParallax);
              }
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
      });

      return observer;
    };

    const observer = animateOnScroll();

    return () => {
      document.querySelectorAll('.animate-on-scroll, .parallax').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return null;
};

export default AnimationScript;
