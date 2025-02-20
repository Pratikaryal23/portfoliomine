import React from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import SkillsCard from './Components/Home/Skill'
import Projects from './Components/Home/Projects'
import Workedwith from './Components/Home/Workedwith'
import Contact from './Components/Home/Contact'

const page = () => {
  return (
    <div className='flex flex-col gap-1'>
      <Home/>
      <About />
        <SkillsCard/>
        <Projects/>
        <Workedwith/>
        <Contact/>
      </div>
  )
}

export default page