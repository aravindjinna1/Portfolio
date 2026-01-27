import React, { useEffect } from "react";
import { Icon } from "@iconify/react";

import AOS from 'aos' // ✅ Works reliably
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(()=>{
      AOS.init({  
           easing: 'ease-in-out',
           once: false,
           mirror: true,
           offset: 120,
           anchorPlacement: 'top-bottom', 
        });
  },[])

  return (
    <div className="relative h-25 flex flex-col items-center justify-center gap-2 shadow-[0px_5px_5px_5px_black] z-20">
      <div 
            data-aos="fade-down"
            // data-aos-delay="100"
            data-aos-mirror="false"
            data-aos-once="false"
            data-aos-anchor-placement="center-bottom"

      className="flex gap-4 justify-center mt-2">
        <a href="https://github.com/aravindjinna1" target="_blank">
          <Icon
            icon="ant-design:github-filled"
            color="white"
            width="30"
            className="rounded-[50%] border-2 cursor-pointer hover:scale-110 transition-transform ease-in-out duration-300 hover:shadow-[0px_0px_10px_0px_white] active:scale-94"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jinna-aravind1/"
          target="_blank"
        >
          <Icon
            icon="devicon:linkedin"
            width="30"
            className="rounded-[50%] active:scale-94 border-2 bg-blue-700 hover:scale-110 cursor-pointer transition-transform ease-in-out duration-300 hover:shadow-[0px_0px_10px_2px_aqua]"
          />
        </a>
        <a href="https://wa.me/+918106023616" target="_blank">
          <Icon
            icon="logos:whatsapp-icon"
            width="30"
            className=" rounded-[100%] active:scale-94 bg-white hover:scale-110 cursor-pointer transition-transform ease-in-out duration-300 hover:shadow-[0px_0px_10px_2px_#07f980]"
          />
        </a>
        <a href="https://www.instagram.com/aravind_jinna1/" target="_blank">
          <Icon
            icon="skill-icons:instagram"
            width="30"
            className="rounded-[50%] border-2 active:scale-94 hover:scale-110 cursor-pointer transition-transform ease-in-out duration-300 hover:shadow-[0px_0px_10px_2px_#f907cd]"
          />
        </a>
      </div>

      <div 
             data-aos="fade-up"
            // data-aos-delay="100"
            data-aos-mirror="false"
            data-aos-once="false"
            data-aos-anchor-placement="center-bottom"

      className="flex justify-center flex-col items-center md:flex-row">
        {/* <Icon icon="la:copyright" width="18" className='my-0.5' /> */}
        <p 
        className="">©2025 Aravind Jinna. Designed & built </p>
        <span>with React and love 🧡</span>
      </div>
    </div>
  );
};
export default Footer;
