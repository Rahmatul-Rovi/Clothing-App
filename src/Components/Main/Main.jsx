import React from 'react';
// Extension PNG thakle oitai likhun (Case sensitive check korun)
import fron from '../../assets/front.PNG';
import femal from '../../assets/female.PNG';

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

        </div>
    );
}

export default Main;