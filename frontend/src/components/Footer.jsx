import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black text-white w-screen overflow-hidden -ml-[50vw] left-1/2 relative px-4 sm:px-8">
      <div className="max-w-7xl mx-auto py-16 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm">
        
        {/* Left Column - Force Sales Content */}
        <div>
          <p className="text-gray-300 leading-relaxed">
            At Force Sales Solar, we don't just sell—<strong>we empower</strong>. Our mission is to drive solar adoption by educating and enabling customers with affordable, reliable, and clean energy solutions. <br /><br />
            We align with the <strong>UN Sustainable Development Goals</strong>, pushing forward a greener future through awareness, outreach, and service. Whether you're a homeowner, business, or institution—our goal is to turn your roof into a source of power, purpose, and progress. <br /><br />
            Join the solar movement. Be the change.
          </p>
        </div>

        {/* Middle Column - Company Links */}
        <div>
          <p className="text-xl font-semibold mb-5 text-white">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Column - Contact Info */}
        <div className="text-left sm:text-center">
          <p className="text-xl font-semibold mb-5 text-white">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li><strong>Phone:</strong> +91 9876543210</li>
            <li><strong>Email:</strong> contact@solarenergy.com</li>
          </ul>

          <p className="text-lg font-medium mt-5 text-white">Address:</p>
          <ul className="ml-0 sm:ml-5 text-gray-400">
            <li>Unit-113, Malabar Hill</li>
            <li>Maharashtra - 400006</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-400">
          © 2025 solarenergy.com — All Rights Reserved.
        </p>

        <p className="text-sm text-green-500 font-medium mt-1">
          ♻️ This website is proudly powered by solar energy.
        </p>

        {/* Instagram Section */}
        <div className="flex flex-col items-center gap-2 py-6">
          <p className="text-gray-400 font-medium">
            Follow us on Instagram for solar updates
          </p>
          <a
            href="https://www.instagram.com/solarenergy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
          >
            <FaInstagram className="text-3xl text-pink-500 hover:text-pink-600 transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
