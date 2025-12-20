import React from 'react';
import { motion } from 'framer-motion';

const Pages = () => {
  const allPages = [
    { title: "Our Services", desc: "Know about our premium delivery and services", icon: "🚚", path: "/services" },
    { title: "FAQs", desc: "Get instant answers to frequently asked questions", icon: "❓", path: "/faq" },
    { title: "Privacy Policy", desc: "Understand how we protect your personal data", icon: "🛡️", path: "/privacy" },
    { title: "Terms of Service", desc: "Standard rules and guidelines for using our shop", icon: "📝", path: "/terms" },
    { title: "Return Policy", desc: "Easy 7-day return and refund guide for you", icon: "🔄", path: "/returns" },
    { title: "Size Guide", desc: "Find your perfect fit with our detailed chart", icon: "📏", path: "/size-guide" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white min-h-screen py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl font-black text-gray-900 tracking-tight uppercase">
            Quick <span className="text-orange-600 drop-shadow-xl">Links</span>
          </h2>
          <div className="h-1.5 w-24 bg-orange-600 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-gray-500 text-xl max-w-2xl mx-auto font-medium">
            Everything you need to know about our store operations and customer policies.
          </p>
        </motion.div>

        {/* Grid Layout with 3D Interaction */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {allPages.map((page, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                rotateY: 10, 
                rotateX: -5, 
                perspective: 1000,
                y: -10
              }}
              className="group p-10 bg-gray-50 rounded-[2.5rem] border border-transparent hover:border-orange-500/30 hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 text-left relative overflow-hidden"
            >
              {/* Decorative Background Shape */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-100/30 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

              <div className="text-5xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block">
                {page.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3 uppercase tracking-tight">{page.title}</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">{page.desc}</p>
              
              <button className="flex items-center text-orange-600 font-black uppercase text-sm tracking-widest group-hover:gap-4 transition-all">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="mt-28 p-12 lg:p-20 bg-gray-900 rounded-[4rem] text-white relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)]"
        >
          {/* 3D Ambient Light Effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-600/20 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Still need help?</h3>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
              Our dedicated support team is available <span className="text-orange-500 font-bold underline">24/7</span> to assist you with any inquiries or issues.
            </p>
            <motion.button 
              whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(234, 88, 12, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-orange-700 transition shadow-2xl"
            >
              Start Live Chat
            </motion.button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Pages;