import "../styles.css";
import AravImg from "../assets/mee.jpg";
import React, { Suspense, useRef } from "react";
import NavBar from "../components/NavBar";
import Updatesoon from "../assets/updatessoon.jpg";
// import Footer from './Footer'
// import About from './About'

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// import SplashCursor from './SplashCursor'
const About = React.lazy(() => import("./About"));

// import Skills from './Skills'
const Skills = React.lazy(() => import("./Skills"));
// import Projects  from "./Projects";
const Projects = React.lazy(() => import("./Projects"));
// import Contact from './Contact'
const Contact = React.lazy(() => import("./Contact"));

const Footer = React.lazy(() => import("./Footer"));

import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Portfolio() {
  const { ref, inView } = useInView();

  // const HandleChangeState = () => setIsOpen(prev => !prev);

  const menuRef = useRef();
  const HomeRef = useRef();
  const AboutRef = useRef();
  const SkillsRef = useRef();
  const ProjectsRef = useRef();
  const ContactRef = useRef();

  const ScrolltoContact = () =>
    ContactRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      onClick={() => menuRef.current?.closeMenu()}
      ref={HomeRef}
      className="overflow-hidden "
    >
      {/* <SplashCursor /> */}
      {/* Page 1 */}
      <section className="Page1 relative z-30">
        {/* Header */}
        <header className=" fixed top-0 w-full h-20 flex gap-10 md:20  shadow-[0px_0px_5px_0px_#000009ff] z-50 flex justify-between items-center px-10 py-6 sm:mb-[40px]">
          <h1 className=" flex justify-center animate-wiggle backdrop-blur-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.3)] bg-[rgba(225,225,225,0.1)] w-[300px] h-[50px] rounded-[10px] text-5xl  relative left-[10%] md:left-10 top-0 sm:mt-0   ">
            Port<span className="text-sky-400">folio</span>
          </h1>

          <NavBar
            ref={menuRef}
            HomeRef={HomeRef}
            AboutRef={AboutRef}
            SkillsRef={SkillsRef}
            ProjectsRef={ProjectsRef}
            ContactRef={ContactRef}
          />
        </header>

        {/* Hero */}
        <main>
          <div className="flex flex-col  md:flex-row justify-center items-center items-center mt-30 md:mr-[20%] gap-6">
            {/* Image */}

            <motion.div
              className=""
              ref={ref}
              initial={{ opacity: 0, x: -150,filter: 'blur(10px)' }}
              animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' }  : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <img
                src={AravImg}
                alt="Profile"
                className=" w-[240px] h-[240px] relative z-30 md:bottom-5 md:left-18  rounded-full object-cover border-4 border-white shadow-[0_0_14px_3px_rgb(1,181,251)]"
              />
            </motion.div>

            {/* Details */}
            {/* <AnimatePresence> */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 150 , filter:'blur(10px)'}}
              animate={inView ? { opacity: 1, x: 0,filter:'blur(0px)' } : {}}
              //  exit={{opacity:0, x:-100}}
              transition={{ delay: 0.5, duration: 0.8,  }}
              className="block flex-col  relative left:15 md:left-28 bottom-7 sm:flex sm:items-start sm:text-left sm:gap-1"
            >
              <h2 className="text-2xl mx-23 mt-5 md:mx-0  relative z-30">
                Hello, I'm
              </h2>
              <h1 className="text-4xl font-bold mx-6 md:mx-0  relative z-30">
                Aravind Jinna
              </h1>
              <p className="text-lg mx-1 md:mx-0  relative z-30">
                And I'm a{" "}
                <span className="text-[#f907cd] mx-4 md:mx-0">
                  Front-End Developer
                </span>
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4 text-cyan-500 text-2xl mt-2 mx-20 md:mx-0  relative z-30">
                <a
                  href="https://github.com/aravindjinna1"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-300 hover:scale-110 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/aravind-jinna-48ba2a2a0/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-300 hover:scale-110 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://wa.me/+918106023616"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-300 hover:scale-110 transition"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-300 hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex space-x-4 mx-13 md:mx-0  relative z-40">
                <button
                  onClick={() => ScrolltoContact()}
                  className="cursor-pointer bg-cyan-500 text-black px-4 py-2 rounded-lg transition hover:bg-yellow-300 hover:-translate-y-1"
                >
                  Hire Me
                </button>
                <button className="cursor-pointer bg-cyan-500 text-black px-4 py-2 rounded-lg transition hover:bg-yellow-300 hover:-translate-y-1">
                  <a href={Updatesoon}>Resume</a>
                </button>
              </div>
            </motion.div>
            {/* </AnimatePresence> */}
          </div>
        </main>
      </section>

      {/* Page 2 - Stats */}
      <motion.section
        
        initial={{ opacity: 0, y: 50, filter:'blur(10px)' }}
        animate={inView ? { opacity: 1, y: 0, filter:'blur(0px)' } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex justify-around text-lg relative z-30"
      >
        <div className="text-center  md:mt-0 ">
          <h2 className="text-2xl font-bold">30+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="text-center ">
          <h2 className="text-2xl font-bold">10+</h2>
          <p>Technologies Mastered</p>
        </div>
      </motion.section>

      <div ref={AboutRef}>
        <Suspense fallback={<p>Loading About...</p>}>
          <About />
        </Suspense>
      </div>

      <div ref={SkillsRef}>
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

      <div>
        <Suspense Suspense={<p>Footer Loading...</p>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
