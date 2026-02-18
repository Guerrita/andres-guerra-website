"use client";

import { Toaster } from "sonner";
import { I18nProvider } from "./lib/i18n-context";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BentoSection from "./components/BentoSection";
import ExperienceSection from "./components/ExperienceSection";
import TechStackSection from "./components/TechStackSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingSocial from "./components/FloatingSocial";

export default function Home() {
  return (
    <I18nProvider>
      <Toaster richColors position="bottom-right" />
      <Navbar />
      <FloatingSocial />
      <HeroSection />
      <BentoSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </I18nProvider>
  );
}
