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
      <section className="overflow-hidden bg-homeBanner bg-cover h-full w-full bg-center z-10 relative max-h-[1080px]">
        <Image
          className="absolute top-0 left-0 w-full  h-full object-cover -z-50"
          src={Bg}
          alt="bg"
          layout="fill"
        />
        <Container1 className="flex md:gap-x-80 justify-center items-center h-full flex-col sm:flex-row">
          <div className="left md:flex-1  mt-24  gap-x-3 flex md:gap-x-4 md:w-[861px] text-white font-bold items-center">
            <div className="flex hero flex-col items-center">
              <div className="md:w-7 md:h-7 w-4 h-4 rounded-full bg-[#ff2222]"></div>
              <div className="w-1 md:h-96 h-60 bg_grad violet-gradient bg-[#ff2222]"></div>
            </div>
            <div className="2 hero  md:text-left">
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
          <div className="div md:flex-1 mt-auto  flex justify-end md:items-end md:mt-24">
            <div className="hero her right md:w-[750px] sm:w-[280px] w-[350px] text-white font-bold">
              <Image src={Hero} alt="hero" width={0} height={0} />
            </div>
          </div>
        </Container1>
      </section>
      <section className="border-y-2 border-white bg-[#A31621] py-10">
        <nav className="w-full flex justify-center">
          <ul className="rounded-[40px] border-2 transition-all duration-300 hover:bg-[#FCF7F8] border-[#FCF7F8] flex flex-row gap-x-1 px-1 py-[2px]">
            <li className="rounded-[50%] transition-all hover:-translate-y-2 border border-transparent hover:border-[#FCF7F8] duration-300 hover:scale-125 hover:bg-[#A31621] group hover:text-[#FCF7F8] bg-[#FCF7F8] p-2">
              <Link
                href={"https://www.instagram.com/sardar_rasha/"}
                target="_blank"
              >
                <Instagram className="size-7 text-[#A31621] transition-all duration-300 group-hover:text-[#FCF7F8]" />
              </Link>
            </li>
            <li className="rounded-[50%] transition-all hover:-translate-y-2 border border-transparent hover:border hover:border-[#FCF7F8] duration-300 hover:scale-125 hover:bg-[#A31621] group hover:text-[#FCF7F8] bg-[#FCF7F8] p-2">
              <Link target="_blank" href={"https://github.com/RashaIcon"}>
                <Github className="size-7 text-[#A31621] transition-all duration-300 group-hover:text-[#FCF7F8]" />
              </Link>
            </li>
            <li className="rounded-[50%] transition-all hover:-translate-y-2 border border-transparent hover:border hover:border-[#FCF7F8] duration-300 hover:scale-125 hover:bg-[#A31621] group hover:text-[#FCF7F8] bg-[#FCF7F8] p-2">
              <Link
                target="_blank"
                href={"https://www.facebook.com/nakibul.alam.sardar"}
              >
                <Facebook className="size-7 text-[#A31621] transition-all duration-300 group-hover:text-[#FCF7F8]" />
              </Link>
            </li>
            <li className="rounded-[50%] transition-all hover:-translate-y-2 border border-transparent hover:border hover:border-[#FCF7F8] duration-300 hover:scale-125 hover:bg-[#A31621] group hover:text-[#FCF7F8] bg-[#FCF7F8] p-2">
              <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/in/sm-nakibul-alam-rasha-mern-stack-developer-a3262b352"
                }
              >
                <FaLinkedin className="size-7 text-[#A31621] transition-all duration-300 group-hover:text-[#FCF7F8]" />
              </Link>
            </li>
            <li className="rounded-[50%] transition-all hover:-translate-y-2 border border-transparent hover:border hover:border-[#FCF7F8] duration-300 hover:scale-125 hover:bg-[#A31621] group hover:text-[#FCF7F8] bg-[#FCF7F8] p-2">
              <Link
                target="_blank"
                href={"https://www.youtube.com/@Radiant_Bluds911"}
              >
                <FaYoutube className="size-7 text-[#A31621] transition-all duration-300 group-hover:text-[#FCF7F8]" />
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="w-full flex justify-center mt-9">
          <Link
            href={"mailto:teacontainscaffeine@gmail.com"}
            target="_blank"
            onClick={() => {
              if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText("teacontainscaffeine@gmail.com");
                toast.success("Email copied to clipboard!");
              } else {
                const textArea = document.createElement("textarea");
                textArea.value = "teacontainscaffeine@gmail.com";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                  document.execCommand("copy");
                  toast.success("Email copied to clipboard!");
                } catch (err) {
                  toast.error("Failed to copy email.");
                }
                document.body.removeChild(textArea);
              }
            }}
            className="cursor-pointer flex flex-row group hover:bg-[#FCF7F8] transition-all duration-300 items-center gap-x-2 border-2 border-[#FCF7F8] rounded-[40px] pr-3"
          >
            <div className="rounded-full transition-all duration-300 hover:bg-[#A31621] group bg-[#FCF7F8] p-2">
              <div>
                <Mail className="size-7 text-[#A31621] transition-all duration-300 hover:text-[#FCF7F8]" />
              </div>
            </div>
            <div className="font-ox group-hover:text-[#A31621] font-semibold text-[#FCF7F8] transition-all duration-300">
              teacontainscaffeine@gmail.com
            </div>
          </Link>
        </nav>
        <Container1>
          <div className="div mt-10 md:mt-28">
            <div className="left asd flex flex-col gap-y-10 md:gap-y-28">
              <p className="max-w-3xl text-[#FCF7F8] text-xl font-light text-primarytext sm:text-2xl md:text-3xl lg:text-4xl">
                My blend of design, coding, and interaction expertise
                distinguishes me within the tech industry.
              </p>
              <div className="gap-y-10 py-10 border-y-2 border-y-[#EAECC6]">
                <div className="flex gap-x-4 items-center md:flex-row flex-col">
                  <p className="md:text-left text-center flex-1 max-w-3xl text-[#EAECC6] text-xl text-primarytext sm:text-2xl md:text-3xl lg:text-4xl font-ox font-semibold">
                    Coding the Future <br />
                    Architecting Innovation
                  </p>
                  <Link
                    href={"/about"}
                    className="md:pl-10 md:pr-5 pl-5 py-1 text-[20px] mt-5 md:mt-0 pr-2 flex items-center md:gap-x-3 transition-all md:hover:translate-x-2 hover:-translate-y-1 md:hover:translate-y-0 duration-300 hover:bg-[#FCF7F8] text-[#A31621] md:text-3xl font-pira md:ml-80 rounded-full md:py-3 bg-[#EAECC6] text-right"
                  >
                    About Me <ChevronRight className="size-7" />
                  </Link>
                </div>
                <p className="text-[#FCF7F8] max-w-4xl text-xl font-light text-primarytext sm:text-2xl md:text-3xl lg:text-4xl mt-5 md:mt-10">
                  I craft tailored frontend experiences, constantly pushing
                  boundaries with a relentless commitment to innovation and
                  excellence.
                </p>
              </div>
              <div>
                <div className="top text-center text-[30px] text-[#EAECC6] md:text-5xl font-pira">
                  My Projects
                </div>
                <Link
                  href={"/myprojects"}
                  className="group projs border-y border-y-[#EAECC6] flex items-center justify-between flex-row gap-y-10 md:gap-y-0 md:gap-x-10 text-[#FCF7F8] py-7 md:py-12 mt-10 md:mt-20"
                >
                  <div className="left  ">
                    <h1 className="text-3xl md:text-5xl md:group-hover:translate-x-12 font-raj font-bold  transition-all duration-500 ease-in-out">
                      OREBI
                    </h1>
                  </div>
                  <div className="text-right right md:group-hover:-translate-x-12 text-sm md:text-2xl font-semibold transition-all duration-300 ease-in-out ">
                    <p>Front-End Development</p>
                    <p className="text-xs md:text-sm f">
                      React, Redux & Tailwind
                    </p>
                  </div>
                </Link>
                <Link
                  href={"/myprojects"}
                  className="group projs border-b border-b-[#EAECC6] flex items-center justify-between flex-row gap-y-10 md:gap-y-0 md:gap-x-10 text-[#FCF7F8] py-7 md:py-12 "
                >
                  <div className="left  ">
                    <h1 className="text-3xl md:text-5xl md:group-hover:translate-x-12 font-raj font-bold  transition-all duration-500 ease-in-out">
                      Discover Indonesia
                    </h1>
                  </div>
                  <div className="text-right right md:group-hover:-translate-x-12 text-sm md:text-2xl font-semibold transition-all duration-300 ease-in-out ">
                    <p>Front-End Development</p>
                    <p className="text-xs md:text-sm ">
                      HTML, CSS & Javascript
                    </p>
                  </div>
                </Link>
                <Link
                  href={"/myprojects"}
                  className="group projs border-b border-b-[#EAECC6] flex items-center justify-between flex-row gap-y-10 md:gap-y-0 md:gap-x-10 text-[#FCF7F8] py-7 md:py-12 "
                >
                  <div className="left  ">
                    <h1 className="text-3xl md:text-5xl md:group-hover:translate-x-12 font-raj font-bold  transition-all duration-500 ease-in-out">
                      UpLand
                    </h1>
                  </div>
                  <div className="text-right right md:group-hover:-translate-x-12 text-sm md:text-2xl font-semibold transition-all duration-300 ease-in-out ">
                    <p>Front-End Development</p>
                    <p className="text-xs md:text-sm ">
                      Nextjs, Redux & Tailwind
                    </p>
                  </div>
                </Link>

                <Link
                  href={"/aboutme"}
                  className="md:pl-10 md:pr-5 pl-5 py-1 text-[20px] hover:-translate-y-1 mt-7 md:mt-16 pr-2 flex justify-center items-center md:gap-x-3 transition-all duration-300 hover:bg-[#FCF7F8] text-[#A31621] md:text-3xl font-pira  rounded-full md:py-3 bg-[#EAECC6] "
                >
                  See More Projects <ChevronRight className="size-7" />
                </Link>
              </div>
            </div>
          </div>
        </Container1>
      </section>
    </>
  );
}

// color pallete #FCF7F8 #A31621 #EAECC6
