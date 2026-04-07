"use client";

import { motion } from "framer-motion";
import { Droplets, Download } from "lucide-react";
import { useTranslation, translations } from "./LanguageToggle";

export default function Hero() {
  const { language } = useTranslation();
  const t = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Droplets className="w-4 h-4" />
              {language === "en" ? t.badge.en : t.badge.zh}
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {language === "en" ? t.titleEn : t.titleZh}
              <span className="text-primary-500"> {t.titleHighlight.en}</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              {language === "en" ? t.subtitle.en : t.subtitle.zh}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors"
              >
                <Download className="w-5 h-5" />
                {t.appStore}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-900 px-6 py-3 rounded-xl font-medium hover:bg-slate-200 transition-colors"
              >
                <Download className="w-5 h-5" />
                {t.googlePlay}
              </a>
              <a
                href="/tracker"
                className="inline-flex items-center justify-center gap-2 border border-primary-200 bg-primary-50 text-primary-700 px-6 py-3 rounded-xl font-medium hover:bg-primary-100 transition-colors"
              >
                {language === "en" ? "Web Tracker Demo" : "网页版记录入口"}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-[500px] bg-gradient-to-b from-primary-400 to-primary-600 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white" />
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Droplets className="w-8 h-8 text-primary-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {language === "en" ? "Today's Water" : "今日饮水"}
                      </h3>
                      <p className="text-4xl font-bold text-primary-500 mt-2">1200ml</p>
                      <p className="text-sm text-slate-500">
                        {language === "en" ? "Goal: 2000ml" : "目标: 2000ml"}
                      </p>
                    </div>
                    <div className="flex-1 flex items-end justify-center pb-4">
                      <div className="w-12 bg-primary-100 rounded-full relative overflow-hidden" style={{ height: '200px' }}>
                        <div
                          className="absolute bottom-0 w-full bg-gradient-to-t from-primary-500 to-cyan-400 transition-all duration-500"
                          style={{ height: '60%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
              >
                <Droplets className="w-6 h-6 text-primary-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
