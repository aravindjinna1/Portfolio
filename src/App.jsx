
import React from "react"
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Navbar from './components/NavBar'
import About from './pages/About'
import Skills from './pages/Skills';
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import SplashCursor from './pages/SplashCursor'
// import SplashEffect from './SplashCur'

function App() {

 return(
   <>
         <SplashCursor className="" />
         {/* <SplashEffect /> */}
        <Routes>
            <Route path='/' element={<Portfolio/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Skills' element={<Skills/>} />
            <Route path='/Projects' element={<Projects/>} />
            <Route path='/Contact' element={<Contact/>} />
        </Routes>
        </>
       
  )
}

export default App



