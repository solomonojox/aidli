import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function StatsBanner() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden" ref={statsRef}>
      {/* Soft Background Shapes */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-100 rounded-full opacity-30 z-0"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-purple-100 rounded-full opacity-30 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-3xl hover:shadow-md transition duration-300 ease-in-out">
            <div className="text-5xl font-extrabold text-blue-600 mb-4">
              {statsInView && <CountUp end={97} suffix="%" duration={2.5} />}
            </div>
            <p className="text-lg text-gray-700 font-medium">Client Satisfaction Rate</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-10 rounded-3xl hover:shadow-md transition duration-300 ease-in-out">
            <div className="text-5xl font-extrabold text-green-500 mb-4">
              {statsInView && <CountUp end={15} suffix="+" duration={2.5} />}
            </div>
            <p className="text-lg text-gray-700 font-medium">Hours Saved Weekly Per Client</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-10 rounded-3xl hover:shadow-md transition-all duration-300 ease-in-out">
            <div className="text-5xl font-extrabold text-purple-600 mb-4">
              {statsInView && <CountUp end={24} duration={2.5} />}
            </div>
            <p className="text-lg text-gray-700 font-medium">Hour Turnaround Time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
