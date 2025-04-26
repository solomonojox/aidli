/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Database, Instagram, FileText } from 'lucide-react';

const Services = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        },
        hover: {
            scale: 1.05,
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }
    };

    const services = [
        {
            image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
            title: "INBOX & CALENDAR MANAGEMENT",
            description: "We handle email sorting, meeting scheduling, appointment reminders, and calendar optimization to ensure you never miss an important event."
        },
        {
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
            title: "DATA ENTRY & RESEARCH",
            description: "From market research and competitor analysis to organized spreadsheets and database management, we deliver accurate information when you need it."
        },
        {
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
            title: "SOCIAL MEDIA SUPPORT",
            description: "Content scheduling, engagement monitoring, basic graphic creation, and hashtag research to keep your social presence active and growing."
        },
        {
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
            title: "ADMIN SUPPORT",
            description: "Document formatting, proofreading, basic bookkeeping, travel arrangements, and all the administrative tasks that consume your valuable time."
        }
    ];

    return (
        <section id="services" className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
            <div className="mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-gray-800">Our Services</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4"></div>
                    <h3 className="text-lg font-medium text-center text-gray-500 uppercase tracking-wider">What We Do Best</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 px-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            // viewport={{ once: true, margin: "-50px" }}
                            variants={cardVariants}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col hover:scale-105"
                        >
                            <div className="h-48 overflow-hidden">
                                {/* <motion.img 
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                /> */}
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-all" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h4 className="font-bold text-xl mb-3 text-gray-800">{service.title}</h4>
                                <p className="text-gray-600 mb-4 flex-1">{service.description}</p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-auto bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg font-medium self-start"
                                >
                                    Learn more
                                </motion.button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;