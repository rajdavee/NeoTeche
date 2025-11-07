import { motion } from 'motion/react';
import { CircuitDivider } from './CircuitDivider';
import { GlassCard } from './GlassCard';
import { SEO } from './SEO';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

export function PortfolioPage() {
  const caseStudies = [
    {
      title: 'Healthcare AI Diagnostics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Manual diagnosis process was time-consuming and prone to human error, requiring 48+ hours for complex cases.',
      solution: 'Developed a GPU-accelerated AI platform using deep learning models for medical image analysis with real-time processing capabilities.',
      impact: [
        '92% diagnostic accuracy improvement',
        '85% reduction in processing time',
        '1M+ patients served annually'
      ],
      tags: ['AI/ML', 'Computer Vision', 'GPU Optimization']
    },
    {
      title: 'Real-time Fraud Detection System',
      client: 'SecureBank Financial',
      industry: 'FinTech',
      challenge: 'Legacy fraud detection system had high false-positive rates and couldn\'t scale with transaction volume growth.',
      solution: 'Built a real-time ML pipeline with GPU-accelerated inference, processing millions of transactions per second with adaptive learning.',
      impact: [
        '78% reduction in false positives',
        '99.7% fraud detection accuracy',
        '$50M+ in prevented losses annually'
      ],
      tags: ['Machine Learning', 'Real-time Processing', 'Security']
    },
    {
      title: 'Supply Chain Optimization Engine',
      client: 'GlobalRetail Corp',
      industry: 'Retail',
      challenge: 'Inefficient inventory management leading to stockouts and overstock situations, impacting $100M+ in revenue.',
      solution: 'Implemented AI-driven predictive analytics with multi-variable optimization algorithms for demand forecasting and inventory planning.',
      impact: [
        '35% reduction in stockouts',
        '28% decrease in excess inventory',
        '$45M annual cost savings'
      ],
      tags: ['Predictive Analytics', 'Optimization', 'Cloud']
    },
    {
      title: 'Conversational AI Assistant',
      client: 'TechSupport Inc',
      industry: 'Customer Service',
      challenge: 'Customer support team overwhelmed with 10,000+ daily queries, leading to long wait times and customer dissatisfaction.',
      solution: 'Deployed fine-tuned LLM-powered conversational AI with RAG architecture, handling complex multi-turn conversations autonomously.',
      impact: [
        '70% reduction in support tickets',
        '4.8/5 customer satisfaction score',
        '24/7 support availability'
      ],
      tags: ['LLM', 'Natural Language Processing', 'RAG']
    },
    {
      title: 'Environmental Monitoring System',
      client: 'EcoWatch Initiative',
      industry: 'Environmental',
      challenge: 'Manual monitoring of environmental data across 500+ sites was inefficient and unable to detect rapid changes.',
      solution: 'Created an edge AI system with IoT integration for real-time environmental data analysis and predictive modeling.',
      impact: [
        '95% faster anomaly detection',
        '500+ sites monitored in real-time',
        '40% reduction in monitoring costs'
      ],
      tags: ['Edge AI', 'IoT', 'Predictive Modeling']
    },
    {
      title: 'GPU-Accelerated Rendering Pipeline',
      client: 'CreativeStudio Pro',
      industry: 'Media & Entertainment',
      challenge: '3D rendering workflows taking 24+ hours per project, creating bottlenecks in production pipeline.',
      solution: 'Optimized rendering pipeline with custom CUDA kernels and distributed GPU computing for parallel processing.',
      impact: [
        '10x faster rendering speeds',
        '90% reduction in processing time',
        '5x increase in project throughput'
      ],
      tags: ['GPU Programming', 'CUDA', 'Performance']
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="Portfolio & Case Studies | AI Success Stories | NeoTeq"
        description="Real-world AI transformations: Healthcare diagnostics, fraud detection, supply chain optimization, and more. See how we've delivered $2B+ in value across 500+ projects."
        keywords="AI case studies, machine learning portfolio, AI success stories, GPU optimization results, AI implementation examples, enterprise AI projects"
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
            <span className="text-[#00FFFF]">Success Stories</span>
          </motion.div>
          <h1 className="mb-4 text-gradient">Portfolio</h1>
          <p className="text-white/70 max-w-3xl mx-auto">
            Real-world transformations powered by our AI and GPU optimization expertise.
            Discover how we've helped organizations achieve breakthrough results.
          </p>
        </motion.div>

        <CircuitDivider />

        {/* Case Studies Grid */}
        <div className="space-y-8 mt-16">
          {caseStudies.map((study, index) => (
            <GlassCard key={index}>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#1E90FF]/20 text-[#00FFFF] text-sm">
                      {study.industry}
                    </span>
                    <span className="text-white/50 text-sm">{study.client}</span>
                  </div>
                  <h3 className="mb-4 text-white">{study.title}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#1E90FF]" />
                        <span className="text-[#00FFFF]">Challenge</span>
                      </div>
                      <p className="text-white/70 text-sm pl-4">{study.challenge}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#1E90FF]" />
                        <span className="text-[#00FFFF]">Solution</span>
                      </div>
                      <p className="text-white/70 text-sm pl-4">{study.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-[#1E90FF]/20 text-white/60 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column - Impact */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-5 h-5 text-[#00FFFF]" />
                    <span className="text-[#00FFFF]">Impact & Results</span>
                  </div>
                  <div className="space-y-4">
                    {study.impact.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#1E90FF] flex-shrink-0 mt-0.5" />
                        <span className="text-white">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    className="mt-6 inline-flex items-center gap-2 text-[#00FFFF] hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <CircuitDivider />

        {/* Stats Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-12 text-gradient">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Retention' },
              { value: '$2B+', label: 'Value Generated' },
              { value: '50+', label: 'Industries Served' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-2 text-gradient">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <CircuitDivider />

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-12 border border-[#1E90FF]/30">
            <h2 className="mb-4 text-gradient">Ready to Write Your Success Story?</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Join leading organizations that have transformed their operations with NeoTeq.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] text-black neon-glow-hover transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
