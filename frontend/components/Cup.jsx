"use client";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import Logo from "./Logo";
const Cup = () => {
  return (
    <motion.div
      initial={{
        rotateX: -30,
        rotateY: 30,
      }}
      animate={{
        rotateX: -30,
        transition: { duration: 0 },
      }}
      whileInView={{
        // rotateY: 390,
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 2.5,
        },
      }}
      className="absolute w-80 h-100 transform-3d select-none group font-extrabold"
    >
      <div
        className={`w-full h-full absolute bg-gray-800 rotate-y-90 translate-x-40 opacity-50 border-t-9 border-white`}
      ></div>
      <div
        className={`w-full h-full absolute bg-gray-500 rotate-y-90 -translate-x-40 opacity-50 border-t-9 border-white`}
      ></div>
      <div
        className={`w-full h-full absolute bg-gray-600 rotate-y-0 translate-z-40 opacity-50 border-t-9 border-white`}
      ></div>
      <div
        className={`w-full h-full absolute bg-gray-700 -translate-z-40 opacity-50 border-t-9 border-white`}
      ></div>
      {/* logos */}
      {/* logos */}
      {/* logos */}
      {/* <div
        className={`w-full h-20 absolute bg-white rotate-y-90 translate-x-40 opacity-50 border-t-9 border-white z-50 flex flex-col items-center justify-center text-sky-900`}
      >
        <Logo width={100} height={22} className="mix-blend-difference" />
        <p className="font-extrabold text-2xl">
          Dever<span className="text-sky-400">Crowd</span>{" "}
        </p>
      </div>
      <div
        className={`w-full h-20 absolute bg-white -rotate-y-90 -translate-x-40 opacity-50 border-t-9 border-white z-50 flex flex-col items-center justify-center text-sky-900`}
      >
        <Logo width={100} height={22} className="mix-blend-difference" />
        <p className="font-extrabold text-2xl">
          Dever<span className="text-sky-400">Crowd</span>{" "}
        </p>
      </div>
      <div
        className={`w-full h-20 absolute bg-white translate-z-40 opacity-50 border-t-9 border-white z-50 flex flex-col items-center justify-center text-sky-900`}
      >
        <Logo width={100} height={22} className="mix-blend-difference" />
        <p className="font-extrabold  text-2xl">
          Dever<span className="text-sky-400">Crowd</span>{" "}
        </p>
      </div>
      <div
        className={`w-full h-20 absolute bg-white rotate-y-180 -translate-z-40 opacity-50 border-t-9 border-white z-50 flex flex-col items-center justify-center text-sky-900`}
      >
        <Logo width={100} height={22} className="mix-blend-difference" />
        <p className="font-extrabold text-2xl">
          Dever<span className="text-sky-400">Crowd</span>{" "}
        </p>
      </div> */}
      {/* bottom */}
      {/* bottom */}
      {/* bottom */}
      <div
        className={`w-full h-80 absolute bg-white rotate-x-90 translate-y-60`}
      ></div>

      <div className="z-2"></div>
      <div className="z-1">
        <div className="z-3"></div>
      </div>
    </motion.div>
  );
};

export default Cup;
