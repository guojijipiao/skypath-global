import type { Metadata } from "next";
import FlightsContent from "./FlightsContent";

export const metadata: Metadata = {
  title: "特价机票 | 全球国际机票特价优惠 - 华人机票网",
  description: "全球国际特价机票，实时更新，低于平台价。覆盖中美、中加、中英、中欧、中澳、东南亚等热门航线。留学生机票、团队机票优惠多多。",
  keywords: "特价机票, 国际机票优惠, 低价机票, 中美机票, 中加机票, 中英机票, 留学生机票",
};

export default function FlightsPage() {
  return <FlightsContent />;
}
