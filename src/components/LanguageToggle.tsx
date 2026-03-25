"use client";

import { useState, useEffect } from "react";
import { Globe } from "lucide-react";

type Language = "en" | "zh";

const translations = {
  hero: {
    badge: { en: "Build Healthy Hydration Habits", zh: "养成健康饮水习惯" },
    titleEn: "Stay Hydrated",
    titleZh: "每天喝水",
    titleHighlight: { en: "so easy", zh: "so easy" },
    subtitle: {
      en: "Smart daily water intake tracking, set goals, receive reminders, and make healthy hydration part of your daily routine.",
      zh: "智能追踪每日饮水量，设定目标，接收提醒，让健康饮水成为你的日常习惯。",
    },
    appStore: "App Store",
    googlePlay: "Google Play",
  },
  features: {
    title: { en: "Features", zh: "核心功能" },
    subtitle: {
      en: "Everything you need for healthy hydration",
      zh: "全面呵护您的健康饮水生活",
    },
    items: [
      {
        title: { en: "Daily Goal Tracking", zh: "每日目标追踪" },
        description: {
          en: "Smart daily water recommendations based on your body and lifestyle. Track your progress effortlessly.",
          zh: "根据您的身体状况和生活习惯，智能计算每日建议饮水量，追踪完成进度。",
        },
      },
      {
        title: { en: "Smart Reminders", zh: "智能提醒" },
        description: {
          en: "Timely reminders to drink water and build a consistent hydration routine. Customize reminder frequency.",
          zh: "定时提醒您喝水，养成规律饮水的好习惯。可自定义提醒频率和时间段。",
        },
      },
      {
        title: { en: "Detailed Statistics", zh: "饮水记录统计" },
        description: {
          en: "Record every drink with detailed data. Generate daily, weekly, and monthly reports at a glance.",
          zh: "详细记录每次饮水数据，生成日报、周报、月报，一目了然了解饮水情况。",
        },
      },
      {
        title: { en: "Habit Analytics", zh: "习惯分析报告" },
        description: {
          en: "AI-powered analysis of your drinking habits with personalized suggestions to improve your health.",
          zh: "AI智能分析您的饮水习惯，提供个性化建议，帮助您持续改善健康。",
        },
      },
    ],
  },
  screenshots: {
    title: { en: "App Preview", zh: "界面预览" },
    subtitle: {
      en: "Beautiful design that makes hydration motivating",
      zh: "简洁美观的设计，让喝水变得更有动力",
    },
    items: [
      {
        title: { en: "Home", zh: "首页" },
        description: {
          en: "Real-time display of today's water intake and goal progress",
          zh: "实时显示今日饮水量和目标进度",
        },
      },
      {
        title: { en: "Records", zh: "记录" },
        description: {
          en: "View historical drinking records and calendar view",
          zh: "查看历史饮水记录和日历视图",
        },
      },
      {
        title: { en: "Statistics", zh: "统计" },
        description: {
          en: "Detailed water intake data analysis and reports",
          zh: "详细的饮水数据分析和报告",
        },
      },
      {
        title: { en: "Settings", zh: "设置" },
        description: {
          en: "Customize goals, reminders, and preferences",
          zh: "自定义目标、提醒和偏好设置",
        },
      },
    ],
    note: {
      en: "* Interface design is continuously optimized. Actual product may vary slightly.",
      zh: "* 界面设计持续优化中，实际产品可能略有不同",
    },
  },
  testimonials: {
    title: { en: "User Reviews", zh: "用户评价" },
    subtitle: {
      en: "What our users say",
      zh: "来自真实用户的使用体验",
    },
    items: [
      {
        name: "Alex",
        role: "Office Worker",
        content: "Ever since I started using Water Habit, I'm reminded to drink water every day. My skin has improved so much!",
        zhContent: "自从用了 Water Habit，每天提醒自己喝水，皮肤状态好多了！推荐给所有上班族。",
      },
      {
        name: "Sarah",
        role: "Fitness Enthusiast",
        content: "The water tracking before and after workouts is super useful. Helps me manage my hydration better.",
        zhContent: "运动前后喝水记录功能很实用，帮助我更好地管理补水量。界面也很简洁美观。",
      },
      {
        name: "Mike",
        role: "Student",
        content: "After three months, I've built a habit of drinking enough water every day. The reminders are so thoughtful!",
        zhContent: "用了三个月，已经养成每天喝足量水的习惯了。提醒功能很贴心，不会忘记喝水。",
      },
    ],
  },
  cta: {
    title: {
      en: "Start Your Healthy Hydration Journey Today",
      zh: "立即开始健康饮水之旅",
    },
    subtitle: {
      en: "Download Water Habit, build healthy habits, and feel energized every day",
      zh: "下载 Water Habit，养成健康饮水习惯，让每一天都充满活力",
    },
    appStore: "App Store",
    googlePlay: "Google Play",
  },
  footer: {
    description: {
      en: "Help you build healthy hydration habits and feel energized every day.",
      zh: "帮助您养成健康饮水习惯，让每一天都充满活力。",
    },
    links: {
      en: { privacy: "Privacy Policy", terms: "Terms of Service", contact: "Contact Us" },
      zh: { privacy: "隐私政策", terms: "服务条款", contact: "联系我们" },
    },
    contact: "support@waterhabit.app",
    copyright: `© ${new Date().getFullYear()} Water Habit. All rights reserved.`,
  },
};

export function useTranslation() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "zh" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return { language, toggleLanguage, translations };
}

export default function LanguageToggle() {
  const { language, toggleLanguage } = useTranslation();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all border border-slate-200"
    >
      <Globe className="w-4 h-4 text-slate-600" />
      <span className="text-sm font-medium text-slate-700">
        {language === "en" ? "中文" : "EN"}
      </span>
    </button>
  );
}

export { translations };
