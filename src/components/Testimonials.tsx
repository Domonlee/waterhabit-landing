"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslation, translations } from "./LanguageToggle";

const testimonials = [
  { rating: 5 },
  { rating: 5 },
  { rating: 5 },
];

export default function Testimonials() {
  const { language } = useTranslation();
  const t = translations.testimonials;

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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-primary-200 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {language === "en" ? t.items[index].content : t.items[index].zhContent}
              </p>
              <div>
                <p className="font-semibold text-slate-900">{t.items[index].name}</p>
                <p className="text-sm text-slate-500">{t.items[index].role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
