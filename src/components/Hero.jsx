import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-cyan-500/20 to-transparent blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="text-center md:text-left"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }} className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 mb-6 border border-cyan-200 dark:border-cyan-800/50">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Consultant
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-['Outfit'] text-slate-900 dark:text-white mb-6">
            Suresh <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-200">Priyadharshan P</span>
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }} className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl leading-relaxed font-light">
            FullStack Developer and Mendix Developer
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mb-8">
            <a href="mailto:sureshpriyadharshan@gmail.com"
              className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-cyan-500/25 active:scale-95">
              <Mail size={18} />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/spdwebdeveloper/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-full font-medium transition-all shadow-sm hover:shadow-md active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
            <a href="/src/assets/SureshPriyadharshan_4Years.pdf" download="SureshPriyadharshan_Resume.pdf"
              className="flex items-center gap-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-200 dark:hover:bg-cyan-800/40 border border-cyan-200 dark:border-cyan-800/50 px-6 py-3 rounded-full font-medium transition-all shadow-sm hover:shadow-md active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Resume
            </a>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }} className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-slate-500 dark:text-slate-400 text-sm font-medium">
            <div className="flex items-center gap-1.5 glass px-4 py-2 rounded-lg">
              <MapPin size={16} className="text-cyan-500" />
              <span>Bangalore, India</span>
            </div>
            <div className="flex items-center gap-1.5 glass px-4 py-2 rounded-lg">
              <Phone size={16} className="text-cyan-500" />
              <span>+91-9629772311</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
