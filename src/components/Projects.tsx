import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Car, MessageSquare, FileText, Globe, Heart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Car,
      title: 'Building a Data Pipeline for Car Price Prediction using Dagster',
      description: 'Data pipeline for car price prediction using Python, Dagster, Pandas, Scikit-learn, and PostgreSQL. Utilizes scalable workflow orchestration, data manipulation, machine learning, and data storage.',
      technologies: ['Dagster', 'Python', 'Scikit-learn', 'Pandas', 'PostgreSQL', 'Machine Learning'],
      color: 'from-amber-400 to-orange-500',
      websiteLink: '#',
      githubLink: '#'
    },
    {
      icon: FileText,
      title: 'Healthcare Data JSON to Dataframe & CSV',
      description: 'Preprocesses healthcare data in JSON format, converting it into a Pandas DataFrame and CSV files for analysis and reporting.',
      technologies: ['Python', 'JSON', 'Pandas', 'Data Processing', 'Healthcare', 'CSV'],
      color: 'from-orange-400 to-red-500',
      githubLink: '#'
    },
    {
      icon: Globe,
      title: 'Student University Website & Database Implementation',
      description: 'Uses MySQL for the database schema, as well as data integration frameworks and data visualization tools for search options and data visualizations.',
      technologies: ['MySQL', 'HTML/CSS', 'JavaScript', 'PHP', 'Database Design', 'Web Development'],
      color: 'from-blue-400 to-indigo-500',
      websiteLink: '#',
      githubLink: '#'
    },
    {
      icon: MessageSquare,
      title: 'Sentiment Analysis on Welsh Language Twitter Data',
      description: 'Performs sentiment analysis on Welsh Language Twitter data using Python. Utilizes NLP libraries, Naive Bayes algorithm, and Word Embedding model.',
      technologies: ['NLP', 'Python', 'Twitter API', 'Naive Bayes', 'Word Embedding', 'Sentiment Analysis'],
      color: 'from-green-400 to-emerald-500',
      githubLink: '#'
    },
    {
      icon: Heart,
      title: 'Facial Expression Recognition',
      description: 'Using image processing and machine learning algorithms with data obtained from Kaggle for accurate facial expression detection and classification.',
      technologies: ['Computer Vision', 'Machine Learning', 'Python', 'Image Processing', 'Kaggle', 'Deep Learning'],
      color: 'from-purple-400 to-pink-500',
      mediumLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Projects</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Showcasing innovative solutions in data engineering, AI, and web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-stone-50 to-amber-50 border border-stone-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center`}>
                  <project.icon className="text-white" size={28} />
                </div>
                <div className="flex space-x-3">
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 hover:text-stone-800 hover:bg-stone-200 transition-all"
                    >
                      <Github size={18} />
                    </motion.a>
                  )}
                  {project.websiteLink && (
                    <motion.a
                      href={project.websiteLink}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 hover:text-stone-800 hover:bg-stone-200 transition-all"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                  {project.mediumLink && (
                    <motion.a
                      href={project.mediumLink}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 hover:text-stone-800 hover:bg-stone-200 transition-all"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-stone-800 mb-4 group-hover:text-amber-700 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-stone-700 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm border border-stone-200 hover:border-stone-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/brijesh"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-all"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;