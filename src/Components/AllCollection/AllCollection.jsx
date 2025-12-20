import React from 'react';
import jack from '../../assets/Jacked.webp';
import boot from '../../assets/boot.webp';
import sneakers from '../../assets/Sneakers.jpg';
import borkha from '../../assets/Borkha.PNG';
import business from '../../assets/Business.webp';
import { useNavigate } from 'react-router-dom';

const AllCollection = () => {

   const navigate = useNavigate(); 

  const handleBuyNow = (product) => {
  console.log("Sending Product:", product); 
  navigate('/checkout', { state: { product } });
};



  // Combined Data: Male + Female Products
  const allProducts = [
    // --- Womens Collection ---
    { id: 1, name: "Luxe Sneaks", price: "$65.00", tag: "New Arrival", img: sneakers, category: "Women" },
    { id: 2, name: "Chic Wool-Blend Cardigan", price: "$75.00", tag: "Best Seller", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80", category: "Women" },
    { id: 3, name: "Classic Pleated Borkha", price: "$100.00", tag: "Trending", img: borkha, category: "Women" },
    { id: 4, name: "Rounded Executive Blazer", price: "$90.00", tag: "Premium", img: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&q=80", category: "Women" },
    { id: 5, name: "Premium Leather Tote Bag", price: "$50.00", tag: "Luxury", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80", category: "Women" },
    { id: 6, name: "Premium Jacquard Scarf", price: "$80.00", tag: "New", img: jack, category: "Women" },
    { id: 7, name: "Suede Ankle Boots", price: "$50.00", tag: "Limited", img: boot, category: "Women" },
    { id: 8, name: "Minimalist Gray Skirt", price: "$20.00", tag: "Sale", img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?auto=format&fit=crop&q=80", category: "Women" },

    // --- Mens Collection ---
    { id: 9, name: "Premium Cotton T-Shirt", price: "$25.00", tag: "New", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80", category: "Men" },
    { id: 10, name: "Slim Fit Denim Jacket", price: "$85.00", tag: "Sale", img: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&q=80", category: "Men" },
    { id: 11, name: "Urban Street Hoodie", price: "$45.00", tag: "Best Seller", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80", category: "Men" },
    { id: 12, name: "Classic Leather Watch", price: "$120.00", tag: "Luxury", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80", category: "Men" },
    { id: 13, name: "Formal Business Suit", price: "$299.00", tag: "Premium", img: business, category: "Men" },
    { id: 14, name: "Sporty Sneakers", price: "$65.00", tag: "Trending", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80", category: "Men" },
    { id: 15, name: "Casual Linen Shirt", price: "$35.00", tag: "Summer", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80", category: "Men" },
    { id: 16, name: "Outdoor Adventure Bag", price: "$55.00", tag: "New", img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80", category: "Men" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 tracking-tight uppercase">
            All <span className="text-orange-600">Collections</span>
          </h2>
          <div className="h-1.5 w-24 bg-orange-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            Explore our entire range of premium fashion for Men and Women. 
            Quality meets style in every piece.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {allProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col">
              
              {/* Image Section */}
              <div className="relative h-80 w-full overflow-hidden bg-gray-200">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Labels */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-orange-600 text-white text-[10px] font-black px-3 py-1 rounded-md uppercase shadow-lg">
                    {product.tag}
                  </span>
                  <span className="bg-gray-900/80 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase w-fit">
                    {product.category}
                  </span>
                </div>

                {/* Quick Action (Wishlist) */}
                <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-all shadow-md active:scale-90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Details Section */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-gray-900 font-bold text-lg leading-tight group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                </div>
                
                <div className="mt-auto">
                  <p className="text-2xl font-black text-gray-900 mb-5">{product.price}</p>
                  
                  <button onClick={() => handleBuyNow(product)} className="w-full bg-gray-900 text-white py-3.5 rounded-2xl font-bold tracking-widest hover:bg-orange-600 transition-all duration-300 shadow-lg active:scale-95 uppercase text-xs">
                    Buy Now
                  </button>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 bg-gray-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
           <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h3>
              <p className="text-gray-400 mb-8">Our new seasonal collection is arriving soon!</p>
              <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition">
                Notify Me
              </button>
           </div>
           {/* Decorative Circle */}
           <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-600/10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AllCollection;