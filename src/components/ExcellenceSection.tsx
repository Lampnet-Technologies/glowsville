"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChartLine, FaRocket, FaCogs } from "react-icons/fa";

const ExcellenceSection = () => {
  const serviceCards = [
    {
      title: "Streamline Your Operations",
      text: "We identify bottlenecks and inefficiencies in your current processes, implementing streamlined workflows that reduce waste, enhance performance, and build a foundation for scalable growth.",
      points: [
        "Process Optimization",
        "Workflow Automation",
        "Performance Metrics",
      ],
      icon: <FaCogs size={24} className="text-yellow-500" />,
    },
    {
      title: "Unify & Accelerate Your Revenue",
      text: "We strategically align your sales, marketing, and customer service functlons-uniting processes, data, and technology to create a powerful, predictable revenue engine.",
      points: [
        "Sales Alignment",
        "Marketing Integration",
        "Customer Service Unity",
      ],
      icon: <FaChartLine size={24} className="text-yellow-500" />,
    },
    {
      title: "Conquer Your Market",
      text: "From market research to launch planning. We craft and execute winning strategies that define your positioning, optimize your channels, and ensure successful market entry and expansion",
      points: ["Market Research", "Strategic Positioning", "Launch Planning"],
      icon: <FaRocket size={24} className="text-yellow-500" />,
    },
  ];

  return (
    <motion.section
      className="bg-yellow-50 text-center py-12 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h3
        className="text-2xl md:text-3xl font-semibold mb-4 text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Integrated Approach to{" "}
        <span className="text-yellow-500">Business Excellence</span>
      </motion.h3>

      <motion.p
        className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Our comprehensive model brings together three proven methodologies —
        business strategy, brand development, and operational transformation —
        tailored to the African business context for sustainable results.
      </motion.p>
      <motion.section
        className="py-15 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Top 3 service cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {serviceCards.map(({ title, text, points, icon }, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow p-6 space-y-4 border hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-yellow-100 w-16 h-16 flex items-center justify-center mx-auto rounded-full">
                {icon}</div>
              <div className="flex items-center space-x-2 justify-center">
                <h4 className="font-semibold text-gray-800">{title}</h4>
              </div>
              <p className="font-medium-light text-sm text-gray-600">{text}</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
              <Link href="/services">
              <span className="text-yellow-500 text-sm font-medium cursor-pointer">
                Learn More →
              </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/services">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded transition">
            View All Services
          </button>
          </Link>
        </motion.div>
      </motion.section>
    </motion.section>
  );
};

export default ExcellenceSection;
