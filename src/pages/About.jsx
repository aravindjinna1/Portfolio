 
 import React from "react"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

 export default function About(){
  const {ref, inView} = useInView({duration:0.8, once:false})
      return(
          <div className="sm:max-w-[1050px] mx-auto md:mx-20 px-4 text-justify text-white-100 relative z-20">
         <section >
        <motion.h1 
         ref={ref}
         initial={{opacity:0, y:-100}}
         animate={inView?{opacity:1, y:0}:{}}
         transition={{delay:0.8,duration:0.8}}

         className="text-5xl font-bold py-10 pl-2 relative z-20">
          About<span className="text-sky-400 text-5xl font-bold"> Me</span>
        </motion.h1>
        <motion.p 
          ref={ref}
         initial={{opacity:0, y:100}}
         animate={inView?{opacity:1, y:0}:{}}
         transition={{delay:0.3,duration:0.8}}

        className="text:[5px] z-20  text-justify  font-light leading-relaxed  sm:max-w-4xl sm:text-lg">
          Hi, I’m Aravind Jinna, a 19-year-old Computer Science student pursuing a Bachelor of Computer Applications (BCA)
          at Chaitanya (Deemed to be University), Hyderabad. I'm a Front-End Developer skilled in HTML, CSS, Tailwindcss,
          JavaScript, and React.js, with additional knowledge in C, C++, and Python. I love building visually appealing,
          user-friendly web applications and constantly explore new tools to stay ahead. I believe in continuous learning
          and creative problem-solving. Let’s connect and create something awesome together!
        </motion.p>
      </section>

      {/* Future Page - Skills */}
     
      </div>

      )
  }