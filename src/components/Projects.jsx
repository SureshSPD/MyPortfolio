import { motion } from 'framer-motion';
import { Code2, Monitor, Layers } from 'lucide-react';

const projects = [
  {
    title: "Enterprise License Management Platform",
    status: "Present",
    description: "Architected a full-stack solution to monitor and optimize high-value software licenses. Features include real-time analytics dashboards, role-based access control, and CI/CD integration.",
    tags: ["React.js", "Express.js", "MongoDB", "Azure Blob", "Figma"],
    icon: <Monitor className="text-cyan-500" size={20} />
  },
  {
    title: "Cross-System Application Integration",
    status: "Completed",
    description: "Centralized integration solution connecting manufacturing systems, ticketing modules, and engineering platforms. Includes real-time risk analysis based on engineering progress and inventory.",
    tags: ["Mendix", "ERP Systems", "Ticketing System", "PLM System"],
    icon: <Layers className="text-purple-500" size={20} />
  },
  {
    title: "PLM Data Integration System",
    status: "Completed",
    description: "Integrated low-code platforms with core Product Lifecycle Management systems using custom connectors. Developed features to retrieve and display item structures and BOM details within the application. Ensured secure API interactions.",
    tags: ["Mendix", "PLM Data", "APIs", "Microflows"],
    icon: <Code2 className="text-cyan-400" size={20} />
  },
  {
    title: "Learning Management System",
    status: "Completed",
    description: "Full-featured LMS built to streamline organizational training. Features role-based access, module management for trainers, and dynamic progress dashboards for admins.",
    tags: ["Mendix Studio Pro", "UI Components", "Domain Models"],
    icon: <Monitor className="text-green-500" size={20} />
  },
  {
    title: "Lifecycle Analytics Dashboard",
    status: "Completed",
    description: "Engineered a backend service to transform complex XML data into structured models. Embedded analytics in a React.js interface for dynamic product lifecycle management reporting.",
    tags: ["React.js", "Flask", "Power BI", "REST APIs"],
    icon: <Layers className="text-orange-500" size={20} />
  },
  {
    title: "On-Premise to Cloud Data Migration",
    status: "Completed",
    description: "Conceptualized workflows in Figma and built modular React.js components. Constructed APIs to map and facilitate secure cloud data transformation, accelerating cloud migrations.",
    tags: ["React.js", "Flask", "Figma", "Cloud Migration"],
    icon: <Code2 className="text-teal-500" size={20} />
  },
  {
    title: "Real-Time Transaction Dashboards",
    status: "Completed",
    description: "Delivered data-driven dashboards visualizing system transaction status in real-time. Built reusable frontend modules to monitor reliability with transaction retry management features.",
    tags: ["React.js", "Dashboards", "UI Mockups"],
    icon: <Monitor className="text-pink-500" size={20} />
  }
];

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
