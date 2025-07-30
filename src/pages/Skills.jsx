import React, { useEffect } from "react";

import { Icon } from "@iconify/react";

// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

import AOS from 'aos' // ✅ Works reliably
import "aos/dist/aos.css";
function Skills() {
  //       const container = {
  //    visible: {
  //     transition: {
  //       staggerChildren: 0.4,
  //     },
  //   },
  // };

  // Child animation (right to left)
  // const card = {
  //    hidden: { x: "100%", opacity: 0 },
  //   visible: {
  //     x: 0,
  //     opacity: 1,
  //     transition: {
  //       type: "spring",
  //       damping: 10,
  //       stiffness: 120,

  //     },
  //   },
  // };

  // const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    AOS.init({
      // duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      offset: 120,
      anchorPlacement: "top-bottom",
    })

    // setTimeout(() => AOS.refresh(), 100);

    // return () => {
    //   AOS.refreshHard();
    // };
  }, []);

  return (
    <div className="">
      <section id="skills" className="text-center py-12 ">
        <h1 className="text-5xl font-bold  my-10 relative z-20">Skills</h1>

        <div
          //    ref={ref}
          // // variants={container}
          // initial="hidden"
          // animate={inView? "visible" : "hidden"}
          // className="flex gap-4 p-10"
          className="flex flex-col gap-6 sm:flex-row sm:justify-between mx-[7%] "
        >
          <div 
            //  ref={ref}
            //  initial={{opacity:0, x:-100,  filter:'blur(10px)'}}
            //   animate={inView?{opacity:1, x:0,  filter:'blur(0px)'}:{}}
            //   transition={{ delay:0.6}}

            //             ref={ref}
            // initial={{ opacity: 0, x: -150,filter: 'blur(10px)' }}
            // animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' }  : {}}
            // transition={{ duration: 0.8 }}

            // variants={card}

            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-mirror="false"
            data-aos-once="false"
            data-aos-anchor-placement="center-bottom"
            // data-aos-anchor-placement="center-bottom"

            //  data-aos-mirror="true"
            // data-aos-once="false"

            // data-aos="fade-right"
            // data-aos-offset="300"
            //  data-aos-mirror="true"
            // data-aos-delay="600"
            // data-aos-duration="800"
            // data-aos-easing="ease-in-out"
            // data-aos-once="false"
            className="relative border-animate fade-left   animate-fade-up-blur delay-2 flex flex-col justify-center items-center overflow-hidden text-white sm:w-[280px] sm:h-[280px] rounded-[20px] bg-black p-4 "
          >
            {/* Title */}
            <h1 className=" text-[20px]  mb-4 relative z-30">
              Front-end Tools
            </h1> 

            {/* First Row of Icons */}
            <div className="grid grid-cols-3 gap-4 place-items-center w-full mb-2 relative z-40">
              <Icon
                icon="skill-icons:html"
                width="60"
                className="hover:shadow-[0px_0px_12px_1px_green] scale-100 transform ease-in-out duration-200 hover:scale-105 rounded-[15px] cursor-pointer "
              />
              <Icon
                icon="skill-icons:css"
                width="60"
                className="hover:shadow-[0px_0px_12px_1px_green] scale-100 transform ease-in-out duration-200 hover:scale-105 rounded-[15px] cursor-pointer"
              />
              <Icon
                icon="skill-icons:javascript"
                width="60"
                className="hover:shadow-[0px_0px_15px_0px_yellow] scale-100 transform ease-in-out duration-200 hover:scale-105 rounded-[15px] cursor-pointer"
              />
              {/* <DiHtml5 color="#e34f26" className="w-20 h-20" />
    <DiCss3 color="#1572B6" className="w-20 h-20" />
    <SiJavascript color="#f3f321" className="w-15 h-15" /> */}
            </div>

            {/* Second Row of Icons */}
            <div className="flex justify-center gap-6 w-full mt-2 relative z-30">
              <Icon
                icon="skill-icons:react-light"
                width="60"
                className="hover:shadow-[0px_0px_12px_1px_green] scale-100 transform ease-in-out duration-200 hover:scale-105 rounded-[15px] cursor-pointer"
              />
              <Icon
                icon="skill-icons:tailwindcss-dark"
                width="60"
                className="hover:shadow-[0px_0px_12px_1px_green] scale-100 transform ease-in-out duration-200 hover:scale-105 rounded-[15px] cursor-pointer"
              />
            </div>

            {/* Optional border effect background layer */}
            {/* <div className="absolute inset-0 z-40 animate-pulse border-4 border-gradient-to-tr from-pink-500 via-blue-500 to-purple-500 rounded-[20px] opacity-30 "></div> */}
          </div>

          <div
            // ref={ref}
            //  variants={card}
            //       initial={{opacity:0, y:200,  filter:'blur(10px)'}}
            // animate={inView?{opacity:1, y:0,  filter:'blur(0px)'}:{}}
            // transition={{ delay:0.4}}

            // ref={ref}
            // initial={{ opacity: 0, y: 100,filter: 'blur(10px)' }}
            // animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' }  : {}}
            // transition={{  duration: 0.8 }}

            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-mirror="false"
            data-aos-once="false"
            data-aos-anchor-placement="center-bottom"
            //  data-aos-mirror="true"
            // data-aos-once="false"

            // data-aos="fade-right"
            // data-aos-offset="300"
            //  data-aos-mirror="true"
            // data-aos-delay="400"
            // data-aos-duration="800"
            // data-aos-easing="ease-in-out"
            // data-aos-once="false"
            className="relative border-animate fade-left   animate-fade-up-blur delay-2 flex flex-col justify-center items-center overflow-hidden text-white sm:w-[280px] sm:h-[280px] rounded-[20px] bg-black p-4  "
          >
            <h1 className="text-white text-[20px]  mb-4  relative z-30">
              Back-end Tools
            </h1>
            {/* text-white text-[20px] sm:text-blue-500 sm:text-[25px] mb-4 z-10 */}
            <div className="grid grid-cols-3 gap-4 place-items-center w-full mb-2 relative z-40">
              <Icon
                icon="skill-icons:nodejs-light"
                width="60"
                className="hover:shadow-[0px_0px_12px_1px_white] scale-100 transform ease-in-out duration-200 hover:scale-105 rounded-[15px] cursor-pointer"
              />
              <Icon
                icon="skill-icons:expressjs-dark"
                width="60"
                className="hover:shadow-[0px_0px_12px_1px_yellow] scale-100 transform ease-in-out duration-200 hover:scale-105 rounded-[15px] cursor-pointer"
              />
              <Icon
                icon="skill-icons:mongodb"
                width="60"
                className="hover:shadow-[0px_0px_12px_1px_green] scale-100 transform ease-in-out duration-200 hover:scale-105 rounded-[15px] cursor-pointer"
              />
              <Icon
                icon="logos:firebase-icon"
                width="20"
                className="bg-white w-15 h-15 rounded-[15px] hover:shadow-[0px_0px_12px_1px_gold] scale-100 transform ease-in-out duration-200 hover:scale-105 rounded-[15px] cursor-pointer"
              />

              {/* <SiNodedotjs color="green" className="w-20 h-20" />
              <SiExpress color="yellow" className="w-20 h-20" />
              <SiMongodb color="green" className="w-20 h-20"/> */}
            </div>
          </div>

          <div
            //       ref={ref}
            // initial={{ opacity: 0, x: 250,filter: 'blur(10px)' }}
            // animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' }  : {}}
            // transition={{  duration: 0.8 }}

            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-mirror="false"
            data-aos-once="false"
            data-aos-anchor-placement="center-bottom"
            //  data-aos-mirror="true"
            // data-aos-once="false"

            // data-aos="fade-right"
            // data-aos-offset="300"
            //  data-aos-mirror="true"
            // data-aos-delay="200"
            // data-aos-duration="800"
            // data-aos-easing="ease-in-out"
            //  data-aos-once="false"
            className="relative border-animate fade-left  delay-3 animate-fade-up-blur flex flex-col justify-center items-center overflow-hidden text-white sm:w-[280px] sm:h-[280px] rounded-[20px] bg-black p-4"
          >
            <h1 className="text-white text-[20px]  mb-4 relative z-40">
              {" "}
              Other & Tools Technologies
            </h1>
            <div className="grid grid-cols-3 gap-4 place-items-center w-full mb-2 relative z-40">
              <Icon
                icon="ri:github-fill"
                width="60"
                color="black"
                className="bg-white w-15 h-15 rounded-[14px] hover:shadow-[0px_0px_12px_1px_blue] scale-100 transform ease-in-out duration-200 hover:scale-105 rounded-[15px] cursor-pointer"
              />
              <Icon
                icon="skill-icons:jest"
                width="60"
                className="hover:shadow-[0px_0px_12px_1px_brown] scale-100 transform ease-in-out duration-200 hover:scale-105 rounded-[15px] cursor-pointer"
              />
              <Icon
                icon="skill-icons:vercel-light"
                width="60"
                color="blue"
                className="hover:shadow-[0px_0px_12px_1px_white] scale-100 transform ease-in-out duration-200 hover:scale-105 rounded-[15px] cursor-pointer"
              />
              <Icon
                icon="devicon:netlify"
                width="60"
                color="blue"
                className="bg-white w-15 h-15 rounded-[13px] hover:shadow-[0px_0px_12px_1px_aqua] scale-100 transform ease-in-out duration-200 hover:scale-105 rounded-[15px] cursor-pointer"
              />
              <Icon
                icon="skill-icons:python-light"
                width="60"
                color="blue"
                className="hover:shadow-[0px_0px_12px_1px_yellow] scale-100 transform ease-in-out duration-200 hover:scale-105 rounded-[15px] cursor-pointer"
              />
              <Icon
                icon="skill-icons:cpp"
                width="60"
                color="blue"
                className="hover:shadow-[0px_0px_12px_1px_blue] scale-100 transform ease-in-out duration-200 hover:scale-105 rounded-[15px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Skills;
