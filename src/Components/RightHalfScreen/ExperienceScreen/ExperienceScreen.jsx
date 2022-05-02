import React from 'react'
import experienceData from '../../../data/experience'

const ExperienceScreen  = () =>{
    
  return (
      <div className='3lg/2:w-5/6 w-3/4 xs:w-3/4 w-11/12 z-0 mx-auto my-10  transition duration-200 ease-out transition-all animate-slide-in'>
          {experienceData && experienceData.map((data) => 
              <div> 
              <div className='xs:text-3xl text-2xl font-bold text-darkslate tracking-wide mb-5'>
                  {data.experienceName}
              </div>
              <div>
                      {data.experience && data.experience.map((innerdata) => <div className='mb-6'>
                          <div className='xs:text-2xl text-xl font-mono text-slate-800 leading-5  md:flex block justify-between'> <div>{innerdata.companyName} </div> <div className='text-gray-600 text-lg'>{ innerdata.duration}</div></div>
                          <div className='text-md font-mono'> {innerdata.position} </div>
                          {innerdata.image && <div className='w-24 p-2'>
                                      <img src={innerdata.image} />
                                  </div>}
                              {innerdata.project && innerdata.project.map((projectInExp) => <div>
                                  <div className='my-4'>
                                      <a href={projectInExp.url} target="_blank" className='font-bold  font-mono text-lightslate text-lg'> {projectInExp.nameOfProject} </a>
                                      <div className='font-mono'> <span className='font-semibold'>Data Ecosystem: </span> {projectInExp.techStack && projectInExp.techStack.map((skillInproject) => <span>{skillInproject} </span>)}</div>
                                      </div>
                              </div>)}
                          <ul className='mt-4 list-disc list-inside text-base font-mono text-gray-600 lg:w-5/6 w-full'>
                           <span className='font-semibold text-black'>   Description: </span>
                          {innerdata.description && innerdata.description.map((descData) => 
                             <li className='mb-2'>{descData}</li> 
                          )}
                          </ul>
                          <div className="h-[1px] w-full bg-gray-400 mt-4" />
                          <div className="h-[1px] w-full bg-gray-400 mt-1 mb-4" />
                              </div>
                    )}  
            </div>
            </div>
          )
              
         }
    </div>
  )
}

export default ExperienceScreen
