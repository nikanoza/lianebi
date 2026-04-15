"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [
    { number: "01", title: t("step1_title"), desc: t("step1_desc") },
    { number: "02", title: t("step2_title"), desc: t("step2_desc") },
    { number: "03", title: t("step3_title"), desc: t("step3_desc") },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-20 tracking-tighter text-center">
          {t("title")}
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gray-100 -z-10" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-brand-primary text-white rounded-[2rem] flex items-center justify-center text-3xl font-black mb-8 shadow-bouncy ring-8 ring-white">
                {step.number}
              </div>
              <h3 className="text-2xl font-black mb-4 text-brand-dark italic">
                {step.title}
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed max-w-xs px-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
