"use client";
import { motion } from "motion/react";
import Logo from "../Logo";
import { MdDesignServices } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";
import { BsShieldLockFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";

const Cube = ({ whileTap, whileInView, animate, initial, style }) => {
  const cubeSize = 350;
  const half = cubeSize / 2;

  const faceClass =
    "absolute w-full h-full flex flex-col items-center justify-center gap-4 rounded-[inherit] overflow-hidden bg-gradient-to-t from-gray-800 to-gray-950 border-[10px] border-black shadow-lg text-primary backface-hidden";

  return (
    <motion.div
      style={{
        width: cubeSize,
        height: cubeSize,
        ...style,
      }}
      whileTap={whileTap}
      whileInView={whileInView}
      animate={animate}
      initial={initial}
      className="relative transform-3d select-none font-extrabold rounded-3xl"
    >
      {/* Front */}
      <div
        className={faceClass}
        style={{ transform: `translateZ(${half}px)` }}
      >
        <FaHandsHelping className="text-7xl" />
        <p className="uppercase text-3xl">Support</p>
      </div>

      {/* Back */}
      <div
        className={faceClass}
        style={{ transform: `translateZ(-${half}px) rotateY(180deg)` }}
      >
        <IoTerminal className="text-7xl" />
        <p className="uppercase text-3xl">Development</p>
      </div>

      {/* Right */}
      <div
        className={faceClass}
        style={{ transform: `translateX(${half}px) rotateY(90deg)` }}
      >
        <BsShieldLockFill className="text-7xl" />
        <p className="uppercase text-3xl">Security</p>
      </div>

      {/* Left */}
      <div
        className={faceClass}
        style={{ transform: `translateX(-${half}px) rotateY(-90deg)` }}
      >
        <MdDesignServices className="text-7xl" />
        <p className="uppercase text-3xl">Design</p>
      </div>

      {/* Top */}
      <div
        className="absolute w-full h-full flex flex-col items-center justify-center gap-2 rounded-[inherit] overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900 border-[10px] border-black shadow-xl"
        style={{ transform: `translateY(-${half}px) rotateX(90deg)` }}
      >
        <Logo width={300} height={30} className="xl:w-[90%]"/>
        <p className="text-3xl font-bold">
          Dever<span className="text-primary">Crowd</span>
        </p>
      </div>

      {/* Bottom */}
      <div
        className="absolute w-full h-full bg-black rounded-[inherit] overflow-hidden border-[10px] border-black shadow-lg"
        style={{ transform: `translateY(${half}px) rotateX(-90deg)` }}
      />
    </motion.div>
  );
};

export default Cube;
