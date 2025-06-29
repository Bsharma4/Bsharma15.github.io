import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'MSc in Computer Science',
      school: 'Saint Louis University',
      location: 'USA',
      period: '2021–2023',
      description: 'Advanced coursework in machine learning, data structures, algorithms, and software engineering. Focus on AI and data science applications.',
      gpa: '3.8/4.0'
    },
    {
      degree: 'B.Tech in Computer Science & Engineering',
      school: 'Lovely Professional University',
      location: 'India',
      period: '2014–2018',
      description: 'Comprehensive foundation in computer science fundamentals, programming, database systems, and software development methodologies.',
      gpa: '3.6/4.0'
    }
  ];

  return (
    <section id="education" className="py-32 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Education</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Building a strong foundation in computer science and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-xl border border-stone-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-stone-800 mb-2">
                    {edu.degree}
                  </h3>
                  <div className="text-amber-600 font-medium mb-2">
                    {edu.school}
                  </div>
                  <div className="flex items-center space-x-4 text-stone-600 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-stone-700 mb-4 leading-relaxed">
                {edu.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-stone-600 text-sm">GPA</span>
                <span className="text-amber-600 font-semibold">{edu.gpa}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;