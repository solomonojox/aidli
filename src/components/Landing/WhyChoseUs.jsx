/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const WhyChoseUs = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div>
            <section id="why-us" className="max-w-6xl mx-auto py-20 px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-4 text-center">WHY CHOOSE US</h2>
                    <h3 className="text-xl font-semibold mb-16 text-center text-gray-600">THE AIDLI ADVANTAGE</h3>

                    <div className="grid md:grid-cols-2 gap-10 mb-16">
                        <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-500">
                            <h4 className="font-bold text-xl mb-4">Handpicked, Skilled Assistants</h4>
                            <p className="text-gray-600 mb-6">Our rigorous selection process ensures you work with top-tier professionals who are experts in their domain.</p>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Advanced skills assessment</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Communication proficiency testing</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Continuous professional development</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-500">
                            <h4 className="font-bold text-xl mb-4">Affordable, Flexible Plans</h4>
                            <p className="text-gray-600 mb-6">No long-term contracts or hidden fees. Scale your support up or down as your business needs evolve.</p>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Hourly, part-time, and full-time options</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Transparent pricing model</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Adjustable service packages</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-500">
                            <h4 className="font-bold text-xl mb-4">Confidentiality & Trust Guaranteed</h4>
                            <p className="text-gray-600 mb-6">We understand the sensitive nature of your business data and communications.</p>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Comprehensive NDAs with all team members</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Secure information handling protocols</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Regular security training</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-500">
                            <h4 className="font-bold text-xl mb-4">Seamless Communication</h4>
                            <p className="text-gray-600 mb-6">Work with your assistant as if they were in the next room, not across the globe.</p>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Timezone-aligned availability</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Quick response guaranteed</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                                    <span>Weekly check-ins and progress reports</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-xl text-center italic text-gray-700">
                        Your business deserves support that's both professional and personal. At Aidli, we build real working relationships that scale with your business needs.
                    </p>
                </motion.div>
            </section>
        </div>
    )
}

export default WhyChoseUs