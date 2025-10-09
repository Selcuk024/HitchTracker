import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Progress } from './components/ui/progress';
import { MapPin, Clock, Euro, Navigation, Phone, Shield, Share2, AlertTriangle } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [tripTime, setTripTime] = useState(0);
  const [currentFare, setCurrentFare] = useState(12.50);
  const [distance, setDistance] = useState(2.8);
  
  // Simuleer een actieve rit met timers
  useEffect(() => {
    const timer = setInterval(() => {
      setTripTime(prev => prev + 1);
      setCurrentFare(prev => prev + 0.15);
      setDistance(prev => prev + 0.05);
    }, 2000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const estimatedFare = 8.50;
  const fareOverage = currentFare - estimatedFare;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Actieve Rit</span>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            BEVEILIGD
          </Badge>
        </div>
      </div>
      {/* Map Section */}
      <div className="relative h-64 bg-blue-50 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1609444074490-a4eb06f5ebf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXAlMjBuYXZpZ2F0aW9uJTIwcm91dGV8ZW58MXx8fHwxNzU4NzE2Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Route navigatie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/20"></div>
        
        {/* Route overlay info */}
        <div className="absolute top-4 left-4 right-4">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Naar Centrum</span>
                </div>
                <Badge variant="outline">2.3 km resterend</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current location pin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
        </div>
      </div>

      {/* Trip Information */}
      <div className="p-4 space-y-4">
        {/* Live Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-3 text-center">
              <Clock className="w-5 h-5 mx-auto mb-2 text-blue-600" />
              <div className="font-medium">{formatTime(tripTime)}</div>
              <div className="text-xs text-muted-foreground">Tijd</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-3 text-center">
              <MapPin className="w-5 h-5 mx-auto mb-2 text-green-600" />
              <div className="font-medium">{distance.toFixed(1)} km</div>
              <div className="text-xs text-muted-foreground">Afstand</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-3 text-center">
              <Euro className="w-5 h-5 mx-auto mb-2 text-purple-600" />
              <div className="font-medium">€{currentFare.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">Actueel</div>
            </CardContent>
          </Card>
        </div>

        {/* Fare Comparison */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Kosten Vergelijking</span>
              {fareOverage > 2 && (
                <Badge variant="destructive" className="flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  Boven schatting
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Geschatte kosten:</span>
              <span>€{estimatedFare.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Werkelijke kosten:</span>
              <span className="font-medium">€{currentFare.toFixed(2)}</span>
            </div>
            {fareOverage > 0 && (
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-sm text-red-600">Verschil:</span>
                <span className="text-red-600 font-medium">+€{fareOverage.toFixed(2)}</span>
              </div>
            )}
            <Progress 
              value={(currentFare / (estimatedFare * 1.5)) * 100} 
              className="mt-2"
            />
          </CardContent>
        </Card>

        {/* Driver Information */}
        <Card>
          <CardHeader>
            <CardTitle>Chauffeur Informatie</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1642331395578-62fc20996c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXhpJTIwZHJpdmVyJTIwc21hcnRwaG9uZXxlbnwxfHx8fDE3NTg3ODQ5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">Jan de Vries</div>
                <div className="text-sm text-muted-foreground">Licentie: TX-2024-1847</div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.8 (247 ritten)</span>
                </div>
              </div>
              <Badge variant="outline">Geverifieerd</Badge>
            </div>
            <div className="mt-3 pt-3 border-t">
              <div className="text-sm text-muted-foreground">Voertuig: Toyota Prius - AB-123-CD</div>
            </div>
          </CardContent>
        </Card>

        {/* Safety Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Bel Chauffeur
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Deel Rit
          </Button>
        </div>

        {/* Emergency Button */}
        <Button variant="destructive" className="w-full flex items-center gap-2">
          <Shield className="w-4 h-4" />
          NOODMELDING
        </Button>

        {/* Trip Details */}
        <Card>
          <CardHeader>
            <CardTitle>Rit Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Van:</span>
              <span>Schiphol Airport Terminal 3</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Naar:</span>
              <span>Leidseplein 12, Amsterdam</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Gestart:</span>
              <span>14:23</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Geschatte aankomst:</span>
              <span>14:45</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}