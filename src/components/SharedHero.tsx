'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type HeroProps = {
  title: React.ReactNode;
  subtitle?: string;
  backgroundImage?: string;
};

const SharedHero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage = '/assets/hero-bg.png', // fallback background
}) => {
  return (
    <motion.section
      className="relative h-[80vh] w-full flex items-center justify-center text-white text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover brightness-[0.4] object-center"
        priority
      />
      <div className="relative z-10 px-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-4 text-lg md:text-xl">{subtitle}</p>}
      </div>
    </motion.section>
  );
};

export default SharedHero;
