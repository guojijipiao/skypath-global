"use client";

import Link from "next/link";
import { MapPin, Plane, FileText, ArrowRight } from "lucide-react";
import { destinations } from "@/lib/data";

export default function DestinationsContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">全球热门目的地</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            机票+攻略一站式服务。覆盖全球主要目的地，提供机票预订、入境政策、出行攻略、行程规划服务，让你的出行更省心。
          </p>
        </div>
      </section>

      {/* Destinations */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {destinations.map((destination, index) => (
          <section
            key={destination.id}
            id={destination.id}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-100 p-2 rounded-lg">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{destination.name}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Description */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3">目的地介绍</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>热门城市：{destination.cities}</span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center mt-4 text-accent-500 font-semibold hover:text-accent-600"
                >
                  加微信查{destination.name}航线特价 <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Entry Policy */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-primary-600" />
                  <h3 className="font-bold text-lg">入境政策（2026年最新）</h3>
                </div>
                <ul className="space-y-3">
                  {destination.entryPolicy.map((policy, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{policy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Flight Tips */}
            <div className="mt-6 bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-primary-600" />
                出行攻略
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {destination.flightTips.map((tip, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700"
                  >
                    {i + 1}. {tip}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Other Destinations */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">其他国家/地区</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              除上述热门目的地外，我们还提供全球其他国家/地区的机票预订、行程规划、售后等服务（如日本、韩国、非洲、南美等）。
              无论你想去哪里，加微信咨询，我们会为你提供专属出行方案。
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center"
            >
              加微信咨询其他目的地机票 <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
