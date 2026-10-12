import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_CONFIG } from "../config/contactConfig";

const ContactModal = ({ isOpen, onClose }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", CONTACT_CONFIG.accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully!");
        e.target.reset();
        setTimeout(() => {
          onClose();
          setResult("");
        }, 1500);
      } else {
        setResult("Unable to send. Please try again.");
      }
    } catch {
      setResult("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white w-full max-w-lg rounded-[2rem] p-8 md:p-10 shadow-2xl pointer-events-auto relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors text-black"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-[#FF4D00]/20 text-[#8aab00] font-bold text-xs rounded-full mb-4 tracking-wider uppercase">
                  Hire Me
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-[#111] mb-2">
                  Let's work together
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Fill out the form below to discuss your project, and I'll get back to you within 24 hours.
                </p>
              </div>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Project Details</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, timeline, and budget..."
                    rows="4"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full bg-[#111] hover:bg-[#FF4D00] text-white hover:text-black font-bold py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </button>

                {result && (
                  <span className={`text-center text-sm font-medium ${result.includes("Successfully") ? "text-green-600" : result.includes("Sending") ? "text-gray-500" : "text-red-500"}`}>
                    {result}
                  </span>
                )}
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
