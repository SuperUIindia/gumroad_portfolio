import React, { useState } from "react";
import { CONTACT_CONFIG } from "../config/contactConfig";

const HireForm = ({ onSubmitSuccess }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", CONTACT_CONFIG.accessKey2 || CONTACT_CONFIG.accessKey);

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
          if (onSubmitSuccess) {
            onSubmitSuccess();
          }
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
    <form className="flex flex-col gap-4 overflow-y-auto max-h-[70vh] pr-2" onSubmit={handleSubmit}>
      {/* Client Name */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-700">Client Name *</label>
        <input
          type="text"
          name="name"
          placeholder="Your name or company"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-black placeholder-gray-400 outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all"
          required
        />
      </div>

      {/* Cell Number */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-700">Cell Number *</label>
        <input
          type="tel"
          name="phone"
          placeholder="e.g. +91 9999999999"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-black placeholder-gray-400 outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-700">Email Address *</label>
        <input
          type="email"
          name="email"
          placeholder="yourname@domain.com"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-black placeholder-gray-400 outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all"
          required
        />
      </div>

      {/* Requirement 10 drop down list */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-700">Requirement for Development *</label>
        <select
          name="requirement"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-black outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all"
          required
        >
          <option value="" disabled selected>Select a service requirement...</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="E-commerce Website">E-commerce Website</option>
          <option value="Custom SaaS Platform">Custom SaaS Platform</option>
          <option value="Portfolio or Landing Page">Portfolio or Landing Page</option>
          <option value="API Integration & Backend">API Integration & Backend</option>
          <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
          <option value="Software QA & Testing">Software QA & Testing</option>
          <option value="Consulting / Other Services">Consulting / Other Services</option>
        </select>
      </div>

      {/* Optional social links */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-700">LinkedIn URL (Optional)</label>
        <input
          type="url"
          name="linkedin"
          placeholder="https://linkedin.com/in/username"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-black placeholder-gray-400 outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-700">Instagram URL (Optional)</label>
        <input
          type="url"
          name="instagram"
          placeholder="https://instagram.com/username"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-black placeholder-gray-400 outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-700">Website URL (Optional)</label>
        <input
          type="url"
          name="website"
          placeholder="https://yourwebsite.com"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-black placeholder-gray-400 outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all"
        />
      </div>

      {/* Add note */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-700">Add Note</label>
        <textarea
          name="note"
          placeholder="Briefly describe your timeline, features, budget, or other notes..."
          rows="3"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-black placeholder-gray-400 outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00]/20 transition-all resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 w-full bg-[#111] hover:bg-[#FF4D00] text-white hover:text-black font-bold py-3.5 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Submit Inquiry"}
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
  );
};

export default HireForm;
