import React from "react";
import Cube from "./Cube";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import { motion, useScroll, useTransform } from "motion/react";
import Lightning from "../ui/Lightning";
import Particles from "../ui/Particles";

const HomePage = ({ progress }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(progress, [0, 0.5], [1, 0.5]);
  const borderRadius = useTransform(progress, [0, 0.5], ["0px", "150px"]);
  return (
    <motion.section
      style={{ scale, boxShadow: `0px 0px 30px 0px #860cfa`, borderRadius }}
      id="home"
      className=" top-0 flex flex-col justify-center w-full overflow-hidden min-h-[100vh] select-none z-10 sticky rounded-4xl border"
    >
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Lightning hue={300} xOffset={-1.3} speed={0.5} intensity={0.5} size={3} />
      </div>
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
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

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center pt-20 pb-10">
        <div className="flex flex-col gap-6 sm:gap-5 md:gap-6 lg:gap-8 md:w-2/3 z-1 order-2 md:order-1">
          <h1 className=" text-white md:text-6xl text-3xl text-start font-extrabold ">
            Grow <span className="text-primary">Faster</span> With Smarter
            Digital Products
          </h1>
          <p className="text-white/60 text-start md:w-[70%] md:text-xl text-sm">
            We build high-performing websites and mobile apps that solve real
            problems, engage users, and grow your business.
          </p>
          <div className="md:border border-primary md:w-[70%]"></div>
          <Link
            href="#contact"
            className="group flex gap-4 border-t border-b rounded-full items-center w-[200px] sm:w-[250px] shadow-lg shadow-accent hover:shadow-primary hover:border-accent transition-all duration-300 hover:backdrop-blur-md backdrop-blur-sm"
          >
            <div className=" items-center justify-center rounded-full py-3 text-2xl bg-accent px-5 group-hover:bg-primary group-hover:px-8 transition-all duration-300">
              <FaEnvelope />
            </div>
            <div className="items-end justify-end text-end rounded-full text-sm md:text-lg group-hover:text-primary transition-all duration-300 ">
              Book A Call
            </div>
          </Link>
        </div>
        <div className="flex md:items-end md:justify-end md:w-1/3 z-0 order-1 md:order-2">
          <Cube
            initial={{ rotateX: -60 }}
            whileTap={{
              scale: 1.05,
            }}
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
