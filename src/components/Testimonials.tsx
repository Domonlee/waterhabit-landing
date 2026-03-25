"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "小李",
    role: "上班族",
    content: "自从用了 Water Habit，每天提醒自己喝水，皮肤状态好多了！推荐给所有上班族。",
    rating: 5,
  },
  {
    name: "张女士",
    role: "健身爱好者",
    content: "运动前后喝水记录功能很实用，帮助我更好地管理补水量。界面也很简洁美观。",
    rating: 5,
  },
  {
    name: "王同学",
    role: "学生",
    content: "用了三个月，已经养成每天喝足量水的习惯了。提醒功能很贴心，不会忘记喝水。",
    rating: 5,
  },
];

export default function Testimonials() {
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
            用户评价
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            来自真实用户的使用体验
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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
                {testimonial.content}
              </p>
              <div>
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
