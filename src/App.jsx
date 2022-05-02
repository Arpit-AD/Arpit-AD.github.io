import { useState } from 'react'
import './App.css'
import { LandingPage } from './Pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProfileScreen from './Components/RightHalfScreen/ProfileScreen/ProfileScreen'
import NotLandingPage from './Pages/LandingPage/NotLandingPage'
import ProjectScreen from './Components/RightHalfScreen/ProjectScreen/ProjectScreen'
import ContactScreen from './Components/RightHalfScreen/ContactScreen/ContactScreen'
import ExperienceScreen from './Components/RightHalfScreen/ExperienceScreen/ExperienceScreen'

function App() {

  return (
    <div className="">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/profile' element={<NotLandingPage Right={ProfileScreen} />} />
          <Route path='/projects' element={<NotLandingPage Right={ProjectScreen} />} />
          <Route path='/experience' element={<NotLandingPage Right={ExperienceScreen} />} />
          <Route path='/contact' element={<NotLandingPage Right={ContactScreen} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
