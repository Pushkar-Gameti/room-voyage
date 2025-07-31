import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import HotelCard from '@/components/HotelCard';
import hotel1 from '@/assets/hotel-1.jpg';
import hotel2 from '@/assets/hotel-2.jpg';
import hotel3 from '@/assets/hotel-3.jpg';

const Index = () => {
  const featuredHotels = [
    {
      name: "Grand Plaza Resort",
      location: "New York, NY",
      rating: 4.8,
      price: 299,
      image: hotel1,
      amenities: ["wifi", "parking", "breakfast"],
      available: true
    },
    {
      name: "Oceanview Boutique",
      location: "Miami, FL", 
      rating: 4.9,
      price: 189,
      image: hotel2,
      amenities: ["wifi", "breakfast"],
      available: true
    },
    {
      name: "Mountain Vista Lodge",
      location: "Denver, CO",
      rating: 4.7,
      price: 159,
      image: hotel3,
      amenities: ["wifi", "parking"],
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Header />
      <Hero />
      
      {/* Search Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="transform -translate-y-8">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Hotels
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover our hand-picked selection of exceptional accommodations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHotels.map((hotel, index) => (
              <HotelCard key={index} {...hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">10K+</h3>
              <p className="text-muted-foreground">Hotels Worldwide</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">50K+</h3>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">100+</h3>
              <p className="text-muted-foreground">Countries</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-premium text-premium-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RoomVoyage</h3>
              <p className="text-premium-foreground/80">
                Your trusted partner for exceptional hotel experiences worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-premium-foreground/80">
                <li><a href="#" className="hover:text-premium-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-premium-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-premium-foreground transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-premium-foreground/80">
                <li><a href="#" className="hover:text-premium-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-premium-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-premium-foreground transition-colors">Booking Help</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-premium-foreground/80">
                <li><a href="#" className="hover:text-premium-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-premium-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-premium-foreground transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-premium-foreground/20 mt-8 pt-8 text-center text-premium-foreground/80">
            <p>&copy; 2024 RoomVoyage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;