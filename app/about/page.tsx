import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "关于我们 | 华人机票网",
  description: "了解华人机票网 - 专注服务海外华人的国际机票代理，多年行业经验，提供特价机票、留学生机票、团队机票等服务。",
};

export default function AboutPage() {
  return <AboutContent />;
}
