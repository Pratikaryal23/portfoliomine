// SkillsCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode } from '@fortawesome/free-solid-svg-icons';

const skills = [
  {
    icon: faPalette,
    title: 'UI/UX Design',
    description: 'Creating user-friendly interfaces with a focus on design and usability.',
    bgColor: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    icon: faCode,
    title: 'Web Development',
    description: 'Building responsive, scalable websites using modern web technologies.',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
];

const SkillsCard = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8"> My<span className='text-red-400 border-b-2 border-black py-1'>Skills</span> </h2>

      <div className="w-full flex flex-col sm:flex-row gap-8 justify-around items-stretch py-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-6 rounded-lg ${skill.bgColor} shadow-md w-full sm:w-5/12 text-center
            transform transition duration-300 hover:scale-105 hover:shadow-xl`}
          >
            <div className="flex justify-center items-center h-16 w-16">
              <FontAwesomeIcon icon={skill.icon} className={`text-4xl ${skill.iconColor}`} />
            </div>
            <h3 className="text-2xl font-semibold mt-4">{skill.title}</h3>
            <p className="text-gray-600 mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
