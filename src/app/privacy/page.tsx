export default function PrivacyPolicy() {
  return (
    <main className="bg-black min-h-screen text-gray-400 font-primary p-8 md:p-20">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-8">
          <h1 className="text-3xl text-white font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content Blocks */}
        <section className="space-y-4">
          <h2 className="text-xl text-yellow-500 font-bold">1. Who We Are</h2>
          <p className="text-sm leading-relaxed">
            This website (<span className="text-white">platinumirish.in</span>) is a marketing landing page operated by an authorized channel partner. We are <strong>not</strong> the official website of the developer. This page is purely for lead generation and information dissemination regarding the Irish Platinum project in Sector 10, Greater Noida West.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-yellow-500 font-bold">2. Information We Collect</h2>
          <p className="text-sm leading-relaxed">
            When you interact with our forms, we collect the following personal information:
          </p>
          <ul className="list-disc list-inside text-sm pl-4 space-y-1">
            <li>Name</li>
            <li>Phone Number</li>
            <li>Interest (3 BHK / 4 BHK)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-yellow-500 font-bold">3. How We Use Your Data</h2>
          <p className="text-sm leading-relaxed">
            Your data is used solely for the purpose of:
          </p>
          <ul className="list-disc list-inside text-sm pl-4 space-y-1">
            <li>Scheduling site visits.</li>
            <li>Sharing the official brochure and price list via WhatsApp/Email.</li>
            <li>Connecting you with our sales team for booking inquiries.</li>
          </ul>
          <p className="text-sm mt-4 text-white/60 italic">
            *We do not sell your data to third-party spammers.*
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-yellow-500 font-bold">4. Consent</h2>
          <p className="text-sm leading-relaxed">
            By submitting the form, you authorize us to contact you via Call, SMS, WhatsApp, or Email, even if your number is registered on the DND (Do Not Disturb) registry.
          </p>
        </section>

        <div className="pt-8 border-t border-white/10">
          <a href="/" className="text-yellow-500 text-sm hover:underline">← Back to Home</a>
        </div>

      </div>
    </main>
  );
}