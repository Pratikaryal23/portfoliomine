import React from "react";
import Image from "next/image";
import image1 from "/public/images.png";

const Services = () => {
  const data = [
    {
      images: image1,
      description:
        "UI (User Interface) design enhances aesthetics through colors, typography, layouts, and interactive elements. UX (User Experience) focuses on usability, accessibility, and seamless navigation.",
      service: "UI/UX DESIGN",
      provider: "Prateek And CO",
      Price: "$400",
    },
    {
      images: image1,
      description:
        "A web app is an interactive application accessed through a browser, providing dynamic content and real-time updates. Ideal for businesses, e-commerce, and online services.",
      service: "WEB APP DEVELOPMENT",
      provider: "Prateek And CO",
      Price: "$400",
    },
    {
      images: image1,
      description:
        "Scalable and responsive custom software solutions tailored for businesses, ensuring efficiency and performance with seamless user experiences.",
      service: "CUSTOM SOFTWARE",
      provider: "Prateek And CO",
      Price: "$500",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#141e30] to-[#243b55] text-white py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-white">
          Our <span className="text-blue-400 border-b-4 border-blue-500 pb-1">Services</span>
        </h2>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {data.map((val, i) => (
          <div
            key={i}
            className="bg-gray-800 bg-opacity-90 shadow-xl rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/50"
          >
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={val.images}
                alt="Service"
                width={150}
                height={150}
                className="w-40 h-40 p-2 rounded-full border-4 border-blue-400 shadow-lg shadow-blue-500/30"
              />
            </div>

            {/* Service Info */}
            <div className="text-center mt-6 space-y-3">
              <h3 className="text-2xl font-semibold text-blue-300">{val.service}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{val.description}</p>
            </div>

            {/* Provider and Price */}
            <div className="mt-6 bg-gray-700 bg-opacity-75 p-4 rounded-lg text-center border border-gray-600">
              <p className="font-medium text-gray-200">Provider: <span className="text-blue-400">{val.provider}</span></p>
              <p className="mt-2 inline-block bg-blue-500 text-white font-semibold text-lg px-5 py-2 rounded-full shadow-md shadow-blue-500/30">
                {val.Price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
