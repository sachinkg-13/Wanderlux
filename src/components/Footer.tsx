import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-travel-earth text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">WANDERLUX</h3>
            <p className="text-white/80 mb-4">
              Creating unforgettable journeys and meaningful connections for adventurous souls since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/trips" className="text-white/80 hover:text-white transition-colors">Our Trips</Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors">Travel Blog</Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-bold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/destinations/switzerland" className="text-white/80 hover:text-white transition-colors">Switzerland</Link>
              </li>
              <li>
                <Link href="/destinations/japan" className="text-white/80 hover:text-white transition-colors">Japan</Link>
              </li>
              <li>
                <Link href="/destinations/costa-rica" className="text-white/80 hover:text-white transition-colors">Costa Rica</Link>
              </li>
              <li>
                <Link href="/destinations/peru" className="text-white/80 hover:text-white transition-colors">Peru</Link>
              </li>
              <li>
                <Link href="/destinations/new-zealand" className="text-white/80 hover:text-white transition-colors">New Zealand</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  123 Adventure Way, Suite 101<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+14155552671" className="text-white/80 hover:text-white transition-colors">
                  (415) 555-2671
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@wanderlux.com" className="text-white/80 hover:text-white transition-colors">
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
