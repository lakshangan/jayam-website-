
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, GraduationCap, MessageSquare, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

const MobileBottomNav = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navItems = [
        { icon: Phone, label: 'Call', href: 'tel:+919876543210' },
        { icon: GraduationCap, label: 'Courses', href: '#courses' },
        { icon: MessageSquare, label: 'WhatsApp', href: 'https://wa.me/919876543210' },
    ];

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 left-6 right-6 z-[90] lg:hidden"
                >
                    <div className="bg-[#050508]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-around">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className="flex flex-col items-center gap-1 p-3 px-5 transition-all active:scale-90 group"
                            >
                                <item.icon className="w-5 h-5 text-white/60 group-active:text-accent" />
                                <span className="text-[9px] uppercase tracking-widest font-black text-white/30 group-active:text-accent/60">
                                    {item.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileBottomNav;
