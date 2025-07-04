"use client";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import AboutPage from "@/components/About/AboutPage";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";
import { useEffect } from "react";
import "lenis/dist/lenis.css";
import ServicesPage from "@/components/Services/ServicesPage";
import useMousePosition from "./utils/useMousePosition";
import WorksPage from "@/components/Works/WorksPage";
import HomePage from "@/components/Home/HomePage";
import ContactPage from "@/components/Contact/ContactPage";

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
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    console.log("v", v);
  });
  return (
    <main className="bg-[#00000]">
      <HomePage progress = {scrollYProgress}/>
      <AboutPage  progress = {scrollYProgress}/>
      <ServicesPage  progress = {scrollYProgress}/>
      <WorksPage  progress = {scrollYProgress}/>
      <ContactPage/>
    </main>
  );
}
