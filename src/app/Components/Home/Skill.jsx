import React from "react";
import Image from "next/image";
import image1 from "/public/images.png";

const Skills = () => {
  const skills = [
    {
      images: image1,
      description:
        "Proficient in designing intuitive UI/UX with a focus on user-centered design, typography, color theory, and accessibility.",
      skill: "UI/UX DESIGN",
    },
    {
      images: image1,
      description:
        "Experienced in building dynamic, responsive, and high-performance web applications using modern frameworks and technologies.",
      skill: "WEB DEVELOPMENT",
    },
    {
      images: image1,
      description:
        "Skilled in problem-solving and developing custom software solutions tailored to specific business needs and scalability.",
      skill: "SOFTWARE DEVELOPMENT",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#141e30] to-[#243b55] text-white py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-white">
          My <span className="text-blue-400 border-b-4 border-blue-500 pb-1">Skills</span>
        </h2>
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {skills.map((val, i) => (
          <div
            key={i}
            className="bg-gray-800 bg-opacity-90 shadow-xl rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/50"
          >
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={val.images}
                alt={val.skill}
                width={150}
                height={150}
                className="w-40 h-40 p-2 rounded-full border-4 border-blue-400 shadow-lg shadow-blue-500/30"
              />
            </div>

            {/* Skill Info */}
            <div className="text-center mt-6 space-y-3">
              <h3 className="text-2xl font-semibold text-blue-300">{val.skill}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{val.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
