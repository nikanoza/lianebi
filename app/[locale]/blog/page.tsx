import { getAllPosts } from "@/lib/blog";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function BlogListing({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = await getAllPosts(locale);
  const t = await getTranslations("Blog");

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-black text-brand-dark tracking-tighter italic mb-8">
            {t("pageTitle")}
          </h1>
        </header>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
                className="group flex flex-col bg-gray-50 rounded-[3rem] overflow-hidden border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-bouncy transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200">
                  {post.metadata.image ? (
                    <Image
                      src={post.metadata.image}
                      alt={post.metadata.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-6xl">
                      📚
                    </div>
                  )}
                  {/* Category Badge Floating on Image */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md text-brand-primary text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-sm">
                      {post.metadata.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-6">
                    {/* <span className="text-gray-400 text-xs font-bold">
                      {post.metadata.date}
                    </span> */}
                  </div>

                  <h2 className="text-3xl font-black text-brand-dark group-hover:text-brand-primary transition-colors leading-tight mb-4">
                    {post.metadata.title}
                  </h2>
                  <p className="text-gray-500 font-medium line-clamp-2 mb-8">
                    {post.metadata.description}
                  </p>

                  <div className="mt-auto flex items-center gap-2 font-black text-xs uppercase tracking-[0.2em] text-brand-dark group-hover:text-brand-primary">
                    {t("readMore")}{" "}
                    <span className="text-brand-accent group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-gray-50 rounded-[3rem]">
            <p className="text-gray-400 font-bold italic">{t("noPosts")}</p>
          </div>
        )}
      </div>
    </main>
  );
}
