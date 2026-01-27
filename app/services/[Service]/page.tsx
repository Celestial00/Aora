import ServiceDescription from "@/app/components/main/ServicePageHero";
import TechStack from "@/app/components/main/ServicePageTechSection";
import ProjectShowcase from "@/app/components/main/ServiceProjectShowCase";
import React from "react";

export default function page() {
  return (
    <>
      <ServiceDescription />
      <TechStack />
      <ProjectShowcase />
    </>
  );
}
