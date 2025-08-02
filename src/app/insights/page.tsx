"use client";
import { useEffect, useState } from "react";
import { sanityClient } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import SharedHero from "@/components/SharedHero";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InsightsPage() {
  const [insights, setInsights] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "insight"]`).then(setInsights);
  }, []);

  return (
    <>
      <Navbar />
       <SharedHero
        title="GloryVille Solutions Nigeria"
        subtitle="We bring you fresh and interesting news about the business and technology climate of Nigeria"
        backgroundImage="/assets/hero-bg.png"
      />
      <section className="px-6 py-16 bg-white text-gray-600">
        <h2 className="text-center text-3xl font-bold mb-10">
          Insights & Resources
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight) => (
            <motion.div
              key={insight._id}
              className="border p-4 rounded shadow hover:shadow-md cursor-pointer bg-white"
              onClick={() => setSelected(insight)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              {insight.mainImage?.asset?.url && (
                <Image
                  src={insight.mainImage.asset.url}
                  alt={insight.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h4 className="text-lg font-semibold">{insight.title}</h4>
              <p className="text-sm text-gray-600">{insight.excerpt}</p>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(insight.publishedAt).toDateString()}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-6">
            <div className="bg-white p-6 max-w-3xl w-full rounded shadow-lg overflow-y-auto max-h-[90vh] relative">
              <button
                className="absolute top-3 right-4 text-2xl"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(selected.publishedAt).toDateString()}
              </p>
              <PortableText value={selected.body} />
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
