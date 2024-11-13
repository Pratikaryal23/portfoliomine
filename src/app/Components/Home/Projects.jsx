// PortfolioCard.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import image1 from "/public/devdaha.jpeg";
import image2 from "/public/Csit Association Logo.png";

const projects = [
  {
    title: "Devdaha Medical College Project",
    description:
      "<p>Developed a comprehensive web application for Devdaha Medical College, focusing on responsive design, user-friendly layouts, and data-driven components for student information, admissions, and more.</p>",
    image: image1, // Replace with actual image path
    link: "https://devdahamedicalcollege.edu.np", // Replace with actual project link
  },
  {
    title: "CSIT ASSOCIATION OF BMC",
    description:
      "<p>Collaborated on developing a comprehensive web application for CSIT Association of BMC, focusing on responsive design, user-friendly layouts, and data-driven components for student information, events, and more.</p>",
    image: image2, // Replace with actual image path
    link: "https://csitabmc.com", // Replace with actual project link
  },
  // Add more projects here if needed
];

const Projects = () => {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <div className="  gap-2">
          <h2 className="text-3xl font-bold text-center mb-8  py-1  "> My
            {" "}
            <span className="text-red-400 border-b-2 border-black py-2">Projects</span> 
          </h2>
        </div>

        <div className="w-full flex justify-center py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-48"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <div
                    className="text-gray-600 mb-4 line-clamp-4"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></div>

                  {/* Link to Project */}
                  <Link href={project.link} passHref>
                    <button className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 focus:outline-none">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
