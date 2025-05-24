"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  Building,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Globe,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react"

const contactMethods = [
  {
    icon: Calendar,
    title: "BOOK A MEETING",
    description: "Schedule a free 30-minute strategy call",
    action: "SCHEDULE NOW",
    link: "https://calendly.com/podcastwithyasiriqbal",
    primary: true,
  },
  {
    icon: Mail,
    title: "EMAIL US",
    description: "Get a response within 24 hours",
    action: "SEND EMAIL",
    link: "mailto:hello@influencerofsargodha.com",
    primary: false,
  },
  {
    icon: Phone,
    title: "CALL DIRECTLY",
    description: "Speak with our team immediately",
    action: "CALL NOW",
    link: "tel:+923001234567",
    primary: false,
  },
]

const officeInfo = [
  { icon: MapPin, label: "LOCATION", value: "SARGODHA, PUNJAB, PAKISTAN" },
  { icon: Clock, label: "HOURS", value: "MON-FRI 9AM-6PM PKT" },
  { icon: Globe, label: "TIMEZONE", value: "PAKISTAN STANDARD TIME" },
]

const socialLinks = [
  { icon: Linkedin, label: "LINKEDIN", link: "#" },
  { icon: Instagram, label: "INSTAGRAM", link: "#" },
  { icon: Twitter, label: "TWITTER", link: "#" },
]

const services = [
  "Podcast Production",
  "Brand Promotions",
  "Profile Interviews",
  "Profile Building",
  "Product Reviews",
  "Personal Branding",
  "Content Creation",
  "Growth Strategy",
]

const budgetRanges = ["$500 - $2K", "$2K - $5K", "$5K - $10K", "$10K - $25K", "$25K+"]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="bg-white text-black py-16 lg:py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-black text-white p-12 border-8 border-black"
          >
            <CheckCircle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-4">MESSAGE SENT!</h2>
            <p className="text-lg font-bold mb-8">We'll get back to you within 24 hours.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsSubmitted(false)}
              className="bg-white text-black px-8 py-4 font-black text-sm uppercase tracking-widest border-4 border-white"
            >
              SEND ANOTHER MESSAGE
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white text-black py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid grid-cols-16 lg:grid-cols-24 h-full">
          {Array.from({ length: 384 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.001 }}
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
            <MessageSquare className="inline w-3 h-3 mr-2" />
            CONTACT US
          </div>

          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            LET'S CREATE
            <br />
            <span className="bg-black text-white px-3 py-1 transform rotate-1 inline-block">SOMETHING</span>
            <br />
            EXTRAORDINARY
          </h2>

          <p className="text-lg lg:text-xl font-bold max-w-3xl mx-auto text-gray-800 leading-relaxed">
            Ready to transform your digital presence? Get in touch and let's discuss how we can help you achieve your
            goals.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16 lg:mb-20"
        >
          {contactMethods.map((method) => {
            const IconComponent = method.icon
            return (
              <motion.a
                key={method.title}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : "_self"}
                rel={method.link.startsWith("http") ? "noopener noreferrer" : ""}
                whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                whileTap={{ scale: 0.95 }}
                className={`block p-6 lg:p-8 border-4 border-black transition-all duration-300 ${
                  method.primary
                    ? "bg-black text-white transform rotate-1 hover:rotate-0"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                <IconComponent className="w-10 h-10 lg:w-12 lg:h-12 mb-4" strokeWidth={3} />
                <h3 className="font-black text-xl lg:text-2xl uppercase tracking-tight mb-2">{method.title}</h3>
                <p className="font-bold opacity-80 mb-4">{method.description}</p>
                <div className="flex items-center space-x-2 font-black text-sm uppercase tracking-wider">
                  <span>{method.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Form - 8 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="bg-black text-white p-6 lg:p-8 border-8 border-black">
              <h3 className="font-black text-2xl lg:text-3xl uppercase tracking-tight mb-6">SEND US A MESSAGE</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-black text-sm uppercase tracking-wider mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white text-black p-4 border-4 border-white font-bold focus:outline-none focus:border-gray-300 transition-colors"
                      placeholder="ENTER YOUR NAME"
                    />
                  </div>
                  <div>
                    <label className="block font-black text-sm uppercase tracking-wider mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white text-black p-4 border-4 border-white font-bold focus:outline-none focus:border-gray-300 transition-colors"
                      placeholder="YOUR@EMAIL.COM"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block font-black text-sm uppercase tracking-wider mb-2">
                    <Building className="inline w-4 h-4 mr-2" />
                    COMPANY NAME
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-white text-black p-4 border-4 border-white font-bold focus:outline-none focus:border-gray-300 transition-colors"
                    placeholder="YOUR COMPANY"
                  />
                </div>

                {/* Service and Budget Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-black text-sm uppercase tracking-wider mb-2">SERVICE NEEDED</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-white text-black p-4 border-4 border-white font-bold focus:outline-none focus:border-gray-300 transition-colors"
                    >
                      <option value="">SELECT SERVICE</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-black text-sm uppercase tracking-wider mb-2">BUDGET RANGE</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-white text-black p-4 border-4 border-white font-bold focus:outline-none focus:border-gray-300 transition-colors"
                    >
                      <option value="">SELECT BUDGET</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-black text-sm uppercase tracking-wider mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-2" />
                    PROJECT DETAILS *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-white text-black p-4 border-4 border-white font-bold focus:outline-none focus:border-gray-300 transition-colors resize-none"
                    placeholder="TELL US ABOUT YOUR PROJECT, GOALS, AND TIMELINE..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-black p-4 font-black text-sm uppercase tracking-widest border-4 border-white hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-3" />
                      SENDING MESSAGE...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-3" />
                      SEND MESSAGE
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info - 4 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Office Info */}
            <div className="bg-white border-4 border-black p-6">
              <h3 className="font-black text-xl uppercase tracking-tight mb-6">GET IN TOUCH</h3>
              <div className="space-y-4">
                {officeInfo.map((info) => {
                  const IconComponent = info.icon
                  return (
                    <div key={info.label} className="flex items-start space-x-3">
                      <IconComponent className="w-5 h-5 flex-shrink-0 mt-1" strokeWidth={3} />
                      <div>
                        <div className="font-black text-sm uppercase tracking-wider">{info.label}</div>
                        <div className="font-bold text-sm">{info.value}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-black text-white border-4 border-black p-6">
              <h3 className="font-black text-xl uppercase tracking-tight mb-6">FOLLOW US</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      whileHover={{ x: 10, scale: 1.05 }}
                      className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                    >
                      <IconComponent className="w-5 h-5" strokeWidth={3} />
                      <span className="font-bold text-sm">{social.label}</span>
                      <ArrowRight className="w-4 h-4 ml-auto" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white border-4 border-black p-6">
              <h3 className="font-black text-xl uppercase tracking-tight mb-4">QUICK RESPONSE</h3>
              <p className="font-bold text-sm mb-4 leading-tight">
                Need immediate assistance? We typically respond to all inquiries within 2-4 hours during business hours.
              </p>
              <motion.a
                href="https://calendly.com/podcastwithyasiriqbal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="block bg-black text-white p-3 font-black text-xs uppercase tracking-widest text-center border-4 border-black"
              >
                <Calendar className="inline w-3 h-3 mr-2" />
                BOOK URGENT CALL
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-black"></div>
    </section>
  )
}
