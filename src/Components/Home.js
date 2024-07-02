// src/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaBitcoin, FaEthereum, FaCodeBranch } from 'react-icons/fa'; // Import icons

const Home = ({Bitcoin , Ethereum , Solana}) => {
  return (
    <div id="Home" className="relative h-screen w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div 
        className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full opacity-50"
        initial={{ opacity: 0, x: -200, y: -200 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-24 h-24 bg-red-500 rounded-full opacity-50"
        initial={{ opacity: 0, x: 200, y: 200 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Main Content */}
      <motion.h1 
        className="text-5xl font-bold mb-4 tracking-wide text-yellow-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Real-Time Stock Updates
      </motion.h1>
      <motion.p 
        className="text-xl mb-8 text-center leading-relaxed text-green-400"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Stay updated with the latest prices of your favorite cryptocurrencies: Bitcoin, Ethereum, and Solana.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <FaBitcoin className="text-6xl mb-4 mx-auto text-yellow-500" />
          <h2 className="text-2xl font-semibold mb-2 text-yellow-500">Bitcoin</h2>
          <p className="text-4xl animate-bounce text-yellow-400">${Bitcoin}</p>
        </motion.div>
        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <FaEthereum className="text-6xl mb-4 mx-auto text-blue-500" />
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">Ethereum</h2>
          <p className="text-4xl animate-bounce text-blue-400">${Ethereum}</p>
        </motion.div>
        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <FaCodeBranch className="text-6xl mb-4 mx-auto text-teal-500" /> {/* Solana icon */}
          <h2 className="text-2xl font-semibold mb-2 text-teal-500">Solana</h2>
          <p className="text-4xl animate-bounce text-teal-400">${Solana}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
