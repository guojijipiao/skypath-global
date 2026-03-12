import type { Metadata } from "next";
import DestinationsContent from "./DestinationsContent";

export const metadata: Metadata = {
  title: "热门目的地 | 全球国际机票目的地推荐 - 华人机票网",
  description: "全球热门目的地机票攻略，覆盖美国、加拿大、英国/欧洲、澳洲/新西兰、东南亚等地区。提供机票预订、入境政策、出行攻略一站式服务。",
  keywords: "热门目的地, 美国机票, 加拿大机票, 欧洲机票, 澳洲机票, 东南亚机票, 入境政策",
};

export default function DestinationsPage() {
  return <DestinationsContent />;
}
