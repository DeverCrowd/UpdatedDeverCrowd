"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { MdDesignServices } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";
import { BsShieldLockFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
const Steak = ({ color, icon ,i,darkColor}) => {
  const { scrollYProgress } = useScroll();
  const rotateY = useTransform(scrollYProgress, [0.15, 0.6], [30, 390]);

  return (
    <motion.div
      initial={{
        rotateX: -30,
        rotateY: 30,
      }}
      style={{
        position:"sticky",
        top:((i+1)*160),
        zIndex:i
      }}
      className={`size-50 transform-3d select-none group font-extrabold `}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(90deg, ${color}, ${darkColor})`,
          
          boxShadow: `0px 0px 15px 0px ${color}`,
        }}
        className={`w-full h-10 absolute translate-z-25 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-500 rounded-2xl`}
      ></div>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, ${color}, ${darkColor})`,
          boxShadow: `0px 0px 15px 0px ${color}`,
        }}
        className={`w-full h-10 absolute rotate-y-180 -translate-z-25  flex items-center justify-center group-hover:shadow-lg transition-shadow duration-500 rounded-2xl`}
      ></div>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, ${color}, ${darkColor})`,
          boxShadow: `0px 0px 15px 0px ${color}`,
        }}
        className={`w-full h-10 absolute translate-x-25 rotate-y-90 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-500 rounded-2xl`}
      ></div>
      <div
        style={{
          backgroundImage: `linear-gradient(-90deg, ${color}, ${darkColor})`,
          boxShadow: `0px 0px 15px 0px ${color}`,
        }}
        className={`w-full h-10 absolute -translate-x-25 -rotate-y-90 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-500 rounded-2xl`}
      ></div>
      <div
        style={{
          backgroundImage: `linear-gradient(30deg, ${color}, ${darkColor})`,
          boxShadow: `0px 0px 15px 0px ${color}`,
        }}
        className={`text-8xl w-full h-full absolute -translate-y-25 rotate-x-90 flex flex-col items-center justify-center rounded-2xl`}
      >
        {icon()}
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, ${color}, ${darkColor})`,
          boxShadow: `0px 0px 15px 0px ${color}`,
        }}
        className={`w-full h-full absolute -translate-y-15 rotate-x-90 rounded-2xl`}
      ></div>
    </motion.div>
  );
};

export default Steak;
