"use client";
import Steak from "../Services/Steak";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

const AboutPage = ({ progress }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(progress, [0.55, 1], [1, 0.5]);
  const opacity = useTransform(progress, [0.51, 1], [1, 0]);
  const borderRadius = useTransform(progress, [0.55, 1], ["0px", "500px"]);

  return (
    <motion.section
      style={{ scale, boxShadow: `0px 0px 30px 0px #860cfa`, borderRadius }}
      className="flex flex-col items-center justify-center w-full min-h-[200vh] backdrop-blur-2xl z-20 rounded-t-[120px] relative top-0"
      id="about"
    >
      <div className="container flex items-center justify-center border">
        <h1 className="text-9xl">About page</h1>
      </div>
    </motion.section>
  );
};

export default AboutPage;
