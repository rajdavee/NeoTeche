import { motion } from 'motion/react';
import { CircuitDivider } from './CircuitDivider';
import { GlassCard } from './GlassCard';
import { SEO } from './SEO';
import { 
  Cpu, 
  MessageSquare, 
  Heart, 
  Utensils, 
  Leaf, 
  ShoppingBag,
  Brain,
  Code,
  Cloud,
  Package,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export function ServicesPage() {
  const services = [
    {
      icon: Cpu,
      title: 'AI GPU Optimization & Attestation',
      tagline: 'Unlock the true performance of your GPU infrastructure while ensuring trust and integrity',
      description: 'At NeoTeq, we specialize in AI GPU optimization and attestation, helping enterprises achieve faster, more efficient, and verifiable AI performance. Our engineers design custom CUDA pipelines, implement TensorRT optimizations, and fine-tune large language models (LLMs) to reduce latency, energy usage, and compute cost—without sacrificing accuracy.',
      deliverables: [
        'Kernel-level GPU tuning for NVIDIA/AMD',
        'LLM fine-tuning, pruning, and quantization (INT8/FP16)',
        'Model compression & inference acceleration',
        'Secure GPU Attestation with nvTrust and JSON evidence verification',
        'Dynamic batching, parallelization & scheduling for multi-node clusters',
        'Energy-efficient computing with up to 40% cost reduction'
      ],
      tech: 'CUDA • TensorRT • PyTorch • Triton Inference • ONNX • nvTrust',
      color: 'from-[#1E90FF] to-[#00FFFF]'
    },
    {
      icon: MessageSquare,
      title: 'RAG Applications',
      tagline: 'Make your organization\'s data interactive and intelligent',
      description: 'NeoTeq builds Retrieval-Augmented Generation systems that combine retrieval, reasoning, and response—creating AI agents that understand context and deliver answers grounded in your data.',
      deliverables: [
        'Text ↔ Voice: Multilingual voice interaction for real-time AI assistance',
        'Text → Video: Convert transcripts and stories into video explainers using AI generation',
        'Meeting Summaries: Automated summaries, action items, and key insights from meetings',
        'Chatbots on Your Data: Context-aware assistants trained on private documents and repositories',
        'AI Summarization: Concise text summarization for long documents and reports'
      ],
      tech: 'LangChain • Hugging Face • OpenAI • Nuclia • AWS Bedrock',
      color: 'from-[#00FFFF] to-[#1E90FF]'
    },
    {
      icon: Heart,
      title: 'HealthTech',
      tagline: 'Empowering healthcare ecosystems with connected intelligence',
      description: 'NeoTeq develops AI-powered healthcare platforms that automate workflows, enhance patient care, and maintain regulatory compliance—ensuring speed, precision, and safety.',
      deliverables: [
        'Multi-location hospital management (HIPAA-compliant)',
        'Real-time patient monitoring and dispatch automation',
        'Predictive analytics for hospital operations',
        'Computer vision for medical imaging and diagnostics',
        'IoT integration for remote patient tracking and smart devices'
      ],
      tech: '99.9% uptime • Enhanced patient response • Optimized doctor workflows',
      color: 'from-[#1E90FF] to-[#00FFFF]'
    },
    {
      icon: Utensils,
      title: 'FoodTech',
      tagline: 'Digitizing the food and supply chain ecosystem with smart, data-driven AI',
      description: 'From manufacturing to delivery, NeoTeq\'s food tech solutions enhance visibility, reduce waste, and improve decision-making through automation and analytics.',
      deliverables: [
        'AI-based demand forecasting & supply optimization',
        'Food traceability with blockchain & IoT data integration',
        'Real-time quality & freshness monitoring',
        'Predictive analytics for logistics and inventory',
        'Consumer feedback intelligence using NLP and sentiment models'
      ],
      tech: 'IoT • Blockchain • NLP • Predictive Analytics',
      color: 'from-[#00FFFF] to-[#1E90FF]'
    },
    {
      icon: Leaf,
      title: 'EnvironmentTech',
      tagline: 'Building a sustainable planet with intelligent environmental technology',
      description: 'NeoTeq creates digital ecosystems that monitor, predict, and reduce environmental impact using AI and data automation.',
      deliverables: [
        'AI-driven emission & energy optimization',
        'ESG data pipeline & reporting automation',
        'Predictive analytics for air, water, and soil quality',
        'Real-time dashboards connected with IoT & satellite data',
        'Sustainability scoring and compliance reporting'
      ],
      tech: 'IoT • Satellite Data • ESG Automation • Real-time Analytics',
      color: 'from-[#1E90FF] to-[#00FFFF]'
    },
    {
      icon: ShoppingBag,
      title: 'Retail Tech for Garments',
      tagline: 'Reinventing fashion and retail with intelligent automation',
      description: 'NeoTeq brings AI and analytics to the garment industry—from design to distribution—enabling faster decisions, personalized experiences, and reduced waste.',
      deliverables: [
        'AI-based visual search and virtual try-on',
        'Smart inventory & merchandising predictions',
        'Edge vision systems for quality control',
        'AI-powered feedback and sentiment dashboards',
        'Integrated retail analytics and customer intelligence'
      ],
      tech: 'Computer Vision • Edge AI • Customer Analytics',
      color: 'from-[#00FFFF] to-[#1E90FF]'
    }
  ];

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
        title="Our Services | AI GPU Optimization, RAG, HealthTech & More | NeoTeq"
        description="Comprehensive AI services: GPU Optimization & Attestation, RAG Applications, HealthTech, FoodTech, EnvironmentTech, and Retail Tech. Transform your industry with NeoTeq's expertise."
        keywords="AI GPU optimization, RAG applications, healthcare AI, food tech, environment tech, retail AI, CUDA development, LLM fine-tuning, AI services"
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
            <span className="text-[#00FFFF]">What We Offer</span>
          </motion.div>
          <h1 className="mb-4 text-gradient">Our Services</h1>
          <p className="text-white/70 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to transform your industry with cutting-edge technology and domain expertise
          </p>
        </motion.div>

        <CircuitDivider />

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
            >
              <GlassCard className="h-full">
                <div className="flex flex-col h-full">
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-8 h-8 text-black" />
                  </motion.div>
                  
                  <h3 className="text-white mb-2">{service.title}</h3>
                  <p className="text-[#00FFFF] text-sm mb-3 italic">{service.tagline}</p>
                  <p className="text-white/70 text-sm mb-4">{service.description}</p>

                  <div className="mb-4">
                    <h4 className="text-white/90 text-sm mb-3">What We Deliver:</h4>
                    <div className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-2"
                          whileHover={{ x: 5 }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#00FFFF] flex-shrink-0 mt-0.5" />
                          <span className="text-white/60 text-sm">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/10">
                    <p className="text-[#1E90FF]/70 text-xs">Tech Stack:</p>
                    <p className="text-white/50 text-xs mt-1">{service.tech}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <CircuitDivider />

        {/* Capability Matrix Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="capability"
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-block mb-4 px-4 py-2 rounded-full glass-effect border border-[#1E90FF]/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[#00FFFF]">Our Expertise</span>
            </motion.div>
            <h2 className="mb-4 text-gradient">Capability Matrix</h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              A comprehensive overview of our technical capabilities and expertise across the entire AI and software development lifecycle
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={index === capabilities.length - 1 && capabilities.length % 2 !== 0 ? 'md:col-span-2' : ''}
              >
                <GlassCard className="h-full">
                  <div className="flex flex-col h-full">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-4`}
                      whileHover={{
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <capability.icon className="w-8 h-8 text-black" />
                    </motion.div>
                    <h3 className="mb-3 text-white">{capability.title}</h3>
                    <p className="text-white/70 mb-6">{capability.description}</p>
                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      {capability.technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          className="px-3 py-2 rounded-lg bg-white/5 border border-[#1E90FF]/20 text-white/80 text-sm text-center hover:bg-white/10 hover:border-[#00FFFF]/50 transition-all cursor-pointer"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <CircuitDivider />

        {/* Expertise Levels */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-12 text-gradient">Our Expertise Levels</h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
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
              <motion.div key={index} variants={staggerItem}>
                <GlassCard>
                  <div className="text-center">
                    <motion.div 
                      className="mb-4 text-gradient"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                    >
                      {expertise.percentage}
                    </motion.div>
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <CircuitDivider />

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-12 border border-[#1E90FF]/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-[#00FFFF]/10 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="mb-4 text-gradient">Ready to Transform Your Business?</h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services and expertise can address your specific business challenges and unlock new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] text-black neon-glow-hover transition-all duration-300 hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/portfolio"
                  className="inline-block px-8 py-4 rounded-xl bg-white/5 border border-[#1E90FF]/30 text-white hover:bg-white/10 transition-all duration-300"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
