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
        title={
          <>
            GloryVille <span className="text-yellow-500">Solutions</span>{" "}
            Nigeria
          </>
        }
        subtitle="We bring you fresh and interesting news about the business and technology climate of Nigeria"
        backgroundImage="/assets/insight-hero.png"
      />

      <section className="px-6 py-16 bg-white text-gray-600">
        {/* Intro Section */}
        <motion.section
          className="py-16 px-6 max-w-6xl mx-auto text-center pt-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-gray-600">
            <h2 className="text-center text-3xl font-bold mb-5">
              Insights & Resources
            </h2>
            <p className="leading-relaxed">
              <strong>Stay informed, inspired, and empowered.</strong> Our
              Insights & Resources section is designed to equip entrepreneurs,
              business leaders, and teams with practical knowledge, industry
              trends, and strategic perspectives. Whether you&apos;re exploring
              growth opportunities or optimizing existing operations,
              you&apos;ll find valuable content to guide your journey and fuel
              informed decision-making.
            </p>
          </div>
        </motion.section>

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
