import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getAllPosts, getPostById, getPostImage } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts("en").map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getPostById(id, "en");
  if (!post) return {};
  const url = `/en/blog/${post.id}`;
  const image = getPostImage(post);
  return {
    title: post.header,
    description: post.content?.slice(0, 160),
    alternates: {
      canonical: url,
      languages: { tr: `/blog/${post.id}`, en: url },
    },
    openGraph: {
      type: "article",
      url,
      title: post.header,
      description: post.content?.slice(0, 160),
      images: [{ url: image, alt: post.header }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.header,
      description: post.content?.slice(0, 160),
      images: [image],
    },
  };
}

export default async function BlogDetailPageEN({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getPostById(id, "en");
  if (!post) return notFound();

  const paragraphs = post.detail_content
    .split(/\r?\n\s*\r?\n|\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mabsan.com";
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.header,
    description: post.content,
    image: `${SITE_URL}${getPostImage(post)}`,
    inLanguage: "en",
    author: { "@type": "Organization", name: "Mabsan" },
    publisher: {
      "@type": "Organization",
      name: "Mabsan",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/media/mabsan.e2e0e3493e750a77d740fd309d82850b.svg`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/blog/${post.id}` },
  };

  return (
    <article className="bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {/* HERO */}
      <div className="relative pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="container-x max-w-4xl">
          <Reveal>
            <Link
              href="/en/blog"
              className="inline-flex items-center gap-2 text-sm font-display tracking-[0.2em] uppercase text-white/60 hover:text-red-bright transition mb-8"
            >
              <ArrowLeft size={14} /> All Articles
            </Link>

            <div className="flex items-baseline gap-3 mb-5">
              <span className="timeline-year-display text-5xl md:text-6xl text-white leading-none">
                {post.day}
              </span>
              <span className="font-display text-sm tracking-[0.3em] uppercase text-red-bright">
                {post.month}
              </span>
            </div>

            <h1 className="font-anybody-bold italic text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance mb-10">
              {post.header}
            </h1>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="relative aspect-[16/9] rounded-[40px_0_40px_0] overflow-hidden border border-red-deep/30 redline">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getPostImage(post)}
                alt={post.header}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* CONTENT */}
      <div className="pb-24 md:pb-32">
        <div className="container-x max-w-3xl">
          <Reveal delay={0.1}>
            <div className="text-base md:text-lg leading-relaxed text-white/80 space-y-5">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-16 pt-10 border-t border-white/10">
              <Link
                href="/en/blog"
                className="inline-flex items-center gap-2 text-sm font-display tracking-[0.2em] uppercase text-white/60 hover:text-red-bright transition"
              >
                <ArrowLeft size={14} /> All Articles
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
