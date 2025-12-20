import React from 'react';
import jack from '../../assets/Jacked.webp';
import boot from '../../assets/boot.webp';
import sneakers from '../../assets/Sneakers.jpg';
import borkha from '../../assets/Borkha.PNG';

const Womens = () => {
  const products = [
    {
      id: 1,
      name: "Luxe Sneaks",
      price: "$65.00",
      tag: "New Arrival",
      img: sneakers
    },
    {
      id: 2,
      name: "Chic Wool-Blend Cardigan",
      price: "$75.00",
      tag: "Best Seller",
      img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Classic Pleated Skirt",
      price: "$50.00",
      tag: "Trending",
      img: borkha
    },
    {
      id: 4,
      name: "Rounded Executive Blazer",
      price: "$90.00",
      tag: "Premium",
      img: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      name: "Premium Leather Tote Bag",
      price: "$50.00",
      tag: "Luxury",
      img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      name: "Premium Jacquard Scarf",
      price: "$80.00",
      tag: "New",
      img: jack
    },
    {
      id: 7,
      name: "Suede Ankle Boots",
      price: "$50.00",
      tag: "Limited",
      img: boot
    },
    {
      id: 8,
      name: "Minimalist Gray Skirt",
      price: "$20.00",
      tag: "Sale",
      img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
            Women's <span className="text-orange-600">Elegance</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Discover our latest collection of premium and stylish fashion.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
              
              {/* Image Container */}
              <div className="relative h-80 w-full overflow-hidden bg-gray-100">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Tag Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider shadow-md">
                    {product.tag}
                  </span>
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-600 hover:text-red-500 transition-colors shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-orange-600">{product.price}</span>
                  <div className="flex text-yellow-400 text-xs">
                    ★★★★☆
                  </div>
                </div>
                <h3 className="text-gray-800 font-bold text-lg leading-tight h-12 overflow-hidden">
                  {product.name}
                </h3>
                
                {/* Shop Now Button */}
                <button className="mt-6 w-full bg-gray-900 text-white py-3 rounded-xl font-bold tracking-wide hover:bg-orange-600 transition-all duration-300 shadow-lg active:scale-95 uppercase text-sm">
                  Shop Now
                </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Womens;