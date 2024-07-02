// src/Navbar.js
import React from 'react';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="bg-white bg-opacity-50 backdrop-blur-sm shadow-lg text-black sticky top-2 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <motion.div
              className="flex-shrink-0 flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img className="h-8 w-auto" src="https://imgs.search.brave.com/sQ7FmYhviVwgCT9BYnkbYFtVxiU4RX8jX13fPcWXbSo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/aW5hbmNpYWwtZmln/dXJlcy1hbmFseXpp/bmctc3RvY2stbWFy/a2V0LWRhdGEtc3Vj/Y2Vzcy1nZW5lcmF0/ZWQtYnktYWlfMTg4/NTQ0LTE3ODI2Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn" alt="Stock Logo" />
              <span className="font-bold text-xl ml-2 mr-80">Stock-Up</span>
            </motion.div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 text-lg text-black">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  <Link to="Home" smooth={true} duration={500}>Home</Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  <Link to="Market" smooth={true} duration={500}>Market</Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  <Link to="JoinUs" smooth={true} duration={500}>Join Us</Link>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <motion.a
              href="https://twitter.com"
              className="text-black hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
              whileHover={{ scale: 1.1 }}
            >
              <FaTwitter className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              className="text-black hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium"
              whileHover={{ scale: 1.1 }}
            >
              <FaInstagram className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
