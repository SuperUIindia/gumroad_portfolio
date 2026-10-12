import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStats from './components/AboutStats';
import Integrations from './components/Integrations';
import Projects from './components/Projects';
import CertificatesTraining from './components/CertificatesTraining';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StaggeredPreloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <StaggeredPreloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Navbar />
            <main>
              <Hero />
              <AboutStats />
              <Integrations />
              <Projects />
              <CertificatesTraining />
              <Experience />
              <Testimonials />
              <ContactSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
