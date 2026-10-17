"use client";

import React, { useState } from "react";
import { certificationsData } from "@/data/certifications";
import { CertificationItem } from "@/types";
import { Award, ExternalLink, FileText, CheckCircle, ShieldCheck, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="relative py-28 bg-[#050608] border-t border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan mb-4">
            <Award className="w-3.5 h-3.5 text-brand-cyan" />
            <span>ACCREDITATIONS & CREDENTIALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-content-primary tracking-tight">
            Verified certifications.
          </h2>
          
          <p className="mt-3 text-base text-content-secondary">
            Verified credentials evaluated against industry skill standards and role certifications.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-brand-blue/30 transition-all card-hover-effect flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-mono border ${cert.badgeColor}`}>
                    {cert.type} Certification
                  </span>

                  {cert.credentialId && (
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified ID</span>
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-sm font-medium text-brand-cyan mb-4">
                  {cert.issuer}
                </p>

                {cert.issueDate && (
                  <p className="text-xs font-mono text-content-muted mb-4">
                    Earned: <span className="text-content-secondary">{cert.issueDate}</span>
                  </p>
                )}

                {cert.credentialId && (
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 mb-4 font-mono text-xs">
                    <span className="text-content-muted block text-[10px] uppercase tracking-wider mb-1">
                      Certificate ID
                    </span>
                    <span className="text-content-primary select-all">
                      {cert.credentialId}
                    </span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                {cert.pdfUrl && (
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-cyan hover:text-white transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View PDF</span>
                  </a>
                )}

                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-all ml-auto"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3 text-content-muted" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-content-muted ml-auto flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    <span>Completed</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
