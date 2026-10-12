import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CircularWave from "./CircularWave";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 80]);

  return (
    <section className="relative z-40 w-full h-auto min-h-[100svh] md:h-[100svh] md:min-h-[700px] bg-white font-sans flex flex-col md:block" id="home">
      
      {/* Image + AQLORA - Mobile First Position (visible only on < 600px) */}
      <div className="block min-[600px]:hidden relative z-10 w-full pt-[70px] pointer-events-none">
        <div className="w-full px-2 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex justify-center"
          >
            <img 
              src="https://i.ibb.co/8L1nfKVs/Firefly-Gemini-Flash-change-inner-black-short-to-white-short-and-background-textchange-realted-i-am.png" 
              alt="Dominic" 
              className="w-auto h-[55vh] min-[480px]:h-[60vh] max-w-[90vw] object-cover object-top"
              style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }}
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(4rem,20vw,8rem)] min-[480px]:text-[clamp(5rem,22vw,9rem)] font-bold text-[#FF5300] tracking-tighter leading-[0.85] -mt-6 min-[480px]:-mt-8"
          >
            AQLORA
          </motion.h1>
        </div>
      </div>

      {/* 1. Left Block: Heading (Top on mobile, Left on desktop) */}
      <div className="relative z-30 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 pt-4 min-[600px]:pt-[74px] md:pt-0 pointer-events-none md:absolute md:inset-0">
<div className="pointer-events-auto flex flex-col gap-6 max-w-lg md:absolute md:top-1/2 md:-translate-y-1/2 md:left-12 lg:left-24 bottom-[20%]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 bg-black/5 border border-black/10 backdrop-blur-md rounded-full px-5 py-2 w-max"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b35] animate-pulse" />
            <span className="text-black/90 text-[10px] min-[480px]:text-[11px] md:text-xs font-bold tracking-widest uppercase">Available for Work</span>
          </motion.div>
          
         <motion.h2
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.4,
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="text-[30px] min-[480px]:text-[34px] sm:text-[35px]  md:text-[40px] font-bold text-black leading-[1.1] tracking-tight"
>
           
Figma & UI/UX<br />
Designer based in India
  {/* AI Engineer & Website Developer<br />
 Building Smart AI Solutions <br />
  & Stunning Websites. */}
</motion.h2>
        </div>
      </div>

      {/* 2. Middle Block: Image & Massive Text */}
      {/* Mobile: takes up relative flex space so bottom block flows below it. Desktop: absolute bottom overlapping everything. */}
      <div className="hidden min-[600px]:block relative flex-1 w-full min-h-[50vh] md:min-h-0 md:h-full md:absolute md:bottom-0 md:left-0 z-0 md:z-10 pointer-events-none -mt-[8px] md:mt-0">
        
        {/* Base Layer: Massive Text (hidden on < 600px, shown on >= 600px) */}
        <motion.div 
          style={{ y: y1 }}
          className="hidden min-[600px]:flex absolute bottom-0 left-0 w-full px-4 md:px-12 justify-center z-0"
        >
          <h1 className="text-[clamp(5rem,24vw,30rem)] font-bold text-[#FF5300] tracking-tighter leading-[0.75]">
            AQLORA
          </h1>
        </motion.div>

        {/* Portrait Image (hidden on < 600px since it's in the mobile-first block) */}
        <motion.div 
          className="hidden min-[600px]:flex absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-full md:h-[70vh] lg:h-[85vh] z-10 items-end justify-center px-4 md:px-12"
        >
          <img 
            src="https://i.ibb.co/8L1nfKVs/Firefly-Gemini-Flash-change-inner-black-short-to-white-short-and-background-textchange-realted-i-am.png" 
            alt="Dominic" 
            className="w-auto h-full max-w-[95vw] object-cover object-bottom md:object-top md:scale-[1.05] origin-bottom"
            style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }}
          />
        </motion.div>

        {/* Foreground Layer: Stroked Text (hidden on < 600px, shown on >= 600px) */}
        <motion.div 
          style={{ y: y1 }}
          className="hidden min-[600px]:flex absolute bottom-0 left-0 w-full px-4 md:px-12 justify-center z-20 mix-blend-overlay opacity-90"
        >
          <h1 
            className="text-[clamp(5rem,24vw,30rem)] font-bold text-transparent tracking-tighter leading-[0.75]" 
            style={{ WebkitTextStroke: '2px rgba(0, 0, 0, 0.5)' }}
          >
            AQLORA
          </h1>
        </motion.div>
      </div>

      {/* 3. Right Block: Bio & Button (Bottom on mobile, Right on desktop) */}
      <div className="relative z-30 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 pb-24 pt-4 min-[600px]:pt-16 md:p-0 pointer-events-none md:absolute md:inset-0">
        <div className="pointer-events-auto flex flex-col gap-6 md:gap-8 max-w-sm md:absolute md:top-1/2 md:-translate-y-1/2 md:right-12 lg:right-24 bottom-[15%]">
          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-600 text-sm min-[480px]:text-base md:text-base leading-relaxed"
          >
            Hi, I'm Akhil Thadaka – a UI/UX and brand designer passionate about creating seamless digital experiences that connect and convert.
          </motion.p>
          
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            {/* 1st Place: Download Resume */}
            <motion.a 
              href="/resume.pdf"
              download="Resume.pdf"
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FF5300] hover:bg-[#ff6b35] transition-all duration-300 rounded-full p-1.5 pr-7 flex items-center gap-3.5 w-max group shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 cursor-pointer text-white no-underline hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center text-[#FF5300] group-hover:scale-95 transition-transform duration-300 shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform duration-300">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm min-[480px]:text-base">Download Resume</span>
            </motion.a>

          </div>
        </div>
      </div>

      {/* 5. Circular Wave Overlay */}
      {/* <div className="absolute bottom-[10px] left-0 w-full z-40">
        <CircularWave />
      </div> */}
    </section>
  );
};

export default Hero;
