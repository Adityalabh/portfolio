import { button, div } from "framer-motion/client";
import React, { useState } from "react";
import { Link } from "react-scroll";
// import Aicon from "./Aicon";

export default function Navbar() {
  const [MenuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!MenuOpen);
    console.log(MenuOpen);
  };

  const navLinks = [
    { id: "about", text: "About" },
    { id: "skills", text: "Skills" },
    // { id: "experience", text: "Experience" },
    { id: "projects", text: "Projects" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <nav className=" mx-7 py-3 rounded-xl hover:shadow-2xl transition duration-400 ease-in-out transform hover:-translate-y-1">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold flex items-center gap-3">
          <img src="./Aicon.png" alt="image" className="h-[30px] " />
          Portfolio
        </div>

        {/* destop size */}
        <ul className="hidden md:flex space-x-4 text-xl font-semibold text-gray-500">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {MenuOpen ? (
          <button
            className="md:hidden text-2xl text-gray-700 hover:text-black cursor-pointer"
            onClick={handleToggle}
          >
            <i className="fa-solid fa-xmark text-2xl cursor-pointer"></i>
          </button>
        ) : (
          <button
            className="md:hidden text-2xl text-gray-700 hover:text-black cursor-pointer"
            onClick={handleToggle}
          >
            <i className="fa-solid fa-bars outline-none border-none"></i>
          </button>
        )}
      </div>

      {MenuOpen && (
        <div className="md:hidden w-full ">
          <ul className=" md:flex flex-col px-4 my-6 space-y-6  space-x-4 text-xl font-semibold text-gray-500">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-500"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
