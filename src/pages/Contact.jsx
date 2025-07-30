import React, { useEffect, useState } from "react";

import * as AOS from "aos"; // ✅ Works reliably
import "aos/dist/aos.css";
function Contact() {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       const data = new FormData();
       Object.entries(formData).forEach(([key, value]) => {
         data.append(key, value);
});

     const res = await fetch("https://formspree.io/f/xdkdgbjl", {
   method: "POST",
   body: data,
  headers: {
    Accept: "application/json",
  },
});


      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setError(false);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError(true);
    }
  };

useEffect(() => {
  console.log("AOS object:", AOS); // Check what's being imported
  AOS.init();
}, []);

 
  return (
    
    <div className=" relative z-30">
     
      <h1 className="text-center text-5xl font-bold my-10">
        Contact
      </h1>
      <div className="w-[100%] my-15  flex ml-[10%] overflow-hidden  max-h-full grid gap-4 grid-cols-1 md:grid-cols-2  ">
        <div className="flex justify-start items-start  flex-col"
         data-aos="fade-down"
        >
          <h1 className="text-[20px] md:text-[35px] ">
            Get in touch...📩
          </h1>
          <p className=" flex flex-wrap max-w-200 md:max-w-90 ">
            If you're looking for someone who delivers—not just promises—I'm
            ready to make a difference.
          </p>

          <div className="space-x-2 sticky z-30 ">
            <a
              href="mailto:aravindjinna1@gmail.com?subject=Hello&body=Message content "
              className="bg-white rounded-[5px] p-1 text-black text-[10px] inline-block transform transition-transform scale-100 duration-300 hover:scale-110"
            >
             📧 Send Email
            </a>

            <a
              href="tel:+918106023616"
              className="bg-white rounded-[5px] p-1 text-black text-[10px] inline-block transform transition-transform scale-100 duration-300 hover:scale-110"
            >
              📞+91 8106023616
            </a>
            <a
              href="https://wa.me/+918106023616"
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-[5px] p-1 text-black text-[10px] inline-block transform transition-transform scale-100 duration-300 hover:scale-110"
            >
              💬 WhatsApp Me
            </a>
          </div>
        </div>

        <div 
         data-aos="fade-up"
        className=" rounded-[10px] border-1 w-[80%] md:w-[70%] flex justify-center z-30">
          <form onSubmit={handleSubmit} className="grid gap-3 md:gap-4 my-10 md:my-5  z-30">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border-1 p-2 rounded-[10px] w-70 md:w-80  z-30"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-1 p-2 rounded-[10px] md:w-80 z-30"
            />
            <input
              type="text"
              placeholder="Your Subject"
              name="subject"
              onChange={handleChange}
              value={formData.subject}
              required
              className="border-1  p-2 rounded-[10px] md:w-80 z-30"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              onChange={handleChange}
              value={formData.message}
              required
              className="border-1  p-2 rounded-[10px] md:w-80 z-30"
            ></textarea>
             {success && (
               <p className="text-green-500 font-semibold">✅ Message sent sucessfully</p>
               )}
               {error &&(
                <p className="text-red-500 font-semibold text-[15px]">❎ something went wrong... please try again</p>
               )}
            <button
              type="submit"
              className="w-15 p-1% rounded-[20px] bg-[#f907cd] cursor-pointer border-[rgb(246,154,222)] border-[2px]
               shadow-[0px_3px_#f907cd] scale-100 transition-transform active:scale-90 z-30 "
            >
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
