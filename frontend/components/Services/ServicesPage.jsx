"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
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
  const [mobileWidth, setMobileWidth] = useState(false);
  const [isTablit, setTablitWidth] = useState(false);
  const [isLabtop, setLabtopWidth] = useState(false);
  useEffect(() => {
    setMobileWidth(window.innerWidth <= 480);
    setTablitWidth(window.innerWidth <= 768);
    setLabtopWidth(window.innerWidth <= 1640);
  });

  const cubeSize = isMobile ? 150 : isTablit ? 250 : isLabtop ? 300 : 350;
  const xCube = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0, isMobile ? 0 : isTablit ? 0 : -(window.innerWidth / 2 - cubeSize)]
  );
  const scaleCube = useTransform(scrollYProgress, [0, 0.2], [2, 1]);
  const rotateYCube = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const rotateXCube = useTransform(scrollYProgress, [0, 0.2], [-90, -25]);

  return (
    <motion.section
      style={{ boxShadow: `0px 0px 30px 0px #860cfa` }}
      ref={section}
      className="flex flex-col justify-start w-full h-[600vh] backdrop-blur-2xl z-30 relative top-0 "
      id="services"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl pb-5 min-h-[20vh] text-transparent bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text flex flex-col justify-center items-center text-center gap-3">
        Checkout Our services!
        <div className="w-4/5 sm:w-3/5 md:w-2/3 lg:w-1/2 xl:w-[40%] h-1 bg-primary mx-auto mt-2 rounded-full" />
      </h2>

      <div className="flex flex-col items-center justify-start w-full h-full">
        <div className="flex flex-col absolute items-center justify-start mt-50 h-[90%] w-[50%] pb-50 z-50">
          <Cube
            cubeSize={cubeSize}
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
