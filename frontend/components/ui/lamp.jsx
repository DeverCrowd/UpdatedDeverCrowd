"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-start overflow-hidden bg-gray-950 w-full rounded-md z-0",
        "min-h-[70vh] md:min-h-screen",
        className
      )}
    >
      {/* Lamp Effects (Glow + Circle) */}
      <div className="relative w-full flex flex-col items-center justify-center pt-24 sm:pt-32 md:pt-40 lg:pt-52">
        {/* Left glow */}
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute right-1/2 h-32 sm:h-48 w-[16rem] sm:w-[24rem] bg-gradient-conic from-purple-500 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        />

        {/* Right glow */}
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute left-1/2 h-32 sm:h-48 w-[16rem] sm:w-[24rem] bg-gradient-conic from-transparent via-transparent to-purple-500 [--conic-position:from_290deg_at_center_top]"
        />

        {/* Glow circle */}
        <motion.div
          initial={{ width: "5rem" }}
          whileInView={{ width: "12rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="relative z-30 h-24 sm:h-36 w-40 sm:w-64 rounded-full bg-purple-400 blur-2xl"
        />

        {/* Top beam line */}
        <motion.div
          initial={{ width: "12rem" }}
          whileInView={{ width: "24rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="relative z-50 mt-4 h-0.5 bg-purple-400"
        />
      </div>

      {/* Actual Content */}
      <div className="relative z-50 flex flex-col items-center justify-center px-5 pt-12 sm:pt-16 md:pt-20 text-center w-full max-w-6xl">
        {children}
      </div>
    </div>
  );
};
