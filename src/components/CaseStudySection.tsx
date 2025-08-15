"use client";
import {
  FaChartLine,
  FaUsers,
  FaCogs,
  FaLightbulb,
  FaStore,
  FaIndustry,
  FaWallet,
  FaFeather,
  FaFile,
  FaMarker,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const bottomBenefits = [
  {
    icon: <FaCogs size={22} className="text-yellow-500 mx-auto" />,
    label: "Integrated Specialization",
    desc: "Our unique focus on the convergence to BPM. RevOps and GTM provides a holistic solution that competitors often separate.",
  },
  {
    icon: <FaUsers size={22} className="text-yellow-500 mx-auto" />,
    label: "Deep African Contextualization",
    desc: "We have a deep and unique understanding of the business environment in Nigeria and Sub-Saharan Africa.",
  },
  {
    icon: <FaChartLine size={22} className="text-yellow-500 mx-auto" />,
    label: "Focus on Measurable ROI",
    desc: "We are committed to delivering tangible results through improved revenue, increased market shares, and enhanced efficiency.",
  },
  {
    icon: <FaLightbulb size={22} className="text-yellow-500 mx-auto" />,
    label: "Innovative",
    desc: "We recommend the best-fit technology solutions for your unique needs including innovative local platforms.",
  },
];

const caseStudies = [
  {
    icon: <FaStore className="text-yellow-500" />,
    title: "E-commerce Retail",
    result: "40% Conversions • 25% CAC",
    note: "Achieved a 40% increase in lead conversion rates and a 25% reduction in customer acquisition costs within six months.",
  },
  {
    icon: <FaIndustry className="text-yellow-500" />,
    title: "Manufacturing",
    result: "15% Waste • 30% Efficiency",
    note: "Streamlined production workflow, leading to a 15% reduction in operational waste and improved delivery times.",
  },
  {
    icon: <FaWallet className="text-yellow-500" />,
    title: "FinTech Startup",
    result: "200% Revenue • $2M Series A",
    note: "Scaled the company from early-stage to industry leader with 200% revenue growth and a successful Series A raise.",
  },
];

const insights = [
  {
    icon: <FaFeather className="text-yellow-500" />,
    title: "RevOps 101: The Guide for Nigerian SMEs",
    note: "Essential strategies for aligning your revenue operations in the Nigerian market context.",
  },
  {
    icon: <FaFile className="text-yellow-500" />,
    title: "5 GTM Mistakes to Avoid When Expanding in West Africa",
    note: "Common pitfalls and how to navigate the unique challenges of West African markets.",
  },
  {
    icon: <FaMarker className="text-yellow-500" />,
    title:
      "Case Study: How Process Optimization Transformed a Lagos-Based Manufacturer",
    note: "Real-world 8PM implementation results from one of Nigeria’s leading manufacturers.",
  },
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
      {/* Bottom 4 Benefits */}
      <motion.div
        className="text-center mb-4 p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-2xl md:text-3xl font-semibold mb-2 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          The GloryVille Advantage: Holistic, Local, Sustainable
        </motion.h3>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          We combine global best practices with deep African market
          understanding to deliver transformative results.
        </motion.p>
        <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-600 mb-14">
          {bottomBenefits.map(({ icon, label, desc }, i) => (
            <motion.div
              key={i}
              className="space-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {icon}
              <h4 className="font-semibold">{label}</h4>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h3
        className="text-2xl md:text-3xl font-semibold mb-2 text-gray-600"
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
        See how our integrated approach has helped Nigerian and West African
        businesses achieve sustainable growth and market success.
      </motion.p>

      {/* Case Study Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-14 p-8">
        {caseStudies.map(({ icon, title, result, note }, i) => (
          <motion.div
            key={i}
            className="bg-white hover:bg-yellow-100 rounded-lg shadow p-6 space-y-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center text-3xl">
              {icon}
            </div>
            <h4 className="font-semibold text-gray-600">{title}</h4>
            <p className="text-sm text-gray-600">{note}</p>
            <span className="block font-bold text-yellow-500">{result}</span>
          </motion.div>
        ))}
      </div>

      {/* Insight Heading */}
      <motion.h4
        className="text-2xl md:text-3xl font-semibold mb-2 text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Thought Leadership for the{" "}
        <span className="text-yellow-500">African Business Landscape</span>
      </motion.h4>

      <motion.p
        className="text-gray-600 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Stay ahead with our insights, case studies, and tailored strategies for
        Nigerian and West African markets.
      </motion.p>

      {/* Insight List */}
      <div className="grid md:grid-cols-3 gap-6 mb-8 p-8">
        {insights.map(({ icon, title, note }, i) => (
          <motion.div
            key={i}
            className="bg-white p-4 rounded shadow text-left text-sm hover:bg-yellow-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center text-3xl mb-4">
              {icon}
            </div>
            <h4 className="font-semibold text-gray-600 mb-4">{title}</h4>
            <p className="text-sm text-gray-600">{note}</p>
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
        <Link href="https://calendly.com/gloryvillesolutions/30min" target="-blank" rel="noopener noreferrer">
        <button className="bg-yellow-500 text-white px-6 py-2 rounded font-medium hover:bg-yellow-600">
          Get Free Consultation
        </button>
        </Link>
        <Link href="/insights">
        <button className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded font-medium hover:bg-yellow-100">
          Visit Our Insights Hub
        </button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default CaseStudySection;
