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
      <header className="hidden md:flex fixed z-50 items-center left-[15%] w-[70%]">
        <Nav />
      </header>
      <div className="md:hidden fixed top-0 left-0 w-full  backdrop-blur-md z-50 p-4 flex justify-between items-center shadow-xl shadow-accent rounded-full">
        <Link href="/">
          <Logo width={100} height={100} />
        </Link>
        <MobileNav />
      </div>
    </>
  );
};

export default Header;
