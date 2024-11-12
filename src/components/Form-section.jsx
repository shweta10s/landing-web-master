import Image from 'next/image'
import React , {useState} from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneCallLight } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { Plusjakartasans, volkhvo } from '@/styles/font';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    restaurant: "",
    email: "",
    phone: "",
    date:'',
    time:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.date = new Date().toDateString();
    formData.time = new Date().toLocaleTimeString();
    console.log(formData)
    try {
      const response = await axios.post('https://sheetdb.io/api/v1/z36e84ew6zby0', {
        data: formData
      });
      console.log('Data sent successfully:', response.data);
      toast.success(' Data Submitted successfully');
    } catch (error) {
      toast.error('❌ Data not Submit');
      console.error('Error sending data:', error);
    }
    setFormData({
      name: "",
      restaurant: "",
      email: "",
      phone: "",
      date:new Date().toDateString()
    })
  };
  return (
    <div className="max-w-7xl mx-auto md:my-10 my-4 xl:px-10 px-6 shadow-[0px_8px_16px_0px_rgba(250,116,54,0.07)] rounded-2xl">
      <h1 className={`xl:text-5xl md:text-3xl text-2xl  text-center font-medium ${volkhvo.className}`}>Ready to grow with us? <br /> Get started for free Demo, <span className="text-primary-main"> No credit card needed.</span></h1>
      <div className="grid md:grid-cols-2 gap-6 my-8 items-center">
        <form onSubmit={handleSubmit} className="space-y-6">
        <input
          name="name"
          placeholder="Name"
          className="outline-none bg-primary-main/5 w-full p-3.5 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="restaurant"
          placeholder="Restaurant or Cafe Name"
          className="outline-none bg-primary-main/5 w-full p-3.5 rounded"
          value={formData.restaurant}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          className="outline-none bg-primary-main/5 w-full p-3.5 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone/Mobile"
          className="outline-none bg-primary-main/5 w-full p-3.5 rounded"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className={`bg-primary-main p-2.5 text-white text-xl font-medium px-5 rounded-xl mt-10 max-md:w-full`}
        >
          Let’s do it!
        </button>
      </form>
      <div className="h-full w-full">
        <div className="md:h-[18vw] w-[80%] relative float-animation">
          <Image src="/Home-Images/08.png" alt="No Preview" fill className="object-contain" />
        </div>
        <div className="grid justify-center space-y-4 mt-5">
          <div className="flex items-center gap-4">
            <FaLocationDot className="text-primary-main text-xl" />
            <p className="text-[#222222]">Indrapuri Bhopal (M.P)</p>
          </div>
          <div className="flex items-center gap-4">
            <PiPhoneCallLight className="text-primary-main text-xl" />
            <Link href="tel:9340534177" className="text-[#222222]">+91 9340534177</Link>
          </div>
          <div className="flex items-center gap-4">
            <MdOutlineEmail className="text-primary-main text-xl" />
            <Link href="mailto:digitalqrmenu@igrowmybiz.com" className="text-[#222222] ">digitalqrmenu@igrowmybiz.com</Link>
          </div>

        </div>

      </div>

      <ToastContainer />

      </div>
    </div>
  )
}

export default FormSection