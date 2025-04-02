'use client'
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (pathname === "/") {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300  ${isScrolled ? 'bg-travel-earth/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-white">WANDERLUX</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="navbar-item">About</Link>
          <Link href="/trips" className="navbar-item">Trips</Link>
          <Link href="/blog" className="navbar-item">Blog</Link>
          <Link href="/past-trips" className="navbar-item">Past Trips</Link>
          <Link href="/contact" className="navbar-item">Contact</Link>

          <div className="relative">
            <button
              className="navbar-item flex items-center cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 100)}
            >
              More <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                <Link href="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-travel-teal-light/10 hover:text-travel-teal">FAQ</Link>
                <Link href="/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-travel-teal-light/10 hover:text-travel-teal">Gallery</Link>
                <Link href="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-travel-teal-light/10 hover:text-travel-teal">Our Team</Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-travel-earth absolute top-full left-0 w-full shadow-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link href="/about" className="navbar-item">About</Link>
            <Link href="/trips" className="navbar-item">Trips</Link>
            <Link href="/blog" className="navbar-item">Blog</Link>
            <Link href="/past-trips" className="navbar-item">Past Trips</Link>
            <Link href="/contact" className="navbar-item">Contact</Link>
            <Link href="/faq" className="navbar-item">FAQ</Link>
            <Link href="/gallery" className="navbar-item">Gallery</Link>
            <Link href="/team" className="navbar-item">Our Team</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;