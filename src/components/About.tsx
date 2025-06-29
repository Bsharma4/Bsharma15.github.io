import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-stone-700 leading-relaxed">
              I'm passionate about solving real-world problems at the intersection of technology, data, and business. 
              From designing scalable data pipelines to integrating AI-powered insights, I love turning complex 
              information into simple, actionable outcomes that drive growth.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              With a strong foundation in computer science and hands-on experience across data engineering, 
              analytics, and automation, I thrive on building systems that empower smarter decisions and 
              unlock new opportunities.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Whether it's leveraging cloud technologies, machine learning, or process optimization, 
              I'm driven by curiosity, creativity, and a relentless focus on impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: Database,
                title: 'Data Engineering',
                description: 'Building robust, scalable data pipelines and infrastructure'
              },
              {
                icon: Brain,
                title: 'AI & Machine Learning',
                description: 'Developing intelligent solutions with cutting-edge ML techniques'
              },
              {
                icon: TrendingUp,
                title: 'Business Growth',
                description: 'Translating data insights into strategic business outcomes'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-xl border border-stone-200 rounded-2xl hover:bg-white/95 transition-all shadow-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">{item.title}</h3>
                  <p className="text-stone-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;