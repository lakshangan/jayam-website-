
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SwipeIndicator from './SwipeIndicator';

const testimonials = [
    {
        name: "Anjali Menon",
        role: "Boutique Owner, Kochi",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        content: "Jayam Institute didn't just teach me how to stitch; they taught me how to build a brand. Today, my designer boutique is a direct outcome of the confidence I gained here.",
        stats: "Joined 2018 • Placement: Self-Employed"
    },
    {
        name: "Priya Lakshmi",
        role: "Production Lead at Zara",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        content: "The technical precision I learned in the Tailoring Program is far superior to any other course. It gave me the edge I needed to work in international fashion houses.",
        stats: "Joined 2015 • Placement: Zara Hub"
    },
    {
        name: "Meera Nair",
        role: "Independent Designer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        content: "Coming from a non-creative background, I was nervous. The mentors at Jayam made the transition so smooth. I am now launching my first bridal collection.",
        stats: "Joined 2021 • Placement: Award Winner"
    }
];

const StudentShowcase = () => {
    return (
        <section className="section-padding bg-background relative overflow-hidden mask-linear-t mask-linear-b">
            <div className="noise-overlay" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <Star className="w-4 h-4 text-accent fill-accent" />
                            <span className="text-xs uppercase tracking-[0.3em] font-medium text-accent">Alumni Success</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-title-section font-bold text-white mb-0"
                        >
                            Stories of <br />
                            <span className="gold-gradient-text italic font-normal text-glow">Transformation</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 text-sm md:text-base font-light leading-relaxed max-w-sm md:text-right"
                    >
                        Meet the creators who defined their destiny at Jayam Institute. Join a community of over 5,000 successful designers.
                    </motion.p>
                </div>

                {/* Mobile Swipe Hint */}
                <div className="md:hidden">
                    <SwipeIndicator text="Swipe Alumni Stories" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mobile-horizontal-scroll md:mobile-horizontal-scroll-none overflow-x-auto md:overflow-x-visible items-stretch">
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="h-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 1 }}
                                className="premium-card group relative h-full flex flex-col p-8 md:p-10"
                            >
                                <Quote className="absolute top-8 right-8 w-12 h-12 text-accent/5 group-hover:text-accent/20 transition-all duration-700" />

                                <div className="flex items-center gap-5 mb-10">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10 group-hover:border-accent/30">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold tracking-tight text-lg group-hover:text-accent transition-colors">{item.name}</h4>
                                        <p className="text-accent/60 text-[10px] uppercase tracking-widest font-bold">{item.role}</p>
                                    </div>
                                </div>

                                <p className="text-white/60 text-sm md:text-base italic leading-relaxed font-light mb-10 flex-grow relative z-10">
                                    "{item.content}"
                                </p>

                                <div className="pt-8 border-t border-white/5 flex flex-col gap-2mt-auto">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">{item.stats}</span>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} className="text-accent fill-accent" />)}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentShowcase;
