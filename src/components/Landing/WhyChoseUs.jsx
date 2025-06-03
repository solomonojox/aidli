/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      title: 'Handpicked, Skilled Assistants',
      description:
        'Our rigorous selection process ensures you work with top-tier professionals who are experts in their domain.',
      points: [
        'Advanced skills assessment',
        'Communication proficiency testing',
        'Continuous professional development',
      ],
      color: 'blue',
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422A12.042 12.042 0 0112 21.5a12.042 12.042 0 01-6.16-10.922L12 14z" />
        </svg>
      ),
    },
    {
      title: 'Affordable, Flexible Plans',
      description:
        'No long-term contracts or hidden fees. Scale your support up or down as your business needs evolve.',
      points: [
        'Hourly, part-time, and full-time options',
        'Transparent pricing model',
        'Adjustable service packages',
      ],
      color: 'green',
      icon: (
        <svg
          className="w-10 h-10 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M4.93 19.07l1.41-1.41" />
          <path d="M17.66 6.34l1.41-1.41" />
        </svg>
      ),
    },
    {
      title: 'Confidentiality & Trust Guaranteed',
      description:
        'We understand the sensitive nature of your business data and communications.',
      points: [
        'Comprehensive NDAs with all team members',
        'Secure information handling protocols',
        'Regular security training',
      ],
      color: 'purple',
      icon: (
        <svg
          className="w-10 h-10 text-purple-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
          <path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
        </svg>
      ),
    },
    {
      title: 'Seamless Communication',
      description:
        'Work with your assistant as if they were in the next room, not across the globe.',
      points: [
        'Timezone-aligned availability',
        'Quick response guaranteed',
        'Weekly check-ins and progress reports',
      ],
      color: 'red',
      icon: (
        <svg
          className="w-10 h-10 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      ),
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-primary',
        light: 'bg-blue-100',
        text: 'text-primary',
        border: 'border-primary',
        hover: 'hover:bg-secondary',
        shadow: 'shadow-blue-200'
      },
      green: {
        bg: 'bg-green-500',
        light: 'bg-green-100',
        text: 'text-green-500',
        border: 'border-green-500',
        hover: 'hover:bg-green-600',
        shadow: 'shadow-green-200'
      },
      purple: {
        bg: 'bg-purple-500',
        light: 'bg-purple-100',
        text: 'text-purple-500',
        border: 'border-purple-500',
        hover: 'hover:bg-purple-600',
        shadow: 'shadow-purple-200'
      },
      red: {
        bg: 'bg-red-500',
        light: 'bg-red-100',
        text: 'text-red-500',
        border: 'border-red-500',
        hover: 'hover:bg-red-600',
        shadow: 'shadow-red-200'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="whyus" className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-40 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-green-100 rounded-full opacity-30 transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-100 rounded-full opacity-30 transform translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-100 rounded-full opacity-20"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 max-w-6xl mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/20 text-primary text-sm font-semibold">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-button bg-clip-text text-transparent">
            The Aidli Advantage
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our approach sets us apart and delivers exceptional value to your business
          </p>
        </motion.div>

        {/* Tab selection for mobile */}
        <div className="md:hidden mb-8">
          <div className="flex overflow-x-auto pb-2 gap-2 snap-x">
            {features.map((feature, index) => {
              const colorClasses = getColorClasses(feature.color);
              return (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`snap-center flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                    ${activeFeature === index 
                    ? `${colorClasses.bg} text-white` 
                    : `${colorClasses.light} ${colorClasses.text}`}`}
                >
                  {feature.title.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-4">
          {/* Feature Navigation - Desktop */}
          <motion.div 
            variants={itemVariants}
            className="hidden md:flex md:flex-col md:w-1/3 space-y-2"
          >
            {features.map((feature, index) => {
              const colorClasses = getColorClasses(feature.color);
              return (
                <motion.button
                  key={index}
                  whileHover={{ x: 5 }}
                  onClick={() => setActiveFeature(index)}
                  className={`text-left p-4 rounded-lg flex items-center transition-all duration-300 group
                    ${activeFeature === index 
                      ? `${colorClasses.light} ${colorClasses.border} border-l-4` 
                      : 'border-l-4 border-transparent hover:border-gray-200'}`}
                >
                  <div className={`mr-4 ${activeFeature === index ? colorClasses.text : 'text-gray-400'}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className={`font-bold ${activeFeature === index ? colorClasses.text : 'text-gray-700'}`}>
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1 truncate max-w-xs">
                      {feature.description.substring(0, 60)}...
                    </p>
                  </div>
                  <ChevronRight 
                    className={`ml-auto h-5 w-5 transform transition-transform duration-300 
                      ${activeFeature === index ? `${colorClasses.text} translate-x-0` : 'text-gray-300 -translate-x-2 group-hover:translate-x-0'}`}
                  />
                </motion.button>
              );
            })}
          </motion.div>

          {/* Feature Details */}
          <motion.div 
            variants={itemVariants}
            className="md:w-2/3"
          >
            {features.map((feature, index) => {
              const colorClasses = getColorClasses(feature.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeFeature === index ? 1 : 0,
                    y: activeFeature === index ? 0 : 20,
                    display: activeFeature === index ? 'block' : 'none'
                  }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-2xl shadow-xl ${colorClasses.shadow} p-8 border border-gray-100`}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl ${colorClasses.light} mr-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-lg">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-4">
                    {feature.points.map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                      >
                        <div className={`p-1 rounded-full ${colorClasses.light} mr-3`}>
                          <Check className={`h-5 w-5 ${colorClasses.text}`} />
                        </div>
                        <span className="text-gray-700 font-medium">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`mt-8 px-6 py-3 rounded-lg ${colorClasses.bg} text-white font-medium ${colorClasses.hover} transition-all duration-300 flex items-center`}
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl max-w-4xl mx-auto border border-gray-100 shadow-lg">
            <p className="text-xl md:text-2xl font-medium text-gray-700 italic">
              "Your business deserves support that's both professional and personal.
              At Aidli, we build real working relationships that scale with your
              business needs."
            </p>
            <div className="mt-6">
              <span className="inline-block h-1 w-16 bg-primary mx-auto"></span>
            </div>
            <p className="mt-4 font-semibold text-button">Meet Your New Business Partner</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;