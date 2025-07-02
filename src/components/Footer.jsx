import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  const diffStyles = {
    linkStyle:
      "cursor-pointer text-lg hover:text-blue-400 transition duration-700 ease-in-out relative group",
    underline:
      "absolute left-0 -bottom-1 h-[3px]  w-0 bg-blue-500 transition-all duration-500 group-hover:w-full",
  };
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <div className="flex justify-evenly relative">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={diffStyles.linkStyle}
          >
            <span className="relative inline-block ">
              About
              <span className={diffStyles.underline}></span>
            </span>
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className={diffStyles.linkStyle}
          >
            <span className="relative inline-block">
              Skills
              <span className={diffStyles.underline}></span>
            </span>
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={diffStyles.linkStyle}
          >
            <span className="relative inline-block">
              Project
              <span className={diffStyles.underline}></span>
            </span>
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={diffStyles.linkStyle}
          >
            <span className="relative inline-block">
              Contact
              <span className={diffStyles.underline}></span>
            </span>
          </Link>
        </div>
        <hr className="my-12 text-gray-500"/>
        <div className="w-full text-center my-">
          <h1 className="text-md text-gray-400">Copyright © 2024 Aditya. All Rights Reserved.</h1>
        </div>
      </div>
    </footer>
  );
}
