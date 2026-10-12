import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { CONTACT_CONFIG } from "../config/contactConfig";

const serviceOptions = [
  "Full-Stack Web App",
  "Frontend & UI/UX",
  "Backend & APIs",
  "SaaS MVP",
  "Consulting"
];

const budgetOptions = [
  "< $2,000",
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+"
];

const ContactSection = () => {
  const [selectedService, setSelectedService] = useState("Full-Stack Web App");
  const [selectedBudget, setSelectedBudget] = useState("$2,000 - $5,000");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState("");

  // Live IST local time display
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("hello.superui@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "loading", message: "Sending your message..." });

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", CONTACT_CONFIG.accessKey);
    formData.append("service_requested", selectedService);
    formData.append("budget_range", selectedBudget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I will get back to you within 24 hours."
        });
        e.target.reset();
      } else {
        setStatus({
          type: "error",
          message: "Unable to send. Please try again."
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="bg-[#f8f9fa] text-[#111] py-20 min-[480px]:py-28 md:py-36 px-6 md:px-12 lg:px-20 font-sans rounded-t-[3.5rem] relative overflow-hidden shadow-sm z-20 border-t border-black/5"
    >
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col gap-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-black/10 pb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#FF4D00]">
              <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#FF4D00] -ml-4" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight text-[#111]">
              Let's Build Something<br />
              <span className="text-[#111]">
                Extraordinary.
              </span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:max-w-md"
          >
            <p className="text-[#555] text-lg md:text-xl font-medium leading-relaxed tracking-tight">
              Have an innovative concept, product roadmap, or architectural challenge? 
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FF4D00] text-white mx-1.5 align-middle shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
              Let's discuss how we can bring it to life with 
              <span className="text-[#111] font-bold"> modern speed and precision.</span>
            </p>
          </motion.div>
        </div>

        {/* 2-Column Grid: Left Contact Info / Right Pro Form (Clean White Design) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols): Direct Contacts & Quick Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Status Card */}
            <div className="bg-white border border-black/5 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF4D00]">
                  Availability
                </span>
                <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available Now
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#111]">
                Open for Freelance & Senior Engineering Contracts
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Available for full-stack web applications, UI architecture, enterprise consulting, and scalable systems.
              </p>
            </div>

            {/* Direct Connect Options */}
            <div className="space-y-4">
              
              {/* Email Card with 1-Click Copy */}
              <div className="bg-white hover:bg-gray-50 border border-black/5 rounded-2xl p-5 transition-all duration-300 flex items-center justify-between gap-4 shadow-sm group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FF4D00]/10 text-[#FF4D00] flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 block uppercase tracking-wider">Direct Email</span>
                    <a href="mailto:hello.superui@gmail.com" className="text-sm sm:text-base font-bold text-[#111] hover:text-[#FF4D00] transition-colors">
                      hello.Superui@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-black text-xs font-semibold px-3 py-2 rounded-xl transition-all cursor-pointer flex-shrink-0"
                >
                  {copiedEmail ? "Copied!" : "Copy"}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="bg-white hover:bg-gray-50 border border-black/5 rounded-2xl p-5 transition-all duration-300 flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 block uppercase tracking-wider">Phone / WhatsApp</span>
                    <a href="tel:+919121751697" className="text-sm sm:text-base font-bold text-[#111] hover:text-[#3b82f6] transition-colors">
                      +91 9876543210
                    </a>
                  </div>
                </div>

                <a
                  href="https://wa.me/9876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Chat</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Location & Timezone Card */}
              <div className="bg-white border border-black/5 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 block uppercase tracking-wider">Base Location</span>
                    <span className="text-sm sm:text-base font-bold text-[#111]">
                      Hyderabad, India
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-mono text-gray-500 block">Local Time (IST)</span>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    {localTime || "14:00 IST"}
                  </span>
                </div>
              </div>

            </div>

            {/* Social Pill Links */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block">
                Connect Across Channels
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "GitHub", url: "https://github.com" },
                  { name: "LinkedIn", url: "https://linkedin.com" },
                  { name: "Instagram", url: "https://instagram.com" },
                  { name: "Twitter / X", url: "https://x.com" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-[#FF4D00] hover:text-white border border-black/10 hover:border-[#FF4D00] text-gray-700 text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>{item.name}</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17l10-10M17 17V7H7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column (7 Cols): Clean White Pro Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-black/5 rounded-[2.5rem] p-6 sm:p-9 md:p-11 shadow-lg relative">
              
              <div className="mb-8 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF4D00]">
                  Direct Inquiry
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111] tracking-tight">
                  Start a Conversation
                </h3>
                <p className="text-gray-600 text-sm">
                  Fill in the details below. All inquiries receive a guaranteed response within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Service Selection Chips */}
                <div className="space-y-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                    What are you looking to build?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((service, idx) => {
                      const isSelected = selectedService === service;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedService(service)}
                          className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#FF4D00] text-white shadow-md border border-[#FF4D00]"
                              : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-transparent"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Budget Range Selector */}
                <div className="space-y-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                    Estimated Budget Range
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((budget, idx) => {
                      const isSelected = selectedBudget === budget;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedBudget(budget)}
                          className={`text-xs font-semibold py-2 px-3 rounded-xl transition-all text-center cursor-pointer ${
                            isSelected
                              ? "bg-[#111] text-white font-bold shadow-md"
                              : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-transparent"
                          }`}
                        >
                          {budget}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alexander Vance"
                      className="w-full bg-gray-50 focus:bg-white border border-gray-200 focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 rounded-xl px-4 py-3.5 text-sm text-[#111] placeholder-gray-400 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full bg-gray-50 focus:bg-white border border-gray-200 focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 rounded-xl px-4 py-3.5 text-sm text-[#111] placeholder-gray-400 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* 4. Subject / Company Name (Optional) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">Company or Organization (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="e.g. Acme Innovations"
                    className="w-full bg-gray-50 focus:bg-white border border-gray-200 focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 rounded-xl px-4 py-3.5 text-sm text-[#111] placeholder-gray-400 outline-none transition-all"
                  />
                </div>

                {/* 5. Project Details Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">Project Goals & Timeline *</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Describe your project, key milestones, existing tech stack, and timeline expectations..."
                    className="w-full bg-gray-50 focus:bg-white border border-gray-200 focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 rounded-xl p-4 text-sm text-[#111] placeholder-gray-400 outline-none transition-all resize-none leading-relaxed"
                  />
                </div>

                {/* Status Message Display */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-xs sm:text-sm font-medium border flex items-center gap-3 ${
                      status.type === "success"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : status.type === "error"
                        ? "bg-red-50 text-red-700 border-red-200"
                        : "bg-gray-100 text-gray-700 border-gray-200"
                    }`}
                  >
                    {status.type === "success" && (
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0">
                        ✓
                      </span>
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}

                {/* 6. Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF4D00] hover:bg-[#e03a1a] disabled:opacity-50 text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-2.5 shadow-[0_10px_25px_rgba(255,77,0,0.3)] transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-sm group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-gray-500">
                  🔒 Information is kept strictly private. Zero spam guaranteed.
                </p>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
