import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Links from '../Links/Links'
import Navbar from '../Navbar/Navbar'

function LeftHalfScreen() {
  const navigate = useNavigate();

  return (
    <div className='fixed min-h-screen md:w-1/4 w-1/6 dark-gradient-bg'>
    <Navbar />
      <div className=' md:block hidden'>
        <Links />
        </div>
        <div className='md:block hidden text-white w-3/4  mt-32 mx-12 cursor-pointer fixed bottom-10' onClick={()=>navigate('/')}>
              <div className='text-3xl font-semibold tracking-widest'>
                  ARPIT DAS
              </div>
              <div className='text-sm tracking-widest text-gray-400 '>
                 SOFTWARE DESIGNER & DEVELOPER 
                </div>
          </div>
    </div>
  )
}

export default LeftHalfScreen
