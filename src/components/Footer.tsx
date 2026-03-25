"use client";

import { Droplets, Mail } from "lucide-react";
import { useTranslation, translations } from "./LanguageToggle";

export default function Footer() {
  const { language } = useTranslation();
  const t = translations.footer;

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-4">
              <Droplets className="w-6 h-6 text-primary-400" />
              <span className="text-lg font-semibold">Water Habit</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              {language === "en" ? t.description.en : t.description.zh}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              {language === "en" ? "Links" : "链接"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {language === "en" ? t.links.en.privacy : t.links.zh.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {language === "en" ? t.links.en.terms : t.links.zh.terms}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {language === "en" ? t.links.en.contact : t.links.zh.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              {language === "en" ? "Contact" : "联系"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {t.contact}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Water Habit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
