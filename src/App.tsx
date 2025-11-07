import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { SolutionsPage } from './components/SolutionsPage';
import { ServicesPage } from './components/ServicesPage';
import { CapabilityMatrixPage } from './components/CapabilityMatrixPage';
import { PortfolioPage } from './components/PortfolioPage';
import { ContactPage } from './components/ContactPage';
import { BrochurePage } from './components/BrochurePage';
import { PlaceholderPage } from './components/PlaceholderPage';
import { PageTransition } from './components/PageTransition';
import { ScrollProgress } from './components/ScrollProgress';
import { AnimatePresence } from 'motion/react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/solutions" element={<PageTransition><SolutionsPage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/capability" element={<PageTransition><CapabilityMatrixPage /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/brochure" element={<PageTransition><BrochurePage /></PageTransition>} />
        
        {/* Placeholder routes */}
        <Route path="/about" element={<PageTransition><PlaceholderPage title="About Us" description="Learn more about NeoTeq's mission, vision, and the team driving AI innovation across industries." /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><PlaceholderPage title="Careers" description="Join our world-class team of AI engineers and data scientists. Build the future of AI optimization with NeoTeq." /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><PlaceholderPage title="Blog" description="Stay updated with the latest insights, trends, and best practices in AI, machine learning, and GPU optimization." /></PageTransition>} />
        <Route path="/news" element={<PageTransition><PlaceholderPage title="News" description="Read the latest news, announcements, and press releases from NeoTeq." /></PageTransition>} />
        <Route path="/docs" element={<PageTransition><PlaceholderPage title="Documentation" description="Technical documentation, API references, and implementation guides for NeoTeq's AI solutions." /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><PlaceholderPage title="Resources" description="Access whitepapers, research papers, and technical resources from NeoTeq's AI experts." /></PageTransition>} />
        <Route path="/api" element={<PageTransition><PlaceholderPage title="API Reference" description="Complete API documentation and integration guides for NeoTeq's AI platform." /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><PlaceholderPage title="Privacy Policy" description="NeoTeq's commitment to protecting your privacy and data security." /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><PlaceholderPage title="Terms of Service" description="Terms and conditions for using NeoTeq's services and platforms." /></PageTransition>} />
        <Route path="/cookies" element={<PageTransition><PlaceholderPage title="Cookie Policy" description="Information about how NeoTeq uses cookies and similar technologies." /></PageTransition>} />
        <Route path="/security" element={<PageTransition><PlaceholderPage title="Security" description="Learn about NeoTeq's enterprise-grade security practices and compliance certifications." /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
