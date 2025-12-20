import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { useRef } from 'react';

const Checkout = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();

    const handleConfirmOrder = () => {
        // Direct value from the reference
        const fullName = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;

        if (!fullName || !email || !address) {
            Swal.fire({
                title: 'Empty Fields!',
                text: 'Please fill out Name, Email, and Address.',
                icon: 'warning',
                confirmButtonColor: '#ea580c'
            });
            return;
        }

        // Success message
        Swal.fire({
            title: 'Order Successful!',
            text: `Thank you, ${fullName}! Your order is confirmed.`,
            icon: 'success',
            confirmButtonColor: '#111827'
        }).then(() => navigate('/'));
    };
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 text-center">
                <div className="p-10 bg-white rounded-3xl shadow-2xl border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800">No Product Selected!</h2>
                    <button onClick={() => navigate('/')} className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-xl hover:bg-orange-700 transition">Go Home</button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Left side: payment and shippin form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-7 bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 relative overflow-hidden group hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500"
                >
                    {/* Background Soft Glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors"></div>

                    <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tight">
                        Checkout <span className="text-orange-600">Details</span>
                    </h2>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase ml-2">Full Name</label>
                                <input
                                    ref={nameRef}
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full p-4 bg-white border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all shadow-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase ml-2">Email Address</label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full p-4 bg-white border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-600 uppercase ml-2">Shipping Address</label>
                            <textarea
                                rows="3"
                                ref={addressRef}
                                placeholder="Enter address"
                                required
                                className="w-full p-4 bg-white border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all shadow-sm"
                            ></textarea>
                        </div>
                        {/* Confirm Order Button Section */}
                        <div className="pt-8">
                            <button
                                type="button"
                                onClick={handleConfirmOrder}
                                className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-orange-600 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:shadow-orange-600/30 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
                            >
                                <span>Confirm Order</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                        <div className="pt-4">
                            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase">Payment Method</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {['Card', 'Bkash', 'Cash'].map((method) => (
                                    <button
                                        key={method}
                                        type="button"
                                        className="py-4 border-2 border-gray-200 rounded-2xl font-bold text-gray-700 hover:border-orange-600 hover:text-orange-600 transition-all active:scale-95 bg-white shadow-sm"
                                    >
                                        {method}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </form>
                </motion.div>

                {/* Right side: Product card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-5"
                >
                    <div className="bg-gray-900 p-10 rounded-[2.5rem] text-white shadow-[0_25px_60px_rgba(0,0,0,0.3)] relative overflow-hidden">

                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-600 to-transparent opacity-20 rounded-bl-full"></div>

                        <h2 className="text-xl font-bold mb-8 flex justify-between">
                            Order Summary <span>(1 Item)</span>
                        </h2>

                        <div className="relative group mb-8">

                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-72 object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 pointer-events-none"></div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-2xl font-black text-white leading-tight">{product.name}</h3>
                                    <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mt-1">{product.category}</p>
                                </div>
                                <p className="text-3xl font-black text-orange-500">{product.price}</p>
                            </div>

                            <div className="border-t border-white/10 pt-6 mt-6 space-y-3">
                                <div className="flex justify-between text-gray-400 font-medium">
                                    <span>Subtotal</span>
                                    <span>{product.price}</span>
                                </div>
                                <div className="flex justify-between text-gray-400 font-medium">
                                    <span>Delivery Charge</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="flex justify-between text-2xl font-black text-white pt-4 mt-4 border-t border-white/20">
                                    <span>Total Amount</span>
                                    <span className="text-orange-500">{product.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Badge */}
                    <div className="mt-6 flex items-center justify-center gap-3 text-gray-400 text-sm font-medium">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        Secure Checkout Powered by E-Com Shop
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Checkout;