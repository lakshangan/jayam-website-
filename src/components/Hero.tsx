
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform-gpu scale-[1.1] animate-ken-burns"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-jayam-blue/90 via-jayam-blue/70 to-jayam-blue/80 backdrop-blur-sm"></div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-jayam-gold/30 rounded-full blur-2xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-jayam-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-jayam-gold/20 rounded-full blur-lg animate-pulse"></div>
      </div>
      
      {/* Hero content with premium styling and animations */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="bg-black/20 p-8 backdrop-blur-xl rounded-2xl max-w-4xl mx-auto border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.2)] transform transition-all duration-700 hover:shadow-[0_0_60px_rgba(0,0,0,0.3)]">
          <div className="animate-fade-in overflow-hidden">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-white/10">
              <Sparkles className="inline-block w-4 h-4 mr-2 text-jayam-gold" /> Elevating Education Since 1995
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in font-display text-shadow">
            Jayam Institute
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-3 animate-fade-in-delay-1 font-display">
            Shaping Futures, Empowering Minds
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-jayam-gold to-[#ffe195] mx-auto my-6 animate-fade-in-delay-2 rounded-full"></div>
          <p className="text-md md:text-lg text-white/90 max-w-3xl mx-auto mb-10 animate-fade-in-delay-3 leading-relaxed">
            Jayam Institute is a premier institution dedicated to academic excellence and holistic development. 
            Located in Chennai, we offer a wide range of undergraduate and postgraduate programs across 
            Engineering, Computer Science, Management, Arts, and Science.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-4">
            <button className="relative overflow-hidden group px-6 py-3 bg-gradient-to-r from-[#ecd74a] to-[#ffe195] text-[#46256c] font-bold rounded-lg shadow-[0_4px_12px_rgba(236,215,74,0.5)] hover:shadow-[0_6px_20px_rgba(236,215,74,0.7)] transform transition-all duration-300 hover:-translate-y-1">
              <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative">Explore Courses</span>
            </button>
            <button className="relative overflow-hidden group px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transform transition-all duration-300 hover:-translate-y-1">
              <span className="absolute top-0 left-0 w-0 h-full bg-white/10 group-hover:w-full transition-all duration-500"></span>
              <span className="relative">Get Admission Info</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
        <p className="text-sm mb-2 opacity-80">Scroll Down</p>
        <div className="relative flex items-center justify-center w-8 h-8">
          <div className="absolute inset-0 bg-white/10 rounded-full animate-ping"></div>
          <ArrowDown className="relative z-10 animate-pulse" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
