"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BentoSection from "./components/BentoSection";
import ExperienceSection from "./components/ExperienceSection";
import TechStackSection from "./components/TechStackSection";
import ServicesSection from "./components/ServicesSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingSocial from "./components/FloatingSocial";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingSocial />
      <HeroSection />
      <BentoSection />
      <ExperienceSection />
      <TechStackSection />
      <ServicesSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}
