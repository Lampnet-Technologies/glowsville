/* eslint-disable @typescript-eslint/no-explicit-any */
import { sanityClient } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SharedHero from "@/components/SharedHero";
import Link from "next/link";

async function getInsight(slug: string) {
  const query = `*[_type == "insight" && slug.current == $slug][0]{
    title,
    publishedAt,
    mainImage{
      asset->{url}
    },
    author->{
      name,
      image{
        asset->{url}
      }
    },
    body
  }`;

  const post = await sanityClient.fetch(query, { slug });

  if (!post) notFound();

  return post;
}

async function getMoreInsights(slug: string) {
  const query = `*[_type == "insight" && slug.current != $slug][0...2]{
    title,
    slug,
    mainImage{ asset->{url} },
    publishedAt
  }`;
  return await sanityClient.fetch(query, { slug });
}

export default async function InsightDetail({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getInsight(params.slug);
  const more = await getMoreInsights(params.slug);

  return (
    <div className="bg-white">
      <Navbar />
      <SharedHero
        title={post.title}
        subtitle="Insights & Resources"
        backgroundImage="/assets/insight-hero.png"
      />

      <section className="px-6 py-6 max-w-6xl mx-auto text-gray-600 space-y-6">
        {post.mainImage?.asset?.url && (
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
          />
        )}

        {/* Author & Date */}
        <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            {post.author?.image?.asset?.url && (
              <Image
                src={post.author.image.asset.url}
                alt={post.author.name}
                width={30}
                height={30}
                className="rounded-full"
              />
            )}
            <span>{post.author?.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRegCalendarAlt />
            {new Date(post.publishedAt).toDateString()}
          </div>
        </div>

        {/* Content */}
        <PortableText value={post.body} />

        {/* More to Read */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">More to Read</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {more.map((item: any) => (
              <Link
                key={item.slug.current}
                href={`/insights/${item.slug.current}`}
              >
                <div className="border p-4 rounded shadow hover:shadow-md">
                  {item.mainImage?.asset?.url && (
                    <Image
                      src={item.mainImage.asset.url}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-40 object-cover rounded mb-3"
                    />
                  )}
                  <h4 className="text-md font-semibold mb-1">{item.title}</h4>
                  <p className="flex items-center gap-1 text-xs text-gray-500">
                    <FaRegCalendarAlt />
                    {new Date(item.publishedAt).toDateString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
