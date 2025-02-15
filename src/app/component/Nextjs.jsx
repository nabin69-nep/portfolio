"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const project = [
  {
    title: "Global Notes",
    description: "Website for Class 11 and 12 Notes in Nepal.",
    github: "",
    live: "https://globalnotees.com/",
    img: "/Images/globalnotes.png",
  },
  {
    title: "Herne Movie Website",
    description: "The website made on nextjs by using tmdb Api.",
    github: "https://github.com/nabin69-nep/Movie-Webiste",
    live: "https://herne.vercel.app/",
    img: "/Images/herne.png",
  },
  {
    title: "Glocery App",
    description: "The Glocery app was designed in Figma.",
    github: "",
    live: "https://www.figma.com/proto/MJgcSBDLc92ENqfVkdZK0q/project-1?node-id=2037-5&node-type=canvas&t=jP3HHiKXakZVnM7F-0&scaling=min-zoom&content-scaling=fixed&page-id=2022%3A2&starting-point-node-id=2037%3A5&show-proto-sidebar=1",
    img: "/Images/food.png",
  },
  {
    title: "Todo-App",
    description: "Made with Next.js, MongoDB, Tailwind, and SWR updates.",
    github: "https://github.com/nabin69-nep/todo-app",
    live: "",
    img: "/Images/todo-App.png",
  },
  {
    title: "Paisasatne",
    description: "A currency converter app with real-time exchange rates.",
    github: "https://github.com/nabin69-nep/hamroPaisa",
    live: "https://paisasatne.vercel.app/",
    img: "/Images/currency-converter App.png",
  },
  {
    title: "Weather App",
    description: "Built using Next.js with the integration of a weather API.",
    github: "https://github.com/nabin69-nep/Weather-App",
    live: "https://nayamausam.netlify.app/",
    img: "/Images/weather-app.png",
  },
  {
    title: "NepaliBazaar Ecommerce",
    description: "Developed on Next.js with typescript with the FakeStore API.",
    github: "https://github.com/nabin69-nep/ecommerce",
    live: "https://nepalibazaar.netlify.app/",
    img: "/Images/e-commerce.png",
  },
  {
    title: "Personal Portfolio",
    description: "This is my first portfolio design created in Figma",
    github: "",
    live: "https://www.figma.com/proto/MJgcSBDLc92ENqfVkdZK0q/project-1?node-id=2013-82&node-type=canvas&t=jP3HHiKXakZVnM7F-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    img: "/Images/portfolio.png",
  },
  {
    title: "NabinTravel",
    description: "Created utilizing HTML, CSS, and JavaScript.",
    github: "https://github.com/nabin69-nep/NabinTravel_website",
    live: "https://nabintravel.netlify.app/",
    img: "/Images/tarvel.png",
  },
];

function ThreeDCardDemo() {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 min-h-screen mt-14 sm:mt-16">
      <div className="h-[calc(100vh-140px)] sm:h-[calc(100vh-160px)] lg:h-[calc(100vh-180px)] overflow-y-auto custom-scrollbar">
        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
            border-radius: 4px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #10b981;
            border-radius: 4px;
            transition: all 0.3s ease;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #059669;
          }

          .dark .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
          }
        `}</style>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-24 sm:pb-32 md:pb-36 lg:pb-40">
          {project.map((item, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-full rounded-xl p-3 sm:p-4 md:p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-base sm:text-lg md:text-xl font-bold text-neutral-600 dark:text-white hover:text-emerald-500 transition-colors line-clamp-1 mb-1"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-xs md:text-sm dark:text-neutral-300 line-clamp-2 mb-2"
                >
                  {item.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mb-2">
                  <Image
                    src={item.img}
                    height="1000"
                    width="1000"
                    className="h-28 sm:h-32 md:h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300"
                    alt={item.title}
                  />
                </CardItem>
                <div className="flex justify-between items-center">
                  {item.live && (
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={item.live}
                      target="_blank"
                      className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
                    >
                      Live Demo →
                    </CardItem>
                  )}
                  {item.github && (
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={item.github}
                      target="_blank"
                      className="p-1.5 sm:p-2 md:p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                    >
                      <FaGithub className="text-sm sm:text-base md:text-lg" />
                    </CardItem>
                  )}
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThreeDCardDemo;
