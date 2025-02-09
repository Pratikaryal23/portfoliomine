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
    <section className="bg-gray-900 text-white py-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">
          Our <span className="text-red-400 border-b-4 border-red-500">Services</span>
        </h2>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {data.map((val, i) => (
          <div
            key={i}
            className="bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={val.images}
                alt="Service"
                width={150}
                height={150}
                className="w-60 h-60 p-2 rounded-full border-4 border-red-400"
              />
            </div>

            {/* Service Info */}
            <div className="text-center mt-4 space-y-3">
              <h3 className="text-2xl font-semibold text-red-300">{val.service}</h3>
              <p className="text-gray-300 text-sm">{val.description}</p>
            </div>

            {/* Provider and Price */}
            <div className="mt-6 bg-gray-700 p-4 rounded-lg text-center">
              <p className="font-medium">Provider: {val.provider}</p>
              <p className="text-yellow-300 font-semibold text-lg">{val.Price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
