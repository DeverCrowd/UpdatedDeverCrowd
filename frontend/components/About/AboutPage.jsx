"use client";
import Steak from "../Services/Steak";
import AutoScroll from "./AutoScroll";
import AchievementsCards from "./AchievementsCards"
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import Card from "./Card";
import { TbTargetArrow } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";
import { SiThunderstore } from "react-icons/si";
import { SlScreenDesktop } from "react-icons/sl";
import { RiNumbersLine } from "react-icons/ri";
import { IoBulbOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";




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

const cards = [
  {
    text: "Mission",
    icon: <TbTargetArrow />,
    desc: "Our mission is to empower startups and businesses by crafting scalable, user-centric web solutions that transform ideas into real, impactful digital experiences.",
  },
  {
    text: "Vision",
    icon: <IoEyeOutline />,
    desc: "At DeverCrowd, our vision is to become the go-to digital partner for ambitious brands, shaping the future of the web with innovation, creativity, and trust.",
  },
  {
    text: "Core Values",
    icon: <SiThunderstore />,
    desc: (
      <>
        - Professionalism: Quality work, done right.
        <br />
        - Transparency: Clear, honest communication.
        <br />
        - Creativity: Smart, fresh ideas.
        <br />- Commitment: Fully dedicated, always.
      </>
    ),
  },
];
const achievementsCards = [
  { icon: <SlScreenDesktop/>, title: "Projects", num: 1 },
  { icon: <FaUsers/>, title: "Customers", num: 1 },
  { icon: <RiNumbersLine/>, title: "Experience", num: 1 },
];
const AboutPage = ({ progress }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(progress, [0.55, 1], [1, 0.5]);
  const opacity = useTransform(progress, [0.51, 1], [1, 0]);
  const borderRadius = useTransform(progress, [0.55, 1], ["0px", "500px"]);

  return (
    <motion.section
      style={{ scale, boxShadow: `0px 0px 30px 0px #860cfa`, borderRadius }}
      className="flex flex-col items-center justify-center w-full min-h-[100vh] backdrop-blur-2xl z-20 rounded-t-[120px] relative top-0"
      id="about"
    >
      <div className="my-20 text-center flex flex-col justify-center items-center gap-6">
        <h1 className="text-8xl tracking-wider font-black">Who We Are</h1>
        <div className="md:border border-primary md:w-[35%]"></div>

        <p className="w-1/2 text-lg">
          At DeverCrowd, we’re a team of passionate creators building smart,
          scalable websites that drive results. We empower businesses with
          tailored digital solutions — from custom platforms to seamless user
          experiences — and turn ideas into powerful online brands. More than a
          service, we build lasting partnerships for digital growth.
        </p>
      </div>
      <div className="flex">
        {cards.map((card, id) => {
          return (
            <Card key={id} text={card.text} icon={card.icon} desc={card.desc} />
          );
        })}
      </div>
      <h2 className="text-4xl pb-5 h-[15vh] flex flex-col justify-end items-center gap-3">
        Our Achievements
        <div className="border w-100 bg-primary"></div>
      </h2>
      <div className="flex justify-center gap-16">
       {achievementsCards.map((card, id) => {
          return (
            <AchievementsCards key={id} title={card.title} icon={card.icon} num={card.num} />
          );
        })}
      </div>
      <h2 className="text-4xl pb-5 h-[15vh] flex flex-col justify-end items-center gap-3">
        Our Clients
        <div className="border w-100 bg-primary"></div>
      </h2>
      <div className="h-[30vh] w-full flex justify-center items-center mb-20 overflow-x-hidden">
        <AutoScroll tests={tests} />
      </div>
    </motion.section>
  );
};

export default AboutPage;
