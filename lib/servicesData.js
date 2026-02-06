// servicesData.js
import { Code, Smartphone, Brain, Cloud, Settings } from "lucide-react";

export const services = [
  {
    id: "web",
    link: "/services/web",
    title: "Web Development",
    icon: Code,
    subServices: [
      "Single Page Application",
      "E-commerce Solutions",
      "API Development",
    ],
  },
  {
    id: "mobile",
    link: "/services/mobile",
    title: "Mobile Apps",
    icon: Smartphone,
    subServices: [
      "Flutter Applications",
      "iOS Applications",
      "Android Applications",
      "Cross-Platform Apps",
    ],
  },
  {
    id: "ai",
    link: "/services/ai",
    title: "AI Solutions",
    icon: Brain,
    subServices: [
      "Machine Learning Models",
      "AI Chatbots",
      "Data Analytics",
      "AI Integrations",
    ],
  },
  {
    id: "cloud",
    link: "/services/cloud",
    title: "Cloud Services",
    icon: Cloud,
    subServices: [
      "AWS Infrastructure",
      "Cloud Migration",
      "Serverless Architecture",
      "Cloud Security",
    ],
  },
  {
    id: "automation",
    link: "/services/automation",
    title: "Automation",
    icon: Settings,
    subServices: [
      "Process Automation",
      "Workflow Automation",
      "CI / CD Pipelines",
      "Task Scheduling",
    ],
  },
];
