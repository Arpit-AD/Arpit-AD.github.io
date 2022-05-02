import React from 'react'
import { ImLinkedin ,ImGithub, ImTwitter, ImInstagram} from "react-icons/im"
import { SiLeetcode} from "react-icons/si"


const Links  = () =>{
      

  return (
      <div className='text-gray-400  w-1/4 my-20 md:mx-12 mx-6'>
          <ul>
          <li><a href="https://github.com/Arpit-AD/" target="_blank" ><ImGithub  className='hover:text-white h-8 w-5'/></a></li>
          <li><a href="https://www.linkedin.com/in/arpit-das-9210a01a5/" target="_blank"><ImLinkedin className='hover:text-white h-8 w-5'/></a></li>
          <li><a href="https://twitter.com/Arpitad10" target="_blank"><ImTwitter className='hover:text-white h-8 w-5'/></a></li>
          <li><a href="https://leetcode.com/adarpit/" target="_blank"><SiLeetcode className='hover:text-white h-8 w-5'/></a></li>
          <li><a href="https://www.instagram.com/arpit_ad_/" target="_blank"><ImInstagram className='hover:text-white h-8 w-5'/></a></li>
          </ul>
    </div>
  )
}

export default Links
