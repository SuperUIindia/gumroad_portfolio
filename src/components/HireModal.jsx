import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import HireForm from "./HireForm";

const HireModal = ({ isOpen, onClose }) => {
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white w-full max-w-lg rounded-[2rem] p-8 md:p-10 shadow-2xl pointer-events-auto relative overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors text-black z-10"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="mb-6 flex-shrink-0">
                <span className="inline-block px-3 py-1 bg-[#FF4D00]/20 text-[#8aab00] font-bold text-xs rounded-full mb-3 tracking-wider uppercase">
                  Let's Build
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-[#111] mb-1">
                  Hire Me
                </h2>
                <p className="text-gray-500 text-sm">
                  Specify your project requirements below, and I'll get back to you shortly.
                </p>
              </div>

              <HireForm onSubmitSuccess={onClose} />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HireModal;
