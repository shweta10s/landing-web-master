import Image from 'next/image'
import React, { useRef } from 'react'
import FAQ from './FAQ'
import { Plusjakartasans, volkhvo } from '@/styles/font'
import PeopleSay from './People-say'


import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const DigitalQr = () => {

    const ref = useRef();

    useGSAP(
      () => {
        gsap.utils.toArray(".animate-text").forEach((element, index) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 50 }, // Starting properties
            {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: element,
                start: "top center",
                end: "bottom center",
                scrub: 1,
              },
            }
          );
        });
      },
      { scope: ref }
    );

    
  return (
    <div id="benefits" ref={ref} className="py-10 max-w-7xl mx-auto relative">
        <div className="h-[50%] w-full bg-primary-main/5 absolute -z-10" style={{filter:'blur(250px)'}} />
       <h1 className={`xl:text-5xl md:text-3xl text-2xl  sm:px-0 px-1 font-bold text-center max-w-4xl mx-auto leading-tight ${volkhvo.className}`}>World&apos;s most advanced <span className="text-primary-main"> digital QR </span> menu features</h1>
       <div className="grid md:grid-cols-2">
            <div>
                <div className="md:h-[42rem] h-[10rem] relative md:scale-110 my-4">
                    <Image src="/Home-Images/06.png" alt="No Preview" fill className="object-contain" />
                </div>
            </div>
            <div className="grid md:gap-10 sm:gap-6 gap-4 md:my-10 xl:px-0 px-6">
                <div className='animate-text'>
                    <li className="md:text-3xl sm:text-2xl text-xl font-semibold text-[#263238] ">Improve the Customer Experience</li>
                    <p className="md:text-xl sm:text-base text-sm text-[#666666] md:mt-4">With QR code menus that offer ordering capabilities, guests can order as soon as they’re seated.</p>
                </div>
                <div className='animate-text'>
                    <li className="md:text-3xl sm:text-2xl text-xl font-semibold text-[#263238]">Increase Revenue</li>
                    <p className="md:text-xl sm:text-base text-sm text-[#666666] md:mt-4">QR code menus offer excellent upselling and cross-selling opportunities.
                    </p>
                </div>
                <div className='animate-text'>
                    <li className="md:text-3xl sm:text-2xl text-xl font-semibold text-[#263238]">Save money on printing costs</li>
                    <p className="md:text-xl sm:text-base text-sm text-[#666666] md:mt-4">Digital QR menus are more cost-effective than print menus. Changes can be made instantly without additional printing costs.</p>
                </div>  
                <div className='animate-text'>
                    <li className="md:text-3xl sm:text-2xl text-xl font-semibold text-[#263238]">Build a community!</li>
                    <p className="md:text-xl sm:text-base text-sm text-[#666666] md:mt-4">Collect valuable data from WhatsApp and supercharge your Sales by sending offers on WhatsApp.
                    </p>
                </div>
                <div className='animate-text'>
                    <button className={`bg-primary-main text-white p-2 rounded-md font-medium px-4 text-2xl  ${Plusjakartasans.className}`}>Let’s do it !</button>
                    <p className={`text-primary-main my-4 lowercase ${Plusjakartasans.className}`}>100% FREE DEMO - NO CREDIT CARD REQUIRED</p>
                </div>
            </div>
       </div>
       <PeopleSay />
        <div className="md:my-10 my-2 xl:px-0 px-6">
            <h1 className={`xl:text-5xl md:text-3xl text-2xl font-bold  max-md:text-center ${volkhvo.className}`}>Ready to <span className="text-primary-main"> Level up</span> in just a minutes?</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-12">
                    <div className="">
                        <div className="relative md:h-72 h-44">
                            <Image src="/Home-Images/07.png" alt="" fill className="object-cover rounded-md" />
                        </div>
                        <div className="text-center relative">
                            <div className="absolute w-full -top-4">
                                <p className="bg-primary-main text-white h-10 w-10 flex items-center justify-center text-xl rounded-full mx-auto">1</p>
                            </div>
                            <h1 className={`text-center text-primary-main md:text-2xl text-xl font-bold pt-6 drop-shadow-md  ${Plusjakartasans.className}`}>Sign Up for Free</h1>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative md:h-72 h-44">
                            <Image src="/Home-Images/18.png" alt="" fill className="object-cover rounded-md" />
                        </div>
                        <div className="text-center relative">
                            <div className="absolute w-full -top-4">
                                <p className="bg-primary-main text-white h-10 w-10 flex items-center justify-center text-xl rounded-full mx-auto">2</p>
                            </div>
                            <h1 className={`text-center text-primary-main md:text-2xl text-xl font-bold pt-6 drop-shadow-md  ${Plusjakartasans.className}`}>Send us your existing menu</h1>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative md:h-72 h-44">
                            <Image src="/Home-Images/19.png" alt="" fill className="object-cover rounded-md" />
                        </div>
                        <div className="text-center relative">
                            <div className="absolute w-full -top-4">
                                <p className="bg-primary-main text-white h-10 w-10 flex items-center justify-center text-xl rounded-full mx-auto">3</p>
                            </div>
                            <h1 className={`text-center text-primary-main md:text-2xl text-xl font-bold pt-6 drop-shadow-md  ${Plusjakartasans.className}`}>You will receive a QR code</h1>
                        </div>
                    </div>
                </div>
       </div>
       <section id="faq" className="md:py-10 py-4 md:px-0 px-6">
            <h1 className={`xl:text-5xl md:text-3xl text-2xl  font-bold ${volkhvo.className}`}>Frequently  <span className="text-primary-main"> asked question</span></h1>
        <FAQ />
       </section>
    </div>
  )
}

export default DigitalQr