import React from 'react';
import { Search, ShoppingCart, Laptop, Phone } from 'lucide-react'; // icons-er jonno (npm install lucide-react)

const Navbar = () => {
  return (
    <header className="w-full bg-white">
      {/* --- Top Header Section --- */}
      <div className="container mx-auto px-4 py-5 flex flex-wrap items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="p-2 border-2 border-black rounded-lg">
             <Laptop size={32} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold leading-tight">E-Com Shop</h1>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Shopping Made Easy</p>
          </div>
        </div>

        {/* Search Bar Area */}
        <div className="flex flex-1 max-w-2xl border border-gray-300 h-11">
          <select className="bg-gray-100 px-4 text-sm border-r border-gray-300 outline-none hidden md:block">
            <option>All Categories</option>
          </select>
          <input 
            type="text" 
            placeholder="Search here..." 
            className="flex-1 px-4 outline-none text-sm"
          />
          <button className="bg-black text-white px-5 flex items-center justify-center">
            <Search size={20} />
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

            {/* Nav Menu */}
            <nav className="hidden lg:flex items-center ml-10 space-x-8">
              <a href="#" className="font-semibold text-gray-700 hover:text-orange-500 transition">HOME</a>
              <a href="#" className="font-semibold text-gray-700 hover:text-orange-500 transition">PAGES</a>
              <a href="#" className="font-semibold text-gray-700 hover:text-orange-500 transition">ABOUT US</a>
              <a href="#" className="font-semibold text-gray-700 hover:text-orange-500 transition">MEN</a>
              <a href="#" className="font-semibold text-gray-700 hover:text-orange-500 transition">WOMEN</a>
              <a href="#" className="font-semibold text-gray-700 hover:text-orange-500 transition">CONTACT US</a>
            </nav>
          </div>

          {/* My Cart Button */}
          <div className="flex items-center h-full">
             <div className="bg-[#4b4d52] text-white flex items-center gap-3 px-6 py-4">
                <span className="text-sm font-medium">My Cart</span>
             </div>
             <div className="bg-orange-500 text-white px-5 py-4 font-bold">
                2
             </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;