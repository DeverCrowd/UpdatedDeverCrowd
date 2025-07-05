"use client";
import Link from "next/link";
import Logo from "./Logo";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoLayers } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { useRef } from "react";

const Nav = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll()
  const pathLengthFirst = useTransform(scrollYProgress, [0, 1], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 1], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 1], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 1], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 1], [0, 1.2]);

  return (
    <nav
      style={{ borderRadius: "60px 60px 0px 0px" }}
      className="flex justify-between p- h-[47px] backdrop-blur-3xl transition-all duration-300 w-full border-r border-l border-primary"
    >
      <div className="absolute top-5 left-0 w-full z-0">
        <GoogleGeminiEffect
          className=""
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
      {/* left side */}
      <div className="flex items-center justify-around w-[35%] h-full border-b border-primary">
        <Link className="flex relative" href="#about">
          <div
            className={`hover:border-primary text-center rounded-full hover:text-primary transition-all duration-300 hover:scale-120 flex gap-2`}
          >
            <FaRegQuestionCircle className="text-xl" />
            About
          </div>
        </Link>

        <Link className="flex relative" href="#services">
          <div
            className={`hover:border-primary text-center rounded-full hover:text-primary transition-all duration-300 hover:scale-120 flex gap-2`}
          >
            <IoLayers className="text-xl" />
            Services
          </div>
        </Link>
      </div>
      {/* middile side */}
      <div
        style={{
          borderRadius: "0px 0px 40px 40px",
          boxShadow: "0px 7px 9px 0px #b60cfa",
        }}
        className="flex items-center justify-center absolute top-[30%] left-[43.2%] w-[14%] py-1 shadow-primary"
      >
        <Link href="/">
          <Logo width={100} height={32} />
        </Link>
      </div>
      {/* left side */}
      <div className="flex items-center justify-around w-[35%] h-full border-b border-primary">
        <Link className="flex relative" href="#works">
          <div
            className={`hover:border-primary text-center rounded-full hover:text-primary transition-all duration-300 hover:scale-120 flex gap-2`}
          >
            <FaFolderOpen className="text-xl" />
            Works
          </div>
        </Link>
        <Link className="flex relative" href="#contact">
          <div
            className={`hover:border-primary text-center rounded-full hover:text-primary transition-all duration-300 hover:scale-120 flex gap-2`}
          >
            <HiMail className="text-xl" />
            Contact Us
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
