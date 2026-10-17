"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Menu, X, FileDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#08090D]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Monogram */}
            <Link
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg px-1 py-0.5"
              aria-label="Pradeepkumar BC Portfolio Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue/30 via-brand-cyan/20 to-brand-violet/20 border border-white/15 flex items-center justify-center font-display font-bold text-lg text-content-primary group-hover:border-brand-blueLight/50 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all">
                {profileData.monogram}
              </div>
              <div className="hidden sm:block text-left">
                <span className="block font-display font-semibold text-sm tracking-wide text-content-primary">
                  {profileData.name}
                </span>
                <span className="block text-xs font-mono text-content-muted">
                  {profileData.headline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#12151E]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-full transition-colors ${
                      isActive
                        ? "text-brand-cyan font-semibold"
                        : "text-content-secondary hover:text-content-primary"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="navPill"
                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={profileData.resumeUrl}
                download="Pradeepkumar_BC_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-blue/40 text-content-primary transition-all shadow-sm group"
                aria-label="Download Pradeepkumar BC Resume PDF"
              >
                <FileDown className="w-3.5 h-3.5 text-brand-cyan group-hover:translate-y-0.5 transition-transform" />
                <span>Résumé</span>
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full bg-gradient-to-r from-brand-blue to-brand-violet hover:from-blue-500 hover:to-purple-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all transform active:scale-95"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={profileData.resumeUrl}
                download="Pradeepkumar_BC_Resume.pdf"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-cyan"
                aria-label="Download Resume"
              >
                <FileDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-content-primary hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#08090D]/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-content-secondary hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-content-muted" />
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={profileData.resumeUrl}
                  download="Pradeepkumar_BC_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-white"
                >
                  <FileDown className="w-4 h-4 text-brand-cyan" />
                  <span>Download Résumé PDF</span>
                </a>

                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-violet text-white text-sm font-medium shadow-lg"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
