"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMeasure } from "@uidotdev/usehooks";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import TestCard from "./TestCard";
import { animate } from "motion";
const AutoScroll = ({ tests }) => {
  const [isHover, setHover] = useState(false);
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 40;
    controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTranslation, width]);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className=" w-full h-full mx-auto flex overflow-hidden  items-center [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
    >
      <motion.div style={{ x: xTranslation }} ref={ref} className="flex gap-20">
        {[...tests, ...tests].map((test, i) => {
          return <TestCard key={i} {...test} />;
        })}
      </motion.div>
    </div>
  );
};

export default AutoScroll;
