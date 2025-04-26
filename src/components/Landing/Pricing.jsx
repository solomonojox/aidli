/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-center">FLEXIBLE PRICING PLANS</h2>
                    <h3 className="text-xl font-semibold mb-16 text-center text-gray-600">CHOOSE THE RIGHT FIT</h3>

                    <div className="flex overflow-x-auto gap-8 md:grid md:grid-cols-3 scroll-snap-x snap-mandatory p-4">
                        {/* Starter Plan */}
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 flex flex-col snap-start min-w-[300px] md:min-w-0">
                            <h4 className="text-2xl font-bold mb-4">Starter</h4>
                            <p className="text-gray-600 mb-6">Perfect for small businesses just getting started</p>
                            <div className="text-4xl font-bold mb-2">$397<span className="text-lg font-normal text-gray-600">/mo</span></div>
                            <p className="text-gray-600 mb-8">10 hours of dedicated support</p>

                            <ul className="space-y-3 mb-8 flex-grow">
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Email & calendar management</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Basic administrative support</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Research assistance</span>
                                </li>
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                            >
                                Get Started
                            </motion.button>
                        </div>

                        {/* Professional Plan */}
                        <div className="bg-blue-600 text-white p-8 rounded-xl shadow-lg flex flex-col relative snap-start min-w-[300px] md:min-w-0">
                            <div className="absolute -top-4 left-0 w-full flex justify-center">
                                <span className="bg-yellow-400 text-blue-900 text-sm font-bold px-4 py-1 rounded-full">MOST POPULAR</span>
                            </div>
                            <h4 className="text-2xl font-bold mb-4">Professional</h4>
                            <p className="text-blue-100 mb-6">Ideal for growing businesses with consistent needs</p>
                            <div className="text-4xl font-bold mb-2">$797<span className="text-lg font-normal text-blue-200">/mo</span></div>
                            <p className="text-blue-100 mb-8">25 hours of dedicated support</p>

                            <ul className="space-y-3 mb-8 flex-grow">
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-yellow-400 mr-2 mt-1" />
                                    <span>Everything in Starter</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-yellow-400 mr-2 mt-1" />
                                    <span>Social media management</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-yellow-400 mr-2 mt-1" />
                                    <span>Customer support</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-yellow-400 mr-2 mt-1" />
                                    <span>Basic content creation</span>
                                </li>
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition"
                            >
                                Get Started
                            </motion.button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 flex flex-col snap-start min-w-[300px] md:min-w-0">
                            <h4 className="text-2xl font-bold mb-4">Enterprise</h4>
                            <p className="text-gray-600 mb-6">For established businesses with complex needs</p>
                            <div className="text-4xl font-bold mb-2">$1497<span className="text-lg font-normal text-gray-600">/mo</span></div>
                            <p className="text-gray-600 mb-8">50 hours of dedicated support</p>

                            <ul className="space-y-3 mb-8 flex-grow">
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Everything in Professional</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Project management</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Advanced content creation</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Dedicated account manager</span>
                                </li>
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                            >
                                Get Started
                            </motion.button>
                        </div>
                    </div>

                    <p className="text-center mt-8 text-gray-600">
                        Need a custom solution? <a href="#" className="text-blue-600 font-semibold hover:underline">Contact us</a> for tailored packages.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Pricing
