import React from "react";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Contact from "../Components/Home/Contact";
import Skills from "../Components/Home/Skill";
import Projects from "../Components/Home/Projects";
import Workedwith from "../Components/Home/Workedwith";


const page = () => {
  return (
    <>
      <div className="flex flex-col gap-[0.5px]" id="home">
        <Home />
         <About /> 
                 <Skills/> 
         <Projects/>
         <Workedwith/>
        <Contact/> 
      </div>
    </>
  );
};

export default page;
