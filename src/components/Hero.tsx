import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-hotel.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Find Your Perfect
          <span className="block bg-gradient-luxury bg-clip-text text-transparent">
            Hotel Experience
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Discover exceptional accommodations worldwide with real-time availability and instant booking
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" className="text-lg px-12">
            Start Your Journey
          </Button>
          <Button variant="outline" size="xl" className="text-lg px-12 border-white text-white hover:bg-white hover:text-foreground">
            Explore Destinations
          </Button>
        </div>
        
        <div className="mt-12 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;