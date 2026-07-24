import { motion } from "motion/react";
import { Utensils, Stethoscope, Bus, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Campus close to top companies",
    desc: "Located near leading Tech companies for better exposure, internships, and industry interactions.",
  },
  {
    title: "Opt-In Residential Campus",
    desc: "A fully residential campus designed for focused learning, collaboration, and student life.",
  },
  {
    title: "Modern amenities",
    desc: "Equipped with modern classrooms, labs, hostels, and facilities for everyday comfort.",
  },
  {
    title: "Innovation from day one",
    desc: "Build real-world projects and innovative solutions from the very first semester.",
  },
];

export function CampusLife() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Gallery Side (Now Left) */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-7 grid grid-cols-12 gap-3 auto-rows-[120px] sm:auto-rows-[160px] order-2 lg:order-1"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
            className="col-span-8 row-span-2 relative rounded-2xl overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1523050853863-33bc83f0639d?auto=format&fit=crop&q=80&w=1000" 
              alt="Lecture hall" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
            className="col-span-4 row-span-1 relative rounded-2xl overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" 
              alt="Basketball court" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
            className="col-span-4 row-span-1 relative rounded-2xl overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" 
              alt="Modern lounge" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
            className="col-span-12 row-span-2 relative rounded-2xl overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1200" 
              alt="Collaboration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        </motion.div>

        {/* Content Side (Now Right) */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="text-brand-crimson font-bold tracking-widest text-xs uppercase mb-3 px-1">
              Campus Life
            </div>
            <h2 className="font-heading text-3xl sm:text-[42px] font-bold text-brand-navy mb-5 tracking-tight leading-[1.15]">
              Life Beyond the Classroom
            </h2>
            <p className="text-text-medium text-base sm:text-lg leading-relaxed">
              Engage in a lively campus featuring an Innovation Lab, Turf arena, and collaborative co-working spaces.
            </p>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-6 group py-2"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gray-100 group-hover:bg-brand-crimson transition-all duration-300 rounded-full" />
                
                <h3 className="font-heading text-lg font-bold text-brand-navy mb-1 group-hover:text-brand-crimson transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-text-medium text-sm leading-relaxed max-w-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
