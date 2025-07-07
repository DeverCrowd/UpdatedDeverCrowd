"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { motion } from "framer-motion";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <motion.button
        className={`${btnStyles} rounded-full`}
        onClick={() => swiper.slidePrev()}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
            scale:0.9
        }}
        transition={{
          duration: 0.05,
        }}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </motion.button>
      <motion.button
        className={`${btnStyles} rounded-full`}
        onClick={() => swiper.slideNext()}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
            scale:0.9
        }}
        transition={{
          duration: 0.05,
        }}
      >
        <PiCaretRightBold className={iconsStyles} />
      </motion.button>
    </div>
  );
};

export default WorkSliderBtns;
