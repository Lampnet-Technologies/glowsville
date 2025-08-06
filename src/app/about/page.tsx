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
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className=" bg-white overflow-hidden">
      <Navbar />
      {/* Hero Section */}
      <SharedHero
        title={
          <>
            GloryVille <span className="text-yellow-500">Solutions</span>{" "}
            Nigeria
          </>
        }
        subtitle="Empowering MSMEs, SMEs & Mid-Sized Corporates across Nigeria & West Africa through integrated Business Process Management, Revenue Operations, and Go-to-Market Strategies."
        backgroundImage="/assets/about-hero.png"
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
            src="/assets/about-hero.png"
            alt="About Us Team"
            width={800}
            height={450}
            className="rounded-lg shadow mx-auto"
          />
        </div>
      </motion.section>

      {/* Success Story */}
      <motion.div
        id="success-stories"
        className="py-16 px-6 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-6">
          Empowering Local Businesses to Scale Globally
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          In 2023, GloryVille Solutions partnered with{" "}
          <strong>SwiftMove Logistics</strong>, a mid-sized delivery company in
          West Africa. Facing delays and lacking direction, we implemented a
          custom <strong>RevOps</strong> and <strong>GTM</strong> framework
          tailored to their structure.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Within six months, they reduced process waste by <strong>35%</strong>,
          doubled client retention, expanded into{" "}
          <strong>3 international markets</strong>, and achieved a
          <strong> 2.5x increase in monthly revenue</strong>. With better
          systems, stronger teams, and a clearer strategy, SwiftMove now thrives
          with our ongoing support.
        </p>

        <Link href="/#casestudy">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition"
          >
            See Full Case Study
          </motion.button>
        </Link>
      </motion.div>

      {/* Mission & Vision */}
      <motion.section
        className="py-14 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/assets/mission-vision.png"
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
                To be the leading BPM, RevOps & GTM consulting firm in Nigeria and global emerging markets, recognized for delivering sustainable impact, innovation, and measurable results.
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
      <Footer />
    </main>
  );
}
