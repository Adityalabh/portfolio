import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { id: "about", text: "About" },
    { id: "skills", text: "Skills" },
    { id: "projects", text: "Projects" },
    { id: "Education", text: "Education" },
    { id: "contact", text: "Contact" },
  ];

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <nav className="mx-7 py-3 rounded-xl hover:shadow-2xl transition duration-400 ease-in-out transform hover:-translate-y-1">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold flex items-center gap-3">
          <img src="./Aicon.png" alt="logo" className="h-[30px]" />
          Portfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 text-xl font-semibold text-gray-500">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition-colors"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 hover:text-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <i className="fa-solid fa-xmark text-2xl" />
          ) : (
            <i className="fa-solid fa-bars" />
          )}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden w-full bg-white shadow-lg rounded-b-xl overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <motion.ul 
              className="flex flex-col px-4 py-6 space-y-6 text-xl font-semibold text-gray-500"
              variants={menuVariants}
            >
              {navLinks.map((link) => (
                <motion.li 
                  key={link.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-blue-500 transition-colors block"
                    onClick={toggleMenu}
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}