import { motion } from "motion/react";

const experiences = [
  {
    title: "Ganitha Mela",
    subtitle: "When logic turns into instinct",
    desc: "A space where numbers are not solved — they are understood. Students engage, challenge, and discover the depth behind mathematics.",
    color: "from-brand-blue/10 to-transparent",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800", // Numbers/math related
  },
  {
    title: "Bharatiya Kala Vaibhava",
    subtitle: "Culture, not as a subject — but as an experience",
    desc: "From classical expressions to timeless traditions, students don't just perform — they connect with something deeper.",
    color: "from-brand-gold/10 to-transparent",
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=800", // Culture/art
  },
  {
    title: "Jai Jawan Jai Kisan",
    subtitle: "Understanding responsibility beyond the classroom",
    desc: "An experience that builds awareness, respect, and a sense of connection to the nation's backbone.",
    color: "from-brand-crimson/10 to-transparent",
    image: "https://images.unsplash.com/photo-1595843469850-8488e0ae7e78?auto=format&fit=crop&q=80&w=800", // Agriculture
  }
];

export function Experiences() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-soft-sand/30 overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-brand-navy/10 text-brand-navy text-sm font-medium mb-6 bg-white">
            Where the Campus Comes Alive
          </div>
          <h2 className="font-heading text-4xl sm:text-[48px] font-bold text-brand-navy mb-6 tracking-tight leading-tight">
            Experiences That Shape More Than Academics
          </h2>
          <div className="text-text-medium text-lg leading-relaxed max-w-2xl mx-auto space-y-4">
            <p>Some things can't be taught through books. They have to be lived.</p>
            <p>At Vishwa Vidhyapeeth, these moments go beyond participation — they shape how students think, express, and see the world.</p>
          </div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[1px] bg-brand-navy/10 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-stretch ${isEven ? 'md:flex-row-reverse' : ''} gap-6 md:gap-12 lg:gap-16`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-[24px] md:left-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-brand-blue -translate-x-1/2 z-10 shadow-[0_0_0_4px_rgba(30,63,175,0.1)]" />
                  
                  {/* Image Container */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16'} flex`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="rounded-3xl overflow-hidden w-full relative shadow-md min-h-[300px]"
                    >
                      <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                    </motion.div>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'} flex`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className={`p-8 sm:p-10 rounded-3xl bg-white border border-[rgba(0,0,0,0.04)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-center w-full`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-50`} />
                      <div className="relative z-10">
                        <h3 className="font-heading text-2xl font-bold text-brand-navy mb-2">{exp.title}</h3>
                        <div className="text-brand-crimson font-medium mb-4 text-sm tracking-wide uppercase">{exp.subtitle}</div>
                        <p className="text-text-medium leading-relaxed">{exp.desc}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <p className="text-xl sm:text-2xl font-heading font-medium text-brand-navy tracking-tight">
            Because growth isn't just academic — <span className="text-brand-gold italic">it's what stays with them long after.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
