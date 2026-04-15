"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-2xl font-black text-brand-primary tracking-tighter hover:opacity-80 transition-opacity"
        >
          lianebi<span className="text-brand-accent">.</span>
        </Link>

        {/* Desktop Navigation */}
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

          {/* Language Switcher */}
          <div className="flex gap-1 bg-gray-100 p-1 rounded-xl border border-gray-200/50">
            <Link
              href={pathname}
              locale="en"
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black tracking-widest transition-all ${
                locale === "en"
                  ? "bg-white shadow-sm text-brand-primary"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              EN
            </Link>
            <Link
              href={pathname}
              locale="ka"
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black tracking-widest transition-all ${
                locale === "ka"
                  ? "bg-white shadow-sm text-brand-primary"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              GE
            </Link>
          </div>

          <button className="btn-bouncy bg-brand-primary text-white px-6 py-2.5 rounded-2xl text-sm border-2 border-black/5 shadow-sm">
            {t("cta")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 font-bold shadow-xl animate-in slide-in-from-top duration-300">
          <Link
            href="/"
            className="text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("home")}
          </Link>
          <Link
            href="/blog"
            className="text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("blog")}
          </Link>

          <div className="h-[1px] bg-gray-100 w-full" />

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400 uppercase tracking-widest">
              Language
            </span>
            <div className="flex gap-4">
              <Link
                href={pathname}
                locale="en"
                className={
                  locale === "en"
                    ? "text-brand-primary underline decoration-2 underline-offset-4"
                    : "text-gray-400"
                }
              >
                English
              </Link>
              <Link
                href={pathname}
                locale="ka"
                className={
                  locale === "ka"
                    ? "text-brand-primary underline decoration-2 underline-offset-4"
                    : "text-gray-400"
                }
              >
                ქართული
              </Link>
            </div>
          </div>

          <button className="btn-bouncy bg-brand-primary text-white w-full py-4 rounded-2xl shadow-lg active:scale-95 transition-transform">
            {t("cta")}
          </button>
        </div>
      )}
    </nav>
  );
}
