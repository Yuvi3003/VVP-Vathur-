import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    quote: "With regard to academics, I am happy to see that tests are being conducted for small topics which encourages the kids to do a regular study. Similarly coming to activities, it is good to have activities without hampering student's studies. I am happy that kids are encouraged to participate in extracurricular activities.",
    name: "Ms. Saumya",
    relation: "P/o Apoorva S - Grade 7"
  },
  {
    quote: "We sincerely thank the teachers and school for their continuous care, support, and patience. We've seen wonderful growth in our son and feel truly blessed to have such dedicated teachers at Vishwa Vidyapeeth, Varthur. The events, especially the Father's Day celebration, were fun and educational... our son feels happy and comfortable at school.",
    name: "Mr. Deepak Kumar Mishra",
    relation: "P/o Divyansh Mishra - Grade 1"
  },
  {
    quote: "We are very happy with the academic teaching methodology and importance given to co-curricular activities. The best part is the focus on food habits and knowledge on food wastage. We are satisfied with the prompt response from staff and the excellent transport services.",
    name: "Ms. Bhargavi",
    relation: "P/o Nikhila Sai Grade 8 & Sahasra Siri Grade 5"
  },
  {
    quote: "My daughter is loving school. The balanced meal served to all students is a wow factor. In-house transport is an added advantage for child safety. The mix of academics and sports keeps the child engaged and active throughout the day. We strongly recommend this school.",
    name: "Mr. Parashurama K",
    relation: "P/o Maanvitha P - Grade 1"
  }
];

export function Testimonials() {
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
      const gap = 32; // 2rem = 32px gap
      const newIndex = Math.round(scrollPosition / (itemWidth + gap));
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.children[0].clientWidth;
      const gap = 32;
      scrollRef.current.scrollTo({ left: index * (itemWidth + gap), behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 text-center mb-16 relative">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-block px-4 py-2 rounded-full border border-primary-navy/10 text-primary-navy text-sm font-medium mb-6 bg-[#F7F8FA]"
        >
          Parent Stories
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl sm:text-[48px] font-bold text-primary-navy tracking-tight"
        >
          Voices of Our Parent Community
        </motion.h2>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-12 group/slider">
        {/* Navigation Arrows */}
        <button 
          onClick={scrollLeft}
          className="hidden lg:flex absolute left-0 top-[50%] -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white border border-[rgba(0,0,0,0.08)] items-center justify-center text-primary-navy hover:bg-primary-navy hover:text-white transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(11,31,58,0.2)] disabled:opacity-50 disabled:cursor-not-allowed -ml-4"
          disabled={activeIndex === 0}
        >
          <ChevronLeft strokeWidth={2.5} className="w-6 h-6" />
        </button>
        
        <button 
          onClick={scrollRight}
          className="hidden lg:flex absolute right-0 top-[50%] -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white border border-[rgba(0,0,0,0.08)] items-center justify-center text-primary-navy hover:bg-primary-navy hover:text-white transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(11,31,58,0.2)] disabled:opacity-50 disabled:cursor-not-allowed -mr-4"
          disabled={activeIndex >= testimonials.length - 1} // Approximated
        >
          <ChevronRight strokeWidth={2.5} className="w-6 h-6" />
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-none w-full md:w-[calc(50%-16px)] snap-center p-10 rounded-3xl bg-[#F8F9FA] border border-[rgba(0,0,0,0.04)] flex flex-col justify-between shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 relative group"
            >
              <div className="text-[100px] leading-none font-serif text-accent-gold/20 absolute -top-4 -left-2 font-bold group-hover:text-accent-gold/30 transition-colors duration-300 select-none">"</div>
              
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-primary-navy/80 font-medium leading-relaxed mb-10 text-base sm:text-lg pt-4 flex-grow italic">
                  {test.quote}
                </p>
                <div>
                  <div className="w-12 h-1 bg-accent-gold mb-6 rounded-full opacity-60"></div>
                  <div className="font-heading font-bold text-xl text-primary-navy mb-1">{test.name}</div>
                  <div className="text-primary-navy/60 text-sm font-medium">{test.relation}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-3 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === i 
                  ? "w-10 h-3 bg-primary-navy" 
                  : "w-3 h-3 bg-primary-navy/20 hover:bg-primary-navy/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
