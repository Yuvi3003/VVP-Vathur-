import { motion } from "motion/react";

export function NeuralEducation() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-accent-sand/40">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full border border-primary-navy/10 text-primary-navy text-sm font-medium mb-6 bg-white/50"
          >
            Neural Education
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-[48px] font-bold text-primary-navy mb-8 tracking-tight leading-tight"
          >
            Designed Around How Children Learn Best
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-medium text-lg leading-relaxed space-y-6"
          >
            <p>
              We are proud to be the first school to integrate neuroscience into the teaching-learning process. By combining the latest research in brain science with innovative, child-centric teaching methods, we create learning experiences that are truly aligned with each student's natural cognitive development.
            </p>
            <p>
              Our approach helps teachers understand how children learn best—allowing us to tailor instruction to their individual strengths, pace, and potential.
            </p>
            <p className="font-medium text-text-dark">
              This breakthrough in education ensures deeper understanding, improved retention, and more meaningful learning outcomes.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] rounded-3xl overflow-hidden bg-primary-navy/5 border border-primary-navy/10 flex items-center justify-center p-8"
        >
          {/* Abstract brain / neural illustration placeholder */}
          <div className="relative w-full max-w-[400px] aspect-square">
            <div className="absolute inset-0 border border-primary-blue/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-8 border border-accent-gold/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-16 border border-primary-navy/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-tr from-primary-blue/20 to-accent-gold/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
            </div>
            
            {/* Neural nodes */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="absolute w-3 h-3 bg-primary-blue rounded-full" style={{
                top: `${50 + 40 * Math.sin(i * Math.PI / 3)}%`,
                left: `${50 + 40 * Math.cos(i * Math.PI / 3)}%`,
                boxShadow: '0 0 20px rgba(30,78,216,0.5)'
              }} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
