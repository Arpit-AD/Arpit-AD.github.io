import React, { useState } from 'react'
import Links from '../Links/Links'
import Navbar from '../Navbar/Navbar'
import {BsArrowUpRightCircleFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'



const LeftHalf  = () =>{
  const navigate = useNavigate();

  return (
    <div className='min-h-screen md:w-1/2 w-5/6 dark-gradient-bg'>
      <Navbar />
      <div className='md:block hidden z-40'>
        <Links />
        </div>
          <div className='font-sans md:hidden block xs:text-2xl text-xl leading-loose text-2xl font-semibold text-gray-500 font-bold m-10 w-fit tracking-wider xl:p-10 p-6 xs:p-6 p-0 md:m-10 m-6 xs:m-6 m-2 md:mt-0 mt-16  transition duration-200 ease-out transition-all animate-slide-in'>
             <span className='xl:text-3xl text-2xl xs:text-2xl text-base font-semibold text-gray-400 font-bold '>Hello, This is </span><span className='xl:text-6xl text-5xl xs:text-5xl text-3xl font-bold text-white'>Arpit </span><br />
              <div className='xl:text-2xl text-xl xs:text-xl text-base text-gray-400 xl:p-4 p-2 font-bold leading-tight'>A <span className='text-gray-100'>Software Developer </span> & <span className='text-gray-100'> Designer</span><br/>
                  Passionate to make life <br/> easy and amazing!!!
                  </div>
          </div>
          <div className='md:block hidden text-white w-2/3  mt-32 mx-12 fixed bottom-10' onClick={() => navigate('/')}>
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

export default LeftHalf
