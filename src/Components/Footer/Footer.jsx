import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Laptop } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-white">
              <div className="p-1.5 border-2 border-orange-500 rounded-lg bg-orange-500/10">
                <Laptop size={24} strokeWidth={2.5} className="text-orange-500" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold leading-none">E-Com Shop</h2>
                <p className="text-[10px] text-orange-500 uppercase tracking-widest mt-1">Shopping Made Easy</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              The best destination for modern fashion and premium accessories. We bring you the latest trends with unmatched quality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider border-b-2 border-orange-600 w-fit pb-1">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">All Categories</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Latest News</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider border-b-2 border-orange-600 w-fit pb-1">
              Policy Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Return & Refund</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider border-b-2 border-orange-600 w-fit pb-1">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-500 shrink-0" />
                <span>123 Fashion Street, Sector 7, <br /> Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-orange-500 shrink-0" />
                <span>+01 123 456 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-orange-500 shrink-0" />
                <span>support@ecomshop.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Payment Methods */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            © 2025 <span className="text-orange-500 font-bold">E-Com Shop</span>. All Rights Reserved.
          </p>
          <div className="flex gap-4 items-center">
  {/* Shob class bad diye shudhu size thik rakha hoyeche */}
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
    alt="Visa" 
    className="h-6 w-auto" 
  />
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
    alt="Mastercard" 
    className="h-8 w-auto" 
  />
 <img 
    src="https://www.logo.wine/a/logo/BKash/BKash-Logo.wine.svg" 
    alt="bKash" 
    className="h-12 w-auto object-contain mt-1" 
  />
</div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;