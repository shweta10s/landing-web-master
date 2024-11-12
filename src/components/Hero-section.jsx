import { volkhvo } from '@/styles/font'
import React from 'react'
import FormPopup from './FormPopup'


const HeroSection = () => {
  return (
    <div id="home" className={`text-center md:py-10 py-4 md:mt-[10vw] mt-[17vh] md:px-0 px-6 relative`}>
        <h1 className={`text-secondary-main xl:text-[4rem] md:text-3xl max-w-5xl mx-auto text-xl font-bold md:leading-tight ${volkhvo.className}`}>Smart digital menu by <span className="text-primary-main">QR-CODE</span>  a safe investment</h1>
        <p className="text-[#666666] md:text-xl text-sm md:leading-10">{`Discover 'The Future of Food Service' with Smart Digital QR Menu—transforming `} <br /> dining with efficient orders, cost savings, and advanced technology. </p>
        <div className="text-primary-main font-medium border border-primary-main md:text-lg text-xs px-4 py-2 rounded-md lg:my-10 md:my-8 sm:my-4 my-2 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)] w-fit mx-auto">
        <FormPopup name="Get Free Demo" />
        </div>
        <div className="bg-primary-main/50 md:h-[20vw] h-[50vw] w-[20vw] absolute top-1/2 -z-10 left-6" style={{filter:'blur(250px)'}} />
        <div className="bg-primary-main/50 md:h-[20vw] h-[50vw] w-[20vw] absolute top-1/2 -z-10 right-6" style={{filter:'blur(250px)'}} />
    </div>
  )
}

export default HeroSection