import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Cpu, MessageSquare, Heart, Utensils, Leaf, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';

const services = [
  {
    icon: Cpu,
    title: 'AI GPU Optimization & Attestation',
    description: 'Unlock true GPU performance with custom CUDA pipelines, TensorRT optimizations, and cryptographic trust layers for secure, verified AI workloads.',
    highlights: ['Kernel-level GPU tuning', 'LLM fine-tuning & quantization', 'GPU Attestation with nvTrust', 'Up to 40% cost reduction'],
    tech: 'CUDA • TensorRT • PyTorch • Triton • ONNX'
  },
  {
    icon: MessageSquare,
    title: 'RAG Applications',
    description: 'Interactive AI systems combining retrieval, reasoning, and response—creating intelligent agents grounded in your data.',
    highlights: ['Text ↔ Voice multilingual AI', 'Text → Video generation', 'Meeting summaries & insights', 'Context-aware chatbots'],
    tech: 'LangChain • Hugging Face • OpenAI • Nuclia'
  },
  {
    icon: Heart,
    title: 'HealthTech',
    description: 'AI-powered healthcare platforms that automate workflows, enhance patient care, and maintain HIPAA compliance.',
    highlights: ['Multi-location hospital management', 'Real-time patient monitoring', 'Predictive analytics', 'Medical imaging AI'],
    tech: '99.9% uptime • HIPAA-compliant • IoT integration'
  },
  {
    icon: Utensils,
    title: 'FoodTech',
    description: 'Digitizing food and supply chains with AI-driven forecasting, quality monitoring, and blockchain traceability.',
    highlights: ['AI demand forecasting', 'Food traceability with blockchain', 'Real-time quality monitoring', 'Predictive logistics'],
    tech: 'IoT • Blockchain • NLP sentiment analysis'
  },
  {
    icon: Leaf,
    title: 'EnvironmentTech',
    description: 'Building sustainable solutions with AI-driven emission optimization, ESG reporting, and environmental monitoring.',
    highlights: ['AI emission optimization', 'ESG data pipelines', 'Air/water/soil quality analytics', 'Sustainability scoring'],
    tech: 'IoT • Satellite data • Real-time dashboards'
  },
  {
    icon: ShoppingBag,
    title: 'Retail Tech for Garments',
    description: 'Reinventing fashion retail with AI visual search, virtual try-on, and smart inventory predictions.',
    highlights: ['AI visual search & virtual try-on', 'Smart inventory predictions', 'Edge vision quality control', 'Customer intelligence'],
    tech: 'Computer Vision • Edge AI • Analytics'
  }
];

export function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, services.length - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-gradient">Our Services</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to transform your industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10">
            <motion.button
              onClick={prev}
              className="w-12 h-12 rounded-full glass-effect border border-[#1E90FF]/30 flex items-center justify-center text-white hover:border-[#00FFFF]/50 transition-all"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10">
            <motion.button
              onClick={next}
              className="w-12 h-12 rounded-full glass-effect border border-[#1E90FF]/30 flex items-center justify-center text-white hover:border-[#00FFFF]/50 transition-all"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * (24 / itemsPerView)}px)`
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(24 * (itemsPerView - 1)) / itemsPerView}px)` }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard delay={0}>
                    <div className="h-full flex flex-col">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E90FF] to-[#00FFFF] flex items-center justify-center mb-4"
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <service.icon className="w-7 h-7 text-black" />
                      </motion.div>

                      <h3 className="text-white mb-3">{service.title}</h3>
                      <p className="text-white/70 text-sm mb-4 flex-grow">{service.description}</p>

                      <div className="space-y-2 mb-4">
                        {service.highlights.slice(0, 3).map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00FFFF] mt-1.5 flex-shrink-0" />
                            <span className="text-white/60 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <p className="text-[#1E90FF]/70 text-xs">{service.tech}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#1E90FF] w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
