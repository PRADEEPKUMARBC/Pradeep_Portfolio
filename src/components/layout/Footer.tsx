"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { ArrowUp, Github, Linkedin, Code2, Terminal, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050608] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-brand-blue/10 to-transparent pointer-events-none blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue/30 via-brand-cyan/20 to-brand-violet/20 border border-white/15 flex items-center justify-center font-display font-bold text-lg text-content-primary">
                {profileData.monogram}
              </div>
              <div>
                <span className="block font-display font-bold text-lg text-content-primary">
                  {profileData.name}
                </span>
                <span className="block text-xs font-mono text-brand-cyan">
                  {profileData.headline}
                </span>
              </div>
            </div>

            <p className="text-sm text-content-secondary max-w-md leading-relaxed">
              Software Development Engineer crafting full-stack architectures, practical AI/ML models, and thoughtful user experiences. Based in Davanagere, Karnataka, India.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for SDE Roles & Engineering Collaborations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-content-muted mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#hero" className="text-content-secondary hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-content-secondary hover:text-white transition-colors">
                  About Ethos
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-content-secondary hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-content-secondary hover:text-white transition-colors">
                  Technical Stack
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-content-secondary hover:text-white transition-colors">
                  Journey & Education
                </Link>
              </li>
              <li>
                <Link href="#certifications" className="text-content-secondary hover:text-white transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-content-secondary hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-content-muted mb-4">
              Profiles & Repositories
            </h4>
            <div className="space-y-2.5">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-content-secondary hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:border-brand-blue/40">
                  <Github className="w-4 h-4 text-brand-blueLight" />
                </div>
                <span>GitHub</span>
              </a>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-content-secondary hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:border-brand-blue/40">
                  <Linkedin className="w-4 h-4 text-brand-cyan" />
                </div>
                <span>LinkedIn</span>
              </a>

              <a
                href={profileData.hackerrankUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-content-secondary hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:border-emerald-500/40">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                </div>
                <span>HackerRank</span>
              </a>

              <a
                href={profileData.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-content-secondary hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:border-amber-500/40">
                  <Code2 className="w-4 h-4 text-amber-400" />
                </div>
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-content-muted">
          <p className="flex items-center gap-1.5">
            <span>Designed & Built with precision by</span>
            <span className="text-content-primary font-medium">{profileData.name}</span>
            <span>© {new Date().getFullYear()}</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-content-secondary hover:text-white hover:border-brand-blue/40 transition-all"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-cyan" />
          </button>
        </div>
      </div>
    </footer>
  );
}
