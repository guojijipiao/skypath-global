"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Plane } from "lucide-react";

const navItems = [
  { name: "首页", href: "/" },
  {
    name: "特价机票",
    href: "/flights",
    children: [
      { name: "中美航线特价", href: "/flights#usa" },
      { name: "中加航线特价", href: "/flights#canada" },
      { name: "中英/中欧航线特价", href: "/flights#europe" },
      { name: "中澳/新航线特价", href: "/flights#australia" },
      { name: "东南亚航线特价", href: "/flights#southeast-asia" },
      { name: "全球联程特价", href: "/flights#connecting" },
    ],
  },
  {
    name: "热门目的地",
    href: "/destinations",
    children: [
      { name: "美国", href: "/destinations#usa" },
      { name: "加拿大", href: "/destinations#canada" },
      { name: "英国/欧洲", href: "/destinations#europe" },
      { name: "澳洲/新西兰", href: "/destinations#australia" },
      { name: "东南亚", href: "/destinations#southeast-asia" },
      { name: "其他国家", href: "/destinations#other" },
    ],
  },
  {
    name: "机票服务",
    href: "/services",
    children: [
      { name: "留学生机票", href: "/services#student" },
      { name: "团队机票", href: "/services#group" },
      { name: "改签/退票服务", href: "/services#refund" },
      { name: "行程规划", href: "/services#planning" },
      { name: "签证咨询", href: "/services#visa" },
    ],
  },
  {
    name: "出行攻略",
    href: "/guides",
    children: [
      { name: "转机攻略", href: "/guides#transfer" },
      { name: "行李攻略", href: "/guides#baggage" },
      { name: "入境政策", href: "/guides#entry" },
      { name: "预订技巧", href: "/guides#tips" },
    ],
  },
  { name: "关于我们", href: "/about" },
  { name: "联系我们", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className={`font-bold text-xl ${scrolled ? "text-primary-700" : "text-white"}`}>
              华人机票网
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors ${
                        scrolled
                          ? "text-gray-700 hover:bg-gray-100"
                          : "text-white/90 hover:bg-white/10"
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-48 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                        scrolled ? "bg-white" : "bg-white"
                      }`}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      scrolled
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-white/90 hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-accent-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
            >
              立即咨询
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={scrolled ? "w-6 h-6 text-gray-700" : "w-6 h-6 text-white"} />
            ) : (
              <Menu className={scrolled ? "w-6 h-6 text-gray-700" : "w-6 h-6 text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-xl shadow-lg p-4">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100 last:border-0">
                {item.children ? (
                  <>
                    <div className="py-3 font-medium text-gray-700">{item.name}</div>
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-2 text-sm text-gray-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 font-medium text-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mt-4 bg-accent-500 text-white text-center px-5 py-3 rounded-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              立即咨询
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
