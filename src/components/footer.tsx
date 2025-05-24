"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  ExternalLink,
  Zap,
  Heart,
  Clock,
  Send,
  Mic,
  Users,
  TrendingUp,
  Award,
} from "lucide-react"

const footerSections = [
  {
    title: "SERVICES",
    links: [
      { name: "PODCAST PRODUCTION", href: "#services" },
      { name: "BRAND PROMOTIONS", href: "#services" },
      { name: "PROFILE INTERVIEWS", href: "#services" },
      { name: "PROFILE BUILDING", href: "#services" },
      { name: "PRODUCT REVIEWS", href: "#services" },
      { name: "PERSONAL BRANDING", href: "#services" },
      { name: "CONTENT CREATION", href: "#services" },
      { name: "GROWTH STRATEGY", href: "#services" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { name: "WHO WE ARE", href: "#who-we-are" },
      { name: "WHAT WE DO", href: "#what-we-do" },
      { name: "OUR TEAM", href: "#who-we-are" },
      { name: "CAREERS", href: "#contact" },
      { name: "PRESS KIT", href: "#insights" },
      { name: "BRAND GUIDELINES", href: "#contact" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { name: "INSIGHTS", href: "#insights" },
      { name: "PODCASTS", href: "#podcasts" },
      { name: "CASE STUDIES", href: "#insights" },
      { name: "INDUSTRY REPORTS", href: "#insights" },
      { name: "BLOG", href: "#insights" },
      { name: "DOWNLOADS", href: "#insights" },
    ],
  },
  {
    title: "CONNECT",
    links: [
      { name: "CONTACT US", href: "#contact" },
      { name: "SCHEDULE MEETING", href: "https://calendly.com/podcastwithyasiriqbal", external: true },
      { name: "PARTNERSHIPS", href: "#contact" },
      { name: "MEDIA INQUIRIES", href: "#contact" },
      { name: "SUPPORT", href: "#contact" },
    ],
  },
]

const socialLinks = [
  { icon: Youtube, name: "YOUTUBE", url: "#", color: "bg-red-600" },
  { icon: Linkedin, name: "LINKEDIN", url: "#", color: "bg-blue-600" },
  { icon: Instagram, name: "INSTAGRAM", url: "#", color: "bg-pink-600" },
  { icon: Twitter, name: "TWITTER", url: "#", color: "bg-blue-400" },
]

const achievements = [
  { icon: Users, label: "CLIENTS", value: "500+" },
  { icon: Mic, label: "PODCASTS", value: "50+" },
  { icon: TrendingUp, label: "GROWTH", value: "300%" },
  { icon: Award, label: "AWARDS", value: "15+" },
]

const quickActions = [
  { icon: Calendar, label: "BOOK MEETING", action: "schedule" },
  { icon: Mail, label: "SEND EMAIL", action: "email" },
  { icon: Phone, label: "CALL NOW", action: "call" },
  { icon: Send, label: "QUICK MESSAGE", action: "message" },
]

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [hoveredSection, setHoveredSection] = useState<number | null>(null)
  const [showQuickMessage, setShowQuickMessage] = useState(false)
  const [quickMessage, setQuickMessage] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleQuickAction = (action: string) => {
    switch (action) {
      case "schedule":
        window.open("https://calendly.com/podcastwithyasiriqbal", "_blank")
        break
      case "email":
        window.location.href = "mailto:hello@influencerofsargodha.com"
        break
      case "call":
        window.location.href = "tel:+923001234567"
        break
      case "message":
        setShowQuickMessage(true)
        break
    }
  }

  const sendQuickMessage = () => {
    // Simulate sending message
    console.log("Quick message:", quickMessage)
    setQuickMessage("")
    setShowQuickMessage(false)
  }

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-24 lg:grid-cols-32 h-full">
          {Array.from({ length: 768 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.001, duration: 2 }}
              className="border border-white"
            />
          ))}
        </div>
      </div>

      {/* Top Stripe */}
      <div className="h-4 bg-white"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="inline-block bg-white text-black px-4 py-2 font-black text-xs uppercase tracking-widest transform -rotate-1 border-4 border-white mb-6">
              <Zap className="inline w-3 h-3 mr-2" />
              LET'S CONNECT
            </div>

            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              READY TO
              <br />
              <span className="bg-white text-black px-3 py-1 transform rotate-1 inline-block">TRANSFORM</span>
              <br />
              YOUR INFLUENCE?
            </h2>

            <p className="text-lg lg:text-xl font-bold max-w-3xl mx-auto opacity-90 leading-relaxed">
              Join hundreds of successful brands and personalities who trust us to amplify their digital presence.
            </p>
          </motion.div>

          {/* Quick Actions Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 lg:mb-16"
          >
            {quickActions.map((action) => {
              const IconComponent = action.icon
              return (
                <motion.button
                  key={action.label}
                  whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuickAction(action.action)}
                  className="bg-white text-black p-4 lg:p-6 border-4 border-white font-black text-sm uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 flex flex-col items-center space-y-2"
                >
                  <IconComponent className="w-6 h-6 lg:w-8 lg:h-8" strokeWidth={3} />
                  <span>{action.label}</span>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Main Footer Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Company Info - 4 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-6"
            >
              {/* Logo */}
              <div className="space-y-4">
                <div className="font-black text-2xl lg:text-3xl leading-none">
                  <div className="bg-white text-black px-3 py-1 inline-block transform -rotate-2">INFLUENCER</div>
                  <div className="text-lg font-bold mt-1 tracking-[0.3em]">OF SARGODHA</div>
                </div>
                <p className="font-bold opacity-80 leading-relaxed">
                  Pakistan's premier influencer marketing agency, connecting brands with authentic voices and creating
                  viral content that drives real results.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 flex-shrink-0" strokeWidth={3} />
                  <span className="font-bold text-sm">SARGODHA, PUNJAB, PAKISTAN</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0" strokeWidth={3} />
                  <span className="font-bold text-sm">HELLO@INFLUENCEROFSARGODHA.COM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0" strokeWidth={3} />
                  <span className="font-bold text-sm">+92 300 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 flex-shrink-0" strokeWidth={3} />
                  <span className="font-bold text-sm">
                    {currentTime.toLocaleTimeString("en-US", {
                      timeZone: "Asia/Karachi",
                      hour12: true,
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    PKT
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement) => {
                  const IconComponent = achievement.icon
                  return (
                    <motion.div
                      key={achievement.label}
                      whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                      className="bg-white text-black p-3 border-4 border-white text-center"
                    >
                      <IconComponent className="w-5 h-5 mx-auto mb-1" strokeWidth={3} />
                      <div className="font-black text-lg">{achievement.value}</div>
                      <div className="text-xs font-bold uppercase tracking-wider">{achievement.label}</div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Footer Links - 8 columns */}
            <div className="lg:col-span-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredSection(sectionIndex)}
                  onHoverEnd={() => setHoveredSection(null)}
                  className={`space-y-4 transition-all duration-300 ${
                    hoveredSection === sectionIndex ? "transform rotate-1" : ""
                  }`}
                >
                  <h3 className="font-black text-lg uppercase tracking-tight border-b-2 border-white pb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <motion.li key={link.name} whileHover={{ x: 5, scale: 1.05 }} className="group">
                        <a
                          href={link.href}
                          target={link.external ? "_blank" : "_self"}
                          rel={link.external ? "noopener noreferrer" : ""}
                          className="font-bold text-sm opacity-80 hover:opacity-100 transition-opacity flex items-center space-x-2 group-hover:text-gray-300"
                        >
                          <span>{link.name}</span>
                          {link.external && <ExternalLink className="w-3 h-3" />}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t-4 border-white pt-8 mb-8"
          >
            <div className="text-center mb-8">
              <h3 className="font-black text-2xl lg:text-3xl uppercase tracking-tight mb-4">FOLLOW OUR JOURNEY</h3>
              <p className="font-bold opacity-80">
                Stay connected for the latest updates and behind-the-scenes content
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-black p-4 lg:p-6 border-4 border-white hover:bg-gray-100 transition-all duration-300 flex flex-col items-center space-y-2 min-w-[120px]"
                  >
                    <IconComponent className="w-6 h-6 lg:w-8 lg:h-8" strokeWidth={3} />
                    <span className="font-black text-xs uppercase tracking-wider">{social.name}</span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white text-black p-6 lg:p-8 border-8 border-white mb-8"
          >
            <div className="text-center mb-6">
              <h3 className="font-black text-xl lg:text-2xl uppercase tracking-tight mb-2">STAY IN THE LOOP</h3>
              <p className="font-bold opacity-80">Get weekly insights, case studies, and industry updates</p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="YOUR@EMAIL.COM"
                  className="flex-1 bg-white text-black p-4 border-4 border-black border-r-0 font-bold focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-6 py-4 border-4 border-black font-black text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors"
                >
                  SUBSCRIBE
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-4 text-sm font-bold opacity-80">
                <span>© 2024 INFLUENCER OF SARGODHA</span>
                <span>•</span>
                <span>ALL RIGHTS RESERVED</span>
                <span>•</span>
                <span>MADE WITH</span>
                <Heart className="w-4 h-4 fill-current text-red-500" />
                <span>IN SARGODHA</span>
              </div>

              <div className="flex items-center space-x-6">
                <a href="#" className="text-sm font-bold opacity-80 hover:opacity-100 transition-opacity">
                  PRIVACY POLICY
                </a>
                <a href="#" className="text-sm font-bold opacity-80 hover:opacity-100 transition-opacity">
                  TERMS OF SERVICE
                </a>
                <a href="#" className="text-sm font-bold opacity-80 hover:opacity-100 transition-opacity">
                  SITEMAP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-white text-black p-4 border-4 border-black font-black z-50 hover:bg-gray-100 transition-colors"
          >
            <ArrowUp className="w-6 h-6" strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Quick Message Modal */}
      <AnimatePresence>
        {showQuickMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setShowQuickMessage(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-black p-8 border-8 border-black max-w-md w-full"
            >
              <h3 className="font-black text-xl uppercase tracking-tight mb-4">QUICK MESSAGE</h3>
              <textarea
                value={quickMessage}
                onChange={(e) => setQuickMessage(e.target.value)}
                placeholder="TYPE YOUR MESSAGE HERE..."
                className="w-full bg-white text-black p-4 border-4 border-black font-bold focus:outline-none resize-none"
                rows={4}
              />
              <div className="flex space-x-4 mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={sendQuickMessage}
                  className="flex-1 bg-black text-white p-3 font-black text-sm uppercase tracking-widest border-4 border-black"
                >
                  SEND MESSAGE
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setShowQuickMessage(false)}
                  className="bg-white text-black p-3 font-black text-sm uppercase tracking-widest border-4 border-black"
                >
                  CANCEL
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Stripe */}
      <div className="h-4 bg-white"></div>
    </footer>
  )
}
