"use client";
import Image from "next/image";
import { useState } from "react";
import { FaUser, FaProjectDiagram, FaSignOutAlt } from "react-icons/fa";
import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen flex`}>
      
      {/* Sidebar */}
      <aside className="w-64 p-5 bg-gray-800 text-white min-h-screen">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <nav className="mt-5">
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
            <FaUser /> Profile
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
            <FaProjectDiagram /> Projects
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
            <FaPersonWalkingArrowLoopLeft /> Skills
          </a>
          <button className="flex items-center gap-2 p-2 mt-5 bg-red-600 hover:bg-red-700 w-full rounded">
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </aside>

    
      <main className="flex-1 p-10">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Welcome, User!</h2>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 border rounded-lg"
          >
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4].map((project) => (
            <div key={project} className="p-5 border rounded-lg shadow-md bg-white text-black">
                 <Image src='/neocart.png' alt="images" width={400} height={400}/>
              <h3 className="text-xl font-semibold">Project {project}</h3>
              <p className="text-gray-500 mt-2">Description of the project.</p>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
                View Details
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4].map((Skills) => (
            <div key={Skills} className="p-5 border rounded-lg shadow-md bg-white text-black">
                <Image src='/images.png' alt="images" width={400} height={400}/>
              <h3 className="text-xl font-semibold">Skills {Skills}</h3>
              <p className="text-gray-500 mt-2">Description of the Skills.</p>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
                View Details
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
