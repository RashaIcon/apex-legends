import Image from "next/image";
import Bg from "../public/images/Background.png";
import Hero from "../public/images/hero.png";
import Container1 from "./components/Container1";
import Link from "next/link";
import { Instagram } from "lucide-react";

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
      <section className=" border-y-2 border-white bg-[#EAECC6]  pt-10">
        <nav className="w-full flex justify-center ">
          <ul className="rounded-md">
            <li>
              <Link href={"/"}>
                <Instagram />
              </Link>
            </li>
          </ul>
        </nav>
        <Container1 className="flex flex-col md:flex-row justify-center gap-y-10 md:gap-x-20">
          {/* <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-accentv">
              About Me
            </h1>
            <p className="mt-5 text-lg font-medium text-[#000000]">
              I am a front-end developer who loves making websites look cool and
              work smoothly! I have a passion for creating beautiful and
              functional websites that are easy to use. I am always looking for
              new challenges and opportunities to learn and grow as a developer.
            </p>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-accentv">
              My Skills
            </h1>
            <p className="mt-5 text-lg font-medium text-[#000000]">
              I have experience with HTML, CSS, JavaScript, React, and Next.js. I
              am proficient in using Git and GitHub for version control and
              collaboration. I am also familiar with Figma and Adobe XD for
              design and prototyping. I am always looking to expand my skill set
              and learn new technologies.
            </p>
          </div> */}
        </Container1>
      </section>
    </>
  );
}

// color pallete #FCF7F8 #A31621 #EAECC6
