"use client";

import React, { useEffect } from "react";
import { Project } from "@/types";
import { X, Github, ExternalLink, Check, Layers, Cpu, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md -z-10"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d1017] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-content-secondary hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category & Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-blue/10 border border-brand-blue/30 text-brand-blueLight">
                {project.category}
              </span>
              {project.isVerifiedRepo && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified Public Repository</span>
                </span>
              )}
            </div>

            {/* Title & Tagline */}
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-content-secondary mb-6 leading-relaxed">
              {project.tagline}
            </p>

            {/* Visual Graphic Representation */}
            <div className={`w-full h-44 rounded-xl bg-gradient-to-r ${project.imagePlaceholderGradient} border border-white/10 relative overflow-hidden flex items-center justify-center p-6 mb-8`}>
              <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
              <div className="relative z-10 text-center max-w-md">
                <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-1">
                  Architecture Overview
                </span>
                <p className="text-sm font-display font-medium text-white/90">
                  {project.summary}
                </p>
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span>The Engineering Problem</span>
                </h4>
                <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span>The Technical Solution</span>
                </h4>
                <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-sm font-display font-semibold text-white mb-3 flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-cyan" />
                <span>Key Implementation Features</span>
              </h4>
              <ul className="space-y-2">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-content-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 mt-2"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Details if present */}
            {project.architecture && (
              <div className="mb-6">
                <h4 className="text-sm font-display font-semibold text-white mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-violetLight" />
                  <span>Subsystem Architecture</span>
                </h4>
                <div className="space-y-2">
                  {project.architecture.map((layer, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs font-mono text-content-secondary">
                      {layer}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-content-muted mb-3 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>Technology Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions / Links */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-medium transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <span className="text-xs font-mono text-content-muted">
                    Repository: Available upon request
                  </span>
                )}

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white text-xs font-medium transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-mono text-content-muted hover:text-white transition-colors"
              >
                Close Drawer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
