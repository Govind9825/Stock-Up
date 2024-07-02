// src/JoinUs.js
import React from "react";
import { motion } from "framer-motion";

const JoinUs = () => {
  return (
    <div
      id="JoinUs"
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-8 text-white"
    >
      <motion.h1
        className="text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Join Us
      </motion.h1>
      <motion.p
        className="text-xl text-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Join our community to stay updated with the latest stock market trends
        and news!
      </motion.p>
      <motion.button
        className="bg-gray-300 text-black py-3 px-6 rounded-lg shadow-lg hover:bg-gray-900 hover:border-2 hover:border-white hover:text-white transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Join Now
      </motion.button>
      <motion.footer
        className="bg-gray-900 text-white p-4 text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-sm">© 2024 Stock-Up. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default JoinUs;
