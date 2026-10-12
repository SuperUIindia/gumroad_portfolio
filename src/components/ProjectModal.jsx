import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ isOpen, onClose, activeProject, allProjects = [], onSelectProject }) => {
  const [copied, setCopied] = useState(false);

  // Close on Escape, Navigate on Arrow keys
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, activeProject, allProjects]);

  if (!activeProject) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === activeProject.id);
  const totalProjects = allProjects.length;

  const handleNext = () => {
    if (totalProjects <= 1) return;
    const nextIndex = (currentIndex + 1) % totalProjects;
    onSelectProject(allProjects[nextIndex]);
  };

  const handlePrev = () => {
    if (totalProjects <= 1) return;
    const prevIndex = (currentIndex - 1 + totalProjects) % totalProjects;
    onSelectProject(allProjects[prevIndex]);
  };

  const handleCopyLink = () => {
    if (activeProject?.liveUrl) {
      navigator.clipboard?.writeText(activeProject.liveUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[999] transition-opacity"
          />

          {/* Modal Wrapper */}
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-5 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#121316] text-white w-full max-w-5xl max-h-[92vh] rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white/10 pointer-events-auto flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Browser Chrome Header */}
              <div className="bg-[#1a1c22] px-4 md:px-6 py-3.5 border-b border-white/10 flex items-center justify-between gap-4 flex-shrink-0 select-none">
                {/* Left: Window Controls + Project count */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={onClose}
                      title="Close"
                      className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:brightness-110 transition-all cursor-pointer flex items-center justify-center group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 text-[9px] text-black font-black leading-none">✕</span>
                    </button>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] inline-block opacity-80" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f] inline-block opacity-80" />
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 ml-2 text-xs font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    <span>Project</span>
                    <span className="text-white font-bold">{currentIndex + 1}</span>
                    <span>of</span>
                    <span>{totalProjects}</span>
                  </div>
                </div>

                {/* Center: Interactive Live Address Bar */}
                <div className="flex-1 max-w-md mx-auto hidden md:flex items-center justify-between bg-black/40 hover:bg-black/60 transition-colors border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-300">
                  <div className="flex items-center gap-2 truncate">
                    <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span className="text-gray-400">https://</span>
                    <span className="text-white font-mono truncate">{activeProject.liveUrl ? activeProject.liveUrl.replace(/^https?:\/\//, "") : "project-preview.live"}</span>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                    <button
                      onClick={handleCopyLink}
                      className="text-gray-400 hover:text-white transition-colors text-[11px] flex items-center gap-1 cursor-pointer"
                      title="Copy URL"
                    >
                      {copied ? (
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      ) : (
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                      )}
                    </button>
                    <span className="flex items-center gap-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      LIVE
                    </span>
                  </div>
                </div>

                {/* Right: Project Prev / Next + Close Button */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-white/5 rounded-full p-0.5 border border-white/10">
                    <button
                      onClick={handlePrev}
                      title="Previous project (←)"
                      className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNext}
                      title="Next project (→)"
                      className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>

                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer ml-1"
                    title="Close modal (Esc)"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Scrollable Content Body */}
              <div className="overflow-y-auto flex-1 p-4 sm:p-6 md:p-8 space-y-8 custom-scrollbar">
                
                {/* 1. Live View Canvas / Browser Preview Frame */}
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#08090b] shadow-2xl group">
                  {/* Floating Action Banner on Top of Preview */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-xs font-semibold shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-ping" />
                      <span className="w-2 h-2 rounded-full bg-[#FF4D00] -ml-4" />
                      <span>Live View: {activeProject.title}</span>
                    </div>

                    <a
                      href={activeProject.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto bg-[#FF4D00] hover:bg-[#e03a1a] text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-[0_0_20px_rgba(255,77,0,0.5)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <span>Open Live Site</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>

                  {/* High Quality Project Screen View (Scrollable / Full Display) */}
                  <div className="w-full relative min-h-[300px] md:min-h-[460px] max-h-[580px] overflow-y-auto bg-neutral-900/50 scroll-smooth">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-auto object-cover object-top block transition-transform duration-500"
                    />
                    
                    {/* Subtle Overlay Hint on Bottom */}
                    <div className="sticky bottom-0 inset-x-0 bg-gradient-to-t from-[#08090b] via-[#08090b]/80 to-transparent py-4 px-6 flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-[#FF4D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                        Scroll preview to explore full page interface
                      </span>
                      <span className="text-[11px] font-mono bg-white/10 px-2 py-0.5 rounded text-gray-300">
                        HD 1080p Preview
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2. Project Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-2">
                  {/* Left Column: Title, Description & Highlights */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="bg-[#FF4D00]/15 text-[#FF4D00] border border-[#FF4D00]/30 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                          {activeProject.category || "Project"}
                        </span>
                        <span className="bg-white/10 text-gray-300 font-semibold text-xs px-2.5 py-1 rounded-full">
                          {activeProject.year || "2025"}
                        </span>
                        <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          Production Ready
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                        {activeProject.title}
                      </h3>

                      <p className="text-gray-300 text-base md:text-lg leading-relaxed font-normal">
                        {activeProject.fullDescription || activeProject.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    {activeProject.highlights && activeProject.highlights.length > 0 && (
                      <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF4D00]">
                          Key Highlights & Architecture
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeProject.highlights.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 bg-white/[0.03] border border-white/5 rounded-xl p-3.5 hover:border-white/10 transition-colors"
                            >
                              <div className="w-5 h-5 rounded-full bg-[#FF4D00]/20 text-[#FF4D00] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </div>
                              <span className="text-sm text-gray-300 leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Tech Stack & Actions */}
                  <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
                    {/* Technologies Used */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {(activeProject.tags || ["React", "Tailwind"]).map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs px-3 py-1.5 rounded-full transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Call to Actions */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Live Actions
                      </h4>
                      
                      <div className="flex flex-col gap-3">
                        <a
                          href={activeProject.liveUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-[#FF4D00] hover:bg-[#e03a1a] text-white py-3.5 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,77,0,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                        >
                          <span>Launch Live Project</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>

                        {activeProject.githubUrl && (
                          <a
                            href={activeProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white py-3 px-6 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            <span>View Source Code</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Quick Project Switcher Pills */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Other Projects
                      </h4>
                      <div className="flex flex-col gap-2">
                        {allProjects.map((p) => {
                          const isSelected = p.id === activeProject.id;
                          return (
                            <button
                              key={p.id}
                              onClick={() => onSelectProject(p)}
                              className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-[#FF4D00]/20 text-[#FF4D00] border border-[#FF4D00]/40"
                                  : "bg-white/[0.03] text-gray-300 hover:bg-white/[0.08] border border-white/5"
                              }`}
                            >
                              <span className="truncate">{p.title}</span>
                              <span className="text-[10px] opacity-75">{p.category}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Navigation Bar */}
              <div className="bg-[#16181e] px-6 py-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline">Use</span>
                  <kbd className="bg-white/10 text-white font-mono px-2 py-0.5 rounded text-[11px] border border-white/10">Esc</kbd>
                  <span className="hidden sm:inline">to close,</span>
                  <kbd className="bg-white/10 text-white font-mono px-2 py-0.5 rounded text-[11px] border border-white/10">←</kbd>
                  <kbd className="bg-white/10 text-white font-mono px-2 py-0.5 rounded text-[11px] border border-white/10">→</kbd>
                  <span className="hidden sm:inline">to navigate</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <span>← Previous</span>
                  </button>
                  <span className="text-gray-600">|</span>
                  <button
                    onClick={handleNext}
                    className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <span>Next →</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

