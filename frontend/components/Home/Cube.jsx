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
    "absolute w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-t from-gray-800 to-gray-950 border-[10px] border-black rounded-3xl shadow-lg text-primary";

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
      className="relative transform-3d select-none font-extrabold"
    >
      {/* Front */}
      <div
        className={faceClass}
        style={{ transform: `translateZ(${half}px)` }}
      >
        <FaHandsHelping className="text-8xl" />
        <p className="uppercase text-4xl">Support</p>
      </div>

      {/* Back */}
      <div
        className={faceClass}
        style={{ transform: `translateZ(-${half}px) rotateY(180deg)` }}
      >
        <IoTerminal className="text-8xl" />
        <p className="uppercase text-4xl">Development</p>
      </div>

      {/* Right */}
      <div
        className={faceClass}
        style={{ transform: `translateX(${half}px) rotateY(90deg)` }}
      >
        <BsShieldLockFill className="text-8xl" />
        <p className="uppercase text-4xl">Security</p>
      </div>

      {/* Left */}
      <div
        className={faceClass}
        style={{ transform: `translateX(-${half}px) rotateY(-90deg)` }}
      >
        <MdDesignServices className="text-8xl" />
        <p className="uppercase text-4xl">Design</p>
      </div>

      {/* Top */}
      <div
        className="absolute w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-gray-950 to-gray-900 border-[10px] border-black rounded-3xl text-primary"
        style={{ transform: `translateY(-${half}px) rotateX(90deg)` }}
      >
        <Logo width={200} height={40} />
        <p className="text-3xl font-bold">
          Dever<span className="text-primary">Crowd</span>
        </p>
      </div>

      {/* Bottom */}
      <div
        className="absolute w-full h-full bg-black border-[10px] border-black rounded-3xl"
        style={{ transform: `translateY(${half}px) rotateX(90deg)` }}
      ></div>
    </motion.div>
  );
};

export default Cube;
