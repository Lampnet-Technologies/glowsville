"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[90vh] text-white flex items-center justify-center text-center px-4 overflow-hidden">
      <Image
        src="/assets/hero-bg.png"
        alt="Hero Background"
        fill
        className="absolute object-cover object-center -z-10"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-60 -z-10" />

      <motion.div
        className="max-w-4xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Accelerating Growth & Resilience for{" "}
          <span className="text-yellow-400">African Businesses</span>
        </h1>
        <p className="text-lg md:text-xl">
          Empowering MSMEs, SMEs & Mid-Sized Corporates across Nigeria & West
          Africa...
        </p>
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold">
            Schedule a Free Consultation
          </button>
          <button className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black transition">
            Discover Our Holistic Approach
          </button>
        </motion.div>
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm md:text-base">
          <div>
            <span className="text-yellow-400 flex justify-center font-bold">100+</span> Nigerian
            Businesses Served
          </div>
          <div>
            <span className="text-yellow-400 flex justify-center font-bold">35%</span> Average Revenue Growth
          </div>
          <div>
            <span className="text-yellow-400 flex justify-center font-bold">3</span> Integrated Solutions
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
