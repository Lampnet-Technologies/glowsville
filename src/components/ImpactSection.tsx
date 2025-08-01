"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ImpactSection = () => {
  return (
    <motion.section
      className="py-16 px-6 bg-white flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Text content */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-4 leading-snug">
          Your Partner for{" "}
          <span className="text-yellow-500">Integrated Growth</span> & Sustainable Impact
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
          In Nigeria’s dynamic economy, we are the strategic partner helping Nigerian and
          West African businesses to thrive — combining innovation, strategy, and deep
          market understanding.
        </p>
        <button className="bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600 transition">
          Learn About Our Impact
        </button>
      </motion.div>

      {/* Image content */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/assets/chart-laptop.png"
          alt="Growth Chart"
          width={500}
          height={350}
          className="rounded-lg shadow-lg"
          priority
        />
      </motion.div>
    </motion.section>
  );
};

export default ImpactSection;
