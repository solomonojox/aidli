/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import imageAsset from '../../assets/imageAsset';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative overflow-hidden bg-gray-50">
      {/* Static Soft Shapes */}
      <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-blue-100 rounded-[50%] rotate-12 z-0"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] bg-yellow-100 rounded-[60%] rotate-45 z-0"></div>

      <section id="about" className="max-w-7xl mx-auto py-24 px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image Section */}
            <motion.div
              className="md:w-1/2 h-[480px] rounded-3xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={imageAsset.vass}
                alt="Team of virtual assistants"
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="md:w-1/2"
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-4xl font-extrabold mb-6 text-gray-800 text-center md:text-left">
                About <span className="text-blue-600">Aidli</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                At <strong className="text-blue-500">Aidli</strong>, we help busy entrepreneurs, coaches, and small business owners reclaim their time with professional virtual assistants trained to handle the tasks you don't have time for.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                We understand the challenges of growing a business while managing day-to-day operations. Our handpicked team becomes an extension of your business, managing everything from admin tasks to customer care.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether it's email management, research, customer support, or social media scheduling, we've got it covered — so you can focus on growing your business and doing what you love.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
