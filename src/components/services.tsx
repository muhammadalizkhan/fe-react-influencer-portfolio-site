"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mic,
  Megaphone,
  User,
  Building,
  Star,
  Palette,
  Video,
  TrendingUp,
  Calendar,
  ArrowRight,
  Check,
  Zap,
} from "lucide-react"

const services = [
  {
    id: 1,
    icon: Mic,
    title: "PROFESSIONAL PODCAST EDITING",
    description:
      "Complete podcast production from recording to publishing with professional editing, sound design, and distribution.",
    features: [
      "Multi-track editing",
      "Noise reduction",
      "Sound enhancement",
      "Intro/outro creation",
      "Platform distribution",
    ],
    price: "FROM $299",
    popular: false,
  },
  {
    id: 2,
    icon: Megaphone,
    title: "BRAND PROMOTIONS",
    description:
      "Strategic brand promotion campaigns that reach your target audience through influencer partnerships and content marketing.",
    features: [
      "Campaign strategy",
      "Influencer matching",
      "Content creation",
      "Performance tracking",
      "ROI optimization",
    ],
    price: "FROM $599",
    popular: true,
  },
  {
    id: 3,
    icon: User,
    title: "PROFILE INTERVIEWS",
    description:
      "Professional interview sessions with industry leaders, entrepreneurs, and celebrities to boost your credibility.",
    features: [
      "Guest booking",
      "Interview preparation",
      "Professional recording",
      "Content editing",
      "Multi-platform publishing",
    ],
    price: "FROM $799",
    popular: false,
  },
  {
    id: 4,
    icon: Building,
    title: "PROFILE BUILDING",
    description:
      "Complete digital profile transformation across all platforms to establish you as an industry authority.",
    features: [
      "LinkedIn optimization",
      "Social media setup",
      "Bio writing",
      "Professional photography",
      "Content strategy",
    ],
    price: "FROM $499",
    popular: false,
  },
  {
    id: 5,
    icon: Star,
    title: "PRODUCT REVIEWS",
    description: "Authentic product review content creation that drives sales and builds trust with your audience.",
    features: [
      "Review scripting",
      "Video production",
      "Photography",
      "Multi-platform posting",
      "Performance analytics",
    ],
    price: "FROM $399",
    popular: false,
  },
  {
    id: 6,
    icon: Palette,
    title: "PERSONAL BRANDING",
    description:
      "Complete personal brand development including visual identity, messaging, and digital presence strategy.",
    features: ["Brand strategy", "Visual identity", "Content pillars", "Voice & tone", "Brand guidelines"],
    price: "FROM $899",
    popular: false,
  },
  {
    id: 7,
    icon: Video,
    title: "CONTENT CREATION",
    description: "High-quality video and photo content creation for social media, websites, and marketing campaigns.",
    features: ["Video production", "Photography", "Graphic design", "Social media content", "Content calendar"],
    price: "FROM $699",
    popular: false,
  },
  {
    id: 8,
    icon: TrendingUp,
    title: "GROWTH STRATEGY",
    description: "Data-driven growth strategies to scale your influence and reach across all digital platforms.",
    features: [
      "Analytics setup",
      "Growth hacking",
      "Audience research",
      "Competitor analysis",
      "Performance optimization",
    ],
    price: "FROM $999",
    popular: false,
  },
]

const processSteps = [
  { step: "01", title: "CONSULTATION", description: "Free strategy call to understand your goals" },
  { step: "02", title: "PLANNING", description: "Custom strategy and timeline development" },
  { step: "03", title: "EXECUTION", description: "Professional implementation of your project" },
  { step: "04", title: "OPTIMIZATION", description: "Continuous improvement and performance tracking" },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[1]) // Default to popular service
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section className="bg-white text-black py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid grid-cols-12 lg:grid-cols-20 h-full">
          {Array.from({ length: 240 }).map((_, i) => (
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
            <Zap className="inline w-3 h-3 mr-2" />
            OUR SERVICES
          </div>

          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            TRANSFORM YOUR
            <br />
            <span className="bg-black text-white px-3 py-1 transform rotate-1 inline-block">DIGITAL</span>
            <br />
            PRESENCE
          </h2>

          <p className="text-lg lg:text-xl font-bold max-w-3xl mx-auto text-gray-800">
            From podcast production to personal branding, we offer comprehensive services to elevate your influence and
            grow your digital empire.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Services List - 8 columns */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, rotate: Math.random() * 2 - 1 }}
                    onHoverStart={() => setHoveredService(service.id)}
                    onHoverEnd={() => setHoveredService(null)}
                    onClick={() => setSelectedService(service)}
                    className={`relative p-6 border-4 border-black cursor-pointer transition-all duration-300 ${
                      selectedService.id === service.id
                        ? "bg-black text-white transform rotate-1"
                        : hoveredService === service.id
                          ? "bg-black text-white"
                          : "bg-white text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-2 -right-2 bg-white text-black px-2 py-1 text-xs font-black uppercase transform rotate-12 border-2 border-black">
                        POPULAR
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-6 h-6 lg:w-8 lg:h-8" strokeWidth={3} />
                        <div className="text-sm font-black opacity-60">{service.price}</div>
                      </div>

                      <div>
                        <h3 className="font-black text-lg lg:text-xl uppercase tracking-tight leading-tight mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm font-bold opacity-80 leading-tight">{service.description}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs font-black uppercase tracking-wider opacity-60">
                          {service.features.length} FEATURES
                        </div>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Service Details - 4 columns */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-black text-white p-6 lg:p-8 border-8 border-black space-y-6"
                >
                  <div className="flex items-center space-x-3">
                    <selectedService.icon className="w-8 h-8" strokeWidth={3} />
                    <div>
                      <h3 className="font-black text-xl uppercase tracking-tight leading-tight">
                        {selectedService.title}
                      </h3>
                      <div className="text-lg font-black">{selectedService.price}</div>
                    </div>
                  </div>

                  <p className="font-bold text-gray-300 leading-relaxed">{selectedService.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-black text-sm uppercase tracking-wider">WHAT'S INCLUDED:</h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <Check className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm font-bold">{feature}</span>
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
                    GET STARTED
                  </motion.a>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t-4 border-black pt-12 lg:pt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
              OUR PROCESS
            </h3>
            <p className="text-lg font-bold text-gray-800 max-w-2xl mx-auto">
              Simple, transparent, and results-driven approach to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                className="bg-black text-white p-6 border-4 border-black text-center"
              >
                <div className="bg-white text-black w-12 h-12 mx-auto mb-4 flex items-center justify-center font-black text-lg">
                  {step.step}
                </div>
                <h4 className="font-black text-lg uppercase tracking-tight mb-2">{step.title}</h4>
                <p className="text-sm font-bold opacity-80">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-black"></div>
    </section>
  )
}
