import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import LeadForm from "../components/LeadForm";
import BrandMarquee from "../components/bankScroll";
import FeatureNarrative from "../components/featureNarrative";
import AmenitiesMarquee from "../components/AmenitiesMarquee";
import FloorPlanSection from "../components/Layout";
import PaymentSection from "../components/pp";
import FinalInfoSection from "../components/faqs";
import Footer from "../components/footer";
import PromoBar from "../components/promobar";
export default function Home() {
  return(
    <div>
      <Navbar/>
      {/* <PromoBar/> */}
      <Hero/>
      {/* <LeadForm/> */}
      <BrandMarquee/>
      {/* <h1>Irish</h1> */}
      <FeatureNarrative/>
      <AmenitiesMarquee/>
      <FloorPlanSection/>
      <PaymentSection/>
      <FinalInfoSection/>
      <Footer/>
    </div>
  )
}
