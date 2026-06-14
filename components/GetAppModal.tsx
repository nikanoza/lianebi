"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { X, Play } from "lucide-react";
import { useModalStore } from "@/hooks/useModalStore";

export default function GetAppModal() {
  const t = useTranslations("Modal");

  const isOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-brand-dark/40 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-white rounded-[2.5rem] border-2 border-black/5 p-8 text-center shadow-2xl z-10 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary" />

            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-brand-dark hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-16 h-16 bg-brand-secondary/20 text-brand-primary rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl shadow-sm">
              <Play size={28} className="fill-brand-primary ml-1" />
            </div>

            <h3 className="text-2xl font-black text-brand-dark tracking-tighter mb-3">
              {t("title")}
            </h3>
            <p className="text-gray-600 font-medium leading-relaxed px-2 mb-6">
              {t("message")}
            </p>

            <button
              onClick={closeModal}
              className="btn-bouncy w-full bg-brand-primary text-white py-4 rounded-2xl font-bold border-2 border-black/5 shadow-md hover:opacity-90 active:scale-95 transition-all"
            >
              OK
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
