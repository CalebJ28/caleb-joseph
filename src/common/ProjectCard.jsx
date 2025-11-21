import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ src, link, h3, p }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="block bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-800"
    >
      <div className="p-6 flex flex-col items-center text-center">
        <img
          className="w-full h-48 object-contain mb-4 rounded-lg bg-slate-50 dark:bg-slate-800 p-2"
          src={src}
          alt={`${h3} logo`}
        />
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{h3}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">{p}</p>
      </div>
    </motion.a>
  );
}

export default ProjectCard;