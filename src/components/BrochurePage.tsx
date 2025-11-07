import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
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
  Zap,
  Shield,
  Award,
  Users,
  Globe,
  TrendingUp,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Download,
  Maximize2,
  GitBranch,
  RefreshCw,
  Workflow,
  Settings
} from 'lucide-react';
import { SEO } from './SEO';

const slides = [
  {
    id: 1,
    type: 'cover',
    title: 'NeoTeq',
    subtitle: 'AI. Optimized. Everywhere.',
    tagline: 'Cutting-Edge AI & GPU Optimization Solutions',
    footer: 'Transforming Businesses Through Innovation'
  },
  {
    id: 2,
    type: 'about',
    title: 'About NeoTeq',
    subtitle: 'Who We Are',
    content: {
      mission: 'Pioneering AI and GPU optimization solutions that transform businesses across industries.',
      vision: 'To be the global leader in AI optimization, making advanced technology accessible and efficient for enterprises worldwide.',
      stats: [
        { value: '500+', label: 'Projects Delivered' },
        { value: '98%', label: 'Client Satisfaction' },
        { value: '10x', label: 'Performance Gain' },
        { value: '24/7', label: 'Support Available' }
      ]
    }
  },
  {
    id: 3,
    type: 'services-overview',
    title: 'Our Services',
    subtitle: 'Comprehensive AI Solutions',
    services: [
      { icon: Cpu, name: 'AI GPU Optimization & Attestation', color: 'from-[#1E90FF] to-[#00FFFF]' },
      { icon: MessageSquare, name: 'RAG Applications', color: 'from-[#00FFFF] to-[#1E90FF]' },
      { icon: Heart, name: 'HealthTech', color: 'from-[#1E90FF] to-[#00FFFF]' },
      { icon: Utensils, name: 'FoodTech', color: 'from-[#00FFFF] to-[#1E90FF]' },
      { icon: Leaf, name: 'EnvironmentTech', color: 'from-[#1E90FF] to-[#00FFFF]' },
      { icon: ShoppingBag, name: 'Retail Tech', color: 'from-[#00FFFF] to-[#1E90FF]' }
    ]
  },
  {
    id: 4,
    type: 'service-detail',
    title: 'AI GPU Optimization & Attestation',
    subtitle: 'Unlock True GPU Performance',
    content: {
      description: 'Specialized AI GPU optimization and attestation, helping enterprises achieve faster, more efficient, and verifiable AI performance.',
      highlights: [
        'Kernel-level GPU tuning for NVIDIA/AMD',
        'LLM fine-tuning & quantization',
        'GPU Attestation with nvTrust',
        'Up to 40% cost reduction',
        'Dynamic batching & parallelization',
        'Energy-efficient computing'
      ],
      tech: 'CUDA • TensorRT • PyTorch • Triton • ONNX'
    }
  },
  {
    id: 5,
    type: 'service-detail',
    title: 'RAG Applications',
    subtitle: 'Interactive & Intelligent Data',
    content: {
      description: 'Retrieval-Augmented Generation systems that combine retrieval, reasoning, and response—creating AI agents grounded in your data.',
      highlights: [
        'Text ↔ Voice multilingual interaction',
        'Text → Video AI generation',
        'Automated meeting summaries',
        'Context-aware chatbots',
        'AI document summarization',
        'Private data training'
      ],
      tech: 'LangChain • Hugging Face • OpenAI • AWS Bedrock'
    }
  },
  {
    id: 6,
    type: 'service-detail',
    title: 'HealthTech Solutions',
    subtitle: 'Connected Healthcare Intelligence',
    content: {
      description: 'AI-powered healthcare platforms that automate workflows, enhance patient care, and maintain HIPAA compliance.',
      highlights: [
        'Multi-location hospital management',
        'Real-time patient monitoring',
        'Predictive analytics',
        'Medical imaging AI',
        'IoT integration',
        '99.9% uptime guaranteed'
      ],
      tech: 'HIPAA-Compliant • IoT • Computer Vision'
    }
  },
  {
    id: 7,
    type: 'service-detail',
    title: 'FoodTech Solutions',
    subtitle: 'Smart Supply Chain Ecosystem',
    content: {
      description: 'AI-driven food tech solutions that enhance visibility, reduce waste, and improve decision-making from manufacturing to delivery.',
      highlights: [
        'AI demand forecasting',
        'Blockchain traceability',
        'Real-time quality monitoring',
        'Predictive logistics',
        'Consumer sentiment analysis',
        'Supply optimization'
      ],
      tech: 'IoT • Blockchain • NLP • Predictive Analytics'
    }
  },
  {
    id: 8,
    type: 'service-detail',
    title: 'EnvironmentTech Solutions',
    subtitle: 'Sustainable Technology',
    content: {
      description: 'Digital ecosystems that monitor, predict, and reduce environmental impact using AI and data automation.',
      highlights: [
        'AI emission optimization',
        'ESG data automation',
        'Air/water/soil quality analytics',
        'IoT & satellite integration',
        'Sustainability scoring',
        'Compliance reporting'
      ],
      tech: 'IoT • Satellite Data • Real-time Dashboards'
    }
  },
  {
    id: 9,
    type: 'service-detail',
    title: 'Retail Tech for Garments',
    subtitle: 'Fashion Innovation',
    content: {
      description: 'AI and analytics for the garment industry—from design to distribution—enabling faster decisions and personalized experiences.',
      highlights: [
        'AI visual search & virtual try-on',
        'Smart inventory predictions',
        'Edge vision quality control',
        'Sentiment dashboards',
        'Customer intelligence',
        'Reduced waste'
      ],
      tech: 'Computer Vision • Edge AI • Analytics'
    }
  },
  {
    id: 10,
    type: 'capabilities',
    title: 'Capability Matrix',
    subtitle: 'Our Technical Expertise',
    capabilities: [
      { icon: Brain, name: 'AI & LLM Platforms', items: ['GPT Integration', 'Custom LLMs', 'RAG Systems', 'Fine-tuning'] },
      { icon: Cpu, name: 'GPU Optimization', items: ['CUDA Development', 'Tensor Optimization', 'Performance Profiling', 'Hardware Acceleration'] },
      { icon: Code, name: 'Web & App Engineering', items: ['React & Next.js', 'Mobile Development', 'PWAs', 'API Development'] },
      { icon: Cloud, name: 'Cloud & Edge', items: ['AWS/Azure/GCP', 'Kubernetes', 'Serverless', 'Edge Computing'] },
      { icon: Package, name: 'Product Engineering', items: ['Agile Development', 'MVP Creation', 'DevOps', 'CI/CD'] }
    ]
  },
  {
    id: 11,
    type: 'development-process',
    title: 'Our Development Process',
    subtitle: 'Faster & Adaptive Development',
    content: {
      tagline: 'Agile. Iterative. Continuous.',
      description: 'We leverage industry-leading tools and methodologies to deliver exceptional results with speed and precision.',
      methodology: {
        title: 'Agile & Iterative Development',
        points: [
          'Sprint-based delivery for faster time-to-market',
          'Continuous feedback loops with stakeholders',
          'Adaptive planning and flexible responses to change',
          'Incremental delivery of business value'
        ]
      },
      tools: [
        { icon: GitBranch, name: 'JIRA', desc: 'Project management & tracking' },
        { icon: Code, name: 'Confluence', desc: 'Documentation & collaboration' },
        { icon: Package, name: 'Bitbucket', desc: 'Version control & code review' },
        { icon: RefreshCw, name: 'Jenkins', desc: 'CI/CD automation' },
        { icon: Cloud, name: 'Kubernetes', desc: 'Container orchestration' },
        { icon: Workflow, name: 'DevOps', desc: 'End-to-end automation' }
      ],
      benefits: [
        'Faster deployment cycles',
        'Higher code quality',
        'Reduced time-to-market',
        'Improved collaboration'
      ]
    }
  },
  {
    id: 12,
    type: 'why-choose-us',
    title: 'Why Choose NeoTeq?',
    subtitle: 'The NeoTeq Difference',
    reasons: [
      { icon: Zap, title: 'Lightning Fast', desc: 'Deploy AI solutions at unprecedented speeds' },
      { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade security protocols' },
      { icon: Award, title: '15+ Awards', desc: 'Industry recognition for excellence' },
      { icon: Users, title: '100+ AI Engineers', desc: 'Expert team of specialists' },
      { icon: Globe, title: '25+ Countries', desc: 'Global presence and support' },
      { icon: TrendingUp, title: 'Proven ROI', desc: '10x performance improvements' }
    ]
  },
  {
    id: 13,
    type: 'portfolio',
    title: 'Success Stories',
    subtitle: 'Transforming Businesses Worldwide',
    cases: [
      {
        title: 'TechVision Inc',
        impact: '85% reduction in AI inference time',
        client: 'CTO, Sarah Chen',
        industry: 'Technology'
      },
      {
        title: 'RetailPro',
        impact: 'ROI exceeded within 6 months',
        client: 'VP Engineering, Michael Rodriguez',
        industry: 'Retail'
      },
      {
        title: 'HealthTech Solutions',
        impact: 'Model deployment: weeks → hours',
        client: 'Head of AI, Dr. Emily Watson',
        industry: 'Healthcare'
      }
    ]
  },
  {
    id: 14,
    type: 'contact',
    title: 'Let\'s Connect',
    subtitle: 'Ready to Transform Your Business?',
    content: {
      tagline: 'Join hundreds of forward-thinking companies leveraging NeoTeq\'s AI expertise',
      contact: [
        { icon: Mail, label: 'Email', value: 'contact@neoteq.ai' },
        { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
        { icon: MapPin, label: 'Location', value: 'Silicon Valley, CA' }
      ]
    }
  }
];

export function BrochurePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.log('Fullscreen not supported or blocked:', error);
      // Silently fail - fullscreen is a nice-to-have feature
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-black pt-16">
      <SEO
        title="Company Brochure | NeoTeq AI Solutions"
        description="Download NeoTeq's comprehensive company brochure featuring our AI services, capabilities, and success stories."
        keywords="NeoTeq brochure, AI services presentation, company profile, IT services"
      />

      {/* Presentation Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <span className="text-white/60 text-sm">
              Slide {currentSlide + 1} of {slides.length}
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-[#1E90FF]/30 text-white hover:bg-white/10 transition-all text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              <span>Print/PDF</span>
            </motion.button>
            
            <motion.button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg bg-white/5 border border-[#1E90FF]/30 text-white hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Maximize2 className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Slide Display */}
        <div className="relative aspect-[16/9] glass-effect rounded-2xl border-2 border-[#1E90FF]/30 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(30, 144, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30, 144, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />

          {/* Slide Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-effect border border-[#1E90FF]/30 flex items-center justify-center text-white hover:border-[#00FFFF]/50 transition-all opacity-70 hover:opacity-100"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-effect border border-[#1E90FF]/30 flex items-center justify-center text-white hover:border-[#00FFFF]/50 transition-all opacity-70 hover:opacity-100"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Content */}
          <div className="relative h-full p-12 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                {/* Cover Slide */}
                {slide.type === 'cover' && (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <motion.div
                      className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1E90FF] to-[#00FFFF] flex items-center justify-center mb-8"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Cpu className="w-12 h-12 text-black" />
                    </motion.div>
                    <h1 className="text-6xl mb-4 text-gradient">{slide.title}</h1>
                    <p className="text-4xl text-[#00FFFF] mb-4">{slide.subtitle}</p>
                    <p className="text-xl text-white/70 mb-8">{slide.tagline}</p>
                    <div className="h-1 w-32 bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] rounded-full" />
                    <p className="text-white/50 mt-8">{slide.footer}</p>
                  </div>
                )}

                {/* About Slide */}
                {slide.type === 'about' && (
                  <div className="h-full flex flex-col">
                    <div className="mb-8">
                      <h2 className="text-4xl mb-2 text-gradient">{slide.title}</h2>
                      <p className="text-[#00FFFF]">{slide.subtitle}</p>
                    </div>
                    
                    <div className="flex-grow grid grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-white mb-3">Our Mission</h3>
                          <p className="text-white/70">{slide.content.mission}</p>
                        </div>
                        <div>
                          <h3 className="text-white mb-3">Our Vision</h3>
                          <p className="text-white/70">{slide.content.vision}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {slide.content.stats.map((stat: any, idx: number) => (
                          <div key={idx} className="glass-effect rounded-xl p-6 border border-[#1E90FF]/20 text-center">
                            <div className="text-3xl text-gradient mb-2">{stat.value}</div>
                            <div className="text-white/60 text-sm">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Services Overview Slide */}
                {slide.type === 'services-overview' && (
                  <div className="h-full flex flex-col">
                    <div className="mb-8">
                      <h2 className="text-4xl mb-2 text-gradient">{slide.title}</h2>
                      <p className="text-[#00FFFF]">{slide.subtitle}</p>
                    </div>
                    
                    <div className="flex-grow grid grid-cols-3 gap-6">
                      {slide.services.map((service: any, idx: number) => (
                        <motion.div
                          key={idx}
                          className="glass-effect rounded-xl p-6 border border-[#1E90FF]/20 hover:border-[#00FFFF]/50 transition-all flex flex-col items-center text-center"
                          whileHover={{ scale: 1.05, y: -5 }}
                        >
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                            <service.icon className="w-8 h-8 text-black" />
                          </div>
                          <h3 className="text-white text-sm">{service.name}</h3>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Service Detail Slide */}
                {slide.type === 'service-detail' && (
                  <div className="h-full flex flex-col">
                    <div className="mb-6">
                      <h2 className="text-4xl mb-2 text-gradient">{slide.title}</h2>
                      <p className="text-[#00FFFF]">{slide.subtitle}</p>
                    </div>
                    
                    <div className="flex-grow">
                      <p className="text-white/70 mb-6 text-lg">{slide.content.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {slide.content.highlights.map((highlight: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-3 glass-effect rounded-lg p-3 border border-[#1E90FF]/20">
                            <CheckCircle2 className="w-5 h-5 text-[#00FFFF] flex-shrink-0" />
                            <span className="text-white/80 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="glass-effect rounded-lg p-4 border border-[#1E90FF]/30">
                        <div className="text-[#00FFFF] text-sm mb-1">Tech Stack</div>
                        <div className="text-white/70">{slide.content.tech}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Capabilities Slide */}
                {slide.type === 'capabilities' && (
                  <div className="h-full flex flex-col">
                    <div className="mb-6">
                      <h2 className="text-4xl mb-2 text-gradient">{slide.title}</h2>
                      <p className="text-[#00FFFF]">{slide.subtitle}</p>
                    </div>
                    
                    <div className="flex-grow grid grid-cols-3 gap-4">
                      {slide.capabilities.slice(0, 3).map((cap: any, idx: number) => (
                        <div key={idx} className="glass-effect rounded-xl p-4 border border-[#1E90FF]/20">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1E90FF] to-[#00FFFF] flex items-center justify-center mb-3">
                            <cap.icon className="w-6 h-6 text-black" />
                          </div>
                          <h3 className="text-white mb-2 text-sm">{cap.name}</h3>
                          <div className="space-y-1">
                            {cap.items.map((item: string, i: number) => (
                              <div key={i} className="text-white/60 text-xs">• {item}</div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {slide.capabilities.slice(3).map((cap: any, idx: number) => (
                        <div key={idx} className="glass-effect rounded-xl p-4 border border-[#1E90FF]/20">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00FFFF] to-[#1E90FF] flex items-center justify-center mb-3">
                            <cap.icon className="w-6 h-6 text-black" />
                          </div>
                          <h3 className="text-white mb-2 text-sm">{cap.name}</h3>
                          <div className="space-y-1">
                            {cap.items.map((item: string, i: number) => (
                              <div key={i} className="text-white/60 text-xs">• {item}</div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Development Process Slide */}
                {slide.type === 'development-process' && (
                  <div className="h-full flex flex-col">
                    <div className="mb-6">
                      <h2 className="text-4xl mb-2 text-gradient">{slide.title}</h2>
                      <p className="text-[#00FFFF] mb-2">{slide.subtitle}</p>
                      <p className="text-2xl text-gradient italic">{slide.content.tagline}</p>
                    </div>
                    
                    <div className="flex-grow grid grid-cols-2 gap-6">
                      {/* Left Column - Methodology */}
                      <div className="space-y-6">
                        <div className="glass-effect rounded-xl p-6 border border-[#1E90FF]/30">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1E90FF] to-[#00FFFF] flex items-center justify-center">
                              <RefreshCw className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-white text-xl">{slide.content.methodology.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {slide.content.methodology.points.map((point: string, idx: number) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#00FFFF] flex-shrink-0 mt-1" />
                                <span className="text-white/70 text-sm">{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="glass-effect rounded-xl p-6 border border-[#1E90FF]/30">
                          <h4 className="text-white mb-3">Key Benefits</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {slide.content.benefits.map((benefit: string, idx: number) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#00FFFF]" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Tools */}
                      <div>
                        <div className="glass-effect rounded-xl p-6 border border-[#1E90FF]/30 h-full">
                          <h3 className="text-white mb-4 text-lg">Enterprise Tools & Technologies</h3>
                          <div className="grid grid-cols-2 gap-4">
                            {slide.content.tools.map((tool: any, idx: number) => (
                              <motion.div
                                key={idx}
                                className="glass-effect rounded-lg p-4 border border-[#1E90FF]/20 hover:border-[#00FFFF]/50 transition-all"
                                whileHover={{ scale: 1.05, y: -3 }}
                              >
                                <tool.icon className="w-8 h-8 text-[#00FFFF] mb-2" />
                                <div className="text-white mb-1">{tool.name}</div>
                                <div className="text-white/60 text-xs">{tool.desc}</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom highlight */}
                    <div className="mt-6 glass-effect rounded-lg p-4 border border-[#00FFFF]/30 bg-gradient-to-r from-[#1E90FF]/10 to-[#00FFFF]/10">
                      <p className="text-center text-white/80 text-sm">
                        <span className="text-[#00FFFF]">Company-wide standardization</span> on JIRA, Confluence, and Bitbucket ensures seamless collaboration across all teams
                      </p>
                    </div>
                  </div>
                )}

                {/* Why Choose Us Slide */}
                {slide.type === 'why-choose-us' && (
                  <div className="h-full flex flex-col">
                    <div className="mb-6">
                      <h2 className="text-4xl mb-2 text-gradient">{slide.title}</h2>
                      <p className="text-[#00FFFF]">{slide.subtitle}</p>
                    </div>
                    
                    <div className="flex-grow grid grid-cols-3 gap-4">
                      {slide.reasons.map((reason: any, idx: number) => (
                        <motion.div
                          key={idx}
                          className="glass-effect rounded-xl p-6 border border-[#1E90FF]/20 hover:border-[#00FFFF]/50 transition-all text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E90FF] to-[#00FFFF] flex items-center justify-center mx-auto mb-3">
                            <reason.icon className="w-7 h-7 text-black" />
                          </div>
                          <h3 className="text-white mb-2">{reason.title}</h3>
                          <p className="text-white/60 text-sm">{reason.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Portfolio Slide */}
                {slide.type === 'portfolio' && (
                  <div className="h-full flex flex-col">
                    <div className="mb-6">
                      <h2 className="text-4xl mb-2 text-gradient">{slide.title}</h2>
                      <p className="text-[#00FFFF]">{slide.subtitle}</p>
                    </div>
                    
                    <div className="flex-grow space-y-4">
                      {slide.cases.map((case_: any, idx: number) => (
                        <div key={idx} className="glass-effect rounded-xl p-6 border border-[#1E90FF]/20">
                          <div className="flex items-start justify-between">
                            <div className="flex-grow">
                              <h3 className="text-white text-xl mb-2">{case_.title}</h3>
                              <p className="text-[#00FFFF] mb-2">{case_.impact}</p>
                              <div className="flex items-center gap-4 text-white/60 text-sm">
                                <span>{case_.client}</span>
                                <span>•</span>
                                <span>{case_.industry}</span>
                              </div>
                            </div>
                            <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#1E90FF]/20 to-[#00FFFF]/20 border border-[#1E90FF]/30">
                              <div className="text-2xl text-gradient">★★★★★</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Slide */}
                {slide.type === 'contact' && (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <h2 className="text-5xl mb-4 text-gradient">{slide.title}</h2>
                    <p className="text-2xl text-[#00FFFF] mb-6">{slide.subtitle}</p>
                    <p className="text-white/70 mb-12 max-w-2xl">{slide.content.tagline}</p>
                    
                    <div className="grid grid-cols-3 gap-8 mb-12">
                      {slide.content.contact.map((item: any, idx: number) => (
                        <div key={idx} className="glass-effect rounded-xl p-6 border border-[#1E90FF]/20">
                          <item.icon className="w-8 h-8 text-[#00FFFF] mx-auto mb-3" />
                          <div className="text-white/60 text-sm mb-1">{item.label}</div>
                          <div className="text-white">{item.value}</div>
                        </div>
                      ))}
                    </div>
                    
                    <motion.a
                      href="/contact"
                      className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] text-black text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Request a Demo
                    </motion.a>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Slide Number Footer */}
            <div className="absolute bottom-4 right-4 text-white/40 text-sm">
              {currentSlide + 1} / {slides.length}
            </div>

            {/* Company Logo Footer */}
            <div className="absolute bottom-4 left-4 text-gradient">
              NeoTeq
            </div>
          </div>
        </div>

        {/* Slide Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-[#1E90FF] w-8'
                  : 'bg-white/20 w-2 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Slide Thumbnails */}
        <div className="mt-8 grid grid-cols-6 gap-3">
          {slides.map((s, index) => (
            <motion.button
              key={s.id}
              onClick={() => goToSlide(index)}
              className={`aspect-video rounded-lg border-2 overflow-hidden transition-all ${
                index === currentSlide
                  ? 'border-[#1E90FF] scale-105'
                  : 'border-white/10 hover:border-[#1E90FF]/50'
              }`}
              whileHover={{ scale: index === currentSlide ? 1.05 : 1.05 }}
            >
              <div className="w-full h-full glass-effect p-2 flex flex-col items-center justify-center">
                <div className="text-white/60 text-[10px] text-center line-clamp-2">
                  {s.title}
                </div>
                <div className="text-white/40 text-[8px] mt-1">{index + 1}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-slide, .print-slide * {
            visibility: visible;
          }
          .print-slide {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
