import React, { useState, useEffect } from 'react'
import { RightHalf, LeftHalf, LeftHalfScreen, RightHalfScreen } from '../../Components'

function NotLandingPage({Right}) {
    // const [screen, setScreen] = useState("Landing");
    return (
        <div className="min-h-screen flex">
            <LeftHalfScreen />
            <RightHalfScreen Right={Right} />
        </div>
    )
}

export default NotLandingPage
