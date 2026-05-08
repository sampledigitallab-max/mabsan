import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import PageIntro from "@/components/PageIntro";
import { getAllPosts, getPostImage } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Packaging Industry News and Insights",
  description:
    "Mabsan's articles on corrugated cardboard, sustainable packaging, e-commerce shipping and industry trends. Drupa observations and packaging solutions.",
  alternates: { canonical: "/en/blog", languages: { tr: "/blog", en: "/en/blog" } },
};

export default function BlogPageEN() {
  const posts = getAllPosts("en");
  return (
    <>
      <PageHero title="Blog" />
      <PageIntro
        title="Industry insights and news."
        description="We share our experience in the packaging industry, current trends and the latest news from Mabsan."
      />

      <section className="py-16 md:py-24 bg-black">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {posts.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.06}>
                <Link
                  href={`/en/blog/${post.id}`}
                  className="group flex flex-col h-full bg-soft-gray/20 hover:bg-soft-gray/40 border border-white/5 hover:border-red-bright/30 rounded-xl overflow-hidden transition duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getPostImage(post)}
                      alt={post.header}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition" />
                    <div className="absolute top-3 left-3 inline-flex items-baseline gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1">
                      <span className="font-anybody-bold italic text-white text-sm leading-none">
                        {post.day}
                      </span>
                      <span className="font-display text-[9px] tracking-[0.2em] uppercase text-red-bright leading-none">
                        {post.month}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col p-5 md:p-6">
                    <h3 className="font-anybody-bold italic text-base md:text-lg text-white mb-2.5 leading-snug text-balance group-hover:text-red-bright transition line-clamp-2">
                      {post.header || post.title}
                    </h3>

                    <p className="text-white/55 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                      {post.content}
                    </p>

                    <span className="inline-flex items-center gap-1 text-[11px] font-display text-white/50 group-hover:text-red-bright tracking-[0.2em] uppercase group-hover:gap-1.5 transition-all self-start">
                      Read More <ArrowUpRight size={12} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
