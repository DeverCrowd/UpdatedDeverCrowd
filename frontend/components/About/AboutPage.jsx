"use client";
import { motion } from "motion/react";
import { Spotlight } from "../ui/spotlight-new";
import { LampContainer } from "../ui/lamp";
import H1 from "../ui/H1";
import TestCard from "./TestCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const tests = [
  {
    name: "swilam",
    image: "/icons/user.webp",
    test: "انه حقا رائع لقد كنت اعاني من تساقط في شبكة الموقع ولكن بعد التجربه يستحق الشراء",
  },
  {
    name: "swilam",
    image: "/icons/user.webp",
    test: "انه حقا رائع لقد كنت اعاني من تساقط في شبكة الموقع ولكن بعد التجربه يستحق الشراء",
  },
  {
    name: "swilam",
    image: "/icons/user.webp",
    test: "انه حقا رائع لقد كنت اعاني من تساقط في شبكة الموقع ولكن بعد التجربه يستحق الشراء",
  },
  {
    name: "swilam",
    image: "/icons/user.webp",
    test: "انه حقا رائع لقد كنت اعاني من تساقط في شبكة الموقع ولكن بعد التجربه يستحق الشراء",
  },
  {
    name: "swilam",
    image: "/icons/user.webp",
    test: "انه حقا رائع لقد كنت اعاني من تساقط في شبكة الموقع ولكن بعد التجربه يستحق الشراء",
  },
];
const vmcs = [
  {
    title: "Vision",
    icon: <span role="img" aria-label="globe">🌐</span>
,
    desc: (
      <>
        At <span className="text-blue-500 font-semibold">DeverCrowd</span>, our
        vision is to become the go-to digital partner for ambitious brands,
        shaping the future of the web with innovation, creativity, and trust.
      </>
    ),
  },
  {
    title: "Core Values",
    icon: <span role="img" aria-label="globe">💎</span>,
    desc: (
      <>
        Integrity, innovation, and teamwork fuel everything we do — guiding how
        we work, deliver, and grow with our clients.
      </>
    ),
  },
  {
    title: "Mission",
    icon: <span role="img" aria-label="globe">🚀</span>,
    desc: (
      <>
        We empower startups and businesses by building scalable, user-centric
        solutions that transform ideas into real digital impact.
      </>
    ),
  },
];
const AboutPage = ({ progress }) => {
  return (
    <motion.section
      className="flex flex-col justify-center items-center w-full overflow-hidden min-h-screen select-none z-20 backdrop-blur-3xl"
      id="about"
    >
      {/* <Spotlight /> */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "50",
        }}
      ></div>
      <LampContainer className="[mask-image:linear-gradient(to_top,transparent,white_20%,white_100%,transparent)] min-h-screen flex flex-col items-center justify-center ">
        <h1 className="text-center font-extrabold text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text tracking-tight leading-tight drop-shadow-[0_2px_20px_rgba(59,130,246,0.5)] ">
          Who We Are?!
        </h1>

        <p
          className="bg-white/5 border border-blue-500/10 rounded-3xl backdrop-blur-xl px-8 max-w-3xl text-center shadow-[0_0_40px_rgba(59,130,246,0.1)] transition hover:shadow-blue-500/20 text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed font-light mt-9"
          style={{
            boxShadow: "9px 9px 10px 0px #1E3A8A",
            borderRadius: "0px 50px 0px 50px",
          }}
        >
          At <span className="text-primary font-semibold">DeverCrowd</span>,
          we're more than developers — we're partners in innovation. From
          concept to code, we design and engineer seamless digital experiences
          that grow with your business. Whether it's a product, platform, or
          complete ecosystem — we make it real.
        </p>
      </LampContainer>
      {/* Vision / Mission / core value */}
      <motion.div className="w-full max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {vmcs.map((item, i) => (
          <div
            key={i}
            className="group relative flex flex-col items-center text-center rounded-3xl p-6 bg-gradient-to-b from-white/5 to-white/0 border border-blue-500/20 backdrop-blur-md overflow-hidden transition duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            {/* Glow circle background */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-blue-500/10 rounded-full blur-2xl group-hover:scale-110 transition" />

            {/* Icon */}
            <div className="relative z-10 w-14 h-14 mb-4 flex items-center justify-center rounded-full border border-blue-500/30 bg-white/10 text-blue-400 text-2xl shadow-lg backdrop-blur-sm group-hover:scale-105 transition">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-xl md:text-2xl font-semibold text-blue-300 tracking-wide mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-sm md:text-base text-white/90 leading-relaxed font-light tracking-wide">
              {item.desc}
            </p>

            {/* Glow border bottom on hover */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
          </div>
        ))}
      </motion.div>

      <div id="swiper" className="w-full relative border-primary [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] mt-20 z-50 border">
        <H1 title="what client said" />
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Autoplay,
            EffectCoverflow,
          ]}
          loop={true}
          spaceBetween={0}
          pagination={{ dynamicBullets: true, }}
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
              slidesPerView: 3,
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
