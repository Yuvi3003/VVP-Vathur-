import { motion } from "motion/react";

export function DirectorMessage() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-[400px] bg-brand-ivory" />
      
      <div className="max-w-[1000px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 pt-8"
        >
          <h2 className="font-heading text-3xl sm:text-[40px] font-bold text-brand-navy mb-4 tracking-tight">
            Director's Message
          </h2>
          <p className="text-lg font-medium text-brand-crimson">
            The Thought Behind Every Step Forward
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="bg-brand-navy rounded-[40px] shadow-[0_20px_40px_rgba(15,31,70,0.15)] relative flex flex-col md:flex-row overflow-hidden"
        >
          {/* Portrait Image */}
          <div className="w-full md:w-2/5 h-[350px] sm:h-[400px] md:h-auto relative shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Director" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-brand-navy/10" />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-3/5 p-8 sm:p-10 lg:p-14 relative flex flex-col justify-center">
            {/* Decorative quotes */}
            <div className="absolute top-6 left-8 text-[120px] leading-none font-serif text-white/5 select-none pointer-events-none">"</div>
            
            <div className="relative z-10 text-white/90 text-sm sm:text-base leading-relaxed space-y-5">
              <p className="font-medium text-white italic text-lg sm:text-xl">
                "Dear Parents, Students, and Well-Wishers,
              </p>
              <p>
                At Vishwa Vidyapeeth, every programme we design is rooted in our vision of nurturing well-rounded individuals who are intellectually curious, emotionally resilient, and socially responsible. The recent initiatives and events held at our campus — from Madhava Ganitha Kala Kshetra igniting a love for Mathematics, to Step N Learn making learning an engaging and joyful experience, and Nambi Antariksha Kalakshetra inspiring curiosity about space exploration — are testimony to our commitment to holistic education.
              </p>
              <p>
                These programmes are not just events on the calendar, but carefully crafted opportunities to help our students discover their potential, think critically, and dream beyond boundaries. They bring together tradition and innovation, fostering an environment where learning becomes meaningful and deeply impactful.
              </p>
              <p>
                I extend my gratitude to our dedicated teachers, enthusiastic students, and supportive parents for making these programmes a grand success. Together, we continue to build a vibrant learning community where every child can flourish."
              </p>
              
              <div className="pt-6 border-t border-white/10 mt-6 flex flex-col items-end text-right">
                <div className="font-heading text-xl sm:text-2xl font-bold text-white mb-1">Ms Suseela Santhosh</div>
                <div className="text-brand-gold text-xs sm:text-sm font-medium">Director, Vishwa Vidyapeeth Group of Schools</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
