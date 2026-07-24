import { motion } from "motion/react";

export function WhyVVP() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-neutral-grey">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-[48px] font-bold text-brand-navy mb-6 tracking-tight leading-tight"
          >
            Why VVP Stands Apart
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-2 lg:order-1 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-8">
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.06)" }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-[rgba(0,0,0,0.04)] aspect-square flex flex-col justify-end transition-all duration-300"
              >
                <div className="font-heading font-bold text-lg text-brand-navy">Academic Excellence</div>
              </motion.div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-brand-navy text-white p-6 rounded-3xl shadow-sm aspect-[4/5] flex flex-col justify-end transition-all duration-300 group"
              >
                <div className="text-brand-gold font-bold mb-2 group-hover:scale-125 transition-transform">✦</div>
                <div className="font-heading font-bold text-lg">Guru-Shishya Parampara</div>
              </motion.div>
            </div>
            <div className="space-y-4">
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-brand-blue text-white p-6 rounded-3xl shadow-sm aspect-[4/5] flex flex-col justify-end transition-all duration-300"
              >
                <div className="font-heading font-bold text-lg">Value-Based Education</div>
              </motion.div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.06)" }}
                className="bg-brand-ivory p-6 rounded-3xl shadow-sm border border-[rgba(0,0,0,0.04)] aspect-square flex flex-col justify-end transition-all duration-300"
              >
                <div className="font-heading font-bold text-lg text-brand-navy">Modern Infrastructure</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6 text-lg text-text-medium leading-relaxed"
          >
            <p>
              Vishwa Vidyapeeth is a distinguished private day school located in the Whitefield area of Bengaluru.
            </p>
            <p>
              What truly sets the school apart is its unique approach to education that blends academic excellence with deep-rooted cultural values. The school emphasizes ethical development, spiritual grounding, and a value-based education system, often drawing inspiration from Indian traditions like the Guru-Shishya Parampara and teachings from the Bhagavad Gita.
            </p>
            <p>
              Alongside academics, students engage in various co-curricular and extracurricular activities—from arts, music, and dance to sports, yoga, and cultural festivals—nurturing their emotional, physical, and creative growth.
            </p>
            <p>
              With its student-centred pedagogy, emphasis on individual growth, and commitment to both academic rigor and cultural enrichment, Vishwa Vidyapeeth is considered one of the more well-rounded educational institutions in Bengaluru.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
