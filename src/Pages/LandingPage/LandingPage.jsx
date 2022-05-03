import React from 'react'
import { RightHalf, LeftHalf} from '../../Components'
import mypic from "../../images/mypic.png"
import mypic2 from "../../images/mypic2.png"
import icon from "../../../logo.png"

function LandingPage() {
  // const [screen, setScreen] = useState("Landing");
  return (
      <div className="h-screen flex items-center">
      <LeftHalf />
      <img src={mypic} className='md:hidden block fixed bottom-0 -right-12  h-2/3 '></img>
      <img src={mypic2} className='md:block hidden fixed bottom-0 -right-12  h-2/3'></img>
      <img src={icon} className='md:block hidden fixed z-10 md:inset-x-20 opacity-10  bottom-0 h-3/4'></img>

      <RightHalf/>
      {/* {screen === "NotLanding" && <LeftHalfScreen/>}
      {screen === "NotLanding" && <RightHalfScreen/>} */}
      </div>
  )
}

export default LandingPage
