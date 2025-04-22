
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay and ken burns effect */}
      <div 
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center animate-ken-burns"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-jayam-blue/90 via-jayam-blue/70 to-jayam-blue/80 backdrop-blur-sm"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-jayam-gold/30 rounded-full blur-2xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-jayam-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce-slow"></div>
      </div>
      
      {/* Hero content with staggered animations */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="bg-black/20 p-8 backdrop-blur-sm rounded-2xl max-w-4xl mx-auto border border-white/10 shadow-lg transform hover:scale-[1.01] transition-all duration-500">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in font-display text-shadow">
            Jayam Institute
          </h1>
          <p className="text-xl md:text-2xl text-white mb-2 animate-fade-in-delay-1 font-display">
            Shaping Futures, Empowering Minds
          </p>
          <div className="w-24 h-1 bg-jayam-gold mx-auto my-6 animate-fade-in-delay-2"></div>
          <p className="text-md md:text-lg text-white/90 max-w-3xl mx-auto mb-10 animate-fade-in-delay-3">
            Jayam Institute is a premier institution dedicated to academic excellence and holistic development. 
            Located in Chennai, we offer a wide range of undergraduate and postgraduate programs across 
            Engineering, Computer Science, Management, Arts, and Science.
          </p>
          
          {/* CTA Buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-4">
            <button className="btn-gold hover:scale-105 transform transition-all duration-300 shadow-[0_0_15px_rgba(236,215,74,0.5)]">
              Explore Courses
            </button>
            <button className="btn-secondary text-white bg-transparent border-white hover:bg-white/10 transition-all duration-300">
              Get Admission Info
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
        <p className="text-sm mb-2 opacity-80">Scroll Down</p>
        <ArrowDown className="mx-auto animate-pulse" size={20} />
      </div>
    </div>
  );
};

export default Hero;
