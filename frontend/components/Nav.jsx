"use client";
import Link from "next/link";
import Logo from "./Logo";

import { HiMail } from "react-icons/hi";
import {

  useScroll,
} from "motion/react";


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

        {[
          { href: "/#about", label: "About Us" },
          // { href: "/#services", label: "Services" },
          { href: "/works", label: "Our Works" },
        ].map(({ href, label }, i) => (
          <Link key={i} className="flex relative" href={href}>
            <div className="hover:border-primary text-center rounded-sm hover:text-primary transition-all duration-300 hover:scale-105 flex gap-2 border-l border-r px-3 border-primary hover:shadow-md shadow-primary">
              {label}
            </div>
          </Link>
        ))}
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
