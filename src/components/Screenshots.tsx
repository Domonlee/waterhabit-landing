"use client";

import { motion } from "framer-motion";
import { Droplets, Calendar, BarChart, Settings } from "lucide-react";
import { useTranslation, translations } from "./LanguageToggle";

const screenshots = [
  {
    icon: Droplets,
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: Calendar,
    gradient: "from-cyan-400 to-teal-400",
  },
  {
    icon: BarChart,
    gradient: "from-teal-400 to-green-400",
  },
  {
    icon: Settings,
    gradient: "from-slate-400 to-slate-500",
  },
];

export default function Screenshots() {
  const { language } = useTranslation();
  const t = translations.screenshots;

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {language === "en" ? t.title.en : t.title.zh}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {language === "en" ? t.subtitle.en : t.subtitle.zh}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-48 h-[380px] bg-white rounded-[2rem] p-3 shadow-xl mb-4">
                <div
                  className={`w-full h-full rounded-[1.75rem] bg-gradient-to-br ${screenshot.gradient} flex flex-col items-center justify-center p-6`}
                >
                  <screenshot.icon className="w-16 h-16 text-white mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {language === "en" ? t.items[index].title.en : t.items[index].title.zh}
                  </h3>
                  <p className="text-white/80 text-center text-sm">
                    {language === "en" ? t.items[index].description.en : t.items[index].description.zh}
                  </p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {language === "en" ? t.items[index].title.en : t.items[index].title.zh}
              </h3>
              <p className="text-sm text-slate-600 text-center">
                {language === "en" ? t.items[index].description.en : t.items[index].description.zh}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-500 mt-12"
        >
          {language === "en" ? t.note.en : t.note.zh}
        </motion.p>
      </div>
    </section>
  );
}
