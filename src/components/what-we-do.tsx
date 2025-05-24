"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Target,
  Search,
  Users,
  Mic,
  Video,
  TrendingUp,
  BarChart3,
  Lightbulb,
  ArrowRight,
  Play,
  CheckCircle,
  Calendar,
  Globe,
} from "lucide-react"

const methodologies = [
  {
    id: 1,
    icon: Search,
    title: "RESEARCH & STRATEGY",
    description: "Deep market analysis and strategic planning",
    details: [
      "Comprehensive market research and competitor analysis",
      "Target audience identification and persona development",
      "Content strategy and messaging framework creation",
      "Platform-specific optimization strategies",
    ],
    process: "We start every project with extensive research to understand your market, audience, and competition.",
    duration: "1-2 WEEKS",
  },
  {
    id: 2,
    icon: Users,
    title: "INFLUENCER MATCHING",
    description: "Perfect partnerships for maximum impact",
    details: [
      "Curated influencer database with verified metrics",
      "Personality and brand alignment assessment",
      "Negotiation and contract management",
      "Performance tracking and optimization",
    ],
    process:
      "Our proprietary matching system connects you with influencers who genuinely align with your brand values.",
    duration: "3-5 DAYS",
  },
  {
    id: 3,
    icon: Video,
    title: "CONTENT CREATION",
    description: "High-quality content that converts",
    details: [
      "Professional video and photo production",
      "Podcast recording and post-production",
      "Graphic design and visual branding",
      "Copy writing and script development",
    ],
    process: "Our creative team produces content that not only looks amazing but drives real business results.",
    duration: "1-3 WEEKS",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "CAMPAIGN EXECUTION",
    description: "Flawless execution across all platforms",
    details: [
      "Multi-platform campaign coordination",
      "Real-time monitoring and optimization",
      "Crisis management and reputation protection",
      "Performance tracking and reporting",
    ],
    process: "We manage every aspect of your campaign to ensure maximum reach and engagement.",
    duration: "ONGOING",
  },
  {
    id: 5,
    icon: BarChart3,
    title: "ANALYTICS & OPTIMIZATION",
    description: "Data-driven improvements for better ROI",
    details: [
      "Advanced analytics and performance tracking",
      "A/B testing and optimization strategies",
      "ROI analysis and budget optimization",
      "Detailed reporting and insights",
    ],
    process: "Continuous optimization based on real data ensures your campaigns get better over time.",
    duration: "CONTINUOUS",
  },
]

const specialties = [
  {
    icon: Mic,
    title: "PODCAST PRODUCTION",
    description: "End-to-end podcast creation with famous personalities",
    features: ["Guest booking", "Professional recording", "Post-production", "Distribution"],
  },
  {
    icon: Globe,
    title: "BRAND AMPLIFICATION",
    description: "Strategic brand promotion across digital channels",
    features: ["Multi-platform campaigns", "Viral content creation", "Audience growth", "Brand positioning"],
  },
  {
    icon: Target,
    title: "INFLUENCE STRATEGY",
    description: "Building authentic influence and thought leadership",
    features: ["Personal branding", "Content strategy", "Network building", "Authority positioning"],
  },
]

const results = [
  { metric: "AVERAGE REACH INCREASE", value: "400%", description: "Across all client campaigns" },
  { metric: "ENGAGEMENT BOOST", value: "250%", description: "Higher than industry average" },
  { metric: "CONVERSION RATE", value: "15%", description: "From influence to sales" },
  { metric: "CLIENT RETENTION", value: "95%", description: "Long-term partnerships" },
]

const caseStudyHighlights = [
  {
    title: "TECH STARTUP LAUNCH",
    result: "2M+ REACH IN 30 DAYS",
    description: "Helped a tech startup achieve viral launch through strategic influencer partnerships",
  },
  {
    title: "CELEBRITY PODCAST SERIES",
    result: "500K+ DOWNLOADS",
    description: "Produced podcast series featuring industry leaders and celebrities",
  },
  {
    title: "BRAND TRANSFORMATION",
    result: "300% SALES INCREASE",
    description: "Complete brand overhaul resulting in massive sales growth",
  },
]

export default function WhatWeDo() {
  const [selectedMethodology, setSelectedMethodology] = useState(methodologies[0])
  const [hoveredSpecialty, setHoveredSpecialty] = useState<number | null>(null)

  return (
    <section className="bg-white text-black py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid grid-cols-14 lg:grid-cols-22 h-full">
          {Array.from({ length: 308 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.002 }}
              className="border border-black"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-block bg-black text-white px-4 py-2 font-black text-xs uppercase tracking-widest transform -rotate-1 border-4 border-black mb-6">
            <Lightbulb className="inline w-3 h-3 mr-2" />
            WHAT WE DO
          </div>

          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            HOW WE
            <br />
            <span className="bg-black text-white px-3 py-1 transform rotate-1 inline-block">TRANSFORM</span>
            <br />
            YOUR INFLUENCE
          </h2>

          <p className="text-lg lg:text-xl font-bold max-w-4xl mx-auto text-gray-800 leading-relaxed">
            Our proven methodology combines strategic thinking, creative execution, and data-driven optimization to
            deliver exceptional results for every client.
          </p>
        </motion.div>

        {/* Methodology Section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {/* Methodology List - 7 columns */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight mb-8">OUR METHODOLOGY</h3>

            {methodologies.map((method, index) => {
              const IconComponent = method.icon
              return (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  onClick={() => setSelectedMethodology(method)}
                  className={`p-6 border-4 border-black cursor-pointer transition-all duration-300 ${
                    selectedMethodology.id === method.id
                      ? "bg-black text-white transform rotate-1"
                      : "bg-white text-black hover:bg-black hover:text-white"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white text-black w-12 h-12 flex items-center justify-center border-2 border-black">
                        <span className="font-black text-lg">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <IconComponent className="w-6 h-6" strokeWidth={3} />
                        <h4 className="font-black text-lg uppercase tracking-tight">{method.title}</h4>
                      </div>
                      <p className="text-sm font-bold opacity-80">{method.description}</p>
                      <div className="text-xs font-black uppercase tracking-wider opacity-60 mt-2">
                        {method.duration}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 flex-shrink-0" />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Methodology Details - 5 columns */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMethodology.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-black text-white p-6 lg:p-8 border-8 border-black space-y-6"
                >
                  <div className="flex items-center space-x-3">
                    <selectedMethodology.icon className="w-8 h-8" strokeWidth={3} />
                    <div>
                      <h3 className="font-black text-xl uppercase tracking-tight leading-tight">
                        {selectedMethodology.title}
                      </h3>
                      <div className="text-sm font-black opacity-60">{selectedMethodology.duration}</div>
                    </div>
                  </div>

                  <p className="font-bold text-gray-300 leading-relaxed">{selectedMethodology.process}</p>

                  <div className="space-y-3">
                    <h4 className="font-black text-sm uppercase tracking-wider">WHAT WE DELIVER:</h4>
                    <ul className="space-y-2">
                      {selectedMethodology.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-bold">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.a
                    href="https://calendly.com/podcastwithyasiriqbal"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block bg-white text-black p-4 font-black text-sm uppercase tracking-widest text-center hover:bg-gray-100 transition-colors border-4 border-white"
                  >
                    <Calendar className="inline w-4 h-4 mr-2" />
                    DISCUSS THIS STEP
                  </motion.a>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Specialties Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
              OUR SPECIALTIES
            </h3>
            <p className="text-lg font-bold text-gray-800 max-w-2xl mx-auto">
              Core areas where we excel and deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon
              return (
                <motion.div
                  key={specialty.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: Math.random() * 2 - 1 }}
                  onHoverStart={() => setHoveredSpecialty(index)}
                  onHoverEnd={() => setHoveredSpecialty(null)}
                  className={`p-6 lg:p-8 border-4 border-black transition-all duration-300 ${
                    hoveredSpecialty === index ? "bg-black text-white transform rotate-1" : "bg-white text-black"
                  }`}
                >
                  <IconComponent className="w-10 h-10 lg:w-12 lg:h-12 mb-4" strokeWidth={3} />
                  <h4 className="font-black text-xl lg:text-2xl uppercase tracking-tight mb-3">{specialty.title}</h4>
                  <p className="font-bold opacity-80 mb-4 leading-tight">{specialty.description}</p>

                  <div className="space-y-2">
                    {specialty.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-current"></div>
                        <span className="text-sm font-bold">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
              PROVEN RESULTS
            </h3>
            <p className="text-lg font-bold text-gray-800 max-w-2xl mx-auto">The numbers speak for themselves</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                className="bg-black text-white p-6 border-4 border-black text-center"
              >
                <div className="font-black text-3xl lg:text-4xl mb-2">{result.value}</div>
                <div className="text-xs font-bold uppercase tracking-wider mb-2">{result.metric}</div>
                <div className="text-xs opacity-80">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Study Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t-4 border-black pt-12 lg:pt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
              SUCCESS STORIES
            </h3>
            <p className="text-lg font-bold text-gray-800 max-w-2xl mx-auto">Real results from real clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {caseStudyHighlights.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: Math.random() * 2 - 1 }}
                className="bg-black text-white p-6 border-4 border-black"
              >
                <div className="bg-white text-black px-3 py-1 text-xs font-black uppercase mb-4 inline-block">
                  CASE STUDY
                </div>
                <h4 className="font-black text-lg uppercase tracking-tight mb-2">{caseStudy.title}</h4>
                <div className="font-black text-2xl mb-3 text-gray-300">{caseStudy.result}</div>
                <p className="text-sm font-bold opacity-80">{caseStudy.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center pt-12 lg:pt-16"
        >
          <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight mb-6">
            READY TO SEE WHAT WE CAN DO FOR YOU?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://calendly.com/podcastwithyasiriqbal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 font-black text-sm uppercase tracking-widest border-4 border-black hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
            >
              <Calendar className="w-4 h-4 mr-3" />
              SCHEDULE CONSULTATION
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 font-black text-sm uppercase tracking-widest border-4 border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <Play className="w-4 h-4 mr-3" />
              VIEW CASE STUDIES
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-black"></div>
    </section>
  )
}
