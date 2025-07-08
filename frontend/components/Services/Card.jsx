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
  const cardWidth = isUnder24 ? 300 : 350;
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
  let opacity = null;
  let scale = null;
  let rotateX = 0;
  const step = 0.25;
  const range = 0.1;
  if (isUnder24) {
    opacity = useTransform(progress, [i * step, i * step + range], [1, 1]);
    scale = useTransform(progress, [i * step, 1], [1, 1 - (4 - i) * 0.1]);
    rotateX = useTransform(progress, [i * step, 1], [0, 1 - (4 - i) * 15]);
  } else {
    x = useTransform(
      progress,
      [(i + 1) * 0.201, (i + 1) * 0.25],
      [0, (innerWidth - cardWidth - 100 )  - i * 20]
    );
    opacity = useTransform(
      x,
      [0, innerWidth / 2 + cardWidth / 2 - 100],
      [0, 1.1]
    );
    scale = useTransform(
      x,
      [0, innerWidth / 2 + cardWidth / 2 - 100],
      [0.5, 1]
    );
  }

  return (
    <motion.div
      style={{
        x: x ?? 0,
        scale,
        opacity,
        // rotateX,
        backgroundImage: `linear-gradient(145deg, ${color}, ${darkColor})`,
        boxShadow: `0px 20px 50px -10px ${color}, inset 0 0 20px -5px ${darkColor}`,
        position: "sticky",
        top: isUnder24 ? 200 + i * 50 : 250,
        left: isUnder24 ? "0%" : 0,
        zIndex: isUnder24 ? i + 50 : i,
        width: cardWidth,
        height: cardHeight,
        
      }}
      className="rounded-[2rem] p-6 lg:p-8 flex flex-col items-center justify-center border border-white/10 backdrop-blur-md hover:scale-105 hover:shadow-[0_0_60px_0px_rgba(12,69,160,0.5)] m-50 lg:m-0"
    >
      <div className="h-[20%] text-[3rem] sm:text-[4rem] text-white/90 mb-2">
        {icon()}
      </div>

      <p className="text-center text-white/80 text-sm sm:text-base px-2 leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
};

export default Card;
