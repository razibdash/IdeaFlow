'use client'

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const Banner = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="blog-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Welcome to <span className="text-primary">IdeaFlow</span>
          </h1>
          <p className="text-lg text-stone-500">
            Discover insightful articles, trending topics, and the latest stories 
            from the world of technology, lifestyle, and culture.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-dPrimary transition"
          >
            Explore Articles
          </motion.button>
        </motion.div>

        {/* Right Side SVG / Image */}
            <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-center md:justify-end"
        >
        <motion.div
            animate={{ y: [0, -15, 0] }} // floating effect
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
            <Image
            src="/images/blogvector.svg"
            alt="Blog illustration"
            width={450}
            height={350}
            className="w-full max-w-md"
            />
        </motion.div>
                </motion.div>

      </div>
    </section>
  )
}

export default Banner
