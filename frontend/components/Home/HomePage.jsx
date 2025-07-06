import React from "react";
import Cube from "./Cube";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { motion, useScroll, useTransform } from "motion/react";
import Particles from "../ui/Particles";

const HomePage = ({ progress }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(progress, [0, 0.5], [1, 0.5]);
  const borderRadius = useTransform(progress, [0, 0.5], ["0px", "150px"]);

  return (
    <motion.section
      style={{ scale, boxShadow: `0px 0px 30px 0px #860cfa`, borderRadius }}
      id="home"
      className="top-0 flex flex-col justify-center xl:w-full items-center  overflow-hidden min-h-[105vh] select-none z-10 sticky rounded-4xl border "
    >
      {/* Background Particles */}
      <div className="absolute inset-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto flex flex-col-reverse md:flex-row items-center justify-center xl:justify-between gap-12 sm:gap-16 lg:gap-20 px-6 sm:px-8 lg:px-25 pt-20 pb-10">
        {/* Left Side: Text */}
        <div className="relative bottom-50 xl:bottom-0 flex flex-col gap-6 sm:gap-5 md:gap-6 lg:gap-8 w-full xl:w-2/3 order-2 md:order-1 z-1">
          <h1 className="text-white md:text-5xl text-3xl text-start font-extrabold">
            Grow <span className="text-primary">Faster</span> With Smarter
            Digital Products
          </h1>
          <p className="text-white/60 text-start md:text-lg text-sm max-w-[90%] md:max-w-[70%]">
            We build high-performing websites and mobile apps that solve real
            problems, engage users, and grow your business.
          </p>
          <div className="border border-primary w-full md:w-[70%]"></div>

          <Link
            href="#contact"
            className="group flex gap-4 border-t border-b rounded-full items-center w-[200px] sm:w-[250px] shadow-lg shadow-accent hover:shadow-primary hover:border-accent transition-all duration-300 hover:backdrop-blur-md backdrop-blur-sm"
          >
            <div className="items-center justify-center rounded-full py-3 text-2xl bg-accent px-5 group-hover:bg-primary group-hover:px-8 transition-all duration-300">
              <FaEnvelope />
            </div>
            <div className="text-sm md:text-lg group-hover:text-primary transition-all duration-300">
              Book A Call
            </div>
          </Link>
        </div>

        {/* Right Side: Cube */}
        <div className="absolute top-[60%] right-50 xl:top-0 xl:right-0 xl:relative z-0 xl:flex justify-center md:justify-end w-full md:w-1/3 order-1 md:order-2">
          <Cube
          cubeSize={300}
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
        </div>
      </div>
    </motion.section>
  );
};

export default HomePage;
