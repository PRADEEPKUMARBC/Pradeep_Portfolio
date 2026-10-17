"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, MessageSquare, Clock } from "lucide-react";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name (at least 2 characters)"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  botField: z.string().max(0, "Bot detected"), // Honeypot
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "unconfigured">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      botField: "",
    },
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const onSubmit = async (data: ContactFormData) => {
    if (data.botField) return; // Silent discard for bots

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS keys are configured in environment
    if (!serviceId || !templateId || !publicKey) {
      setIsSubmitting(false);
      setSubmitStatus("unconfigured");
      setStatusMessage(
        "EmailJS environment keys are not configured yet. You can directly reach me at pradeepkumarbc138@gmail.com or click below to launch your email client."
      );
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: profileData.name,
        },
        publicKey
      );

      setIsSubmitting(false);
      setSubmitStatus("success");
      setStatusMessage("Your message has been sent successfully. I will get back to you shortly!");
      reset();

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch (err: unknown) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      const errDetail = err instanceof Error ? err.message : "Service request failed";
      setStatusMessage(`Unable to transmit message via EmailJS (${errDetail}). Please email me directly at ${profileData.email}`);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#050608] border-t border-white/5">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-brand-cyan" />
            <span>COMMUNICATION & INQUIRIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-content-primary tracking-tight">
            Have an idea worth building?
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-content-secondary">
            Let&apos;s turn thoughtful ideas into useful digital experiences. Whether you have an SDE opportunity, engineering question, or collaboration proposal, reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-brand-blue/30 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-content-muted block">Direct Email</span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm font-semibold text-white hover:text-brand-cyan transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-content-secondary hover:text-white transition-all"
                  aria-label="Copy email address"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-content-muted block">Location</span>
                  <span className="text-sm font-semibold text-white">
                    {profileData.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-violet/10 border border-brand-violet/20 text-brand-violetLight">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-content-muted block">Typical Response</span>
                  <span className="text-sm font-semibold text-white">
                    Within 24 business hours
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Mailto Fallback Button */}
            <div className="pt-2">
              <a
                href={`mailto:${profileData.email}?subject=Opportunity%20Inquiry%20via%20Portfolio`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-white transition-all"
              >
                <Mail className="w-4 h-4 text-brand-cyan" />
                <span>Open in Email Client</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10">
              
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-content-secondary mb-6 font-mono">
                Fill in the details below. Messages are routed directly to my inbox.
              </p>

              {/* Status Alert Banner */}
              {submitStatus !== "idle" && (
                <div
                  className={`p-4 rounded-xl border text-xs sm:text-sm mb-6 flex items-start gap-3 ${
                    submitStatus === "success"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                      : submitStatus === "unconfigured"
                      ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
                      : "bg-red-500/10 border-red-500/30 text-red-300"
                  }`}
                  role="alert"
                >
                  {submitStatus === "success" ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium mb-1">
                      {submitStatus === "success"
                        ? "Message Delivered"
                        : submitStatus === "unconfigured"
                        ? "Service Configuration Notice"
                        : "Delivery Unsuccessful"}
                    </p>
                    <p className="text-xs opacity-90 leading-relaxed">{statusMessage}</p>
                    
                    {submitStatus === "unconfigured" && (
                      <a
                        href={`mailto:${profileData.email}?subject=Direct%20Inquiry`}
                        className="inline-flex items-center gap-1.5 mt-2 text-xs font-mono text-white underline underline-offset-4 hover:text-brand-cyan"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send via Email Client</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Honeypot field (hidden from real users) */}
                <input
                  type="text"
                  {...register("botField")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-content-muted mb-2">
                      Your Name <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-content-muted text-sm focus:border-brand-blue focus:bg-white/[0.05] transition-all"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1 font-mono">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-content-muted mb-2">
                      Your Email <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-content-muted text-sm focus:border-brand-blue focus:bg-white/[0.05] transition-all"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1 font-mono">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-content-muted mb-2">
                    Subject <span className="text-brand-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("subject")}
                    placeholder="e.g. Software Development Opportunity / Project Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-content-muted text-sm focus:border-brand-blue focus:bg-white/[0.05] transition-all"
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400 mt-1 font-mono">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-content-muted mb-2">
                    Message <span className="text-brand-cyan">*</span>
                  </label>
                  <textarea
                    rows={5}
                    {...register("message")}
                    placeholder="Describe your inquiry, proposal, or feedback..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-content-muted text-sm focus:border-brand-blue focus:bg-white/[0.05] transition-all resize-none"
                  ></textarea>
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1 font-mono">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-accent hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
