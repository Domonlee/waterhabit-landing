import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Water Habit - Stay Hydrated, Stay Healthy",
  description: "Smart daily water intake tracking. Set goals, receive reminders, and build healthy hydration habits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
