import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

import MorphedMenu from './MorphedMenu';
import ContactModal from './ContactModal';
import HireModal from './HireModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'AboutUs', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="absolute top-0 w-full z-50 py-2 px-2 min-[480px]:py-2.5 min-[480px]:px-4 sm:py-3 sm:px-4 md:px-12 lg:px-16 xl:px-24">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1 min-[480px]:gap-1.5 sm:gap-2 cursor-pointer">
          <div className="flex text-primary">
            {/* Custom SVG matching the design */}
            {/* <svg className="w-[28px] h-[28px]" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="6" height="16" />
              <rect x="10" y="14" width="6" height="10" />
              <rect x="18" y="14" width="6" height="6" />
            </svg> */}

            <svg class="w-[28px] h-[28px]" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="6" height="16"></rect>
            <rect x="10" y="8" width="6" height="12"></rect>
            <rect x="18" y="14" width="6" height="6"></rect>
            </svg>

          </div>
          <span className="text-[24px] min-[480px]:text-[22px] sm:text-[15px] md:text-[22px] font-semibold text-primary tracking-tight">AKHIL THADAKA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group py-2">
              <a 
                href={link.href} 
                onClick={(e) => {
                  if (link.name === 'Contact') {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }
                }}
                className="text-slate-500 hover:text-slate-800 transition-colors text-[15px] font-medium flex items-center gap-1.5"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />}
              </a>
              
              {link.hasDropdown && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 min-w-[200px] flex flex-col gap-1">
                    {['Blog', 'Guides', 'Help Center'].map((item) => (
                      <a key={item} href="#" className=" px-4 py-2.5 text-[14px] text-black hover:text-primary hover:bg-gray-50 rounded-lg font-medium transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button Desktop */}
        <div className="hidden lg:block">
          <button 
            onClick={() => setIsHireModalOpen(true)}
            className="bg-[#ff4d00] text-white px-5 py-2.5 rounded-xl font-medium text-[15px] hover:bg-[#7C3AED] transition-colors shadow-sm cursor-pointer"
          >
            Hire Me Know
          </button>
        </div>

        {/* Mobile Morphed Menu */}
        <div className="lg:hidden relative w-[80px] h-[34px] min-[480px]:w-[110px] min-[480px]:h-[46px]">
          <MorphedMenu 
            btnClosedBg="#FF5300" 
            btnClosedColor="#FFF" 
            btnOpenBg="#F1F1F1" 
            btnOpenColor="#000"
            menuBackgroundColor="#111"
            menuTextColor="#FFF"
            hoverLineColor="#FF5300"
            onContactClick={() => setIsModalOpen(true)}
            onHireClick={() => setIsHireModalOpen(true)}
          />
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <HireModal isOpen={isHireModalOpen} onClose={() => setIsHireModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
