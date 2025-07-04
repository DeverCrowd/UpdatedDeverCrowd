"use client";
import Image from "next/image";
import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

const ProjectCard = ({
  title,
  description,
  color,
  src,
  link,
  i,
  range,
  targetScale,
  progress,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(progress, range, [1, targetScale]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <div
      ref={container}
      className="flex items-center justify-center h-[100vh] sticky top-0"
    >
      <motion.div
        style={{
          scale,
          backgroundColor: color,
          position: "relative",
          top: `${i * 5}%`,
          boxShadow:`0px 0px 15px 0px ${color}`,
        }}
        className={`w-[1000px] h-[500px] flex flex-col justify-center rounded-4xl`}
      >
        <h1 className="items-center flex justify-center text-4xl text-black font-extrabold uppercase">
          {title}
        </h1>
        <div className="flex items-center w-[90%] h-[80%] ">
          <p className="flex w-[60%] pl-10 pr-10">{description}</p>
          <motion.div
            style={{ opacity: scrollYProgress, scale: scaleImage }}
            className="flex w-[350px] h-[350px] bg-accent rounded-2xl items-center"
          >
            <Image
              src={src}
              width={500}
              height={500}
              alt="project image"
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
