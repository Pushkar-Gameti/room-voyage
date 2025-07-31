import { Button } from '@/components/ui/button';
import { Hotel, User, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Hotel className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              RoomVoyage
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Hotels</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Destinations</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Deals</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button variant="premium" size="sm">
              Sign Up
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;