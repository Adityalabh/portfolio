import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "animate.css";
import "textillate";

export default function Hero() {
  useEffect(() => {
    window.$(".tlt").textillate({
      in: { effect: "fadeInDown", delay: 50, shuffle: true },
      out: { effect: "fadeOutUp", delay: 50, shuffle: true },
      loop: true,
    });
  }, []);

  return (
    <motion.section
      className="flex flex-col items-center h-screen  mt-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className=" font-bold  text-gray-500">Hello, I'm</h1>
      <h1 className="tlt text-5xl font-bold mb-4 ">Aditya Kumar</h1>
      <p className=" text-2xl font-semibold text-gray-600 mb-8">
        Software Developer
      </p>
      <div className="flex space-x-4 mb-8">
        <a
          href="https://drive.google.com/file/d/1f9JbJVx0snjP0Vo8eQ_4pLzFaoXZxyGt/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-black border-2 rounded-lg hover:bg-gray-800 hover:font-semibold transition duration-500 ease-initial hover:text-white"
        >
          View Resume
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=1f9JbJVx0snjP0Vo8eQ_4pLzFaoXZxyGt"
          download
          className="px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800"
        >
          Download Resume
        </a>
      </div>

      <div className="flex space-x-6">
        <a
          href="https://github.com/Adityalabh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-130b10278/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-800"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </motion.section>
  );
}
