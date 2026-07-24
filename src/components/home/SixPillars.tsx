import { motion } from "motion/react";
import { UserCheck, Sparkles, Heart, Flag, BookOpen, Flower2, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const pillars = [
  { icon: UserCheck, title: "Discipline", desc: "Building focus, responsibility, and consistency in everyday life", image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=800" },
  { icon: Sparkles, title: "Indian Culture", desc: "Staying connected to roots, traditions, and identity", image: "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&q=80&w=800" },
  { icon: Heart, title: "Values & Character", desc: "Developing honesty, respect, and strong decision-making", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" },
  { icon: Flag, title: "Patriotism", desc: "Understanding responsibility towards society and nation", image: "https://images.unsplash.com/photo-1532375810565-df048560fcca?auto=format&fit=crop&q=80&w=800" },
  { icon: BookOpen, title: "Sanskrit & Wisdom", desc: "Connecting with knowledge that builds clarity and depth", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800" },
  { icon: Flower2, title: "Yoga & Mindfulness", desc: "Creating balance, calmness, and inner strength", image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800" },
];

export function SixPillars() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.children[0].clientWidth;
      const gap = 24; // 1.5rem = 24px gap
      const newIndex = Math.round(scrollPosition / (itemWidth + gap));
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      // Initial calculation
      handleScroll();
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.children[0].clientWidth;
      const gap = 24;
      scrollRef.current.scrollTo({ left: index * (itemWidth + gap), behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-brand-ivory overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 mb-12 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full border border-brand-navy/10 text-brand-navy text-sm font-medium mb-6 bg-white"
            >
              Our Foundation
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl sm:text-[48px] font-bold text-brand-navy tracking-tight leading-tight mb-6"
            >
              Six Pillars That Quietly Shape Who They Become
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-medium text-lg leading-relaxed"
            >
              <p>
                At Vishwa Vidyapeeth, these six pillars are not added as activities — they are part of the environment children grow in. Over time, they build something deeper than knowledge.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-12 group/slider">
        {/* Navigation Arrows */}
        <button 
          onClick={scrollLeft}
          className="hidden lg:flex absolute left-0 top-[40%] -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white border border-[rgba(0,0,0,0.08)] items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(15,31,70,0.2)] disabled:opacity-50 disabled:cursor-not-allowed -ml-4"
          disabled={activeIndex === 0}
        >
          <ChevronLeft strokeWidth={2.5} className="w-6 h-6" />
        </button>
        
        <button 
          onClick={scrollRight}
          className="hidden lg:flex absolute right-0 top-[40%] -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white border border-[rgba(0,0,0,0.08)] items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(15,31,70,0.2)] disabled:opacity-50 disabled:cursor-not-allowed -mr-4"
          disabled={activeIndex >= pillars.length - 1} // simplified calculation
        >
          <ChevronRight strokeWidth={2.5} className="w-6 h-6" />
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scrollbar-hide" 
          style={{ scrollbarWidth: 'none' }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-none w-[280px] sm:w-[340px] md:w-[360px] rounded-[32px] bg-white border border-[rgba(0,0,0,0.04)] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 snap-center flex flex-col overflow-hidden group"
            >
              <div className="h-[220px] sm:h-[260px] relative overflow-hidden bg-mist-grey shrink-0">
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Number Indicator */}
                <div className="absolute top-4 right-4 text-white/90 font-heading text-4xl font-bold tracking-tighter drop-shadow-lg opacity-80">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
              
              <div className="p-8 grow flex flex-col">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all shrink-0"
                >
                  <pillar.icon strokeWidth={1.5} className="w-6 h-6" />
                </motion.div>
                <h3 className="font-heading text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-crimson transition-colors shrink-0">{pillar.title}</h3>
                <p className="text-text-medium leading-relaxed mt-auto">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-3 mt-4">
          {pillars.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === i 
                  ? "w-10 h-2.5 bg-brand-navy" 
                  : "w-2.5 h-2.5 bg-brand-navy/20 hover:bg-brand-navy/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
