import React from 'react'
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
import Image from 'next/image';

const Marq = () => {
  return (
      <div className='flex flx items-center gap-x-5 my-10 flex-row h-[50px] md:h-[150px]'>
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
  )
}

export default Marq
