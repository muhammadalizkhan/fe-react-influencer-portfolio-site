"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  TrendingUp,
  BookOpen,
  ArrowRight,
  Eye,
  Share2,
  Download,
  Mic,
  Video,
  FileText,
  Lightbulb,
  BarChart3,
  Target,
} from "lucide-react"

const categories = [
  { id: "all", name: "ALL INSIGHTS", icon: Lightbulb },
  { id: "trends", name: "INDUSTRY TRENDS", icon: TrendingUp },
  { id: "strategy", name: "STRATEGY GUIDES", icon: Target },
  { id: "case-studies", name: "CASE STUDIES", icon: BarChart3 },
  { id: "podcasts", name: "PODCAST EPISODES", icon: Mic },
  { id: "videos", name: "VIDEO CONTENT", icon: Video },
]

const insights = [
  {
    id: 1,
    category: "trends",
    type: "article",
    title: "THE FUTURE OF INFLUENCER MARKETING IN PAKISTAN",
    excerpt: "How local influencers are reshaping digital marketing strategies and what brands need to know for 2024.",
    content: "Deep dive into the evolving landscape of Pakistani influencer marketing...",
    author: "YASIR IQBAL",
    date: "2024-01-15",
    readTime: "8 MIN READ",
    views: "2.4K",
    tags: ["Influencer Marketing", "Pakistan", "Trends", "2024"],
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    category: "case-studies",
    type: "case-study",
    title: "HOW WE GENERATED 2M+ VIEWS FOR A TECH STARTUP",
    excerpt:
      "Complete breakdown of our viral campaign strategy that transformed a unknown startup into a household name.",
    content: "Step-by-step analysis of our most successful campaign...",
    author: "CREATIVE TEAM",
    date: "2024-01-10",
    readTime: "12 MIN READ",
    views: "3.8K",
    tags: ["Case Study", "Viral Marketing", "Tech", "Growth"],
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    category: "podcasts",
    type: "podcast",
    title: "BUILDING AUTHENTIC BRAND CONNECTIONS",
    excerpt:
      "Interview with leading brand strategist about creating genuine relationships between brands and audiences.",
    content: "45-minute deep conversation about authentic branding...",
    author: "PODCAST TEAM",
    date: "2024-01-08",
    readTime: "45 MIN LISTEN",
    views: "1.9K",
    tags: ["Podcast", "Branding", "Strategy", "Interview"],
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    category: "strategy",
    type: "guide",
    title: "COMPLETE GUIDE TO PODCAST MONETIZATION",
    excerpt: "Everything you need to know about turning your podcast into a profitable business venture.",
    content: "Comprehensive guide covering all monetization strategies...",
    author: "STRATEGY TEAM",
    date: "2024-01-05",
    readTime: "15 MIN READ",
    views: "4.2K",
    tags: ["Guide", "Podcast", "Monetization", "Business"],
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    category: "videos",
    type: "video",
    title: "BEHIND THE SCENES: CELEBRITY PODCAST PRODUCTION",
    excerpt: "Exclusive look at how we produce high-quality podcast content with famous personalities.",
    content: "20-minute behind-the-scenes documentary...",
    author: "VIDEO TEAM",
    date: "2024-01-03",
    readTime: "20 MIN WATCH",
    views: "5.1K",
    tags: ["Video", "BTS", "Production", "Celebrity"],
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    category: "trends",
    type: "article",
    title: "SOCIAL MEDIA ALGORITHM CHANGES: WHAT MARKETERS NEED TO KNOW",
    excerpt: "Latest updates from major platforms and how to adapt your content strategy for maximum reach.",
    content: "Analysis of recent algorithm changes across platforms...",
    author: "RESEARCH TEAM",
    date: "2024-01-01",
    readTime: "10 MIN READ",
    views: "3.3K",
    tags: ["Social Media", "Algorithms", "Strategy", "Updates"],
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
  },
]

const stats = [
  { label: "INSIGHTS PUBLISHED", value: "150+" },
  { label: "TOTAL VIEWS", value: "500K+" },
  { label: "INDUSTRY REPORTS", value: "25+" },
  { label: "PODCAST EPISODES", value: "80+" },
]

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedInsight, setSelectedInsight] = useState<(typeof insights)[0] | null>(null)

  const filteredInsights =
    selectedCategory === "all" ? insights : insights.filter((insight) => insight.category === selectedCategory)

  const featuredInsights = insights.filter((insight) => insight.featured)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "podcast":
        return Mic
      case "video":
        return Video
      case "case-study":
        return BarChart3
      case "guide":
        return BookOpen
      default:
        return FileText
    }
  }

  return (
    <section className="bg-white text-black py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid grid-cols-18 lg:grid-cols-26 h-full">
          {Array.from({ length: 468 }).map((_, i) => (
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
            <Lightbulb className="inline w-3 h-3 mr-2" />
            INSIGHTS
          </div>

          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            INDUSTRY
            <br />
            <span className="bg-black text-white px-3 py-1 transform rotate-1 inline-block">INSIGHTS</span>
            <br />& KNOWLEDGE
          </h2>

          <p className="text-lg lg:text-xl font-bold max-w-4xl mx-auto text-gray-800 leading-relaxed">
            Stay ahead of the curve with our latest research, case studies, and industry analysis. Learn from our
            experience and apply proven strategies to your own projects.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 lg:mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
              className="bg-black text-white p-4 lg:p-6 border-4 border-black text-center"
            >
              <div className="font-black text-2xl lg:text-3xl mb-1">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05, rotate: Math.random() * 2 - 1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-3 border-4 border-black font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? "bg-black text-white transform rotate-1"
                      : "bg-white text-black hover:bg-black hover:text-white"
                  }`}
                >
                  <IconComponent className="w-4 h-4" strokeWidth={3} />
                  <span>{category.name}</span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Featured Insights */}
        {selectedCategory === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight mb-8">FEATURED INSIGHTS</h3>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {featuredInsights.map((insight, index) => {
                const TypeIcon = getTypeIcon(insight.type)
                return (
                  <motion.div
                    key={insight.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, rotate: Math.random() * 1 - 0.5 }}
                    onClick={() => setSelectedInsight(insight)}
                    className="bg-black text-white p-6 lg:p-8 border-8 border-black cursor-pointer group"
                  >
                    <div className="aspect-video bg-gray-800 border-4 border-white mb-6 flex items-center justify-center">
                      <TypeIcon className="w-12 h-12 text-gray-400" />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <TypeIcon className="w-4 h-4" strokeWidth={3} />
                        <span className="text-xs font-black uppercase tracking-wider opacity-80">
                          {insight.type.replace("-", " ")}
                        </span>
                      </div>

                      <h4 className="font-black text-xl lg:text-2xl uppercase tracking-tight leading-tight group-hover:text-gray-300 transition-colors">
                        {insight.title}
                      </h4>

                      <p className="font-bold opacity-80 leading-tight">{insight.excerpt}</p>

                      <div className="flex items-center justify-between text-xs font-bold opacity-60">
                        <div className="flex items-center space-x-4">
                          <span>{insight.author}</span>
                          <span>{insight.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye className="w-3 h-3" />
                          <span>{insight.views}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {insight.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="bg-white text-black px-2 py-1 text-xs font-black uppercase">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* All Insights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight mb-8">
            {selectedCategory === "all" ? "ALL INSIGHTS" : categories.find((c) => c.id === selectedCategory)?.name}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((insight, index) => {
              const TypeIcon = getTypeIcon(insight.type)
              return (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: Math.random() * 2 - 1 }}
                  onClick={() => setSelectedInsight(insight)}
                  className="bg-white border-4 border-black p-6 cursor-pointer hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gray-200 border-2 border-black mb-4 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                    <TypeIcon className="w-8 h-8 text-gray-600 group-hover:text-gray-400" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <TypeIcon className="w-4 h-4" strokeWidth={3} />
                      <span className="text-xs font-black uppercase tracking-wider opacity-60">
                        {insight.type.replace("-", " ")}
                      </span>
                    </div>

                    <h4 className="font-black text-lg uppercase tracking-tight leading-tight">{insight.title}</h4>

                    <p className="text-sm font-bold opacity-80 leading-tight">{insight.excerpt}</p>

                    <div className="flex items-center justify-between text-xs font-bold opacity-60">
                      <span>{insight.readTime}</span>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{insight.views}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider opacity-60">
                        {new Date(insight.date).toLocaleDateString()}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
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
          className="border-t-4 border-black pt-12 lg:pt-16 mt-16 lg:mt-20"
        >
          <div className="text-center">
            <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
              STAY UPDATED
            </h3>
            <p className="text-lg font-bold text-gray-800 max-w-2xl mx-auto mb-8">
              Get the latest insights, case studies, and industry trends delivered to your inbox weekly.
            </p>

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
          </div>
        </motion.div>
      </div>

      {/* Insight Modal */}
      <AnimatePresence>
        {selectedInsight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setSelectedInsight(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-black p-8 border-8 border-black max-w-2xl max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-black text-2xl uppercase tracking-tight">{selectedInsight.title}</h3>
                <button
                  onClick={() => setSelectedInsight(null)}
                  className="bg-black text-white p-2 border-2 border-black hover:bg-gray-900"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm font-bold opacity-60">
                  <span>{selectedInsight.author}</span>
                  <span>{selectedInsight.readTime}</span>
                  <span>{selectedInsight.views} views</span>
                </div>

                <p className="font-bold leading-relaxed">{selectedInsight.content}</p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {selectedInsight.tags.map((tag) => (
                    <span key={tag} className="bg-black text-white px-3 py-1 text-xs font-black uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-black text-white px-6 py-3 font-black text-sm uppercase tracking-widest border-4 border-black flex items-center space-x-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>SHARE</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-black px-6 py-3 font-black text-sm uppercase tracking-widest border-4 border-black flex items-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>DOWNLOAD</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-black"></div>
    </section>
  )
}
