"use client";

import Link from "next/link";
import { Award, Users, Clock, Shield, ArrowRight } from "lucide-react";

export default function AboutContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">关于我们</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            专注服务海外华人，提供专业、靠谱的国际机票服务
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            我们的故事
          </h2>
          <p className="text-gray-600 mb-6">
            华人机票网成立于多年前，专注于服务海外华人群体。我们理解海外华人出行机票的痛点：
            语言不通、机票比价麻烦、转机政策不熟悉、改签退票繁琐、航班信息不实时等。
            因此我们致力于为海外华人提供全程中文服务的国际机票代理，让你的出行更加省心。
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
            我们的优势
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Award className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">多年行业经验</h3>
              <p className="text-gray-600 text-sm">
                多年国际机票代理经验，专注海外华人服务，熟悉各大航司政策和优惠
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Users className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">全程中文服务</h3>
              <p className="text-gray-600 text-sm">
                从咨询到预订再到售后，全程中文对接，无需你说一句英文
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Shield className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">真实舱位保障</h3>
              <p className="text-gray-600 text-sm">
                对接全球各大航司，一手舱位资源，真实出票，无虚假宣传
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Clock className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">7×24小时响应</h3>
              <p className="text-gray-600 text-sm">
                全年无休，节假日正常响应，随时为你解决出行问题
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
            我们的服务
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-primary-600 mt-1">✓</span>
              <span>特价机票：全球航线特价来袭，实时更新，舱位有限</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 mt-1">✓</span>
              <span>留学生机票：额外行李额、灵活改签、专属优惠</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 mt-1">✓</span>
              <span>团队机票：3人成团，专属折扣，专人对接</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 mt-1">✓</span>
              <span>改签退票：专业售后团队，简化流程，快速退款</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 mt-1">✓</span>
              <span>行程规划：一对一规划，最优航线，中转方案</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 mt-1">✓</span>
              <span>签证咨询：全球签证政策，办理指导，渠道对接</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
            联系我们
          </h2>
          <p className="text-gray-600 mb-6">
            需要预订机票或有其他问题？
            欢迎添加我们的微信或WhatsApp，随时为你提供咨询服务。
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center"
            >
              立即咨询 <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
