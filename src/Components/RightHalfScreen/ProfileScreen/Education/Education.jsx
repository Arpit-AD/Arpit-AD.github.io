import React, { useState } from 'react'
import { FaSchool , FaUserGraduate} from "react-icons/fa"
import { MdSchool} from "react-icons/md"



function Education() {

    return (
        <div className=''>

            <div className="flex">
                <FaUserGraduate className=' text-xl h-10 text-slate-700' />
                <div className='font-semibold text-xl mx-3 my-1 text-lightslate'>Maharaja Surajmal Institute of Technology<div className='font-normal font-mono text-darkslate text-base'>Bachelors in Technology(CSE)<br/> GPA-8.748 </div> </div>
                
            </div>
            <div className='flex'>
                <FaSchool className='text-2xl text-slate-700 h-10' />
                <div className='font-semibold text-xl mx-3 my-1 text-lightslate'>Vivekanand School <div className='font-normal font-mono text-darkslate text-base'>Senior Secondary School (XIIth)<br/>Percentage-89.8 </div></div>
                
            </div>
            <div className='flex'>
                <MdSchool className='text-2xl text-slate-700 h-10' />
                <div className='font-semibold text-xl mx-3 my-1 text-lightslate'>Vivekanand School <div className='font-normal font-mono text-darkslate text-base'>Secondary School (Xth)<br/>GPA-10</div></div>
                
            </div>
        </div>
  )
}

export default Education
