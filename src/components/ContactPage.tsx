import { motion } from 'motion/react';
import { CircuitDivider } from './CircuitDivider';
import { SEO } from './SEO';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="Contact NeoTeq | Request AI Demo & Consultation | Get Started"
        description="Transform your business with AI. Contact NeoTeq for a free consultation. Available 24/7 with offices in Silicon Valley. Email: contact@neoteq.ai | Phone: +1 (555) 123-4567"
        keywords="contact AI company, AI consultation, request AI demo, AI consultation Silicon Valley, GPU optimization contact, enterprise AI inquiry"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full glass-effect border border-[#1E90FF]/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#00FFFF]">Get In Touch</span>
          </motion.div>
          <h1 className="mb-4 text-gradient">Contact Us</h1>
          <p className="text-white/70 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <CircuitDivider />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-effect rounded-2xl p-8 border border-[#1E90FF]/30">
              <h2 className="mb-6 text-white">Send Us a Message</h2>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1E90FF] to-[#00FFFF] flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-[#00FFFF] mb-2">Message Sent!</h3>
                  <p className="text-white/70">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#1E90FF]/20 text-white placeholder-white/40 focus:border-[#1E90FF] focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#1E90FF]/20 text-white placeholder-white/40 focus:border-[#1E90FF] focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#1E90FF]/20 text-white placeholder-white/40 focus:border-[#1E90FF] focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#1E90FF]/20 text-white placeholder-white/40 focus:border-[#1E90FF] focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#1E90FF]/20 text-white focus:border-[#1E90FF] focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 transition-all"
                    >
                      <option value="" className="bg-[#1A1A1A]">Select a service</option>
                      <option value="ai-ml" className="bg-[#1A1A1A]">AI/ML Development</option>
                      <option value="gpu" className="bg-[#1A1A1A]">GPU Optimization</option>
                      <option value="data" className="bg-[#1A1A1A]">Data Engineering</option>
                      <option value="mlops" className="bg-[#1A1A1A]">MLOps</option>
                      <option value="security" className="bg-[#1A1A1A]">AI Security</option>
                      <option value="consulting" className="bg-[#1A1A1A]">AI Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#1E90FF]/20 text-white placeholder-white/40 focus:border-[#1E90FF] focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] text-black neon-glow-hover transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8 border border-[#1E90FF]/30">
              <h2 className="mb-6 text-white">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E90FF] to-[#00FFFF] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-white/80 mb-1">Email</div>
                    <a href="mailto:contact@neoteq.ai" className="text-[#00FFFF] hover:text-white transition-colors">
                      contact@neoteq.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E90FF] to-[#00FFFF] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-white/80 mb-1">Phone</div>
                    <a href="tel:+15551234567" className="text-[#00FFFF] hover:text-white transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E90FF] to-[#00FFFF] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-white/80 mb-1">Location</div>
                    <div className="text-white/90">
                      Silicon Valley, CA<br />
                      San Francisco Bay Area
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8 border border-[#1E90FF]/30">
              <h3 className="mb-4 text-white">Office Hours</h3>
              <div className="space-y-2 text-white/70">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-[#00FFFF]">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-[#00FFFF]">10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white/50">Closed</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8 border border-[#1E90FF]/30">
              <h3 className="mb-4 text-white">Quick Response</h3>
              <p className="text-white/70 mb-4">
                Our team typically responds within 24 hours during business days.
                For urgent inquiries, please call us directly.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00FFFF] animate-pulse" />
                <span className="text-[#00FFFF]">Online Now</span>
              </div>
            </div>
          </motion.div>
        </div>

        <CircuitDivider />

        {/* Map/Additional Info */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-12 border border-[#1E90FF]/30 text-center">
            <h2 className="mb-4 text-gradient">Global Reach, Local Expertise</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              While headquartered in Silicon Valley, we serve clients worldwide with 24/7 support
              and distributed teams across multiple time zones.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
