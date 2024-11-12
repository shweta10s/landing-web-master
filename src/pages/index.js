/* eslint-disable @next/next/no-img-element */
import DigitalMenu from "@/components/Digital-Menu";
import DigitalQr from "@/components/Digital-Qr";
import Footer from "@/components/Footer";
import FormSection from "@/components/Form-section";
import HeroSection from "@/components/Hero-section";
import HeroSectionTwo from "@/components/Hero-section-2";
import Navbar from "@/components/Navbar";
import { poppins } from "@/styles/font";
import Link from "next/link";

export default function Home() {
  return (
    <main className={` ${poppins.className}`} >
     <Navbar />
     <HeroSection />
      <Link href="https://api.whatsapp.com/send?phone=9340534177&text=Hello!%20Can%20I%20get%20a%20Free%20Demo?" target='_blank' className="fixed text-4xl right-[3vw] bottom-[3vw] z-30">
      <div className="grid justify-items-center gap-2">
          <div className="contact_icon ">
            <img src="/svg/WhatsApp.svg" alt="" className=" my-float h-12 w-12" />
          </div>
        <p className="text-[#707070] text-sm pl-1">Talk to us?</p>
      </div>
      </Link>
     <HeroSectionTwo />
     <DigitalMenu />
     <DigitalQr />
     <FormSection />
     <Footer />
    </main>
  );
}
