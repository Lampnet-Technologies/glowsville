"use client";

import { motion } from "framer-motion";
import { FaChartBar, FaFeather } from "react-icons/fa";

const ServicesOverview = () => {
  return (
    <section className="px-6 py-16 bg-white overflow-hidden order border-transparent">
      {/* EconomicMobility & Climate Resilience text */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-600">
          Fostering <span className="text-yellow-500">Economic Mobility</span> &
          Climate Resilience
        </h3>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          We are committed to driving economic growth by empowering the engines
          of our economy—SMEs and MSMEs. True growth is sustainable growth.
        </p>
      </motion.div>

      {/* Stat boxes */}
      <div className="grid md:grid-cols-2 gap-6 mb-5 px-8 py-6 justify-center">
        <div className="w-full max-w-sm mx-auto space-y-4">
          <motion.div
            className="bg-yellow-400 text-white rounded-lg p-6 space-y-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold flex items-center gap-3">
              <div className="bg-yellow-100 text-yellow-500 rounded-full p-2">
                <FaChartBar className="w-6 h-7" />
              </div>
              Building Sustainable & Resilient Operations
            </h4>
            <p>
              We are committed to driving economic growth by empowering the
              engines of our economy--SMEs and MsMEs. By helping businesses
              scale and formalize, we contribute directly to job creation,
              financial inclusion, and sustainable community development.
            </p>
            <div className="flex justify-between font-bold text-center w-full">
              <span className="w-1/3">
                750+
                <br />
                Jobs Created
              </span>
              <span className="w-1/1.5">
                $5B+
                <br />
                Economic Generated
              </span>
            </div>
          </motion.div>
        </div>
        <div className="w-full max-w-sm mx-auto space-y-4">
          <motion.div
            className="bg-orange-500 text-white p-6 shadow space-y-4 rounded-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold flex items-center gap-3">
              <div className="bg-yellow-100 text-orange-500 rounded-full p-2">
                <FaFeather className="w-6 h-7" />
              </div>
              Building Sustainable & Resilient Operations
            </h4>
            <p>
              True growth is sustainable. Our BPM approach helps clients reduce
              waste, improve resource and energy efficiency, and build
              environmentally responsible supply chains, creating businesses
              that are not only profitable but also resilient for our clients.
            </p>
            <div className="flex justify-between font-bold text-center w-full">
              <span className="w-1/2.5">
                40%
                <br />
                Waste Reduction
              </span>
              <span className="w-1/4">
                25 Green
                <br />
                Initiatives
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
