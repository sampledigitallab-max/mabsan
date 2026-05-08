import dataTr from "@/data.json";
import dataEn from "@/data.en.json";
import type { Lang } from "@/lib/i18n";

export type BlogPost = {
  id: string;
  day: string;
  month: string;
  title: string;
  content: string;
  header: string;
  detail_content: string;
  image?: string;
};

import mediaJson from "@/media.json";
const mediaMap = mediaJson as Record<string, string>;

export function getPostImage(post: BlogPost): string {
  if (post.image && mediaMap[post.image]) return mediaMap[post.image];
  return mediaMap["blog_detail_photo.png"];
}

export function getAllPosts(lang: Lang = "tr"): BlogPost[] {
  return (lang === "en" ? dataEn : dataTr) as BlogPost[];
}

export function getPostById(id: string, lang: Lang = "tr"): BlogPost | undefined {
  return getAllPosts(lang).find((p) => p.id === id);
}
