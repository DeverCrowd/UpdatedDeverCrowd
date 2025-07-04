import Image from "next/image";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import AutoScroll from "./AutoScroll";
const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sapiente non nemo eligendi nihil laboriosam quaerat nulla,",
    src: "/assets/logo.png",
    link: "",
    color: "#580777",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sapiente non nemo eligendi nihil laboriosam quaerat nulla,",
    src: "/assets/logo.png",
    link: "",
    color: "#3e0555",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sapiente non nemo eligendi nihil laboriosam quaerat nulla,",
    src: "/assets/logo.png",
    link: "",
    color: "#580777",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sapiente non nemo eligendi nihil laboriosam quaerat nulla,",
    src: "/assets/logo.png",
    link: "",
    color: "#3e0555",
  },
  {
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sapiente non nemo eligendi nihil laboriosam quaerat nulla,",
    src: "/assets/logo.png",
    link: "",
    color: "#580777",
  },
];

const tests = [
  {
    name: "swilam",
    image: "/assets/user.png",
    test: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem voluptatem unde iusto quos ut delectus blanditiis,",
  },
  {
    name: "swilam",
    image: "/assets/user.png",
    test: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem voluptatem unde iusto quos ut delectus blanditiis,",
  },
  {
    name: "swilam",
    image: "/assets/user.png",
    test: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem voluptatem unde iusto quos ut delectus blanditiis,",
  },
  {
    name: "swilam",
    image: "/assets/user.png",
    test: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem voluptatem unde iusto quos ut delectus blanditiis,",
  },
  {
    name: "swilam",
    image: "/assets/user.png",
    test: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem voluptatem unde iusto quos ut delectus blanditiis,",
  },
];
const WorksPage = () => {
  const section = useRef(null);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end end"],
  });
  return (
    <section
      style={{ boxShadow: `0px 0px 30px 0px #860cfa` }}
      ref={section}
      className="relative flex flex-col justify-center w-full min-h-[100vh] backdrop-blur-2xl z-40"
      id="works"
    >
      <h2 className="text-4xl pb-5 h-[25vh] flex flex-col justify-end items-center gap-3">
        Checkout Our works!
        <div className="border w-100 bg-primary"></div>
      </h2>
      <div className="flex flex-col">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <ProjectCard
              i={i}
              key={i}
              {...project}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
      <h2 className="text-4xl pb-5 h-[25vh] flex flex-col justify-end items-center gap-3">
        Hear Our Client <div className="border w-100 bg-primary"></div>
      </h2>

      <div className="h-[30vh] w-full flex justify-center items-center mb-20 overflow-x-hidden">
        <AutoScroll tests={tests} />
      </div>
    </section>
  );
};

export default WorksPage;
