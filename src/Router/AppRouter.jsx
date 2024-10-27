import React from 'react'
import Home from '../components/Home/Home'
import Conference_tracks from '../components/About/Conference _tracks'

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/conference_tracks' element={<Conference_tracks/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
