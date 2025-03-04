import React from "react";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { School2Icon, WorkflowIcon } from "lucide-react";
import Image from "next/image";
import pict from "/images/vertical/bnmpc.png";
import cit from "/images/vertical/cit.webp";
import resolve from "/images/vertical/resolve.png";
import ppl from "/images/vertical/ppl.png";
const VerticalTime = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "#FCF7F8", color: "#A31621" }}
          key={"hrishigay"}
          date={"January 2015 - present"}
          dateClassName="date font-ox font-bold text-[#FCF7F8] "
          icon={
            <div className="flex items-center w-full justify-center h-full">
              <Image
                width={0}
                height={0}
                src={pict}
                alt="missing"
                className="object-contain"
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title text-2xl md:text-4xl  font-pira">
            Academic Education{" "}
          </h3>
          <h5 className="vertical-timeline-element-subtitle text-sm md:text-xl  font-ox">
            Birshreshtha Noor Muhammad Public College
          </h5>
          <p id="description" className=" font-bil">
            Acquiring fundamental knowledge, developing problem-solving skills,
            improving communication abilities, and building relationships with
            fellow students.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#FCF7F8", color: "#A31621" }}
          key={"hrishigay"}
          date={"February 2024 - February 2025"}
          dateClassName="date font-ox font-bold text-[#FCF7F8] "
          icon={
            <div className="flex items-center  w-full justify-center h-full">
              <Image
                width={0}
                height={0}
                src={cit}
                alt="missing"
                className="object-contain rounded-full"
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title text-2xl md:text-4xl  font-pira">
            Front-end Development
          </h3>
          <h5 className="vertical-timeline-element-subtitle text-sm md:text-xl  font-ox">
            Creative IT
          </h5>
          <p id="description" className=" font-bil">
            I gained a strong foundation in web development and mastered
            front-end website building. Along the way, I created multiple
            websites, applying my skills in real projects.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#FCF7F8", color: "#A31621" }}
          key={"hrishigay"}
          date={"August 2022 - Present"}
          dateClassName="date font-ox font-bold text-[#FCF7F8] "
          icon={
            <div className="flex items-center  w-full justify-center h-full">
              <Image
                width={0}
                height={0}
                src={resolve}
                alt="missing"
                className="object-contain rounded-full"
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title text-2xl md:text-4xl  font-pira">
            Video Editing
          </h3>
          <h5 className="vertical-timeline-element-subtitle text-sm md:text-xl  font-ox">
            Davinci Resolve
          </h5>
          <p id="description" className=" font-bil">
            I started my video editing journey by learning DaVinci Resolve
            through YouTube tutorials. I improved my editing skills, exploring
            transitions, effects, and color grading to create engaging videos.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#FCF7F8", color: "#A31621" }}
          key={"hrishigay"}
          date={"August 2022 - Present"}
          dateClassName="date font-ox font-bold text-[#FCF7F8] "
          icon={
            <div className="flex  items-center  w-full justify-center h-full">
              <Image
                width={0}
                height={0}
                src={ppl}
                alt="missing"
                className="object-contain bg-white rounded-full"
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title text-2xl md:text-4xl  font-pira">
            Java Basics
          </h3>
          <h5 className="vertical-timeline-element-subtitle text-sm md:text-xl  font-ox">
            Purple Tutor
          </h5>
          <p id="description" className=" font-bil">
            I began my Java programming journey at Purple Tutor with the goal of
            building a strong foundation in software development. Throughout the
            course, I covered various essential concepts step by step, gradually
            improving my coding skills.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default VerticalTime;
