import Image from "next/image";
import Link from "next/link";
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
          <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
          <Link href="/about" className="hover:text-emerald-400 transition">About</Link>
          <Link href="/projects" className="hover:text-emerald-400 transition">Projects</Link>
          <Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <Link href="https://www.facebook.com/share/1A7jYC6rzo/" target="_blank">
            <span className=" rounded-full bg-gray-800 hover:bg-blue-600 transition-all">
              <FaFacebookF  className="text-white group-hover:scale-110 transition-transform" />
            </span>
          </Link>

          <Link href="https://www.linkedin.com/in/pratik-aryal-256a79289" target="_blank">
            <span className=" w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-500 transition-all">
              <FaLinkedinIn  className="text-white group-hover:scale-110 transition-transform" />
            </span>
          </Link>

          <Link href="https://github.com/your-github-profile" target="_blank">
            <span className=" rounded-full bg-gray-800 hover:bg-gray-500 transition-all">
              <FaGithub className="text-white group-hover:scale-110 transition-transform" />
            </span>
          </Link>

          <Link href="https://www.instagram.com/your-instagram-profile" target="_blank">
            <span className=" rounded-full bg-gray-800 hover:bg-pink-500 transition-all">
              <FaInstagram  className="text-white group-hover:scale-110 transition-transform" />
            </span>
          </Link>
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
