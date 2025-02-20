import React from "react";
import Image from "next/image";
import Link from "next/link";
import image1 from "/public/devdaha.jpeg";
import image2 from "/public/Csit Association Logo.png";
import image3 from "/public/neocart.png";

const projects = [
  {
    title: "Devdaha Medical College Project",
    description:
      "<p>Developed a comprehensive web application for Devdaha Medical College, focusing on responsive design, user-friendly layouts, and data-driven components for student information, admissions, and more.</p>",
    image: image1,
    link: "https://devdahamedicalcollege.edu.np",
  },
  {
    title: "CSIT ASSOCIATION OF BMC",
    description:
      "<p>Collaborated on developing a web app for CSIT Association of BMC, focusing on responsive design, user-friendly layouts, and data-driven components for student information, events, and more.</p>",
    image: image2,
    link: "https://csitabmc.com",
  },
  {
    title: "Neo Cart (Hackathon Project)",
    description:
      "<p>NeoCart is an AI-driven marketplace for authentic Nepali products, supporting small-scale businesses and promoting traditional goods.</p>",
    image: image3,
    link: "https://csitabmc.com",
  },
];

const Projects = () => {
  return (
    <section className="bg-gradient-to-r from-[#141e30] to-[#243b55] text-white py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          My <span className="text-blue-400 border-b-4 border-blue-500 pb-1">Projects</span>
        </h2>
      </div>

      {/* Project Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative w-full h-60">
              <Image src={project.image} alt={project.title} layout="fill" objectFit="contain" />
            </div>

       
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-300 mb-2">{project.title}</h3>
              <div
                className="text-gray-300 text-sm line-clamp-3"
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></div>

            
              <div className="mt-6 text-center">
                <Link href={project.link} passHref>
                  <button className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
