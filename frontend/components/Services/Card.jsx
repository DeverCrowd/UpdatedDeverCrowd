"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

const Card = ({ icon, text, color, i, darkColor,progress}) => {
  const x = useTransform(progress,[(i+1)*0.201 , (i+1)*0.25],[0,(1000)-i*30])
  const opacity = useTransform(x,[0 , 700],[0,1])
  const scale = useTransform(x,[0 , 700],[0.5,1])
  return (
      <motion.div
        style={{
          scale,
          x,
          opacity,
          backgroundImage: `linear-gradient(0deg, ${color}, ${darkColor})`,
          boxShadow: `0px 0px 15px 0px ${color}`,
          position: "sticky",
          top:  300,
          zIndex:  i,
        }}
        className="w-100 h-100  rounded-4xl flex flex-col items-center justify-center shadow-xl"
      >
        <div className=" h-[20%] text-7xl flex ">{icon()}</div>

        <p className="text-center p-4">{text}</p>
      </motion.div>
  );
};

export default Card;
