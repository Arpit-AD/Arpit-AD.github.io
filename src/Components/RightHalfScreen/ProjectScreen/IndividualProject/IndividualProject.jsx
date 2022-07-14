import React from 'react'
const IndividualProject  = ({singleProject}) =>{
    
  return (
      <div  className="3lg/2:w-4/6 w-full mx-auto " >
        <img src={singleProject.img} className="my-5 transition-all animate-slide-in" />
        <div className='text-center my-4'>
                {singleProject.github.length > 0 && <a href={singleProject.github} target = "_blank" className='inline p-2 hover:bg-darkslate bg-lightslate sm:text-xl text-base text-white font-mono mx-2 rounded shadow-2xl  hover:scale-125'>Github</a>}
                {singleProject.link.length > 0 && <a href={singleProject.link} target = "_blank" className='inline p-2 hover:bg-darkslate bg-lightslate sm:text-xl text-base text-white font-mono mx-2 rounded shadow-2xl  hover:scale-125 '>Project</a>}   
        </div>
        <div className='sm:text-3xl text-2xl font-semibold tracking-tighter text-darkslate '>{singleProject.name}</div>
        <div className='text-base font-mono text-lighslate '>
        <span className='font-semibold'>Data Ecosystem:</span> {singleProject.tech &&
            singleProject.tech.map((technologies, i) =>
              <span> {technologies} </span>  
            )} 
        </div>
        <div className='text-base font-mono text-slate-600 my-4 '>
          {singleProject.description}
        </div>
        
      </div>
  )
}

export default IndividualProject
