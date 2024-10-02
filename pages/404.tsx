'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    setImageUrl('/api/natur-2000')
  }, [])

  return (
    <div 
      className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900/90"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full space-y-8 text-center relative z-10"
      >
        <div className="space-y-4">
          <motion.h1 
            className="text-8xl font-extrabold text-white"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            404
          </motion.h1>
          <motion.h2 
            className="text-4xl font-bold text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Page Not Found
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Oops! The page you&apos;re looking for seems to have wandered off.
          </motion.p>
        </div>
        <motion.div 
          className="mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-full text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Take Me Home
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Floating particles effect */}
      <Particles />
    </div>
  )
}

function Particles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}