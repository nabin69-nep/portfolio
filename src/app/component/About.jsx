"use client";
import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
  {
    title: "Nabin Khadka",
    description: `I\u2019m Mr. Nabin Khadka, an 19-year-old boy who loves to travel. Fun fact: 6 + 9 != 69 .`,
    
    
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Images/me.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
    {
      title: "Global School of Science (2022-2024)",
      description:
        "I completed my high school education at Global School of Science, Kathmandu, with a strong academic performance, achieving a GPA of 3.64. This accomplishment reflects my dedication to my studies and my commitment to maintaining high standards in my academic journey.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/Images/global.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Emile Academy International ",
      description:
        "I completed my school-level education at Emile Academy International  achieving a GPA of 3.8, where I built a strong academic foundation and developed a passion for learning that has guided me throughout my educational journey.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/Images/emile.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
const words = `Welcome to my website! 
I\u2019m Mr. Nabin Khadka, originally from Kailali and raised in Kathmandu. 
`;
function TextHoverEffectDemo() {
  return (
    <>
      <div className=" flex items-center justify-center cursor-pointer sm:mt-5 mt-10">
        <TextHoverEffect text="About Me" />
      </div>
      <TextGenerateEffect words={words} />
      <div>
      <StickyScroll content={content} />
    </div>

    </>
  );
}
export default TextHoverEffectDemo;
