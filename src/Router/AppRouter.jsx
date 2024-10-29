import React from 'react'
import Home from '../components/Home/Home'
import Conference_tracks from '../components/About/Conference _tracks'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About_The_Conference from '../components/About/About_The_Conference'
import Scope_Of_Conference from '../components/About/Scope_Of_Conference'
import About_Vrscet from '../components/About/About_Vrscet'
import Editiorial_board from '../components/About/Editiorial_board'
import Organizing_Commitee from '../components/About/Organizing_Commitee'




export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/conference_tracks/' element={<Conference_tracks/>}/>
        <Route path='/about_conference/' element={<About_The_Conference/>}/>
        <Route path='/scope_confer/' element={<Scope_Of_Conference/>}/>
        <Route path='/about_vrscet/' element={<About_Vrscet/>}/>
        <Route path='/editiorial_board/' element={<Editiorial_board/>}/>
        <Route path='/organizing_commitee/' element={<Organizing_Commitee/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}
