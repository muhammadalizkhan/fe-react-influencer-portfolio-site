"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mic, Users, Calendar, ArrowRight, Star, Play, Zap, Target } from "lucide-react"

const services = [
  {
    icon: Mic,
    title: "PODCAST PRODUCTION",
    description: "Professional podcast creation with famous personalities",
  },
  {
    icon: Users,
    title: "INFLUENCER MARKETING",
    description: "Connect brands with top influencers in Sargodha",
  },
  {
    icon: Target,
    title: "BRAND STRATEGY",
    description: "Strategic consulting for digital brand growth",
  },
]

const achievements = [
  { label: "FAMOUS GUESTS", value: "50+" },
  { label: "BRAND PARTNERSHIPS", value: "100+" },
  { label: "SOCIAL REACH", value: "2M+" },
  { label: "SUCCESS RATE", value: "98%" },
]

const testimonials = [
  {
    quote: "GAME-CHANGING PODCAST EXPERIENCE",
    author: "TECH ENTREPRENEUR",
  },
  {
    quote: "PROFESSIONAL & IMPACTFUL",
    author: "BUSINESS LEADER",
  },
  {
    quote: "EXCEEDED ALL EXPECTATIONS",
    author: "CELEBRITY GUEST",
  },
]

export default function Hero() {
  const [activeService, setActiveService] = useState(0)

  return (
    <section className="bg-white text-black pt-20 lg:pt-24 min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid grid-cols-8 lg:grid-cols-16 h-full">
          {Array.from({ length: 128 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.005 }}
              className="border border-black"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[85vh]">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <div className="bg-black text-white px-4 py-2 font-black text-xs uppercase tracking-widest transform -rotate-1 border-4 border-black">
                <Zap className="inline w-3 h-3 mr-2" />
                SARGODHA'S #1 INFLUENCER AGENCY
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                WE CREATE
                <br />
                <span className="bg-black text-white px-3 py-1 transform rotate-1 inline-block mr-2">VIRAL</span>
                CONTENT
                <br />& CONNECTIONS
              </h1>

              <p className="text-lg lg:text-xl font-bold max-w-2xl leading-tight text-gray-800">
                Professional podcast production, influencer marketing, and brand strategy services that connect you with
                famous personalities and grow your digital presence.
              </p>
            </motion.div>

            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"
            >
              {achievements.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                  className="bg-black text-white p-3 lg:p-4 border-4 border-black text-center"
                >
                  <div className="font-black text-xl lg:text-2xl">{stat.value}</div>
                  <div className="text-[10px] lg:text-xs font-bold tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://calendly.com/podcastwithyasiriqbal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 lg:px-8 py-3 lg:py-4 font-black text-sm uppercase tracking-widest border-4 border-black hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="w-4 h-4 mr-3" />
                SCHEDULE MEETING
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-6 lg:px-8 py-3 lg:py-4 font-black text-sm uppercase tracking-widest border-4 border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Play className="w-4 h-4 mr-3" />
                VIEW OUR WORK
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            {/* Services Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="font-black text-xl lg:text-2xl uppercase tracking-tight">WE PROVIDE</h2>

              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={service.title}
                    whileHover={{ x: 10, scale: 1.02 }}
                    onClick={() => setActiveService(index)}
                    className={`p-4 lg:p-6 border-4 border-black cursor-pointer transition-all duration-300 ${
                      activeService === index
                        ? "bg-black text-white transform rotate-1"
                        : "bg-white text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <IconComponent className="w-6 h-6 lg:w-8 lg:h-8" strokeWidth={3} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-black text-sm lg:text-base uppercase tracking-wide mb-2">
                          {service.title}
                        </h3>
                        <p className="text-xs lg:text-sm font-bold opacity-80 leading-tight">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              <h3 className="font-black text-lg uppercase tracking-tight">CLIENT FEEDBACK</h3>

              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, rotate: Math.random() * 2 - 1 }}
                  className="bg-black text-white p-4 border-4 border-black"
                >
                  <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="font-black text-sm uppercase tracking-wide mb-2">"{testimonial.quote}"</p>
                  <p className="text-xs font-bold opacity-80">— {testimonial.author}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                className="w-full bg-white text-black p-4 font-black text-sm uppercase tracking-widest border-4 border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                GET STARTED TODAY
                <ArrowRight className="w-4 h-4 ml-3" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-black"></div>
      <div className="absolute top-20 lg:top-24 left-0 right-0 h-2 bg-black"></div>
    </section>
  )
}
