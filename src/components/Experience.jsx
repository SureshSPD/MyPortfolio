import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-12 relative" id="experience">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Outfit'] mb-4 text-slate-900 dark:text-white">Professional Experience</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-cyan-200 dark:bg-cyan-800/50" />
          
          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-px bg-cyan-200 dark:bg-cyan-800/50" />

          {/* Timeline Item */}
          <div className="relative md:flex md:justify-between md:items-center w-full mb-8">
            <div className="md:w-5/12 mb-4 md:mb-0 md:text-right pr-6 lg:pr-10 relative">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="glass-card p-6 border-l-4 border-l-cyan-500 md:border-l border-r-0 md:border-r-4 md:border-r-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-shadow duration-300"
              >
                <div className="flex items-center md:justify-end gap-2 text-cyan-600 dark:text-cyan-400 font-medium mb-2 text-sm">
                  <Calendar size={16} />
                  <span>Jul 2022 – Present</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Mavenberg Innovations India</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium flex items-center md:justify-end gap-2">
                  <Briefcase size={16} className="hidden md:inline" /> 
                  <span className="md:hidden"><Briefcase size={14} className="inline mr-1"/></span>
                  Consultant | Consultant Trainee | Intern
                </p>
              </motion.div>
            </div>

            {/* Icon Center */}
            <div className="absolute left-[-29px] md:left-[50%] md:-translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-cyan-100 dark:border-cyan-900 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse" />
            </div>

            <div className="md:w-5/12 pl-0 md:pl-6 lg:pl-10 relative">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="prose prose-sm dark:prose-invert text-slate-600 dark:text-slate-400"
              >
                <ul className="space-y-2 mt-4 md:mt-0 font-light">
                  <li>Spearheaded end-to-end creation of the License Usage Insights platform for Teamcenter.</li>
                  <li>Built interactive dashboards using React.js and Recharts for real-time license tracking and denial analytics.</li>
                  <li>Engineered secure backend services using Express.js and Flask to power RESTful APIs.</li>
                  <li>Architected MongoDB schemas ensuring scalability and high-performance data access.</li>
                  <li>Configured Azure Blob Storage for secure document lifecycle management.</li>
                  <li>Automated CI/CD deployments using Azure DevOps pipelines.</li>
                  <li>Optimized TCXML data transformation workflows for analytics visualization.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
