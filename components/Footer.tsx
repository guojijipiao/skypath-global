import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">华人机票网</h3>
            <p className="text-gray-400 text-sm mb-4">
              专注服务海外华人，提供国际机票预订、特价机票、留学生机票等一站式服务。
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>7×24小时在线</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">核心服务</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/flights" className="text-gray-400 hover:text-white transition-colors text-sm">
                  特价机票
                </Link>
              </li>
              <li>
                <Link href="/services#student" className="text-gray-400 hover:text-white transition-colors text-sm">
                  留学生机票
                </Link>
              </li>
              <li>
                <Link href="/services#group" className="text-gray-400 hover:text-white transition-colors text-sm">
                  团队机票
                </Link>
              </li>
              <li>
                <Link href="/services#refund" className="text-gray-400 hover:text-white transition-colors text-sm">
                  改签/退票
                </Link>
              </li>
              <li>
                <Link href="/services#planning" className="text-gray-400 hover:text-white transition-colors text-sm">
                  行程规划
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/destinations#usa" className="text-gray-400 hover:text-white transition-colors text-sm">
                  美国机票
                </Link>
              </li>
              <li>
                <Link href="/destinations#canada" className="text-gray-400 hover:text-white transition-colors text-sm">
                  加拿大机票
                </Link>
              </li>
              <li>
                <Link href="/destinations#europe" className="text-gray-400 hover:text-white transition-colors text-sm">
                  英国/欧洲机票
                </Link>
              </li>
              <li>
                <Link href="/destinations#australia" className="text-gray-400 hover:text-white transition-colors text-sm">
                  澳洲机票
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-white transition-colors text-sm">
                  出行攻略
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-accent-500" />
                <span className="text-sm">微信：添加微信咨询</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent-500" />
                <span className="text-sm">WhatsApp：点击联系</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent-500" />
                <span className="text-sm">Email: service@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <span>多年国际机票代理经验</span>
            <span className="hidden sm:inline">·</span>
            <span>全程中文服务</span>
            <span className="hidden sm:inline">·</span>
            <span>真实舱位</span>
            <span className="hidden sm:inline">·</span>
            <span>7×24小时响应</span>
            <span className="hidden sm:inline">·</span>
            <span>航班信息实时更新</span>
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">
            © 2026 华人机票网 版权所有
          </p>
        </div>
      </div>
    </footer>
  );
}
