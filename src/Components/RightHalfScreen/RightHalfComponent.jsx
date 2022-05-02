import React,{ useState } from 'react'
import {BsArrowUpRightCircleFill} from "react-icons/bs"

function RightHalfScreenComponent({Right}) {
  return (
    <div className='min-h-screen ml-auto xl:w-3/4 w-9/12 md:w-9/12 w-10/12 light-gradient-bg'>
        {Right}
      <div className=' text-gray-500 w-fit text-lg tracking-widest fixed bottom-1/2 md:-right-12 -right-16 rotate-90 '> (+91) - 77019 61032</div>
          <div className='fixed w-fit xl:text-2xl text-xl md:text-xl text-md md:px-7 px-0 flex md:py-3 py-3 text-gray-500 font-semibold  bottom-10 right-2 tracking-widest'>
            <span className='md:inline hidden '>RESUME</span>    <a href='https://drive.google.com/file/d/1bp2r4Ct6jE7MgOT_dw5jB5anklBLiggd/view?usp=sharing' target="_blank" > <BsArrowUpRightCircleFill className='text-slate-600 hover:text-darkslate h-8 mx-1 w-10 '/> </a>
          </div>
  </div>
  )
}

export default RightHalfScreenComponent
