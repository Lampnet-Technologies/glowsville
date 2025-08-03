"use client";

import { motion } from "framer-motion";

const ServicesOverview = () => {
  return (
    <section className="px-6 py-16 bg-white">
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
      <div className="grid md:grid-cols-2 gap-6 mb-5">
        <motion.div
          className="bg-yellow-400 text-white rounded-lg p-6 shadow space-y-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold">
            Empowering Businesses, Creating Jobs
          </h4>
          <p>
            We are committed to driving economic growth by empowering SMEs and
            MSMEs...
          </p>
          <div className="flex justify-between font-bold">
            <span>
              750+
              <br />
              Jobs Created
            </span>
            <span>
              $5B+
              <br />
              Economic Generated
            </span>
          </div>
        </motion.div>

        <motion.div
          className="bg-orange-500 text-white rounded-lg p-6 shadow space-y-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold">
            Building Sustainable & Resilient Operations
          </h4>
          <p>
            Our BPM approach reduces waste, improves resource and energy
            efficiency, and builds environmentally responsible supply chains.
          </p>
          <div className="flex justify-between font-bold">
            <span>
              40%
              <br />
              Waste Reduction
            </span>
            <span>
              25
              <br />
              Green Initiatives
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
