import { motion } from 'framer-motion';

const AccreditationSection = () => {
    const accreditations = [
        {
            title: "Certified by:",
            description: "National Skill Development Corporation (NSDC)"
        },
        {
            title: "Certification:",
            description: "Training Center for tailoring & fashion design"
        },
        {
            title: "Accredited for:",
            description: "Women Empowerment & Skill Development"
        },
        {
            title: "Partners:",
            description: "Skill India, Ministry of Skill Development & Entrepreneurship"
        },
        {
            title: "Certification:",
            description: "Nationally recognized certifications"
        },
        {
            title: "Support:",
            description: "Government skill upgradation schemes"
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden flex justify-center">
            <div className="container-custom relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-16 md:mb-20"
                >
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-3xl md:text-5xl font-bold text-[#4a3875] dark:text-white text-center">
                        <span>Proud to be an</span>
                        <span className="bg-[#f0d061] text-[#4a3875] px-4 py-1.5 md:py-2 inline-block">
                            NSDC Approved Training Centre
                        </span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {accreditations.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card px-8 py-10 rounded-[1.5rem] flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-black/5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
                        >
                            <h3 className="text-[#4a3875] dark:text-white font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed font-medium px-4">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 flex justify-center"
                >
                    <div className="px-8 py-3.5 rounded-full bg-card border border-black/5 flex flex-col md:flex-row items-center gap-2 md:gap-4 shadow-[0_4px_20px_rgb(0,0,0,0.04)] text-sm font-bold text-[#865bc1] dark:text-[#a074df]">
                        <span>
                            Certificate No: <span className="font-medium opacity-80">JC123456 (Sample Only)</span>
                        </span>
                        <span className="hidden md:inline-block opacity-50 text-foreground">•</span>
                        <span>
                            Valid Upto: <span className="font-medium opacity-80">18/Oct/2024</span>
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f0d061]/5 rounded-full blur-[100px] -z-10 pointer-events-none opacity-50" />
        </section>
    );
};

export default AccreditationSection;
