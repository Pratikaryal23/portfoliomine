import React from "react";
import Image from "next/image";
import profileImage from "/public/prateek.jpg";
import image1 from "/public/image1.jpg";
import image2 from "/public/image2.jpg";
import image3 from "/public/image3.jpg";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          About <span className="text-blue-400 border-b-4 border-blue-500 pb-1">Me</span>
        </h2>
      </div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6">
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-3xl font-semibold text-blue-300 mb-4">Hello, I am Prateek 👋</h3>
          <p className="text-gray-300 leading-relaxed">
            A passionate **UI/UX Designer and Web Developer** who loves crafting engaging digital experiences. 
            I specialize in **Next.js, Tailwind CSS, and modern web technologies** to build seamless and 
            user-friendly interfaces.
          </p>
          <p className="text-gray-300 mt-4">
            My goal is to transform ideas into functional, **aesthetic, and high-performance applications** 
            that delight users. I believe in minimalistic design, smooth animations, and pixel-perfect UI.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition">
            Contact Me
          </button>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72">
            <Image 
              src={profileImage} 
              alt="Profile" 
              layout="fill" 
              className=" rounded-full border-4 border-blue-400 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Multiple Images Section */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {[image1, image2, image3].map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <Image src={img} alt={`About image ${index + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
