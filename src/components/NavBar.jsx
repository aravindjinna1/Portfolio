

import React from 'react'

export default function NavBar({AboutRef, SkillsRef, ProjectsRef, ContactRef }){
    
      const ScrollToAbout=()=>{
        AboutRef.current.scrollIntoView({ behavior: 'smooth' })
      }
       const ScrollToSkills=()=>{
         SkillsRef.current.scrollIntoView({ behavior: 'smooth' })
      }
      const ScrollToProjects=()=>{
        ProjectsRef.current.scrollIntoView({ behavior:'smooth'})
      }
      const ScrollToContact=()=>{
        ContactRef.current.scrollIntoView({ behavior:'smooth' })
      }
    return(
     <div className="flex justify-around gap-1 flex space-x-4 sm:space-x-8  relative top-15 right-65  sm:right-auto sm:top-auto">
        {/* <nav className="flex space-x-4 sm:space-x-8  relative top-15 right-67  sm:right-auto sm:top-auto" >
          <Link to='/' className="text-lg hover:text-cyan-400">Home</Link>
          <Link to='/About' className="text-lg hover:text-cyan-400">About</Link>
          <Link to='/Skills' className="text-lg hover:text-cyan-400">Skills</Link>
          <Link to='/Projects' className="text-lg hover:text-cyan-400">Projects</Link>
          <Link to='/Contact' className="text-lg hover:text-cyan-400">Contact</Link>
          </nav> */}
      <button  className='cursor-pointer  transition:translate-y hover:border-b-2 hover:border-b-cyan-500'>Home</button>

       <button onClick={()=> ScrollToAbout()} className='cursor-pointer  text-lg hover:border-b-4-red-500'>About</button>
       <button onClick={()=> ScrollToSkills()} className='cursor-pointer text-lg hover:text-yellow-300 transition'>Skills</button>
       <button onClick={()=> ScrollToProjects()} className='cursor-pointer text-lg hover:text-yellow-300 transition'>Projects</button>
       <button onClick={()=> ScrollToContact()} className='cursor-pointer text-lg hover:text-yellow-300'>Contact</button>

     </div>
    )
}