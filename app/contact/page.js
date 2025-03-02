import React from "react";
import Container1 from "../components/Container1";

const page = () => {
  return (
    <section className="bg-[#A31621] max-h-[1080px] ">
      <Container1 className={"py-10 md:py-36  !max-w-[1400px]"}>
        <div className="pb-8 md:pb-20">
          <div className="text-[#FCF7F8]   font-pira  text-4xl sm:text-5xl md:text-7xl lg:text-9xl">
            Let's Connect!
          </div>
          <h1 className="max-w-5xl text-[#EAECC6] mt-3 font-bil text-sm sm:text-lg md:text-xl lg:text-2xl">
            Whether you're looking to collaborate on a project, need a solution
            to a challenging problem, or just want to talk tech, feel free to
            reach out. Together, we can turn ideas into reality.
          </h1>
              </div>
        <div className="main">
            
        </div>
      </Container1>
    </section>
  );
};
// color pallete #FCF7F8 #A31621 #EAECC6
export default page;
