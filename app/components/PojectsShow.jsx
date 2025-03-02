import Image from "next/image";
import React, { Children } from "react";
import Button from "./Button";
import Link from "next/link";

const PojectsShow = ({
  src,
  title,
  madeby,
  description,
  children,
  className,
}) => {
  return (
    <div
      className={` flex text-[#FCF7F8] items-center   ${className} gap-y-6 gap-x-6 p-4 rounded-lg md:flex-row border-2 border-[#] flex-col`}
    >
      <div className="flex-1 ">
        <Image
          src={src}
          height={0}
          width={0}
          className="bg-cover "
          alt="alals"
        />
      </div>
      <div className="flex-1 flex  flex-col gap-y-5">
        <div className="flex justify-between items-center md:items-start md:flex-col border-b pb-4  gap-y-2 border-b-[#FCF7F8]">
          <h1 className="text-5xl md:text-6xl font-pira">{title}</h1>
          <p className="md:text-sm text-xs font-ox ">{madeby}</p>
        </div>

        <div className="font-bil flex flex-col gap-y-6 text-sm md:text-xl ">
          {children}
        </div>
        <button className="bg-[#A31621] transition-all ease-in-out duration-300 border-2 border-[#FCF7F8] hover:text-[#A31621] hover:bg-[#FCF7F8] py-1 md:py-2 rounded-3xl font-semibold  font-ox text-sm md:text-xl text-[#FCF7F8]">
          <Link href={"/projects"}>See Codes</Link>
        </button>
      </div>
    </div>
  );
};
// color pallete #FCF7F8 #A31621 #EAECC6
export default PojectsShow;
