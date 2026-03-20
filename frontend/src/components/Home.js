import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, Clock, Star, Menu, X, ChevronRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { salonInfo, services, testimonials, galleryImages, socialLinks } from '../mock';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const renderIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className="w-8 h-8" /> : null;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold" style={{ color: '#61525a' }}>
                Style n Arts
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'services', 'gallery', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium capitalize transition-colors ${
                    activeSection === section ? 'text-[#61525a]' : 'text-[#736c64] hover:text-[#61525a]'
                  }`}
                >
                  {section}
                </button>
              ))}
              <Button
                onClick={() => window.location.href = `tel:${salonInfo.phone}`}
                style={{ backgroundColor: '#61525a' }}
                className="hover:opacity-90 transition-opacity"
              >
                Book Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-4 space-y-3">
              {['home', 'about', 'services', 'gallery', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium capitalize text-[#736c64] hover:text-[#61525a] hover:bg-gray-50 rounded-md transition-colors"
                >
                  {section}
                </button>
              ))}
              <Button
                onClick={() => window.location.href = `tel:${salonInfo.phone}`}
                style={{ backgroundColor: '#61525a' }}
                className="w-full hover:opacity-90 transition-opacity"
              >
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f7f5f2' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 mb-6">
              <Star className="w-5 h-5" style={{ color: '#fad24b', fill: '#fad24b' }} />
              <span className="text-sm font-medium" style={{ color: '#61525a' }}>
                {salonInfo.rating} Rating • {salonInfo.totalReviews}+ Happy Clients
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6" style={{ color: '#1e1919', lineHeight: '1.1' }}>
              HSR Layout's Most Loved
              <span className="block mt-2" style={{ color: '#61525a' }}>Beauty Destination</span>
            </h2>
            
            <p className="text-xl mb-10" style={{ color: '#736c64', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Experience premium beauty services with {salonInfo.yearsInBusiness}+ years of excellence. From stunning makeovers to relaxing spa treatments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => window.location.href = `tel:${salonInfo.phone}`}
                style={{ backgroundColor: '#61525a' }}
                className="text-lg px-8 py-6 hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="text-lg px-8 py-6 border-2 hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#61525a', color: '#61525a' }}
              >
                View Services
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
              About Style n Arts
            </h3>
            <p className="text-xl" style={{ color: '#736c64', maxWidth: '700px', margin: '0 auto' }}>
              Where Beauty Meets Artistry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f7f5f2' }}>
                  <Star className="w-8 h-8" style={{ color: '#fad24b', fill: '#fad24b' }} />
                </div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#61525a' }}>
                  {salonInfo.rating}★
                </div>
                <p style={{ color: '#736c64' }}>Google Rating</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f7f5f2' }}>
                  <LucideIcons.Users className="w-8 h-8" style={{ color: '#61525a' }} />
                </div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#61525a' }}>
                  {salonInfo.totalReviews}+
                </div>
                <p style={{ color: '#736c64' }}>Happy Clients</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f7f5f2' }}>
                  <LucideIcons.Award className="w-8 h-8" style={{ color: '#61525a' }} />
                </div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#61525a' }}>
                  {salonInfo.yearsInBusiness}+
                </div>
                <p style={{ color: '#736c64' }}>Years of Excellence</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed" style={{ color: '#736c64' }}>
              Style n Arts has been the premier destination for women's beauty and wellness in HSR Layout for over {salonInfo.yearsInBusiness} years. 
              Our team of expert stylists and beauticians are dedicated to bringing out your natural beauty with personalized care and attention. 
              From everyday styling to special occasion makeovers, we use only premium products and the latest techniques to ensure you look and feel your absolute best.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f7f5f2' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
              Our Services
            </h3>
            <p className="text-xl" style={{ color: '#736c64' }}>
              Comprehensive beauty solutions for every need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-xl transition-all duration-300 border-2 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#61525a' }}>
                    {renderIcon(service.icon) && React.cloneElement(renderIcon(service.icon), { className: 'w-7 h-7 text-white' })}
                  </div>
                  <CardTitle className="text-2xl" style={{ color: '#1e1919' }}>
                    {service.category}
                  </CardTitle>
                  <CardDescription className="text-base" style={{ color: '#736c64' }}>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="w-4 h-4 mt-1 mr-2 flex-shrink-0" style={{ color: '#61525a' }} />
                        <span className="text-sm" style={{ color: '#736c64' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => window.location.href = `tel:${salonInfo.phone}`}
              style={{ backgroundColor: '#61525a' }}
              className="px-8 py-6 text-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Your Service
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
              Gallery
            </h3>
            <p className="text-xl" style={{ color: '#736c64' }}>
              Witness the transformations and our beautiful salon
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative overflow-hidden rounded-lg aspect-square group">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f7f5f2' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
              What Our Clients Say
            </h3>
            <p className="text-xl" style={{ color: '#736c64' }}>
              Trusted by thousands of happy women
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5" style={{ color: '#fad24b', fill: '#fad24b' }} />
                    ))}
                  </div>
                  <p className="text-base mb-4 leading-relaxed" style={{ color: '#736c64' }}>
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold" style={{ color: '#1e1919' }}>
                        {testimonial.name}
                      </p>
                      <p className="text-sm" style={{ color: '#736c64' }}>
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
              Visit Us
            </h3>
            <p className="text-xl" style={{ color: '#736c64' }}>
              We're here to make you look and feel beautiful
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#f7f5f2' }}>
                      <Phone className="w-6 h-6" style={{ color: '#61525a' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#1e1919' }}>Phone</h4>
                      <a
                        href={`tel:${salonInfo.phone}`}
                        className="text-lg hover:underline"
                        style={{ color: '#61525a' }}
                      >
                        {salonInfo.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#f7f5f2' }}>
                      <MapPin className="w-6 h-6" style={{ color: '#61525a' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#1e1919' }}>Location</h4>
                      <p style={{ color: '#736c64' }}>{salonInfo.location}</p>
                      <a
                        href={salonInfo.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-2 hover:underline"
                        style={{ color: '#61525a' }}
                      >
                        Get Directions
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#f7f5f2' }}>
                      <Clock className="w-6 h-6" style={{ color: '#61525a' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#1e1919' }}>Business Hours</h4>
                      <p style={{ color: '#736c64' }}>{salonInfo.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#f7f5f2' }}>
                      <Mail className="w-6 h-6" style={{ color: '#61525a' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#1e1919' }}>Email</h4>
                      <a
                        href={`mailto:${salonInfo.email}`}
                        className="hover:underline"
                        style={{ color: '#61525a' }}
                      >
                        {salonInfo.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="h-[600px] rounded-lg overflow-hidden border-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8!2d77.6!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Style n Arts Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1e1919' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 text-white">
                Style n Arts
              </h4>
              <p className="text-gray-400 mb-4">
                {salonInfo.tagline}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = LucideIcons[link.icon];
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                      {Icon && <Icon className="w-5 h-5 text-white" />}
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-white">Quick Links</h5>
              <ul className="space-y-2">
                {['home', 'about', 'services', 'gallery', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="text-gray-400 hover:text-white transition-colors capitalize"
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-white">Contact Info</h5>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <a href={`tel:${salonInfo.phone}`} className="hover:text-white transition-colors">
                    {salonInfo.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <a href={`mailto:${salonInfo.email}`} className="hover:text-white transition-colors">
                    {salonInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{salonInfo.location}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Style n Arts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;