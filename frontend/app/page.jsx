"use client";
import Image from "next/image";
import {
  useScroll,
} from "motion/react";
import Lenis from "lenis";
import { useEffect } from "react";
import "lenis/dist/lenis.css";
import AboutPage from "@/components/About/AboutPage";
import ServicesPage from "@/components/Services/ServicesPage";
import HomePage from "@/components/Home/HomePage";
import ContactPage from "@/components/Contact/ContactPage";
import Particles from "@/components/ui/Particles";



export default function Main() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  const { scrollYProgress } = useScroll();
  // useMotionValueEvent(scrollYProgress,'change',(v)=>{console.log(v);})
  return (
    <main className="">
      <div className="inset-0 fixed">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
          className="fixed"
        />
      </div>
      <div className="fixed -z-10 inset-0">
        <Image
          className="bg-cover object-cover bg-center"
          alt="bg"
          src="/bgs/bg13.webp"
          fill
        />
      </div>
      <HomePage progress={scrollYProgress} />
      <AboutPage progress={scrollYProgress} />
      <ServicesPage progress={scrollYProgress} />
      <ContactPage />
    </main>
  );
}
