import { motion } from "motion/react";

export function Awards() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-neutral-grey overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-heading text-sm font-bold tracking-widest uppercase text-brand-blue mb-4">
            Awards & Recognition
          </div>
          <h2 className="font-heading text-4xl sm:text-[48px] font-bold text-brand-navy mb-6 tracking-tight">
            Recognised for What We Deliver
          </h2>
          <div className="text-text-medium text-lg leading-relaxed max-w-2xl mx-auto space-y-4">
            <p>Over the years, Vishwa Vidhyapeeth has been consistently recognised for its approach to education, student well-being, and overall excellence.</p>
            <p>These recognitions are not just achievements they reflect the standards we maintain every day.</p>
          </div>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide py-4" style={{ scrollbarWidth: 'none' }}>
          {[
            {
              title: "Education Today",
            award: "Top CBSE Emerging Schools",
            desc: "Recognised for exemplary contribution in the field of education as one of India's leading emerging CBSE schools.",
            year: "2021-22",
            image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=600"
          },
          {
            title: "EducationWorld",
            award: "High Happiness Quotient Schools",
            desc: "Ranked #2 in India, #1 in Karnataka, and #1 in Bengaluru for providing a happy and conducive learning environment.",
            year: "2022-23",
            image: "https://images.unsplash.com/photo-1579975096649-e773152b04cb?auto=format&fit=crop&q=80&w=600"
          },
          {
            title: "Global Triumph Foundation",
            award: "Top Promising School of the Year",
            desc: "Recognised among India's Top 100 Brands 2022 for academic excellence and institution-wide performance.",
            year: "2022",
            image: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?auto=format&fit=crop&q=80&w=600"
          },
          {
            title: "EducationWorld Grand Jury",
            award: "High Happiness Quotient Schools",
            desc: "Awarded for exceptional commitment to student wellbeing and positive educational outcomes.",
            year: "2022-23",
            image: "https://images.unsplash.com/photo-1590013330462-094ba44b9e4a?auto=format&fit=crop&q=80&w=600"
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex-none w-[300px] sm:w-[380px] bg-white rounded-3xl overflow-hidden border border-[rgba(0,0,0,0.04)] shadow-sm hover:shadow-md transition-shadow snap-center flex flex-col"
          >
            <div className="h-[240px] w-full relative group">
              <img 
                src={item.image} 
                alt={item.award}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 z-10">
                <span className="text-xs font-bold text-brand-blue bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm tracking-wider">{item.year}</span>
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="text-xs font-bold text-brand-crimson uppercase tracking-widest mb-2">{item.title}</div>
              <h3 className="font-heading text-xl font-bold text-brand-navy mb-3 leading-tight">{item.award}</h3>
              <p className="text-sm text-text-medium leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl sm:text-2xl font-heading font-medium text-brand-navy tracking-tight">
            Because consistency <span className="text-brand-gold italic">doesn't go unnoticed.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
