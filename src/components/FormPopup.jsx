import React, { useState } from 'react';

import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const FormPopup = ({name}) => {
  const date = new Date();
  // console.log(date.toDateString())
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    restaurant: "",
    email: "",
    phone: "",
    date:"",
    time: ""
  });
  
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.date = new Date().toDateString()
    formData.time = new Date().toLocaleTimeString();
    try {
      const response = await axios.post('https://sheetdb.io/api/v1/z36e84ew6zby0', {
        data: formData
      });
      console.log('Data sent successfully:', response.data);
      toast.success(' Data Submitted successfully');
      toggleModal();
    } catch (error) {
      toast.error('❌ Data not Submit');
      console.error('Error sending data:', error);
    }
    setFormData({
      name: "",
      restaurant: "",
      email: "",
      phone: "",
      date:date.toDateString(),
      time:date.toLocaleTimeString()
    })
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className=""
        type="button"
      >
        {name}
      </button>

      {isOpen && (
        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-white bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-secondary-main/90">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Sign up for our platform
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-primary-main hover:text-primary-main rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-primary-main dark:hover:text-white"
                onClick={toggleModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="restaurant"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Restaurant name
                  </label>
                  <input
                    type="text"
                    name="restaurant"
                    id="restaurant"
                    value={formData.restaurant}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Your restaurant"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="123-456-7890"
                    required
                  />
                </div>
          
                <button
                  type="submit"
                  className="w-full text-white bg-primary-main hover:bg-primary-main focus:ring-4 focus:outline-none focus:ring-primary-main font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-main dark:hover:bg-primary-main dark:focus:ring-primary-main"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormPopup;
