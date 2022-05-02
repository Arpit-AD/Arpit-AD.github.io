import React, { useState, useEffect } from 'react'
import {RightHalf,LeftHalf, LeftHalfScreen, RightHalfScreen } from '../../Components'

function LandingPage() {
  // const [screen, setScreen] = useState("Landing");
  return (
      <div className="min-h-screen flex">
      <LeftHalf/>
      <RightHalf />
      {/* {screen === "NotLanding" && <LeftHalfScreen/>}
      {screen === "NotLanding" && <RightHalfScreen/>} */}
      </div>
  )
}

export default LandingPage
