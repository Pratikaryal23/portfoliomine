"use client";
import Image from "next/image";
import React from "react";
import image from "/public/prateek.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
        
        {/* Left Side - Intro & Animation */}
        <div className="space-y-6">
          <p className="text-3xl md:text-5xl font-extrabold">
            <span className="block text-gray-400">Hello,</span>
            <span className="block text-white">I am</span>
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Pratik Aryal
            </span>
          </p>

          {/* Typing Animation */}
          <div className="text-2xl md:text-3xl font-medium text-gray-300">
            <TypeAnimation
              sequence={[
                "Front-End Developer 🚀",
                1500,
                "UI/UX Designer 🎨",
                1500,
                "Creative Thinker 💡",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start space-x-6 mt-5">
            <a href="https://www.facebook.com/share/1A7jYC6rzo/" target="_blank">
              <FaFacebook className="w-12 h-12 p-3 rounded-full bg-gray-700 text-white hover:bg-blue-600 hover:scale-110 transition-all shadow-lg" />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fpratik799840648" target="_blank">
              <FaTwitter className="w-12 h-12 p-3 rounded-full bg-gray-700 text-white hover:bg-sky-500 hover:scale-110 transition-all shadow-lg" />
            </a>
            <a href="https://www.linkedin.com/in/pratik-aryal-256a79289" target="_blank">
              <FaLinkedin className="w-12 h-12 p-3 rounded-full bg-gray-700 text-white hover:bg-blue-700 hover:scale-110 transition-all shadow-lg" />
            </a>
          </div>
        </div>

        {/* Right Side - Image with Glow Effect */}
        <div className="relative group">
          <div className="absolute inset-0 bg-emerald-400 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-all"></div>
          <Image
            src={image}
            alt="Pratik Aryal"
            width={320}
            height={320}
            className="rounded-full border-4 border-gray-600 shadow-xl transition-transform hover:scale-105"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
