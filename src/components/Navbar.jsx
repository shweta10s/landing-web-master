/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import FormPopup from './FormPopup';
import { PiPhoneCallThin } from "react-icons/pi";
import Link from 'next/link';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      setIsVisible(true); // Show the navbar when scrolling up
    } else {
      setIsVisible(false); // Hide the navbar when scrolling down
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const nav = [
    { name: 'Home', link: '#home' },
    { name: 'Process', link: '#processQr' },
    { name: 'Benefits', link: '#benefits' },
    { name: 'Review', link: '#review' },
    { name: 'FAQ', link: '#faq' },
  ];

  return (
    <nav
      id="navbar"
      className={`bg-white w-full z-20 fixed top-0 left-0 transition-transform duration-300 shadow-md ${
        isVisible ? 'translate-y-0' : '-translate-y-full '
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
        <a
          href=""
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/Home-Images/logo.png"
            className="md:h-6 h-4"
            alt="Logo"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center gap-4">
          <Link href="tel:9340534177" className="flex gap-1 text-primary-main items-center font-normal text-sm max-sm:hidden"><PiPhoneCallThin className="text-2xl" /> +91 9340534177</Link>
          <div
            className="block text-white bg-primary-main hover:bg-primary-main/80 focus:ring-4 focus:outline-none focus:ring-primary-main font-medium rounded-lg text-sm md:px-5 px-2 md:py-2.5 py-1.5 text-center dark:bg-primary-main dark:hover:bg-primary-main/80 dark:focus:ring-primary-main"
          >
            <FormPopup name="Get Free Demo" />            
          </div>
          
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {nav.map((ele, i) => (
              <li key={i}>
                <a
                  href={ele.link}
                  className="block py-2 px-3 text-white bg-primary-main rounded md:bg-transparent md:text-secondary-main md:p-0 md:dark:text-secondary-main hover:text-primary-main hover:font-medium font-normal"
                  aria-current="page"
                >
                  {ele.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


