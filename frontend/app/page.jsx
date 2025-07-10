"use client";
import Image from "next/image";
import { useScroll } from "motion/react";
import Lenis from "lenis";
import { useEffect } from "react";
import "lenis/dist/lenis.css";
import AboutPage from "@/components/About/AboutPage";
import ServicesPage from "@/components/Services/ServicesPage";
import HomePage from "@/components/Home/HomePage";
import ContactPage from "@/components/Contact/ContactPage";
import FlyingDots from "@/components/ui/FlyingDots";

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
  return (
    <main className="">
      <div className="fixed -z-10 inset-0 h-screen w-full overflow-hidden">
        <Image
          alt="Background"
          src="/bgs/bg13.webp"
          fill
          priority // ✅ لأنها أهم صورة
          quality={100}
          className="object-cover"
        />
      </div>
      <FlyingDots />
      <HomePage progress={scrollYProgress} />
      <AboutPage progress={scrollYProgress} />
      <ServicesPage progress={scrollYProgress} />
      <ContactPage />
    </main>
  );
}
