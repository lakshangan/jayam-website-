import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import SewingMachine3D from '@/components/SewingMachine3D';
import CustomCursor from '@/components/CustomCursor';

const ExperiencePage = () => {
    useEffect(() => {
        document.title = "Interactive 3D Experience - Jayam Fashion Institute";
    }, []);

    return (
        <main className="bg-slate-950 relative w-full selection:bg-primary/30">
            <CustomCursor />

            {/* Sleek Minimal Navigation overlay, wrapped to prevent GSAP/FramerMotion animation conflicts on refresh */}
            <div id="nav-overlay" className="fixed top-0 left-0 w-full z-50 pointer-events-none">
                <div className="p-6 md:p-10 flex justify-between items-center pointer-events-none w-full animate-fade-in transition-all duration-1000">
                    <Link
                        to="/"
                        className="pointer-events-auto flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 backdrop-blur-md bg-white/5 px-4 py-2 rounded-full border border-white/10"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        <span className="text-sm font-medium tracking-widest uppercase">Back to Home</span>
                    </Link>

                    <div className="hidden md:flex flex-col items-end text-white/50 space-y-1">
                        <p className="text-[10px] uppercase tracking-[0.2em]">Jayam Fashion Institute</p>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-light">Interactive Experience Vol 1.0</p>
                    </div>
                </div>
            </div>

            {/* The cinematic scrolling experience component */}
            <SewingMachine3D />

        </main>
    );
};

export default ExperiencePage;
