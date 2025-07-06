"use client";
import {
  TooltipTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { FaEnvelope } from "react-icons/fa";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Services",
    path: "#services",
  },
  {
    name: "Works",
    path: "#works",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet
     open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-primary" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="border-l border-primary font-pixel justify-around backdrop-blur-md bg-[rgba(255, 255, 255, 0.6)]"
      >
        <VisuallyHidden>
          <SheetTitle>Mobile Menu</SheetTitle>
        </VisuallyHidden>
        <div className="flex justify-center items-center h-1/3">
          {/* Logo */}
          <Link href="/" className="flex flex-col justify-center items-center">
            <Logo width={200} height={100} />
            <p className="font-extrabold text-3xl">
              Dever<span className="text-primary">Crowd</span>{" "}
            </p>
          </Link>
        </div>
        <nav className="flex flex-col space-y-4 text-center items-center justify-center h-1/3">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`capitalize px-4 py-2 text-white transition-all duration-200 justify-center
                ${
                  link.path === pathname
                    ? "bg-primary text-primary border-t-3 border-l-3 border-t-primary border-l-primary"
                    : "hover:text-primary"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-center h-1/3">
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
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
