"use client";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { GlobeDemo } from "../ui/GlobeDemo";
import { LampContainer } from "../ui/lamp";
import Particles from "../ui/Particles";
import { Spotlight } from "../ui/spotlight-new";
import CircularText from "../ui/CircularText";
import { MaskContainer } from "../ui/svg-mask-effect";
import SpotlightCard from "../ui/SpotlightCard";
import AchievementsCards from "./AchievementsCards";
import { SlScreenDesktop } from "react-icons/sl";
import { FaUsers } from "react-icons/fa6";
import { HiOutlineBadgeCheck } from "react-icons/hi";

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
      style={{ scale, boxShadow: `0px 0px 30px 0px #860cfa`, borderRadius }}
      className="flex flex-col items-center justify-center w-full min-h-screen backdrop-blur-2xl z-20 rounded-t-[60px] relative overflow-hidden"
      id="about"
    >
      <Spotlight />

      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#b60cfa", "#b60cfa"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Who We Are */}
<LampContainer className="[mask-image:linear-gradient(to_top,transparent,white_20%,white_80%,transparent)] z-10 w-full px-4 sm:px-6 md:px-8 py-12 md:py-20">
  {/* خلفية Particles */}
  <div className="absolute inset-0 z-0">
    <Particles
      particleColors={["#b60cfa", "#b60cfa"]}
      particleCount={200}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={50}
      moveParticlesOnHover={false}
      alphaParticles={true}
      disableRotation={false}
    />
  </div>

  {/* المحتوى داخل اللمبة */}
  <motion.div
    initial={{ opacity: 0.5, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
    className="flex flex-col items-center gap-6 w-full z-10"
  >
    {/* العنوان */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text text-center leading-tight">
      Who We Are?!
    </h1>

    {/* الكرت الخاص بالتعريف */}
    <SpotlightCard
      className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-full sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[60%] px-4"
      spotlightColor="rgba(128, 0, 128, 0.5)"
    >
      At <span className="text-primary">DeverCrowd</span>, we empower
      businesses with tailored digital solutions — from custom platforms
      to seamless experiences — turning ideas into strong online brands.
      We build lasting partnerships for digital growth.
    </SpotlightCard>
  </motion.div>
</LampContainer>

    

      {/* Vision / Mission / Globe */}
      <div className="w-full max-w-7xl px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center flex flex-col items-center gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Vision
          </h2>
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-200">
            At <span className="text-primary">DeverCrowd</span>, our vision is to become the go-to digital partner for ambitious brands, shaping the future of the web with innovation, creativity, and trust.
          </p>
        </motion.div>

        {/* Globe */}
        <div className="flex justify-center">
          <GlobeDemo />
        </div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center flex flex-col items-center gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Mission
          </h2>
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-200">
            Our mission is to empower startups and businesses crafting scalable, user-centric web solutions that transform ideas into real, impactful digital experiences.
          </p>
        </motion.div>
      </div>

      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center gap-6 px-4 sm:px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
          Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
          <MaskContainer revealText={<p className="font-bold text-slate-800 dark:text-white text-center">Professionalism</p>}>
            Quality work, done right.
          </MaskContainer>
          <MaskContainer revealText={<p className="font-bold text-slate-800 dark:text-white text-center">Transparency</p>}>
            Clear, honest communication.
          </MaskContainer>
          <MaskContainer revealText={<p className="font-bold text-slate-800 dark:text-white text-center">Creativity</p>}>
            Smart, fresh ideas.
          </MaskContainer>
          <MaskContainer revealText={<p className="font-bold text-slate-800 dark:text-white text-center">Commitment</p>}>
            Fully dedicated, always.
          </MaskContainer>
        </div>
      </motion.div>

      {/* CircularText */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 my-16 w-full">
        <div className="w-32 sm:w-40">
          <CircularText text="011010*011010*011010*" onHover="slowDown" spinDuration={30} />
        </div>
        <div className="w-32 sm:w-40">
          <CircularText text="011010*011010*011010*" onHover="slowDown" spinDuration={30} />
        </div>
      </div>

      {/* Achievements */}
      <motion.div
        className="w-full max-w-7xl px-4 sm:px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-5xl pb-5 text-center font-bold text-black dark:text-white"
          variants={cardVariants}
        >
          Our Achievements
          <div className="w-24 h-1 bg-primary mx-auto mt-2" />
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-10 pt-6 flex-wrap"
          variants={containerVariants}
        >
          {achievementsCards.map((card, id) => (
            <motion.div key={id} variants={cardVariants}>
              <AchievementsCards
                title={card.title}
                icon={card.icon}
                num={card.num}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutPage;
