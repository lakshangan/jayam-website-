
import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = () => {
    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

        if (prefersReducedMotion || isCoarsePointer) {
            return;
        }

        const lenis = new Lenis({
            duration: 0.85,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1,
        });

        let rafId = 0;

        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return null;
};

export default SmoothScroll;
