"use client"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image"
import React,{useState} from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlineFileDownload } from "react-icons/md";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

 function Home() {
    const[copy,setCopy]=useState(false)
    function handleClick(){
        navigator.clipboard.writeText("khadkanabin090@gmail.com")
        setCopy(true);
        setTimeout(()=>{
            setCopy(false)
        },2000)
    }
    const words = [
        {
          text: "Nabin ",
          
        },
        {
          text: "Khadka.",
          className: "text-red-500 dark:text-blue-500 ml-1",
        },
      ];
  return (
    <div className='mx-auto container flex sm:flex-row flex-col h-screen sm:justify-center gap-10 items-center '>
        <div className="sm:order-1  order-5 sm:block flex flex-col justify-center items-center"> 
            <h1><span className=" sm:text-2xl text-xl md:text-4xl  font-bold">Hi, It&apos;s me</span> <TypewriterEffectSmooth  words={words} /> </h1>
            <h2 className="flex items-center gap-3"><span className="text-xl font-bold dark:text-white text-[#003049]">Front-End Developer</span> <Image src="/Images/rocket.gif" alt=""  width={40} height={30}/></h2>
            <div className="flex ml-16 sm:ml-0 gap-5 mt-5  ">
            <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
        <Link href="/resume/NabinKhadkaProfile.pdf">Resume</Link><MdOutlineFileDownload className="text-xl" />
      </HoverBorderGradient>
            <HoverBorderGradient onClick={()=>handleClick()}
        containerClassName="rounded-full "
        as="button"
        className="dark:bg-black bg-white   text-black dark:text-white flex items-center space-x-2">
        <span>Email </span><SiMinutemailer className="text-xl" />
      </HoverBorderGradient>
             <p className={`mt-2 rounded-lg ${copy?"visible ":"invisible"} `}>Copied</p>
            </div>
            <div className="flex gap-4 mt-7">
           <Link href="https://github.com/nabin69-nep"  target="_blank" className="sm:text-3xl text-2xl hover:dark:text-green-400 hover:text-neutral-500"> < FaGithub/></Link>
           <Link href="https://www.linkedin.com/in/nabin69/"  target="_blank" className="sm:text-3xl text-2xl hover:dark:text-green-400 hover:text-neutral-500"> < FaLinkedin/></Link>
           <Link href="https://x.com/khadkanabin820" target="_blank"  className="sm:text-3xl text-2xl hover:dark:text-green-400 hover:text-neutral-500"> < FaXTwitter/></Link>
           <Link href="https://www.instagram.com/errorbe_69/" target="_blank"  className="sm:text-3xl text-2xl hover:dark:text-green-400 hover:text-neutral-500"> < FaInstagram/></Link>
            </div>
        </div>
        <div className="p-2  border-2 sm:order-5 sm:mt-0 mt-8 order-1 border-black dark:border-white rounded-3xl">
            <Image src="/Images/IMG_4372.jpg" className="sm:hidden rounded-xl" alt="Nabin khadka" width={200} height={200}/>
            <Image src="/Images/IMG_4372.jpg" className=" sm:block hidden  rounded-xl" alt="Nabin khadka" width={300} height={200}/>
        </div>
      
    </div>

  )
}
export default Home
