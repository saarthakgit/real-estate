'use client';
import { Phone, Menu } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-6xl backdrop-blur-xl bg-black/40 border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        
        {/* LEFT: Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <Image 
              src="/irish.png" 
              alt="Irish Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          {/* Using font-primary + font-medium for a clean look */}
          <div className="text-lg font-primary font-medium text-white tracking-[0.15em] hidden sm:block">
            IRISH <span className="text-yellow-500 font-bold text-normal">PLATINUM</span>
          </div>
        </div>

        {/* CENTER: Navigation Links */}
        {/* Using font-primary + font-light + extra tracking for elegance */}
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] text-gray-300 font-light font-primary">
          <a href="#amenities" className="hover:text-yellow-500 transition-colors">Amenities</a>
          <a href="#layout" className="hover:text-yellow-500 transition-colors">Layout</a>
          <a href="#location" className="hover:text-yellow-500 transition-colors">Location</a>
        </div>

        {/* RIGHT: Pill CTA Button */}
        <div className="flex items-center gap-2">
          <a 
            href="tel:+918920840946" 
            className="flex items-center gap-2 px-6 py-2.5 bg-yellow-500 text-black font-bold font-primary uppercase text-[10px] tracking-widest rounded-full hover:bg-yellow-400 transition-all active:scale-95 shadow-lg shadow-yellow-500/20"
          >
            <Phone size={12} fill="currentColor" /> Call Now
          </a>
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-white">
            <Menu size={20} />
          </button>
        </div>
      </nav>
    </div>
  );
}