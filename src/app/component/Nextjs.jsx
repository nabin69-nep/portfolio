"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const project=[
 
  {
    title:"Herne Movie Website",
    description:"The website made on nextjs by using tmdb Api.",
    github:"https://github.com/nabin69-nep/Movie-Webiste",
    live:"https://herne.vercel.app/",
    img:"/Images/herne.png",
  },
  {
    title:"Glocery App",
    description:"The Glocery app was designed in Figma.",
    github:"",
    live:"https://www.figma.com/proto/MJgcSBDLc92ENqfVkdZK0q/project-1?node-id=2037-5&node-type=canvas&t=jP3HHiKXakZVnM7F-0&scaling=min-zoom&content-scaling=fixed&page-id=2022%3A2&starting-point-node-id=2037%3A5&show-proto-sidebar=1",
    img:"/Images/food.png",
  },
  {
    title:"Todo-App",
    description:"Made with Next.js, MongoDB, Tailwind, and SWR updates.",
    github:"https://github.com/nabin69-nep/todo-app",
    live:"",
    img:"/Images/todo-App.png",
  },
  {
    title:"Paisasatne",
    description:"A currency converter app with real-time exchange rates.",
    github:"https://github.com/nabin69-nep/hamroPaisa",
    live:"https://paisasatne.vercel.app/",
    img:"/Images/currency-converter App.png",
  },
  {
    title:"Weather App",
    description:"Built using Next.js with the integration of a weather API.",
    github:"https://github.com/nabin69-nep/Weather-App",
    live:"https://nayamausam.netlify.app/",
    img:"/Images/weather-app.png",
  },
  {
    title:"NepaliBazaar Ecommerce ",
    description:"Developed on Next.js with typescript with the FakeStore API.",
    github:"https://github.com/nabin69-nep/ecommerce",
    live:"https://nepalibazaar.netlify.app/",
    img:"/Images/e-commerce.png",
  },
  {
    title:"Personal Portfolio",
    description:"This is my first portfolio design created in Figma",
    github:"",
    live:"https://www.figma.com/proto/MJgcSBDLc92ENqfVkdZK0q/project-1?node-id=2013-82&node-type=canvas&t=jP3HHiKXakZVnM7F-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    img:"/Images/portfolio.png",
  },

  {
    title:"NabinTravel",
    description:"Created utilizing HTML, CSS, and JavaScript.",
    github:"https://github.com/nabin69-nep/NabinTravel_website",
    live:"https://nabintravel.netlify.app/",
    img:"/Images/tarvel.png",
  },
]
 function ThreeDCardDemo() {
  return (
        <div className="flex overflow-x-auto">
          {
            project.map((item,index)=>{
            return  <CardContainer key={index} className="inter-var">
              <CardBody
                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-screen sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white">
                 {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
               {item.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={item.title} />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  {
                    item.live && (
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={item.live}
                          target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                        Live now →
                    </CardItem>)
                  }
                  {
                    item.github && (
                      <CardItem
                      translateZ={20}
                      as={Link}
                      href={item.github}
                        target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                        <FaGithub  />
                    </CardItem>)
                  }
                </div>
              </CardBody>
            </CardContainer>
            })
          }

        </div>

   
  );
}
export default ThreeDCardDemo