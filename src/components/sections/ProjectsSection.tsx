"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { Project, ProjectCategory } from "@/types";
import ProjectModal from "@/components/ui/ProjectModal";
import { ArrowUpRight, Github, ShieldCheck, Sparkles, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const categories: ProjectCategory[] = ["All", "AI & ML", "Full Stack", "IoT & Systems"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-28 bg-[#08090D] border-t border-white/5">
      {/* Background illumination */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>SELECTED WORK & CASE STUDIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-content-primary tracking-tight">
              Selected work.
            </h2>
            
            <p className="mt-3 text-base text-content-secondary">
              Experiments, engineering, and ideas brought to life—from full-stack platforms to machine learning classifiers.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? "bg-brand-blue text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium"
                    : "text-content-secondary hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between card-hover-effect border border-white/10 group"
            >
              <div>
                {/* Visual Banner Representation */}
                <div
                  className={`relative w-full h-44 bg-gradient-to-br ${project.imagePlaceholderGradient} border-b border-white/10 flex items-center justify-center p-6 overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                  
                  {/* Category Pill on card banner */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/60 backdrop-blur-md border border-white/10 text-white">
                      {project.category}
                    </span>
                    {project.isVerifiedRepo && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>

                  {/* Stylized Project Monogram/Graphic */}
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Code2 className="w-6 h-6 text-brand-cyan" />
                    </div>
                    <span className="text-xs font-mono text-white/80 tracking-wide uppercase">
                      {project.title.split("—")[0]}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-blueLight transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-content-secondary line-clamp-3 mb-4 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] border border-white/5 text-content-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] border border-white/5 text-brand-cyan">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-brand-cyan transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-content-secondary hover:text-white transition-all"
                      aria-label={`View ${project.title} repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
