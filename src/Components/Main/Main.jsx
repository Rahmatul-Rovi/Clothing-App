import React from 'react';
import fron from '../../assets/front.PNG';
import femal from '../../assets/female.PNG';
import mal from '../../assets/male.PNG';

function Main() {
    return (
        /* container bad diye shudhu w-full use kora hoyeche */
        <div>
            <main className="w-full">
                <div className="w-full">
                    <img
                        src={fron}
                        alt="E-com Front Banner"
                        /* w-full: Pura screen nibe
                           h-auto: Height automatically milbe
                           max-w-none: Konoprokhar width limitation thakbe na
                        */
                        className="w-full h-auto max-w-none object-cover"
                    />
                </div>
            </main>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Background box-ta dark mode-e dark hobe ebong light mode-e white hobe */}
                <div className="max-w-2xl bg-white/40 dark:bg-black/30 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl">

                    {/* Title: Dark mode-e text white hobe */}
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] uppercase tracking-tighter">
                        FASHION <br />
                        <span className="text-orange-600 dark:text-orange-500">FOR MEN</span>
                    </h1>

                    {/* Description: ektu soft color dark mode-e */}
                    <p className="mt-6 text-slate-700 dark:text-gray-200 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
                        That this group would somehow form a family that's the way we all became the
                        Brady Bunch. Love exciting and new. Come aboard were expecting you.
                    </p>

                    {/* Button Section */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <button className="bg-slate-900 dark:bg-white text-white dark:text-black font-bold py-4 px-10 transition-all duration-300 uppercase tracking-widest text-sm hover:bg-orange-600 dark:hover:bg-orange-500 hover:scale-105 active:scale-95 shadow-xl">
                            SHOP NOW
                        </button>

                        <button className="border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold py-4 px-10 transition-all duration-300 uppercase tracking-widest text-sm hover:bg-slate-100 dark:hover:bg-white/10">
                            VIEW LOOKBOOK
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="w-full">
                    <img
                        src={femal}
                        alt="E-com Front Banner"
                        /* w-full: Pura screen nibe
                           h-auto: Height automatically milbe
                           max-w-none: Konoprokhar width limitation thakbe na
                        */
                        className="w-full h-auto max-w-none object-cover"
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-start min-h-[70vh]">
                <div className="max-w-3xl space-y-8">

                    {/* Top Mini Title - Design-ke premium look dey */}
                    <div className="flex items-center gap-3">
                        <span className="h-[2px] w-12 bg-orange-600"></span>
                        <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-600 dark:text-orange-500">
                            New Collection 2025
                        </span>
                    </div>

                    {/* Hero Title - Modern Outline Effect (Hover-e fill hobe) */}
                    <div className="space-y-2">
                        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter text-slate-900 dark:text-white uppercase">
                            Girls <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 drop-shadow-sm">
                                Latest Trend
                            </span>
                        </h1>
                    </div>

                    {/* Description - Ektu beshi readable and clean */}
                    <p className="max-w-md text-lg md:text-xl text-slate-600 dark:text-gray-300 leading-relaxed font-light border-l-4 border-slate-200 dark:border-slate-800 pl-6">
                        That this group would somehow form a family that's the way we all became the
                        Brady Bunch. Love exciting and new. Come aboard were expecting you. Love life's
                        sweetest reward Let it flow it floats back to you!
                    </p>

                    {/* Buttons - Unique Modern Design */}
                    <div className="pt-4 flex flex-col sm:flex-row gap-6">
                        {/* Primary Button */}
                        <button className="relative group overflow-hidden bg-slate-900 dark:bg-orange-600 text-white px-12 py-5 font-bold uppercase tracking-widest text-sm transition-all shadow-2xl hover:shadow-orange-500/20">
                            <span className="relative z-10">Explore Now</span>
                            <div className="absolute inset-0 bg-orange-600 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            {/* Hover-e text color dark mode-e change hobe */}
                            <span className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white dark:text-black font-bold">
                                Explore Now
                            </span>
                        </button>

                        {/* Transparent Button with Underline effect */}
                        <button className="group flex items-center gap-4 text-slate-900 dark:text-white font-bold uppercase tracking-widest text-sm">
                            <span>View Lookbook</span>
                            <div className="w-10 h-10 rounded-full border border-slate-900 dark:border-white flex items-center justify-center group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                                →
                            </div>
                        </button>
                    </div>

                </div>
            </div>

            <div className='w-full'>
                <div className="w-full">
                    <img
                        src={mal}
                        alt="E-com Front Banner"
                        /* w-full: Pura screen nibe
                           h-auto: Height automatically milbe
                           max-w-none: Konoprokhar width limitation thakbe na
                        */
                        className="w-full h-auto max-w-none object-cover"
                    />
                </div>
            </div>

            {/* Product Section  */}

            
        </div>
    );
}

export default Main;