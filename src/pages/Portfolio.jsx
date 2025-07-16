// import "./styles.css"
// import bittuImg from "./assets/mee.jpg";
// import React from "react";
// import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

// export default function Portfolio() {
//   return (
//     <div>
//     <div className="Page1">
//       {/* Header */}
//       <header  >
//         <h1 id="logo"className="text-5xl text-gray-100">Port<span>folio</span></h1>
//         <nav className="flex justify-around m-[4%]">
//           <div className="links flex space-x-4">
//           <a href="#home" className="text-white px-5 py-2 text-lg relative top-4 hover:text-cyan-400" >Home</a>
//           <a href="#about" >About</a>
//           <a href="#skills" >Skills</a>
//           <a href="#projects" >Projects</a>
//           <a href="#contact" >Contact</a>
//           </div>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main >
//         <div className="main-contianer">
//           <div className="myImg" >
//             <img src={bittuImg} alt="Profile"  className="w-[250px] h-[250px] rounded-full object-cover border-4 border-white shadow-[0_0_14px_3px_rgb(1,181,251)]"
//  />
//           </div>
//           {/* Text Section */}
//           <div className="details">
//             <h2 >Hello, I'm</h2>
//             <h1 >Aravind Jinna</h1>
//             <p >And I'm a <span>Front-End Developer</span></p>
//             {/* Social Icons */}
          
//           <div className="sicialIcons">
//             <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
//             <a href="https://wa.me/your-number" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
//             <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
//             <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
//             {/* </div> */}
//             {/* Buttons */}
//             <div className="mt-6 space-x-4">
//               <button >Hire Me</button>
//               <button >Resume</button>
//             </div>
//             </div>
//           </div>

//         </div>
//         {/* Profile Image Placeholder */}

//         {/* Insert your profile image inside below */}

//         {/* </div>   */}
//         {/* </div> */}

//       </main>
//     </div>

//     <section className="stats">

//             <div className="stat">
//                 <h2>30+</h2>
//                 <p>Projects Completed</p>
//             </div>
//             <div className="stat">
//                 <h2>5+</h2>
//                 <p>Technologies Mastered</p>
//                 </div>
//             </section>

//    <div className="Page2"> 
//     <div className="AboutMe-section"> 
//      <h1>About<span>  Me</span></h1>
//       <p id="intro">
          
//             Hi, I’m Aravind Jinna, an 19 years old passionate Computer science student in Bachelor of computer Applications(BCA)
//             at Chaitanya (deemed to be university),Hyderabad  and an aspiring Front-end
//             Developer with a knack for crafting visually appealing and user-friendly
//             web interfaces. My expertise lies in HTML, CSS, Bootstrap, JavaScript, and
//             React.js, allowing me to create dynamic and responsive web applications.
//             With a strong foundation in computer science and a keen interest in modern web
//             technologies, strive to deliver innovative and efficient solutions. Whether
//             it's building interactive components or improving the aesthetics of a website,
//             I’m driven by the challenge of creating seamless digital experiences.
//             and i have good knowledge in programming like C, C++ and Python 
//               When I’m not coding, I enjoy exploring new tools and frameworks to keep my skills
//              sharp and up-to-date. I believe in continuous learning and am excited to bring 
//               creativity and technical proficiency to every project I undertake.
//            Feel free to explore my portfolio to learn more about my skills and experience.
//            Let’s connect and create something amazing together!

//           </p>
//           </div>
//     </div> 

//     <div className="page3">

//       <h1>Skills</h1>
//     </div>
//   </div>
//   ); 
// }


























import "../styles.css";
import bittuImg from "../assets/mee.jpg";
import React, {Suspense, useRef} from "react";
import NavBar from '../components/NavBar';
// import About from './About'
 const About = React.lazy(()=> import('./About'));

// import Skills from './Skills'
const Skills = React.lazy(()=> import('./Skills'));
// import Projects  from "./Projects";
const Projects = React.lazy(()=> import('./Projects'));
// import Contact from './Contact'
const Contact = React.lazy(()=> import('./Contact'));

import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Portfolio() {
   
   const AboutRef = useRef();
   const SkillsRef = useRef();
   const ProjectsRef = useRef();
   const ContactRef = useRef();
  

  return (
    
    <div className="text-white">
      {/* Page 1 */}
      <section className="Page1">
        {/* Header */}
        <header className="flex justify-between items-center px-10 py-6 sm:mb-[40px]">
          <h1 className="text-5xl text-gray-100 relative left-10 top-0 sm:mt-0 ">
            Port<span className="text-sky-400">folio</span>
          </h1>
         
        <NavBar AboutRef={AboutRef} SkillsRef={SkillsRef} ProjectsRef={ProjectsRef} ContactRef={ContactRef}/>
        </header>

        {/* Hero */}
        <main>
          <div className="flex flex-col md:flex-row justify-center items-center items-center mt-15 md:mr-[20%] gap-6">
            {/* Image */}
            <div>
              <img
                src={bittuImg}
                alt="Profile"
                className="w-[240px] h-[240px] relative  md:bottom-5 md:left-18  rounded-full object-cover border-4 border-white shadow-[0_0_14px_3px_rgb(1,181,251)]"
              />
            </div>

            {/* Details */}
            <div className="block flex-col  relative left:15 md:left-28 bottom-7 sm:flex sm:items-start sm:text-left sm:gap-1">
              <h2 className="text-2xl mx-23 mt-5 md:mx-0">Hello, I'm</h2>
              <h1 className="text-4xl font-bold mx-6 md:mx-0">Aravind Jinna</h1>
              <p className="text-lg mx-1 md:mx-0 ">
                And I'm a <span className="text-sky-400 mx-4 md:mx-0">Front-End Developer</span>
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4 text-cyan-500 text-2xl mt-2 mx-20 md:mx-0">
                 <a href="https://github.com/aravindjinna1" target="_blank" rel="noreferrer" className="hover:text-yellow-300 hover:scale-110 transition">
                  <FaGithub />
                </a>
                 <a href="https://www.linkedin.com/in/aravind-jinna-48ba2a2a0/" target="_blank" rel="noreferrer" className="hover:text-yellow-300 hover:scale-110 transition">
                  <FaLinkedin />
                </a>
               
                <a href="https://wa.me/+918106023616" target="_blank" rel="noreferrer" className="hover:text-yellow-300 hover:scale-110 transition">
                  <FaWhatsapp />
                </a>
                 <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300 hover:scale-110 transition">
                  <FaInstagram />
                </a>
               
               
              </div>

              {/* Buttons */}
              <div className="mt-4 flex space-x-4 mx-13 md:mx-0">
                <button className="bg-cyan-500 text-black px-4 py-2 rounded-lg transition hover:bg-yellow-300 hover:-translate-y-1">
                  Hire Me
                </button>
                <button className="bg-cyan-500 text-black px-4 py-2 rounded-lg transition hover:bg-yellow-300 hover:-translate-y-1">
                  Resume
                </button>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* Page 2 - Stats */}
      <section className="flex justify-around text-gray-100 text-lg p-5">
        <div className="text-center  md:mt-0">
          <h2 className="text-2xl font-bold">30+</h2>
          <p >Projects Completed</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">10+</h2>
          <p>Technologies Mastered</p>
        </div>
      </section>
     <div  ref={AboutRef}>
          
     <Suspense fallback={<p>Loading About...</p>}>
      <About />
     </Suspense>
     
     </div>

     <div  ref={SkillsRef}>
      <Suspense fallback={<p>Skills Loading...</p>}>
         <Skills />
      </Suspense>
     
     </div>

     <div ref={ProjectsRef}>
      <Suspense fallback={<p>Projects Loading...</p>}>
       <Projects />
      </Suspense>
      
     </div>

     <div ref={ContactRef}>
      <Suspense Suspense={<p>Contact Loading...</p>}>
      <Contact />
      </Suspense>
      
     </div>
     
    </div>

  );

 
}