import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "联系我们 | 华人机票网 - 微信/WhatsApp咨询",
  description: "联系华人机票网，添加微信或WhatsApp咨询特价机票、行程规划等服务。7×24小时在线，秒回咨询。",
  keywords: "联系我们, 微信咨询, WhatsApp咨询, 客服",
};

export default function ContactPage() {
  return <ContactContent />;
}
