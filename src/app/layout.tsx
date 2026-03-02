import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Cervantes AI - Next-Gen AI Tool for High-Performing Creators",
  description:
    "Generate text, images, and videos in seconds. Turn a single idea into multi-platform content — powered by advanced AI models and built-in automation.",
  keywords: [
    "AI content creator",
    "AI platform",
    "AI video generator",
    "AI image generator",
    "content automation",
    "AI text generator",
    "multi-model AI",
    "content at scale",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
