import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { label: 'About Us', path: '/about' },
      { label: 'Blog', path: '/blog' },
      { label: 'Career', path: '/careers' }
    ],
    services: [
      { label: 'AI GPU Optimization', path: '/services#gpu' },
      { label: 'RAG Applications', path: '/services#rag' },
      { label: 'HealthTech', path: '/services#health' },
      { label: 'FoodTech', path: '/services#food' },
      { label: 'EnvironmentTech', path: '/services#environment' },
      { label: 'Retail Tech', path: '/services#retail' },
      { label: 'Capability Matrix', path: '/services#capability' }
    ],
    solutions: [
      { label: 'AI Solutions', path: '/solutions#ai' },
      { label: 'Industry Solutions', path: '/solutions#industry' },
      { label: 'Custom Solutions', path: '/solutions#custom' }
    ],
    resources: [
      { label: 'Company Brochure', path: '/brochure' },
      { label: 'Documentation', path: '/docs' },
      { label: 'Case Studies', path: '/portfolio' },
      { label: 'Contact Us', path: '/contact' }
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' },
      { label: 'Security', path: '/security' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/neoteq', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/neoteq', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/neoteq', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/neoteq', label: 'YouTube' }
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1E90FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <motion.h3
                className="text-gradient"
                whileHover={{ scale: 1.05 }}
              >
                NeoTeq
              </motion.h3>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">
              Pioneering AI and GPU optimization solutions that transform businesses across industries. 
              Empowering innovation through cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contact@neoteq.ai" className="flex items-center gap-2 text-white/70 hover:text-[#00FFFF] transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@neoteq.ai</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 text-white/70 hover:text-[#00FFFF] transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Silicon Valley, CA</span>
              </div>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-white mb-4">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-white/70 hover:text-[#00FFFF] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-white/70 hover:text-[#00FFFF] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-white/70 hover:text-[#00FFFF] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-white/70 hover:text-[#00FFFF] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="glass-effect rounded-2xl p-8 mb-12 border border-[#1E90FF]/30">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-white mb-2">Stay Updated</h3>
              <p className="text-white/70">Get the latest insights on AI, GPU optimization, and industry trends.</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-[#1E90FF]/20 text-white placeholder-white/40 focus:border-[#1E90FF] focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 transition-all"
              />
              <motion.button
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] text-black hover:opacity-90 transition-opacity whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} NeoTeq. All rights reserved. Built with AI-powered excellence.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-[#1E90FF]/20 flex items-center justify-center text-white/70 hover:text-[#00FFFF] hover:border-[#00FFFF]/50 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            {footerLinks.legal.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-white/60 hover:text-[#00FFFF] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Certifications & Trust Badges */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1E90FF]"></div>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1E90FF]"></div>
              <span>SOC 2 Type II Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1E90FF]"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1E90FF]"></div>
              <span>Enterprise Grade Security</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
