import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { 
  Mountain, 
  Bed, 
  Users, 
  Wifi,
  Car, 
  Flame, 
  TreePine,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  X,
  Tv,
  Utensils,
  ShowerHead,
  Home as HomeIcon,
  Target,
  Gamepad2
} from "lucide-react";

import exteriorImg from "@assets/c037f4bc-a302-4835-a410-5e0897966e79_1766761095242.JPG";
import bedroomImg from "@assets/cba22c65-a8f3-4fe4-b3be-b06e09964e14_1766761095242.JPG";
import kitchenImg from "@assets/a34df6d6-96ae-4414-9fc5-86ba3850fcfa_1766761095242.JPG";
import bathroomImg from "@assets/103ba014-624c-43d6-8d04-69f41ee338e2_1766761095241.JPG";

const galleryImages = [
  { src: exteriorImg, alt: "Cottage Olga exterior with mountain backdrop and garden" },
  { src: bedroomImg, alt: "Cozy bedroom with wooden furniture" },
  { src: kitchenImg, alt: "Fully equipped kitchenette" },
  { src: bathroomImg, alt: "Modern bathroom with shower" },
];

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: "", alt: "" });

  const openLightbox = (image: { src: string; alt: string }) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={exteriorImg}
            alt="Cottage Olga exterior"
            className="w-full h-full object-cover object-center"
            data-testid="img-hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
            data-testid="text-hero-title"
          >
            Cottage Olga
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-2 font-medium">
            Your Mountain Retreat in Terchová
          </p>
          <p className="text-lg sm:text-xl text-white/80 mb-8">
            500m from Jánošík Holes • Heart of Malá Fatra
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="backdrop-blur-md bg-white/20 border border-white/30 text-white"
              onClick={() => scrollToSection("contact")}
              data-testid="button-check-availability"
            >
              Check Availability
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="backdrop-blur-md bg-transparent border border-white/50 text-white"
              onClick={() => scrollToSection("accommodation")}
              data-testid="button-view-rooms"
            >
              View Rooms
            </Button>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce"
          aria-label="Scroll down"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-10 h-10" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" data-testid="text-about-title">
                Welcome to Your Mountain Escape
              </h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Located in Biely potok, on the outskirts of Terchová village</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mountain className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Gateway to Malá Fatra mountains with Jánošík Holes just 500m away</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Perfect for hikers and families seeking nature walks</span>
                </li>
                <li className="flex items-start gap-3">
                  <TreePine className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Year-round accommodation with authentic Slovak hospitality</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Bed className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">20+ Beds</p>
                    <p className="text-sm text-muted-foreground">9 rooms total</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mountain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Year-round</p>
                    <p className="text-sm text-muted-foreground">All seasons</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={bedroomImg}
                alt="Cozy cottage interior"
                className="w-full h-auto rounded-xl object-cover aspect-[4/3]"
                data-testid="img-about"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-accommodation-title">
              Our Accommodation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose between our charming original section or the modern new annex, 
              each with separate entrances for your privacy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Original Section Card */}
            <Card className="overflow-visible" data-testid="card-original-section">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <HomeIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Original Section</h3>
                    <p className="text-muted-foreground">Classic mountain charm</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-foreground">
                    <Bed className="w-5 h-5 text-muted-foreground" />
                    <span>3 double + 2 triple bed rooms</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <span>Capacity: up to 12 guests</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <ShowerHead className="w-5 h-5 text-muted-foreground" />
                    <span>Private toilet & shower in each room</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-medium text-foreground mb-3">Shared Facilities:</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-md text-sm text-secondary-foreground">
                      <Utensils className="w-4 h-4" /> Full Kitchen
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-md text-sm text-secondary-foreground">
                      <Flame className="w-4 h-4" /> Fireplace
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-md text-sm text-secondary-foreground">
                      <Tv className="w-4 h-4" /> TV
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New Annex Card */}
            <Card className="overflow-visible" data-testid="card-new-annex">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mountain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">New Annex</h3>
                    <p className="text-muted-foreground">Modern comfort</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-foreground">
                    <Bed className="w-5 h-5 text-muted-foreground" />
                    <span>4 four-bed rooms</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <span>Capacity: up to 16 guests</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <ShowerHead className="w-5 h-5 text-muted-foreground" />
                    <span>Private toilet & shower in each room</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-medium text-foreground mb-3">In Every Room:</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-md text-sm text-secondary-foreground">
                      <Utensils className="w-4 h-4" /> Kitchenette
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-md text-sm text-secondary-foreground">
                      <Tv className="w-4 h-4" /> TV
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-md text-sm text-secondary-foreground">
                      <TreePine className="w-4 h-4" /> Balcony
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-gallery-title">
              Photo Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Take a look at our cozy mountain retreat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(image)}
                className="group relative aspect-square overflow-hidden rounded-lg hover-elevate active-elevate-2"
                data-testid={`button-gallery-image-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white"
            aria-label="Close lightbox"
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            data-testid="img-lightbox"
          />
        </DialogContent>
      </Dialog>

      {/* Location & Activities Section */}
      <section id="location" className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" data-testid="text-location-title">
                Perfect Location for Adventure
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nestled in the Biely potok section of Terchová, our cottage is the ideal base 
                for exploring Malá Fatra National Park. Whether you're a seasoned hiker or 
                prefer leisurely nature walks, the area offers trails for everyone.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Jánošík Holes</h3>
                    <p className="text-muted-foreground">
                      Just 500m away - stunning rock formations and the gateway to Malá Fatra's most beautiful trails
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mountain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Malá Fatra Trails</h3>
                    <p className="text-muted-foreground">
                      From easy family walks to challenging mountain peaks - routes for all skill levels
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TreePine className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Year-Round Activities</h3>
                    <p className="text-muted-foreground">
                      Hiking and nature in summer, skiing and winter sports in the snowy months
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10477.95987657!2d19.0292!3d49.2587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715a3d6c6f5a5e5%3A0x8a7b58e4e4e4e4e4!2sTerchov%C3%A1%2C%20Slovakia!5e0!3m2!1sen!2sus!4v1609459200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cottage Olga location map"
                  data-testid="iframe-map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Amenities Section */}
      <section id="amenities" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-amenities-title">
              Outdoor Amenities
            </h2>
            <p className="text-lg text-muted-foreground">
              Enjoy quality time outdoors with our garden facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center overflow-visible" data-testid="card-amenity-fireplace">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Flame className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">Fireplace Area</h3>
                <p className="text-muted-foreground text-sm">
                  Cozy outdoor seating by the fireplace for evening gatherings
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-visible" data-testid="card-amenity-swing">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">Garden Swing</h3>
                <p className="text-muted-foreground text-sm">
                  Relax and enjoy the mountain views from our garden swing
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-visible" data-testid="card-amenity-games">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Gamepad2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">Board Games</h3>
                <p className="text-muted-foreground text-sm">
                  Darts, badminton and more for outdoor entertainment
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-visible" data-testid="card-amenity-parking">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">Free Parking</h3>
                <p className="text-muted-foreground text-sm">
                  Secure on-site parking available for all guests
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section id="contact" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={exteriorImg}
            alt="Cottage Olga"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" data-testid="text-cta-title">
            Ready for Your Mountain Adventure?
          </h2>
          <p className="text-xl text-white/80 mb-4">
            Experience the beauty of Malá Fatra and Slovak hospitality
          </p>
          <p className="text-lg text-white/70 mb-8">
            Total capacity: 20 beds + 4 extra • Year-round availability
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              data-testid="button-book-now"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="backdrop-blur-md bg-transparent border border-white/50 text-white"
              data-testid="button-contact-us"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Phone className="w-5 h-5" />
              <span data-testid="text-phone">+421 XXX XXX XXX</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Mail className="w-5 h-5" />
              <span data-testid="text-email">info@chalupaolga.sk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Cottage Olga</h3>
              <p className="text-muted-foreground mb-4">
                Year-round mountain accommodation in the heart of Malá Fatra, Slovakia.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Terchová, Biely potok, Slovakia</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <nav className="space-y-2">
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="block text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -mx-2 rounded"
                  data-testid="link-footer-about"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection("accommodation")} 
                  className="block text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -mx-2 rounded"
                  data-testid="link-footer-accommodation"
                >
                  Accommodation
                </button>
                <button 
                  onClick={() => scrollToSection("gallery")} 
                  className="block text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -mx-2 rounded"
                  data-testid="link-footer-gallery"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="block text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -mx-2 rounded"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </nav>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+421 XXX XXX XXX</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>info@chalupaolga.sk</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p data-testid="text-copyright">© {new Date().getFullYear()} Cottage Olga. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
