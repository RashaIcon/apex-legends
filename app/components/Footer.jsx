import React from "react";
import Container1 from "./Container1";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-[#A31621] py-6">
      <Container1
        className={
          "md:!max-w-[98%] !max-w-[93%] rounded-xl bg-[#A31621] py-6 md:py-24 lg:py-32 !px-10 border-2 border-[#EAECC6] "
        }
      >
        
          <div className="grid  grid-rows-1 grid-cols-3  sm:grid-cols-4 gap-x-10 gap-y-2 md:gap-4 text-[#FCF7F8]">
            <div className="4 hidden sm:flex dow font-pira text-4xl sm:text-7xl lg:text-9xl  flex-col md:justify-center items-center gap-4">
              <Link href={"/"}>RASHA</Link>
            </div>

            <div className="2 flex flex-col items-center ju gap-2 sm:gap-4 ">
              <h1 className="text-xl md:text-3xl font-ox font-bold text-[#EAECC6] transition-all ease-in-out hover:text-[#FCF7F8] duration-300">
                Explore
              </h1>
              <ul className="text-sm md:text-xl font-ox flex flex-col gap-1 md:gap-2">
                <li className="transition-all ease-in-out hover:text-[#EAECC6] duration-300">
                  <Link href="/">Home</Link>
                </li>
                <li className="transition-all ease-in-out hover:text-[#EAECC6] duration-300">
                  <Link href="/about">About</Link>
                </li>
                <li className="transition-all ease-in-out hover:text-[#EAECC6] duration-300">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="transition-all ease-in-out hover:text-[#EAECC6] duration-300">
                  <Link href="/projects">My projects</Link>
                </li>
              </ul>
            </div>
            <div className="3  flex flex-col  j gap-2 sm:gap-4">
              <h1 className="text-xl md:text-3xl font-ox font-bold text-[#EAECC6] transition-all ease-in-out hover:text-[#FCF7F8] duration-300">
                Socials
              </h1>
              <ul className="flex font-ox text-sm flex-col gap-1 md:gap-2 md:text-xl">
                <li className="transition-all ease-in-out hover:text-[#EAECC6] duration-300">
                  <Link
                    target="_blank"
                    href={"https://www.facebook.com/nakibul.alam.sardar"}
                  >
                    Facebook
                  </Link>
                </li>
                <li className="transition-all ease-in-out hover:text-[#EAECC6] duration-300">
                  <Link
                    href={"https://www.instagram.com/sardar_rasha/"}
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="transition-all ease-in-out hover:text-[#EAECC6] duration-300">
                  <Link
                    target="_blank"
                    href={
                      "https://www.linkedin.com/in/sm-nakibul-alam-rasha-mern-stack-developer-a3262b352"
                    }
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="transition-all ease-in-out hover:text-[#EAECC6] duration-300">
                  <Link
                    href={"https://discord.com/users/742335672257609790"}
                    target="_blank"
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div className="1  flex flex-col items-center md:justify-center  gap-4">
              <h1 className="text-lg sm:text-xl md:text-3xl font-semibold text-bil">
                Where <span className="text-[#EAECC6]">aesthetics</span> &{" "}
                <br /> <span className="text-[#EAECC6]">functionality</span>{" "}
                meet
              </h1>
            </div>
          </div>

        
      </Container1>
    </footer>
  );
};
// color pallete #FCF7F8 #A31621 #EAECC6
export default Footer;
