"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { LampContainer } from "../ui/lamp";
import Particles from "../ui/Particles";
import { Spotlight } from "../ui/spotlight-new";
import { SlScreenDesktop } from "react-icons/sl";
import { FaUsers } from "react-icons/fa6";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import AutoScroll from "../About/AutoScroll";

import H1 from "../ui/H1";

const tests = [
  {
    name: "swilam",
    image: "/assets/user.png",
    test: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem voluptatem unde iusto quos ut delectus blanditiis,",
  },
  {
    name: "swilam",
    image: "/assets/user.png",
    test: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem voluptatem unde iusto quos ut delectus blanditiis,",
  },
  {
    name: "swilam",
    image: "/assets/user.png",
    test: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem voluptatem unde iusto quos ut delectus blanditiis,",
  },
  {
    name: "swilam",
    image: "/assets/user.png",
    test: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem voluptatem unde iusto quos ut delectus blanditiis,",
  },
  {
    name: "swilam",
    image: "/assets/user.png",
    test: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem voluptatem unde iusto quos ut delectus blanditiis,",
  },
];
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const achievementsCards = [
  { title: "Projects", icon: <SlScreenDesktop />, num: 10 },
  { title: "Customers", icon: <FaUsers />, num: 25 },
  { title: "Experience", icon: <HiOutlineBadgeCheck />, num: 5 },
];

const AboutPage = ({ progress }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(progress, [0.55, 1], [1, 0.5]);
  const borderRadius = useTransform(progress, [0.55, 1], ["0px", "500px"]);

  return (
    <motion.section
      className="flex flex-col items-center justify-center w-full min-h-[100vh] backdrop-blur-2xl z-20  relative top-0 rounded-4xl py-9"
      id="about"
    >
      <Spotlight />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "50",
        }}
      >
        <Particles
          particleColors={["#3B82F6"]}
          particleCount={30}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <LampContainer className="[mask-image:linear-gradient(to_top,transparent,white_20%,white_80%,transparent)] px-4 md:px-8 relative 2xs:top-20">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center justify-center gap-5 "
        >
          <h1 className="bg-gradient-to-br from-blue-300 to-blue-500 bg-clip-text text-transparent text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight">
            Who We Are?!
          </h1>

          <p
            className="relative overflow-hidden rounded-2xl w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-md p-2 sm:text-xl md:text-2xl lg:text-3xl text-center"
            style={{
              boxShadow: "9px 9px 10px 0px #1E3A8A",
              borderRadius: "0px 50px 0px 50px",
            }}
          >
            At <span className="text-primary">DeverCrowd</span>, we empower
            businesses with tailored digital solutions – from custom platforms
            to seamless experiences – turning ideas into strong online brands.
            We build lasting partnerships for digital growth.
          </p>
        </motion.div>
      </LampContainer>
      {/* Vision / Mission / Globe */}
      <div className="w-full max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center flex flex-col items-center gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white border-t border-l border-r border-primary rounded-2xl p-3">
            Vision
          </h2>
          <p className="border-b border-l border-r border-primary rounded-2xl p-5 text-base md:text-lg text-neutral-700 dark:text-neutral-200">
            At <span className="text-primary">DeverCrowd</span>, our vision is
            to become the go-to digital partner for ambitious brands, shaping
            the future of the web with innovation, creativity, and trust.
          </p>
        </motion.div>

        {/* core values */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center flex flex-col items-center gap-4 "
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white border-t border-l border-r border-primary rounded-2xl p-3">
            Core Values
          </h2>
          <p className="border-b border-l border-r border-primary rounded-2xl p-5 text-base md:text-lg text-neutral-700 dark:text-neutral-200">
            We believe in integrity, innovation, teamwork, and a relentless
            pursuit of excellence. These values guide our mission and shape the
            way we serve our clients and community.
          </p>
        </motion.div>
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center flex flex-col items-center gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white border-t border-l border-r border-primary rounded-2xl p-3">
            Mission
          </h2>
          <p className="border-b border-l border-r border-primary rounded-2xl p-5 text-base md:text-lg text-neutral-700 dark:text-neutral-200">
            Our mission is to empower startups and businesses crafting scalable,
            user-centric web solutions that transform ideas into real, impactful
            digital experiences.
          </p>
        </motion.div>

      </div>

      <div className="w-full px-4 sm:px-6 flex flex-col items-center justify-center">
        <H1 title="what client said" />
        <div className="h-[30vh] w-full flex justify-center items-center mb-20 overflow-x-hidden">
          <AutoScroll tests={tests} />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
