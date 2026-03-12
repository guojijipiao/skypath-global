import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "机票服务 | 留学生机票、团队机票、改签退票 - 华人机票网",
  description: "提供留学生机票、团队机票、改签退票、行程规划、签证咨询等全方位服务。全程中文对接，售后无忧。",
  keywords: "留学生机票, 团队机票, 改签, 退票, 行程规划, 签证咨询",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
