"use client";

import { motion } from "framer-motion";
import { Droplets, Calendar, BarChart, Settings } from "lucide-react";

const screenshots = [
  {
    icon: Droplets,
    title: "首页",
    description: "实时显示今日饮水量和目标进度",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: Calendar,
    title: "记录",
    description: "查看历史饮水记录和日历视图",
    gradient: "from-cyan-400 to-teal-400",
  },
  {
    icon: BarChart,
    title: "统计",
    description: "详细的饮水数据分析和报告",
    gradient: "from-teal-400 to-green-400",
  },
  {
    icon: Settings,
    title: "设置",
    description: "自定义目标、提醒和偏好设置",
    gradient: "from-slate-400 to-slate-500",
  },
];

export default function Screenshots() {
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
            界面预览
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            简洁美观的设计，让喝水变得更有动力
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.title}
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
                    {screenshot.title}
                  </h3>
                  <p className="text-white/80 text-center text-sm">
                    {screenshot.description}
                  </p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {screenshot.title}
              </h3>
              <p className="text-sm text-slate-600 text-center">
                {screenshot.description}
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
          * 界面设计持续优化中，实际产品可能略有不同
        </motion.p>
      </div>
    </section>
  );
}
