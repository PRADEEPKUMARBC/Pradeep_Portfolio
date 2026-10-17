"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Layers, Cpu, Radio, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Cpu,
  Radio,
  Sparkles,
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 bg-[#08090D] border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan mb-4">
            <span>ABOUT & ETHOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-content-primary tracking-tight leading-tight">
            Curiosity builds.{" "}
            <span className="bg-gradient-to-r from-brand-cyan to-brand-blueLight bg-clip-text text-transparent">
              Code brings it to life.
            </span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-content-secondary leading-relaxed">
            I am a Software Development Engineer driven by the intersection of reliable distributed software logic and modern artificial intelligence.
          </p>
        </div>

        {/* Narrative & Engineering Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Detailed Bio & Core Facts */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-display font-semibold text-content-primary">
                Engineering Approach & Focus
              </h3>
              
              {profileData.aboutText.map((paragraph, index) => (
                <p key={index} className="text-content-secondary text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-content-secondary">
                    <strong className="text-white">Academic Anchor:</strong> B.E. candidate in Electronics & Communication at GM Institute of Technology, Davanagere.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blueLight shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-content-secondary">
                    <strong className="text-white">Real-world Problem Solving:</strong> Developed solutions for fraud detection, agricultural water conservation, and healthcare routing.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-violetLight shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-content-secondary">
                    <strong className="text-white">Continuous Verification:</strong> Certified Software Engineer and Python developer by HackerRank with documented credentials.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-cyan hover:text-white transition-colors group"
                >
                  <span>Review my featured project architectures</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Architecture Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profileData.principles.map((pillar, idx) => {
              const Icon = iconMap[pillar.icon] || Sparkles;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-2xl hover:border-brand-blue/40 transition-all card-hover-effect flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-brand-cyan mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h4 className="text-base font-display font-semibold text-content-primary mb-2">
                      {pillar.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-content-muted">
                    <span>PILLAR 0{idx + 1}</span>
                    <span className="text-brand-cyan">Active</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
