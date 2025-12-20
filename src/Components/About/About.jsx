import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-white font-sans overflow-hidden">
      
      {/* 1. Hero Section - Floating 3D Text Effect */}
      <div className="relative py-28 bg-gradient-to-b from-gray-50 to-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl font-black tracking-tight text-gray-900 sm:text-7xl uppercase">
            Our <span className="text-orange-600 drop-shadow-2xl">Story</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed font-medium">
            "Redefining modern fashion with a touch of elegance and a commitment to quality since 2015."
          </p>
        </motion.div>
      </div>

      {/* 2. Mission Section - 3D Image Hover & Perspective */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div 
              whileHover={{ rotateY: -10, rotateX: 5, perspective: 1000 }}
              className="relative group cursor-crosshair"
            >
              <img
                className="rounded-[3rem] shadow-[30px_30px_60px_rgba(0,0,0,0.1)] w-full h-[550px] object-cover transition-all duration-700"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
                alt="Our Creative Workspace"
              />
              {/* Floating Decorative Frame */}
              <div className="absolute inset-0 border-[12px] border-orange-500/10 rounded-[3rem] translate-x-6 translate-y-6 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"></div>
            </motion.div>
            
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-black text-gray-900 leading-tight uppercase">
                Crafting Excellence <br/> 
                <span className="text-orange-600 font-outline-2">Through Innovation</span>
              </h2>
              <div className="mt-10 space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our journey started with a simple vision: to make premium fashion accessible to everyone globally. 
                  Today, we stand as a symbol of trust for thousands of fashion enthusiasts.
                </p>
                <p>
                  Every piece in our collection is treated as a work of art. We never compromise on 
                  materials, ensuring that style meets durability in every stitch.
                </p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 px-10 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-orange-600 transition-colors shadow-xl"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. Stats Section - 3D Neumorphic Cards */}
      <div className="bg-gray-900 py-24 -skew-y-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 skew-y-2">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              { label: 'Happy Customers', value: '10k+' },
              { label: 'Premium Products', value: '500+' },
              { label: 'Global Outlets', value: '25+' },
              { label: 'Support Rate', value: '99.9%' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -15, scale: 1.05 }}
                className="p-10 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 text-center shadow-2xl"
              >
                <div className="text-5xl font-black text-orange-500 mb-3">{stat.value}</div>
                <div className="text-gray-400 text-xs uppercase tracking-[0.3em] font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 4. Core Values - Interactive 3D Cards */}
      <div className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-[0.4em]">Our Core Values</h2>
            <div className="h-2 w-32 bg-orange-600 mx-auto mt-6 rounded-full shadow-lg shadow-orange-200"></div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {/* Card 1 */}
            <motion.div 
              whileHover={{ rotateY: 15, perspective: 1000 }}
              className="p-12 bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-orange-100 transition-all cursor-pointer"
            >
              <div className="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-orange-200">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-5 uppercase">Authentic</h3>
              <p className="text-gray-500 text-lg leading-relaxed">We source directly from original manufacturers to ensure 100% genuine quality in every package.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ rotateY: 15, perspective: 1000 }}
              className="p-12 bg-gray-900 rounded-[3rem] shadow-2xl transition-all cursor-pointer"
            >
              <div className="w-16 h-16 bg-white text-gray-900 rounded-2xl flex items-center justify-center mb-10 shadow-xl">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-5 uppercase">Fast Global</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Our robust logistics network ensures your favorite styles reach your doorstep anywhere in the world.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ rotateY: 15, perspective: 1000 }}
              className="p-12 bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-orange-100 transition-all cursor-pointer"
            >
              <div className="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-orange-200">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-5 uppercase">Easy Returns</h3>
              <p className="text-gray-500 text-lg leading-relaxed">Not a perfect fit? No worries. Our hassle-free 7-day return policy gives you total peace of mind.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;