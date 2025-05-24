"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, ExternalLink, Share2, Mic, Users, Clock, Eye, ThumbsUp, Calendar, ArrowRight, Star } from "lucide-react"

const podcasts = [
  {
    id: 1,
    title: "5 CONSECUTIVE AIR CHIEFS ARE FROM SARGODHA",
    guest: "SQUADRON LEADER (R) TASAWWAR AALAM AWAN",
    description:
      "An exclusive interview with Squadron Leader (R) Tasawwar Aalam Awan discussing the remarkable achievement of Sargodha producing 5 consecutive Air Chiefs of Pakistan Air Force.",
    youtubeId: "28MU563ioOo",
    youtubeUrl: "https://youtu.be/28MU563ioOo?si=3JdwCO9ibqx03Skk",
    duration: "45:32",
    views: "12.5K",
    likes: "892",
    publishDate: "2024-01-15",
    category: "Military & Defense",
    tags: ["Air Force", "Sargodha", "Military", "Leadership"],
    featured: true,
    thumbnail: "/placeholder.svg?height=360&width=640",
  },
  {
    id: 2,
    title: "MALIK SHAFQAT ABBAS AWAN",
    guest: "MNA NA 84 | PAKISTAN TEHREEK INSAF",
    description:
      "In-depth conversation with MNA Malik Shafqat Abbas Awan about politics, governance, and development initiatives in NA-84 constituency.",
    youtubeId: "ziURs-5kfK0",
    youtubeUrl: "https://youtu.be/ziURs-5kfK0?si=158hDpMBEpwkjTPA",
    duration: "38:45",
    views: "8.9K",
    likes: "654",
    publishDate: "2024-01-10",
    category: "Politics & Governance",
    tags: ["Politics", "PTI", "MNA", "Governance"],
    featured: true,
    thumbnail: "/placeholder.svg?height=360&width=640",
  },
  {
    id: 3,
    title: "FAMILY VLOGGING IS OUT OF CONTROL",
    guest: "TAYYAB WAHAND",
    description:
      "Critical discussion about the family vlogging trend, its impact on children's privacy, and the ethics of monetizing family content.",
    youtubeId: "7ot0eGl1aPg",
    youtubeUrl: "https://youtu.be/7ot0eGl1aPg?si=h37vyzFowXqeLJ9B",
    duration: "42:18",
    views: "15.2K",
    likes: "1.1K",
    publishDate: "2024-01-08",
    category: "Digital Culture",
    tags: ["Vlogging", "Family", "Ethics", "Content Creation"],
    featured: false,
    thumbnail: "/placeholder.svg?height=360&width=640",
  },
  {
    id: 4,
    title: "ABDUR REHMAN INTERNATIONAL HOCKEY PLAYER",
    guest: "ABDUR REHMAN",
    description:
      "Inspiring story of international hockey player Abdur Rehman, his journey from Sargodha to representing Pakistan on the global stage.",
    youtubeId: "O96xiKSbpI0",
    youtubeUrl: "https://youtu.be/O96xiKSbpI0?si=JBrzxjBKgPv3L-8o",
    duration: "35:27",
    views: "6.8K",
    likes: "487",
    publishDate: "2024-01-05",
    category: "Sports & Achievement",
    tags: ["Hockey", "Sports", "International", "Achievement"],
    featured: false,
    thumbnail: "/placeholder.svg?height=360&width=640",
  },
  {
    id: 5,
    title: "FOOD VLOGGING SECRETS EXPOSED 2024",
    guest: "AMEER HAMZA JAVED",
    description:
      "Behind-the-scenes look at food vlogging industry with Ameer Hamza Javed, revealing secrets and strategies for successful food content creation.",
    youtubeId: "CapinRU23TM",
    youtubeUrl: "https://youtu.be/CapinRU23TM?si=X1C7pfFLqgxQOr_w",
    duration: "29:14",
    views: "9.3K",
    likes: "723",
    publishDate: "2024-01-03",
    category: "Content Creation",
    tags: ["Food Vlogging", "Content", "Secrets", "2024"],
    featured: false,
    thumbnail: "/placeholder.svg?height=360&width=640",
  },
]

const categories = [
  "ALL EPISODES",
  "FEATURED",
  "POLITICS & GOVERNANCE",
  "MILITARY & DEFENSE",
  "DIGITAL CULTURE",
  "SPORTS & ACHIEVEMENT",
  "CONTENT CREATION",
]

const stats = [
  { label: "TOTAL EPISODES", value: "50+" },
  { label: "TOTAL VIEWS", value: "250K+" },
  { label: "SUBSCRIBERS", value: "15K+" },
  { label: "AVERAGE RATING", value: "4.8/5" },
]

export default function Podcasts() {
  const [selectedCategory, setSelectedCategory] = useState("ALL EPISODES")
  const [selectedPodcast, setSelectedPodcast] = useState<(typeof podcasts)[0] | null>(null)

  const filteredPodcasts =
    selectedCategory === "ALL EPISODES"
      ? podcasts
      : selectedCategory === "FEATURED"
        ? podcasts.filter((p) => p.featured)
        : podcasts.filter((p) => p.category.toUpperCase() === selectedCategory)

  const featuredPodcasts = podcasts.filter((p) => p.featured)

  return (
    <section className="bg-white text-black py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid grid-cols-20 lg:grid-cols-28 h-full">
          {Array.from({ length: 560 }).map((_, i) => (
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
            <Mic className="inline w-3 h-3 mr-2" />
            PODCASTS
          </div>

          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            INFLUENTIAL
            <br />
            <span className="bg-black text-white px-3 py-1 transform rotate-1 inline-block">CONVERSATIONS</span>
            <br />
            WITH LEADERS
          </h2>

          <p className="text-lg lg:text-xl font-bold max-w-4xl mx-auto text-gray-800 leading-relaxed">
            Deep conversations with influential personalities from Sargodha and beyond. From military leaders to
            politicians, athletes to content creators - we bring you the stories that matter.
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

        {/* Featured Episodes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight mb-8">FEATURED EPISODES</h3>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {featuredPodcasts.map((podcast, index) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: Math.random() * 1 - 0.5 }}
                onClick={() => setSelectedPodcast(podcast)}
                className="bg-black text-white p-6 lg:p-8 border-8 border-black cursor-pointer group"
              >
                {/* YouTube Thumbnail */}
                <div className="aspect-video bg-gray-800 border-4 border-white mb-6 relative overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${podcast.youtubeId}/maxresdefault.jpg`}
                    alt={podcast.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-16 h-16 text-white" fill="white" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-black uppercase tracking-wider opacity-80">FEATURED</span>
                  </div>

                  <h4 className="font-black text-xl lg:text-2xl uppercase tracking-tight leading-tight group-hover:text-gray-300 transition-colors">
                    {podcast.title}
                  </h4>

                  <p className="font-bold text-lg opacity-90">{podcast.guest}</p>

                  <p className="font-bold opacity-80 leading-tight">{podcast.description}</p>

                  <div className="flex items-center justify-between text-xs font-bold opacity-60">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{podcast.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{podcast.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-3 h-3" />
                        <span>{podcast.likes}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="bg-white text-black px-3 py-1 text-xs font-black uppercase">
                      {podcast.category}
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05, rotate: Math.random() * 2 - 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-3 border-4 border-black font-black text-xs uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-black text-white transform rotate-1"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* All Episodes Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight mb-8">
            {selectedCategory === "ALL EPISODES" ? "ALL EPISODES" : selectedCategory}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPodcasts.map((podcast, index) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: Math.random() * 2 - 1 }}
                onClick={() => setSelectedPodcast(podcast)}
                className="bg-white border-4 border-black p-6 cursor-pointer hover:bg-black hover:text-white transition-all duration-300 group"
              >
                {/* YouTube Thumbnail */}
                <div className="aspect-video bg-gray-200 border-2 border-black mb-4 relative overflow-hidden group-hover:bg-gray-800 transition-colors">
                  <img
                    src={`https://img.youtube.com/vi/${podcast.youtubeId}/maxresdefault.jpg`}
                    alt={podcast.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" fill="white" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Mic className="w-4 h-4" strokeWidth={3} />
                    <span className="text-xs font-black uppercase tracking-wider opacity-60">PODCAST</span>
                  </div>

                  <h4 className="font-black text-lg uppercase tracking-tight leading-tight">{podcast.title}</h4>

                  <p className="font-bold opacity-80">{podcast.guest}</p>

                  <div className="flex items-center justify-between text-xs font-bold opacity-60">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{podcast.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{podcast.views}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider opacity-60">
                      {new Date(podcast.publishDate).toLocaleDateString()}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t-4 border-black pt-12 lg:pt-16 mt-16 lg:mt-20 text-center"
        >
          <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
            NEVER MISS AN EPISODE
          </h3>
          <p className="text-lg font-bold text-gray-800 max-w-2xl mx-auto mb-8">
            Subscribe to our YouTube channel and get notified when we release new conversations with influential
            personalities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://youtube.com/@influencerofsargodha"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 font-black text-sm uppercase tracking-widest border-4 border-black hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
            >
              <Users className="w-4 h-4 mr-3" />
              SUBSCRIBE ON YOUTUBE
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 font-black text-sm uppercase tracking-widest border-4 border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <Calendar className="w-4 h-4 mr-3" />
              BE A GUEST
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Podcast Modal */}
      <AnimatePresence>
        {selectedPodcast && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setSelectedPodcast(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-black p-6 lg:p-8 border-8 border-black max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-black text-xl lg:text-2xl uppercase tracking-tight">{selectedPodcast.title}</h3>
                <button
                  onClick={() => setSelectedPodcast(null)}
                  className="bg-black text-white p-2 border-2 border-black hover:bg-gray-900 font-black text-lg"
                >
                  ✕
                </button>
              </div>

              {/* YouTube Embed */}
              <div className="aspect-video mb-6 border-4 border-black">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedPodcast.youtubeId}`}
                  title={selectedPodcast.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-lg uppercase tracking-tight">{selectedPodcast.guest}</h4>
                    <p className="text-sm font-bold opacity-60">{selectedPodcast.category}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm font-bold opacity-60">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedPodcast.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{selectedPodcast.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{selectedPodcast.likes}</span>
                    </div>
                  </div>
                </div>

                <p className="font-bold leading-relaxed">{selectedPodcast.description}</p>

                <div className="flex flex-wrap gap-2">
                  {selectedPodcast.tags.map((tag) => (
                    <span key={tag} className="bg-black text-white px-3 py-1 text-xs font-black uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-6">
                  <motion.a
                    href={selectedPodcast.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="bg-black text-white px-6 py-3 font-black text-sm uppercase tracking-widest border-4 border-black flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>WATCH ON YOUTUBE</span>
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-black px-6 py-3 font-black text-sm uppercase tracking-widest border-4 border-black flex items-center space-x-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>SHARE</span>
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
