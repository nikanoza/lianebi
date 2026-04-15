"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const DUMMY_POSTS = [
  {
    id: 1,
    category: "Communication",
    slug: "something-vs-anything",
  },
  {
    id: 2,
    category: "Development",
    slug: "toddler-tantrums-science",
  },
];

export default function BlogPreview() {
  const t = useTranslations("BlogPreview");

  return (
    <section className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-brand-primary font-black uppercase text-xs tracking-[0.3em] mb-4 block">
              {t("badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter">
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
          {DUMMY_POSTS.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -8 }}
              className="bg-white p-2 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-bouncy transition-all group"
            >
              <div className="aspect-video bg-brand-secondary/20 rounded-4xl mb-6 flex items-center justify-center overflow-hidden">
                <span className="text-4xl">📚</span>
              </div>

              <div className="p-6 pt-0">
                <div className="flex gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full text-gray-500">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                  Post Title Placeholder
                </h3>

                <Link
                  href={{
                    pathname: "/blog/[slug]",
                    params: { slug: post.slug },
                  }}
                  className="inline-block font-bold text-sm underline underline-offset-4 decoration-2 decoration-brand-accent/30 hover:decoration-brand-accent transition-all"
                >
                  {t("readMore")}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
