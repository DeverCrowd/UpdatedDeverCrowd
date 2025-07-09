"use client";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCube,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
const H1 = dynamic(() => import("@/components/ui/H1"), {
  loading: () => <p>Loding...</p>,
  ssr: false,
});
import Image from "next/image";

const projects = [
  {
    timeSpend: "1 Week",
    client: "InfluCrowd",
    name: "InfluCrowd",
    category: "Frontend",
    title: "Modern Landing Page",
    description:
      "Built a fully responsive landing page using HTML5, CSS3, and vanilla JavaScript. The design focuses on clean layout, subtle animations, and fast loading for marketing conversions.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    industry: [{ name: "Markting" }],
    scope: [{ name: "Design" }, { name: "Development" }],
    pic: "/projects/influcrowd.webp",
    live: "https://mohamedhamad1.github.io/InfluCrowd/#hero",
    github: "",
  },
  {
    timeSpend: "1 Week",
    client: "Mohamed Rawaby",
    name: "Rawaby Portfolio",
    category: "Modern Portfolio",
    title: "RESTful API for E-Commerce",
    description:
      "Developed a secure and scalable backend API using Node.js and Express. Handled user authentication, product management, and MongoDB data integration.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    industry: [{ name: "Portfolio" }],
    scope: [{ name: "Design" }, { name: "Development" }],
    pic: "/projects/rawaby.webp",
    live: "https://devercrowd.github.io/Rawaby/",
    github: "",
  },
  {
    timeSpend: "UNDER DEVELOPMENT",
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
    pic: "/projects/codecrowd.webp",
    live: "",
    github: "",
  },
  {
    timeSpend: "UNDER DEVELOPMENT",
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
    pic: "/projects/swilam.webp",
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
    <section className="min-h-screen px-4 xl:px-20 py-20 text-white bg-[url('/bgs/bg15.webp')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-gradient-to-br from-[#0c45a0]/90 to-[#091d3a]/90">
      <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row gap-12 items-start">
        {/* Slider Section */}
        <div className="w-full xl:w-[35%] relative">
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Autoplay,
              EffectCube,
            ]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            effect="cube"
            autoplay={{ delay: 10000 }}
            coverflowEffect={{
              rotate: -50,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            onSlideChange={handleSlideChange}
            className="xl:h-[250px] rounded-3xl"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="relative group h-[300px] xl:h-full rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={project.pic}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {(project.live || project.github) && (
            <div className="flex items-center justify-around mt-15">
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  className="flex gap-3 items-center  px-6 py-3 bg-[#0c45a0] hover:bg-[#1860d0] text-white rounded-xl text-lg font-semibold shadow-lg transition-all w-fit"
                >
                  <BsArrowUpRight className="text-2xl" />
                  Live
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex gap-3 items-center px-6 py-3 bg-[#0c45a0] hover:bg-[#1860d0] text-white rounded-xl text-lg font-semibold shadow-lg transition-all w-fit"
                >
                  <BsGithub className="text-2xl" />
                  GitHub
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Details Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.name} // مهم علشان يعرف المحتوى تغير
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full xl:w-[65%] flex flex-col gap-8"
          >
            <H1 title={project.name} />
            <p className="text-sky-100 leading-relaxed text-center xl:text-left">
              {project.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow">
                <p className="text-white/60 text-sm mb-1">Client</p>
                <p className="text-white font-medium">{project.client}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow">
                <p className="text-white/60 text-sm mb-1">timeSpend</p>
                <p className="text-white font-medium">{project.timeSpend}</p>
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default page;
