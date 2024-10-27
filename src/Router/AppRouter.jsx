import React from 'react'
import Home from '../components/Home/Home'
import Conference_tracks from '../components/About/Conference _tracks'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutHeader from '../components/About/AboutHeader'
import AboutFooter from '../components/About/AboutFooter'
import AboutLocation from '../components/About/AboutLocation'

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path='/conference_tracks/' element={<Conference_tracks/>}/> */}
        {/* <Route path='/about_footer/' element={<AboutFooter/>}/> */}
        <Route path='/about_Location/' element={<AboutLocation/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
