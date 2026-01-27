"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, ChevronDown } from "lucide-react";
import ProjectCard from "../common/ProjectCard";
import Typography from "../common/Typography";
import ShowMoreButton from "../common/ShowMoreBtn";

const blogs = [
  {
    id: "1",
    title: "Building a Scalable SaaS Dashboard",
    description:
      "Learn how we built a real-time dashboard with cloud-native architecture and modern frontend tooling.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
    icon: <Server size={22} />,
  },
  {
    id: "2",
    title: "AI-powered Recommendation Engine",
    description:
      "An AI-driven personalization engine designed to deliver real-time product recommendations.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    icon: <Code size={22} />,
  },
  {
    id: "3",
    title: "High-performance Data Platform",
    description:
      "A distributed data processing platform optimized for analytics-heavy workloads.",
    technologies: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    icon: <Database size={22} />,
  },
];

export default function BlogSection() {
  return (
    <section className=" pt-32 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl md:max-w-4xl mx-auto text-center mb-20"
      >
        <span className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
          Our Blogs
        </span>
        <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl">
          Latest Insights & Projects
        </h2>
      </motion.div>


      <div className="max-w-7xl md: mx-auto grid gap-10 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
        {blogs.map((blog, idx) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              title={blog.title}
              description={blog.description}
              technologies={blog.technologies}
              icon={blog.icon}
            />
          </motion.div>
        ))}
      </div>

      <ShowMoreButton />
    </section>
  );
}
