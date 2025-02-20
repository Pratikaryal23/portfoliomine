import React from "react";
import Image from "next/image";
import profilePic from "/public/image1.jpg"; 

const About = () => {
  return (
    <section className="bg-gradient-to-r from-[#141e30] to-[#243b55] text-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Profile */}
        <div className="bg-gray-800 rounded-xl p-6 text-center shadow-lg">
          <div className="flex justify-center">
            <Image
              src={profilePic}
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full w-48 h-48 sm:w-60 sm:h-60 border-4 border-blue-400 shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4">Pratik Aryal</h2>
          <p className="text-gray-300">Software Developer</p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl">
              🔗
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl">
              🔗
            </a>
          </div>

          {/* Download CV Button */}
          <button className="mt-6 bg-blue-500 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-600 transition">
            Download CV
          </button>
        </div>

        {/* Right Side - About Me */}
        <div className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-blue-400">About <span className="text-white">Me</span></h3>
          <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed">
            I Am a passionate software developer and open-source enthusiast. I love exploring how technology can improve efficiency and building scalable systems.
          </p>

          {/* Personal Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-gray-300">
            <p><span className="text-blue-300 font-semibold">Age:</span> 20</p>
            <p><span className="text-blue-300 font-semibold">Residence:</span> Nepal</p>
            <p><span className="text-blue-300 font-semibold">Address:</span> Gulmi</p>
            <p><span className="text-blue-300 font-semibold">Email:</span>aryalpratik057@gmail.com</p>
            <p><span className="text-blue-300 font-semibold">Phone:</span> 9845455112</p>
          </div>

          {/* Tech Stack */}
          <h3 className="text-2xl font-bold text-blue-400 mt-8">My <span className="text-white">Tech Stack</span></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-gray-300">
            <p><span className="font-semibold">Graphics:</span> 0.5 yrs</p>
            <p><span className="font-semibold">JavaScript:</span> 6 months</p>
            <p><span className="font-semibold">HTML, CSS:</span> 3 yrs</p>
            <p><span className="font-semibold">React, Next.js:</span> 3 yrs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
