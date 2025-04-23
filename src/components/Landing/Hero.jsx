/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import imageAsset from '../../assets/imageAsset';

const Hero = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="min-h-screen pb-20 px-4 relative text-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${imageAsset.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            MEET <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300">AIDLI</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white">Your Partner in Productivity</p>
          <p className="text-lg md:text-xl font-medium text-blue-100 mb-12">
            Reliable Virtual Assistants. Real Results.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
            >
              BOOK A FREE DISCOVERY CALL
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 border-2 border-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition"
            >
              EXPLORE SERVICES
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Hero