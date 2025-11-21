import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import heroImage from "../../assets/faceicon.png";
import CV from "../../assets/Caleb_Joseph_Resume.pdf";

function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Caleb <br className="hidden md:block" />
            <span className="text-emerald-600 dark:text-emerald-400">Joseph</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
            Computer Engineer
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0">
            Passionate about CPU/GPU/SoC architecture, hardware design and
            verification, and systems software development.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/calebj28/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
            >
              <Linkedin size={30} />
            </a>
            <a
              href="https://github.com/Calebj28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
            >
              <Github size={30} />
            </a>
            <a
              href="mailto:caleb.joseph@torontomu.ca"
              className="text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
            >
              <Mail size={30} />
            </a>
          </div>

          <a href={CV} download>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 mx-auto md:mx-0">
              <FileText size={20} />
              Resume
            </button>
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-emerald-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src={heroImage}
              alt="Caleb Joseph"
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
