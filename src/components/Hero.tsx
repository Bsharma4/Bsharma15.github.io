import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-amber-50 to-orange-50">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(217, 119, 6, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(194, 65, 12, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(217, 119, 6, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(217, 119, 6, 0.08) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-20">
        {/* Professional Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-64 h-64 mx-auto">
            {/* Soft glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-orange-400/20 rounded-full blur-3xl scale-125"></div>
            
            {/* Outer ring with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-200 to-amber-300 rounded-full p-1.5 shadow-2xl">
              {/* Inner white ring */}
              <div className="w-full h-full bg-white rounded-full p-3 shadow-inner">
                {/* Image container with enhanced styling */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-stone-100 to-amber-50">
                  <img 
                    src="/IMG_0644.jpg"
                    alt="Brijesh Sharma - Professional Photo"
                    className="w-full h-full object-cover object-center rounded-full 
                             filter brightness-105 contrast-110 saturate-105
                             transform scale-105 hover:scale-110 transition-all duration-500
                             shadow-lg"
                    style={{
                      imageRendering: 'high-quality',
                      filter: 'brightness(1.05) contrast(1.1) saturate(1.05) blur(0px)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      WebkitTransform: 'translateZ(0)',
                      transform: 'translateZ(0)'
                    }}
                  />
                  {/* Subtle overlay for smoothness */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Additional soft shadow */}
            <div className="absolute inset-0 rounded-full shadow-2xl opacity-30"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-stone-800 mb-6 leading-tight"
        >
          Brijesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Sharma</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-stone-700 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Transforming complex data into actionable insights that drive business growth. 
          Passionate about building scalable solutions at the intersection of technology, data, and AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-all inline-flex items-center space-x-2"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.button>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-stone-600 text-stone-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-100 transition-all inline-flex items-center space-x-2"
          >
            <Mail size={20} />
            <span>Contact Me</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-stone-600 text-sm"
        >
          Columbia, MO • Available for opportunities
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-stone-600" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;