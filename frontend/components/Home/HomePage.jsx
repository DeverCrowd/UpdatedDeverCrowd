import React, { useEffect, useState } from "react";
import Cube from "./Cube";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { motion, useScroll, useTransform } from "motion/react";
import Particles from "../ui/Particles";
import CountUp from "../ui/CountUp";
import H1 from "../ui/H1";
import Image from "next/image";

const HomePage = ({ progress }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(progress, [0, 0.5], [1, 0.5]);
  const borderRadius = useTransform(progress, [0, 0.5], ["0px", "1000px"]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setInnerWidth(window.innerWidth);
      setIsMobile(width <= 480 && width >= 320);
      setIsTablet(width >= 480 && width <= 768);
      setIsLaptop(width >= 768 && width <= 1640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <motion.section
      style={{ borderRadius, scale, boxShadow: `0px 0px 30px 0px #1E3A8A` }}
      id="home"
      className="top-0 flex flex-col justify-center items-center w-full overflow-hidden min-h-screen select-none z-10 sticky rounded-4xl"
    >
      <Image
        src="/bgs/bg13.jpg"
        fill
        quality={100}
        alt="bg"
        className="object-cover sticky top-0 z-0"
      />
      {/* Background Particles */}
      <div className="absolute inset-0">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-9 sm:p-16 p-4 z-1">
        <h1 className="text-white lg:text-6xl text-3xl font-extrabold text-center xl:w-[60%] w-[100%]">
          Grow <span className="text-primary">Faster</span> With Smarter Digital
          Products
        </h1>
        <p className="text-white/60 text-center lg:text-lg text-sm xl:w-[40%] w-[100%]">
          We build high-performing websites and mobile apps that solve real
          problems, engage users, and grow your business.
        </p>
        <div className="border border-primary w-full lg:w-[50%]"></div>
        {/* Achievements */}
        <div className="lg:w-[50%] w-full flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm sm:text-base w-full h-full">
            {[
              { to: 11, label: "Projects" },
              { to: 9, label: "Customer" },
              { to: 5, label: "Experience" },
              { to: 3, label: "Industry" },
            ].map(({ to, label }, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-2 sm:gap-3 w-[45%] sm:w-[20%] h-[100] bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-4 sm:p-6 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
              >
                <span className="text-white/70 text-sm sm:text-base tracking-wide">
                  {label}
                </span>
                <CountUp
                  from={0}
                  to={to}
                  duration={1.5}
                  separator=","
                  className="text-2xl sm:text-4xl font-bold text-[#0c9aff]"
                />
                {label == "Experience" && (
                  <p className="absolute bottom-5 right-10 text-white/50">
                    yrs
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <Link
          href="#contact"
          className="group flex gap-4 border-t border-b rounded-full items-center w-[200px] sm:w-[250px] shadow-lg shadow-accent hover:shadow-primary hover:border-accent transition-all duration-300 hover:backdrop-blur-md backdrop-blur-sm"
        >
          <div className="items-center justify-center rounded-full py-3 text-2xl px-5 bg-primary group-hover:px-8 transition-all duration-300">
            <FaEnvelope />
          </div>
          <div className="text-sm lg:text-lg group-hover:text-primary transition-all duration-300">
            Book A Call
          </div>
        </Link>

        {/* Right Side: Cube */}
        {/* <div
          className="hidden absolute top-[60%] left-25 lg:top-0 lg:right-0 lg:relative z-0 lg:flex justify-center order-2 lg:w-1/4
        "
        >
          <Cube
            cubeSize={200}
            initial={{ rotateX: -60 }}
            whileTap={{ scale: 1.05 }}
            whileInView={{
              rotateX: -30,
              transition: { duration: 3 },
            }}
            animate={{
              rotateY: 360,
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
        </div> */}
      </div>
    </motion.section>
  );
};

export default HomePage;
