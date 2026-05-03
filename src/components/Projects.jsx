import { motion } from 'framer-motion';
import { Code2, Monitor, Layers } from 'lucide-react';

import { projectsData as projects } from '../data/content';

export default function Projects() {
  return (
    <section className="py-12 relative bg-slate-50 dark:bg-slate-950" id="projects">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Outfit'] mb-4 text-slate-900 dark:text-white">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.4, ease: "easeOut" }}
              className="glass-card p-6 group hover:-translate-y-1 hover:shadow-cyan-500/10 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative background glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-all duration-500" />
              
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700/50">
                  {project.icon}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-cyan-50 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 rounded-full border border-cyan-100 dark:border-cyan-800/50">
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200/60 dark:border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
