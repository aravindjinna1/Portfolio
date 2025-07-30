import React,{useEffect} from "react";
import JobSearch from "../assets/localJob.jpg";
import LinkImg from "../assets/link-solid-full.svg";
import { Icon } from "@iconify/react";

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import * as AOS from "aos"; // ✅ Works reliably
import "aos/dist/aos.css";
function Projects() {
  //  let code = '</code>'
  const ProjectsData = [
    {
      id: 101,
      image:
        "https://cimg0.ibsrv.net/ibimg/hgm/1920x1080-1/100/879/r34-nissan-skyline-gt-r-from-fast-and-furious-4--photo-credit-bonhams_100879624.jpg",
      title: "Cars World",
      description: "Car Buy, Sell & Rental Platform.",
      toolsUsed: "React, Tailwindcss, Redux, Nodejs, Expressjs, MongoDb",
    },
    {
      id: 102,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT18b7znox2gkZ0yaxLU0WOMLaJQgn1gPo_LQ&s",
      title: "Promtify",
      description: "AI Image-to-Prompt Generator Tool",
      toolsUsed: "React, Tailwindcss, Redux, Nodejs, Expressjs, MongoDb",
    },
    {
      id: 103,
      image:
        "https://cdn.prod.website-files.com/655cc140ec69a31f681e0556/660d32f75a370f1b528575fa_img-blog-pwa-jul-21-mitrais-1024x536.webp",
      title: "Agri Tech",
      description: "AgriTech Help App for Natural Farming",
      toolsUsed: `React, Tailwindcss, Redux, Nodejs, Expressjs, MongoDb`,
    },
    {
      id: 104,
      image: JobSearch,
      title: "Local Hire",
      description: "Local Job Search App for Communities",
      toolsUsed: `React, Tailwindcss, Redux, Nodejs, Expressjs, MongoDb`,
    },
  ];

  useEffect(()=>{
      AOS.init({   duration: 800,
           delay:0.6,
           easing: 'ease-in-out',
           once: false,
           mirror: true,
           offset: 120,
           anchorPlacement: 'top-bottom', });
  },[])

    const {ref, inView} = useInView({ triggerOnce:false})

  return (
    <div className="">
      <h1 className=" text-center text-5xl font-bold my-10 relative z-30">
        Future <span className="text-sky-400">Projects</span>
      </h1>
      <div className="flex item-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-[10%]">
        {ProjectsData.map((project) => (
          // #12c2e9, #c471ed, #f64f59
          <div
            data-aos="fade-up"
              // ref={ref}
              // initial={{ opacity: 0, y: 150,filter: 'blur(10px)' }}
              // animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' }  : {}}
              // transition={{ duration: 0.5, delay:0.1 }}

            key={project.id}
            className=" bg-gradient-to-r from-[#12c2e9] to-[#c471ed] text-[black] overflow-hidden md:mx-[10%] 
            shadow-[0px_0px_3px_0px_black] hover:shadow-[0px_0px_5px_0px_white] 
             transition-transform ease-in-out delay-2 duration-400 hover:bg-gradient-to-r hover:from-[#c471ed] hover:to-[#12c2e9]  flex items-center justify-center  max-h-140 max-w-150 sm:max-w-100 rounded-[5%] 
             transition transform duration-400 hover:-translate-y-2 p-4 z-30 "
          >
            {/* border-2 rounded-[8%] shadow-[0_0px_5px_0px_black] // shadow-[0_0px_5px_1px_black]*/}
            <div>
              <div
               
               className="my-2 mx-2 rounded-[8px] cursor-zoom-in overflow-hidden">
                <img
                  src={project.image}
                  className="rounded-[8px]  transition-transform ease-in-out duration-300 hover:scale-110 overflow-hidden object-cover w-full "
                />
              </div>
              <h3 className=" mx-2 inline text-[25px]">{project.title}</h3>
              <p>
                <span className="text-[#f709b8]">Description:</span>{" "}
                {project.description}
              </p>
              <p>
                <span className="text-[#f709b8]">Tools Used:</span>{" "}
                {project.toolsUsed}
              </p>

              <div className="flex gap-5 my-1">
                <div className=" flex transform scale-100 hover:scale-110 text-blue-700 hover:text-pink-600 transition duration-300 ease-in-out items-center cursor-pointer">
                  LiveDemo.
                  <Icon icon="tabler:link-plus" width="20" />
                </div>
                <div className=" flex transform scale-100 hover:scale-110 text-blue-700 hover:text-pink-600 transition duration-300 ease-in-out items-center cursor-pointer">
                  <a href="" className="">
                    code.
                  </a>
                  <Icon icon="mdi:code" width="20" />
                </div>
              </div>
              {/* <button className='text-pink-500 cursor-pointer rounded-[10px] hover:text-blue-500 my-2'>Code..</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
