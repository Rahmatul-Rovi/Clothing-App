import React, { useState } from 'react';
import { Search, ShoppingCart, Laptop, Phone, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white ">
      {/* --- Top Header Section --- */}
      <div className="container mx-auto px-4 py-5 flex flex-wrap items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="p-2.5 border-2 border-orange-500 rounded-xl bg-orange-50 transition-all duration-300 group-hover:bg-orange-100 shadow-sm">
            <Laptop size={32} strokeWidth={2.5} className="text-orange-600" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-serif font-extrabold leading-none text-slate-900 tracking-tight">
              E-Com <span className="text-orange-600">Shop</span>
            </h1>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-5 h-[1.5px] bg-orange-400"></span>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.15em]">
                Shopping Made Easy
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar Area */}
        <div className="flex flex-1 max-w-2xl items-center bg-white border-2 border-gray-100 rounded-full shadow-sm focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100 transition-all duration-300 h-12 overflow-hidden">
          <select className="bg-gray-50 px-6 text-sm font-medium text-gray-600 border-r border-gray-200 outline-none hidden md:block hover:bg-gray-100 cursor-pointer transition-colors">
            <option>All Categories</option>
            <option>Mens</option>
            <option>Womens</option>
            <option>Bags</option>
          </select>

          <input 
            type="text" 
            placeholder="Search for products..." 
            className="flex-1 px-5 outline-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent"
          />

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 h-full flex items-center justify-center transition-colors duration-200 group">
            <Search size={20} className="group-hover:scale-110 transition-transform duration-200" />
          </button>
        </div>

        {/* Call Section */}
        <div className="flex items-center gap-3">
          <div className="w-1 bg-orange-500 h-10 hidden sm:block"></div>
          <div className="bg-[#4b4d52] text-white px-4 py-1">
            <p className="text-[10px] uppercase">Call Us Free</p>
            <p className="font-bold text-lg">+01 123 456 89</p>
          </div>
        </div>
      </div>

      {/* --- Navigation Links Section --- */}
      <div className="border-t border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          <div className="flex items-center flex-1">
            {/* Categories Button */}
            <button className="bg-orange-500 text-white font-bold px-8 py-4 uppercase text-sm tracking-wider">
              Categories
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center ml-10 space-x-8">
              <Link to="/" className="font-semibold text-gray-700 hover:text-orange-500 transition">HOME</Link>
              <Link to="/pages" className="font-semibold text-gray-700 hover:text-orange-500 transition">PAGES</Link>
              <Link to="/allCollection" className="font-semibold text-gray-700 hover:text-orange-500 transition">All Collection</Link>
              <Link to="/men" className="font-semibold text-gray-700 hover:text-orange-500 transition">MEN</Link>
              <Link to="/women" className="font-semibold text-gray-700 hover:text-orange-500 transition">WOMEN</Link>
              <Link to="/about" className="font-semibold text-gray-700 hover:text-orange-500 transition">ABOUT US</Link>
              <Link to="/contactUs" className="font-semibold text-gray-700 hover:text-orange-500 transition">CONTACT US</Link>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center h-full">
            <div className="bg-[#4b4d52] text-white flex items-center gap-3 px-6 py-4">
              <span className="text-sm font-medium">My Cart</span>
            </div>
            <div className="bg-orange-500 text-white px-5 py-4 font-bold">
              2
            </div>

            {/* Mobile Menu Icon */}
            <button
              className="lg:hidden ml-4"
              onClick={() => setOpen(!open)}
            >
              <Menu size={28} className="text-orange-500" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="lg:hidden border-t border-gray-100">
            <nav className="flex flex-col px-6 py-4 space-y-4">
              <Link onClick={() => setOpen(false)} to="/" className="font-semibold text-gray-700 hover:text-orange-500 transition">HOME</Link>
              <Link onClick={() => setOpen(false)} to="/pages" className="font-semibold text-gray-700 hover:text-orange-500 transition">PAGES</Link>
              <Link onClick={() => setOpen(false)} to="/allCollection" className="font-semibold text-gray-700 hover:text-orange-500 transition">All Collection</Link>
              <Link onClick={() => setOpen(false)} to="/men" className="font-semibold text-gray-700 hover:text-orange-500 transition">MEN</Link>
              <Link onClick={() => setOpen(false)} to="/women" className="font-semibold text-gray-700 hover:text-orange-500 transition">WOMEN</Link>
              <Link onClick={() => setOpen(false)} to="/about" className="font-semibold text-gray-700 hover:text-orange-500 transition">ABOUT US</Link>
              <Link onClick={() => setOpen(false)} to="/contactUs" className="font-semibold text-gray-700 hover:text-orange-500 transition">CONTACT US</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
