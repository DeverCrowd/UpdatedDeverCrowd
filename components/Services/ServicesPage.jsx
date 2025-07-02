"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import Steak from "./Steak";
import Card from "./Card";
import { MdDesignServices } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";
import { BsShieldLockFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import Cube from "../Home/Cube";

const cyberIcon = () => {
  return <BsShieldLockFill />;
};
const designIcon = () => {
  return <MdDesignServices />;
};
const developmentIcon = () => {
  return <IoTerminal />;
};
const supportIcon = () => {
  return <FaHandsHelping />;
};
const steaks = [
  {
    color: "#83181b",
    darkColor: "#250505",
    icon: cyberIcon,
  },
  {
    color: "#3B0764",
    darkColor: "#160222",
    icon: designIcon,
  },
  {
    color: "#0c552b",
    darkColor: "#03160b",
    icon: supportIcon,
  },
  {
    color: "#1c388f",
    darkColor: "#0a1026",
    icon: developmentIcon,
  },
];

const cards = [
  {
    color: "#3e0555",
    darkColor: "#0a010d",
    icon: designIcon,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, maxime itaque ipsum sed beatae totam deserunt quidem tempora,",
  },
  {
    color: "#580777",
    darkColor: "#14021a",
    icon: developmentIcon,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, maxime itaque ipsum sed beatae totam deserunt quidem tempora,",
  },
  {
    icon: cyberIcon,
    color: "#720999",
    darkColor: "#1f032b",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, maxime itaque ipsum sed beatae totam deserunt quidem tempora,",
  },
  {
    icon: supportIcon,
    color: "#950bcc",
    darkColor: "#2c043d",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, maxime itaque ipsum sed beatae totam deserunt quidem tempora,",
  },
];
const ServicesPage = ({ progress }) => {
  const section = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: section,
    // offset: ["start start", "start end"],
  });

  const xCube = useTransform(scrollYProgress, [0, 0.2], [0, -500]);
  const scaleCube = useTransform(scrollYProgress, [0, 0.2], [2, 1]);
  const rotateYCube = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const rotateXCube = useTransform(scrollYProgress, [0, 0.2], [-90, -25]);

  const scale = useTransform(progress, [0.42, 1], [1, 0.5]);
  const borderRadius = useTransform(progress, [0.42, 1], ["0px", "500px"]);
  return (
    <motion.section
      style={{ scale,  boxShadow: `0px 0px 30px 0px #860cfa`,borderRadius }}
      ref={section}
      className="flex flex-col justify-start w-full h-[600vh] backdrop-blur-2xl z-30 relative top-0 "
      id="services"
    >
      <h2 className="text-4xl pb-5 h-[25vh] flex flex-col justify-center items-center text-center gap-3">
        Checkout Our services!
        <div className="border w-100 bg-primary"></div>
      </h2>
      <div className="flex flex-col items-center justify-start w-full h-full">
        <div className="flex flex-col absolute items-center justify-start mt-50 h-[90%] w-[50%] pb-50 z-50">
          <Cube
            style={{
              position: "sticky",
              top: 300,
              x: xCube,
              rotateY: rotateYCube,
              rotateX: rotateXCube,
            }}
          />
        </div>

        <div className="flex flex-col absolute items-start justify-start mt-50 h-[90%] w-[73%] pb-50">
          {cards.map((card, i) => {
            return (
              <Card
                key={i}
                icon={card.icon}
                text={card.text}
                color={card.color}
                i={i}
                darkColor={card.darkColor}
                progress={scrollYProgress}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesPage;
