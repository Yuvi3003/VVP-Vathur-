import { motion } from "motion/react";
import React from "react";
import { 
  Music, 
  Layout, 
  Languages, 
  Binary, 
  Activity, 
  Users, 
  UserCircle,
  Palette,
  Waves,
  Library,
  Trophy,
  Leaf,
  Utensils,
  Home,
  BookOpen,
  PartyPopper,
  Map,
  Baby,
  ChevronDown
} from "lucide-react";
import { cn } from "../lib/utils";

const intelligences = [
  { name: "Musical", icon: Music, color: "bg-blue-500" },
  { name: "Visual-spatial", icon: Layout, color: "bg-emerald-500" },
  { name: "Linguistic", icon: Languages, color: "bg-orange-500" },
  { name: "Logical-mathematical", icon: Binary, color: "bg-indigo-500" },
  { name: "Bodily-kinesthetic", icon: Activity, color: "bg-rose-500" },
  { name: "Interpersonal", icon: Users, color: "bg-purple-500" },
  { name: "Intrapersonal", icon: UserCircle, color: "bg-amber-500" },
];

const highlights = [
  {
    title: "Language, Math & EVS",
    desc: "Kannada, Hindi & English, basic math, and environmental science",
    icon: Languages,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Sand Play & Splash Pool",
    desc: "Sensory development by scooping, pouring, and splashing",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1566454825481-4e48f80aa4d7?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Art & Craft",
    desc: "Basic skills of cutting, pasting, writing their name, and counting",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Music, Dance & Library",
    desc: "Fun movement and a love for stories and reading",
    icon: Library,
    image: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Sports & Games",
    desc: "Chess classes for kindergarten in Varthur, football, etc.",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1626248801379-51a073406f0c?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Organic Farming",
    desc: "Healthy eating habits, environmental awareness, and respect for resources",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Healthy Eating Habits",
    desc: "Breakfast and lunch prepared with high-quality cereals and fresh vegetables",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Special Classrooms",
    desc: "Designed with artistic themes, nestled within the picturesque garden setting",
    icon: Home,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Bhagavad Gita Classes",
    desc: "Develops focus, discipline, mutual respect, acceptance, and self-awareness",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Celebrations at Campus",
    desc: "Skits, group songs, speeches, role plays, festivals, and important events",
    icon: PartyPopper,
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Field Trips",
    desc: "To farms, hospitals, fire stations, supermarkets, and metro stations",
    icon: Map,
    image: "https://images.unsplash.com/photo-1564981797816-1043d01bf53d?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Day Care Facility",
    desc: "Nap, lunch, snacks, and recreational activities at our nursery school",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600"
  }
];

export function PrePrimary() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000" 
            alt="School environment" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent" />
        </div>
        
        {/* Background elements (Parallax-style) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        
        <div className="container mx-auto px-6 sm:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-gold text-xs sm:text-sm font-bold mb-8 backdrop-blur-sm uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              Academic Structure • Tarang Program
            </motion.div>
            
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.95]">
              Scholastic <br />
              <span className="text-brand-gold italic">Pre-Primary</span> <br />
              Education
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl mb-12">
              Laying a strong foundation for lifelong learning through Social, Cognitive, and Emotional development.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/40 font-mono text-sm uppercase tracking-widest">
              <span className="text-white font-bold">PG</span>
              <span>/</span>
              <span className="text-white font-bold">Nursery</span>
              <span>/</span>
              <span className="text-white font-bold">LKG</span>
              <span>/</span>
              <span className="text-white font-bold">UKG</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Foundations */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-ivory rounded-full blur-3xl opacity-50" />
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-8 leading-tight tracking-tight">
              Roots of the <span className="text-brand-crimson">Best Pre-School</span> in Varthur
            </h2>
            <div className="space-y-6 text-xl text-text-medium leading-relaxed">
              <p>
                Tarang’s curriculum focuses on helping children develop the social, cognitive, and emotional skills they need. It lays down the foundation for the approaching scholastic programs.
              </p>
              <p>
                Children are engaged in age-appropriate activities that build conceptual knowledge, independent thinking, and curiosity.
              </p>
            </div>
            <motion.div 
              whileHover={{ x: 10 }}
              className="mt-12 p-8 rounded-[32px] bg-brand-ivory border-l-4 border-brand-gold relative group transition-all"
            >
              <p className="text-brand-navy font-bold italic text-lg leading-relaxed">
                "Since Vishwa Vidyapeeth also builds children’s character, it inculcates values of discipline and mutual respect to lay a strong foundation for lifelong learning."
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-4"
          >
            <div className="col-span-12 rounded-[40px] overflow-hidden shadow-2xl aspect-[16/10]">
              <img 
                src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1000" 
                alt="Child learning" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mascot Section */}
      <section className="py-24 px-6 sm:px-12 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-blue/20 text-brand-gold font-bold text-xs tracking-widest uppercase mb-8">
                Program’s Mascot
              </div>
              <h2 className="font-heading text-4xl sm:text-6xl font-bold text-white mb-8 tracking-tight">
                Meet <span className="text-brand-gold">Dolly</span> <br />
                the Blue Dolphin
              </h2>
              <div className="space-y-6 text-xl text-white/70 leading-relaxed max-w-xl">
                <p>
                  Dolly is the mascot of our Tarang program at the best play school in Varthur and beyond. She's a blue dolphin that's intelligent, playful, caring, and full of charm.
                </p>
                <p>
                  She is loved by the children, and her sweet, mischievous nature encourages them to explore with confidence.
                </p>
                <div className="pt-8 border-t border-white/10">
                   <p className="text-brand-gold font-bold italic text-2xl">
                     "She isn’t just a mascot. She’s a teacher, motivator, and friend on every child’s learning journey."
                   </p>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-72 h-72 sm:w-[450px] sm:h-[450px]">
                <div className="absolute inset-0 bg-brand-blue/30 rounded-full animate-pulse" />
                <div className="absolute inset-4 bg-brand-navy rounded-full border-4 border-brand-blue/50 flex items-center justify-center p-12 shadow-[0_0_80px_rgba(30,63,175,0.4)]">
                   <img 
                    src="https://cdn-icons-png.flaticon.com/512/2311/2311210.png" 
                    alt="Dolphin Mascot" 
                    className="w-full h-full object-contain filter brightness-125 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-float"
                  />
                </div>
                {/* Decorative particles */}
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 right-10 w-8 h-8 bg-brand-gold rounded-full blur-xl" />
                <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-20 -left-6 w-12 h-12 bg-brand-blue rounded-full blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-24 px-6 sm:px-12 bg-brand-ivory/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-end mb-20">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-2 rounded-full border border-brand-navy/10 text-brand-navy text-xs font-bold mb-6 bg-white uppercase tracking-widest">
                Our Educational Vision
              </div>
              <h2 className="font-heading text-4xl sm:text-[48px] font-bold text-brand-navy tracking-tight leading-tight">
                Developing Every <span className="text-brand-crimson">Intelligence </span>
                Through Tarang
              </h2>
            </div>
            <div className="lg:max-w-md">
               <p className="text-lg text-text-medium leading-relaxed">
                  Based on Howard Gardner’s theory of multiple intelligences (MI), we believe children shouldn't be limited to one conventional type of smartness.
               </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {intelligences.map((intelligence, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-[32px] border border-[rgba(0,0,0,0.04)] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 transform transition-all group-hover:scale-110 shadow-lg group-hover:rotate-6",
                  intelligence.color
                )}>
                  <intelligence.icon strokeWidth={1.5} className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-brand-navy group-hover:text-brand-crimson transition-colors">
                  {intelligence.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-6">Highlights of the Program</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-8" />
            <p className="text-xl text-text-medium max-w-2xl mx-auto font-medium">A sanctuary for holistic growth and discovery.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all flex flex-col h-full"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-blue shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-heading text-xl font-bold text-brand-navy mb-4 leading-tight group-hover:text-brand-crimson transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-medium text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ChevronDown className="-rotate-90 w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-brand-navy rounded-[48px] p-10 sm:p-16 relative overflow-hidden text-center text-white"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Baby className="w-64 h-64" />
            </div>
            <div className="max-w-3xl mx-auto relative z-10">
              <h3 className="font-heading text-3xl sm:text-4xl font-bold mb-6">Montessori <span className="text-brand-gold italic">Methodology</span></h3>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                "Encourages children's natural interests and activities rather than formal teaching methods. Our Step & Learn interactive floor platform provides application-based learning that brings concepts to life."
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 font-bold text-brand-gold text-sm tracking-wider uppercase">
                Active Discovery • Natural Interests
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto overflow-hidden rounded-[56px] relative">
          <div className="absolute inset-0 bg-brand-crimson" />
          <img 
            src="https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=2000" 
            alt="Admissions" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="relative z-10 py-20 px-8 sm:px-20 text-center">
            <h2 className="font-heading text-4xl sm:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to Start the <span className="text-brand-gold italic">Tarang</span> Journey?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium">
              Join a community that nurtures every intelligence. Admissions are open for Pre-Primary – Playgroup, Nursery, LKG, and UKG.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact" 
                className="w-full sm:w-auto px-12 py-6 bg-white text-brand-crimson font-bold rounded-2xl shadow-xl transition-all"
              >
                Enquire for Admission
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact?type=visit" 
                className="w-full sm:w-auto px-12 py-6 bg-brand-navy text-white font-bold rounded-2xl border border-white/20 transition-all"
              >
                Book a Campus Visit
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

