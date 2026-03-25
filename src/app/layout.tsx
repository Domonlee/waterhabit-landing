import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Water Habit - 养成健康饮水习惯",
  description: "帮助您追踪每日饮水，养成健康饮水习惯",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
