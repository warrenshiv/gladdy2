import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'For Customers': [
      'How to Order',
      'Track Your Order',
      'Payment Methods',
      'Delivery Areas',
      'Customer Support',
      'Returns & Refunds'
    ],
    'For Vendors': [
      'Become a Vendor',
      'Vendor Dashboard',
      'Commission Rates',
      'Marketing Support',
      'Vendor Guidelines',
      'Success Stories'
    ],
    'Company': [
      'About Gladdy',
      'Our Mission',
      'Careers',
      'Press Kit',
      'Blog',
      'Contact Us'
    ],
    'Legal': [
      'Terms of Service',
      'Privacy Policy',
      'Cookie Policy',
      'Vendor Agreement',
      'Dispute Resolution',
      'Community Guidelines'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-charcoal via-rich-charcoal to-charcoal text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-white rounded-xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <span className="text-3xl font-heading font-bold bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent">Gladdy</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Sierra Leone's premier multi-service platform connecting businesses and customers 
                across the country. From delivery to marketing, we're building the future of commerce.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-gray-300 font-medium">Freetown, Sierra Leone</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-gray-300 font-medium">+232 XX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-gray-300 font-medium">hello@gladdy.sl</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-heading font-bold text-lg mb-6 text-white">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700/50 py-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-3">
                Stay Connected
              </h3>
              <p className="text-gray-300 text-lg">
                Get updates on new features, vendors, and exclusive deals
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700/50 py-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-sm font-medium">
              © {new Date().getFullYear()} Gladdy. All rights reserved. Made with ❤️ in Sierra Leone.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm mr-2 font-medium">Follow us:</span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-orange-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-white/10"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-t border-gray-700/50 py-6 relative z-10">
          <div className="text-center">
            <p className="text-gray-400 text-sm font-medium mb-4">
              Proudly serving Sierra Leone • Supporting local businesses • Building the future of commerce
            </p>
            <div className="flex justify-center items-center space-x-6 text-xs text-gray-500 font-medium">
              <span>🇸🇱 Made in Sierra Leone</span>
              <span>🚚 Same-day delivery</span>
              <span>💳 Secure payments</span>
              <span>📱 Mobile-first</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;