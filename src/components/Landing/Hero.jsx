/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';
import imageAsset from '../../assets/imageAsset';

const Hero = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatingAnim = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative overflow-hidden">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={container}
        className="min-h-screen pb-20 px-4 relative flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.8)), url(${imageAsset.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Floating decorative elements */}
        <motion.div
          animate={floatingAnim}
          className="absolute top-20 left-10 w-8 h-8 rounded-full bg-button opacity-20"
        />
        <motion.div
          animate={{ ...floatingAnim, y: [0, -25, 0] }}
          className="absolute bottom-1/4 right-20 w-12 h-12 rounded-full bg-indigo-400 opacity-20"
        />
        <motion.div
          animate={{ ...floatingAnim, y: [0, -10, 0] }}
          className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-white opacity-20"
        />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div variants={item}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
              MEET <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">AIDLI</span>
            </h1>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-xl md:text-3xl mb-8 text-blue-100 font-light">
              Your <span className="font-medium text-white">Partner in Productivity</span>
            </p>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-lg md:text-xl font-medium text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Reliable Virtual Assistants. <span className="text-white font-semibold">Real Results.</span> Transform your workflow with our dedicated support.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-button to-primary text-white font-bold py-4 px-8 rounded-full hover:shadow-lg transition-all flex items-center justify-center group"
            >
              BOOK A FREE DISCOVERY CALL
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 font-bold py-4 px-8 rounded-full hover:bg-white/20 hover:border-white/50 transition-all"
            >
              EXPLORE SERVICES
            </motion.button>
          </motion.div>

        </div>
        <motion.div
          variants={item}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="flex flex-col items-center text-blue-200 group cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
          </div>
        </motion.div>

        {/* Animated gradient border bottom */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-2"
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            backgroundImage: "linear-gradient(90deg, #f17c56, #94ada7, #f17c56)",
            backgroundSize: "200% 100%"
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.section>
    </div>
  )
}

export default Hero;