'use client';

// Generating the video arrays dynamically for vid1 through vid14
'use client';

const row1 = Array.from({ length: 7 }, (_, i) => `/gifs/vid${i + 1}.mp4`);
const row2 = Array.from({ length: 7 }, (_, i) => `/gifs/vid${i + 8}.mp4`);

export default function AmenitiesMarquee() {
  return (
    <section id="amenities" className="bg-black py-24 overflow-hidden relative font-primary">
      {/* 1. Section Header */}
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-yellow-500 text-[10px] tracking-[0.6em] uppercase font-semibold mb-3">
          World-Class Lifestyle
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
          THE AMENITIES <span className="font-extralight text-gray-500">SUITE</span>
        </h3>
      </div>

      {/* 2. The Focus Track Wrapper */}
      <div className="relative space-y-4">
        
        {/* ROW 1: LEFT TO RIGHT (Reverse) */}
        <div className="flex w-max animate-scroll-reverse">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {row1.map((src, index) => (
                <AmenityVideo key={`${i}-${index}`} src={src} />
              ))}
            </div>
          ))}
        </div>

        {/* ROW 2: RIGHT TO LEFT (Normal) */}
        <div className="flex w-max animate-scroll">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {row2.map((src, index) => (
                <AmenityVideo key={`${i}-${index}`} src={src} />
              ))}
            </div>
          ))}
        </div>

        {/* 3. THE "SPOTLIGHT" OVERLAY 
            We use two large side-panels to force grayscale and darkness
            leaving only a 300px window in the center for color.
        */}
<div className="absolute inset-0 z-20 pointer-events-none">
  {/* Layer 1: The Darkening Vignette (Now with a wider clear core) */}
  <div 
    className="absolute inset-0 bg-black/85" 
    style={{ 
      // Changed transparent from 0% to 35% to widen the bright spot
      maskImage: 'radial-gradient(circle at center, transparent 35%, black 80%)',
      WebkitMaskImage: 'radial-gradient(circle at center, transparent 35%, black 80%)' 
    }} 
  />

  {/* Layer 2: The Grayscale Focus (Wider color window) */}
  <div 
    className="absolute inset-0 backdrop-grayscale-[1] backdrop-brightness-75" 
    style={{ 
      // Changed transparent from 10% to 45% to keep more tiles in color
      maskImage: 'radial-gradient(circle at center, transparent 45%, black 75%)',
      WebkitMaskImage: 'radial-gradient(circle at center, transparent 45%, black 75%)' 
    }} 
  />
</div>
      </div>
    </section>
  );
}

function AmenityVideo({ src }: { src: string }) {
  return (
    <div className="mx-2 flex-shrink-0">
      {/* 4:5 Aspect Ratio Container (e.g., 240px wide by 300px high) */}
      <div className="w-[240px] h-[300px] overflow-hidden bg-white/5">
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}