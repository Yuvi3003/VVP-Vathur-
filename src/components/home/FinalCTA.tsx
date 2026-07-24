import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="py-24 px-6 sm:px-12 bg-white">
      <div className="max-w-[1000px] mx-auto text-center">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-brand-navy rounded-[40px] p-12 sm:p-24 relative overflow-hidden group"
        >
          {/* Abstract Background Image with Parallax */}
          <div className="absolute inset-0 z-0">
            <motion.img 
              style={{ y: bgY }}
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000" 
              alt="Abstract background" 
              className="w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-blue/90" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          </div>
          
          <div className="relative z-10">
            <h2 className="font-heading text-4xl sm:text-[64px] font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Choose What Shapes <br className="hidden sm:block" />
              <span className="text-brand-gold italic">Their Future</span>
            </h2>
            
            <div className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto space-y-4 mb-12">
              <p>Choosing a school isn't just about academics. It's about the environment your child grows in every day.</p>
              <p>At Vishwa Vidhyapeeth, that environment is built with intention — where learning is structured, values are lived, and growth feels natural.</p>
            </div>
            
            <p className="text-xl font-medium text-white mb-10">
              Take the next step towards a place where your child doesn't just study — they evolve.
            </p>
 
            <button className="px-10 py-5 rounded-full bg-brand-crimson text-white font-medium text-lg hover:bg-brand-crimson-hover transition-all shadow-[0_8px_30px_rgba(158,28,34,0.3)] hover:shadow-[0_12px_40px_rgba(158,28,34,0.4)] hover:-translate-y-1 w-full sm:w-auto">
              Start Admission Process
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
