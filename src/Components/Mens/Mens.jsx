import React from 'react';

const Mens = () => {
  const products = [
    { id: 1, name: "Premium Cotton T-Shirt", price: "$25.00", tag: "New", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80" },
    { id: 2, name: "Slim Fit Denim Jacket", price: "$85.00", tag: "Sale", img: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&q=80" },
    { id: 3, name: "Urban Street Hoodie", price: "$45.00", tag: "Best Seller", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80" },
    { id: 4, name: "Classic Leather Watch", price: "$120.00", tag: "Luxury", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80" },
    { id: 5, name: "Formal Business Suit", price: "$299.00", tag: "Premium", img: "https://images.unsplash.com/photo-1594932224456-75a779401e28?auto=format&fit=crop&q=80" },
    { id: 6, name: "Sporty Sneakers", price: "$65.00", tag: "Trending", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80" },
    { id: 7, name: "Casual Linen Shirt", price: "$35.00", tag: "Summer", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80" },
    { id: 8, name: "Outdoor Adventure Bag", price: "$55.00", tag: "New", img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80" },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight uppercase">Men's <span className="text-orange-600">Exclusive</span></h2>
            <div className="h-1 w-20 bg-orange-600 mt-2 mx-auto md:mx-0"></div>
          </div>
          <p className="mt-4 md:mt-0 text-gray-500 font-medium">8 Premium items found</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white text-[10px] uppercase font-black px-3 py-1 rounded-sm shadow-lg">{product.tag}</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-800 truncate">{product.name}</h3>
                <p className="text-orange-600 text-xl font-black mt-2">{product.price}</p>
                <div className="mt-6">
                  <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg active:scale-95">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mens;