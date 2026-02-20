'use client';
import LeadForm from './LeadForm';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black font-primary">
      
      {/* 1. Optimized Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/video-placeholder.jpg" // High-quality image shown while video loads
          className="w-full h-full object-cover opacity-50 transition-opacity duration-1000"
        >
          {/* Use the public folder path directly */}
          <source src="/hero-drone.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full pt-20">
        
        {/* LEFT: Branding & Hook */}
        <div className="text-white space-y-4 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-yellow-500 text-[10px] tracking-[0.4em] uppercase font-semibold"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            RERA: UPRERAPRJ503189/03/2024
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-wider leading-[0.9]">
              IRISH <br />
              <span className="text-yellow-500 font-extralight tracking-wide">PLATINUM</span>
            </h1>
            
            <p className="mt-6 text-gray-400 text-sm md:text-base tracking-[0.2em] uppercase max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
              Ultra-Luxury 3 & 4 BHK Residences <br />
              Starting @ ₹1.63 Cr* in Greater Noida
            </p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             transition={{ delay: 1 }}
             className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
             <div className="px-6 py-2 border-l-2 border-yellow-500 bg-white/5 backdrop-blur-sm">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Expected Possession</p>
                <p className="text-sm font-bold text-white tracking-widest uppercase">Mid 2028</p>
             </div>
          </motion.div>
        </div>

        {/* RIGHT: Desktop Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block"
        >
          <LeadForm />
        </motion.div>
      </div>

      {/* MOBILE: Pulse CTA (Anchored or Section-end) */}
      <div className="lg:hidden absolute bottom-12 w-full px-6 z-20">
         <motion.button 
           whileTap={{ scale: 0.95 }}
           className="w-full bg-yellow-500 text-black font-black uppercase tracking-[0.2em] text-xs py-5 rounded-full shadow-2xl shadow-yellow-500/20"
         >
           View Floor Plans
         </motion.button>
      </div>

    </section>
  );
}