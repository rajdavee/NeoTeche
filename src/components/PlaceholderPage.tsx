import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';
import { SEO } from './SEO';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title={`${title} | NeoTeq - Coming Soon`}
        description={description}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#1E90FF]/20 to-[#00FFFF]/20 border border-[#1E90FF]/30 mb-8">
            <Construction className="w-12 h-12 text-[#00FFFF]" />
          </div>
          
          <h1 className="mb-4 text-gradient">{title}</h1>
          
          <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
            {description}
          </p>

          <p className="text-white/50 mb-12">
            This page is currently under construction. Check back soon for updates!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] text-black hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-[#1E90FF]/30 text-white hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-white/60 mb-6">Meanwhile, explore our other pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/solutions" className="text-[#00FFFF] hover:text-white transition-colors">
                Solutions
              </Link>
              <span className="text-white/20">•</span>
              <Link to="/services" className="text-[#00FFFF] hover:text-white transition-colors">
                Services
              </Link>
              <span className="text-white/20">•</span>
              <Link to="/capability" className="text-[#00FFFF] hover:text-white transition-colors">
                Capabilities
              </Link>
              <span className="text-white/20">•</span>
              <Link to="/portfolio" className="text-[#00FFFF] hover:text-white transition-colors">
                Portfolio
              </Link>
              <span className="text-white/20">•</span>
              <Link to="/contact" className="text-[#00FFFF] hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
