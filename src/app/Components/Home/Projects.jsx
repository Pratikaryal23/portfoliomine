"use client";
import React, { useState } from "react";
import { ExternalLink, Code, Globe, Award } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Devdaha Medical College",
    description:
      "Developed a comprehensive web application for Devdaha Medical College, focusing on responsive design, user-friendly layouts, and data-driven components for student information, admissions, and more.",
    image: "devdaha.jpeg",
    link: "https://devdahamedicalcollege.edu.np",
    tech: ["Next.js", "React", "Tailwind"],
    category: "Web Development",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "CSIT Association BMC",
    description:
      "Collaborated on developing a web app for CSIT Association of BMC, focusing on responsive design, user-friendly layouts, and data-driven components for student information, events, and more.",
    image: "Csit Association Logo.png",
    link: "https://csitabmc.com",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Neo Cart (Hackathon)",
    description:
      "NeoCart is an AI-driven marketplace for authentic Nepali products, supporting small-scale businesses and promoting traditional goods with cutting-edge technology.",
    image: "neocart.png",
    link: "https://neocart-demo.com",
    tech: ["AI/ML", "E-commerce", "React"],
    category: "AI Project",
    color: "from-green-500 to-teal-500",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Development", "Full Stack", "AI Project"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full opacity-20"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 py-20 px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <Code className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Portfolio</span>
          </div>

          <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200 mb-4">
            Featured Projects
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative solutions and creative implementations across
            various technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <button className="p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/30 transition-all">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/30 transition-all">
                        <Globe className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm border border-white/30 rounded-full text-xs text-white font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <Award className="w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-cyan-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                      <span className="flex items-center justify-center gap-2">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </button>
                  </a>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Floating Effect */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${
                  project.color
                } opacity-0 blur-xl transition-opacity duration-500 -z-10 ${
                  hoveredIndex === index ? "opacity-30" : ""
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4">
            <span className="text-gray-300">Want to see more projects?</span>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transition-all">
              View All
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Projects;
