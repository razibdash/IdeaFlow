'use client'

import React from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { FaBlog } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6 md:px-12 lg:px-20">
      <div className="blog-container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & About */}
        <div>
          <h1 className='flex-shrink-0'>
                    <Link href="/" className='text-2xl flex items-center font-semibold text-gray-900 hover:text-primary transition-colors duration-300'>
                    <FaBlog className="text-primary"/>
                    <span className='ml-1 text-primary'>IdeaFlow</span>
                    </Link>
                </h1>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Sharing insightful articles and stories on technology, lifestyle, and culture. 
            Stay updated with the latest trends and knowledge.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-600 hover:text-primary">Home</Link></li>
            <li><Link href="/categories" className="text-gray-600 hover:text-primary">Categories</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-primary">About</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col md:items-end">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-primary hover:text-primary">
              <Facebook size={22} />
            </Link>
            <Link href="#" className="text-primary hover:text-primary">
              <Twitter size={22} />
            </Link>
            <Link href="#" className="text-primary hover:text-primary">
              <Instagram size={22} />
            </Link>
            <Link href="#" className="text-primary hover:text-primary">
              <Linkedin size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
