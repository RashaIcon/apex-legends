"use client";

import Image from "next/image";
import Bg from "../public/images/Background.png";
import Hero from "../public/images/hero.png";
import Container1 from "./components/Container1";
import Link from "next/link";
import { FaLinkedin, FaYoutube } from "react-icons/fa6";
import {
  ChevronRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  LinkedinIcon,
  LucideLinkedin,
  Mail,
  Target,
} from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <section className=" overflow-hidden bg-homeBanner bg-cover h-screen w-full bg-center z-10 relative max-h-[1080px]">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover -z-50"
          src={Bg}
          alt="bg"
          layout="fill"
        />
        <Container1 className="flex md:gap-x-80 justify-center h-full flex-col md:flex-row">
          <div className="left md:flex-1 mt-24 md:mt-[200px] gap-x-3 flex md:gap-x-4 md:w-[861px] text-white font-bold">
            <div className="flex hero flex-col items-center">
              <div className="md:w-7 md:h-7 w-4 h-4 rounded-full bg-[#ff2222]"></div>
              <div className="w-1 md:h-96 h-60 bg_grad violet-gradient bg-[#ff2222]"></div>
            </div>
            <div className="2 hero">
              <h1 className="font-raj md:text-[60px] sm:text-[40px] text-4xl font-semibold text-accentv text-[#ffffff]">
                I'M
              </h1>
              <h1 className="font-pira text-[110px] tracking-wider md:tracking-normal md:text-[200px] leading-none text-[#ffffff]">
                RASHA
              </h1>

              <p className="md:w-[400px] w-[270px] md:text-2xl md:font-bold font-medium mt-3 leading-[20px] text-[#ffffff]">
                Front-end dev who loves making websites look cool and work
                smoothly!
              </p>
            </div>
          </div>
          <div className="div md:flex-1 flex justify-end md:items-end mt-auto">
            <div className="hero her right md:w-[750px] w-[350px] text-white font-bold">
              <Image src={Hero} alt="hero" width={0} height={0} />
            </div>
          </div>
        </Container1>
      </section>
      <section className=" border-y-2 border-white bg-[#A31621]  py-10">
        <nav className="w-full flex justify-center  ">
          <ul className="rounded-[40px] border-2 transition-all duration-300 hover:bg-[#FCF7F8] border-[#FCF7F8] flex flex-row gap-x-1 px-1 py-[2px]  ">
            <li className="rounded-[50%] transition-all hover:-translate-y-2 border border-transparent hover:border-[#FCF7F8] duration-300 hover:scale-125 hover:bg-[#A31621] group hover:text-[#FCF7F8] bg-[#FCF7F8]  p-2">
              <Link
                href={"https://www.instagram.com/sardar_rasha/"}
                target={`_blank`}
              >
                <Instagram className="size-7 text-[#A31621] transition-all duration-300 group-hover:text-[#FCF7F8] " />
              </Link>
            </li>

            <li className="rounded-[50%] transition-all hover:-translate-y-2 border border-transparent hover:border hover:border-[#FCF7F8] duration-300 hover:scale-125 hover:bg-[#A31621] group hover:text-[#FCF7F8] bg-[#FCF7F8]  p-2">
              <Link target={`_blank`} href={"https://github.com/RashaIcon"}>
                <Github className="size-7 text-[#A31621] transition-all duration-300 group-hover:text-[#FCF7F8] " />
              </Link>
            </li>
            <li className="rounded-[50%] transition-all hover:-translate-y-2 border border-transparent hover:border hover:border-[#FCF7F8] duration-300 hover:scale-125 hover:bg-[#A31621] group hover:text-[#FCF7F8] bg-[#FCF7F8]  p-2">
              <Link
                target={`_blank`}
                href={"https://www.facebook.com/nakibul.alam.sardar"}
              >
                <Facebook className="size-7 text-[#A31621] transition-all duration-300 group-hover:text-[#FCF7F8] " />
              </Link>
            </li>
            <li className="rounded-[50%] transition-all hover:-translate-y-2 border border-transparent hover:border hover:border-[#FCF7F8] duration-300 hover:scale-125 hover:bg-[#A31621] group hover:text-[#FCF7F8] bg-[#FCF7F8]  p-2">
              <Link
                target={`_blank`}
                href={
                  "www.linkedin.com/in/sm-nakibul-alam-rasha-mern-stack-developer-a3262b352"
                }
              >
                <FaLinkedin className="size-7 text-[#A31621] transition-all duration-300 group-hover:text-[#FCF7F8] " />
              </Link>
            </li>
            <li className="rounded-[50%] transition-all hover:-translate-y-2 border border-transparent hover:border hover:border-[#FCF7F8] duration-300 hover:scale-125 hover:bg-[#A31621] group hover:text-[#FCF7F8] bg-[#FCF7F8]  p-2">
              <Link
                target={`_blank`}
                href={"https://www.youtube.com/@Radiant_Bluds911"}
              >
                <FaYoutube className="size-7 text-[#A31621] transition-all duration-300 group-hover:text-[#FCF7F8] " />
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="w-full flex justify-center mt-9 ">
          <div
            onClick={() => {
              navigator.clipboard.writeText("teacontainscaffeine@gmail.com");
              toast.success("Email copied to clipboard!");
            }}
            className="cursor-pointer flex flex-row group hover:bg-[#FCF7F8] transition-all duration-300 items-center gap-x-2 border-2 border-[#FCF7F8] rounded-[40px] pr-3 "
          >
            <div className="rounded-full transition-all  duration-300  hover:bg-[#A31621] group  bg-[#FCF7F8]  p-2">
              <Link
                href={"https://www.instagram.com/sardar_rasha/"}
                target={`_blank`}
              >
                <Mail className="size-7 text-[#A31621] transition-all duration-300 hover:text-[#FCF7F8] " />
              </Link>
            </div>
            <div className="font-ox group-hover:text-[#A31621] font-semibold text-[#FCF7F8]  transition-all duration-300">
              teacontainscaffeine@gmail.com
            </div>
          </div>
        </nav>
        <Container1>
          <div className="div mt-10 md:mt-28">
            <div className="left asd flex   flex-col gap-y-10 md:gap-y-28">
              <p className=" max-w-3xl   text-[#FCF7F8] text-xl font-light text-primarytext sm:text-2xl md:text-3xl lg:text-4xl">
                My blend of design, coding, and interaction expertise
                distinguishes me within the tech industry.
              </p>
              <div className="gap-y-10 py-10 border-y-2 border-y-[#EAECC6]  ">
                <div className="flex gap-x-4 items-center md:flex-row flex-col">
                  <p className="md:text-left text-center flex-1 max-w-3xl   text-[#EAECC6] text-xl  text-primarytext sm:text-2xl md:text-3xl lg:text-4xl font-ox font-semibold ">
                    Coding the Future <br />
                    Architecting Innovation
                  </p>
                  <Link
                    href={"/aboutme"}
                    className="md:pl-10 md:pr-5 pl-5 py-1 text-[20px] mt-5 md:mt-0 pr-2 flex items-center md:gap-x-3 transition-all md:hover:translate-x-2 hover:-translate-y-1 md:hover:translate-y-0 duration-300 hover:bg-[#FCF7F8] text-[#A31621] md:text-3xl font-pira md:ml-80 rounded-full md:py-3  bg-[#EAECC6] text-right"
                  >
                    About Me <ChevronRight className="size-7" />
                  </Link>
                </div>
                <p className="text-[#FCF7F8] max-w-4xl text-xl font-light text-primarytext sm:text-2xl md:text-3xl lg:text-4xl mt-5 md:mt-10">
                  I specialize in engineering bespoke solutions, consistently
                  pushing the limits in each project, with an unwavering
                  dedication to prioritizing excellence.
                </p>
              </div>
            </div>
          </div>
        </Container1>
      </section>
    </>
  );
}

// color pallete #FCF7F8 #A31621 #EAECC6
