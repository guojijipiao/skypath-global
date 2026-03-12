"use client";

import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

export default function ContactBar() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {/* Desktop Contact Bar - Right Side */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col">
        <a
          href="https://wa.me/yourwhatsappnumber"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-l-lg hover:bg-green-600 transition-colors shadow-lg flex items-center justify-center"
          title="WhatsApp咨询"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="wechat://"
          className="bg-primary-500 text-white p-4 rounded-l-lg hover:bg-primary-600 transition-colors shadow-lg mt-2 flex items-center justify-center"
          title="微信咨询"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:+1234567890"
          className="bg-accent-500 text-white p-4 rounded-l-lg hover:bg-accent-600 transition-colors shadow-lg mt-2 flex items-center justify-center"
          title="电话咨询"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Mobile Contact Bar - Bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 px-4 py-3">
        <div className="flex items-center justify-around">
          <a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-green-600"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs mt-1">WhatsApp</span>
          </a>
          <a
            href="wechat://"
            className="flex flex-col items-center text-primary-600"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs mt-1">微信</span>
          </a>
          <a
            href="/contact"
            className="flex flex-col items-center text-accent-500"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs mt-1">联系我们</span>
          </a>
        </div>
      </div>

      {/* Spacer for mobile to avoid content being hidden behind contact bar */}
      <div className="lg:hidden h-20"></div>
    </>
  );
}
