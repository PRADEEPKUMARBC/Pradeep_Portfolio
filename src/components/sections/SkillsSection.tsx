"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/skills";
import { Code2, Layout, Server, Cpu, Database, Wrench, Sparkles, Check } from "lucide-react";
import { motion } from "framer-motion";

const categoryIconMap: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Cpu,
  Database,
  Wrench,
};

export default function SkillsSection() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  return (
    <section id="skills" className="relative py-28 bg-[#050608] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-brand-violet/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-content-primary tracking-tight">
            Skills & toolchain.
          </h2>
          
          <p className="mt-3 text-base text-content-secondary">
            Structured technical capabilities verified across full-stack engineering, machine learning pipelines, and developer tooling.
          </p>
        </div>

        {/* Interactive Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIconMap[cat.icon] || Code2;
            const isSelected = selectedCategoryIndex === idx;

            return (
              <button
                key={cat.title}
                type="button"
                onClick={() => setSelectedCategoryIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-brand-blue/20 border border-brand-blue/40 text-brand-cyan shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                    : "bg-white/[0.03] border border-white/5 text-content-secondary hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Details Card */}
        <motion.div
          key={selectedCategoryIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="glass-panel p-8 rounded-2xl border border-white/10 mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div>
              <h3 className="text-xl font-display font-bold text-white">
                {skillCategories[selectedCategoryIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-content-muted mt-1 font-mono">
                {skillCategories[selectedCategoryIndex].description}
              </p>
            </div>
            <div className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-blueLight w-fit">
              {skillCategories[selectedCategoryIndex].skills.length} Core Technologies
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillCategories[selectedCategoryIndex].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/30 hover:bg-white/[0.05] transition-all group flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-cyan group-hover:scale-105 transition-transform">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-xs font-mono text-content-muted mt-0.5">
                    {skill.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Comprehensive Grid View for All Skills */}
        <div className="pt-8 border-t border-white/5">
          <h3 className="text-sm font-mono uppercase tracking-wider text-content-muted mb-6">
            Ecosystem Overview
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {skillCategories.flatMap((c) => c.skills).map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="px-3 py-2 rounded-lg bg-white/[0.02] border border-white/5 text-center text-xs font-mono text-content-secondary hover:text-white hover:border-white/20 transition-colors"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
