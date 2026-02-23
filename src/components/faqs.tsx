'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronDown, Trophy, TrendingUp, Building2 } from 'lucide-react';

const locations = [
  { time: "05", label: "Hospital", sub: "Nearest Care" },
  { time: "05", label: "Metro/Rapid Rail", sub: "Approved Station" },
  { time: "10", label: "FNG Expressway", sub: "Connectivity Hub" },
  { time: "05", label: "Shopping Malls", sub: "Daily Needs" },
  { time: "30", label: "DLF Malls", sub: "Luxury Retail" },
  { time: "45", label: "Railway Station", sub: "Central Access" },
  { time: "30", label: "Film City", sub: "Proposed Hub" },
  { time: "30", label: "Jewar Airport", sub: "International Link" },
];

const faqs = [
  {
    q: "Why is Irish Platinum considered a high-ROI investment?",
    a: "Located in Sector 10, Greater Noida West, Irish Platinum benefits from the upcoming Metro and 30-minute proximity to Jewar Airport. With premium 3 BHK and 4 BHK configurations ranging from 1390 to 2550 sqft, the project's low-density design ensures high capital appreciation compared to overcrowded sectors."
  },
  {
    q: "What is the track record of the Irish Group?",
    a: "Irish Group has a legacy of three luxurious projects in Greater Noida West: Ratan Pearls (Completed - Sec 16), Irish Pearls (Completed - Sec 1), and Irish Platinum (Ongoing - Sec 10). Their commitment to delivery and Mivan technology construction makes them a trusted name in luxury housing."
  },
  {
    q: "What are the available luxury sizes at Irish Platinum?",
    a: "The project offers expansive layouts optimized for modern families: 3 BHK (1390, 1690, 1925 sqft) and 4 BHK (2150, 2550 sqft). Each unit features premium finishes and wide balconies, catering to those seeking 3 BHK or 4 BHK apartments in Sector 10 Noida Extension."
  },
  {
    q: "How does the connectivity impact lifestyle?",
    a: "Being 10 minutes from the FNG Expressway and 5 minutes from shopping malls and hospitals, residents enjoy a seamless urban lifestyle without sacrificing the privacy of a Platinum-tier gated community."
  }
];

export default function FinalInfoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="location" className="bg-black py-8 px-4 font-primary">
      <div className="max-w-[1100px] mx-auto">
        
        {/* 1. LOCATION GRID */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-yellow-500 text-[10px] tracking-[0.3em] uppercase font-bold mb-4">Strategic Proximity</h3>
            <h4 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Zero <span className="text-gray-600 font-extralight italic">Distractions</span></h4>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.map((loc, i) => (
              <div key={i} className="p-6 bg-neutral-900/20 border border-white/5 rounded-3xl group hover:border-yellow-500/20 transition-all text-center">
                <span className="block text-3xl font-black text-white tracking-tighter mb-1 group-hover:text-yellow-500 transition-colors">
                  {loc.time}<span className="text-sm font-light ml-1">Mins</span>
                </span>
                <p className="text-white text-[12px] uppercase tracking-widest font-bold mb-1">{loc.label}</p>
                <p className="text-gray-600 text-[10px] uppercase tracking-tighter">{loc.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. FAQ ACCORDION */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="h-[1px] w-12 bg-yellow-500/30" />
            <h5 className="text-[10px] tracking-[0.5em] uppercase text-white font-bold whitespace-nowrap">Investment Intelligence</h5>
            <div className="h-[1px] w-12 bg-yellow-500/30" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-xs md:text-sm uppercase tracking-widest font-bold transition-colors ${openIndex === i ? 'text-yellow-500' : 'text-gray-400 group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${openIndex === i ? 'rotate-180 text-yellow-500' : 'text-gray-600'}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-[10px] md:text-xs text-gray-500 leading-relaxed uppercase tracking-wide">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}