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
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  EffectFade,
  EffectFlip,
  Navigation,
  Pagination,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-flip";
import TestCard from "./TestCard";

const tests = [
  {
    name: "swilam",
    image: "/assets/user.png",
    test: "انه حقا رائع لقد كنت اعاني من تساقط في شبكة الموقع ولكن بعد التجربه يستحق الشراء",
  },
  {
    name: "swilam",
    image: "/assets/user.png",
    test: "انه حقا رائع لقد كنت اعاني من تساقط في شبكة الموقع ولكن بعد التجربه يستحق الشراء",
  },
  {
    name: "swilam",
    image: "/assets/user.png",
    test: "انه حقا رائع لقد كنت اعاني من تساقط في شبكة الموقع ولكن بعد التجربه يستحق الشراء",
  },
  {
    name: "swilam",
    image: "/assets/user.png",
    test: "انه حقا رائع لقد كنت اعاني من تساقط في شبكة الموقع ولكن بعد التجربه يستحق الشراء",
  },
  {
    name: "swilam",
    image: "/assets/user.png",
    test: "انه حقا رائع لقد كنت اعاني من تساقط في شبكة الموقع ولكن بعد التجربه يستحق الشراء",
  },
];

const AboutPage = ({ progress }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(progress, [0.55, 1], [1, 0.5]);
  const borderRadius = useTransform(progress, [0.55, 1], ["0px", "500px"]);
  return (
    <motion.section
      className="flex flex-col items-center justify-center w-full min-h-[100vh] backdrop-blur-3xl z-20 relative top-0 py-20"
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
      <LampContainer className="[mask-image:linear-gradient(to_top,transparent,white_20%,white_80%,transparent)] relative sm:top-0 bottom-20 z-0">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center z-1"
      >
        {/* Vision */}
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white border-t border-l border-r border-primary rounded-2xl p-3">
            Vision
          </h2>
          <p className="border-b border-l border-r border-primary rounded-2xl p-5 text-base md:text-lg text-neutral-700 dark:text-neutral-200">
            At <span className="text-primary">DeverCrowd</span>, our vision is
            to become the go-to digital partner for ambitious brands, shaping
            the future of the web with innovation, creativity, and trust.
          </p>
        </div>

        {/* core values */}
        <div className="text-center flex flex-col items-center gap-4 ">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white border-t border-l border-r border-primary rounded-2xl p-3">
            Core Values
          </h2>
          <p className="border-b border-l border-r border-primary rounded-2xl p-5 text-base md:text-lg text-neutral-700 dark:text-neutral-200">
            We believe in integrity, innovation, teamwork, and a relentless
            pursuit of excellence. These values guide our mission and shape the
            way we serve our clients and community.
          </p>
        </div>
        {/* Mission */}
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white border-t border-l border-r border-primary rounded-2xl p-3">
            Mission
          </h2>
          <p className="border-b border-l border-r border-primary rounded-2xl p-5 text-base md:text-lg text-neutral-700 dark:text-neutral-200">
            Our mission is to empower startups and businesses crafting scalable,
            user-centric web solutions that transform ideas into real, impactful
            digital experiences.
          </p>
        </div>
      </motion.div>

      {/* <div className="w-full px-4 sm:px-6 flex flex-col items-center justify-center mt-15">
        <div className="h-[30vh] w-full flex justify-center items-center mb-20 overflow-x-hidden">
        <AutoScroll tests={tests} />
        </div>
        </div> */}
      <div className="w-full relative border-primary [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] mt-20">
        <H1 title="what client said" />
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Autoplay,
            EffectCube,
            EffectCoverflow,
            EffectFlip,
            EffectFade,
            FreeMode,
          ]}
          loop={true}
          spaceBetween={0}
          pagination={{ dynamicBullets: true, clickable: true }}
          effect="coverflow"
          autoplay={{ delay: 2000 }}
          freeMode={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={1}
          className="h-[300px] rounded-3xl p-9"
        >
          {tests.map((test, i) => (
            <SwiperSlide key={i} className="p-5">
              <TestCard {...test} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default AboutPage;
