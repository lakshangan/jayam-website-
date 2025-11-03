
import { ArrowDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { toast } = useToast();

  const handleAdmissionInfo = () => {
    toast({
      title: "Admission Information",
      description: "Our admission team will contact you shortly with more information.",
      duration: 5000,
    });
    
    // Scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-12 sm:py-16">
        <div className="bg-black/20 p-4 sm:p-6 lg:p-8 backdrop-blur-xl rounded-2xl max-w-4xl mx-auto border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.2)] transform transition-all duration-700 hover:shadow-[0_0_60px_rgba(0,0,0,0.3)]">
          <div className="animate-fade-in overflow-hidden">
            <span className="inline-flex items-center px-3 sm:px-4 py-1.5 bg-white/10 text-white/90 rounded-full text-xs sm:text-sm font-medium mb-4 backdrop-blur-sm border border-white/10">
              <Sparkles className="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-2 text-jayam-gold" /> Elevating Education Since 1995
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in font-display text-shadow">
            Jayam Institute
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-3 animate-fade-in-delay-1 font-display">
            Shaping Futures, Empowering Minds
          </p>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-jayam-gold to-[#ffe195] mx-auto my-4 sm:my-6 animate-fade-in-delay-2 rounded-full"></div>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 animate-fade-in-delay-3 leading-relaxed px-2">
            Jayam Institute is a premier institution dedicated to academic excellence and holistic development. 
            Located in Chennai, we offer a wide range of undergraduate and postgraduate programs across 
            Engineering, Computer Science, Management, Arts, and Science.
          </p>
          
          {/* Enhanced CTA Buttons - Now Functional */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-delay-4 px-2">
            <Link 
              to="/courses" 
              className="relative overflow-hidden group px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#ecd74a] to-[#ffe195] text-[#46256c] font-bold rounded-lg text-sm sm:text-base shadow-[0_4px_12px_rgba(236,215,74,0.5)] hover:shadow-[0_6px_20px_rgba(236,215,74,0.7)] transform transition-all duration-300 hover:-translate-y-1"
              onClick={() => {
                const coursesSection = document.getElementById("courses");
                if (coursesSection) {
                  coursesSection.scrollIntoView({ behavior: "smooth" });
                  return false;
                }
              }}
            >
              <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative">Explore Courses</span>
            </Link>
            <button 
              className="relative overflow-hidden group px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white rounded-lg text-sm sm:text-base hover:bg-white/10 transform transition-all duration-300 hover:-translate-y-1"
              onClick={handleAdmissionInfo}
            >
              <span className="absolute top-0 left-0 w-0 h-full bg-white/10 group-hover:w-full transition-all duration-500"></span>
              <span className="relative">Get Admission Info</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow hidden sm:block">
        <p className="text-xs sm:text-sm mb-2 opacity-80">Scroll Down</p>
        <div className="relative flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8">
          <div className="absolute inset-0 bg-white/10 rounded-full animate-ping"></div>
          <ArrowDown className="relative z-10 animate-pulse" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
