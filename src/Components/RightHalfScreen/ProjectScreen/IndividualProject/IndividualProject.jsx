import React from 'react'
const IndividualProject  = ({project_data}) =>{
    
  return (
      <div  className="3lg/2:w-4/6 w-full mx-auto " >
        <img src={project_data.img} className="my-5 transition-all animate-slide-in" />
        <div className='sm:text-3xl text-2xl font-semibold tracking-tighter text-darkslate '>{project_data.name}</div>
        <div className='text-base font-mono text-lighslate '>
        <span className='font-semibold'>Data Ecosystem:</span> {project_data.tech &&
            project_data.tech.map((technologies, i) =>
              <span> {technologies} </span>  
            )} 
        </div>
        <div className='text-base font-mono text-slate-600 my-4 '>
          {project_data.description}
        </div>
        <div className='text-center'>
        {project_data.github.length > 0 && <a href = {project_data.github} target = "_blank" className='inline p-2 hover:bg-darkslate bg-lightslate sm:text-xl text-base text-white font-mono mx-2 rounded shadow-2xl  hover:scale-125 '>Github</a>}
                {project_data.link.length > 0 && <a href={project_data.link} target="_blank" className='inline p-2 hover:bg-darkslate bg-lightslate sm:text-xl text-base text-white font-mono mx-2 rounded shadow-2xl  hover:scale-125 '>Project</a>}
              
        </div>
          
      </div>
  )
}

export default IndividualProject
