"use client";
import Link from "next/link";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/lianebi",
      icon: <SiInstagram size={20} />,
      color: "hover:text-[#E4405F]",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/lianebi",
      icon: <SiFacebook size={20} />,
      color: "hover:text-[#1877F2]",
    },
    {
      name: "Email",
      href: "mailto:hello@lianebi.com",
      icon: <HiOutlineMail size={22} />,
      color: "hover:text-brand-primary",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="text-3xl font-black text-brand-primary tracking-tighter"
            >
              lianebi<span className="text-brand-accent">.</span>
            </Link>
            <p className="mt-6 text-gray-500 max-w-sm leading-relaxed text-lg font-medium">
              The first gamified AI parenting guide based on clinical pediatric
              communication standards. Turn stress into growth.
            </p>
          </div>

          <div>
            <h4 className="font-black text-brand-dark mb-6 uppercase text-xs tracking-[0.2em]">
              Product
            </h4>
            <ul className="space-y-4 font-bold text-gray-600">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-brand-primary transition-colors"
                >
                  Insights Blog
                </Link>
              </li>
              <li>
                <button className="hover:text-brand-primary cursor-pointer transition-colors">
                  How it Works
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-brand-dark mb-6 uppercase text-xs tracking-[0.2em]">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-50 rounded-2xl text-gray-400 ${social.color} 
                    hover:bg-white hover:shadow-bouncy hover:-translate-y-1.5 
                    active:translate-y-0 active:shadow-none transition-all duration-300 flex items-center justify-center`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm font-medium">
            © {new Date().getFullYear()} Lianebi. All rights reserved. Built for
            parents, by experts.
          </p>
        </div>
      </div>
    </footer>
  );
}
