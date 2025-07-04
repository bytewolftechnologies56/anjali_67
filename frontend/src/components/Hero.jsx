import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaAward, FaCreditCard, FaWallet } from 'react-icons/fa';

const HeroSection = () => {
  const images = [
    'https://thumbs.dreamstime.com/b/solar-energy-panels-light-bulb-sunset-concept-sustainable-resources-82570891.jpg',
    'https://media.istockphoto.com/id/1337173750/photo/solar-and-wind-power.jpg?s=612x612&w=0&k=20&c=krNUQVFMq4DDPDvhKhW4SwL06NlmZ7dcHWWGDsxZzKI=',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen min-h-[calc(100vh-80px)] pt-[100px] md:pt-[120px] overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] z-10">
      {/* Background Image */}
      <img
        src={images[currentIndex]}
        alt="Solar Slide"
        className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out z-0"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between text-white px-4 text-center pb-8 z-10">
        {/* Title Section */}
        <div className="flex flex-col items-center transition-opacity duration-1000 ease-in-out">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 uppercase tracking-wide">
          </h1>
          <p className="text-base sm:text-lg max-w-3xl">
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 px-4 max-w-6xl mx-auto">
          {/* Feature Cards */}
          {[
            {
              icon: <FaQuoteLeft />,
              bg: 'bg-green-500',
              title: 'Enquire Now',
              subtitle: 'Click Here',
            },
            {
              icon: <FaAward />,
              bg: 'bg-gray-100 text-black',
              title: 'Genuine',
              subtitle: 'Products',
            },
            {
              icon: <FaCreditCard />,
              bg: 'bg-gray-100 text-black',
              title: 'Secure',
              subtitle: 'Payments Option',
            },
            {
              icon: <FaWallet />,
              bg: 'bg-gray-100 text-black',
              title: 'Buy Now Pay Later',
              subtitle: 'Cardless EMI',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex rounded shadow overflow-hidden"
            >
              <div className="bg-gray-800 text-white p-4 flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <div className={`${item.bg} p-4 flex flex-col justify-center`}>
                <span className="font-bold uppercase text-sm">
                  {item.title}
                </span>
                <span className="text-sm">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
