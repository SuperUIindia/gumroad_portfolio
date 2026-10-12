import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sorted with NEWEST month/year first
const certificatesData = [
  {
    id: 1,
    title: "AWS Certified Cloud Developer Associate",
    issuer: "Amazon Web Services (AWS)",
    issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop",
    date: "March 2026",
    credentialId: "AWS-DVA-2026-9481",
    verifyUrl: "https://aws.amazon.com/verification",
    category: "Cloud & DevOps",
    skills: ["AWS Lambda", "DynamoDB", "Serverless", "Docker", "CI/CD"],
    credentialPoints: [
      "Architected serverless microservices handling 10k+ requests/sec",
      "Configured IAM role policies and least-privilege cloud security standards",
      "Automated infrastructure deployment using AWS CloudFormation / CDK"
    ]
  },
  {
    id: 2,
    title: "Meta Advanced React & Next.js Architecture",
    issuer: "Meta & Coursera",
    issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=900&auto=format&fit=crop",
    date: "January 2026",
    credentialId: "META-RN-2026-4401",
    verifyUrl: "https://coursera.org/verify/meta",
    category: "Frontend Architecture",
    skills: ["React 19", "Next.js 15", "Server Components", "Tailwind", "Zustand"],
    credentialPoints: [
      "Engineered SSR and ISR streaming data pipelines with minimal client payload",
      "Implemented enterprise state orchestration and optimistic UI updates",
      "Benchmarked and reduced First Contentful Paint (FCP) by 40%"
    ]
  },
  {
    id: 3,
    title: "Distributed Backend & Node.js Microservices",
    issuer: "OpenJS Foundation & Linux Foundation",
    issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
    date: "November 2025",
    credentialId: "OJS-NODE-2025-7731",
    verifyUrl: "https://openjsf.org/certification",
    category: "Backend Systems",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "WebSockets"],
    credentialPoints: [
      "Designed fault-tolerant REST and WebSocket APIs with rate limiting",
      "Integrated Redis caching to reduce database query latency by 65%",
      "Containerized microservices with Docker Compose for local and cloud environments"
    ]
  },
  {
    id: 4,
    title: "Google Enterprise UI/UX Design Professional",
    issuer: "Google Career Certificates",
    issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    image: "https://images.unsplash.com/photo-1581291518655-952384377063?q=80&w=900&auto=format&fit=crop",
    date: "August 2025",
    credentialId: "GGL-UX-2025-1029",
    verifyUrl: "https://coursera.org/verify/google",
    category: "UI/UX & Product Design",
    skills: ["Figma Design", "Design Systems", "WCAG 2.1", "User Testing", "Prototypes"],
    credentialPoints: [
      "Authored unified component design tokens spanning mobile and desktop",
      "Conducted usability testing across diverse demographics to refine UX flows",
      "Audited contrast ratios and keyboard navigation to achieve WCAG AAA compliance"
    ]
  },
  {
    id: 5,
    title: "Full-Stack Software Engineering Immersion",
    issuer: "freeCodeCamp & Stanford Online",
    issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop",
    date: "April 2025",
    credentialId: "FCC-FS-2025-8820",
    verifyUrl: "https://freecodecamp.org/certification",
    category: "Full Stack Web",
    skills: ["JavaScript ES6+", "MongoDB", "Express", "React", "Data Structures"],
    credentialPoints: [
      "Solved 200+ algorithm and algorithmic data structure challenges",
      "Constructed 5 full-stack capstone projects deployed to production",
      "Implemented JWT authentication, cookie management, and CORS policies"
    ]
  },
  {
    id: 6,
    title: "Modern TypeScript & Clean Architecture",
    issuer: "Microsoft Learn",
    issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop",
    date: "December 2024",
    credentialId: "MS-TS-2024-5519",
    verifyUrl: "https://learn.microsoft.com/credentials",
    category: "Software Engineering",
    skills: ["TypeScript", "Generics", "SOLID Principles", "Jest", "Clean Architecture"],
    credentialPoints: [
      "Refactored untyped codebases to strictly typed TypeScript with 0 compiler errors",
      "Authored complex utility types and generic repositories",
      "Achieved 90%+ unit test coverage using Jest and React Testing Library"
    ]
  }
];

const CertificatesTraining = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [copiedId, setCopiedId] = useState(false);

  const handleOpenCert = (cert) => {
    setSelectedCert(cert);
    setCopiedId(false);
  };

  const handleCloseCert = () => {
    setSelectedCert(null);
  };

  const handleCopyId = (id) => {
    navigator.clipboard?.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <section 
      id="certificates" 
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
              Credentials
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight">
              Certificates &<br />Training
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
              Certified technical qualifications and specialized industry training 
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#3b82f6] text-white mx-1.5 align-middle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              </span>
              ordered chronologically with 
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FF4D00] text-black mx-1.5 align-middle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              <span className="text-[#888]">most recent credentials first.</span>
            </p>
          </motion.div>
        </div>

        {/* Feature Grid: Cards showing Image, Title, Skills, and View Certificate Button */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-5 group/card cursor-pointer"
              onClick={() => handleOpenCert(cert)}
            >
              {/* Card Image Container */}
              <div className="bg-[#f8f9fa] rounded-[2rem] aspect-square relative overflow-hidden flex items-center justify-center group hover:scale-[1.02] transition-transform duration-500 border border-black/5 shadow-sm">
                
                {/* Category Badge (Top Left) */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-black text-xs font-bold px-4 py-2 rounded-full shadow-sm z-20 pointer-events-none">
                  {cert.category}
                </div>

                {/* Date Badge (Top Right - Newest First) */}
                <div className="absolute top-5 right-5 bg-black/75 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-20 pointer-events-none border border-white/10">
                  {cert.date}
                </div>

                {/* Certificate Visual Image */}
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 pointer-events-none" />

                {/* Hover Overlay: Center "View Certificate" Button */}
                <div className="absolute inset-0 bg-black/40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 pointer-events-none">
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenCert(cert);
                    }}
                    className="hidden md:flex pointer-events-auto bg-[#FF4D00] hover:bg-[#e03a1a] text-white px-6 py-3 rounded-full font-bold items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(255,68,34,0.6)] cursor-pointer"
                  >
                    <span>View Certificate</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Overlay: Skills tags and Mobile Button */}
                <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3 z-40 pointer-events-none px-4">
                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-black px-2.5 py-1 rounded-full shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full shadow-sm">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Mobile "View Certificate" Button */}
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenCert(cert);
                    }}
                    className="md:hidden pointer-events-auto bg-[#FF4D00] text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-lg w-max hover:bg-[#e03a1a]"
                  >
                    <span>View Certificate</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* Title & Organization Meta */}
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center p-0.5">
                    <img src={cert.issuerLogo} alt={cert.issuer} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-gray-500">{cert.issuer}</span>
                </div>
                
                {/* Certificate Title */}
                <h3 className="text-xl font-bold group-hover/card:text-[#FF4D00] transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Official Certificate Verification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseCert}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[999]"
            />

            {/* Modal Dialog */}
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-5 md:p-8 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#121316] text-white w-full max-w-3xl max-h-[90vh] rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white/10 pointer-events-auto flex flex-col overflow-hidden"
              >
                {/* Modal Header */}
                <div className="bg-[#1a1c22] px-6 py-4 border-b border-white/10 flex items-center justify-between flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    <span className="text-xs font-semibold text-gray-400 ml-2">Official Credential Verification</span>
                  </div>

                  <button
                    onClick={handleCloseCert}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Body */}
                <div className="overflow-y-auto p-6 md:p-8 space-y-6 flex-1">
                  
                  {/* Certificate Digital Plaque */}
                  <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4D00]/10 rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 p-2.5 flex items-center justify-center">
                          <img src={selectedCert.issuerLogo} alt={selectedCert.issuer} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold block">Certificate Issuer</span>
                          <span className="text-base font-bold text-white">{selectedCert.issuer}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="text-xs text-[#FF4D00] font-bold uppercase tracking-wider bg-[#FF4D00]/15 border border-[#FF4D00]/30 px-3 py-1 rounded-full">
                          {selectedCert.date}
                        </span>
                        <span className="text-[11px] text-emerald-400 mt-1 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          Status: Active & Verified
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase block">Awarded Program</span>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                        {selectedCert.title}
                      </h3>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2.5 pt-2 border-t border-white/10">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Competency Achievements</span>
                      <div className="space-y-2">
                        {selectedCert.credentialPoints.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                            <span className="w-4 h-4 rounded-full bg-[#FF4D00]/20 text-[#FF4D00] flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Skills & Tooling Verified</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, idx) => (
                        <span key={idx} className="bg-white/10 border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential ID and Verification Action */}
                  <div className="bg-[#1a1c22] rounded-xl p-4 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] text-gray-400 block">Unique Credential ID</span>
                      <span className="text-sm font-mono text-white font-bold">{selectedCert.credentialId}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopyId(selectedCert.credentialId)}
                        className="bg-white/10 hover:bg-white/20 text-xs font-semibold px-3 py-2 rounded-xl transition-colors text-gray-200 cursor-pointer"
                      >
                        {copiedId ? "Copied ID!" : "Copy ID"}
                      </button>

                      <a
                        href={selectedCert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FF4D00] hover:bg-[#e03a1a] text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
                      >
                        <span>Verify Online</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesTraining;
