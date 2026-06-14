"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing"; // Added useRouter
import { useParams } from "next/navigation";
import { useModalStore } from "@/hooks/useModalStore";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const openModal = useModalStore((state) => state.openModal);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const currentLocale = params.locale as string;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLocaleChange = (newLocale: "en" | "ka") => {
    router.replace(
      // @ts-ignore - this tells next-intl to use current path + current params (like slug)
      { pathname, params },
      { locale: newLocale },
    );
  };

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
            <button
              onClick={() => handleLocaleChange("en")}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black tracking-widest transition-all ${
                currentLocale === "en"
                  ? "bg-white shadow-sm text-brand-primary"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => handleLocaleChange("ka")}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black tracking-widest transition-all ${
                currentLocale === "ka"
                  ? "bg-white shadow-sm text-brand-primary"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              GE
            </button>
          </div>

          <button
            onClick={openModal}
            className="btn-bouncy bg-brand-primary text-white px-6 py-2.5 rounded-2xl text-sm border-2 border-black/5 shadow-sm"
          >
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
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 font-bold shadow-xl">
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
              <button
                onClick={() => {
                  handleLocaleChange("en");
                  setIsMobileMenuOpen(false);
                }}
                className={`font-black ${currentLocale === "en" ? "text-brand-primary" : "text-gray-400"}`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  handleLocaleChange("ka");
                  setIsMobileMenuOpen(false);
                }}
                className={`font-black ${currentLocale === "ka" ? "text-brand-primary" : "text-gray-400"}`}
              >
                GE
              </button>
            </div>
          </div>

          <button
            onClick={openModal}
            className="btn-bouncy bg-brand-primary text-white w-full py-4 rounded-2xl shadow-lg"
          >
            {t("cta")}
          </button>
        </div>
      )}
    </nav>
  );
}
