"use client";

import { FaStore, FaIndustry, FaWallet } from "react-icons/fa";
import { motion } from "framer-motion";

const caseStudies = [
  {
    icon: <FaStore className="text-yellow-500" />,
    title: "E-commerce Retail",
    result: "40% Conversions • 25% CAC",
    note: "40% increase in leads + 25% reduction in customer acquisition costs.",
  },
  {
    icon: <FaIndustry className="text-yellow-500" />,
    title: "Manufacturing",
    result: "15% Waste • 30% Efficiency",
    note: "Reduced waste and improved delivery by 30% through workflow optimization.",
  },
  {
    icon: <FaWallet className="text-yellow-500" />,
    title: "FinTech Startup",
    result: "200% Revenue • $2M Series A",
    note: "Scaled from MVP to successful Series A through GTM strategy.",
  },
];

const insights = [
  "RevOps 101: The Guide for Nigerian SMEs",
  "5 GTM Mistakes to Avoid When Expanding in West Africa",
  "Case Study: How Process Optimization Transformed a Lagos-Based Manufacturer",
];

const CaseStudySection = () => {
  return (
    <motion.section
      className="bg-yellow-50 py-20 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}
      <motion.h3
        className="text-2xl md:text-3xl font-semibold mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Transforming Businesses,{" "}
        <span className="text-yellow-500">Driving Real Impact</span>
      </motion.h3>

      <motion.p
        className="text-gray-600 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        See how our integrated approach has helped Nigerian and West African businesses
        achieve sustainable growth and market success.
      </motion.p>

      {/* Case Study Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {caseStudies.map(({ icon, title, result, note }, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-lg shadow p-6 space-y-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center text-3xl">{icon}</div>
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-gray-500">{note}</p>
            <span className="block font-bold text-yellow-500">{result}</span>
          </motion.div>
        ))}
      </div>

      {/* Insight Heading */}
      <motion.h4
        className="text-xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Thought Leadership for the{" "}
        <span className="text-yellow-500">African Business Landscape</span>
      </motion.h4>

      <motion.p
        className="text-gray-600 max-w-xl mx-auto mb-6 text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Stay ahead with our insights, case studies, and tailored strategies for Nigerian
        and West African markets.
      </motion.p>

      {/* Insight List */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {insights.map((title, i) => (
          <motion.div
            key={i}
            className="bg-white p-4 rounded shadow text-left text-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <h5 className="font-semibold text-gray-800">{title}</h5>
          </motion.div>
        ))}
      </div>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <button className="bg-yellow-500 text-white px-6 py-2 rounded font-medium hover:bg-yellow-600">
          Explore All Case Studies
        </button>
        <button className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded font-medium hover:bg-yellow-100">
          Visit Our Insights Hub
        </button>
      </motion.div>
    </motion.section>
  );
};

export default CaseStudySection;
