import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import LeadForm from "../components/LeadForm";
import BrandMarquee from "../components/bankScroll";
export default function Home() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <LeadForm/>
      <BrandMarquee/>
      {/* <h1>Irish</h1> */}
    </div>
  )
}
