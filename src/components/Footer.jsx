import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PremiumFooter = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#FF4D00] text-white w-full min-h-screen flex flex-col justify-between pt-8 pb-4 px-6 md:px-12 overflow-hidden z-10" id="footer">
      
      {/* Top Header Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-sm font-medium">
        <div>
          <span className="block font-bold mb-1 text-white">Akhil Thadaka</span>
          <span className="text-white/60">Creative Developer</span>
        </div>
        
        <div className="hidden md:block text-white">
          {time} Local Time
        </div>

        <div className="flex flex-col gap-1">
          <a href="#projects" className="hover:underline text-white">Work</a>
          <a href="#about" className="hover:underline underline underline-offset-4 decoration-white/30">About</a>
          <a href="#certificates" className="hover:underline text-white">Certificates</a>
          <a href="#experience" className="hover:underline text-white">Experience</a>
          <a href="#contact" className="hover:underline text-white">Contact</a>
        </div>

        <div className="flex justify-between items-start">
          <button className="flex items-center gap-2 border border-white rounded-full px-4 py-1.5 hover:bg-white hover:text-[#FF4D00] transition-colors cursor-pointer">
            <img src="https://picsum.photos/seed/user/32/32" alt="Avatar" className="w-5 h-5 rounded-full" />
            Let's talk
          </button>
        </div>
      </div>

      {/* Middle Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 relative z-20">
        {/* Newsletter Card */}
        <div className="col-span-1 md:col-span-2">
          <div className="bg-[#111111] text-white rounded-[32px] p-4 flex flex-col md:flex-row gap-6 max-w-[450px]">
            <img src="https://picsum.photos/seed/news/200/200" alt="News" className="w-24 h-24 rounded-2xl object-cover" />
            <div className="flex flex-col justify-between py-2 flex-1">
              <h3 className="text-xl font-bold leading-tight mb-4">Keep up to date with<br/>My latest work</h3>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/10 rounded-full py-2.5 pl-4 pr-12 text-sm text-white placeholder-white/50 outline-none focus:bg-white/20 transition-colors"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FF4D00] rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform cursor-pointer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 19L19 5M19 5v10M19 5H9" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 flex flex-col gap-8 text-sm font-medium">
          <div className="flex flex-col gap-1">
            <a href="mailto:hello@example.com" className="hover:underline underline underline-offset-4 decoration-white/30 cursor-pointer">hello@example.com</a>
            <a href="tel:1234567890" className="hover:underline underline underline-offset-4 decoration-white/30 cursor-pointer">+1 (234) 567-890</a>
          </div>
          
          <div className="flex flex-col gap-0 leading-snug">
            <span className="text-white">Remote</span>
            <span className="text-white">Worldwide</span>
            <a href="#" className="hover:underline mt-1 text-white cursor-pointer">Get in touch</a>
          </div>
        </div>

        {/* Social Links */}
        <div className="col-span-1 flex flex-col gap-2 text-sm font-medium">
          <a href="#" className="hover:underline flex items-center gap-2 text-white cursor-pointer">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19L19 5M19 5v10M19 5H9" /></svg>
            Instagram
          </a>
          <a href="#" className="hover:underline flex items-center gap-2 underline underline-offset-4 decoration-white/30 cursor-pointer">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19L19 5M19 5v10M19 5H9" /></svg>
            LinkedIn
          </a>
          <a href="#" className="hover:underline flex items-center gap-2 text-white cursor-pointer">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19L19 5M19 5v10M19 5H9" /></svg>
            Twitter
          </a>
        </div>
      </div>

      {/* Massive Typography */}
      <div className="flex-1 flex items-end justify-center w-full mb-12">
        <h1 className="text-[14vw] md:text-[18vw] leading-[0.8] tracking-tighter font-bold text-center uppercase">
          Thadaka
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs font-medium border-t border-white/10 pt-4 gap-4 text-white">
        <div className="flex items-center gap-4 text-white">
          <span>© 2026 Akhil Thadaka</span>
          <a href="#" className="hover:underline cursor-pointer">Privacy Policy</a>
        </div>

        <button onClick={scrollToTop} className="flex items-center gap-1 hover:underline text-white cursor-pointer">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          Take me back to top
        </button>

        <div className="flex items-center gap-2 text-white">
          <span>scroll down</span>
          <div className="w-24 md:w-32 h-[1px] bg-white/20 relative">
            <div className="absolute top-0 left-0 h-full bg-white/60 w-full"></div>
          </div>
          <span>Crafted with passion</span>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
