import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-travel-earth text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif font-bold mb-4 relative">
              WANDER TRIBE
              <span className="block absolute -bottom-1 left-0 w-16 h-1 bg-travel-terracotta"></span>
            </h3>
            <p className="text-white/80 mb-6">
              Creating unforgettable journeys and meaningful connections for adventurous souls since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-travel-sand transition-colors hover-lift">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-travel-sand transition-colors hover-lift">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-travel-sand transition-colors hover-lift">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-travel-sand transition-colors hover-lift">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in animate-stagger-1">
            <h4 className="text-lg font-bold mb-4 relative">
              Quick Links
              <span className="block absolute -bottom-1 left-0 w-12 h-0.5 bg-travel-teal"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/trips", label: "Our Trips" },
                { to: "/blog", label: "Travel Blog" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact Us" }
              ].map((link, index) => (
                <li key={link.to} style={{ animationDelay: `${(index + 1) * 100}ms` }} className="animate-fade-in">
                  <Link href={link.to} className="text-white/80 hover:text-travel-sand transition-colors flex items-center sidebar-link">
                    <span className="text-travel-sand mr-2">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="animate-fade-in animate-stagger-2">
            <h4 className="text-lg font-bold mb-4 relative">
              Popular Destinations
              <span className="block absolute -bottom-1 left-0 w-12 h-0.5 bg-travel-teal"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/destinations/switzerland", label: "Switzerland" },
                { to: "/destinations/japan", label: "Japan" },
                { to: "/destinations/costa-rica", label: "Costa Rica" },
                { to: "/destinations/peru", label: "Peru" },
                { to: "/destinations/new-zealand", label: "New Zealand" }
              ].map((destination, index) => (
                <li key={destination.to} style={{ animationDelay: `${(index + 1) * 100}ms` }} className="animate-fade-in">
                  <Link href={destination.to} className="text-white/80 hover:text-travel-sand transition-colors flex items-center sidebar-link">
                    <span className="text-travel-sand mr-2">›</span> {destination.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in animate-stagger-3">
            <h4 className="text-lg font-bold mb-4 relative">
              Contact Us
              <span className="block absolute -bottom-1 left-0 w-12 h-0.5 bg-travel-teal"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 mt-1 text-travel-sand" />
                <span className="text-white/80">
                  123 Adventure Way, Suite 101<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-travel-sand" />
                <a href="tel:+14155552671" className="text-white/80 hover:text-travel-sand transition-colors sidebar-link">
                  (415) 555-2671
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-travel-sand" />
                <a href="mailto:info@wanderlux.com" className="text-white/80 hover:text-travel-sand transition-colors sidebar-link">
                  info@wanderlux.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/20 pt-8 pb-4">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-xl font-bold mb-4">Join Our Newsletter</h4>
            <p className="text-white/80 mb-4">
              Subscribe to receive updates on new destinations, special offers, and travel tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md text-gray-800 flex-1 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-travel-teal"
              />
              <button
                type="submit"
                className="bg-travel-teal hover:bg-travel-teal-light px-6 py-3 rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>© {currentYear} WANDERLUX. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
