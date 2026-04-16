import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import Image from "next/image";

interface Props {
  locale: string;
}

export default async function BlogPreview({ locale }: Props) {
  // 1. Fetch real translations and posts on the server
  const t = await getTranslations("BlogPreview");
  const allPosts = await getAllPosts(locale);

  // 2. Take only the latest 2 posts for the preview grid
  const recentPosts = allPosts.slice(0, 2);

  return (
    <section className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-brand-primary font-black uppercase text-xs tracking-[0.3em] mb-4 block">
              {t("badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter leading-[1.1]">
              {t("title")}
            </h2>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-2 font-black text-brand-primary hover:text-brand-dark transition-colors"
          >
            {t("cta")}
            <ArrowUpRight
              size={20}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={{
                pathname: "/blog/[slug]",
                params: { slug: post.slug },
              }}
              className="bg-white p-3 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-bouncy hover:-translate-y-2 transition-all group flex flex-col"
            >
              {/* Real Post Image */}
              <div className="relative aspect-video bg-brand-secondary/20 rounded-[2.2rem] mb-6 overflow-hidden">
                {post.metadata.image ? (
                  <Image
                    src={post.metadata.image}
                    alt={post.metadata.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-4xl">
                    📚
                  </div>
                )}
              </div>

              <div className="p-6 pt-0">
                <div className="flex gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full text-brand-primary">
                    {post.metadata.category}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 py-1">
                    {post.metadata.date}
                  </span>
                </div>

                {/* Real Post Title */}
                <h3 className="text-2xl font-black text-brand-dark mb-4 group-hover:text-brand-primary transition-colors line-clamp-2 leading-tight">
                  {post.metadata.title}
                </h3>

                <span className="inline-block font-bold text-sm underline underline-offset-4 decoration-2 decoration-brand-accent/30 group-hover:decoration-brand-accent transition-all">
                  {t("readMore")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
