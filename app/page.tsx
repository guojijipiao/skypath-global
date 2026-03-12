import Link from "next/link";
import { Plane, GraduationCap, Users, RefreshCw, MapPin, ArrowRight, Star } from "lucide-react";
import { hotFlights, services, testimonials, painPoints } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Plane,
  GraduationCap,
  Users,
  RefreshCw,
  MapPin,
};

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
            海外华人专属 · 国际机票代理
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fadeIn animation-delay-100">
            中文服务 | 特价舱位 | 真实出票 | 全程售后 | 7×24小时响应 | 航班信息实时更新
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn animation-delay-200">
            <Link
              href="/contact"
              className="bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-600 transition-all hover:scale-105"
            >
              立即咨询
            </Link>
            <Link
              href="/flights"
              className="bg-white/10 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
            >
              查看特价机票
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            核心服务
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            专注海外华人出行，提供全方位机票服务
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-7 h-7 text-primary-600" />}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hot Flights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              近期热门特价航线
            </h2>
            <p className="text-gray-600">
              实时更新，每日同步，具体价格加微信咨询
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotFlights.map((flight, index) => (
              <div
                key={flight.id}
                className="bg-gradient-to-br from-primary-50 to-white border border-primary-100 rounded-xl p-6 hover:shadow-lg transition-all animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    热门
                  </div>
                  <span className="text-xs text-gray-500">更新于{flight.updatedAt}</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{flight.route}</h3>
                <p className="text-sm text-gray-600 mb-2">出行时段：{flight.period}</p>
                <p className="text-sm text-primary-600 mb-4">{flight.advantages}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-accent-500 font-semibold hover:text-accent-600"
                >
                  加微信查实时价格 <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/flights"
              className="btn-outline inline-flex items-center"
            >
              查看更多特价航线 <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points Solutions */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            解决海外华人出行所有烦恼，我们比你更懂你
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-colors animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-bold text-lg text-accent-400 mb-3">{point.title}</h3>
                <p className="text-gray-300 text-sm">{point.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            海外华人的选择，好评如潮
          </h2>
          <p className="text-center text-gray-600 mb-12">
            真实客户评价，感谢每一位客户的信任
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-accent-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold">{testimonial.name[0]}</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            立即咨询，获取专属特价机票
          </h2>
          <p className="text-white/90 text-lg mb-8">
            不管你是想查实时舱位、找特价机票，还是有行程规划、改签退票等问题，
            加微信/WhatsApp，全程中文对接，秒回咨询，7×24小时在线！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105"
            >
              立即添加微信 →
            </Link>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all"
            >
              WhatsApp咨询 →
            </a>
          </div>
          <p className="text-white/70 text-sm mt-6">
            咨询时间：7×24小时（全年无休，节假日正常响应）
          </p>
        </div>
      </section>
    </div>
  );
}
