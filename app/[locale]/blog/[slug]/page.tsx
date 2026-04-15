import { getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug, locale);
  const t = await getTranslations("Blog");

  if (!post) {
    notFound();
  }

  // Convert Markdown content to HTML
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-6">
      <article className="max-w-4xl mx-auto">
        {/* Navigation & Metadata */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <Link
            href="/blog"
            className="group flex items-center gap-2 font-black text-xs uppercase tracking-widest text-gray-400 hover:text-brand-primary transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>{" "}
            {t("backToBlog")}
          </Link>
          <div className="flex items-center gap-3">
            <span className="bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg">
              {post.metadata.category}
            </span>
            {/* <span className="text-gray-400 text-xs font-bold">
              {post.metadata.date}
            </span> */}
          </div>
        </div>

        {/* Title & Description */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-7xl font-black text-brand-dark leading-[1.1] tracking-tighter mb-8">
            {post.metadata.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed italic border-l-4 border-brand-accent pl-6">
            {post.metadata.description}
          </p>
        </header>

        {/* Main Poster Image */}
        {post.metadata.image && (
          <div className="relative aspect-[16/9] w-full rounded-[3rem] overflow-hidden mb-16 shadow-2xl shadow-brand-primary/10">
            <Image
              src={post.metadata.image}
              alt={post.metadata.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        )}

        {/* Article Body */}
        <div
          className="prose prose-lg prose-purple max-w-none 
                     prose-headings:font-black prose-headings:text-brand-dark prose-headings:tracking-tighter
                     prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-8
                     prose-strong:text-brand-dark prose-strong:font-black
                     prose-blockquote:border-brand-accent prose-blockquote:bg-gray-50 prose-blockquote:p-8 prose-blockquote:rounded-3xl prose-blockquote:not-italic"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  );
}
