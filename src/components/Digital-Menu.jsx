import { Plusjakartasans, volkhvo } from "@/styles/font";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import FormPopup from "./FormPopup";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const DigitalMenu = () => {
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
    <div id="processQr" ref={ref} className="">
      <div className="bg-[#12141D] text-white xl:text-5xl md:text-3xl text-2xl p-8 md:my-16 my-6">
        <h1 className={`text-center ${volkhvo.className}`}>
          How smart digital{" "}
          <span className="text-primary-main"> menu works</span>
        </h1>
        <div className="max-w-6xl mx-auto w-full h-full xl:py-20">
          <div className="flex items-center gap-10 max-sm:my-4  animate-text">
            <div className="relative">
              <div
                className="imgDiv rounded-full md:p-14 p-6 shadow-primary-main relative"
                style={{
                  background: "rgba(247, 102, 49, 0.35)",
                  filter: "blur(150.8px)",
                }}
              >
                <div className="md:h-[10rem] md:w-[19rem] sm:h-[15vw] sm:w-[15vw] h-[10vw] w-[10vw] relative rounded-full overflow-hidden">
                  <Image
                    src="/Home-Images/14.png"
                    alt="No Preview"
                    fill
                    className="object-cover img"
                  />
                </div>
              </div>
              <div className="absolute md:h-[20vw] h-[20vw] md:w-[20vw] w-[20vw] top-0 md:left-10 max-sm:bottom-4">
                <Image
                  src="/Home-Images/14.png"
                  alt="No Preview"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
            <div className="flex items-center max-md:flex-col max-md:text-center md:gap-5">
              <div
                className={`bg-white md:h-20 md:w-20 h-5 w-5 text-sm xl:text-[3.7rem] flex justify-center items-center rounded-full font-extrabold  ${Plusjakartasans.className} `}
                style={{
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "var(--Main, #FA7436)",
                }}
              >
                1
              </div>
              <div>
                <h3
                  className={`xl:text-[2.2rem] md:text-3xl text-xl font-bold ${Plusjakartasans.className} `}
                >
                  Scan QR-CODE
                </h3>
                <p className="text-[#FFFFFFB2] md:text-xl text-sm font-normal max-w-xs md:mt-4 text-center ">
                  Guests scan the QR code from their Android or iOS devices.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-10 max-sm:py-4 animate-text">
            <div className="flex items-center max-md:flex-col max-md:text-center md:gap-5 ">
              <div
                className={`bg-white md:h-20 md:w-20 h-5 w-5 text-sm xl:text-[3.7rem] flex justify-center items-center rounded-full font-extrabold  ${Plusjakartasans.className}`}
                style={{
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "var(--Main, #FA7436)",
                }}
              >
                2
              </div>
              <div>
                <h3
                  className={`xl:text-[2.2rem] md:text-3xl text-xl font-bold text-center ${Plusjakartasans.className}`}
                >
                  Send a message
                </h3>
                <p className="text-[#FFFFFFB2] md:text-xl text-sm font-normal max-w-sm md:mt-4 text-center">
                  They get redirected to WhatsApp and send an auto-fill message.
                </p>
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-full md:p-14 p-6 shadow-primary-main relative"
                style={{
                  background: "rgba(247, 102, 49, 0.35)",
                  filter: "blur(150.8px)",
                }}
              >
                <div className="md:h-[10rem] md:w-[19rem] sm:h-[15vw] sm:w-[15vw] h-[10vw] w-[10vw] relative rounded-full overflow-hidden">
                  <Image
                    src="/Home-Images/15.png"
                    alt="No Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute md:h-[20vw] h-[20vw] md:w-[20vw] w-[20vw] top-0 md:left-10 max-sm:bottom-4">
                <Image
                  src="/Home-Images/15.png"
                  alt="No Preview"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-10 max-sm:my-4 animate-text">
            <div className="relative">
              <div
                className=" rounded-full md:p-14 p-6 shadow-primary-main relative"
                style={{
                  background: "rgba(247, 102, 49, 0.35)",
                  filter: "blur(150.8px)",
                }}
              >
                <div className="md:h-[10rem] md:w-[19rem] sm:h-[15vw] sm:w-[15vw] h-[10vw] w-[10vw] relative rounded-full overflow-hidden">
                  <Image
                    src="/Home-Images/16.png"
                    alt="No Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute md:h-[20vw] h-[20vw] md:w-[20vw] w-[20vw] top-0 md:left-10 max-sm:bottom-4">
                <Image
                  src="/Home-Images/16.png"
                  alt="No Preview"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
            <div className="flex items-center max-md:flex-col max-md:text-center md:gap-5">
              <div
                className={`bg-white md:h-20 md:w-20 h-5 w-5 text-sm xl:text-[3.7rem] flex justify-center items-center rounded-full font-extrabold  ${Plusjakartasans.className}`}
                style={{
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "var(--Main, #FA7436)",
                }}
              >
                3
              </div>
              <div>
                <h3
                  className={`xl:text-[2.2rem] md:text-3xl text-xl text-center font-bold ${Plusjakartasans.className}`}
                >
                  Receive a link
                </h3>
                <p className="text-[#FFFFFFB2] md:text-xl text-sm font-normal max-w-xs md:mt-4 text-center">
                  They get redirected to the Smart digital menu.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-10 max-sm:py-4 animate-text">
            <div className="flex items-center max-md:flex-col max-md:text-center md:gap-5">
              <div
                className={`bg-white md:h-20 md:w-20 h-5 w-5 text-sm xl:text-[3.7rem] flex justify-center items-center rounded-full font-extrabold  ${Plusjakartasans.className}`}
                style={{
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "var(--Main, #FA7436)",
                }}
              >
                4
              </div>
              <div>
                <h3
                  className={`xl:text-[2.2rem] md:text-3xl text-xl font-bold text-center ${Plusjakartasans.className}`}
                >
                  Explore the menu
                </h3>
                <p className="text-[#FFFFFFB2] md:text-xl text-sm font-normal max-w-xs md:mt-4 text-center">
                  They view the menu and order food.
                </p>
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-full md:p-14 p-6 shadow-primary-main relative"
                style={{
                  background: "rgba(247, 102, 49, 0.35)",
                  filter: "blur(150.8px)",
                }}
              >
                <div className="md:h-[10rem] md:w-[19rem] sm:h-[15vw] sm:w-[15vw] h-[10vw] w-[10vw] relative rounded-full overflow-hidden">
                  <Image
                    src="/Home-Images/17.png"
                    alt="No Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute md:h-[20vw] h-[20vw] md:w-[20vw] w-[20vw] top-0 md:left-10 max-sm:bottom-4">
                <Image
                  src="/Home-Images/17.png"
                  alt="No Preview"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-primary-main md:w-full w-[90%] text-white md:p-6 p-2 rounded-2xl max-w-6xl mx-auto">
        <h1
          className={`xl:text-5xl md:text-3xl text-xl  font-medium text-center max-w-5xl mx-auto md:my-10 my-2 ${volkhvo.className}`}
        >
          Start Using Digital <br /> Menus Now !
        </h1>
        <div className="w-full flex justify-center">
          <div className="bg-white text-primary-main text-lg font-medium md:py-2.5 py-1.5 px-4 rounded shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
            <FormPopup name="Get Free Demo" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMenu;
