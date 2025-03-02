"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import  Union  from "../../public/images/Union.png";
import { Logs, Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "./Button";
import Container1 from "./Container1";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 1024) {
  //       setIsOpen(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <nav className=" absolute top-0 w-full z-50">
      <div className="container_cust   md:w-[1674px]    md:justify-center  relative md:mx-auto">
        <div className="bg_nav hidden md:flex absolute -z-10  it w-[200px]  md:w-auto ">
          <div className="left_para absolute md:block hidden">
            <div className="parallelogram_2 absolute -left-5 z-20 bg-white"></div>
            <div className="parallelogram_1 absolute -left-3 mt-[18px] z-20 bg-white"></div>
          </div>

          <div className="main_nav w-[1655px] "></div>
          <div className="right_para absolute top-0 right-0 ">
            <div className="parallelogram_3 absolute mt-[18px] z-20 bg-white"></div>
            <div className="parallelogram_4 absolute  z-20 bg-white"></div>
          </div>
        </div>
        <div className="main  relative flex items-center  md:justify-normal ">
          <div className="logo hidden md:block">
            <Link href="/">
              <Image
                src={Union}
                alt={Union}
                width={0}
                height={0}
                className="block md:absolute md:left-20   md:top-3"
              />
            </Link>
          </div>

          <div className="hidden md:block overflow-y-hidden-hidden transition-all duration-300 hover:scale-[101%]  px-10 ml-96  py-7 group  relative  w-[600px] justify-between text-white font-ox text-[20px] font-semibold ">
            <div className="left_para absolute top-0 left-0  transition-all duration-300">
              <div className="parallelogram_2 absolute transition-all -left-5  z-20 bg-red-600 group-hover:bg-white"></div>
              <div className="parallelogram_1 absolute transition-all -left-3 mt-[18px] z-20 bg-red-600 group-hover:bg-white"></div>
            </div>

            <ul className="flex items-center justify-between ">
              <li className="transition-all duration-300 hover:text-[#ff2221] ">
                <Link className="" href="/">
                  Home
                </Link>
              </li>
              <li className="transition-all duration-300 hover:text-[#ff2221]">
                <Link href="/projects">My Projects</Link>
              </li>
              <li className="transition-all duration-300 hover:text-[#ff2221]">
                <Link href="/about">About Me</Link>
              </li>
              <li className="transition-all duration-300 hover:text-[#ff2221]">
                <Link href="/contact">Contact Me</Link>
              </li>
            </ul>

            <div className="transition-all duration-300 right_para absolute top-0 right-0 ">
              <div className="parallelogram_3 absolute mt-[18px] transition-all z-20 bg-red-600 group-hover:bg-white"></div>
              <div className="parallelogram_4 absolute transition-all  z-20 bg-red-600 group-hover:bg-white"></div>
            </div>
          </div>

          <Link
            href={"/contact"}
            className="devneed hidden md:block absolute  right-1/4 top-1/2 
          -translate-y-[25px] "
          >
            <div className="animated-border-box-glow "></div>
            <div className=" px-4 font-bold text-white py-2 animated-border-box font-ox text-[20px]">
              Dev Needed? 🖥️
            </div>
          </Link>
        </div>
      </div>

      {/* responsive */}

      <Container1 className={`menu_mobile md:hidden flex  flex-col !px-0    `}>
        <div
          className={`flex-1 flex px-6 py-5 pb-3 items-center justify-between  ${
            isOpen ? "bg-[#FCF7F8]" : "bg-transparent"
          } `}
        >
          <h1
            className={`font-pira  text-4xl transition-all duration-500  ${
              isOpen ? " text-[#ff2221]" : "text-[#FCF7F8]"
            }`}
          >
            RASHA
          </h1>
          <div
            className={`transition-all duration-500 p-1 rounded-md ${
              isOpen ? "bg-[#FCF7F8] " : "bg-[#ff2221]"
            } `}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="size-7  text-[#ff2221]" />
            ) : (
              <Menu className="size-7  text-[#FCF7F8]" />
            )}
          </div>
        </div>

        <div
          className={`bg-[#FCF7F8] flex-1    ${
            isOpen ? "block border-t-2 border-[#ff2221]" : "hidden"
          }`}
        >
          <ul className="flex flex-col   text-[#ff2221] font-ox  font-semibold">
            <li className="transition-all ulslide px-6 py-3 duration-300 hover:text-[#ff2221] border-b-2 border-[#ff2221]">
              <Link href="/">Home</Link>
            </li>
            <li className="transition-all ulslide px-6 py-3 duration-300 hover:text-[#ff2221] border-b-2 border-[#ff2221]">
              <Link href="/projects">My Projects</Link>
            </li>
            <li className="transition-all ulslide px-6 py-3 duration-300 hover:text-[#ff2221] border-b-2 border-[#ff2221]">
              <Link href="/about">About Me</Link>
            </li>
            <li className="transition-all ulslide px-6 py-3 duration-300 hover:text-[#ff2221] border-b-2 border-[#ff2221]">
              <Link href="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </Container1>

      {/* responsive */}
    </nav>
  );
};
// color pallete #FCF7F8 #A31621 #EAECC6
export default Navbar;
