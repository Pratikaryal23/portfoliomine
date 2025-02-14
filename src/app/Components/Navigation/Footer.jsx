import Image from "next/image";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import image from "/public/mylogo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center md:text-left md:flex-row md:justify-between gap-6">
        {/* Logo and Branding */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={image} alt="Logo" width={80} height={80} className="rounded-full shadow-lg" />
          <h2 className="text-2xl font-semibold mt-3">Pratik Aryal</h2>
          <p className="text-gray-400 mt-1 text-sm">Front-End Developer & UI/UX Designer</p>
        </div>

        {/* Quick Links */}
        <div className="hidden md:flex flex-col text-gray-300 space-y-2">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <a href="/" className="hover:text-emerald-400 transition">Home</a>
          <a href="/about" className="hover:text-emerald-400 transition">About</a>
          <a href="/projects" className="hover:text-emerald-400 transition">Projects</a>
          <a href="/contact" className="hover:text-emerald-400 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="#" className="group p-4 rounded-full bg-gray-800 hover:bg-blue-600 transition-all">
            <FaFacebookF size={24} className="text-white group-hover:scale-110 transition-transform" />
          </a>
          <a href="#" className="group p-4 rounded-full bg-gray-800 hover:bg-blue-500 transition-all">
            <FaLinkedinIn size={24} className="text-white group-hover:scale-110 transition-transform" />
          </a>
          <a href="#" className="group p-4 rounded-full bg-gray-800 hover:bg-gray-500 transition-all">
            <FaGithub size={24} className="text-white group-hover:scale-110 transition-transform" />
          </a>
          <a href="#" className="group p-4 rounded-full bg-gray-800 hover:bg-pink-500 transition-all">
            <FaInstagram size={24} className="text-white group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Pratik Aryal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
