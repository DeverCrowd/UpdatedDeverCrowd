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
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    industry: [{ name: "Markting" }],
    scope: [{ name: "Design" }, { name: "Development" }],
    image: "/assets/projects/influcrowd.png",
    live: "https://mohamedhamad1.github.io/InfluCrowd/#hero",
    github: "",
  },
  {
    turnaround: "1 Week",
    client: "Mohamed Rawaby",
    name: "Rawaby Portfolio",
    category: "Modern Portfolio",
    title: "RESTful API for E-Commerce",
    description:
      "Developed a secure and scalable backend API using Node.js and Express. Handled user authentication, product management, and MongoDB data integration.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    industry: [{ name: "Portfolio" }],
    scope: [{ name: "Design" }, { name: "Development" }],
    image: "/assets/projects/rawaby.png",
    live: "https://devercrowd.github.io/Rawaby/",
    github: "",
  },
  {
    turnaround: "UNDER DEVELOPMENT",
    client: "CodeCrowd",
    name: "CodeCrowd",
    category: "Full Web",
    title: "Web Application Security Audit",
    description:
      "Performed penetration testing using Burp Suite and OWASP ZAP to identify common web vulnerabilities. Delivered a detailed report with risk levels and recommended fixes.",
    stack: [
      { name: "NodeJs" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "ReactJs" },
      { name: "Motion Framer" },
      { name: "Tailwend" },
    ],
    industry: [{ name: "Programming" }],
    scope: [{ name: "Security" }],
    image: "/assets/projects/codecrowd.png",
    live: "",
    github: "",
  },
  {
    turnaround: "UNDER DEVELOPMENT",
    client: "Mohamed Hamad",
    name: "Swilam Portfolio",
    category: "Frontend",
    title: "Personal Portfolio Design",
    description:
      "Designed a sleek personal portfolio using Figma, enhanced with animated transitions via Framer Motion, and styled with Tailwind CSS for a responsive layout.",
    stack: [
      { name: "Next Js" },
      { name: "Framer Motion" },
      { name: "Tailwind CSS" },
    ],
    industry: [{ name: "Portfolio" }],
    scope: [{ name: "Design" }, { name: "Development" }],
    image: "/assets/projects/swilam.png",
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
    <section className="min-h-screen px-4 xl:px-20 py-20 text-white bg-[url('/assets/bgs/bg15.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-gradient-to-br from-[#0c45a0]/90 to-[#091d3a]/90">
      <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row gap-12 items-start">
        {/* Slider Section */}
        <div className="w-full xl:w-[35%] relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[250px] rounded-3xl"
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="relative group h-[300px] xl:h-full rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
            <WorkSliderBtns
              containerStyles="absolute bottom-4 right-4 flex gap-2 z-10"
              btnStyles="bg-white/10 hover:bg-[#0c45a0] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all"
            />
          </Swiper>
          <Link
          style={{display:project.live?"block":"none"}}
            href={project.live}
            target="_blank"
            className="mt-6 inline-block px-6 py-3 bg-[#0c45a0] hover:bg-[#1860d0] text-white rounded-xl text-lg font-semibold shadow-lg transition-all w-fit"
          >
            Visit Project ↗
          </Link>
        </div>

        {/* Details Section */}
        <div className="w-full xl:w-[65%] flex flex-col gap-8">
          <h2 className="text-4xl xl:text-6xl font-extrabold text-[#0c45a0] tracking-tight text-center xl:text-left">
            {project.name}
          </h2>

          <p className="text-sky-100 leading-relaxed text-center xl:text-left">
            {project.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow">
              <p className="text-white/60 text-sm mb-1">Client</p>
              <p className="text-white font-medium">{project.client}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow">
              <p className="text-white/60 text-sm mb-1">Turnaround</p>
              <p className="text-white font-medium">{project.turnaround}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow">
              <p className="text-white/60 text-sm mb-1">Category</p>
              <p className="text-white font-medium">{project.category}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow col-span-1 md:col-span-3">
              <p className="text-white/60 text-sm mb-2">Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <span
                    key={index}
                    className="bg-[#0c45a0]/20 text-sky-300 px-3 py-1 rounded-full text-sm"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow col-span-1 md:col-span-3">
              <p className="text-white/60 text-sm mb-2">Industry</p>
              <div className="flex flex-wrap gap-2">
                {project.industry.map((item, index) => (
                  <span
                    key={index}
                    className="bg-[#0c45a0]/20 text-sky-300 px-3 py-1 rounded-full text-sm"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow col-span-1 md:col-span-3">
              <p className="text-white/60 text-sm mb-2">Scope of Work</p>
              <div className="flex flex-wrap gap-2">
                {project.scope.map((item, index) => (
                  <span
                    key={index}
                    className="bg-[#0c45a0]/20 text-sky-300 px-3 py-1 rounded-full text-sm"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-sky-800 pt-4"></div>
        </div>
      </div>
    </section>
  );
};

export default page;
