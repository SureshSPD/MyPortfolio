import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';
import { contactData } from '../data/content';

export default function Contact() {
  return (
    <section className="py-12 relative bg-slate-50 dark:bg-slate-950" id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 md:mb-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-4 text-slate-900 dark:text-white">{contactData.title}</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full mx-auto" />
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {contactData.description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative group"
        >
          {/* Deep Glow background behind contact card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>

          <div className="glass-card relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left bg-white/90 dark:bg-slate-900/90">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Get In Touch</h3>
              <p className="text-slate-600 dark:text-slate-400 flex items-center justify-center md:justify-start gap-2">
                <Mail size={18} className="text-cyan-500" />
                {contactData.email}
              </p>
            </div>
            
            <a href={`mailto:${contactData.email}`}
               className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-cyan-500/40 active:scale-95 text-lg">
              <MessageSquare size={20} />
              Say Hello
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
