"use client";

import { motion } from "framer-motion";
import { Download, Droplets } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-cyan-500 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
            <Droplets className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            立即开始健康饮水之旅
          </h2>

          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            下载 Water Habit，养成健康饮水习惯，让每一天都充满活力
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
            >
              <Download className="w-5 h-5" />
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-800 transition-colors"
            >
              <Download className="w-5 h-5" />
              Google Play
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
