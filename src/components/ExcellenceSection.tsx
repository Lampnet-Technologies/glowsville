"use client";

import { motion } from "framer-motion";

const ExcellenceSection = () => {
  return (
    <motion.section
      className="bg-yellow-50 text-center py-16 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h3
        className="text-2xl md:text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Integrated Approach to{" "}
        <span className="text-yellow-500">Business Excellence</span>
      </motion.h3>

      <motion.p
        className="text-gray-700 max-w-2xl mx-auto leading-relaxed text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Our comprehensive model brings together three proven methodologies —
        business strategy, brand development, and operational transformation —
        tailored to the African business context for sustainable results.
      </motion.p>
    </motion.section>
  );
};

export default ExcellenceSection;
