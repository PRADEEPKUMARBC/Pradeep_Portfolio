"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 bg-[#08090D] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan mb-4">
            <Briefcase className="w-3.5 h-3.5 text-brand-cyan" />
            <span>JOURNEY & ACADEMICS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-content-primary tracking-tight">
            Experience & education.
          </h2>
          
          <p className="mt-3 text-base text-content-secondary">
            Documented timeline of professional engineering contributions and rigorous academic milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Professional Experience Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-cyan">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                Industry Experience
              </h3>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-brand-blue/30 transition-all card-hover-effect"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>{exp.status}</span>
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-content-muted">
                      <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-display font-bold text-white">
                    {exp.role}
                  </h4>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-brand-cyan mt-1 mb-4">
                    <span>{exp.company}</span>
                    <span className="text-white/20">·</span>
                    <span className="text-xs font-mono text-content-muted flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-content-secondary leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {exp.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/5 text-content-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-xl bg-brand-violet/10 border border-brand-violet/20 text-brand-violetLight">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                Academic Background
              </h3>
            </div>

            <div className="relative pl-6 border-l border-white/10 space-y-8">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline node */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#08090D] border-2 border-brand-cyan group-hover:border-brand-blue group-hover:scale-125 transition-all"></div>

                  <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-brand-cyan/30 transition-all card-hover-effect">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-brand-cyan">
                        {edu.period}
                      </span>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-brand-blue/10 border border-brand-blue/20 text-brand-blueLight">
                        <Award className="w-3 h-3" />
                        <span>{edu.gradeLabel}: {edu.gradeValue}</span>
                      </div>
                    </div>

                    <h4 className="text-base font-display font-bold text-white">
                      {edu.degree} — {edu.field}
                    </h4>

                    <p className="text-sm text-content-secondary mt-1 mb-3">
                      {edu.institution}
                    </p>

                    <div className="text-xs font-mono text-content-muted flex items-center gap-1 mb-3">
                      <MapPin className="w-3 h-3 text-content-muted" />
                      <span>{edu.location}</span>
                    </div>

                    {edu.highlights && (
                      <ul className="space-y-1.5 pt-3 border-t border-white/5">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="text-xs text-content-muted flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-brand-cyan shrink-0 mt-1.5"></span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
