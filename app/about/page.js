"use client";
import React from "react";
import Container1 from "../components/Container1";
import Banner from "../../public/images/aboutme/banner.png";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Container1 className="h-full !max-w-[1600px] bg-cover  w-full bg-center z-10 relative max-h-[1080px]">
        <Image
          className="absolute top-0 left-0 w-full  h-full object-cover -z-50"
          src={Banner}
          alt="bg"
          layout="fill"
        />
        <div className="div mt-[200px]">
          <h1 className=" pb-6 text-4xl font-bil  text sm:text-5xl md:text-7xl lg:text-8xl">
            I'm SM Nakibul Alam Rasha 👋
          </h1>
          <span className="text-4xl sm:text-5xl font-bil md:text-7xl lg:text-8xl">
            Crafting Digital Excellence
          </span>
        </div>
      </Container1>
    </div>
  );
};

export default page;
