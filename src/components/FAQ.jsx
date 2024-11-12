import React, { useState } from 'react';

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  const faqData = [
    {
      question: '1. What is a QR code menu for restaurants?',
      answer: 'A QR code menu is a digital menu that customers can access by scanning a QR code with their smartphone. It replaces traditional paper menus, offering a dynamic, interactive experience that can be easily updated with new items or promotions.',
    },
    {
      question: '2. How does a QR menu benefit my restaurant?',
      answer: ` QR code menu benefits your restaurant by reducing printing costs, enhancing hygiene since it's contactless, allowing instant updates for menu changes, and speeding up the ordering process. It also offers customers a modern, tech-savvy dining experience, improving overall satisfaction.`,
    },
    {
      question: '3. How can customers access my QR code menu?',
      answer: 'Customers can access your QR code menu by simply scanning the QR code with their smartphone camera. This will instantly direct them to the digital menu, allowing them to browse and place orders without needing physical menus or interaction with staff.',
    },
    {
      question: '4. What happens when you scan a QR code?',
      answer: `When you scan a QR code with your smartphone camera, it prompts you to open a link. This link can take you to platforms like WhatsApp and then directly to your restaurant's digital menu, offering a seamless and convenient user experience.`,
    },
  ];

  return (
    <div id="" className="md:my-8">
      <div className="border rounded-lg">
        {faqData.map((item, index) => (
          <div key={index} className="border">
            <div
              className={(selected === index ? "text-primary-main p-4 cursor-pointer flex justify-between items-center" : " p-4 cursor-pointer flex justify-between items-center")}
              onClick={() => toggle(index)}
            >
              <h3 className="md:text-lg font-medium">{item.question}</h3>
              <span className="text-2xl">{selected === index ? '- ' : '+'}</span>
            </div>
            <div
              className={`px-4 bg-white overflow-hidden ${
                selected === index ? 'max-h-screen p-2' : 'max-h-0'
              }`}
            >
              <p className="text-[#666666] px-4">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
