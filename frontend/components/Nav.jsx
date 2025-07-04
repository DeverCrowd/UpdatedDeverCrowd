"use client";
import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import NavButton from "./NavButton";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useState } from "react";
import { delay } from "motion";
import { Hash } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { FaEnvelope } from "react-icons/fa";
import {
  TooltipTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

const links = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Works",
    link: "#works",
  },
];
const Nav = () => {
  const [isHover, setHover] = useState(true);

  return (
    <motion.nav
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => delay(() => setHover(true), 0)}
      animate={{
        width: isHover ? 650 : 560,
        transition: { duration: 0.5, ease: "linear" },
      }}
      className="rounded-full border-1 hover:border-primary my-9 flex justify-between gap-5 p-4 shadow-md shadow-primary backdrop-blur-2xl transition-all duration-300 hover:shadow-primary hover:shadow-lg w-[650px]"
    >
      {/* logo */}
      <Link href="/">
        <Logo width={100} height={32} />
      </Link>
      {/* taps */}
      <ul className="flex items-center justify-center gap-6 group ">
        {links.map((item, index) => {
          return (
            <Link className="flex relative" key={index} href={item.link}>
              <motion.div
                animate={{
                  x: isHover ? 0 : -(index * 95) + 1,
                  opacity: isHover ? 1 : (5 - index) * 0.2,
                  zIndex: links.length - index,
                }}
                transition={{ duration: 0.5, ease: "linear" }}
                className={`hover:border-primary text-center rounded-full hover:text-primary transition-all duration-300 hover:scale-120 `}
              >
                {item.name}
              </motion.div>
            </Link>
          );
        })}
      </ul>
      {/* buttons */}
      <Link
        href="#contact"
        className=" rounded-full text-2xl items-center justify-center flex"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-pointer hover:text-primary transition-colors duration-300">
              <FaEnvelope />
            </TooltipTrigger>
            <TooltipContent>Contact Us</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    </motion.nav>
  );
};

export default Nav;
