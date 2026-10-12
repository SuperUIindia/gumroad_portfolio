import React from "react";
import { motion } from "framer-motion";

const AboutStats = () => {
  return (
    <section id="about" className="relative z-20 bg-[#f8f9fa] text-[#111] py-16 min-[480px]:py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden font-sans rounded-b-[3rem]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-20">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Label */}
          <div className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            About Us
          </div>

          {/* Heading */}
          <div className="lg:w-[75%]">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.1] tracking-tight"
            >
              A global consulting partner dedicated to building{" "}
              <span className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#7C3AED] mx-2 align-middle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/></svg>
              </span>
              smarter and{" "}
              <span className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#FF4D00]  mx-2 align-middle">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </span>
              <span className="text-[#888]">more adaptive</span>
            </motion.h2>
          </div>
        </div>

        {/* 4 Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#e9ecef] rounded-[2rem] p-8 flex flex-col justify-between aspect-square"
          >
            <div className="flex flex-wrap gap-2 justify-center opacity-70 mask-image-top">
               <span className="bg-white px-4 py-1.5 rounded-full text-xs font-semibold">Internet</span>
               <span className="bg-white px-4 py-1.5 rounded-full text-xs font-semibold">Strategic</span>
               <span className="bg-white px-4 py-1.5 rounded-full text-xs font-semibold">AI-driven</span>
               <span className="bg-white px-4 py-1.5 rounded-full text-xs font-semibold">Smarter</span>
               <span className="bg-white px-4 py-1.5 rounded-full text-xs font-semibold">Innovation</span>
               <span className="bg-white px-4 py-1.5 rounded-full text-xs font-semibold">Create</span>
               <span className="bg-white px-4 py-1.5 rounded-full text-xs font-semibold">Strategic</span>
               <span className="bg-white px-4 py-1.5 rounded-full text-xs font-semibold">StartupFund</span>
            </div>
            <div>
              <p className="text-sm font-medium text-[#555] mb-1">Continents</p>
              <h3 className="text-5xl font-medium tracking-tight">20+</h3>
            </div>
          </motion.div>

          {/* Card 2: Lime Green Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#FF4D00] text-white rounded-[2rem] p-8 flex flex-col justify-between aspect-square"
          >
            <div>
              <p className="text-sm font-medium text-white mb-4">Commitment to measurable</p>
              <h3 className="text-5xl font-medium tracking-tight">100%</h3>
            </div>
            <p className="text-sm font-medium leading-relaxed">
              Collaborating with leading AI and cloud technology providers.
            </p>
          </motion.div>

          {/* Card 3: Image Background */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-[2rem] p-8 flex flex-col justify-end aspect-square relative overflow-hidden text-white"
          >
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600&h=600&auto=format&fit=crop" 
              alt="Nature Drop" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="relative z-10">
              <h3 className="text-5xl font-medium tracking-tight mb-4">120+</h3>
              <p className="text-sm font-medium leading-relaxed text-white/80">
                Collaborating with leading AI and cloud technology providers.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Light Gray Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#7C3AED] text-white rounded-[2rem] p-8 flex flex-col justify-between aspect-square"
          >
            <div>
              <p className="text-sm font-medium text-white mb-4">Data Points</p>
              <h3 className="text-5xl font-medium text-white tracking-tight">520k+</h3>
            </div>
            <p className="text-sm font-medium leading-relaxed text-text-white">
              Analyzed monthly to power smarter business strategies.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutStats;
