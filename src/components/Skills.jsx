import { motion } from 'framer-motion';
import { Terminal, Database, Cloud, Blocks, Layout, Wrench } from 'lucide-react';

import { skillsData } from '../data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, ease: 'easeOut' }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.4, ease: "easeOut" } }
};

export default function Skills() {
  return (
    <section className="py-12 relative bg-slate-100/50 dark:bg-slate-900/50" id="skills">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Outfit'] mb-4 text-slate-900 dark:text-white">Technical Arsenal</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 h-full transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{skillGroup.category}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sIdx) => (
                  <li 
                    key={sIdx}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 text-sm rounded-lg border border-slate-200 dark:border-slate-600/50 font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
