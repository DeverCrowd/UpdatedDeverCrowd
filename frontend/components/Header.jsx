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

const Header = () => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
 
  return (
    <>
      <header className="hidden md:flex fixed top-0 left-[50%] -translate-x-[50%] z-50 w- items-center justify-center">
        <motion.div
          style={{ width }}
          className="flex fixed top-[20%] bg-primary h-1 rounded-full w-full"
        ></motion.div>
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
