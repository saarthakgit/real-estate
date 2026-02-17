const banks = ["SBI", "HDFC", "ICICI", "Axis Bank", "Canara Bank", "PNB"];

export default function BrandMarquee() {
  return (
    <div className="bg-white py-8 overflow-hidden whitespace-nowrap relative">
      <div className="inline-block animate-scroll">
        {/* We repeat the list twice to make the loop seamless */}
        {[...banks, ...banks].map((bank, index) => (
          <span key={index} className="mx-12 text-2xl font-bold text-gray-400 grayscale hover:grayscale-0 transition duration-300 cursor-pointer">
            {bank}
          </span>
        ))}
      </div>
    </div>
  );
}