"use client";

import { motion } from "framer-motion";
import { Target, Bell, BarChart3, TrendingUp } from "lucide-react";
import { useTranslation, translations } from "./LanguageToggle";

const features = [
  {
    icon: Target,
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Bell,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: BarChart3,
    color: "bg-sky-100 text-sky-600",
  },
  {
    icon: TrendingUp,
    color: "bg-indigo-100 text-indigo-600",
  },
];

export default function Features() {
  const { language } = useTranslation();
  const t = translations.features;

  return (
    <section className="py-20 bg-white">
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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {language === "en" ? t.items[index].title.en : t.items[index].title.zh}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === "en" ? t.items[index].description.en : t.items[index].description.zh}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
