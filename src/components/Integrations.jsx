import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tools = [
  { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "jQuery", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
  { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "GraphQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
];

// Split tools into two rows for the marquee
const row1 = tools.slice(0, 9);
const row2 = tools.slice(9, 18);

const MarqueeRow = ({ items, reverse }) => {
  // Duplicate items to create a seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className="relative flex w-full overflow-hidden py-4">
      <motion.div
        className="flex gap-4 md:gap-8 w-max"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Adjust speed here
        }}
      >
        {duplicatedItems.map((tool, idx) => (
          <div 
            key={idx}
            className="flex-shrink-0 bg-white rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 w-24 h-24 md:w-36 md:h-36 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img 
              src={tool.src} 
              alt={tool.name} 
              className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Integrations = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef} 
      id="skills"
      className="relative bg-white py-16 md:py-24 overflow-hidden font-sans"
    >
      <div className="relative z-10 mx-auto flex flex-col items-center">
        
        {/* Glowing Indicator Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          Integrations
        </motion.div>

        {/* Custom Unique Heading like AboutStats */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(2rem,4vw,3.5rem)] font-medium text-center text-[#111] leading-[1.15] mb-12 max-w-4xl px-6"
        >
          Crafting scalable digital experiences with{" "}
          <span className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#7C3AED] mx-2 align-middle shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
          </span>
          modern and{" "}
          <span className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#FF4D00] mx-2 align-middle shadow-lg">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
          </span>
          <span className="text-[#888]">powerful tools</span>
        </motion.h2>

        {/* Marquee Rows with Faded Edges */}
        <div className="relative w-full max-w-[100vw] overflow-hidden flex flex-col gap-4 md:gap-8">
          
          {/* Faded edges overlay to make scrolling look clean */}
          <div className="absolute inset-y-0 left-0 w-[10vw] md:w-[15vw] bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[10vw] md:w-[15vw] bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
          
          {/* Row 1 - Left to Right (Reverse) */}
          <MarqueeRow items={row1} reverse={true} />
          
          {/* Row 2 - Right to Left (Normal) */}
          <MarqueeRow items={row2} reverse={false} />
          
        </div>
        
      </div>
    </section>
  );
};

export default Integrations;
