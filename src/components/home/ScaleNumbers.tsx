import { motion, useScroll, useTransform, useSpring, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (inView) {
      const target = parseInt(value.replace(/[^0-9]/g, ""));
      if (isNaN(target)) {
        setDisplayValue(value);
        return;
      }

      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out expo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(easeProgress * target);
        
        const suffix = value.replace(/[0-9,]/g, "");
        const formatted = currentCount.toLocaleString() + suffix;
        setDisplayValue(formatted);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

const stats = [
  { value: "4", label: "Campuses", desc: "Expanding learning environments across locations" },
  { value: "3,500+", label: "Students", desc: "A growing community of learners" },
  { value: "1:10", label: "Ratio", desc: "Individual attention that actually makes a difference" },
  { value: "500+", label: "Smart Classrooms", desc: "Technology that supports better understanding" },
  { value: "13+", label: "Years", desc: "Of consistent excellence in education" },
  { value: "75", label: "GPS-Enabled Buses", desc: "Safe and reliable transportation" },
  { value: "350+", label: "Educators", desc: "Guiding, mentoring, and shaping young minds" },
  { value: "18", label: "Acres Campus", desc: "Space designed for learning, sports, and growth" },
];

export function ScaleNumbers() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="relative py-24 px-6 sm:px-12 text-white bg-brand-navy overflow-hidden">
      {/* Background Image & Overlays with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y: imgY }}
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2000"
          alt="School Campus Building" 
          className="w-full h-full object-cover opacity-50 mix-blend-multiply scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 via-brand-navy/85 to-brand-navy/95" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-[48px] font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Built with Scale. <span className="text-brand-gold italic">Driven by Consistency.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg leading-relaxed space-y-4"
          >
            <p>
              What you see today is not just infrastructure, it's years of consistency, discipline, and belief from parents who chose us.
            </p>
            <p className="font-medium text-white">
              Every number here represents a journey, a family, and a child growing with us.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center group"
            >
              <div className="font-heading text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors duration-300 drop-shadow-sm">
                <Counter value={stat.value} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white/90 mb-2 drop-shadow-sm">{stat.label}</h3>
              <p className="text-white/70 text-sm leading-relaxed drop-shadow-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-center pt-8 border-t border-white/20"
        >
          <p className="text-xl sm:text-2xl font-heading font-medium text-white/90 tracking-tight drop-shadow-sm">
            Because real trust isn't claimed <span className="text-brand-gold italic">it's built, year after year.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
