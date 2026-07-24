import { motion } from "motion/react";

const stats = [
  { value: "15+", label: "Years", desc: "Of consistent learning & development" },
  { value: "3500+", label: "Students", desc: "Learning, growing, and evolving" },
  { value: "1:10", label: "Ratio", desc: "Focused attention for every child" },
  { value: "500+", label: "Classrooms", desc: "Enabled for better understanding" },
];

export function TrustSection() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-[48px] font-bold text-brand-navy mb-6 tracking-tight leading-tight"
          >
            A Growing School Trusted by Parents
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-medium text-lg leading-relaxed space-y-4"
          >
            <p>
              At Vishwa Vidhyapeeth, growth is not just in numbers — it's in the confidence, discipline, and progress of every child.
            </p>
            <p>
              A system built with consistency, care, and commitment to real learning.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-neutral-grey border border-[rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-heading text-4xl font-bold text-brand-blue">{stat.value}</span>
                <span className="font-medium text-brand-navy">{stat.label}</span>
              </div>
              <p className="text-text-medium text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl sm:text-2xl font-heading font-medium text-brand-navy tracking-tight">
            Because trust is built over time... <br className="hidden sm:block" />
            <span className="text-brand-gold italic">and proven through every child's growth.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
