"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";

const Card = ({ icon, text, color, i, darkColor, progress }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isUnder24, setIsUnder24] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);
  const cardWidth = isUnder24 ? 300 : 400;
  const cardHeight = isUnder24 ? 300 : 400;
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

  let x = null;
  let y = null;
  let opacity;
  let scale;
  if (isUnder24) {
    y = useTransform(progress, [(i + 1) * 0.201, (i + 1) * 0.25], [0, 100]);
    opacity = useTransform(y, [0, 100], [0, 1]);
    scale = useTransform(y, [0, 100], [0.5, 1]);
  } else {
    x = useTransform(
      progress,
      [(i + 1) * 0.201, (i + 1) * 0.25],
      [0, (innerWidth/2) - i * 20]
    );
    opacity = useTransform(x, [0, innerWidth / 2 - 100], [0, 1]);
    scale = useTransform(x, [0, innerWidth / 2 - 100], [0.5, 1]);
  }

  const cubeSize = isMobile ? 150 : isTablet ? 250 : isLaptop ? 300 : 350;
  return (
    <motion.div
      style={{
        x: x ? x : 0,
        y: y ? y : 0,
        scale,
        opacity,
        backgroundImage: `linear-gradient(0deg, ${color}, ${darkColor})`,
        boxShadow: `0px 0px 15px 0px ${color}`,
        position: "sticky",
        top: 300,
        left: isUnder24 ? "100%" : 0,
        zIndex: isUnder24 ? i + 50 : i,
        width: isUnder24 ? 300 : 350,
        height: isUnder24 ? 300 : 400,
      }}
      className="rounded-4xl flex flex-col items-center justify-center shadow-xl"
    >
      <div className=" h-[20%] text-7xl flex ">{icon()}</div>

      <p className="text-center p-4">{text}</p>
    </motion.div>
  );
};

export default Card;
