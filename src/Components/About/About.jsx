import React from 'react';

const About = () => {
  return (
    <div className="bg-white font-sans">
      {/* 1. Hero Section */}
      <div className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Our <span className="text-orange-600">Story</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            We are more than just a brand; we are a community dedicated to bringing you the finest fashion 
            and lifestyle products. Quality, style, and integrity are at the heart of everything we do.
          </p>
        </div>
      </div>

      {/* 2. Mission & Story Section */}
      <div className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
                alt="Our Workspace"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full -z-10 hidden md:block"></div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Crafting Excellence Since 2015
              </h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600">
                <p>
                  Our journey began with a simple mission: to make premium fashion accessible to everyone. 
                  Over the years, we have grown from a small local startup into a trusted destination for 
                  thousands of fashion enthusiasts.
                </p>
                <p>
                  Every product in our collection is handpicked and undergoes a rigorous quality check. 
                  We believe that fashion is a form of self-expression, and we are here to help you 
                  express yourself with confidence.
                </p>
              </div>
              
              <div className="mt-10">
                <button className="px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-200">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Stats Section (Real Life Usage) */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
            <div className="space-y-2">
              <div className="text-5xl font-extrabold text-orange-500">10k+</div>
              <div className="text-gray-400 font-medium uppercase tracking-widest text-sm">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-extrabold text-orange-500">500+</div>
              <div className="text-gray-400 font-medium uppercase tracking-widest text-sm">Premium Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-extrabold text-orange-500">20+</div>
              <div className="text-gray-400 font-medium uppercase tracking-widest text-sm">Store Outlets</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-extrabold text-orange-500">24/7</div>
              <div className="text-gray-400 font-medium uppercase tracking-widest text-sm">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Core Values Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-[0.2em]">Why Choose Us?</h2>
            <div className="h-1 w-20 bg-orange-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Value 1 */}
            <div className="group p-10 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Authentic Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We source directly from original brands to ensure that you receive 100% genuine products every time.
              </p>
            </div>

            {/* Value 2 */}
            <div className="group p-10 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Shipping</h3>
              <p className="text-gray-600 leading-relaxed">
                Fast, reliable, and trackable shipping services. We bring your favorite styles right to your doorstep.
              </p>
            </div>

            {/* Value 3 */}
            <div className="group p-10 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hassle-Free Return</h3>
              <p className="text-gray-600 leading-relaxed">
                Not satisfied? No problem. Our easy 7-day return policy ensures you can shop with complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;