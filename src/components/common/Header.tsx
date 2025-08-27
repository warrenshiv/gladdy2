import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-premium" : "bg-white/95 backdrop-blur-md border-b border-white/20"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-2xl font-heading font-bold text-gradient">
              Gladdy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#services"
              className="text-rich-charcoal hover:text-orange-500 transition-colors font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#how-it-works"
              className="text-rich-charcoal hover:text-orange-500 transition-colors font-medium relative group"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#vendors"
              className="text-rich-charcoal hover:text-orange-500 transition-colors font-medium relative group"
            >
              Vendors
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#coverage"
              className="text-rich-charcoal hover:text-orange-500 transition-colors font-medium relative group"
            >
              Coverage
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-rich-charcoal hover:text-orange-500 transition-colors font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-rich-charcoal hover:text-orange-500 transition-colors rounded-lg hover:bg-orange-50">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-rich-charcoal hover:text-orange-500 transition-colors relative rounded-lg hover:bg-orange-50">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                3
              </span>
            </button>
            <button className="p-2 text-rich-charcoal hover:text-orange-500 transition-colors rounded-lg hover:bg-orange-50">
              <User className="w-5 h-5" />
            </button>
            <Link to="/auth/login" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 text-sm">Sign In</Link>
            <Link to="/auth/jumia" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm">Join Now</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50">
            <nav className="py-4 space-y-4">
              <a
                href="#services"
                className="block px-4 py-2 text-rich-charcoal hover:text-orange-500 transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#how-it-works"
                className="block px-4 py-2 text-charcoal hover:text-orange-500 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#vendors"
                className="block px-4 py-2 text-charcoal hover:text-orange-500 transition-colors"
              >
                Vendors
              </a>
              <a
                href="#coverage"
                className="block px-4 py-2 text-charcoal hover:text-orange-500 transition-colors"
              >
                Coverage
              </a>
              <a
                href="#about"
                className="block px-4 py-2 text-charcoal hover:text-orange-500 transition-colors"
              >
                About
              </a>
              <div className="px-4 pt-4 border-t border-gray-200 space-y-2">
                <Link to="/auth/login" className="w-full btn-outline text-sm">Sign In</Link>
                <Link to="/auth/jumia" className="w-full btn-primary text-sm">Join Now</Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;