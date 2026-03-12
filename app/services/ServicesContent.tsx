"use client";

import Link from "next/link";
import { GraduationCap, Users, RefreshCw, MapPin, FileText, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    id: "student",
    title: "留学生机票",
    icon: GraduationCap,
    description: "专为海外留学生打造的机票服务，适配留学生寒暑假出行需求，提供额外行李额、灵活改签、特价舱位等专属优势。",
    features: [
      "留学生专属特价：价格低于主流平台，无隐藏消费",
      "额外行李额：免费提供额外行李额，解决留学生行李多的烦恼",
      "灵活改签：支持免费改期1次（部分航线），可根据开学/放假时间调整行程",
      "全程服务：从机票预订到入境政策咨询，全程中文对接",
    ],
    process: [
      "加微信/WhatsApp咨询，告知出行时间、出发地、目的地、是否为留学生",
      "我们提供实时舱位、特价价格，推荐最优航线",
      "提供留学生证明（录取通知书、学生证等），确认预订，支付费用",
      "出票后，发送电子客票，告知登机流程、行李注意事项",
      "全程售后跟进，有任何问题随时咨询",
    ],
  },
  {
    id: "group",
    title: "团队机票",
    icon: Users,
    description: "专为3人及以上团队打造的机票服务，适合家庭出行、朋友同行、商务团队、留学生结伴等场景。",
    features: [
      "团队专属折扣：3人及以上成团，享受团队特价，人数越多折扣越大",
      "专人对接：安排专属客服，全程跟进团队预订、出票、售后",
      "灵活规划：根据团队出行时间、预算、目的地，推荐最优航线",
      "座位安排：协助安排团队成员相邻座位",
    ],
    process: [
      "加微信/WhatsApp咨询，告知团队人数、出行时间、出发地、目的地",
      "我们提供团队特价、舱位情况，推荐最优航线",
      "确认预订，提供团队成员身份信息",
      "支付费用，出票后发送电子客票，告知登机流程",
      "专人跟进售后，有任何问题随时沟通解决",
    ],
  },
  {
    id: "refund",
    title: "改签/退票服务",
    icon: RefreshCw,
    description: "专业售后团队，7×24小时响应，协助处理机票改签、退票事宜，简化流程，确保退款及时到账。",
    features: [
      "7×24小时响应：专业团队随时为你服务",
      "简化流程：无需你与航司直接沟通，我们全权代理",
      "航班变动处理：若航班延误、取消，主动联系用户协助办理改签/退票",
      "退款保障：确保退款及时到账，减少你的损失",
    ],
    refundProcess: [
      "告知改签需求（原航班信息、新出行时间）",
      "我们查询改签政策、费用",
      "确认改签，支付改签费用（如需）",
      "完成改签，发送新电子客票",
    ],
    changeProcess: [
      "告知退票需求（航班信息、个人信息）",
      "我们查询退票政策、退款金额",
      "确认退票，提交退票申请",
      "航司审核，退款到账（一般3-7个工作日）",
    ],
  },
  {
    id: "planning",
    title: "行程规划",
    icon: MapPin,
    description: "一对一行程规划服务，根据你的出行时间、预算、目的地，为你推荐最优航线、中转方案。",
    features: [
      "航线推荐：对比全球各大航司，推荐价格最优、行程最便捷的航线",
      "中转规划：协助规划中转路线，选择中转便捷、无需额外签证的中转点",
      "入境政策指导：实时查询目的地入境政策，告知签证、核酸、疫苗要求",
      "行李规划：根据航司政策，指导行李准备，协助申请额外行李额",
    ],
    process: [
      "告知出行时间、预算、目的地、出行需求",
      "我们为你推荐最优航线和出行方案",
      "确认方案后，协助预订机票",
      "出发前提醒注意事项",
      "全程跟进，有任何问题随时解决",
    ],
  },
  {
    id: "visa",
    title: "签证咨询",
    icon: FileText,
    description: "提供全球主要国家/地区签证咨询服务，协助对接签证办理渠道，告知签证办理流程和注意事项。",
    features: [
      "签证政策咨询：实时查询各国签证政策，告知签证有效期、停留时间、办理要求",
      "材料指导：告知签证办理所需材料，指导材料准备",
      "办理渠道对接：协助对接正规签证办理渠道，节省办理时间和精力",
      "注意事项：告知签证面试（如需）注意事项、办理时间",
    ],
    note: "我们提供签证咨询和渠道对接服务，不直接办理签证，具体签证办理以官方要求为准。",
  },
];

export default function ServicesContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">全方位机票相关服务</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            全程中文对接，售后无忧。不管你有任何出行需求，我们都能为你解决。
          </p>
        </div>
      </section>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <section
              key={service.id}
              id={service.id}
              className="mb-16 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
              </div>

              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Process */}
              {service.process && (
                <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                  <h3 className="font-bold text-lg mb-4">预订流程</h3>
                  <div className="space-y-3">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Refund/Change Process */}
              {service.refundProcess && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-4">改签流程</h3>
                    <div className="space-y-3">
                      {service.refundProcess.map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="bg-accent-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                            {i + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-4">退票流程</h3>
                    <div className="space-y-3">
                      {service.changeProcess?.map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                            {i + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Note */}
              {service.note && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800 text-sm">
                  {service.note}
                </div>
              )}

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center"
                >
                  加微信咨询{service.title} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
