import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", experience: "3+ years" },
    { name: "CSS", experience: "3+ years" },
    { name: "JavaScript", experience: "3+ years" },
    { name: "React", experience: "2+ years" },
    { name: "Next.js", experience: "2+ years" },
    { name: "C", experience: "2+ years" },
    { name: "C#", experience: "1+ year" },
  ];

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-white">
          My <span className="text-blue-400 border-b-4 border-blue-500 pb-1">Skills</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-90 shadow-xl rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-blue-300">{skill.name}</h3>
            <p className="text-gray-400">{skill.experience}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
