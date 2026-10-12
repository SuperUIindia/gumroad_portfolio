import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    id: 1,
    role: "Senior Full-Stack Developer",
    company: "Aqlora Technologies",
    location: "Hyderabad, India (Hybrid)",
    employmentType: "Full-Time",
    isCurrent: true,
    joinDate: "Jan 2024",
    exitDate: "Present",
    duration: "2+ Years",
    accentColor: "#FF4D00",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    description: "Leading frontend architecture and full-stack feature delivery across high-traffic digital web applications and client portals.",
    achievements: [
      "Architected responsive Next.js applications serving 50k+ monthly active users with 99.9% uptime.",
      "Optimized Core Web Vitals and reduced bundle sizes by 40%, cutting initial page loads down to under 1.1s.",
      "Engineered secure RESTful and GraphQL APIs with role-based access control, PostgreSQL, and Redis caching.",
      "Mentored junior engineers and spearheaded automated CI/CD pipeline deployments on AWS infrastructure."
    ],
    skills: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Tailwind CSS"]
  },
  {
    id: 2,
    role: "Full-Stack Engineer",
    company: "InnovateX Labs",
    location: "Bangalore, India (Remote)",
    employmentType: "Full-Time",
    isCurrent: false,
    joinDate: "Jun 2022",
    exitDate: "Dec 2023",
    duration: "1 Year 7 Months",
    accentColor: "#3b82f6",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    description: "Built scalable SaaS dashboards, real-time analytics telemetry, and automated financial payment gateways.",
    achievements: [
      "Engineered high-performance real-time analytics dashboards using React, WebSockets, and Chart.js.",
      "Integrated multi-currency payment checkout pipelines via Stripe & PayPal APIs with automated webhooks.",
      "Developed reusable atomic UI component design systems in collaboration with product designers.",
      "Containerized microservices using Docker to streamline dev-to-production staging environments."
    ],
    skills: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Docker", "Framer Motion"]
  },
  {
    id: 3,
    role: "Frontend Software Developer",
    company: "PixelCraft Solutions",
    location: "Hyderabad, India (On-Site)",
    employmentType: "Full-Time",
    isCurrent: false,
    joinDate: "Aug 2021",
    exitDate: "May 2022",
    duration: "10 Months",
    accentColor: "#7C3AED",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    description: "Delivered responsive web interfaces, interactive client applications, and cross-browser optimized marketing platforms.",
    achievements: [
      "Built dynamic, interactive client-facing web portals with seamless animations and mobile-first responsiveness.",
      "Achieved 95+ Google Lighthouse scores across performance, SEO, accessibility, and best practices.",
      "Collaborated in Agile sprints with backend engineers to integrate RESTful API endpoints and state logic."
    ],
    skills: ["JavaScript (ES6+)", "React", "Tailwind CSS", "Redux", "REST APIs", "Git"]
  },
  {
    id: 4,
    role: "Web Development Intern",
    company: "TechSprint Incubator",
    location: "Remote",
    employmentType: "Internship",
    isCurrent: false,
    joinDate: "Jan 2021",
    exitDate: "Jul 2021",
    duration: "7 Months",
    accentColor: "#10B981",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      </svg>
    ),
    description: "Assisted senior developers in frontend implementation, bug resolution, testing, and UI enhancements.",
    achievements: [
      "Developed responsive landing pages and reusable component widgets using semantic HTML5, CSS3, and modern JavaScript.",
      "Conducted cross-device manual and automated UI testing, identifying and resolving 50+ layout bugs.",
      "Contributed to Git version control workflows and participated in weekly sprint code reviews."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git", "GitHub"]
  }
];

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="bg-[#f8f9fa] text-[#111] py-16 min-[480px]:py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden font-sans border-t border-black/5"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-black/10 pb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#FF4D00]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]"></span>
              Career Journey
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight">
              Professional<br />Experience
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:max-w-md"
          >
            <p className="text-[#111] text-lg md:text-xl font-medium leading-relaxed tracking-tight">
              A track record of engineering scalable digital products 
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#3b82f6] text-white mx-1.5 align-middle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>
              </span>
              and leading end-to-end architectures from 
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FF4D00] text-black mx-1.5 align-middle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </span>
              <span className="text-[#888]">startups to enterprise ecosystems.</span>
            </p>
          </motion.div>
        </div>

        {/* Experience Timeline Stream */}
        <div className="flex flex-col gap-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Left Accent indicator line on hover */}
              <div 
                className="absolute top-0 bottom-0 left-0 w-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: exp.accentColor }}
              />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                
                {/* Left Section: Company Icon, Company Name, Role, and Location */}
                <div className="flex items-start gap-4 sm:gap-5 flex-1">
                  
                  {/* Clean SVG Icon (NO image, clean icon box as requested) */}
                  <div 
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: exp.accentColor }}
                  >
                    {exp.icon}
                  </div>

                  <div className="space-y-1.5 flex-1">
                    {/* Role Title */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#111] group-hover:text-[#FF4D00] transition-colors">
                        {exp.role}
                      </h3>

                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>

                    {/* Company Name & Location Meta */}
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 font-medium">
                      <span className="font-bold text-[#111] text-base">{exp.company}</span>
                      <span className="text-gray-300">•</span>
                      <span>{exp.location}</span>
                      <span className="text-gray-300">•</span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-0.5 rounded-full font-semibold">
                        {exp.employmentType}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed pt-1 max-w-3xl">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Right Section: Dates (Join to Exit clearly mentioned) */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-2.5 flex-shrink-0 bg-gray-50/80 p-4 rounded-2xl border border-gray-100 min-w-[220px]">
                  
                  {/* Join to Exit Dates */}
                  <div className="space-y-1 lg:text-right">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
                      Tenure & Dates
                    </span>
                    <div className="flex items-center gap-2 text-sm font-bold text-[#111]">
                      <svg className="w-4 h-4 text-[#FF4D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>{exp.joinDate} &mdash; {exp.exitDate}</span>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-500">
                      Duration:
                    </span>
                    <span className="text-xs font-bold text-[#FF4D00] bg-[#FF4D00]/10 border border-[#FF4D00]/20 px-2.5 py-0.5 rounded-full">
                      {exp.duration}
                    </span>
                  </div>

                </div>

              </div>

              {/* Achievements & Responsibilities */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block">
                  Key Impact & Responsibilities
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {exp.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 leading-snug">
                      <span className="w-4 h-4 rounded-full bg-[#FF4D00]/15 text-[#FF4D00] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used Pills */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-gray-400 mr-1">Stack:</span>
                {exp.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-semibold bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;

