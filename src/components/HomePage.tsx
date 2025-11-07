import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CircuitDivider } from './CircuitDivider';
import { GlassCard } from './GlassCard';
import { SEO } from './SEO';
import { AnimatedCounter } from './AnimatedCounter';
import { ParticleBackground } from './ParticleBackground';
import { MagneticButton } from './MagneticButton';
import { ServicesSlider } from './ServicesSlider';
import { 
  Cpu, 
  Zap, 
  Shield, 
  Brain, 
  TrendingUp, 
  Award, 
  Users, 
  Globe, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Target,
  Rocket
} from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
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
      stiffness: 100,
      damping: 10
    }
  }
};

export function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="NeoTeq - AI & GPU Optimization | Enterprise AI Solutions"
        description="Transform your business with cutting-edge AI and GPU optimization solutions. Industry-leading expertise in machine learning, deep learning, and high-performance computing. Request a demo today."
        keywords="AI optimization, GPU acceleration, machine learning development, artificial intelligence consulting, MLOps, data engineering, AI security, CUDA programming, deep learning, neural networks, computer vision, NLP, enterprise AI"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Animated background grid */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(30, 144, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30, 144, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </motion.div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#1E90FF] opacity-20 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#00FFFF] opacity-20 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.25, 0.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6 px-4 py-2 rounded-full glass-effect border border-[#1E90FF]/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[#00FFFF]">Next-Gen AI Solutions</span>
            </motion.div>

            <motion.h1
              className="mb-6 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              AI. Optimized. Everywhere.
            </motion.h1>

            <motion.p
              className="mb-8 text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Transform your business with cutting-edge AI and GPU optimization solutions.
              We deliver innovation at the intersection of artificial intelligence and high-performance computing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <MagneticButton
                href="/contact"
                className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] text-black neon-glow-hover transition-all duration-300"
              >
                Request a Demo
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#1E90FF] flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#1E90FF]"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      <CircuitDivider />

      {/* Services Slider */}
      <ServicesSlider />

      <CircuitDivider />

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-gradient">Why Choose NeoTeq?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Industry-leading expertise in AI optimization and deployment
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Cpu,
                title: 'GPU Optimization',
                description: 'Maximize performance with advanced GPU acceleration and optimization techniques.'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Deploy AI solutions that operate at unprecedented speeds without compromising quality.'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-grade security protocols to protect your data and AI models.'
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard delay={0}>
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1E90FF] to-[#00FFFF] flex items-center justify-center mb-4"
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-8 h-8 text-black" />
                    </motion.div>
                    <h3 className="mb-3 text-white">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CircuitDivider />

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '10x', label: 'Performance Gain' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <AnimatedCounter
                key={index}
                value={stat.value}
                label={stat.label}
                duration={2 + index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-gradient">Powered by Leading Technologies</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We leverage the most advanced AI frameworks and tools to deliver exceptional results
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              'TensorFlow', 'PyTorch', 'CUDA', 'Kubernetes', 'AWS', 'Azure',
              'NVIDIA', 'Docker', 'Ray', 'MLflow', 'Hugging Face', 'LangChain'
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="glass-effect rounded-lg p-4 text-center border border-[#1E90FF]/20 hover:border-[#00FFFF]/50 transition-all cursor-pointer group"
                whileHover={{ 
                  y: -8,
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(0, 255, 255, 0.2)"
                }}
              >
                <div className="text-white/80 group-hover:text-white transition-colors">{tech}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CircuitDivider />

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-gradient">Our AI-First Approach</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              From strategy to deployment, we guide you through every step of your AI transformation journey
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Target,
                step: '01',
                title: 'Discover & Analyze',
                description: 'Deep dive into your business needs, challenges, and opportunities for AI integration.'
              },
              {
                icon: Brain,
                step: '02',
                title: 'Design & Architect',
                description: 'Create scalable AI architectures optimized for performance and cost-efficiency.'
              },
              {
                icon: Rocket,
                step: '03',
                title: 'Develop & Deploy',
                description: 'Build robust AI solutions with continuous testing and seamless deployment.'
              },
              {
                icon: TrendingUp,
                step: '04',
                title: 'Optimize & Scale',
                description: 'Monitor, refine, and scale your AI systems for maximum business impact.'
              }
            ].map((phase, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard delay={0}>
                  <motion.div 
                    className="text-[#1E90FF]/50 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {phase.step}
                  </motion.div>
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E90FF] to-[#00FFFF] flex items-center justify-center mb-4"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <phase.icon className="w-6 h-6 text-black" />
                  </motion.div>
                  <h3 className="text-white mb-3">{phase.title}</h3>
                  <p className="text-white/70 text-sm">{phase.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CircuitDivider />

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-gradient">Trusted by Industry Leaders</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              See what our clients say about transforming their businesses with NeoTeq
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                quote: "NeoTeq's GPU optimization reduced our AI inference time by 85%. Their expertise in CUDA programming is unmatched.",
                author: "Sarah Chen",
                role: "CTO, TechVision Inc",
                rating: 5
              },
              {
                quote: "The AI solutions delivered by NeoTeq have transformed our customer experience. ROI exceeded expectations within 6 months.",
                author: "Michael Rodriguez",
                role: "VP Engineering, RetailPro",
                rating: 5
              },
              {
                quote: "Outstanding MLOps implementation. Our model deployment cycle went from weeks to hours. Game-changing partnership.",
                author: "Dr. Emily Watson",
                role: "Head of AI, HealthTech Solutions",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard delay={0}>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <Sparkles className="w-5 h-5 text-[#00FFFF] fill-[#00FFFF]" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="text-white">{testimonial.author}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CircuitDivider />

      {/* Why NeoTeq Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4 px-4 py-2 rounded-full glass-effect border border-[#1E90FF]/30">
                <span className="text-[#00FFFF]">The NeoTeq Difference</span>
              </div>
              <h2 className="mb-6 text-gradient">Why Global Enterprises Choose NeoTeq</h2>
              <p className="text-white/70 mb-8">
                We don't just build AI solutions—we create competitive advantages. Our team combines 
                deep technical expertise with business acumen to deliver transformative results.
              </p>
              
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {[
                  'Proven track record with Fortune 500 companies',
                  'Cutting-edge research in GPU acceleration',
                  'End-to-end AI solution design and implementation',
                  'Industry-specific domain expertise',
                  'Dedicated support and continuous optimization',
                  'Scalable solutions that grow with your business'
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex items-start gap-3 group cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#00FFFF] flex-shrink-0 mt-0.5 group-hover:text-[#1E90FF]" />
                    </motion.div>
                    <span className="text-white/80 group-hover:text-white transition-colors">{point}</span>
                  </motion.div>
                ))}
              </motion.div>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 mt-8 text-[#00FFFF] hover:text-white transition-colors group"
              >
                <span>View Our Success Stories</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { icon: Award, label: 'Industry Recognition', value: '15+ Awards' },
                { icon: Users, label: 'Expert Team', value: '100+ AI Engineers' },
                { icon: Globe, label: 'Global Presence', value: '25+ Countries' },
                { icon: Brain, label: 'AI Models Deployed', value: '1000+ Models' }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="glass-effect rounded-xl p-6 border border-[#1E90FF]/20 flex items-center gap-4 cursor-pointer group"
                  whileHover={{ 
                    scale: 1.05,
                    x: 10,
                    borderColor: 'rgba(0, 255, 255, 0.5)',
                    boxShadow: "0 10px 40px rgba(30, 144, 255, 0.3)"
                  }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E90FF] to-[#00FFFF] flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <metric.icon className="w-7 h-7 text-black" />
                  </motion.div>
                  <div>
                    <div className="text-white/60 text-sm group-hover:text-white/80 transition-colors">{metric.label}</div>
                    <div className="text-white text-xl group-hover:text-[#00FFFF] transition-colors">{metric.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-effect rounded-2xl p-12 border border-[#1E90FF]/30 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-[#00FFFF]/10 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="mb-4 text-gradient">Ready to Accelerate Your AI Journey?</h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Join hundreds of forward-thinking companies leveraging NeoTeq's AI expertise 
                to drive innovation and achieve unprecedented business outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] text-black neon-glow-hover transition-all duration-300 hover:scale-105"
                >
                  Request a Demo
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-block px-8 py-4 rounded-xl bg-white/5 border border-[#1E90FF]/30 text-white hover:bg-white/10 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
