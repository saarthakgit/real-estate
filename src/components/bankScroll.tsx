'use client';
import Image from 'next/image';

const banks = [
  { name: "SBI", src: "/banks/sbi.png" },
  { name: "Central Bank", src: "/banks/cbi.png" },
  { name: "Canara", src: "/banks/canara.png" },
  { name: "Union Bank", src: "/banks/union.png" },
  { name: "LIC HFL", src: "/banks/lic.png" },
  { name: "PNB Housing", src: "/banks/pnb.png" },
  { name: "ICICI Bank", src: "/banks/icici.png" },
  { name: "HDFC Bank", src: "/banks/hdfc.png" }
];

export default function BrandMarquee() {
  return (
    <div className="bg-black py-20 border-y border-white/5 overflow-hidden relative group font-primary">
      {/* 1. Refined Subtitle */}
      <div className="flex justify-center mb-12">
        <p className="px-6 py-1.5 border border-white/10 rounded-full text-[10px] tracking-[0.5em] uppercase text-gray-500 bg-white/5 backdrop-blur-md">
          Banking Partners
        </p>
      </div>

      {/* 2. The Scrolling Container */}
      <div className="flex w-max">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex animate-scroll items-center gap-0">
            {banks.map((bank, index) => (
              <div 
                key={`${i}-${index}`} 
                className="mx-12 md:mx-20 flex items-center justify-center w-48 h-24 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out cursor-pointer"
              >
                <img 
                  src={bank.src} 
                  alt={bank.name} 
                  className="max-w-full max-h-full object-contain filter invert brightness-200 contrast-75 hover:invert-0 hover:brightness-100 hover:contrast-100"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 3. Luxury Fades (Increased width for 60% scale) */}
      <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
}