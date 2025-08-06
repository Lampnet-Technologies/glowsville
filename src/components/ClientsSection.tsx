"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const logoCount = 25;

const ClientsSection = () => {
  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    const loadedLogos = Array.from({ length: logoCount }, (_, i) => {
      return `/assets/Fw_ Clients & Partners Served/logo${i + 1}.png`;
    });

    // Clone the list to create the seamless loop
    setLogos([...loadedLogos, ...loadedLogos]);
  }, []);

  return (
    <section className="bg-yellow-50 py-24" id="clients">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-16">
          Clients & Partners We Served
        </h2>

        {/* Infinite scroll wrapper */}
        <div className="relative overflow-hidden">
          <div className="flex scroll-logos whitespace-nowrap">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="mx-4 flex-shrink-0 w-32 h-16 flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={logo}
                  alt={`Client logo ${idx + 1}`}
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
