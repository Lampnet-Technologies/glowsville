/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { sanityClient } from "@/lib/sanity.client";
import { motion } from "framer-motion";
import SharedHero from "@/components/SharedHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function InsightsPage() {
  const [insights, setInsights] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "insight"] | order(publishedAt desc){
          _id,
          title,
          slug,
          mainImage{
            asset->{url}
          },
          excerpt,
          publishedAt
        }`
      )
      .then(setInsights);
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
        <h2 className="text-center text-3xl font-bold mb-5">
          Insights & Resources
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.slice(0, visibleCount).map((insight) => (
            <motion.div
              key={insight._id}
              className="border p-4 rounded shadow hover:shadow-md bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href={`/insights/${insight.slug.current}`}>
                {insight.mainImage?.asset?.url && (
                  <Image
                    src={insight.mainImage.asset.url}
                    alt={insight.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                )}
                <h4 className="text-xl font-semibold mb-1">{insight.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{insight.excerpt}</p>
                <p className="flex items-center gap-1 text-xs text-gray-500">
                  <FaRegCalendarAlt />
                  {new Date(insight.publishedAt).toDateString()}
                </p>
              </Link>
            </motion.div>
          ))}
          {visibleCount < insights.length && (
            <div className="text-center mt-8 flex justify-center">
              <button
                className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
                onClick={() => setVisibleCount((prev) => prev + 4)}
              >
                See More
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}
