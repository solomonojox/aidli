/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import imageAsset from '../../assets/imageAsset';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <section id="about" className="max-w-7xl mx-auto py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 h-[500px] bg-amber-800">
              <img
                src={imageAsset.vass}
                alt="Team of virtual assistants"
                className=" shadow-md object-cover w-full h-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-center">ABOUT AIDLI</h2>
              <p className="text-lg leading-relaxed mb-6">
                At Aidli, we help busy entrepreneurs, coaches, and small business owners reclaim their time with professional virtual assistants trained to handle the tasks you don't have time for.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We understand the challenges of growing a business while managing day-to-day operations. Our handpicked team of skilled virtual assistants becomes an extension of your business, handling everything from administrative tasks to customer support.
              </p>
              <p className="text-lg leading-relaxed">
                Whether it's email management, research, customer support, or social media scheduling, we've got it covered — so you can focus on growing your business and doing what you love.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default About