import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4 ">
      <div className="text-center text-2xl"> 
        <p className="text-xl font-semibold text-gray-500 ">Get In Touch</p>
        <h2 className="text-5xl text-gray-700 font-semibold mb-4">Contact</h2>
      </div>
      
      <div className="p-7 bg-white shadow mt-12 rounded-xl">
        <div className=" grid grid-cols-1 md:grid-cols-2  gap-3 ">
          <a
            href="https://github.com/Adityalabh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 flex text-2xl gap-2 bg-white shadow-lg p-7 min-w-[250px] rounded-lg"
          >
            <FaGithub size={30} />
            <span className="text-xl  hover:text-blue-300 duration-500 ease-in-out">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-130b10278/"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center text-2xl gap-2 bg-white shadow-lg p-7 min-w-[250px] rounded-lg"
          >
            <FaLinkedin size={30} />
            <span className="text-xl hover:text-blue-300 duration-500 ease-in-out">Linkedin</span>
          </a>
        
           <p
            className=" flex items-center text-2xl gap-2 bg-white shadow-lg p-7 min-w-[250px] rounded-lg"
          >
            <i className="fa-solid fa-phone"></i>
            <span className="text-xl hover:text-blue-300 duration-500 ease-in-out">+91-9910902253</span>
          </p>
           <p
            className=" flex items-center text-2xl gap-2 bg-white shadow-lg p-7 min-w-[250px] rounded-lg"
          >
            <i className="fa-solid fa-envelope"></i>
        
            <span className=" text-xl hover:text-blue-300 duration-500 ease-in-out">adityakumarlabh12@gmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
