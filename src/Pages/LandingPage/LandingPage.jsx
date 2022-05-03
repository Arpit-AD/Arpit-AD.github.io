import React from 'react'
import { RightHalf, LeftHalf} from '../../Components'
import mypic from "../../images/mypic.png"
import mypic2 from "../../images/mypic2.png"

function LandingPage() {
  // const [screen, setScreen] = useState("Landing");
  return (
      <div className="h-screen flex items-center">
      <LeftHalf />
      <img src={mypic} className='3lg/2:hidden block fixed md:inset-x-1/4 -right-5 bottom-0  w-9/12 imageScreen:w-[320px]  3lg/2:w-[420px] '></img>
      <img src={mypic2} className='3lg/2:block hidden fixed md:inset-x-1/4 -right-5 bottom-0  w-9/12 imageScreen:w-[320px]  3lg/2:w-[500px] '></img>
      <RightHalf />
      {/* {screen === "NotLanding" && <LeftHalfScreen/>}
      {screen === "NotLanding" && <RightHalfScreen/>} */}
      </div>
  )
}

export default LandingPage
