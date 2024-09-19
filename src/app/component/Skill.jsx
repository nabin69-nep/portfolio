"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Html",
    designation: "Hypertext Markup Language", 
    image:
      "/Images/Html.png",
  },
  {
    id: 2,
    name: "Css",
    designation: "Cascading Style Sheets",
    image:
      "/Images/Css.png",
  },
  {
    id: 3,
    name: "JavaScript",
    designation: "JavaScript to program the behavior of web pages",
    image:
      "/Images/Js.png",
  },
  {
    id: 4,
    name: "React",
    designation: "React is the library for web and native user interfaces",
    image:
      "/Images/React.png",
  },
  {
    id: 5,
    name: "Next Js",
    designation: "Next.js is an open-source web development framework made over React",
    image:
      "/Images/nextjs.jpg",
  },
  {
    id: 6,
    name: "Tailwind",
    designation: "Tailwind CSS is an open-source CSS framework",
    image:
      "/Images/tailwind.png",
  },
  {
    id: 7,
    name: "Firebase",
    designation: "Firebase provides detailed documentation and cross-platform app development",
    image:
      "/Images/Firebase.png",
  },
  {
    id: 8,
    name: "Git",
    designation: "Git is a distributed version control system that tracks versions of files.",
    image:
      "/Images/Git.png",
  },
  {
    id: 9,
    name: "C",
    designation: "C is a general-purpose programming language",
    image:
      "/Images/C.png",
  },
  {
    id: 10,
    name: "Figma",
    designation: "Figma is a collaborative web application for interface design.",
    image:
      "/Images/Figma.png",
  },
  {
    id: 11,
    name: "SCSS",
    designation: "Sassy Cascading Style Sheets",
    image:
      "/Images/scss.webp",
  },
];

 function SparklesPreview() {
  return (
    <>
    <div
      className=" w-full pt-5 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1
        className="md:text-8xl text-6xl lg:text-9xl font-bold text-center text-white relative z-20">
        Skill
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF" />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
    <div className="flex flex-row items-center flex-wrap mt-20 justify-center mb-10 w-full">
  <AnimatedTooltip items={people} />
</div>

    </>
  );
}
export default SparklesPreview

