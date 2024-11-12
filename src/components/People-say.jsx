import React, { useRef, useState } from 'react';
import { volkhvo } from '@/styles/font'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';

export default function PeopleSay() {
  const rev = [
    {
      name:'Rajesh, Cafe Owner.',
      img:'01.png',
      data:'Love how easy it is to update our menu! Customers in Mumbai are loving the digital experience. Thanks, Smart Digital QR Menu!'
    },
    {
      name:' Anjali, Restaurant Manager.',
      img:'03.png',
      data:'Switched to Smart Digital QR Menu in Pune and it’s been a game-changer! No more reprinting menus. Customers are impressed!'
    },
    {
      name:'Ravi, Bistro Owner.',
      img:'04.png',
      data:'We went digital in Bangalore with Smart Digital QR Menu. The real-time updates are fantastic. Our customers can’t stop talking about it!'
    },
    {
      name:'Pooja, Cafe Manager.',
      img:'06.png',
      data:'Smart Digital QR Menu made life so much easier in our Delhi cafe. Quick updates and zero hassle. Highly recommend!'
    },
    {
      name:'Sandeep, Restaurant Owner',
      img:'11.png',
      data:'Hyderabad customers are loving the interactive digital menu. Smart Digital QR Menu is super efficient and easy to use. Great decision!'
    },
  ]
  return (
    <div id="review" className="relative w-full h-full max-w-7xl mx-auto md:py-10 py-6  xl:px-10 px-6 bg-[#FEFCFB]">
    <div className="grid md:grid-cols-2 grid-cols-1 w-full h-full">
        <div>
        <div>
            <h1 className={`xl:text-5xl md:text-3xl text-2xl font-bold max-md:text-center ${volkhvo.className}`}>What people say<span className="text-primary-main"><br /> about us. </span></h1>
            <p className="text-[#666666] max-w-sm mt-6">Our Clients send us bunch of smilies with our services and we love them.</p>
            <div>
              <button className='HomeSlidePrev text-primaryMain absolute bottom-2 max-md:left-1/3 -translate-y-1/2 z-10 hover:bg-primary-main hover:text-white text-xl p-2 rounded-full border border-primary-main text-primary-main'><FaArrowLeft /></button>
              <button className='HomeSlideNext text-primaryMain absolute bottom-2 max-md:left-1/2 -translate-y-1/2 md:left-28 left-20 z-10 hover:bg-primary-main hover:text-white text-xl p-2 rounded-full border border-primary-main text-primary-main'><FaArrowRight /></button> 
            </div>
          </div>
        </div>
      <Swiper
        // pagination={{
        //     clickable: true,
        //   }}   
        AutoPlay={true}
        loop={true} 
        spaceBetween={40}  
        navigation={{
            prevEl: `.HomeSlidePrev`,
            nextEl: `.HomeSlideNext`,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full shadow-[0px_8px_16px_2px_rgba(0,0,0,0.07)] h-64 rounded-xl"
      >
        {
          rev?.map((ele, i )=> (
        <SwiperSlide key={i} className="p-6  grid items-center h-full w-full">
          <div className="md:h-16 md:w-16 h-12 w-12 relative">
            <Image src={`/Home-Images/logo/${ele.img}`} alt="No Preview" fill className="object-cover rounded-full" />
          </div>
          <p className="text-[#666] md:text-base text-sm mt-4">“ {ele.data} ”</p>
          <p className="md:text-lg text-base font-medium md:mt-4 mt-2">{ele.name}</p>
          <p className="text-sm font-medium text-[#666666]"></p>
        </SwiperSlide>

          ))
        }
      </Swiper>

    </div>
    </div>
  );
}





// const PeopleSay = () => {
//   return (
//     <div>
//         <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto ">
//             <div>
//                 <h1 className={`text-5xl font-bold ${volkhvo.className}`}>What people say<span className="text-primary-main"><br /> about Us. </span></h1>
//                 <p className="text-[#666666] max-w-sm mt-6">Our Clients send us bunch of smilies with our services and we love them.</p>
//             </div>
//             <div className="">
//                 <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
//                 <p className="text-lg font-semibold mt-8">Mike taylor</p>
//                 <p className="text-sm font-medium text-[#666666]">Lahore, Pakistan</p>

//             </div>
//        </div>
       
//     </div>
//   )
// }

// export default PeopleSay