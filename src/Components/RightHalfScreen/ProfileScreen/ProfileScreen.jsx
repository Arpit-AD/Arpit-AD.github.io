import React,{ useState } from 'react'
import Skills from "../ProfileScreen/Skills/Skills.jsx"
import Education from './Education/Education.jsx'

function ProfileScreen() {
  const [showSkills, setShowSkills] = useState("Skills")
  
    return (
        <div className='xl:w-3/4 w-5/6 mx-auto my-8  transition duration-200 ease-in transition-all animate-slide-in'>
          <div className=''>
          <div>
            <div className='text-3xl font-bold text-darkslate tracking-tighter my-3'>
              About
            </div>
            
          </div>
          <div className='font-mono my-2 tracking-loose text-slate-600 '>
          <span className='text-lg text-lightslate font-semibold'>
            Heyy!
          </span> <br/>I am a 20 Year <span className='font-semibold text-lightslate'> Software Designer & Developer </span>who blends the best design and technology to create compelling and engaging software.<br/>
            Currently, A pre-final Year engineering student eager to seek a position in an environment that emphasizes teamwork
            and encourages learning by doing. Always ready to tackle real-life problems with problem-solving.
          </div>
        </div>
        <div className={showSkills === "Education" ? 'flex justify-between': "flex-row-reverse flex justify-between"}>
        
          <div className={showSkills==="Education"?'text-3xl font-bold  my-3 text-darkslate hover:scale-110 cursor-pointer':'text-lg font-semibold my-1 text-slate-600  hover:scale-110 cursor-pointer'}  onClick={() => setShowSkills("Education")} >
              Education
          </div>
          <div className={showSkills==="Skills"?'text-3xl font-bold  my-3 text-darkslate hover:scale-110 cursor-pointer':'text-lg font-semibold my-1 text-slate-600  hover:scale-110 cursor-pointer'} onClick={() => setShowSkills("Skills")}>
              Skills
          </div>
        </div>
        {showSkills === "Education" && <div>
          <Education/>
        </div>}

        {showSkills === "Skills" && <div>
          <Skills/>
        </div>}
        </div>
  )
}

export default ProfileScreen
