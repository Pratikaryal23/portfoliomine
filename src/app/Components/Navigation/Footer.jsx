import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import image from '/public/mylogo.jpeg'

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-4 text-white py-8  shadow-gray-700 relative bottom-0 sm:flex-col lg:flex-row">
      {/* Logo Section */}
      <div className="flex justify-center mb-4 ">
        <Image
        src={image} 
          alt="Your Logo"  
          className="h-20 w-20" 
          width={400}
          height={400}
        />
      </div>

      {/* Social Icons Section */}
      <div className="flex justify-center space-x-8 mb-4">
        {/* Facebook Icon with Gradient */}
        <a 
          href="£" 
          
          className="p-4 rounded-full bg-gradient-to-r from-blue-700 to-blue-400 hover:scale-110 transition-transform"
        >
          <FaFacebookF size={30} />
        </a>

        {/* LinkedIn Icon with Gradient */}
        <a 
          href="£" 
         
          className="p-4 rounded-full bg-gradient-to-r from-blue-900 to-blue-400 hover:scale-110 transition-transform"
        >
          <FaLinkedinIn size={30} />
        </a>

        {/* GitHub Icon with Gradient */}
        <a 
          href="£" 
         
          className="p-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-400 hover:scale-110 transition-transform"
        >
          <FaGithub size={30} />
        </a>

        {/* Instagram Icon with Gradient */}
        <a 
          href="£" 
         
          className="p-4 rounded-full bg-gradient-to-r from-pink-600 to-yellow-500 hover:scale-110 transition-transform"
        >
          <FaInstagram size={30} />
        </a>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-4">
        <p className="text-xl text-black">
          Copyright &copy; {new Date().getFullYear()} <span className='text-black'>Pratik Aryal</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;