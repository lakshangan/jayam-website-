
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
      >
        <div className="absolute inset-0 bg-jayam-blue/60"></div>
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in font-display">
          Jayam Institute
        </h1>
        <p className="text-xl md:text-2xl text-white mb-2 animate-fade-in font-display delay-100">
          Shaping Futures, Empowering Minds
        </p>
        <div className="w-24 h-1 bg-jayam-gold mx-auto my-6 animate-fade-in delay-200"></div>
        <p className="text-md md:text-lg text-white/90 max-w-3xl mx-auto mb-10 animate-fade-in delay-300">
          Jayam Institute is a premier institution dedicated to academic excellence and holistic development. 
          Located in Chennai, we offer a wide range of undergraduate and postgraduate programs across 
          Engineering, Computer Science, Management, Arts, and Science.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
          <button className="btn-gold">Explore Courses</button>
          <button className="btn-secondary text-white bg-transparent border-white">Get Admission Info</button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-scroll">
        <p className="text-sm mb-2 opacity-80">Scroll Down</p>
        <ArrowDown className="mx-auto" size={20} />
      </div>
    </div>
  );
};

export default Hero;
