"use client";
import React from "react";
import Container1 from "../components/Container1";
import Banner from "../../public/images/projects/banner.jpg";
import orebi from "../../public/images/projects/1.png";
import upland from "../../public/images/projects/upland.png";
import nissan from "../../public/images/projects/nissan.png";
import medical from "../../public/images/projects/medical.png";
import rest from "../../public/images/projects/rest.png";
import agenc from "../../public/images/projects/Agenc.png";
import indo from "../../public/images/projects/3.png";
import Image from "next/image";
import PojectsShow from "../components/PojectsShow";
import ProjectShow2 from "../components/ProjectShow2";

const page = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-homeBanner bg-cover h-full w-full bg-center z-10 max-h-[1080px]">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover -z-50"
          src={Banner}
          alt="bg"
          layout="fill"
        />
        {/* Additional dark mask overlay */}
        <div className="absolute inset-0 bg-black opacity-50  -z-40"></div>
        <Container1 className="flex  md:gap-x-80 mt-28 md:mt-96 justify-center items-center h-full flex-col sm:flex-row">
          <div className="flex flex-col items-center gap-y-5 ">
            <div className="text-[#FCF7F8] w-full   font-pira text-7xl text-center py-6 md:text-[120px] border-y-2  border-[#EAECC6]">
              <h1 className="upin">My Projects</h1>
            </div>
            <p className="text-[#EAECC6] pb-20 md:pb-72  text-sm md:text-2xl   text-center mt-2 md:mt-5  font-ox w-auto md:w-[70%]">
              My projects showcase my passion for creating visually stunning and
              highly functional digital experiences. I focus on delivering
              outstanding user experiences through innovative design and
              development.
            </p>
          </div>
        </Container1>
      </section>
      <section className="bg-[#A31621] border-y-2 border-y-[#FCF7F8]">
        <Container1
          className={"my-10 md:my-36 flex flex-col gap-y-10 md:gap-y-20 !max-w-[1400px]"}
        >
          <PojectsShow src={orebi} title={"Orebi"} madeby={"React & Redux"}>
            <div>
              • Developed using React & Redux: Leveraged modern JavaScript
              technologies for efficient state management and a dynamic user
              interface. Focus on Visual Presentation: Designed with a clean,
              minimalist aesthetic, emphasizing product imagery and clear
              layout.
            </div>
            <div>
              • Focus on Visual Presentation: Designed with a clean, minimalist
              aesthetic, emphasizing product imagery and clear layout. Product
              Showcase: Features a variety of product categories including
              electronics, furniture, and potentially more (based on "Phones
              Sale" and "Furniture Offer").
            </div>
            <div>
              • Backend Integration: If the project includes backend
              functionality (e.g., database, API), mention the technologies
              used.
            </div>
            <div>
              • Specific Features: If the project has unique features like
              advanced search, filtering, or personalized recommendations,
              include them.
            </div>
          </PojectsShow>
          <ProjectShow2
            src={upland}
            className={""}
            title={"Upland"}
            madeby={"NextJs"}
          >
            <div>
              • Comprehensive Landing Page Design: Developed a full-fledged
              landing page with multiple sections, showcasing a product or
              service's key features and benefits.
            </div>
            <div>
              • Next.js Implementation: Leveraged Next.js for its performance
              advantages, including server-side rendering (SSR) and static site
              generation (SSG) for improved speed and SEO.
            </div>
          </ProjectShow2>
          <PojectsShow src={nissan} title={"Nissan"} madeby={"HTML & CSS"}>
            <div>
              • Custom HTML & CSS: Created a custom website design using HTML
              and CSS, focusing on responsive layout and cross-browser
              compatibility.
            </div>
            <div>
              • Branding & Imagery: Incorporated Nissan's branding guidelines
              and imagery to maintain a consistent look and feel throughout the
              website.
            </div>
            <div>
              • Interactive Elements: Included interactive elements like
              hover-over effects, animations, and transitions to enhance the
              user experience.
            </div>
          </PojectsShow>
          <ProjectShow2
            src={medical}
            title={"Medical Functional"}
            madeby={"Bootstrap"}
          >
            <div>
              • Bootstrap Framework: Utilized the Bootstrap framework for
              responsive design, grid layout, and pre-built components to
              streamline development.
            </div>
          </ProjectShow2>
          <PojectsShow
            src={rest}
            title={"Gerícht"}
            madeby={"React & TailwindCSS"}
          >
            <div>
              • Elegant and Sophisticated Design: The website boasts a visually
              stunning design with a dark, luxurious aesthetic, creating an
              impression of fine dining.
            </div>
            <div>
              • Reservation System: Implemented a reservation system for booking
              tables, allowing users to select dates, times, and party sizes.
            </div>
            <div>
              • Menu Showcase: Displayed the restaurant's menu with high-quality
              images and detailed descriptions, enticing users to explore the
              offerings.
            </div>
            <div>
              • Contact Form: Included a contact form for inquiries, feedback,
              and reservations, enabling users to communicate with the
              restaurant easily.
            </div>
            <div>
              • Responsive Design: Ensured the website is fully responsive and
              accessible on all devices, providing a seamless user experience
              across platforms.
            </div>
          </PojectsShow>
          <ProjectShow2
            src={agenc}
            title={"Agenc"}
            madeby={"React & TailwindCSS"}
          >
            <div>
              • Modern Design Elements: Incorporated modern design trends and
              elements like parallax scrolling, micro-interactions, and
              hover-over effects for a dynamic user experience.
            </div>
            <div>
              • Interactive Features: Included interactive features like
              sliders, carousels, and accordions to engage users and showcase
              content effectively.
            </div>
          </ProjectShow2>
          <PojectsShow
            src={indo}
            title={"Discover Indonesia"}
            madeby={"Bootstrap & Js"}
          >
            <div>
              • Destination Guides: Detailed information on popular
              destinations, including attractions, activities, and accommodation
              options.
            </div>
            <div>
              • Travel Tips: Helpful tips and recommendations for travelers,
              such as packing lists, safety advice, and cultural insights.
            </div>
            <div>
              • Cultural Insights: Information about Indonesian culture,
              customs, and traditions to enhance the travel experience.
            </div>
          </PojectsShow>
        </Container1>
      </section>
    </div>
  );
};
// color pallete #FCF7F8 #A31621 #EAECC6
export default page;
