/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Cta = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary text-white py-20 px-4 text-center mb-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">READY TO WORK SMARTER?</h2>
          <p className="text-xl mb-12">Take the first step toward reclaiming your time and growing your business.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-secondary hover:text-white transition flex items-center justify-center"
            >
              BOOK A FREE DISCOVERY CALL
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white font-bold py-4 px-8 rounded-lg hover:bg-secondary transition"
            >
              HIRE A VA IN 24 HOURS
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Cta