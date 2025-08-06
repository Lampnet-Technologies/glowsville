"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const logoCount = 25;

const ClientsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    const loadedLogos = Array.from({ length: logoCount }, (_, i) => {
      return `/assets/Fw_ Clients & Partners Served/logo${i + 1}.png`;
    });
    setLogos(loadedLogos);
  }, []);

  return (
    <section className="bg-yellow-50 py-20" id="clients">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-gray-600 mb-8"
        >
          Clients & Partners We Served
        </motion.h2>

        {/* Desktop grid: 2 compact rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="hidden md:grid grid-cols-6 gap-6 items-center justify-center"
        >
          {logos.map((logo, idx) => (
            <div key={idx} className="p-2 flex items-center justify-center">
              <Image
                src={logo}
                alt={`Client logo ${idx + 1}`}
                width={100}
                height={60}
                className="object-contain hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </motion.div>

        {/* Mobile auto-scroll carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="md:hidden flex overflow-x-auto space-x-6 scroll-smooth px-2 snap-x snap-mandatory"
        >
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 snap-start p-2 min-w-[100px] flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Client logo ${idx + 1}`}
                width={100}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
