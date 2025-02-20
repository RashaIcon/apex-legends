import Image from "next/image";
import Bg from "../public/images/Background.png";
import Hero from "../public/images/hero.png";
import Container1 from "./components/Container1";

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
      <section className="bg-[#f5f5f5] h-[1000px]">
        
      </section>
    </>
  );
}
