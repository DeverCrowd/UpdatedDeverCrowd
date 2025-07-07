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
  const { scrollYProgress } = useScroll();
  return (
    <nav
      style={{ borderRadius: "100px 100px 100px 100px" }}
      className="flex items-center justify-between h-[47px] backdrop-blur-3xl border border-primary hover:shadow-lg shadow-md shadow-primary w-full transition-all duration-300"
    >
      <div className="flex items-center justify-around w-[100%] h-full ">
        <Link href="/">
          <Logo width={96} height={32} />
        </Link>

        <Link className="flex relative" href="/#about">
          <div
            className={`hover:border-primary text-center rounded-full hover:text-primary transition-all duration-300 hover:scale-105 flex gap-2`}
          >
            {/* <FaRegQuestionCircle className="text-xl" /> */}
            About
          </div>
        </Link>
        <Link className="flex relative" href="/#services">
          <div
            className={`hover:border-primary text-center rounded-full hover:text-primary transition-all duration-300 hover:scale-105 flex gap-2`}
          >
            {/* <FaRegQuestionCircle className="text-xl" /> */}
            Services
          </div>
        </Link>

        <Link className="flex relative" href="/works">
          <div
            className={`hover:border-primary text-center rounded-full hover:text-primary transition-all duration-300 hover:scale-105 flex gap-2`}
          >
            {/* <FaFolderOpen className="text-xl" /> */}
            Works
          </div>
        </Link>
        <Link className="flex relative" href="/#contact">
          <div
            className={`hover:border-primary text-center rounded-full hover:text-primary transition-all duration-300 hover:scale-105 flex gap-2`}
          >
            <HiMail className="text-4xl text-primary" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
