"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SharedHero from "@/components/SharedHero";

const servicesData = [
  {
    title: "RevOps & GTM Audit & Strategy Development",
    image: "/assets/services/chart-1.png",
    points: [
      "Comprehensive assessment of sales, marketing, and customer service infrastructure",
      "Identification of inefficiencies and untapped growth potential",
      "Development of a customized RevOps and GTM strategy aligned with business goals",
    ],
  },
  {
    title: "Process Optimization & Implementation (RevOps Focus)",
    image: "/assets/services/chart-2.png",
    points: [
      "Workflow streamlining and performance enhancements",
      "Customer lifecycle management strategies",
      "Sales pipeline and onboarding process improvements",
    ],
  },
  {
    title: "Go-to-Market (GTM) Strategy & Execution Support",
    image: "/assets/services/chart-3.png",
    points: [
      "Market Research & Analysis",
      "Product/Service Positioning & Pricing Strategy",
      "Sales Enablement Tools and GTM Launch Planning",
    ],
  },
  {
    title: "Technology Stack Optimization & Integration",
    image: "/assets/services/chart-4.png",
    points: [
      "Implementation and training on GTM technologies",
      "CRM, automation, analytics, and sales enablement tools",
      "Integration of local and global platforms (e.g. Zoho, HubSpot)",
    ],
  },
  {
    title: "Data Analytics & Performance Measurement",
    image: "/assets/services/chart-5.png",
    points: [
      "Setting up KPIs and dashboards",
      "Real-time data for decision-making",
      "Measurement for RevOps and GTM effectiveness",
    ],
  },
  {
    title: "Team Alignment & Training",
    image: "/assets/services/chart-6.png",
    points: [
      "Workshops to unify teams and ensure process understanding",
      "Practical tools for RevOps and GTM adoption",
      "Cross-functional collaboration techniques",
    ],
  },
  {
    title: "Informal Market Specialization",
    image: "/assets/services/chart-7.png",
    points: [
      "RevOps + GTM strategies for informal market sectors",
      "Specialized engagement and customer targeting",
      "Integration of digital and offline touchpoints",
    ],
  },
  {
    title: "Ongoing Support & Retainers",
    image: "/assets/services/chart-8.png",
    points: [
      "Continuous optimization for RevOps and GTM initiatives",
      "Retainer model with performance monitoring and improvements",
      "Sustainable growth and long-term partnership",
    ],
  },
];

const ServicesPage = () => {
  return (
    <main className="bg-white">
      <Navbar />
      <SharedHero
        title="Our Services"
        subtitle="Explore how we help businesses scale with RevOps, GTM, and Business Optimization"
        backgroundImage="/assets/hero-bg.png"
      />
  {/*     <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Our Services
      </motion.h1> */}

      <div className="space-y-20 px-5 pb-5 pt-5">
        {servicesData.map(({ title, image, points }, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="md:w-1/2">
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-600">
                {title}
              </h2>
              <ul className="space-y-2 text-gray-700">
                {points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="text-yellow-500 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-4 bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600 transition">
                Get Free Consultation
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default ServicesPage;
