"use client";
import React from "react";
import Container1 from "../components/Container1";
import Banner from "../../public/images/aboutme/banner.png";
import Card1 from "../../public/images/aboutme/card1.png";
import Card2 from "../../public/images/aboutme/card2.png";
import Card3 from "../../public/images/aboutme/card3.png";
import Card4 from "../../public/images/aboutme/card4.png";

import Css from "../../public/images/aboutme/css.png";
import html from "../../public/images/aboutme/html.png";
import js from "../../public/images/aboutme/js.png";
import mongo from "../../public/images/aboutme/mongo.png";
import nextjs from "../../public/images/aboutme/nextjs.png";
import node from "../../public/images/aboutme/node.png";
import Py from "../../public/images/aboutme/pytho.png";
import react from "../../public/images/aboutme/react.png";
import redux from "../../public/images/aboutme/redux.png";
import tailwind from "../../public/images/aboutme/tailwind.png";
import three from "../../public/images/aboutme/three.png";

import Image from "next/image";
import Card from "../components/Card";
import { Tilt } from "react-tilt";
import VerticalTime from "../components/VerticalTime";

const page = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-homeBanner bg-cover h-full w-full bg-center z-10 max-h-[1080px]">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover -z-50"
          src={Banner}
          alt="bg"
          layout="fill"
        />
        {/* Additional dark mask overlay */}
        <div className="absolute inset-0 bg-black opacity-30  -z-40"></div>
        <Container1 className="flex md:gap-x-80 mt-28 md:mt-72 justify-center items-center h-full flex-col sm:flex-row">
          <div className="flex flex-col items-center gap-y-5 ">
            <h1 className="md:text-6xl text-5xl font-pira font-semibold text-[#EAECC6] text-center">
              I'm
            </h1>
            <div className="text-[#FCF7F8]   font-pira text-7xl text-center py-6 md:text-[120px] border-y-2 md:border-y-4 border-[#EAECC6]">
              <h1 className="upin">SM Nakibul Alam Rasha</h1>
            </div>
            <p className="text-[#EAECC6] pb-20 md:pb-56  text-sm md:text-2xl   text-center mt-2 md:mt-5  font-ox w-auto md:w-[70%]">
              I'm a 15-year-old front-end developer, designer, and digital
              enthusiast from Bangladesh. I'm passionate about building
              exceptional digital experiences that are both visually stunning
              and highly functional. My work is driven by a desire to push
              boundaries and deliver outstanding user experiences.
            </p>
          </div>
        </Container1>
      </section>

      <section className=" border-t-2 border-white bg-[#A31621] py-10">
        <Container1 className="gap-y-10 mt-10 md:mt-40">
          <div>
            <h1 className="text-5xl md:text-7xl font-pira font-semibold text-[#FCF7F8] ">
              My Expertise
            </h1>
            <p className="text-[#FCF7F8] text-xs w-[70%] md:text-2xl mt-5 font-ox">
              I specialize in creating beautiful, user-friendly websites and
              applications that are tailored to meet the unique needs of each
              client.{" "}
              <span className="font-bold underline">
                My expertise includes:
              </span>
            </p>
          </div>
          <div className="flex mt-5 md:mt-10 justify-between flex-col lg:flex-row gap-y-10 gap-x-10 h-auto  md:h-[300px]   ">
            <div className="flex flex-1  md:flex-row   gap-x-5 md:gap-x-10">
              <Tilt className=" bg-[#FCF7F8]  shado rounded-3xl p-5 flex flex-col items-center justify-center gap-y-5">
                <Image
                  src={Card1}
                  alt="hero"
                  width={0}
                  height={0}
                  className="md:h-[150px] w-[290px] h-[100px] object-cover"
                />
                <h1 className="font-extralight md:font-thin font-pira text-lg md:text-4xl text-center">
                  Web Development
                </h1>
              </Tilt>

              <Tilt className="bg-[#FCF7F8] shado rounded-3xl p-5 flex flex-col items-center justify-center gap-y-5">
                <Image
                  src={Card2}
                  alt="hero"
                  width={0}
                  height={0}
                  className="md:h-[150px] w-[290px] h-[100px] object-cover"
                />
                <h1 className="font-extralight md:font-thin  font-pira text-lg  md:text-4xl text-center">
                  Web Design
                </h1>
              </Tilt>
            </div>
            <div className="flex  flex-1 justify-between    md:flex-row gap-x-5 md:gap-x-10">
              <Tilt className="bg-[#FCF7F8] shado rounded-3xl p-5 flex flex-col items-center justify-center gap-y-5">
                <div>
                  <Image
                    src={Card3}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[150px] w-[290px] h-[100px] object-cover"
                  />
                </div>

                <h1 className="font-extralight md:font-thin  font-pira text-lg  md:text-4xl text-center">
                  UI/UX Design
                </h1>
              </Tilt>
              <Tilt className="bg-[#FCF7F8] shado rounded-3xl p-5 flex flex-col items-center justify-center gap-y-5">
                <Image
                  src={Card4}
                  alt="hero"
                  width={0}
                  height={0}
                  className="md:h-[150px] w-[290px] h-[100px] object-cover"
                />
                <h1 className="font-extralight md:font-thin  font-pira text-lg  md:text-4xl text-center">
                  Video Editing
                </h1>
              </Tilt>
            </div>
          </div>
          <div className="mt-10  lg:mt-48  md:mt-96 text-right  ">
            <h1 className="text-5xl md:text-7xl font-pira font-semibold text-[#FCF7F8] mt-20">
              My Tech Stack
            </h1>
            <p className="text-[#FCF7F8] text-xs  md:text-2xl mt-5 font-ox">
              My expertise spans a diverse range of technologies, enabling me to
              deliver <br className="hidden lg:block" /> comprehensive and
              cutting-edge solutions across various platforms.
            </p>
            <div className="bg-[#FCF7F8] shado rounded-3xl   mt-10 md:mt-20">
              <marquee direction="left" behaviour="scroll" scrollamount="15">
                <div className="flex scale-75 md:scale-100 items-center gap-x-5 my-10 flex-row h-[50px] md:h-[150px]">
                  <Image
                    src={redux}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={Css}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={Py}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={nextjs}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={react}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={html}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={node}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={js}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={mongo}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={tailwind}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={three}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={redux}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={Css}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={Py}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={nextjs}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={react}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={html}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={node}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={js}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={mongo}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={tailwind}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={three}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={redux}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={Css}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={Py}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={nextjs}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={react}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={html}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={node}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={js}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={mongo}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={tailwind}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={three}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={redux}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={Css}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={Py}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={nextjs}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={react}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={html}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={node}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={js}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={mongo}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={tailwind}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={three}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={redux}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={Css}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={Py}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={nextjs}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={react}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={html}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={node}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={js}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={mongo}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={tailwind}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={three}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={redux}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={Css}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={Py}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={nextjs}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={react}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={html}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={node}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={js}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={mongo}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                  <Image
                    src={tailwind}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-contain"
                  />
                  <Image
                    src={three}
                    alt="hero"
                    width={0}
                    height={0}
                    className="md:h-[100px] w-[100px] object-cover"
                  />
                </div>
              </marquee>
            </div>
            <div className="mt-20 md:mt-40 ">
              <h1 className="text-5xl   mb-10 md:mb-20 md:text-7xl text-left md:text-center font-pira font-semibold text-[#FCF7F8] ">
                My Timeline
              </h1>
              <VerticalTime />
            </div>
            <div className="mt-20 md:mt-40 block sm:hidden md:block ">
              <h1 className="text-5xl text-right  mb-10 md:mb-20 md:text-7xl  md:text-center font-pira font-semibold text-[#FCF7F8] ">
                Beyond Coding
              </h1>
              <Card />
            </div>
          </div>
        </Container1>
      </section>
    </>
  );
};
// color pallete #FCF7F8 #A31621 #EAECC6
export default page;
