"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Users,
  Award,
  Target,
  MapPin,
  Calendar,
  TrendingUp,
  Heart,
  Lightbulb,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react"

const teamMembers = [
  {
    name: "YASIR IQBAL",
    role: "FOUNDER & CEO",
    description: "Visionary leader with 8+ years in digital marketing and podcast production",
    expertise: ["Podcast Production", "Business Strategy", "Client Relations"],
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "CREATIVE DIRECTOR",
    role: "HEAD OF CONTENT",
    description: "Award-winning content creator specializing in viral campaigns and brand storytelling",
    expertise: ["Content Strategy", "Video Production", "Brand Design"],
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "MARKETING LEAD",
    role: "GROWTH STRATEGIST",
    description: "Data-driven marketer focused on scaling influencer campaigns and ROI optimization",
    expertise: ["Growth Hacking", "Analytics", "Campaign Management"],
    image: "/placeholder.svg?height=300&width=300",
  },
]

const achievements = [
  { icon: Users, label: "CLIENTS SERVED", value: "500+", description: "Successful partnerships" },
  { icon: Award, label: "AWARDS WON", value: "15+", description: "Industry recognition" },
  { icon: TrendingUp, label: "GROWTH RATE", value: "300%", description: "Average client growth" },
  { icon: Star, label: "CLIENT RATING", value: "4.9/5", description: "Customer satisfaction" },
]

const values = [
  {
    icon: Target,
    title: "RESULTS-DRIVEN",
    description: "Every strategy is designed to deliver measurable results and exceed expectations.",
  },
  {
    icon: Heart,
    title: "AUTHENTIC CONNECTIONS",
    description: "We build genuine relationships between brands, influencers, and audiences.",
  },
  {
    icon: Lightbulb,
    title: "CREATIVE INNOVATION",
    description: "Pushing boundaries with fresh ideas and cutting-edge content strategies.",
  },
  {
    icon: Shield,
    title: "TRUSTED PARTNERSHIP",
    description: "Your success is our mission. We're committed to long-term partnerships.",
  },
]

const timeline = [
  {
    year: "2018",
    title: "FOUNDED",
    description: "Started with a vision to revolutionize digital influence in Sargodha",
  },
  { year: "2020", title: "EXPANSION", description: "Grew team and launched podcast production services" },
  { year: "2022", title: "RECOGNITION", description: "Became Sargodha's leading influencer marketing agency" },
  { year: "2024", title: "INNOVATION", description: "Pioneering next-gen content strategies and AI-driven campaigns" },
]

export default function WhoWeAre() {
  const [selectedMember, setSelectedMember] = useState(0)
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)

  return (
    <section className="bg-white text-black py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid grid-cols-10 lg:grid-cols-18 h-full">
          {Array.from({ length: 180 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.003 }}
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
            <Users className="inline w-3 h-3 mr-2" />
            WHO WE ARE
          </div>

          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            SARGODHA'S
            <br />
            <span className="bg-black text-white px-3 py-1 transform rotate-1 inline-block">PREMIER</span>
            <br />
            INFLUENCE AGENCY
          </h2>

          <p className="text-lg lg:text-xl font-bold max-w-4xl mx-auto text-gray-800 leading-relaxed">
            We're not just another marketing agency. We're storytellers, connection builders, and growth catalysts who
            transform ordinary brands into extraordinary influences that shape culture and drive results.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {/* Story Content - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight">OUR STORY</h3>

              <div className="space-y-4 text-gray-800">
                <p className="text-lg font-bold leading-relaxed">
                  Founded in the heart of Sargodha, InfluencerofSargodha began with a simple yet powerful vision: to
                  bridge the gap between authentic storytelling and digital influence.
                </p>

                <p className="font-bold leading-relaxed">
                  What started as a passion project has evolved into Pakistan's most innovative influencer marketing
                  agency. We've helped hundreds of brands connect with their audiences through genuine conversations,
                  compelling content, and strategic partnerships.
                </p>

                <p className="font-bold leading-relaxed">
                  Today, we're proud to be the go-to agency for businesses looking to make a real impact in the digital
                  space. Our podcast studio has hosted industry leaders, our campaigns have gone viral, and our clients
                  have seen unprecedented growth.
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <MapPin className="w-5 h-5" />
                <span className="font-black text-sm uppercase tracking-wider">BASED IN SARGODHA, PAKISTAN</span>
              </div>
            </div>
          </motion.div>

          {/* Achievements - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement) => {
                const IconComponent = achievement.icon
                return (
                  <motion.div
                    key={achievement.label}
                    whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                    className="bg-black text-white p-4 lg:p-6 border-4 border-black text-center"
                  >
                    <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3" strokeWidth={3} />
                    <div className="font-black text-xl lg:text-2xl mb-1">{achievement.value}</div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1">{achievement.label}</div>
                    <div className="text-xs opacity-80">{achievement.description}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-4">OUR VALUES</h3>
            <p className="text-lg font-bold text-gray-800 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: Math.random() * 2 - 1 }}
                  onHoverStart={() => setHoveredValue(index)}
                  onHoverEnd={() => setHoveredValue(null)}
                  className={`p-6 border-4 border-black transition-all duration-300 ${
                    hoveredValue === index ? "bg-black text-white transform rotate-1" : "bg-white text-black"
                  }`}
                >
                  <IconComponent className="w-8 h-8 mb-4" strokeWidth={3} />
                  <h4 className="font-black text-lg uppercase tracking-tight mb-3">{value.title}</h4>
                  <p className="text-sm font-bold opacity-80 leading-tight">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
              MEET THE TEAM
            </h3>
            <p className="text-lg font-bold text-gray-800 max-w-2xl mx-auto">The creative minds behind your success</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Team Member Cards - 8 columns */}
            <div className="lg:col-span-8 grid md:grid-cols-3 gap-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedMember(index)}
                  className={`p-4 border-4 border-black cursor-pointer transition-all duration-300 ${
                    selectedMember === index
                      ? "bg-black text-white transform rotate-1"
                      : "bg-white text-black hover:bg-black hover:text-white"
                  }`}
                >
                  <div className="aspect-square bg-gray-200 border-2 border-black mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-600" />
                  </div>
                  <h4 className="font-black text-sm uppercase tracking-tight mb-1">{member.name}</h4>
                  <p className="text-xs font-bold opacity-80">{member.role}</p>
                </motion.div>
              ))}
            </div>

            {/* Selected Member Details - 4 columns */}
            <motion.div
              key={selectedMember}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-4"
            >
              <div className="bg-black text-white p-6 border-8 border-black">
                <h4 className="font-black text-xl uppercase tracking-tight mb-2">{teamMembers[selectedMember].name}</h4>
                <p className="text-sm font-bold opacity-80 mb-4">{teamMembers[selectedMember].role}</p>
                <p className="font-bold mb-6 leading-relaxed">{teamMembers[selectedMember].description}</p>

                <div className="space-y-3">
                  <h5 className="font-black text-sm uppercase tracking-wider">EXPERTISE:</h5>
                  <ul className="space-y-2">
                    {teamMembers[selectedMember].expertise.map((skill, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white"></div>
                        <span className="text-sm font-bold">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t-4 border-black pt-12 lg:pt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
              OUR JOURNEY
            </h3>
            <p className="text-lg font-bold text-gray-800 max-w-2xl mx-auto">Key milestones in our growth story</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                className="bg-black text-white p-6 border-4 border-black text-center"
              >
                <div className="bg-white text-black w-16 h-16 mx-auto mb-4 flex items-center justify-center font-black text-lg">
                  {milestone.year}
                </div>
                <h4 className="font-black text-lg uppercase tracking-tight mb-2">{milestone.title}</h4>
                <p className="text-sm font-bold opacity-80">{milestone.description}</p>
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
            READY TO JOIN OUR SUCCESS STORY?
          </h3>
          <motion.a
            href="https://calendly.com/podcastwithyasiriqbal"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-black text-white px-8 py-4 font-black text-sm uppercase tracking-widest border-4 border-black hover:bg-white hover:text-black transition-all duration-300"
          >
            <Calendar className="inline w-4 h-4 mr-3" />
            LET'S TALK
            <ArrowRight className="inline w-4 h-4 ml-3" />
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-black"></div>
    </section>
  )
}
