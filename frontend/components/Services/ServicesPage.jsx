"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { MdDesignServices } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";
import { BsShieldLockFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import Cube from "../Home/Cube";
import H1 from "../ui/H1";
import Image from "next/image";

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
    color: "#3B82F6",
    darkColor: "#0a010d",
    title: "Design",
    icon: designIcon,
    text: "Turn ideas into interfaces that wow. We design sleek, modern visuals that grab attention, build trust, and keep users coming back.",
  },
  {
    title: "Development",

    color: "#3B82F6",
    darkColor: "#0a010d",
    icon: developmentIcon,
    text: "We build blazing-fast, scalable websites and platforms that work flawlessly — helping you grow, sell, and succeed online.",
  },
  {
    title: "Security",

    icon: cyberIcon,
    color: "#3B82F6",
    darkColor: "#0a010d",
    text: "Sleep easy — your platform is protected. We secure your data, block threats, and ensure your users always feel safe.",
  },
  {
    title: "Support",

    icon: supportIcon,
    color: "#3B82F6",
    darkColor: "#0a010d",
    text: "We're your tech partner, not just your developers. Get quick fixes, updates, and ongoing guidance to keep your platform running perfectly.",
  },
];
const ServicesPage = ({ progress }) => {
  const section = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: section,
    // offset: ["start start", "start end"],
  });
  // useMotionValueEvent(scrollYProgress,'change',(v)=>{console.log(v);
  // })
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);
  const [isUnder24, setIsUnder24] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setInnerWidth(window.innerWidth);
      setIsMobile(width <= 480);
      setIsTablet(width > 480 && width <= 768);
      setIsLaptop(width > 768 && width <= 1640);
      setIsUnder24(width < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cubeSize = isMobile ? 150 : isTablet ? 250 : isLaptop ? 300 : 350;
  const xCube = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0, isUnder24 ? 0 : -(innerWidth / 2 - cubeSize)]
  );
  const rotateYCube = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const rotateXCube = useTransform(scrollYProgress, [0, 0.2], [-90, -25]);
  const borderRadius = useTransform(progress, [0.85, 1], ["0px", "150px"]);
  const scale = useTransform(progress, [0.85, 1.2], [1, 0.5]);

  return (
    <motion.section
      ref={section}
      className="flex flex-col justify-start w-full h-[400vh] lg:h-[600vh] backdrop-blur-2xl z-30 border-t border-primary"
      id="services"
    >
      <div className="flex flex-col items-center justify-start w-full h-full p-20">
        <H1 title="Your Growth Toolkit" />
        <div className="hidden lg:flex flex-col absolute items-center justify-start mt-50 h-[95%] w-[100%] pb-50 z-50">
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

        <div className="flex flex-col absolute items-center lg:items-start justify-start h-[100%] mt-50 lg:mt-0 w-[100%] pb-50 ">
          {cards.map((card, i) => {
            return (
              <Card
                key={i}
                icon={card.icon}
                text={card.text}
                color={card.color}
                title={card.title}
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
