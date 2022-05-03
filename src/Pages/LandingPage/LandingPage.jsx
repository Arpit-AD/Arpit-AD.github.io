import React from 'react'
import { RightHalf, LeftHalf} from '../../Components'
import mypic from "../../images/mypic.png"
import mypic2 from "../../images/mypic2.png"

function LandingPage() {
  // const [screen, setScreen] = useState("Landing");
  return (
      <div className="h-screen flex items-center">
      <LeftHalf />
      <img src={mypic} className='3lg/2:hidden block fixed md:inset-x-1/4 -right-12 bottom-0 h-2/3 '></img>
      <img src={mypic2} className='3lg/2:block hidden fixed md:inset-x-1/4  bottom-0 h-5/6'></img>
      <RightHalf/>
      {/* {screen === "NotLanding" && <LeftHalfScreen/>}
      {screen === "NotLanding" && <RightHalfScreen/>} */}
      </div>
  )
}

export default LandingPage
