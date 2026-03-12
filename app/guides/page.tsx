import type { Metadata } from "next";
import GuidesContent from "./GuidesContent";

export const metadata: Metadata = {
  title: "出行攻略 | 转机攻略、行李攻略、入境政策 - 华人机票网",
  description: "海外华人出行全攻略，汇总转机攻略、行李攻略、入境政策、机票预订技巧，帮你避开出行坑，让国际出行更顺畅。",
  keywords: "转机攻略, 行李攻略, 入境政策, 机票预订技巧, 出行指南",
};

export default function GuidesPage() {
  return <GuidesContent />;
}
