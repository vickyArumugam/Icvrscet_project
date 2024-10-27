import { useState } from 'react'
import './App.css'
// import Header from './components/Core/Header/Header'
import Home from './components/Home/Home'
import AppRouter from './Router/AppRouter'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="bg-[url('public/images/002051.jpg')] bg-cover bg-fixed bg-center">
      
       <AppRouter/>
    </div>
  )
}

export default App
