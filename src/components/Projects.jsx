import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "E-Commerce",
    year: "2025",
    description: "A full-stack online store with seamless payment integration and modern UI.",
    fullDescription: "Architected and developed a full-featured digital commerce storefront for luxury handloom sarees and apparel. Features an interactive product catalog, instant cart drawer, multi-currency payment checkout with Stripe, real-time inventory synchronization, and mobile-first responsive architecture.",
    image: "https://i.postimg.cc/wjLMyFQX/af834f8022709f72bd0c4fef0d5188b4.jpg",
    tags: ["React", "Node.js", "Tailwind", "Stripe", "Express", "MongoDB"],
    liveUrl: "https://handloom-store.vercel.app",
    githubUrl: "https://github.com/akhilthadaka/ecommerce-platform",
    highlights: [
      "Custom product filtering and category discovery",
      "Seamless multi-step checkout workflow with Stripe gateway",
      "Optimized asset pipeline with sub-second page transitions",
      "Fully responsive layouts crafted for mobile, tablet, and desktop"
    ]
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: "Dashboard",
    year: "2026",
    description: "Real-time data visualization and secure user portal for financial tracking.",
    fullDescription: "A high-performance financial analytics and investment tracking console. Features live telemetry updates, interactive data visualization widgets, account balance aggregation, and encrypted transaction management built with Next.js and Firebase.",
    image: "https://i.postimg.cc/L85dGsn8/a14f96b03f414a2a2ce2e1f674c65e14.jpg",
    tags: ["Next.js", "Tailwind", "Firebase", "Chart.js", "TypeScript"],
    liveUrl: "https://fintech-dashboard.vercel.app",
    githubUrl: "https://github.com/akhilthadaka/fintech-dashboard",
    highlights: [
      "Real-time balance telemetry and streaming market indicators",
      "Custom interactive data visualization widgets and trend forecasting",
      "Role-based authentication with Firebase security rules",
      "Instant CSV/PDF reporting and financial audit logs"
    ]
  },
  {
    id: 3,
    title: "SaaS Application",
    category: "SaaS",
    year: "2025",
    description: "A multi-tenant software solution built for enterprise productivity.",
    fullDescription: "An enterprise-grade SaaS collaboration suite designed for modern distributed teams. Features automated task workflows, workspace isolation, granular permission systems, and scalable cloud deployment orchestrated with Docker and AWS.",
    image: "https://i.postimg.cc/dQCVS4g8/5e8ecca6a42961b3e91a5afc7d9b8549.jpg",
    tags: ["Vue.js", "Django", "AWS", "Docker", "PostgreSQL"],
    liveUrl: "https://enterprise-saas.vercel.app",
    githubUrl: "https://github.com/akhilthadaka/enterprise-saas",
    highlights: [
      "Multi-tenant data isolation and organization workspaces",
      "Automated CI/CD pipelines and high-availability cloud infrastructure",
      "Real-time collaborative kanban boards and workflow automation",
      "RESTful & GraphQL API integration with 99.99% service uptime"
    ]
  },
  {
    id: 4,
    title: "AI Studio & Workflow Engine",
    category: "AI Platform",
    year: "2026",
    description: "Generative AI writing, multimodal canvas, and automated workflow pipeline platform.",
    fullDescription: "An intelligent generative AI studio built for product teams and creators. Powered by OpenAI & Gemini LLM integrations with prompt chaining, real-time streaming text outputs, vector embeddings with Pinecone, and team collaboration workspaces.",
    image: "https://i.postimg.cc/vTykhr4p/e5731d7bd65d27b44183fefc56989fe5-(1).jpg",
    tags: ["Next.js", "OpenAI", "Tailwind", "TypeScript", "Pinecone"],
    liveUrl: "https://ai-content-studio.vercel.app",
    githubUrl: "https://github.com/akhilthadaka/ai-studio",
    highlights: [
      "Real-time streaming LLM response pipelines with token caching",
      "Multimodal prompt workspace with visual artifact generation",
      "Vector search indexing for semantic knowledge retrieval",
      "Modular team permission matrices and audit telemetry"
    ]
  },
  {
    id: 5,
    title: "Real Estate Marketplace",
    category: "Real Estate",
    year: "2025",
    description: "Interactive property discovery portal featuring geospatial mapping and 3D tours.",
    fullDescription: "A comprehensive real estate discovery platform featuring interactive geospatial map search powered by Mapbox GL, property valuation estimation algorithms, virtual inspection 3D tours, and direct scheduling with certified agents.",
    image: "https://i.postimg.cc/Tw3T0vBz/26fb7dbae17f682a2b10a67c6ffe5ad2.jpg",
    tags: ["React", "Mapbox GL", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://property-marketplace.vercel.app",
    githubUrl: "https://github.com/akhilthadaka/realestate-portal",
    highlights: [
      "Interactive map polygon search and real-time bounding box updates",
      "Granular price filter matrices and mortgage amortization calculator",
      "Optimized high-res image gallery with progressive lazy loading",
      "Instant calendar booking integration for agent walkthroughs"
    ]
  },
  {
    id: 6,
    title: "Telemedicine & Health Portal",
    category: "HealthTech",
    year: "2025",
    description: "HIPAA-compliant telemedicine platform with video consultations and digital records.",
    fullDescription: "Secure digital health infrastructure enabling encrypted WebRTC video visits between doctors and patients, automated appointment scheduling, digital medical history management, and pharmacy prescription synchronization.",
    image: "https://i.postimg.cc/T18f65Kx/7c9d63fd9d55ba1b69a45a38e188d88f.jpg",
    tags: ["Next.js", "WebRTC", "PostgreSQL", "Tailwind", "Prisma"],
    liveUrl: "https://telehealth-platform.vercel.app",
    githubUrl: "https://github.com/akhilthadaka/telehealth-platform",
    highlights: [
      "End-to-end encrypted WebRTC video and chat consultations",
      "Automated appointment booking and calendar synchronization",
      "Digital prescription management with pharmacy delivery dispatch",
      "HIPAA-compliant patient records vault and role authentication"
    ]
  },
  {
    id: 7,
    title: "DevOps & Cloud Monitoring Console",
    category: "Cloud / DevOps",
    year: "2026",
    description: "Real-time cluster telemetry, distributed log aggregator, and metric alerting system.",
    fullDescription: "Enterprise observability dashboard providing real-time telemetry across distributed container clusters. Features live latency tracking, anomaly detection, automated incident alerting via webhooks, and log queries.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    tags: ["React", "Docker", "Prometheus", "Node.js", "Tailwind"],
    liveUrl: "https://devops-console.vercel.app",
    githubUrl: "https://github.com/akhilthadaka/devops-console",
    highlights: [
      "Streaming metrics aggregation with sub-second chart updates",
      "Configurable threshold alert triggers dispatching to Slack and Discord",
      "Container health status drill-down with CPU and RAM utilization",
      "Zero-dependency lightweight dashboard client architecture"
    ]
  },
  {
    id: 8,
    title: "Web3 DeFi Portfolio Tracker",
    category: "Web3 / DeFi",
    year: "2025",
    description: "Decentralized wallet asset tracking, multi-chain liquidity metrics, and yield analytics.",
    fullDescription: "A multi-chain asset management console querying live smart contract balances across Ethereum, Polygon, and Arbitrum. Provides real-time token pricing, LP pool yield farming metrics, and transaction history.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=900&auto=format&fit=crop",
    tags: ["Next.js", "Ethers.js", "Tailwind", "GraphQL", "Web3"],
    liveUrl: "https://web3-portfolio.vercel.app",
    githubUrl: "https://github.com/akhilthadaka/web3-portfolio",
    highlights: [
      "Multi-chain RPC aggregation with balance auto-discovery",
      "Interactive asset allocation charts with historical performance",
      "Gas price estimation widget and slippage calculation",
      "Non-custodial read-only architecture with zero private key risks"
    ]
  },
  {
    id: 9,
    title: "Interactive Learning Platform",
    category: "EdTech",
    year: "2025",
    description: "Modern interactive classroom platform with video lessons, code exercises, and quizzes.",
    fullDescription: "An immersive e-learning environment featuring structured video curriculums, in-browser code editor playgrounds with instant execution feedback, peer discussion forums, and automated certificate issuance.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=900&auto=format&fit=crop",
    tags: ["React", "Node.js", "Monaco Editor", "PostgreSQL", "Tailwind"],
    liveUrl: "https://interactive-lms.vercel.app",
    githubUrl: "https://github.com/akhilthadaka/interactive-lms",
    highlights: [
      "Integrated in-browser Monaco code editor with live syntax checking",
      "Video lesson progress tracking with resume timestamps",
      "Automated quiz grading and instant credential badge generation",
      "Community discussion threads with markdown and code snippets"
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Reveals next 3 cards on every click, or resets back to 3 if all are visible
  const handleViewMore = () => {
    if (visibleCount < projectsData.length) {
      setVisibleCount((prev) => Math.min(prev + 3, projectsData.length));
    } else {
      setVisibleCount(3);
    }
  };

  const visibleProjects = projectsData.slice(0, visibleCount);
  const hasMore = visibleCount < projectsData.length;

  return (
    <section id="projects" className="bg-[#f8f9fa] text-[#111] py-16 min-[480px]:py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden font-sans rounded-t-[3rem]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        
        {/* Header Section: Left Title, Right Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-black/10 pb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#7C3AED]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></span>
              Portfolio
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight">
              Featured<br />Projects
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
              Architecting high-performance digital products 
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#7C3AED] text-white mx-1.5 align-middle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z"/></svg>
              </span>
              and scalable enterprise solutions. Discover a curated showcase of advanced 
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FF4D00] text-black mx-1.5 align-middle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </span>
              <span className="text-[#111]">technical implementations.</span>
            </p>
          </motion.div>
        </div>

        {/* Feature Grid: Symmetrical 3 columns with ZERO whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
                className="flex flex-col gap-6 cursor-pointer group/card"
                onClick={() => handleOpenProject(project)}
              >
                {/* Main Graphic Card Container */}
                <div className="bg-[#f8f9fa] rounded-[2rem] aspect-square relative overflow-hidden flex items-center justify-center group hover:scale-[1.02] transition-transform duration-500 border border-black/5 shadow-sm">
                  {/* Category Badge (Top Left) */}
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-black text-xs font-bold px-4 py-2 rounded-full shadow-sm z-20 pointer-events-none">
                    {project.category}
                  </div>

                  {/* Project Image */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                  {/* Hover Overlay: Center "View Project" Pill */}
                  <div className="absolute inset-0 bg-black/40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 pointer-events-none">
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenProject(project);
                      }}
                      className="hidden md:flex pointer-events-auto bg-[#FF4D00] hover:bg-[#e03a1a] text-white px-6 py-3 rounded-full font-bold items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(255,68,34,0.6)] cursor-pointer"
                    >
                      <span>View Project</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Overlay: Tags and Mobile View Button */}
                  <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3 z-40 pointer-events-none px-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-full shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenProject(project);
                      }}
                      className="md:hidden pointer-events-auto bg-[#FF4D00] text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-lg w-max hover:bg-[#e03a1a]"
                    >
                      <span>View Project</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Title & Description Below Image: Text turns #7C3AED on hover */}
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover/card:text-[#7C3AED] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#555] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Prominent "View More Project" Action Button */}
        <div className="flex justify-center items-center pt-4">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleViewMore}
            className="bg-[#FF4D00] hover:bg-[#e03a1a] text-white rounded-3xl p-5 sm:p-6 flex items-center justify-between gap-6 sm:gap-10 shadow-[0_10px_35px_rgba(255,77,0,0.35)] cursor-pointer transition-all duration-300 min-w-[280px] sm:min-w-[340px]"
          >
            <span className="font-bold text-xl sm:text-2xl tracking-wide select-none">
              {hasMore ? "View More Project" : "Show Less Project"}
            </span>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="black" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={hasMore ? "" : "-rotate-90 transition-transform duration-300"}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Interactive Project Modal with Live View */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        activeProject={selectedProject}
        allProjects={projectsData}
        onSelectProject={setSelectedProject}
      />
    </section>
  );
};

export default Projects;
