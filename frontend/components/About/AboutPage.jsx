"use client";
import Steak from "../Services/Steak";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import BlurText from "../ui/BlurText";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { GlobeDemo } from "../ui/GlobeDemo";
import { LampContainer } from "../ui/lamp";
import Particles from "../ui/Particles";
import { Spotlight } from "../ui/spotlight-new";
import CircularText from "../ui/CircularText";
import Ribbons from "../ui/Ribbons";
import { MaskContainer } from "../ui/svg-mask-effect";
import ScrambledText from "../ui/ScrambledText";
import { TextShimmerWave } from "../ui/text-shimmer-wave";
import SpotlightCard from "../ui/SpotlightCard";

const AboutPage = ({ progress }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(progress, [0.55, 1], [1, 0.5]);
  const opacity = useTransform(progress, [0.51, 1], [1, 0]);
  const borderRadius = useTransform(progress, [0.55, 1], ["0px", "500px"]);

  return (
    <motion.section
      style={{ scale, boxShadow: `0px 0px 30px 0px #860cfa`, borderRadius }}
      className="flex flex-col items-center justify-center w-full min-h-[100vh] backdrop-blur-2xl z-20 rounded-t-[120px] relative top-0 "
      id="about"
    >
      <Spotlight />
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
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
      <LampContainer className="[mask-image:linear-gradient(to_top,transparent,white_20%,white_80%,transparent)]">
        <div style={{ width: "100%", height: "100%", position: "absolute" }}>
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
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <h1 className="mt-8 bg-gradient-to-br from-purple-300 to-purple-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Who We Are?!
          </h1>
          <SpotlightCard
            className="w-[60%] text-3xl text-center"
            spotlightColor="rgba(128, 0, 128, 0.5)"
          >
            At <span className="text-primary">DeverCrowd</span> we empower businesses with tailored digital solutions
            - from custom platforms to seamless experiences - turning ideas into
            strong online brands. We build lasting partnerships for digital
            growth
          </SpotlightCard>
        </motion.div>
      </LampContainer>
      <div className="min-h-screen flex flex-col items-center">
        <div className="w-[90%] grid grid-cols-3  items-center">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            className=" flex flex-col w-full items-center text-center justify-start p-9 gap-7 "
          >
            <h2 className=" text-xl md:text-7xl font-bold text-black dark:text-white w-[50%]">
              Vision
            </h2>
            <p className=" text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200">
              At <span className="text-primary">DeverCrowd</span>, our vision is
              to become the go-to digital partner for ambitious brands, shaping
              the future of the web with innovation, creativity, and trust
            </p>
          </motion.div>
          <GlobeDemo />
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            className=" flex flex-col w-full items-center text-center justify-start p-9 gap-7"
          >
            <h2 className=" text-xl md:text-7xl font-bold text-black dark:text-white w-[50%]">
              Mission
            </h2>
            <p className=" text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 ">
              Our mission is to empower startups and businesses crafting
              scalable, user-centric web solutions that transform ideas into
              real, impactful digital experiences
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            className=" flex flex-col w-full col-start-1 col-end-4 p-9 gap-7 items-center text-center"
          >
            <h2 className=" text-xl md:text-7xl font-bold text-black dark:text-white ">
              Core Values
            </h2>
            <div className="grid grid-cols-2">
              <MaskContainer
                revealText={
                  <p className=" text-center font-bold text-slate-800 dark:text-white">
                    Professionalism
                  </p>
                }
                className="rounded-md text-black "
              >
                Quality work, done right.
              </MaskContainer>
              <MaskContainer
                revealText={
                  <p className=" text-center font-bold text-slate-800 dark:text-white">
                    Transparency
                  </p>
                }
                className="rounded-md text-white dark:text-black "
              >
                Clear, honest communication.
              </MaskContainer>
              <MaskContainer
                revealText={
                  <p className=" text-center font-bold text-slate-800 dark:text-white">
                    Creativity
                  </p>
                }
                className="rounded-md text-white dark:text-black "
              >
                Smart, fresh ideas.
              </MaskContainer>
              <MaskContainer
                revealText={
                  <p className=" text-center font-bold text-slate-800 dark:text-white">
                    Commitment
                  </p>
                }
                className="rounded-md text-white dark:text-black"
              >
                Fully dedicated, alwayes
              </MaskContainer>
            </div>
          </motion.div>
        </div>
        <div className="flex items-center justify-between w-[90%]">
          <div className="w-[20%]">
            <CircularText
              text="011010*011010*011010*"
              onHover="slowDown"
              spinDuration={30}
              className=""
            />
          </div>
          <div className="w-[20%]">
            <CircularText
              text="011010*011010*011010*"
              onHover="slowDown"
              spinDuration={30}
              className=""
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
