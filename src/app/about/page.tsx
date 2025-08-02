"use client";

import SharedHero from "@/components/SharedHero";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaMapMarkerAlt,
  FaBalanceScale,
  FaAward,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className=" bg-white overflow-hidden">
      <Navbar />
      {/* Hero Section */}
      <SharedHero
        title="GloryVille Solutions Nigeria"
        subtitle="Empowering MSMEs, SMEs & Mid-Sized Corporates across Nigeria & West Africa through integrated Business Process Management, Revenue Operations, and Go-to-Market Strategies."
        backgroundImage="/assets/hero-bg.png"
      />

      {/* Intro Section */}
      <motion.section
        className="py-16 px-6 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-gray-600">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get to Know Us
          </h2>
          <p className="leading-relaxed">
            GloryVille Solutions Nigeria is a consulting firm helping mid-level
            performing businesses and MSMEs navigate Nigeria’s unique market. We
            deliver holistic strategies through RevOps, BPM, and GTM to drive
            profitable growth, customer alignment, and operational excellence.
          </p>
        </div>
        <div className="mt-8">
          <Image
            src="/assets/about-intro.jpg"
            alt="About Us Team"
            width={800}
            height={450}
            className="rounded-lg shadow mx-auto"
          />
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/assets/mission-vision.jpg"
            alt="Vision Image"
            width={600}
            height={400}
            className="rounded-lg shadow w-full h-auto"
          />
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-xl font-bold mb-1 md:w-6xl">Our Mission</h3>
              <p>
                To empower Nigerian SMEs and MSMEs with data-driven strategies,
                process optimization, and sustainable growth models tailored to
                the West African market.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Our Vision</h3>
              <p>
                To be the leading GTM and RevOps consulting firm in Nigeria,
                recognized for delivering sustainable impact, innovation, and
                measurable results.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        className="py-20 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-gray-600">
          Our Core Values
        </h3>

        <div className="grid md:grid-cols-3 gap-6 text-gray-600">
          {[
            {
              title: "Impact",
              icon: (
                <FaBullseye size={30} className="text-yellow-500 mx-auto" />
              ),
              description:
                "Driving measurable, sustainable, and transformative results for our clients.",
            },
            {
              title: "Local Relevance",
              icon: (
                <FaMapMarkerAlt size={30} className="text-yellow-500 mx-auto" />
              ),
              description:
                "Deeply understanding and adapting to the unique nuances of the Nigerian market.",
            },
            {
              title: "Integrity",
              icon: (
                <FaBalanceScale size={30} className="text-yellow-500 mx-auto" />
              ),
              description:
                "Operating with transparency, honesty, and ethical conduct.",
            },
            {
              title: "Excellence",
              icon: <FaAward size={30} className="text-yellow-500 mx-auto" />,
              description:
                "Delivering high-quality, impactful, and results-oriented solutions.",
            },
            {
              title: "Collaboration",
              icon: (
                <FaHandshake size={30} className="text-yellow-500 mx-auto" />
              ),
              description:
                "Fostering strong partnerships with clients to achieve shared success.",
            },
            {
              title: "Innovation",
              icon: (
                <FaLightbulb size={30} className="text-yellow-500 mx-auto" />
              ),
              description:
                "Embracing cutting-edge strategies, technologies, and methodologies.",
            },
          ].map(({ title, icon, description }, index) => (
            <div
              key={index}
              className="bg-yellow-300 p-6 rounded-lg shadow text-center space-y-3"
            >
              {icon}
              <h4 className="text-lg font-semibold">{title}</h4>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Meet the Team
          </h3>
          <p className="mb-10">
            We&apos;re a diverse group of strategists, operators, and
            technologists united by a shared passion for driving impact and
            growth across African markets.
          </p>
          <Image
            src="/assets/about-team.jpg"
            alt="Team"
            width={800}
            height={400}
            className="rounded-lg shadow mx-auto"
          />
        </div>
      </motion.section>
      <Footer />
    </main>
  );
}
