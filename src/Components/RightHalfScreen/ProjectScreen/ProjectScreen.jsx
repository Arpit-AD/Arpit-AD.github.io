import React, { useState } from 'react'
import projectData from '../../../data/projects.js'
import IndividualProject from './IndividualProject/IndividualProject.jsx'
import {TiArrowBack} from "react-icons/ti"
import "./ProjectScreen.css"

const ProjectScreen  = () =>{
      const [project,setProject] = useState("false")
      const [projectType, setProjectType] = useState([])
  return (
      <div className='3lg/2:w-5/6 w-3/4 xs:w-3/4 w-11/12 z-0 mx-auto my-10 '>
      {project === "false" && (<div className='xl:flex block flex-wrap justify-center' >  
        {projectData && projectData.map((theProject) =>
          <div className='p-2  '>
            <div className='hover:bg-slate-800 p_content relative' onClick={() => { setProjectType(theProject); setProject("true") }}>
              <img src={theProject.img} className="p_image projectScreen:max-h-64 h-auto projectScreen:w-auto w-full  cursor-pointer hover:text-darkslate  transition duration-200 ease-out transition-all animate-slide-in hover:ease-in shadow-2xl"  />
              <div className='text-white p_head w-full text-center transition duration-200 ease-out transition-all animate-slide-in hover:ease-in  text-2xl cursor-pointer absolute font-mono top-1/4'>
                <div className='mb-3'> {theProject.name} </div>
                {theProject.github.length > 0 && <a href = {theProject.github} target = "_blank" className='inline p-2 bg-white hover:bg-black hover:text-white text-base text-darkslate mx-2 rounded shadow-2xl  hover:scale-125 '>Github</a>}
                {theProject.link.length > 0 && <a href={theProject.link} target="_blank" className='inline p-2 bg-white hover:bg-black hover:text-white text-base text-darkslate mx-2 rounded shadow-2xl  hover:scale-125 '>Project</a>}
              </div>
              </div> 
        </div>)}
      </div>)}
      {project === "true" && (
        <div >
        <TiArrowBack className='bg-lightslate md:p-2 p-1 rounded-full md:text-5xl text-3xl cursor-pointer text-white fixed hover:scale-105 shadow-2xl' onClick={() => setProject("false")}/>
          <IndividualProject project_data={projectType} />

        </div>
      )}
      </div>
  )
}

export default ProjectScreen
