import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Plane } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: '2× Quarterly Outstanding Performance Award',
      organization: 'Shelter Insurance',
      description: 'Recognized for exceptional performance and contribution to data engineering initiatives',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: Trophy,
      title: 'Winner - SLU International Talent Show',
      organization: 'Saint Louis University',
      description: 'First place winner showcasing technical presentation and public speaking skills',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Plane,
      title: 'All-expenses-paid trip to Dubai',
      organization: 'Team Performance Recognition',
      description: 'Awarded as top team performer for outstanding project delivery and leadership',
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Achievements</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Recognition for excellence and outstanding contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-stone-50 to-amber-50 border border-stone-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 text-center"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                <achievement.icon className="text-white" size={32} />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-stone-800 mb-3">
                {achievement.title}
              </h3>
              
              <div className="text-amber-600 font-medium mb-4">
                {achievement.organization}
              </div>
              
              <p className="text-stone-700 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-br from-stone-50 to-amber-50 border border-stone-200 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <Star className="text-amber-600" size={20} />
              <span className="text-stone-800 font-semibold">Excellence in Performance</span>
            </div>
            <div className="w-px h-6 bg-stone-300" />
            <div className="text-stone-600">
              Consistently delivering outstanding results
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;