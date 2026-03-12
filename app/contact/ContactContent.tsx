"use client";

import { MessageCircle, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">联系我们</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            需要查实时舱位、找特价机票、规划行程？
            加微信/WhatsApp，全程中文对接，秒回咨询！
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WeChat */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">微信咨询</h2>
            <p className="text-gray-600 mb-6">
              扫码添加微信，备注&ldquo;机票咨询&rdquo;，全程中文对接，秒回消息。
            </p>
            <div className="bg-gray-100 rounded-xl p-6 text-center">
              <div className="w-40 h-40 mx-auto bg-white rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-gray-400 text-sm">微信二维码</span>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              微信号：yourwechatid
            </p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">WhatsApp咨询</h2>
            <p className="text-gray-600 mb-6">
              点击下方链接或直接添加号码，备注&ldquo;机票咨询&rdquo;，快速响应。
            </p>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white text-center py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              点击联系 WhatsApp
            </a>
            <p className="text-center text-sm text-gray-500 mt-4">
              WhatsApp：+1 234 567 890
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <Clock className="w-8 h-8 text-primary-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">咨询时间</h3>
            <p className="text-sm text-gray-600">7×24小时（全年无休）</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <Phone className="w-8 h-8 text-primary-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">电话</h3>
            <p className="text-sm text-gray-600">+1 234 567 890</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <Mail className="w-8 h-8 text-primary-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">邮箱</h3>
            <p className="text-sm text-gray-600">service@example.com</p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            我们可以帮你
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "查询实时舱位和价格",
              "预订特价机票",
              "留学生机票专属优惠",
              "团队机票团购",
              "改签/退票办理",
              "行程规划咨询",
              "入境政策查询",
              "签证咨询指导",
              "行李额申请",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center text-gray-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">还在犹豫？</h2>
          <p className="text-white/90 mb-6">
            添加微信/WhatsApp，免费咨询，获取专属特价方案！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
              <span className="text-white/80 text-sm">微信：yourwechatid</span>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
              <span className="text-white/80 text-sm">WhatsApp：+1 234 567 890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
