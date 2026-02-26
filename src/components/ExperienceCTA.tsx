import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperienceCTA = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] overflow-hidden bg-card border border-black/5 shadow-premium p-10 md:p-20 text-center flex flex-col items-center justify-center min-h-[400px]"
                >
                    {/* Inner subtle glow */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black tracking-[0.4em] uppercase mb-8"
                    >
                        <Sparkles className="w-4 h-4" /> Interactive
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tighter">
                        Experience the <br className="md:hidden" />
                        <span className="gold-gradient-text italic font-normal">Craft in 3D</span>
                    </h2>

                    <p className="text-foreground/50 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12">
                        Immerse yourself in our meticulous design process. Discover the precision and artistry behind every stitch in our cinematic 3D showcase.
                    </p>

                    <Link
                        to="/experience"
                        className="group relative inline-flex items-center gap-6 px-10 py-5 bg-foreground text-background rounded-full overflow-hidden transition-all hover:pr-12 shadow-2xl"
                    >
                        <span className="relative z-10 font-bold tracking-widest uppercase text-xs md:text-sm">Enter Experience</span>
                        <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceCTA;
