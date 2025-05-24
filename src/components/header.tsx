"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { name: "HOME", href: "#home" },
  { name: "SERVICE", href: "#service" },
  { name: "WHO WE ARE", href: "#who-we-are" },
  { name: "WHAT WE DO", href: "#what-we-do" },
  { name: "CONTACT US", href: "#contact" },
  { name: "INSIGHT", href: "#insight" },
  { name: "PODCASTS", href: "#podcasts" },
  { name: "RESOURCES", href: "#resources" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop & Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b-8 border-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <a href="#home" className="block">
                <div className="font-black text-lg sm:text-xl lg:text-2xl text-black uppercase tracking-tight leading-none">
                  INFLUENCER
                  <div className="text-xs sm:text-sm font-bold">OF SARGODHA</div>
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  className="relative group text-xs xl:text-sm font-black text-black uppercase tracking-wide hover:text-gray-700 transition-colors"
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="hidden lg:block"
            >
              <motion.a
                href="https://calendly.com/podcastwithyasiriqbal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-black text-white px-6 py-3 font-black text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                SCHEDULE MEETING
              </motion.a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-black text-white lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              <nav className="space-y-1">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 text-lg font-black uppercase tracking-wide hover:bg-gray-800 transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigationItems.length * 0.05 + 0.1 }}
                  className="pt-4"
                >
                  <a
                    href="https://calendly.com/podcastwithyasiriqbal"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block bg-white text-black py-4 px-4 font-black text-lg uppercase tracking-wide text-center hover:bg-gray-100 transition-colors"
                  >
                    SCHEDULE MEETING
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
