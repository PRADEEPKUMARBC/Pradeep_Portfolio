"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/data/profile";
import HeroCanvas from "@/components/three/HeroCanvas";
import { ArrowDown, ArrowUpRight, FileDown, Github, Linkedin, Terminal, Sparkles, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-brand-violet/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-brand-cyan">
                {profileData.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-content-primary leading-[1.08]">
              {profileData.heroHeadline}{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violetLight bg-clip-text text-transparent">
                {profileData.heroHighlight}
              </span>
            </h1>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-content-secondary max-w-xl font-normal leading-relaxed">
              {profileData.heroDescription}
            </p>

            {/* Quick Location & Status Pill */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-content-muted pt-1">
              <div className="flex items-center gap-1.5 text-content-secondary">
                <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                <span>{profileData.location}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block"></div>
              <div className="flex items-center gap-1.5 text-content-secondary">
                <Sparkles className="w-3.5 h-3.5 text-brand-violetLight" />
                <span>GMIT · ECE Engineering</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-accent hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all transform active:scale-95 group"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href={profileData.resumeUrl}
                download="Pradeepkumar_BC_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-brand-blue/50 text-content-primary font-medium text-sm transition-all shadow-sm group"
                aria-label="Download Résumé PDF"
              >
                <FileDown className="w-4 h-4 text-brand-cyan group-hover:translate-y-0.5 transition-transform" />
                <span>Download Résumé</span>
              </a>
            </div>

            {/* Verified Social Channels */}
            <div className="pt-4 flex items-center gap-3">
              <span className="text-xs font-mono text-content-muted mr-1">Connect:</span>
              
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-content-secondary hover:text-white hover:border-brand-blue/50 hover:bg-white/10 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-content-secondary hover:text-white hover:border-brand-cyan/50 hover:bg-white/10 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={profileData.hackerrankUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-content-secondary hover:text-white hover:border-emerald-500/50 hover:bg-white/10 transition-all"
                aria-label="HackerRank Profile"
              >
                <Terminal className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Composition with 3D Canvas + Real Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Interactive 3D Canvas Backdrop */}
            <div className="absolute inset-0 -top-12 -bottom-12 w-full h-[480px] pointer-events-auto opacity-70 hover:opacity-100 transition-opacity">
              <HeroCanvas />
            </div>

            {/* Architectural Framed Portrait Card */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto pointer-events-none mt-8 lg:mt-0">
              <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-white/5 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                
                {/* Tech corner markers */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brand-cyan pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brand-cyan pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-brand-cyan pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brand-cyan pointer-events-none" />

                {/* Portrait Container */}
                <div className="relative aspect-[4/4.5] w-full rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                  <Image
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient lighting overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Identity Overlay on Image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-display font-semibold text-white">
                          {profileData.name}
                        </p>
                        <p className="text-[11px] font-mono text-brand-cyan">
                          {profileData.headline}
                        </p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Scroll Cue Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 sm:mt-20 flex flex-col items-center justify-center gap-2 pointer-events-auto"
        >
          <Link
            href="#about"
            className="flex flex-col items-center gap-2 text-content-muted hover:text-brand-cyan transition-colors group"
            aria-label="Scroll down to About section"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-content-muted group-hover:text-brand-cyan transition-colors">
              Scroll To Explore
            </span>
            <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-brand-cyan/50 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-brand-cyan"
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
