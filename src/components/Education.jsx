import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/content';

export default function Education() {
  return (
    <section className="py-12 relative bg-slate-100/50 dark:bg-slate-900/50" id="education">
      <div className="max-w-5xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-4 text-slate-900 dark:text-white">Education</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full mb-8" />

            <div className="glass-card p-6 flex items-start gap-4 hover:-translate-y-1 hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-xl shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{educationData.degree}</h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">{educationData.major}</p>
                <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400 mt-2">
                  <span>{educationData.university}</span>
                  <span className="font-semibold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">{educationData.year}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Awards & Certifications */}
          <div className="space-y-8">

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-4 text-slate-900 dark:text-white">Certifications</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full mb-8" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {educationData.certifications.map((cert, idx) => (
                  <a key={idx} href={cert.image} target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4 hover:-translate-y-1 hover:shadow-purple-500/10 transition-all duration-300 block">
                    <div className="p-2.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                      {idx % 2 === 0 ? <Award size={20} /> : <BookOpen size={20} />}
                    </div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{cert.title}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-4 text-slate-900 dark:text-white">Awards</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6" />

              <div className="space-y-4">
                {educationData.awards.map((award, idx) => {
                  if (award.image) {
                    return (
                      <a key={idx} href={award.image} target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4 hover:-translate-y-1 hover:shadow-yellow-500/10 transition-all duration-300 block">
                        <div className="p-2.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg">
                          <Trophy size={20} />
                        </div>
                        <div className="flex-1 flex justify-between items-center">
                          <span className="font-bold text-slate-800 dark:text-slate-200">{award.title}</span>
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">{award.year}</span>
                        </div>
                      </a>
                    );
                  }
                  return (
                    <div key={idx} className="glass-card p-4 flex items-center gap-4 hover:-translate-y-1 hover:shadow-orange-500/10 transition-all duration-300">
                      <div className="p-2.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg">
                        <Trophy size={20} />
                      </div>
                      <div className="flex-1 flex justify-between items-center">
                        <span className="font-bold text-slate-800 dark:text-slate-200">{award.title}</span>
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">{award.year}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
