"use client"
import React from "react";
import Link from "next/link";
import { IconHome } from "@tabler/icons-react";
import { IoPersonOutline } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-6 w-6" />,
      href: "/",
    },
    {
      title: "About Me", 
      icon: <IoPersonOutline className="h-6 w-6" />,
      href: "/about",
    },
    {
      title: "Skills",
      icon: <FaRocket className="h-6 w-6" />,
      href: "/skill",
    },
    {
      title: "Portfolio",
      icon: <FaBriefcase className="h-6 w-6" />,
      href: "/portfolio",
    },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[999]">
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-lg rounded-full p-2 shadow-lg">
        <ul className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="relative">
                <Link href={link.href}>
                  <div
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-500 text-white"
                        : "hover:bg-emerald-100 dark:hover:bg-emerald-900"
                    }`}
                  >
                    <div className="text-neutral-700 dark:text-neutral-200">
                      {link.icon}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;