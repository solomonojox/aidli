import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function StatsBanner() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });

  return (
    <section className="py-16 bg-white" ref={statsRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {statsInView && <CountUp end={97} suffix="%" duration={2.5} />}
            </div>
            <p className="text-gray-600">Client Satisfaction Rate</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {statsInView && <CountUp end={15} suffix="+" duration={2.5} />}
            </div>
            <p className="text-gray-600">Hours Saved Weekly Per Client</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {statsInView && <CountUp end={24} duration={2.5} />}
            </div>
            <p className="text-gray-600">Hour Turnaround Time</p>
          </div>
        </div>
      </div>
    </section>
  );
}