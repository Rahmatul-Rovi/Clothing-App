import React from 'react';
import male from '../../assets/malesection.jpg';
import female from '../../assets/femalesection.jpeg';
import bag from '../../assets/bag.jpg';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    { id: 1, title: "Fashion for Men", image: male }, // image path ekhane hobe
    { id: 2, title: "Women Collection", image: female },
    { id: 3, title: "Exclusive Bags", image: bag },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Featured Categories
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mt-4"></div>
        </div>

        {/* Responsive Flexbox Container */}
        <div className="flex flex-wrap -mx-4">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            >
              {/* Card Design */}
              <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2">
                
                <div className="w-full h-[400px] bg-gray-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-gray-400 italic">Image Placeholder</span>
                  )}
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>

                {/* Content over Image */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">
                    {product.title}
                  </h3>
                 <Link to="/allCollection"> <button className="mt-4 text-sm font-bold text-white border-b-2 border-orange-600 pb-1 hover:text-orange-500 transition-colors">
                    SHOP COLLECTION →
                  </button></Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;