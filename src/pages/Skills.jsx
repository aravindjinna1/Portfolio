import React from "react";
import { DiHtml5, DiCss3, DiReact,DiGithub } from 'react-icons/di';

import {SiTailwindcss} from 'react-icons/si';
import { SiNodedotjs, SiExpress,SiMongodb, SiGithub,SiJest,SiPostman , SiCplusplus, SiPython} from "react-icons/si";
import JsLogo from '../assets/javaScript.png'
import Cpp from '../assets/cplusplus.png'
import Python from '../assets/python.png'

function Skills() {
  return (

    <div>

      <section id="skills" className="text-center py-12">
        <h1 className="text-5xl font-bold text-white my-10">Skills</h1>

        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between mx-7 ">

          <div className="bg-white w-[100%] h-[280px] sm:w-[280px] sm:h-[280px]  rounded-[20px]  p-5 ] ">

            <h1  className="text-black text-[20px] sm:text-blue-500 sm:text-[25px]">Fornt-end Tools</h1>

            <div className="grid grid-cols-3 grid-rows-2 gap-1 justify-center my-[5%] ">
              {/* flex flex-col-3 w-[290px] md:grid-cols-3 md:w-[200px] mx-5 my-8  */}
             {/* <div className="grid grid-row-1">  */}
              <DiHtml5 color="#e34f26" size="40px" className=" w-[100px] h-[100px] md:w-[90px] md:h-[90px]  " />
              <DiCss3 color="#1572B6" size="40px"  className="w-[100px] h-[100px]  md:w-[90px] md:h-[90px]"/>
               {/* <SiJavascript color="#f3f321ff" size="40px"  className="w-[100px] h-[100px] md:w-[80px] md:h-[80px] text-black" /> */}
              <img src={JsLogo} alt="jslogo" className="w-[90px] h-[90px]  md:w-[85px] mt-[6%] md:h-[80px]"/>

             {/* </div> */}
            <div className="flex w-45 justify-center ml-[50%] md:ml-[30%] ">
              {/* md:left-10   sm:mb-40  */}
             
                <DiReact color="#61dafb" size="40px"  className=" w-[100px] h-[100px]  md:w-[100px] md:h-[100px]"/>
                <SiTailwindcss color="#38B2AC"  className="  w-[100px] h-[100px] md:w-[100px] md:h-[100px]"/>
             </div> 
              {/* md:relative bottom-5 right-5 mx-8 */}
             {/* relative left-6 md:relative */}

             </div> 
          </div>
          <div  className="bg-white w-[100%] h-[280px] border-8 border-solid border-sky-200 sm:w-[280px] sm:h-[280px]  rounded-[20px]  p-5 ] ">
            <h1  className="text-black text-[20px] sm:text-blue-500 sm:text-[25px]" >Back-end Tools</h1>

            <div className="grid grid-cols-3 grid-rows-1 gap-3 justify-center my-[5%] ">
              <SiNodedotjs color="green" className="w-[100px] h-[100px]  md:w-[80px] md:h-[80px]" />
              <SiExpress color="black" className="w-[100px] h-[100px]  md:w-[80px] md:h-[80px]" />
              <SiMongodb color="green" className="w-[100px] h-[100px] md:w-[80px] md:h-[80px]"/>
              
            </div>
          </div>
          


          <div className="bg-white w-[100%] h-[240px] sm:w-[280px] sm:h-[280px]  rounded-[20px] ">
            <h1 className="text-black text-[20px] sm:text-blue-500 sm:text-[20px]"> Other & Tools Technologies</h1>
            <div className="grid grid-cols-3 grid-rows-1 gap-3 justify-center my-[5%] mx-4">
              <SiGithub color="#000000" className="w-[100px] h-[100px] md:w-[80px] md:h-[80px]"/>
              <SiJest color="brown" className="w-[100px] h-[100px] md:w-[80px] md:h-[80px]"/>
              <SiPostman color="orange" className="w-[100px] h-[100px] md:w-[80px] md:h-[80px]"/>

              {/* <SiPython color="gold" className="w-[100px] h-[100px] md:w-[80px] md:h-[80px]"/> */}
              <div className="flex w-45 gap-3 justify-center ml-[50%] md:ml-[30%] ">
               <img src={Python} className="w-[100px] h-[100px] md:w-[80px] md:h-[80px]" />
              <img src={Cpp}  className="w-[100px] h-[100px] md:w-[80px] md:h-[80px]"/>
              </div>
              
               
              {/* <Cpp /> */}
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Skills;
