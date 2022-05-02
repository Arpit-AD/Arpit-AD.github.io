import React, { useState } from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Links from '../Links/Links';
import { useNavigate } from 'react-router-dom';



const Navbar  = () =>{
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();

  const NavBarItem = ({ title, classprops }) => (
    <li className={`mx-6 cursor-pointer ${classprops}`} onClick={() => { navigate(`/${title}`);  setToggleMenu(false)}} >{title}</li>
  );

  return (
      <nav className="text-metal font-sans  w-1/4 md:m-12 m-3">
          <ul className='md:block hidden '>
              <li className='my-2  hover:text-white hover:scale-105 cursor-pointer' onClick={() => navigate("/profile")} >Profile</li>
              <li className='my-2  hover:text-white hover:scale-105 cursor-pointer' onClick={() => navigate("/projects")} >Projects</li>
              <li className='my-2  hover:text-white hover:scale-105 cursor-pointer' onClick={() => navigate("/experience")} >Experience</li>
              <li className='my-2  hover:text-white hover:scale-105 cursor-pointer' onClick={() => navigate("/contact")} >Contact</li>
      </ul>
      <div className="flex relative ">
        {!toggleMenu && (
          <HiMenuAlt4  className="text-white text-[20px] md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose className="text-white text-[20px] md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <div className={` fixed z-50 -top-0 -left-2 px-6 py-2 w-9/12 h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-start dark-gradient-bg text-metal transition-all animate-slide-in`} >
          <ul>
            <li className="text-xl w-full m-1"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["profile", "projects", "experience", "contact"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="m-1 text-base text-metal hover:text-white capitalize"  />
            )}
            </ul>
            <Links />
            <div className='font-mono text-white w-full mt-10 mx-6' onClick={() => navigate("/")} >
              <div className='text-xl font-semibold tracking-widest'>
                  ARPIT DAS
              </div>
              <div className='text-xs tracking-widest text-gray-400 '>
                 SOFTWARE DESIGNER & DEVELOPER 
              </div>
          </div>
          </div>

        )}
      </div>
    </nav>
  )
}

export default Navbar
