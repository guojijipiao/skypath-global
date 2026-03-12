"use client";

import Link from "next/link";
import { Plane, ArrowRight } from "lucide-react";

const guides = [
  {
    id: "transfer",
    title: "转机攻略",
    icon: "✈️",
    content: [
      {
        location: "韩国转机（仁川机场）",
        policy: "中国公民经韩国仁川机场中转，停留≤24小时，不出机场国际中转区，无需过境签；如需出机场，需办理过境签。",
        process: "下飞机后，跟随&ldquo;Transfer&rdquo;指示牌，前往中转安检，检查登机牌，前往下一程登机口；无需提取行李（联程机票）。",
        tips: "提前打印好下一程登机牌，确保护照有效期≥6个月，遵守机场规定，不擅自离开中转区。",
      },
      {
        location: "日本转机（东京成田/赫尔机场）",
        policy: "中国公民经日本机场中转，停留≤24小时，不出机场国际中转区，无需过境签；如需出机场，需办理过境签。",
        process: "下飞机后，跟随&ldquo;Transfer&rdquo;指示牌，前往中转柜台，确认下一程航班，前往登机口；联程机票行李直挂，无需提取。",
        tips: "提前了解中转航站楼，部分航班需换乘航站楼，预留充足中转时间（建议≥2小时）。",
      },
      {
        location: "新加坡转机（樟宜机场）",
        policy: "中国公民经新加坡樟宜机场中转，停留≤48小时，无需过境签。",
        process: "下飞机后，跟随&ldquo;Transfer&rdquo;指示牌，前往中转安检区，联程机票行李直挂。",
        tips: "樟宜机场设施完善，可以利用转机时间逛机场（但需注意航班时间）。",
      },
      {
        location: "香港转机",
        policy: "香港机场不需入关，行李可直挂，无需任何签证。",
        process: "下飞机后直接前往中转登机口，无需入境香港。",
        tips: "如需入境香港，需持港澳通行证，且逗留时间有限制。",
      },
    ],
  },
  {
    id: "baggage",
    title: "行李攻略",
    icon: "🧳",
    content: [
      {
        location: "各航司行李额",
        policy: "不同航司经济舱行李额不同，一般为1件23kg或2件23kg。头等舱/商务舱可达2-3件32kg。",
        process: "预订机票时确认行李额，超出需付费。",
        tips: "留学生可申请额外行李额，建议提前咨询。",
      },
      {
        location: "超重处理",
        policy: "超重行李费用较高，一般为每kg 50-100美元。",
        process: "可在机场办理超重行李，或提前在航司官网购买额外行李额（更便宜）。",
        tips: "提前称重，避免机场额外付费。",
      },
      {
        location: "违禁品",
        policy: "液体超过100ml、尖锐物品、武器等禁止随身携带。",
        process: "行李托运前检查物品是否符合规定。",
        tips: "锂电池必须随身携带，不可托运。",
      },
      {
        location: "特殊物品",
        policy: "乐器、运动器材等特殊物品需提前申请，部分需额外付费。",
        process: "提前联系航司确认尺寸、重量要求。",
        tips: "易碎物品建议随身携带或购买额外座位。",
      },
    ],
  },
  {
    id: "entry",
    title: "入境政策",
    icon: "📋",
    content: [
      {
        location: "美国",
        policy: "需持有有效护照和签证（旅游签/学生签/工作签等）。无需核酸检测、无需疫苗证明。",
        process: "入境时需准备好往返机票、酒店预订单（如需），如实申报个人物品。",
        tips: "回答海关问题时要简洁明了，不要有移民倾向。",
      },
      {
        location: "加拿大",
        policy: "需持有有效护照和签证。无需核酸检测、无需疫苗证明。",
        process: "入境时需如实申报个人物品、行程信息。留学生需准备好录取通知书、资金证明。",
        tips: "携带现金超过1万加币需申报。",
      },
      {
        location: "英国/申根区",
        policy: "需持有有效护照和对应签证（英国签/申根签）。无需核酸检测、无需疫苗证明。",
        process: "入境时需准备好往返机票、酒店预订单（如需）。",
        tips: "申根区可自由通行（在签证有效期内）。",
      },
      {
        location: "澳洲/新西兰",
        policy: "需持有有效护照和对应签证。无需核酸检测、无需疫苗证明。",
        process: "入境时需如实申报个人物品（尤其是食品、药品）。",
        tips: "食品、药品、植物类物品必须申报，否则可能被罚款。",
      },
      {
        location: "东南亚（落地签/免签）",
        policy: "泰国、马来西亚、新加坡对中国公民实行落地签或免签政策。",
        process: "落地签需准备好免冠照片、落地签费用（现金）。",
        tips: "准备好往返机票和酒店预订单。",
      },
    ],
  },
  {
    id: "tips",
    title: "机票预订技巧",
    icon: "💡",
    content: [
      {
        location: "最佳预订时间",
        policy: "国际机票建议提前1-3个月预订。旺季（寒暑假、节假日）建议提前3个月以上。",
        process: "提前关注票价，每周二三出发价格相对便宜。",
        tips: "使用价格提醒功能，有降价时及时预订。",
      },
      {
        location: "价格比较",
        policy: "不同平台价格可能有差异，建议多平台比较。",
        process: "可使用比价网站，但最终建议通过可信代理预订。",
        tips: "我们提供特价舱位，价格通常低于主流平台。",
      },
      {
        location: "中转vs直飞",
        policy: "中转航班通常比直飞便宜，但需注意中转时间和签证要求。",
        process: "选择中转航班时，预留足够的中转时间（建议2小时以上）。",
        tips: "联程机票行李可直挂，无需提取。",
      },
      {
        location: "留学生优惠",
        policy: "持学生签证可享受额外行李额和优惠价格。",
        process: "预订时提供学生证明，部分航司有专属学生票。",
        tips: "提前咨询可获取更多优惠信息。",
      },
    ],
  },
];

export default function GuidesContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">海外华人出行全攻略</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            汇总国际出行常见问题、转机攻略、行李攻略、入境政策、机票预订技巧，
            帮你避开出行坑，让国际出行更顺畅。
          </p>
        </div>
      </section>

      {/* Guides */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {guides.map((guide) => (
          <section
            key={guide.id}
            id={guide.id}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{guide.icon}</span>
              <h2 className="text-2xl font-bold text-gray-900">{guide.title}</h2>
            </div>

            <div className="space-y-6">
              {guide.content.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h3 className="font-bold text-lg text-primary-700 mb-3">
                    {item.location}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="text-xs font-semibold text-gray-500 uppercase">政策</span>
                      <p className="text-sm text-gray-700 mt-1">{item.policy}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="text-xs font-semibold text-gray-500 uppercase">流程</span>
                      <p className="text-sm text-gray-700 mt-1">{item.process}</p>
                    </div>
                    <div className="bg-accent-50 p-4 rounded-lg">
                      <span className="text-xs font-semibold text-accent-600 uppercase">提示</span>
                      <p className="text-sm text-gray-700 mt-1">{item.tips}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-6">
            以上信息仅供参考，具体政策可能随时变动。建议出行前咨询我们获取最新信息。
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center"
          >
            有问题？加微信咨询 <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
