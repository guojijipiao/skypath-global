"use client";

import Link from "next/link";
import { ArrowRight, Plane, Clock, Luggage, Shield } from "lucide-react";

const flightRoutes = {
  usa: {
    title: "中美航线特价",
    description: "覆盖中国（北京、上海、广州、深圳、香港）至美国（纽约、洛杉矶、旧金山、芝加哥、西雅图）所有热门航线，直飞/联程可选，特价舱位实时更新，留学生可享额外优惠。",
    routes: [
      {
        from: "北京",
        to: "纽约",
        transit: "直飞/中转",
        period: "2026年3月-6月",
        advantages: "直飞航班每周X班，中转可选韩国/日本/香港，特价低至XXX元起，可免费改期1次，留学生额外行李额，全程中文售后。",
      },
      {
        from: "上海",
        to: "洛杉矶",
        transit: "直飞/中转",
        period: "2026年3月-6月",
        advantages: "直飞航班每日有，中转可选新加坡/东京，特价低至XXX元起，无隐藏消费，出票速度快，支持灵活退票。",
      },
      {
        from: "广州",
        to: "旧金山",
        transit: "直飞/中转",
        period: "2026年3月-6月",
        advantages: "留学生专属特价，额外行李额，中转便捷，售后全程跟进，可协助办理入境政策咨询。",
      },
    ],
  },
  canada: {
    title: "中加航线特价",
    description: "覆盖中国（北京、上海、广州、香港）至加拿大（多伦多、温哥华、蒙特利尔）热门航线，直飞航线充足，联程中转便捷，特价舱位数量有限，先到先得。",
    routes: [
      {
        from: "北京",
        to: "多伦多",
        transit: "直飞/中转",
        period: "2026年3月-6月",
        advantages: "直飞航班每周X班，中转可选美国/欧洲，特价低至XXX元起，团队预订可享额外折扣，全程中文对接。",
      },
      {
        from: "上海",
        to: "温哥华",
        transit: "直飞/中转",
        period: "2026年3月-6月",
        advantages: "直飞航班每日有，特价舱位实时更新，留学生可享灵活改签，协助处理行李额相关事宜。",
      },
    ],
  },
  europe: {
    title: "中英/中欧航线特价",
    description: "覆盖中国至英国（伦敦、曼彻斯特）、欧洲（巴黎、柏林、罗马、马德里）热门航线，中转多为欧洲主要城市，流程便捷，特价低至XXX元起，支持全程行程规划。",
    routes: [
      {
        from: "北京",
        to: "伦敦",
        transit: "直飞/中转",
        period: "2026年3月-6月",
        advantages: "直飞航班每周X班，中转可选阿姆斯特丹/法兰克福，特价低至XXX元起，可协助办理签证咨询，入境政策指导。",
      },
      {
        from: "上海",
        to: "巴黎",
        transit: "直飞/中转",
        period: "2026年3月-6月",
        advantages: "特价舱位充足，中转流程简单，售后团队7×24小时响应，支持改签、退票服务。",
      },
    ],
  },
  australia: {
    title: "中澳/新航线特价",
    description: "覆盖中国至澳洲（悉尼、墨尔本、布里斯班）、新西兰（奥克兰、惠灵顿）热门航线，主打留学生特价，额外行李额优势明显，直飞/联程可选，价格低于平台。",
    routes: [
      {
        from: "广州",
        to: "悉尼",
        transit: "直飞/中转",
        period: "2026年3月-6月",
        advantages: "留学生专属价，额外行李额，直飞航班每周X班，中转可选新加坡/吉隆坡，出票速度快。",
      },
      {
        from: "上海",
        to: "奥克兰",
        transit: "直飞/中转",
        period: "2026年3月-6月",
        advantages: "特价低至XXX元起，灵活改签，全程中文售后，协助处理入境流程、行李相关事宜。",
      },
    ],
  },
  "southeast-asia": {
    title: "东南亚航线特价",
    description: "覆盖中国至东南亚（曼谷、吉隆坡、新加坡、普吉岛、清迈）热门航线，低价直飞，高频航班，可协助办理落地签咨询，适合旅游、探亲出行。",
    routes: [
      {
        from: "广州",
        to: "曼谷",
        transit: "直飞",
        period: "2026年3月-6月",
        advantages: "直飞航班每日有，特价低至XXX元起，可协助办理落地签，行程规划，售后全程跟进。",
      },
      {
        from: "上海",
        to: "新加坡",
        transit: "直飞",
        period: "2026年3月-6月",
        advantages: "特价舱位充足，中转便捷，无隐藏消费，支持灵活退票，适合短期旅游、中转出行。",
      },
    ],
  },
  connecting: {
    title: "全球联程特价",
    description: "针对需要多段行程、跨洲出行的用户，提供全球联程机票预订服务，规划最优中转路线，节省时间和费用，全程中文对接，售后保障。",
    routes: [
      {
        from: "美国",
        to: "中国→东南亚",
        transit: "联程",
        period: "2026年3月-6月",
        advantages: "全程联程，行李直挂，无需中途提取，特价低至XXX元起，可灵活调整行程，全程售后跟进。",
      },
      {
        from: "欧洲",
        to: "中国→澳洲",
        transit: "联程",
        period: "2026年3月-6月",
        advantages: "中转便捷，节省出行时间，特价舱位实时更新，可协助办理各段入境政策咨询，全程中文服务。",
      },
    ],
  },
};

export default function FlightsContent() {
  const sections = Object.entries(flightRoutes);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">全球国际特价机票</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            实时更新，低于平台价。专注海外华人出行，一手舱位资源，无隐藏消费，全程中文服务。
            加微信查实时价格、锁定舱位。
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm text-white/80">
            <Clock className="w-4 h-4" />
            <span>航班信息每日实时更新</span>
          </div>
        </div>
      </section>

      {/* Notice */}
      <div className="bg-accent-50 border-b border-accent-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <p className="text-sm text-accent-700 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            所有特价机票均为实时舱位，价格随航司政策波动，具体价格、舱位情况请加微信咨询，我们会根据你的出行时间、目的地，推荐最优特价方案。
          </p>
        </div>
      </div>

      {/* Flight Routes */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {sections.map(([key, section], sectionIndex) => (
          <section key={key} id={key} className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-100 p-2 rounded-lg">
                <Plane className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
            </div>
            <p className="text-gray-600 mb-6">{section.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.routes.map((route, routeIndex) => (
                <div
                  key={routeIndex}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">{route.from}</span>
                      <ArrowRight className="w-5 h-5 text-primary-600" />
                      <span className="text-lg font-bold text-gray-900">{route.to}</span>
                    </div>
                    <span className="text-sm bg-primary-50 text-primary-700 px-3 py-1 rounded-full">
                      {route.transit}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">出行时段：{route.period}</p>
                  <p className="text-primary-600 mb-4">{route.advantages}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-accent-500 font-semibold hover:text-accent-600"
                  >
                    加微信查实时价格、锁定舱位 <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">需要查实时舱位/特价机票？</h2>
          <p className="text-white/80 mb-6">
            加微信/WhatsApp，全程中文对接，秒回咨询，7×24小时在线！
            航班信息实时更新，加微信获取最新舱位和价格！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
            >
              立即添加微信 →
            </Link>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              WhatsApp咨询 →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
