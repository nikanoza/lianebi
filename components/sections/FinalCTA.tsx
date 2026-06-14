"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useModalStore } from "@/hooks/useModalStore";

export default function FinalCTA() {
  const t = useTranslations("FinalCTA");
  const openModal = useModalStore((state) => state.openModal);

  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-brand-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-primary/20"
      >
        {/* Decorative Background Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/20 rounded-full -ml-20 -mb-20 blur-3xl" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
            {t("title")}
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-medium mb-12">
            {t("subtitle")}
          </p>
          <button
            onClick={openModal}
            className="btn-bouncy bg-brand-accent text-brand-dark px-12 py-5 rounded-[2rem] font-black text-xl border-2 border-black/5 hover:shadow-xl transition-all"
          >
            {t("button")}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
