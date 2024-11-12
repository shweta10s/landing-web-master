/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { volkhvo } from "@/styles/font";
import FormPopup from "./FormPopup";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CountUp from "react-countup";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "100", "200", "500", "700", "300"],
});

const HeroSectionTwo = () => {
  const [countStart, setCountStart] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".countup-section",
      start: "top 20%",
      onEnter: () => setCountStart(true),
      onLeaveBack: () => setCountStart(false),
    });
  }, []);

  return (
    <div className="w-full">
      <div className=" md:flex gap-4 max-w-6xl mx-auto xl:px-0 px-6 hidden">
        <div className=" md:h-64 h-40 relative md:w-[20vw] w-full rounded-md overflow-hidden shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
          <Image
            src="/Home-Images/11.png"
            alt="No Preview"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:h-64 h-40 relative md:w-[32vw] w-full rounded-md overflow-hidden md:mt-5 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
          <Image
            src="/Home-Images/12.png"
            alt="No Preview"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:h-64 h-40 relative md:w-[20vw] w-full rounded-md overflow-hidden shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
          <Image
            src="/Home-Images/13.png"
            alt="No Preview"
            fill
            class="img"
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:hidden">
        <Swiper
          loop={true}
          navigation={{
            prevEl: `.HomeSlidePrev`,
            nextEl: `.HomeSlideNext`,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper w-[90%] relative h-full"
        >
          <div>
            <button className="HomeSlidePrev text-primaryMain absolute top-1/2 -left-0 -translate-y-1/2  z-10 hover:bg-primary-main hover:text-white text-sm p-2 rounded-full border border-primary-main text-primary-main">
              <FaArrowLeft />
            </button>
            <button className="HomeSlideNext text-primaryMain absolute top-1/2 right-0 -translate-y-1/2  z-10 hover:bg-primary-main hover:text-white text-sm p-2 rounded-full border border-primary-main text-primary-main">
              <FaArrowRight />
            </button>
          </div>
          <SwiperSlide>
            <div className="h-40 relative w-full rounded-md overflow-hidden shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
              <Image
                src="/Home-Images/11.png"
                alt="No Preview"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-40 relative w-full rounded-md overflow-hidden shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
              <Image
                src="/Home-Images/12.png"
                alt="No Preview"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-40 relative w-full rounded-md overflow-hidden shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
              <Image
                src="/Home-Images/13.png"
                alt="No Preview"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <section className={`md:pt-20 pt-10 px-5 max-w-6xl mx-auto ${poppins}`}>
          <div className="bg-white py-4 md:px-6 rounded-xl shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)] md:flex justify-between items-center ">
            <div className="text-center md:w-[25vw] w-full md:px-0 px-6">
              <p className="md:text-[2.5rem] sm:text-2xl text-lg font-medium text-primary-main">
                {countStart ? <CountUp end={72} duration={5} /> : 72}%
              </p>
              <p className="md:text-lg sm:text-base text-sm text-primary-main ">{`Increase restaurant's organic reach`}</p>
            </div>
            <div className="border-l-2 h-16 border-l-primary-main md:inline hidden"></div>
            <div className="text-center md:w-[25vw] w-full max-md:my-6">
              <p className="md:text-[2.5rem] sm:text-2xl text-lg font-medium text-primary-main">
                {countStart ? <CountUp end={100} duration={5} /> : 100}%
              </p>
              <p className="md:text-lg sm:text-base text-sm text-primary-main">
                Safe And Hygiene
              </p>
            </div>
            <div className="border-l-2 h-16 border-l-primary-main md:inline hidden"></div>
            <div className="text-center md:w-[25vw] w-full">
              <p className="md:text-[2.5rem] sm:text-2xl text-lg font-medium text-primary-main">
                {countStart ? <CountUp end={7} duration={5} /> : 7}k+
              </p>
              <p className="md:text-lg sm:text-base text-sm text-primary-main">
                Affiliated RESTAURANTS
              </p>
            </div>
          </div>
        </section>

        <section className={"my-4"}>
          <div class="relative flex overflow-x-hidden">
            <div class="animate-marquee whitespace-nowrap flex  md:gap-[6vw] gap-[4vw] md:h-44 h-20">
              <img
                src="/Home-Images/logo/01.png"
                alt="No Preview"
                className="object-contain h-full w-full"
              />
              <img
                src="/Home-Images/logo/02.png"
                alt="No Preview"
                className="object-contain h-full w-full"
              />
              <img
                src="/Home-Images/logo/03.png"
                alt="No Preview"
                className="object-contain h-full w-full"
              />
              <img
                src="/Home-Images/logo/04.png"
                alt="No Preview"
                className="object-contain h-full w-full"
              />
              <img
                src="/Home-Images/logo/05.png"
                alt="No Preview"
                className="object-contain h-full w-full"
              />
              <img
                src="/Home-Images/logo/06.png"
                alt="No Preview"
                className="object-contain h-full w-full"
              />
              <img
                src="/Home-Images/logo/07.png"
                alt="No Preview"
                className="object-contain h-full w-full"
              />
              <img
                src="/Home-Images/logo/08.png"
                alt="No Preview"
                className="object-contain h-full w-full"
              />
              <img
                src="/Home-Images/logo/09.png"
                alt="No Preview"
                className="object-contain h-full w-full"
              />
              <img
                src="/Home-Images/logo/10.png"
                alt="No Preview"
                className="object-contain h-full w-full"
              />
              <img
                src="/Home-Images/logo/11.png"
                alt="No Preview"
                className="object-contain h-full w-full"
              />
              <img
                src="/Home-Images/logo/12.png"
                alt="No Preview"
                className="object-contain h-full w-full"
              />
              <img
                src="/Home-Images/logo/13.png"
                alt="No Preview"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </section>
        <section className="bg-primary-main md:w-full w-[90%] text-white md:p-6 p-2 rounded-2xl max-w-6xl mx-auto ">
          <p
            className={`xl:text-5xl md:text-3xl text-xl  font-medium text-center max-w-5xl mx-auto md:my-10 my-2 ${volkhvo.className}`}
          >
            Keep Your Customers happy and build their trust in your restaurant!
          </p>
          <div className="w-full flex justify-center">
            <div className="bg-white text-primary-main text-lg font-medium md:py-2.5 py-1.5 px-4 rounded shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
              <FormPopup name="Get Free Demo" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSectionTwo;
