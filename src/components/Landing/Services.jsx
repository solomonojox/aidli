/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';

import { ChevronRight, Check, Calendar, Database, Instagram, FileText } from 'lucide-react';
import CountUp from 'react-countup';

const Services = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      };

    const services = [
        {
            icon: <Calendar className="h-8 w-8 text-blue-500" />,
            title: "INBOX & CALENDAR MANAGEMENT",
            description: "We handle email sorting, meeting scheduling, appointment reminders, and calendar optimization to ensure you never miss an important event."
        },
        {
            icon: <Database className="h-8 w-8 text-blue-500" />,
            title: "DATA ENTRY & RESEARCH",
            description: "From market research and competitor analysis to organized spreadsheets and database management, we deliver accurate information when you need it."
        },
        {
            icon: <Instagram className="h-8 w-8 text-blue-500" />,
            title: "SOCIAL MEDIA SUPPORT",
            description: "Content scheduling, engagement monitoring, basic graphic creation, and hashtag research to keep your social presence active and growing."
        },
        {
            icon: <FileText className="h-8 w-8 text-blue-500" />,
            title: "ADMIN SUPPORT",
            description: "Document formatting, proofreading, basic bookkeeping, travel arrangements, and all the administrative tasks that consume your valuable time."
        }
    ];

    return (
        <div>
            <section id="services" className="bg-gray-50 py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-center">OUR SERVICES</h2>
                        <h3 className="text-xl font-semibold mb-16 text-center text-gray-600">WHAT WE DO BEST</h3>

                        <div className="grid md:grid-cols-2 gap-12">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center md:items-start text-center md:text-left"
                                >
                                    <div className="bg-blue-50 p-4 rounded-full mb-6">
                                        {service.icon}
                                    </div>
                                    <h4 className="font-bold text-xl mb-4">{service.title}</h4>
                                    <p className="text-gray-600">{service.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Services