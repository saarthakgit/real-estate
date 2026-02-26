'use client';

const promoItems = [
  { text: "INAUGURAL OFFER: SAVE UP TO ₹25.5 LACS*", icon: "✦" },
  { text: "LIMITED TO FIRST 50 UNITS*", icon: "✦" },
  { text: "INAUGURAL OFFER: SAVE UP TO ₹25.5 LACS*", icon: "✦" },
  { text: "FULLY PAID UP LAND", icon: "✦" },
  { text: "INAUGURAL OFFER: SAVE UP TO ₹25.5 LACS*", icon: "✦" },
  { text: "RERA: UPRERAPRJ503189", icon: "✦" }
];

export default function PromoBar() {
  // Function to scroll to your contact/lead form
  const scrollToCTA = () => {
    const element = document.getElementById('contact-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const ContentBlock = () => (
    <div className="flex animate-scroll whitespace-nowrap items-center">
      {promoItems.map((item, index) => (
        <div key={index} className="flex items-center px-4 md:px-8">
          <span className="text-sm mr-2">{item.icon}</span>
          <span className="text-[9px] md:text-[11px] tracking-[0.15em] uppercase font-black">
            {item.text}
          </span>
          {/* THE CTA TRIGGER */}
          <button 
            onClick={scrollToCTA}
            className="ml-6 bg-black text-[#CCFF00] px-3 py-0.5 rounded-full text-[8px] md:text-[10px] font-black uppercase hover:scale-105 transition-transform border border-black"
          >
            Claim Offer
          </button>
          <span className="ml-6 md:ml-10 opacity-20 text-xs">|</span>
        </div>
      ))}
    </div>
  );

  return (
    /* FIXED position makes it float over all components */
    <div className="fixed top-0 left-0 w-full bg-[#CCFF00] text-black overflow-hidden py-1.5 z-[9999] border-b border-black shadow-xl">
      <div className="flex w-max">
        <ContentBlock />
        <ContentBlock />
      </div>
    </div>
  );
}