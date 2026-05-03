import { motion } from 'framer-motion';
import { ExternalLink, GitBranch as Github } from 'lucide-react';
import { projectsData as projects } from '../data/content';

export default function Projects() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950" id="projects">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-6 text-slate-900 dark:text-white">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full mx-auto" />
          <p className="mt-8 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-light">
            A selection of my most challenging and impactful work, ranging from enterprise solutions to innovative web applications.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              {/* Project Graphic / Illustration */}
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative glass-card aspect-video rounded-2xl overflow-hidden bg-white/50 dark:bg-slate-900/50 flex items-center justify-center border border-slate-200/50 dark:border-slate-800/50 group-hover:border-cyan-500/30 transition-all duration-500">
                  {/* Decorative Project Pattern */}
                  <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none overflow-hidden">
                    <div className="grid grid-cols-8 gap-4 transform rotate-12 scale-150">
                      {[...Array(32)].map((_, i) => (
                        <div key={i} className="h-20 bg-cyan-500/30 rounded-lg"></div>
                      ))}
                    </div>
                  </div>

                  {/* Icon Focus */}
                  <div className="relative p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-500 border border-slate-100 dark:border-slate-700">
                    {/* Size boost for the project icon */}
                    {Object.assign({}, project.icon, { props: { ...project.icon.props, size: 48 } })}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400">Project {idx + 1}</span>
                  <div className="h-px w-12 bg-cyan-500/30"></div>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full border border-cyan-100 dark:border-cyan-800/50">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed font-light text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors hover:border-cyan-500/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

