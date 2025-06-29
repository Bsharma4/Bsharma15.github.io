import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, BarChart3, Brain, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages & Tools',
      skills: ['Python', 'SQL', 'C++', 'HTML/CSS'],
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      skills: ['Snowflake', 'DBT', 'PostgreSQL', 'GitHub', 'SQL Server'],
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      skills: ['AWS (S3, IAM, EC2)', 'Azure'],
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: BarChart3,
      title: 'Visualization',
      skills: ['Power BI', 'Tableau', 'Qlik'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'AI & ML',
      skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'NLP', 'Deep Learning (CNN, RNN)'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Settings,
      title: 'Other',
      skills: ['Microsoft Dynamics 360', 'Zoho CRM', 'Agile', 'REST APIs', 'Public Speaking'],
      color: 'from-cyan-400 to-teal-500'
    }
  ];

  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Skills</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building data-driven solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-stone-50 to-amber-50 border border-stone-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                <category.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-2xl font-semibold text-stone-800 mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
                    <span className="text-stone-700">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;