import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: 'July 2025–Present',
      title: 'Senior Enterprise Data Engineer',
      company: 'Shelter Insurance',
      location: 'Hybrid - Columbia, MO, USA',
      description: 'Lead integration of insurance data from multiple sources into Guidewire platform, managing end-to-end data pipelines and ensuring data accuracy and consistency. Design, implement, and maintain data migration workflows using DBT, Snowflake, PostgreSQL, and GitHub to support Guidewire integration and other insurance systems.',
      technologies: ['DBT', 'Snowflake', 'PostgreSQL', 'Guidewire', 'GitHub']
    },
    {
      period: 'May 2024–June 2025',
      title: 'Enterprise Data Engineer',
      company: 'Shelter Insurance',
      location: 'Hybrid - Columbia, MO, USA',
      description: 'Managed and optimized large-scale data pipelines to support data integration using Snowflake, DBT, Github, AWS S3, IAM, EC2 and Qlik suite. Developed automated ETL processes using Python and SQL, ensuring scalability, reliability, and performance of data workflows.',
      technologies: ['Snowflake', 'DBT', 'Python', 'AWS', 'Qlik', 'Tableau', 'Power BI']
    },
    {
      period: 'Jun 2023–Mar 2024',
      title: 'Data Engineer',
      company: 'NextGen Invent',
      location: 'Syosset, NY, USA',
      description: 'Managed and processed sales data using Microsoft Dynamics 360, Power BI, and SQL to deliver actionable insights. Built data pipelines to extract, transform, and load (ETL) data, ensuring data quality across platforms, management and customers.',
      technologies: ['Microsoft Dynamics 360', 'Power BI', 'SQL', 'ETL']
    },
    {
      period: 'Aug 2021–May 2023',
      title: 'Full time Student - Master\'s in CS',
      company: 'Saint Louis University',
      location: 'Saint Louis, MO, USA',
      description: 'Professional Development through advanced coursework and hands-on projects in data engineering, machine learning, and software development.',
      technologies: ['Python', 'Machine Learning', 'Data Science', 'Research']
    },
    {
      period: 'June 2020–Aug 2021',
      title: 'Inside Sales Specialist – Senior BDE',
      company: 'NextGen Invent',
      location: 'Noida, India',
      description: 'Gathered and managed sales data to support business operations. Crafted business proposals and contracts, contributing to increased revenue.',
      technologies: ['Sales Analytics', 'CRM', 'Business Intelligence']
    },
    {
      period: 'Oct 2019–Mar 2020',
      title: 'Product Specialist – Senior BDE',
      company: 'Lambdatest',
      location: 'Noida, India',
      description: 'Collaborated across departments to enhance data models, optimizing business intelligence tools for enhanced data models and business intelligence tools, increasing data accessibility and supporting data-driven decisions.',
      technologies: ['Business Intelligence', 'Data Models', 'Analytics']
    },
    {
      period: 'Aug 2017–Nov 2019',
      title: 'Inside Sales Specialist – Senior BDE',
      company: 'Jungleworks & Jugnoo',
      location: 'Chandigarh, PB, India',
      description: 'Analyzed customer data, identifying trends and providing solutions tailored to customer needs.',
      technologies: ['Customer Analytics', 'Data Analysis', 'CRM']
    }
  ];

  return (
    <section id="experience" className="py-32 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Experience</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Building data solutions that drive business impact
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 to-orange-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full border-4 border-white hidden md:block" />
                
                <div className="md:ml-20">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white/80 backdrop-blur-xl border border-stone-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-stone-800 mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-amber-600 font-medium mb-2">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end space-y-2">
                        <div className="flex items-center space-x-2 text-stone-600">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-stone-600">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-stone-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm border border-stone-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;