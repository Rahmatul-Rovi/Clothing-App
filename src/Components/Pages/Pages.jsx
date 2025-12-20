import React from 'react';
import { Link } from 'react-router-dom';

const Pages = () => {
  const allPages = [
    { title: "Our Services", desc: "Know about our premium services", icon: "🚚", path: "/services" },
    { title: "FAQs", desc: "Frequently asked questions", icon: "❓", path: "/faq" },
    { title: "Privacy Policy", desc: "How we protect your data", icon: "🛡️", path: "/privacy" },
    { title: "Terms of Service", desc: "Rules of using our shop", icon: "📝", path: "/terms" },
    { title: "Return Policy", desc: "Easy return and refund guide", icon: "🔄", path: "/returns" },
    { title: "Size Guide", desc: "Find your perfect fit", icon: "📏", path: "/size-guide" },
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-black text-gray-900 tracking-tight uppercase">
            Quick <span className="text-orange-600">Links</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Everything you need to know about our store and policies.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPages.map((page, index) => (
            <div 
              key={index} 
              className="group p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-orange-500 hover:bg-white hover:shadow-2xl transition-all duration-300 text-left"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {page.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{page.title}</h3>
              <p className="text-gray-600 mb-6">{page.desc}</p>
              
              <button className="flex items-center text-orange-600 font-bold group-hover:gap-2 transition-all">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-20 p-10 bg-orange-600 rounded-[3rem] text-white">
          <h3 className="text-3xl font-bold mb-4">Still need help?</h3>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto text-lg">
            If you couldn't find what you were looking for, our support team is available 24/7.
          </p>
          <button className="bg-white text-orange-600 px-10 py-4 rounded-2xl font-black hover:bg-gray-100 transition shadow-xl">
            CHAT WITH US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pages;