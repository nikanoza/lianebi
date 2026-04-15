"use client";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-black text-brand-primary tracking-tighter"
        >
          lianebi<span className="text-brand-accent">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 font-bold text-gray-600">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            {t("home")}
          </Link>
          <Link
            href="/blog"
            className="hover:text-brand-primary transition-colors"
          >
            {t("blog")}
          </Link>

          <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
            <Link
              href={pathname}
              locale="en"
              className={`px-3 py-1 rounded-lg text-xs transition-all ${locale === "en" ? "bg-white shadow-sm text-brand-primary" : "text-gray-400"}`}
            >
              EN
            </Link>
            <Link
              href={pathname}
              locale="ka"
              className={`px-3 py-1 rounded-lg text-xs transition-all ${locale === "ka" ? "bg-white shadow-sm text-brand-primary" : "text-gray-400"}`}
            >
              GE
            </Link>
          </div>

          <button className="btn-bouncy bg-brand-primary text-white px-6 py-2.5 rounded-2xl text-sm">
            {t("cta")}
          </button>
        </div>
      </div>
    </nav>
  );
}
