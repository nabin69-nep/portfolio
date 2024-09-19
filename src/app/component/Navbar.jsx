"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
} from "@tabler/icons-react";
import { IoPersonOutline } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";

 function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About Me",
      icon: (
        <IoPersonOutline  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
        title: "Skills ",
        icon: (
          <FaRocket className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/skill",
      },
    {
      title: "Portfolio",
      icon: (
        <FaBriefcase  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/portfolio",
    },
  ];
  return (
    (<div className="flex items-center justify-center  z-[999] right-0  fixed bottom-0 w-full">
      <FloatingDock
        items={links} />
    </div>)
  );
}
export default FloatingDockDemo