/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import imageAsset from '../../assets/imageAsset';

const Testimonial = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Agency Owner",
      text: "Hiring a VA from AIDLI was the best business decision I made last year. I've reclaimed 15+ hours weekly!",
      avatar: imageAsset.p1
    },
    {
      name: "Michael Chen",
      role: "E-commerce Entrepreneur",
      text: "My AIDLI assistant manages all my customer inquiries and order tracking. Customer satisfaction is up 22%!",
      avatar: imageAsset.p2
    },
    {
      name: "Leila Rodriguez",
      role: "Life Coach",
      text: "I was drowning in admin work. Now my AIDLI VA handles my calendar, emails, and even basic content creation.",
      avatar: imageAsset.p3
    }
  ];

  return (
    <div>
      <section id="testimonials" className="bg-secondary/15 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-16 text-center">WHAT OUR CLIENTS SAY</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic text-gray-700">{testimonial.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Testimonial