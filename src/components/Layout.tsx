'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LeadForm from './LeadForm';

const plans = [
  { id: "site", category: "Site Plan", title: "Site Layout", size: "Master Plan", img: "/plans/site-plan.png" },
  { id: "3BHK-1390", category: "3 BHK", title: "3 BHK + 2T", size: "1390 sqft", img: "/plans/3bhk-1390.jpg" },
  { id: "3BHK-1690", category: "3 BHK", title: "3 BHK + 3T", size: "1690 sqft", img: "/plans/3bhk-1690.jpg" },
  { id: "3BHK-1925", category: "3 BHK", title: "3 BHK + 4T + Servant", size: "1925 sqft", img: "/plans/3bhk-1925.jpg" },
  { id: "4BHK-2150", category: "4 BHK", title: "4 BHK + 4T", size: "2150 sqft", img: "/plans/4bhk-2150.jpg" },
  { id: "4BHK-2550", category: "4 BHK", title: "4 BHK + 5T + Servant + Pooja", size: "2550 sqft", img: "/plans/4bhk-2550.jpg" },
];

export default function FloorPlanSection() {
  const [activeTab, setActiveTab] = useState('3 BHK');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const filteredPlans = plans.filter(p => p.category === activeTab);
  const isSingleCard = filteredPlans.length === 1;

  return (
    <section id="layout" className="bg-black py-12 md:py-16 px-4 font-primary overflow-hidden relative min-h-screen flex flex-col justify-center">
      <div className="max-w-[1100px] mx-auto w-full">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 whitespace-nowrap">
            Layout <span className="text-gray-600 font-extralight italic">Plans</span>
          </h3>
          
          <div className="flex bg-neutral-900/50 p-1 rounded-full border border-white/5 backdrop-blur-xl z-10 scale-90 md:scale-100">
            {['Site Plan', '3 BHK', '4 BHK'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 md:px-8 py-2 rounded-full text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] uppercase transition-all duration-500 whitespace-nowrap ${
                  activeTab === tab ? 'bg-yellow-500 text-black font-bold' : 'text-gray-500 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* The Grid / Track */}
        <div className={`flex gap-4 md:gap-6 pb-6 no-scrollbar snap-x snap-mandatory overflow-x-auto ${isSingleCard ? 'justify-center' : 'justify-start lg:justify-center'}`}>
       
          <AnimatePresence mode='wait'>
            {filteredPlans.map((plan) => (
              <motion.div
                key={plan.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                // Reduced desktop width to 310px to fit 3-across easily on laptops
                className={`flex-shrink-0 snap-center bg-neutral-900/20 border border-white/5 rounded-[24px] overflow-hidden ${isSingleCard ? 'w-[85vw] md:w-[400px]' : 'w-[80vw] md:w-[310px]'}`}
              >
                {/* 1:1 SQUARE IMAGE CONTAINER */}
                <div className="aspect-square bg-neutral-800/50 relative border-b border-white/5">
                   <img 
                     src={plan.img} 
                     alt={plan.title} 
                     className="w-full h-full object-contain p-4 md:p-6" 
                   />
                </div>
                
                {/* Compressed Content Area */}
                <div className="p-5 md:p-6 text-center">
                  <h4 className="text-base md:text-lg font-bold text-white mb-0.5 uppercase tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                    {plan.title}
                  </h4>
                  <p className="text-gray-500 text-[8px] md:text-[9px] tracking-[0.15em] uppercase mb-5 font-light">
                    {plan.size}
                  </p>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setModalOpen(true)} 
                      className="flex-1 py-2.5 border border-white/10 text-white text-[7px] md:text-[8px] tracking-[0.2em] uppercase rounded-md hover:bg-white/5 transition-all"
                    >
                      Details
                    </button>
                    <button 
                      onClick={() => { setSelectedPlan(`${plan.category} - ${plan.size.split(' ')[0]}`); setModalOpen(true); }} 
                      className="flex-1 py-2.5 bg-yellow-500 text-black font-black text-[7px] md:text-[8px] tracking-[0.2em] uppercase rounded-md hover:bg-yellow-400 transition-all"
                    >
                      Interested
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      

      {/* Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
          >
            <motion.div initial={{ scale: 0.96 }} animate={{ scale: 1 }} className="relative w-full max-w-sm">
              <button onClick={() => setModalOpen(false)} className="absolute -top-8 right-0 text-white/40 text-[9px] uppercase tracking-widest hover:text-white">Close ×</button>
              <LeadForm preSelect={selectedPlan} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}