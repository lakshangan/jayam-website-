
import { useEffect } from 'react';

const AnimationScript = () => {
  useEffect(() => {
    // Observer for animating elements when they scroll into view
    const animateOnScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      // Observe all elements with the animation class
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        observer.observe(element);
      });

      return observer;
    };

    const observer = animateOnScroll();

    return () => {
      // Clean up the observer when component unmounts
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AnimationScript;
