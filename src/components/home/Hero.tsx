import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 10]);
  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden px-6 sm:px-12 pt-32 pb-24 text-white">
      {/* Background with explicit gradient to ensure visibility */}
      <div className="absolute inset-0 bg-[#0F1F46] bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue z-0" />
      
      {/* Background patterns with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </motion.div>

      <div className="max-w-[1200px] mx-auto w-full grid lg:grid-cols-2 gap-16 relative z-10">
        <div className="flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-brand-crimson animate-pulse" />
              Admissions Open 2025-26
            </motion.div>
            
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-[72px] leading-[1.1] font-bold text-white tracking-tight mb-6">
              Every Child Has <span className="text-brand-gold italic">Potential.</span>
              <br />
              We Help Them Realise It.
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 max-w-lg mb-10 leading-relaxed">
              With the right balance of learning, discipline, and exposure.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link 
                  to="/contact"
                  className="group px-8 py-4 rounded-full bg-brand-crimson text-white font-medium hover:bg-brand-crimson-hover transition-all hover:shadow-[0_8px_30px_rgba(158,28,34,0.4)] flex items-center justify-center gap-2"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-full border border-white/30 text-white font-medium transition-all hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-white" />
                </div>
                Visit Our Campus
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center">
          {/* Hero Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: y2, rotate: rotate1 }}
            className="w-full aspect-square max-w-[500px] relative flex items-center justify-center"
          >
            {/* Background Circle with Image */}
            <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa154daaf762?auto=format&fit=crop&q=80&w=1000" 
                alt="School Student" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
            </div>

            <motion.div 
              animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 z-10 bg-white text-brand-navy px-4 py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] font-medium text-sm flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">15+</div>
              Years of Legacy
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-20 -left-6 z-10 bg-white text-brand-navy px-4 py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] font-medium text-sm flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">3.5k+</div>
              Students
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
