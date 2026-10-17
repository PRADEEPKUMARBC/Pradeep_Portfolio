"use client";

import React, { useState, useEffect } from "react";
import { profileData } from "@/data/profile";
import { Github, Linkedin, Terminal, Code2, ArrowUpRight, GitBranch, Star, Users, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface GitHubUserStats {
  publicRepos: number;
  followers: number;
  avatarUrl: string;
  bio: string;
}

export default function GithubProfilesSection() {
  const [stats, setStats] = useState<GitHubUserStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch live public data with resilient fallback
    fetch("https://api.github.com/users/PRADEEPKUMARBC")
      .then((res) => {
        if (!res.ok) throw new Error("Rate limited or not found");
        return res.json();
      })
      .then((data) => {
        setStats({
          publicRepos: data.public_repos ?? 5,
          followers: data.followers ?? 0,
          avatarUrl: data.avatar_url,
          bio: data.bio ?? "Software Development Engineer exploring full-stack & AI/ML.",
        });
        setLoading(false);
      })
      .catch(() => {
        // Fallback to static verified profile data
        setStats({
          publicRepos: 5,
          followers: 1,
          avatarUrl: profileData.avatarUrl,
          bio: "Software Development Engineer exploring full-stack & AI/ML.",
        });
        setLoading(false);
      });
  }, []);

  return (
    <section id="profiles" className="relative py-28 bg-[#08090D] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan mb-4">
            <Code2 className="w-3.5 h-3.5 text-brand-cyan" />
            <span>OPEN SOURCE & CODING PROFILES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-content-primary tracking-tight">
            Developer profiles.
          </h2>
          
          <p className="mt-3 text-base text-content-secondary">
            Verified public profiles across version control, algorithmic problem-solving platforms, and professional networks.
          </p>
        </div>

        {/* GitHub Live Card + Other Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main GitHub Spotlight */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Github className="w-7 h-7 text-brand-blueLight" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                      <span>PRADEEPKUMARBC</span>
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                    </h3>
                    <p className="text-xs font-mono text-content-muted">
                      github.com/PRADEEPKUMARBC
                    </p>
                  </div>
                </div>

                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-medium text-white transition-all"
                >
                  <span>Open GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Bio summary */}
              <p className="text-sm text-content-secondary mb-6 leading-relaxed">
                Active repository portfolio covering machine learning fraud classification, full-stack grocery ordering architectures, and sensor integration systems.
              </p>

              {/* Verified repository feature */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-brand-cyan" />
                    <span className="text-xs font-mono font-semibold text-white">
                      Credit-Card-Fraud-Detection
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-blue/20 text-brand-blueLight">
                    Featured Repo
                  </span>
                </div>
                <p className="text-xs text-content-muted mb-3">
                  Binary classification engine utilizing SMOTE oversampling & Random Forest algorithms with FastAPI & React interfaces.
                </p>
                <a
                  href="https://github.com/PRADEEPKUMARBC/Credit-Card-Fraud-Detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-brand-cyan hover:underline"
                >
                  <span>Explore repository source code</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Repository metric summary */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-center">
                  <span className="block text-lg font-mono font-bold text-white">
                    {stats?.publicRepos ?? 5}
                  </span>
                  <span className="text-[11px] font-mono text-content-muted">
                    Public Repos
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-center">
                  <span className="block text-lg font-mono font-bold text-emerald-400">
                    Active
                  </span>
                  <span className="text-[11px] font-mono text-content-muted">
                    Commit Pipeline
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-center col-span-2 sm:col-span-1">
                  <span className="block text-lg font-mono font-bold text-brand-cyan">
                    Python & JS
                  </span>
                  <span className="text-[11px] font-mono text-content-muted">
                    Core Languages
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Other Profile Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* LinkedIn Profile */}
            <motion.a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-brand-cyan/40 transition-all card-hover-effect flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-105 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-display font-bold text-white group-hover:text-brand-cyan transition-colors">
                    LinkedIn Network
                  </h4>
                  <p className="text-xs font-mono text-content-muted">
                    Professional updates & career milestones
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-content-muted group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>

            {/* HackerRank Profile */}
            <motion.a
              href={profileData.hackerrankUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all card-hover-effect flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-display font-bold text-white group-hover:text-emerald-400 transition-colors">
                    HackerRank
                  </h4>
                  <p className="text-xs font-mono text-content-muted">
                    Certified Software Engineer & Python
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-content-muted group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>

            {/* LeetCode Profile */}
            <motion.a
              href={profileData.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all card-hover-effect flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-display font-bold text-white group-hover:text-amber-400 transition-colors">
                    LeetCode
                  </h4>
                  <p className="text-xs font-mono text-content-muted">
                    Data structures & algorithmic problem-solving
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-content-muted group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>

          </div>

        </div>

      </div>
    </section>
  );
}
