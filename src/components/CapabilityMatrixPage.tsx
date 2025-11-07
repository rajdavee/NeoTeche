import { motion } from 'motion/react';
import { CircuitDivider } from './CircuitDivider';
import { GlassCard } from './GlassCard';
import { SEO } from './SEO';
import { Brain, Cpu, Code, Cloud, Package } from 'lucide-react';

export function CapabilityMatrixPage() {
  const capabilities = [
    {
      icon: Brain,
      title: 'AI & LLM Platforms',
      description: 'Build and deploy advanced AI systems powered by large language models and neural networks.',
      technologies: [
        'GPT Integration',
        'Custom LLMs',
        'RAG Systems',
        'Vector Databases',
        'Prompt Engineering',
        'Fine-tuning'
      ],
      color: 'from-[#1E90FF] to-[#00FFFF]'
    },
    {
      icon: Cpu,
      title: 'GPU Optimization',
      description: 'Maximize computational efficiency with advanced GPU acceleration and optimization techniques.',
      technologies: [
        'CUDA Development',
        'Tensor Optimization',
        'Memory Management',
        'Parallel Processing',
        'Performance Profiling',
        'Hardware Acceleration'
      ],
      color: 'from-[#00FFFF] to-[#1E90FF]'
    },
    {
      icon: Code,
      title: 'Web & App Engineering',
      description: 'Create scalable, responsive applications with modern frameworks and best practices.',
      technologies: [
        'React & Next.js',
        'Mobile Development',
        'Progressive Web Apps',
        'Real-time Systems',
        'API Development',
        'UI/UX Design'
      ],
      color: 'from-[#1E90FF] to-[#00FFFF]'
    },
    {
      icon: Cloud,
      title: 'Cloud & Edge',
      description: 'Deploy AI solutions at scale with cloud infrastructure and edge computing capabilities.',
      technologies: [
        'AWS/Azure/GCP',
        'Kubernetes',
        'Serverless',
        'Edge Computing',
        'CDN Optimization',
        'Infrastructure as Code'
      ],
      color: 'from-[#00FFFF] to-[#1E90FF]'
    },
    {
      icon: Package,
      title: 'Product Engineering',
      description: 'End-to-end product development from conception to deployment and maintenance.',
      technologies: [
        'Agile Development',
        'MVP Creation',
        'Product Strategy',
        'Quality Assurance',
        'DevOps',
        'Continuous Integration'
      ],
      color: 'from-[#1E90FF] to-[#00FFFF]'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="Technical Capabilities | AI, LLM, GPU, Cloud & Engineering | NeoTeq"
        description="Explore NeoTeq's technical expertise: AI & LLM Platforms, GPU Optimization, Web & App Engineering, Cloud & Edge Computing, Product Engineering. Advanced capabilities across the AI lifecycle."
        keywords="AI LLM platforms, GPU optimization expertise, cloud computing, edge AI, product engineering, technical capabilities, CUDA development, Kubernetes"
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
            <span className="text-[#00FFFF]">Our Expertise</span>
          </motion.div>
          <h1 className="mb-4 text-gradient">Capability Matrix</h1>
          <p className="text-white/70 max-w-3xl mx-auto">
            A comprehensive overview of our technical capabilities and expertise
            across the entire AI and software development lifecycle.
          </p>
        </motion.div>

        <CircuitDivider />

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={index === capabilities.length - 1 && capabilities.length % 2 !== 0 ? 'md:col-span-2' : ''}
            >
              <GlassCard className="h-full">
                <div className="flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-4`}>
                    <capability.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="mb-3 text-white">{capability.title}</h3>
                  <p className="text-white/70 mb-6">{capability.description}</p>
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    {capability.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-2 rounded-lg bg-white/5 border border-[#1E90FF]/20 text-white/80 text-sm text-center hover:bg-white/10 transition-colors"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <CircuitDivider />

        {/* Expertise Levels */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-12 text-gradient">Our Expertise Levels</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                level: 'Advanced',
                description: 'Deep expertise with proven track record',
                percentage: '85%',
                areas: ['AI/ML', 'GPU Optimization', 'Cloud Architecture']
              },
              {
                level: 'Proficient',
                description: 'Strong capabilities and experience',
                percentage: '70%',
                areas: ['Web Development', 'DevOps', 'Data Engineering']
              },
              {
                level: 'Emerging',
                description: 'Growing expertise in cutting-edge tech',
                percentage: '50%',
                areas: ['Quantum ML', 'Edge AI', 'Neuromorphic Computing']
              }
            ].map((expertise, index) => (
              <GlassCard key={index}>
                <div className="text-center">
                  <div className="mb-4 text-gradient">{expertise.percentage}</div>
                  <h3 className="mb-2 text-white">{expertise.level}</h3>
                  <p className="text-white/70 mb-4 text-sm">{expertise.description}</p>
                  <div className="space-y-2">
                    {expertise.areas.map((area, idx) => (
                      <div key={idx} className="text-white/60 text-sm">
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
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
            <h2 className="mb-4 text-gradient">Leverage Our Expertise</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our capabilities can address your specific technical challenges.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] text-black neon-glow-hover transition-all duration-300 hover:scale-105"
            >
              Schedule Technical Call
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
