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
    <section id="layout" className="bg-black py-5 md:py-5 px-4 font-primary overflow-hidden relative min-h-screen flex flex-col justify-center">
      <div className="max-w-[1200px] mx-auto w-full"> {/* Widened container slightly */}
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          {/* MASSIVE HEADER: 5xl Mobile / 7xl Desktop */}
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-10 whitespace-nowrap">
            Layout <span className="text-gray-600 font-extralight italic">Plans</span>
          </h3>
          
          <div className="flex bg-neutral-900/50 p-1.5 rounded-full border border-white/5 backdrop-blur-xl z-10">
            {['Site Plan', '3 BHK', '4 BHK'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                /* LARGER TABS: text-xs Mobile / text-sm Desktop */
                className={`px-8 md:px-10 py-3 rounded-full text-sm md:text-m tracking-[0.2em] uppercase transition-all duration-500 whitespace-nowrap font-bold ${
                  activeTab === tab ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)]' : 'text-gray-500 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* The Grid / Track */}
        <div className={`flex gap-8 md:gap-10 pb-10 no-scrollbar snap-x snap-mandatory overflow-x-auto ${isSingleCard ? 'justify-center' : 'justify-start lg:justify-center'}`}>
       
          <AnimatePresence mode='wait'>
            {filteredPlans.map((plan) => (
              <motion.div
                key={plan.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                /* WIDER CARDS: 360px Desktop to fit the larger text */
                className={`flex-shrink-0 snap-center bg-neutral-900/20 border border-white/5 rounded-[32px] overflow-hidden ${isSingleCard ? 'w-[90vw] md:w-[450px]' : 'w-[85vw] md:w-[360px]'}`}
              >
                {/* IMAGE CONTAINER */}
                <div className="aspect-square bg-neutral-800/50 relative border-b border-white/5">
                   <img 
                     src={plan.img} 
                     alt={plan.title} 
                     className="w-full h-full object-contain p-6 md:p-8 hover:scale-105 transition-transform duration-700" 
                   />
                </div>
                
                {/* Content Area */}
                <div className="p-8 text-center">
                  {/* LARGER TITLE: 2xl Mobile / 3xl Desktop */}
                  <h4 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                    {plan.title}
                  </h4>
                  
                  {/* LARGER SUBTITLE: xs Mobile / sm Desktop */}
                  <p className="text-gray-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-8 font-medium">
                    {plan.size}
                  </p>
                  
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setModalOpen(true)} 
                      /* BIGGER BUTTONS: text-[10px] Mobile / text-xs Desktop */
                      className="flex-1 py-4 border border-white/10 text-white text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase rounded-xl hover:bg-white/10 transition-all"
                    >
                      Details
                    </button>
                    <button 
                      onClick={() => { setSelectedPlan(`${plan.category} - ${plan.size.split(' ')[0]}`); setModalOpen(true); }} 
                      className="flex-1 py-4 bg-yellow-500 text-black font-black text-[10px] md:text-xs tracking-[0.2em] uppercase rounded-xl hover:bg-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all"
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
              <button onClick={() => setModalOpen(false)} className="absolute -top-12 right-0 text-white/60 text-sm uppercase tracking-widest hover:text-white transition-colors">Close ×</button>
              <LeadForm preSelect={selectedPlan} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}