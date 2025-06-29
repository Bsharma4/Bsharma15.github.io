import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Download, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Connect</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Ready to discuss your next data project or explore opportunities? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-stone-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'brijeshharrysharma@gmail.com',
                    href: 'mailto:brijeshharrysharma@gmail.com'
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+1-314-583-4684',
                    href: 'tel:+13145834684'
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Columbia, MO',
                    href: '#'
                  },
                  {
                    icon: Linkedin,
                    label: 'LinkedIn',
                    value: 'Connect with me',
                    href: '#'
                  }
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-stone-100 transition-all group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                      <contact.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-stone-600 text-sm">{contact.label}</div>
                      <div className="text-stone-800 font-medium group-hover:text-amber-700 transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-all inline-flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 border-2 border-stone-600 text-stone-700 px-6 py-4 rounded-full text-lg font-medium hover:bg-stone-100 transition-all inline-flex items-center justify-center space-x-2"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-stone-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-600 text-sm mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-stone-50 text-stone-800 px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 text-sm mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-stone-50 text-stone-800 px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-stone-600 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-stone-50 text-stone-800 px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-stone-600 text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full bg-stone-50 text-stone-800 px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label className="block text-stone-600 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-stone-50 text-stone-800 px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-4 rounded-xl text-lg font-medium hover:shadow-lg transition-all inline-flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-stone-200"
        >
          <p className="text-stone-600">
            © 2024 Brijesh Sharma. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;