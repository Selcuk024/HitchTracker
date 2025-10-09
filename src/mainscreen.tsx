import {Card, CardContent} from "./components/ui/card";
import {Button} from "./components/ui/button";
import {Input} from "./components/ui/input";
import {MapPin, Shield, Clock, Route, Star, Link} from "lucide-react";

function Mainscreen() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            {/* Header */}
            <header className="px-4 py-6">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 text-white p-2 rounded-lg">
                            <Shield className="w-6 h-6"/>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">HitchTracker</h1>
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
                        <Star className="w-4 h-4"/>
                        Chauffeur
                    </Button>
                </div>
            </header>

            {/* Hero Section */}
            <main className="px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Veilig reizen, altijd
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Track je route in real-time, zie transparante prijzen en reis met vertrouwen door onbekende
                            steden
                        </p>
                    </div>

                    {/* Main Search Card */}
                    <Card className="max-w-2xl mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                        <CardContent className="p-8">
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <div className="relative">
                                        <MapPin
                                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                                        <Input
                                            placeholder="Van waar vertrek je?"
                                            className="pl-12 h-14 text-lg border-gray-200 focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="relative">
                                        <MapPin
                                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5"/>
                                        <Input
                                            placeholder="Waar wil je heen?"
                                            className="pl-12 h-14 text-lg border-gray-200 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                                <a href="/trip">
                                    <Button className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 text-white"
                                            size="lg">

                                        see trips

                                    </Button>
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Features */}
                    <div className="grid md:grid-cols-3 gap-6 mt-16">
                        <div className="text-center p-6">
                            <div
                                className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Route className="w-8 h-8 text-blue-600"/>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Live Route Tracking</h3>
                            <p className="text-gray-600">Volg je route in real-time en zie precies waar je bent</p>
                        </div>

                        <div className="text-center p-6">
                            <div
                                className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-green-600"/>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Veiligheid Eerst</h3>
                            <p className="text-gray-600">Geverifieerde chauffeurs en 24/7 ondersteuning</p>
                        </div>

                        <div className="text-center p-6">
                            <div
                                className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-orange-600"/>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Transparante Prijzen</h3>
                            <p className="text-gray-600">Geen verrassingen - zie je prijs vooraf</p>
                        </div>
                    </div>

                    {/* Trust indicators */}
                    <div className="text-center mt-16 space-y-4">
                        <p className="text-sm text-gray-500">Vertrouwd door duizenden reizigers wereldwijd</p>
                        <div className="flex justify-center items-center gap-8 text-gray-400">
                            <div className="text-2xl font-bold">25k+</div>
                            <div className="text-2xl font-bold">4.8★</div>
                            <div className="text-2xl font-bold">50+ steden</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Mainscreen;