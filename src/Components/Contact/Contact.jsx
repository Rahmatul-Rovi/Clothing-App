import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white font-sans"
    >
      {/* Hero Header with 3D Depth */}
      <div className="bg-gray-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl font-black text-white uppercase tracking-tighter"
          >
            Get In <span className="text-orange-600 drop-shadow-2xl">Touch</span>
          </motion.h1>
          <p className="mt-6 text-xl text-gray-400 max-w-xl mx-auto font-medium">
            Have a question or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left Side: Contact Info with Staggered Fade */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl font-black text-gray-900 uppercase">Contact Information</h2>
              <div className="h-1.5 w-20 bg-orange-600 mt-4 rounded-full"></div>
            </div>

            <div className="space-y-10">
              {[
                { title: "Our Office", detail: "123 Fashion Street, Sector 7, Uttara, Dhaka", icon: "📍" },
                { title: "Phone Number", detail: "+880 1234 567 890", icon: "📞" },
                { title: "Email Address", detail: "support@yourbrand.com", icon: "✉️" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 15 }}
                  className="flex items-center space-x-6 group cursor-default"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-50 text-3xl flex items-center justify-center rounded-2xl shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-gray-500 text-lg">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: 3D Animated Form Card */}
          {/* Right Side: 3D Animated Form Card */}
          <motion.div
            initial={{ rotateY: 20, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ perspective: 1000, rotateX: 2 }}
            className="bg-white p-10 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">First Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-gray-100 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-gray-100 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">Email Address</label>
                <input
                  type="email"
                  className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-gray-100 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-gray-100 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-gray-900 transition-all duration-500 shadow-xl shadow-orange-200"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;