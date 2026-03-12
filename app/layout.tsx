import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";

export const metadata: Metadata = {
  title: "海外华人国际机票代理 | 特价机票 | 留学生机票 | 全球航线",
  description: "专注服务海外华人，提供国际机票预订、特价机票、留学生机票、团队机票、改签退票等服务。中文服务、真实舱位、低价优势、7×24小时售后。",
  keywords: "国际机票, 海外华人机票, 特价机票, 留学生机票, 团队机票, 中美机票, 中加机票, 中英机票, 回国机票, 海外订票",
  openGraph: {
    title: "海外华人国际机票代理 | 特价机票",
    description: "专注服务海外华人，提供国际机票预订、特价机票、留学生机票等服务",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ContactBar />
      </body>
    </html>
  );
}
