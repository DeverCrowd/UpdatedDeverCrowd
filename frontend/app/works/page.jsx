"use client";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import WorkSliderBtns from "./WorkSliderBtns";
const projects = [
  {
    turnaround: "1 Week",
    client: "InfluCrowd",
    name: "InfluCrowd",
    category: "Frontend",
    title: "Modern Landing Page",
    description:
      "Built a fully responsive landing page using HTML5, CSS3, and vanilla JavaScript. The design focuses on clean layout, subtle animations, and fast loading for marketing conversions.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" }
    ],
    industry: [{ name: "Technology" }],
    scope: [{ name: "Design" }, { name: "Development" }],
    image: "/assets/logo.png",
    live: "",
    github: "",
  },
  {
    turnaround: "1 Week",
    client: "InfluCrowd",
    name: "Rawaby Portfolio",
    category: "Backend",
    title: "RESTful API for E-Commerce",
    description:
      "Developed a secure and scalable backend API using Node.js and Express. Handled user authentication, product management, and MongoDB data integration.",
    stack: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" }
    ],
    industry: [{ name: "Technology" }],
    scope: [{ name: "Development" }],
    image: "/assets/logo.png",
    live: "",
    github: "",
  },
  {
    turnaround: "1 Week",
    client: "InfluCrowd",
    name: "CodeCrowd",
    category: "Pentest",
    title: "Web Application Security Audit",
    description:
      "Performed penetration testing using Burp Suite and OWASP ZAP to identify common web vulnerabilities. Delivered a detailed report with risk levels and recommended fixes.",
    stack: [
      { name: "Burp Suite" },
      { name: "OWASP ZAP" },
      { name: "MongoDB" }
    ],
    industry: [{ name: "Technology" }],
    scope: [{ name: "Security" }],
    image: "/assets/logo.png",
    live: "",
    github: "",
  },
  {
    turnaround: "1 Week",
    client: "InfluCrowd",
    name: "Swilam Portfolio",
    category: "UI/UX",
    title: "Personal Portfolio Design",
    description:
      "Designed a sleek personal portfolio using Figma, enhanced with animated transitions via Framer Motion, and styled with Tailwind CSS for a responsive layout.",
    stack: [
      { name: "Figma" },
      { name: "Framer Motion" },
      { name: "Tailwind CSS" }
    ],
    industry: [{ name: "Technology" }],
    scope: [{ name: "Design" }],
    image: "/assets/logo.png",
    live: "",
    github: "",
  },
];

const page = () => {
  const [project, setProject] = useState(projects[0]);
  const swiper = useSwiper();
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <section className="min-h-[100vh] flex flex-col justify-center py-20 xl:py-3 mr-3 ml-3">
      <div className="xl:w-[100%] xl:p-10">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[30%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[260px] xl:h-[460px] relative group flex justify-center items-center bg-accent border-b border-sky-950 rounded-3xl">
                      <div className="relative w-full h-full rounded-3xl">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover rounded-3xl "
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none p-2"
                btnStyles="bg-primary hover:primary-foreground text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
          <div className="w-full xl:w-[90%] flex flex-col order-2 xl:order-none">
            <div className="flex flex-col gap-9 justify-around h-full">
              <div className="xl:text-7xl text-5xl leading-none font-extrabold text-transparent text-outline">
                {project.name}
              </div>
              <p className="text-white/70 lg:w-[90%] h-20 border">{project.description}</p>
              <div className="flex sm:flex-row flex-col gap-9  lg:justify-between justify-around lg:w-[70%]">
                <div className="gap-9 flex flex-col">
                  <ul className="flex flex-col lg:flex-row gap-4">
                    <p className="text-white/50">Stack:</p>
                    {project.stack.map((item, index) => {
                      return (
                        <li key={index} className="text-xl text-sky-400">
                          {item.name}
                          {index !== project.stack.length - 1 && ","}
                        </li>
                      );
                    })}
                  </ul>
                  <ul className="flex flex-col lg:flex-row gap-4">
                    <p className="text-white/50">Industry:</p>
                    {project.industry.map((item, index) => {
                      return (
                        <li key={index} className="text-xl text-sky-400">
                          {item.name}
                          {index !== project.stack.length - 1 && ","}
                        </li>
                      );
                    })}
                  </ul>
                  <ul className="flex flex-col xl:flex-row gap-4">
                    <p className="text-white/50">Scope of Work:</p>
                    {project.scope.map((item, index) => {
                      return (
                        <li key={index} className="text-xl text-sky-400">
                          {item.name}
                          {index !== project.stack.length - 1 && ","}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="gap-9 flex flex-col">
                  <p>
                    <span className="text-white/50">Client: </span>
                    {project.client}
                  </p>
                  <p>
                    <span className="text-white/50">Turnaround: </span>
                    {project.turnaround}
                  </p>
                  <p>
                    <span className="text-white/50">Category: </span>
                    {project.category}
                  </p>
                </div>
              </div>
              <div className="border border-primary-foreground"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
