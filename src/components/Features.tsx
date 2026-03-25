"use client";

import { motion } from "framer-motion";
import { Target, Bell, BarChart3, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "每日目标追踪",
    description: "根据您的身体状况和生活习惯，智能计算每日建议饮水量，追踪完成进度。",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Bell,
    title: "智能提醒",
    description: "定时提醒您喝水，养成规律饮水的好习惯。可自定义提醒频率和时间段。",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: BarChart3,
    title: "饮水记录统计",
    description: "详细记录每次饮水数据，生成日报、周报、月报，一目了然了解饮水情况。",
    color: "bg-sky-100 text-sky-600",
  },
  {
    icon: TrendingUp,
    title: "习惯分析报告",
    description: "AI智能分析您的饮水习惯，提供个性化建议，帮助您持续改善健康。",
    color: "bg-indigo-100 text-indigo-600",
  },
];

export default function Features() {
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
            核心功能
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            全面呵护您的健康饮水生活
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
