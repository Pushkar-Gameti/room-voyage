import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Wifi, Car, Coffee } from 'lucide-react';

interface HotelCardProps {
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
  amenities?: string[];
  available: boolean;
}

const HotelCard = ({ name, location, rating, price, image, amenities = [], available }: HotelCardProps) => {
  return (
    <Card className="overflow-hidden shadow-hotel-card hover:shadow-floating transition-all duration-300 hover:scale-[1.02] border-0">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
            <Star className="w-3 h-3 mr-1 text-luxury fill-luxury" />
            {rating}
          </Badge>
        </div>
        {!available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive">Not Available</Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{name}</h3>
            <p className="text-muted-foreground flex items-center gap-1 mt-1">
              <MapPin className="w-4 h-4" />
              {location}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {amenity === 'wifi' && <Wifi className="w-3 h-3 mr-1" />}
                {amenity === 'parking' && <Car className="w-3 h-3 mr-1" />}
                {amenity === 'breakfast' && <Coffee className="w-3 h-3 mr-1" />}
                {amenity}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-foreground">${price}</p>
              <p className="text-sm text-muted-foreground">per night</p>
            </div>
            <Button 
              variant={available ? "luxury" : "outline"} 
              disabled={!available}
              className="px-8"
            >
              {available ? 'Book Now' : 'Unavailable'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelCard;