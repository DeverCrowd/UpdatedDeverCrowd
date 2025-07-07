"use client";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { useRef } from "react";

const Header = () => {
  return (
    <>
      <header className="xl:flex fixed z-50 items-center sm:left-[25%] sm:w-[50%] lg:left-[30%] lg:w-[40%] xl:left-[37.5%] xl:w-[25%] w-full top-5">
        <Nav />
      </header>
    </>
  );
};

export default Header;
