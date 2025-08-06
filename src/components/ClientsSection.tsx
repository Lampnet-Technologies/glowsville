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
    // Dynamically create logo paths
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
          Those We&apos;ve Worked With
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center"
        >
          {logos.map((logo, idx) => (
            <div key={idx} className="p-4 flex items-center justify-center">
              <Image
                src={logo}
                alt={`Client logo ${idx + 1}`}
                width={120}
                height={60}
                className="object-contain hover:scale-120 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
