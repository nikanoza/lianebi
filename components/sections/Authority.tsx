"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, HeartPulse } from "lucide-react";

export default function Authority() {
  const t = useTranslations("Authority");

  const stats = [
    {
      label: t("stat1"),
      icon: <GraduationCap className="text-brand-primary" />,
    },
    {
      label: t("stat2"),
      icon: <CheckCircle2 className="text-brand-primary" />,
    },
    { label: t("stat3"), icon: <HeartPulse className="text-brand-primary" /> },
  ];

  return (
    <section className="py-20 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-gray-500 font-medium leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50/50 border border-gray-100"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm italic">
                {stat.icon}
              </div>
              <span className="font-bold text-brand-dark tracking-tight italic">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
