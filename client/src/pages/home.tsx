import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/lib/language-context";
import type { Language } from "@/lib/translations";
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
  Gamepad2,
  Clock,
  Menu,
  Euro,
  Globe
} from "lucide-react";

import exteriorImg from "@assets/c037f4bc-a302-4835-a410-5e0897966e79_1766761095242.JPG";
import bedroomImg from "@assets/cba22c65-a8f3-4fe4-b3be-b06e09964e14_1766761095242.JPG";
import kitchenImg from "@assets/a34df6d6-96ae-4414-9fc5-86ba3850fcfa_1766761095242.JPG";
import bathroomImg from "@assets/103ba014-624c-43d6-8d04-69f41ee338e2_1766761095241.JPG";
import rozsutecImg from "@assets/rozsutec_1766763421265.jpg";

const galleryImages = [
  { src: exteriorImg, alt: "Cottage Olga exterior with mountain backdrop and garden" },
  { src: bedroomImg, alt: "Cozy bedroom with wooden furniture" },
  { src: kitchenImg, alt: "Fully equipped kitchenette" },
  { src: bathroomImg, alt: "Modern bathroom with shower" },
];

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: "", alt: "" });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'sk', label: 'Slovensky', flag: 'SK' },
    { code: 'en', label: 'English', flag: 'EN' },
    { code: 'pl', label: 'Polski', flag: 'PL' },
  ];

  const navItems = [
    { label: t.nav.about, id: "about" },
    { label: t.nav.accommodation, id: "accommodation" },
    { label: t.nav.gallery, id: "gallery" },
    { label: t.nav.location, id: "location" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-serif font-semibold text-foreground tracking-wide italic"
              data-testid="link-navbar-logo"
            >
              Cottage Olga
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md text-sm font-medium"
                  data-testid={`link-navbar-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  data-testid="button-language-switcher"
                >
                  <Globe className="w-5 h-5" />
                </Button>
                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-card border border-border rounded-md shadow-lg z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover-elevate ${
                          language === lang.code ? 'bg-muted' : ''
                        }`}
                        data-testid={`button-lang-${lang.code}`}
                      >
                        <span className="font-medium mr-2">{lang.flag}</span>
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover-elevate active-elevate-2 rounded-md"
                  data-testid={`link-mobile-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={exteriorImg}
            alt="Cottage Olga exterior"
            className="w-full h-full object-cover object-center"
            data-testid="img-hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
            data-testid="text-hero-title"
          >
            {t.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-2 font-medium">
            {t.hero.subtitle}
          </p>
          <p className="text-lg sm:text-xl text-white/80">
            {t.hero.tagline}
          </p>
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
      <section id="about" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" data-testid="text-about-title">
                {t.about.title}
              </h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">{t.about.location}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mountain className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">{t.about.mountains}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">{t.about.hiking}</span>
                </li>
                <li className="flex items-start gap-3">
                  <TreePine className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">{t.about.hospitality}</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Bed className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.about.beds}</p>
                    <p className="text-sm text-muted-foreground">{t.about.rooms}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mountain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.about.yearRound}</p>
                    <p className="text-sm text-muted-foreground">{t.about.allSeasons}</p>
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
      <section id="accommodation" className="min-h-screen flex items-center py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-accommodation-title">
              {t.accommodation.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.accommodation.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Room Types */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">{t.accommodation.roomTypes}</h3>
              <div className="space-y-4">
                <Card className="overflow-visible" data-testid="card-double-room">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bed className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{t.accommodation.doubleRoom}</h4>
                        <p className="text-muted-foreground">{t.accommodation.doubleRoomDesc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-visible" data-testid="card-triple-room">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{t.accommodation.tripleRoom}</h4>
                        <p className="text-muted-foreground">{t.accommodation.tripleRoomDesc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-visible" data-testid="card-quad-room">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <HomeIcon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{t.accommodation.quadRoom}</h4>
                        <p className="text-muted-foreground">{t.accommodation.quadRoomDesc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Facilities & Pricing */}
            <div className="space-y-8">
              {/* Facilities */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{t.accommodation.facilities}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="overflow-visible">
                    <CardContent className="p-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Wifi className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{t.accommodation.wifi}</span>
                    </CardContent>
                  </Card>
                  <Card className="overflow-visible">
                    <CardContent className="p-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Tv className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{t.accommodation.tv}</span>
                    </CardContent>
                  </Card>
                  <Card className="overflow-visible">
                    <CardContent className="p-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <TreePine className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{t.accommodation.balcony}</span>
                    </CardContent>
                  </Card>
                  <Card className="overflow-visible">
                    <CardContent className="p-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <ShowerHead className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{t.accommodation.bathroom}</span>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Pricing */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{t.pricing.title}</h3>
                <Card className="overflow-visible bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-primary" />
                          <span className="font-medium text-foreground">{t.pricing.adults}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xl font-bold text-primary">
                          <Euro className="w-5 h-5" />
                          <span>16</span>
                          <span className="text-sm font-normal text-muted-foreground ml-1">{t.pricing.perNight}</span>
                        </div>
                      </div>
                      <div className="border-t border-border/50" />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-primary" />
                          <span className="font-medium text-foreground">{t.pricing.children}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xl font-bold text-primary">
                          <Euro className="w-5 h-5" />
                          <span>11</span>
                          <span className="text-sm font-normal text-muted-foreground ml-1">{t.pricing.perNight}</span>
                        </div>
                      </div>
                      <div className="border-t border-border/50" />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-primary" />
                          <span className="font-medium text-foreground">{t.pricing.toddlers}</span>
                        </div>
                        <span className="text-xl font-bold text-green-600 dark:text-green-500">{t.pricing.free}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-gallery-title">
              {t.gallery.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.gallery.subtitle}
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
      <section id="location" className="min-h-screen flex items-center py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" data-testid="text-location-title">
                {t.location.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t.location.description}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{t.location.janosikHoles}</h3>
                    <p className="text-muted-foreground">
                      {t.location.janosikHolesDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mountain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{t.location.hiking}</h3>
                    <p className="text-muted-foreground">
                      {t.location.hikingDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TreePine className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{t.location.skiing}</h3>
                    <p className="text-muted-foreground">
                      {t.location.skiingDesc}
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
      <section id="amenities" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-amenities-title">
              {t.amenities.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.amenities.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center overflow-visible" data-testid="card-amenity-fireplace">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Flame className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{t.amenities.fireplace}</h3>
                <p className="text-muted-foreground text-sm">
                  {t.amenities.fireplaceDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-visible" data-testid="card-amenity-swing">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{t.amenities.swing}</h3>
                <p className="text-muted-foreground text-sm">
                  {t.amenities.swingDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-visible" data-testid="card-amenity-games">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Gamepad2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{t.amenities.games}</h3>
                <p className="text-muted-foreground text-sm">
                  {t.amenities.gamesDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-visible" data-testid="card-amenity-parking">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{t.amenities.parking}</h3>
                <p className="text-muted-foreground text-sm">
                  {t.amenities.parkingDesc}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="min-h-screen flex items-center relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={rozsutecImg}
            alt="Rozsutec mountain in Malá Fatra"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" data-testid="text-cta-title">
            {t.contact.title}
          </h2>
          <p className="text-xl text-white/90 mb-2">
            {t.contact.subtitle}
          </p>
          <p className="text-lg text-white/70 mb-8">
            {t.contact.capacity}
          </p>

          {/* Check-in/Check-out Info */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-white/90">
              <Clock className="w-5 h-5" />
              <span>{t.contact.checkIn}</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Clock className="w-5 h-5" />
              <span>{t.contact.checkOut}</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <a 
              href="tel:+421915869535" 
              className="flex items-center justify-center gap-3 text-white text-xl hover-elevate active-elevate-2 px-4 py-2 rounded-lg mx-auto w-fit"
              data-testid="link-phone"
            >
              <Phone className="w-6 h-6" />
              <span data-testid="text-phone">+421 915 869 535</span>
            </a>
            <a 
              href="mailto:info@chalupaolga.sk" 
              className="flex items-center justify-center gap-3 text-white text-xl hover-elevate active-elevate-2 px-4 py-2 rounded-lg mx-auto w-fit"
              data-testid="link-email"
            >
              <Mail className="w-6 h-6" />
              <span data-testid="text-email">info@chalupaolga.sk</span>
            </a>
          </div>

          <Button 
            size="lg"
            asChild
            data-testid="button-contact-us"
          >
            <a href="mailto:info@chalupaolga.sk">
              <Mail className="w-5 h-5 mr-2" />
              {t.contact.contactUs}
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">{t.hero.title}</h3>
              <p className="text-muted-foreground mb-4">
                {t.footer.description}
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Terchová, Biely potok, Slovakia</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{t.footer.quickLinks}</h3>
              <nav className="space-y-2">
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="block text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -mx-2 rounded"
                  data-testid="link-footer-about"
                >
                  {t.nav.about}
                </button>
                <button 
                  onClick={() => scrollToSection("accommodation")} 
                  className="block text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -mx-2 rounded"
                  data-testid="link-footer-accommodation"
                >
                  {t.nav.accommodation}
                </button>
                <button 
                  onClick={() => scrollToSection("gallery")} 
                  className="block text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -mx-2 rounded"
                  data-testid="link-footer-gallery"
                >
                  {t.nav.gallery}
                </button>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="block text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -mx-2 rounded"
                  data-testid="link-footer-contact"
                >
                  {t.nav.contact}
                </button>
              </nav>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{t.footer.contactTitle}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+421 915 869 535</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>info@chalupaolga.sk</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p data-testid="text-copyright">© {new Date().getFullYear()} {t.hero.title}. {t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
