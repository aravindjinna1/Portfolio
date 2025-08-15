import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
// import Portfolio from '../pages/Portfolio';
import * as AOS from "aos"; // ✅ Works reliably
import "aos/dist/aos.css";
import { Icon } from "@iconify/react/dist/iconify.js";
const Navbar = forwardRef(
  ({ HomeRef, AboutRef, SkillsRef, ProjectsRef, ContactRef }, ref) => {
    useEffect(() => {
        AOS.init({ duration: 800 }); // ✅ correct
    });

    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      closeMenu: () => setIsOpen(false),
    }));

    const ScrollToHome = () =>
      HomeRef.current.scrollIntoView({ behavior: "smooth" });

    const ScrollToAbout = () =>
      AboutRef.current.scrollIntoView({ behavior: "smooth" });

    const ScrollToSkills = () =>
      SkillsRef.current.scrollIntoView({ behavior: "smooth" });

    const ScrollToProjects = () =>
      ProjectsRef.current.scrollIntoView({ behavior: "smooth" });

    const ScrollToContact = () =>
      ContactRef.current.scrollIntoView({ behavior: "smooth" });

    return (
      <nav
        onClick={(e) => e.stopPropagation()}
        className="  flex justify-between gap-[7%] md:gap[30%] relative z-50 "
      >
        {/* <Portfolio   isOpen={isOpen} setIsOpen={setIsOpen}/> */}
        
        <div className="flex items-center max-w-300 max-h-200">
          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {/* Hamburger icon when menu is closed */}
            {!isOpen && (
              <svg
                data-aos="fade-down"
                data-aos-delay="500"

                className="w-8 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >

              {/* <Icon icon="ph:hamburger-light" width="40" className="hover:bg-[rgba(255,255,255,0.1)] hover:rounded-[25%]"/> */}

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h20 M10 12h14"
                  // d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}

          <ul className="hidden md:flex space-x-6 font-medium relative z-50 ">
            <button
              data-aos="fade-down"
              data-aos-delay="100"
              onClick={() => ScrollToHome()}
              className="cursor-pointer hover:text-[#f709b8] transition "
            >
              Home
            </button>

            <button
              data-aos="fade-down"
              data-aos-delay="200"
              onClick={() => ScrollToAbout()}
              className="cursor-pointer  text-lg hover:text-[#f709b8] transition "
            >
              About
            </button>
            <button
              data-aos="fade-down"
              data-aos-delay="300"
              onClick={() => ScrollToSkills()}
              className="cursor-pointer text-lg hover:text-[#f709b8] transition"
            >
              Skills
            </button>
            <button
              data-aos="fade-down"
              data-aos-delay="400"
              onClick={() => ScrollToProjects()}
              className="cursor-pointer text-lg hover:text-[#f709b8] transition"
            >
              Projects
            </button>
            <button
              data-aos="fade-down"
              data-aos-delay="500"
              onClick={() => ScrollToContact()}
              className="cursor-pointer text-lg hover:text-[#f709b8]"
            >
              Contact
            </button>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div 
            onClick={(e) => e.stopPropagation()}
             data-aos="fade-left"
              data-aos-delay="500"

            className={`md:hidden mt-4 backdrop-blur-[20px]  bg-[rgba(255, 255, 255, 0.1)] space-y-2 block shadow-[0px_0px_5px_2px_black] h-400 w-600 size-20 z-50 relative  right-100 top-180 px-4 py-10 transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <button 
             
              
              onClick={() => setIsOpen(!isOpen)}
              
              className="mt-10 rounded-[50%] "
            >
              <svg
                className="w-10 h-10 z-50 hover:bg-[rgba(255,255,255,0.1)] hover:rounded-[50%] "
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button className="cursor-pointer block text-[40px]  block hover:text-yellow-300 transition ">
              Home
            </button>
            <button
              onClick={() => ScrollToAbout()}
              className="cursor-pointer  text-[40px] block  text-lg hover:text-yellow-300 transition "
            >
              About
            </button>
            <button
              onClick={() => ScrollToSkills()}
              className="cursor-pointer  text-[40px] block text-lg hover:text-yellow-300 transition"
            >
              Skills
            </button>
            <button
              onClick={() => ScrollToProjects()}
              className="cursor-pointer  text-[40px] block text-lg hover:text-yellow-300 transition"
            >
              Projects
            </button>
            <button
              onClick={() => ScrollToContact()}
              className="cursor-pointer  text-[40px] block text-lg hover:text-yellow-300"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    );
  }
);

export default Navbar;
