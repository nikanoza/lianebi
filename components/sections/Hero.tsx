"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative overflow-hidden px-6 pt-12 pb-24 md:pt-20 md:pb-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-brand-secondary/20 text-brand-primary rounded-full">
              {t("badge")}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-dark leading-[1.1] mb-8 tracking-tighter">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed font-medium">
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="btn-bouncy bg-brand-accent text-brand-dark px-10 py-5 rounded-3xl font-black text-xl border-2 border-black/5 shadow-lg active:scale-95 transition-transform cursor-pointer">
                {t("cta")}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right: Interactive Phone Mockup */}
        <div className="flex-1 w-full flex justify-center relative">
          {/* Decorative Background Glow */}
          <div className="absolute -z-10 w-[110%] h-[110%] bg-brand-primary/10 rounded-full blur-3xl opacity-50" />

          <motion.div
            initial={{ y: 20, opacity: 0, rotate: 2 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 1, type: "spring" }}
            className="w-[300px] h-[610px] bg-brand-dark rounded-[3.5rem] p-3 shadow-2xl relative border-4 border-white/10"
          >
            {/* Inner Phone Screen */}
            <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden flex flex-col">
              <div className="p-6 pt-12 text-center flex-1">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  className="w-20 h-20 bg-brand-primary rounded-3xl mx-auto mb-6 flex items-center justify-center text-3xl shadow-bouncy"
                >
                  🎯
                </motion.div>
                <h3 className="font-black text-2xl text-brand-dark">
                  {t("missionTitle")}
                </h3>
                <p className="text-brand-primary font-bold">
                  {t("missionName")}
                </p>

                {/* Gamified UI Lesson */}
                <div className="mt-10 space-y-3 px-2">
                  <div className="p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl text-[10px] text-left font-bold opacity-40 leading-tight">
                    "Anything else I can help with?"
                  </div>
                  <div className="p-4 bg-brand-secondary/20 border-2 border-brand-primary rounded-2xl text-[10px] text-left font-bold leading-tight">
                    "Is there <span className="underline">something</span> else
                    I can help with?"
                  </div>
                </div>
              </div>

              {/* Bottom XP Bar */}
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                  <span>{t("xpLabel")}</span>
                  <span className="text-brand-primary font-bold">
                    XP 450/500
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-brand-primary"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
