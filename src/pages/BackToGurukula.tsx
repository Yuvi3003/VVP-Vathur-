import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  MapPin, 
  Target, 
  Users, 
  Heart, 
  Shield, 
  Compass,
  Star,
  CheckCircle2,
  Mountain,
  Sun,
  Flame,
  ChevronRight
} from "lucide-react";

const objectives = [
  {
    title: "Adaptability & Life Skills",
    items: ["Resilience", "Communication", "Organization", "Finance", "Confidence"],
    icon: Compass,
    color: "bg-blue-50",
    accent: "text-blue-600"
  },
  {
    title: "Living a Value-Based Life",
    items: ["Integrity", "Self-Reliance", "Labour Dignity"],
    icon: Star,
    color: "bg-amber-50",
    accent: "text-amber-600"
  },
  {
    title: "Patriotism & Service",
    items: ["Love for the Nation", "Social Responsibility", "Community Service"],
    icon: Shield,
    color: "bg-red-50",
    accent: "text-red-600"
  },
  {
    title: "Mind & Body Wellness",
    items: ["Mental Balance", "Holistic Well-Being", "Physical Strength"],
    icon: Heart,
    color: "bg-emerald-50",
    accent: "text-emerald-600"
  },
  {
    title: "Disciplined & Purposeful Living",
    items: ["Non-Violence", "Truth", "Fearlessness", "Sustainability"],
    icon: Target,
    color: "bg-indigo-50",
    accent: "text-indigo-600"
  },
  {
    title: "Community Engagement",
    items: ["Social Initiatives", "Empathy Building", "Civic Responsibility"],
    icon: Users,
    color: "bg-orange-50",
    accent: "text-orange-600"
  },
  {
    title: "Integrated & Joyful Learning",
    items: ["Real-Life Applications", "Cross-Subject Exploration"],
    icon: BookOpen,
    color: "bg-violet-50",
    accent: "text-violet-600"
  }
];

const tours = [
  { 
    name: "Andhra Pradesh", 
    images: [
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1620023473138-038237cbdeb2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1590494432128-db6fdf243834?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600100397561-434078832a87?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    name: "Himachal Pradesh", 
    images: [
      "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1605142859862-978be7eba909?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1597033664176-78e727e02b37?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1563212879-d655f416568c?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    name: "Karnataka", 
    images: [
      "https://images.unsplash.com/photo-1600100397561-434078832a87?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    name: "Leh & Ladakh", 
    images: [
      "https://images.unsplash.com/photo-1563212879-d655f416568c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    name: "Madhya Pradesh", 
    images: [
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    name: "Punjab", 
    images: [
      "https://images.unsplash.com/photo-1540850839944-e44837bbdd3c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    name: "Rajasthan", 
    images: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    name: "Tamil Nadu", 
    images: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    name: "Uttarakhand", 
    images: [
      "https://images.unsplash.com/photo-1518005020581-36528751508b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

function ObjectivesSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPossibleIndices = Math.max(0, objectives.length - itemsToShow);

  const next = () => {
    setStartIndex((prev) => (prev + 1 > totalPossibleIndices ? 0 : prev + 1));
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 < 0 ? totalPossibleIndices : prev - 1));
  };

  const visibleObjectives = objectives.slice(startIndex, startIndex + itemsToShow);

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-12 px-2">
        <div className="flex items-center gap-4">
          <div className="w-12 h-1 bg-brand-gold rounded-full" />
          <h4 className="text-brand-navy font-bold uppercase tracking-widest text-xs">Core Pillars</h4>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white text-brand-navy border border-zinc-200 hover:border-brand-gold hover:text-brand-gold hover:shadow-xl transition-all duration-300 transform active:scale-95"
          >
            <Compass className="w-5 h-5 rotate-180" />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white text-brand-navy border border-zinc-200 hover:border-brand-gold hover:text-brand-gold hover:shadow-xl transition-all duration-300 transform active:scale-95"
          >
            <Compass className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid gap-8 transition-all duration-500" style={{
        gridTemplateColumns: `repeat(${itemsToShow}, minmax(0, 1fr))`
      }}>
        <AnimatePresence mode="popLayout">
          {visibleObjectives.map((obj, i) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white p-10 rounded-[50px] shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden h-full flex flex-col"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <obj.icon className="w-32 h-32 rotate-12" />
              </div>
              
              <div className={`w-16 h-16 rounded-2xl ${obj.color} flex items-center justify-center ${obj.accent} mb-8 group-hover:scale-110 transition-transform relative z-10`}>
                <obj.icon className="w-8 h-8" />
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-brand-navy mb-6 relative z-10">{obj.title}</h3>
              
              <ul className="space-y-4 relative z-10 mt-auto">
                {obj.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-text-medium font-medium group/item hover:translate-x-2 transition-transform">
                    <div className={`w-2 h-2 rounded-full ${obj.accent.replace('text-', 'bg-')} shadow-sm`} />
                    <span className="group-hover/item:text-brand-navy transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-12 flex justify-center gap-3">
        {Array.from({ length: totalPossibleIndices + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStartIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${startIndex === i ? 'w-10 bg-brand-gold' : 'w-2 bg-brand-navy/10 hover:bg-brand-navy/30'}`}
          />
        ))}
      </div>
    </div>
  );
}

export function BackToGurukula() {
  const [activeTourIndex, setActiveTourIndex] = useState(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854056-8ad76d7700f1?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Gurukula Learning" 
          />
          <div className="absolute inset-0 bg-brand-navy/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-gold/20 text-brand-gold text-sm font-bold mb-8 uppercase tracking-[0.3em] border border-brand-gold/30"
          >
            <Flame className="w-5 h-5" /> Gnanavatika
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-6xl sm:text-8xl font-bold text-white mb-10 tracking-tight"
          >
            Gurukula <span className="text-brand-gold">Way of Learning</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            At Vishwa Vidyapeeth, we embrace the ancient way of “learning by doing.” Our approach integrates traditional values and modern education.
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-10 leading-tight">
                Embracing the <span className="text-brand-crimson">Ancient Tradition</span>
              </h2>
              <div className="space-y-6 text-xl text-text-medium leading-relaxed">
                <p>
                  At Vishwa Vidyapeeth, we embrace the ancient way of “learning by doing.” Our approach integrates traditional values and modern education, promoting discipline, patriotism, sustainability, and community service.
                </p>
                <p>
                  The Back to Gurukula program is a long-term commitment designed for students from Grades 7 to 12.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-gold -rotate-3 rounded-[80px] opacity-10" />
              <img 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200" 
                className="relative rounded-[80px] shadow-2xl object-cover aspect-[4/3] w-full" 
                alt="Traditional Education" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-24 px-6 sm:px-12 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 relative">
            <h2 className="font-heading text-5xl sm:text-7xl font-bold text-brand-navy mb-6 tracking-tight">
              Learning <span className="text-brand-gold">Objectives</span>
            </h2>
            <p className="text-xl text-text-medium max-w-2xl mx-auto">
              Cultivating the core pillars of character and capability through the Gnanavatika experience.
            </p>
          </div>

          <ObjectivesSlider />
        </div>
      </section>

      {/* Experiential Yatra */}
      <section className="py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <div className="inline-flex items-center gap-2 text-brand-crimson font-black uppercase tracking-widest text-xs mb-6">
                <Mountain className="w-4 h-4" /> Exploring to Learn
              </div>
              <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-8 tracking-tight">
                Experiential <span className="text-brand-gold">Yatra</span>
              </h2>
              <p className="text-xl text-text-medium leading-relaxed mb-10">
                As part of the Back to Gurukula program, students are exposed to time-tested Indian traditions that foster strong character development.
              </p>
              <div className="space-y-6">
                {[
                  "Explore diverse cultures, landscapes, and traditions across India.",
                  "Apply classroom learning in real-world environments.",
                  "Build meaningful relationships—with self, peers, nature, and society."
                ].map((item, id) => (
                  <div key={id} className="flex gap-4 p-6 rounded-3xl bg-zinc-50 border border-zinc-100">
                    <div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold shrink-0">{id + 1}</div>
                    <p className="text-lg font-bold text-brand-navy">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-xl italic text-brand-crimson font-bold">
                "The goal is simple: broaden young minds, spark curiosity, and instill confidence through these experiences."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:order-1 grid grid-cols-2 gap-4"
            >
               <img src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg mt-12" alt="Yatra 1" />
               <img src="https://images.unsplash.com/photo-1477623884701-01441a475d4a?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg" alt="Yatra 2" />
               <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg" alt="Yatra 3" />
               <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg mt-12" alt="Yatra 4" />
               <img src="https://images.unsplash.com/photo-1518005020581-36528751508b?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg" alt="Yatra 5" />
               <img src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg" alt="Yatra 6" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maslow's Section */}
      <section className="py-24 px-6 sm:px-12 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-crimson rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="font-heading text-4xl sm:text-6xl font-bold text-white mb-10 tracking-tight">
            Driving <span className="text-brand-gold">Self-Actualization</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-20 leading-relaxed">
            The Back to Gurukula program prioritizes Maslow’s Hierarchy of Needs and aims to move children towards the top of the pyramid, the stage of self-actualization.
          </p>

          <div className="max-w-4xl mx-auto relative group">
             {/* Detailed Pyramid Illustration */}
             <div className="flex flex-col items-center space-y-4">
                {[
                  { 
                    label: "Self Actualization", 
                    sub: "(Realising one's full potential)",
                    desc: "Creativity, Personal Growth, Moral Development, Pursuit of Meaning, Purpose Driven Action, Peak Experience",
                    color: "bg-brand-gold", 
                    width: "w-1/3", 
                    h: "min-h-[100px]" 
                  },
                  { 
                    label: "Esteem", 
                    sub: "(Recognition, Competence, and Respect)",
                    desc: "Self Respect, Confidence, Respect from Others, Reputation, Recognition and Achievement",
                    color: "bg-blue-600", 
                    width: "w-1/2", 
                    h: "min-h-[100px]" 
                  },
                  { 
                    label: "Love & Belonging", 
                    sub: "(Social connection and acceptance)",
                    desc: "Family, Friendship, Community, Group Membership, Affection & Intimacy",
                    color: "bg-amber-500", 
                    width: "w-2/3", 
                    h: "min-h-[100px]" 
                  },
                  { 
                    label: "Safety Needs", 
                    sub: "(Security and predictability in one's environment)",
                    desc: "Personal Security, Health & Wellbeing, Stable Environment, Financial Security",
                    color: "bg-orange-600", 
                    width: "w-5/6", 
                    h: "min-h-[100px]" 
                  },
                  { 
                    label: "Physiological Needs", 
                    sub: "(Fundamental biological requirements for survival)",
                    desc: "Air, Water, Food, Shelter, Clothing, Sleep, Reproduction",
                    color: "bg-red-600", 
                    width: "w-full", 
                    h: "min-h-[100px]" 
                  }
                ].map((level, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`${level.width} ${level.h} ${level.color} rounded-2xl flex flex-col items-center justify-center p-6 shadow-2xl border border-white/10 group/level hover:scale-105 transition-transform cursor-default relative text-white`}
                  >
                    <span className="font-black uppercase tracking-widest text-sm mb-1">{level.label}</span>
                    <span className="text-[10px] opacity-80 font-bold mb-2 italic">{level.sub}</span>
                    <p className="text-[10px] sm:text-xs opacity-0 group-hover/level:opacity-100 transition-opacity absolute inset-0 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm rounded-2xl text-center leading-tight">
                      {level.desc}
                    </p>
                  </motion.div>
                ))}
             </div>
             <p className="mt-12 text-white/50 text-sm italic">Hover over the layers to see specific examples</p>
          </div>
        </div>
      </section>

      {/* Disciplinary Guidelines */}
      <section className="py-24 px-6 sm:px-12 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-brand-gold font-black uppercase tracking-widest text-xs mb-6 mx-auto">
              <Shield className="w-4 h-4" /> Code of Conduct
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-8 leading-tight">
              Disciplinary <span className="text-brand-crimson">Guidelines</span> <br />
              for Parents & Students
            </h2>
            <p className="text-xl text-text-medium leading-relaxed mb-12 max-w-2xl mx-auto">
              For a complete Gnanavatika experience, parents and students should ensure the following needs are met.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              {[
                "Gurkula-aligned home environment",
                "Full program participation",
                "Positive reinforcement & authentic feedback",
                "Strict discipline should be followed",
                "Parents’ support for child’s growth & self-discovery"
              ].map((rule, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:border-brand-gold transition-all group/rule"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 group-hover/rule:scale-110 transition-transform">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-brand-navy leading-tight">{rule}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 p-8 bg-brand-navy text-white rounded-[40px] shadow-2xl inline-block max-w-3xl border-t-4 border-brand-gold"
            >
              <p className="text-lg italic opacity-90 leading-relaxed font-medium">
                "We take discipline seriously and handle violations sensitively. Our strict discipline and complaint redressal policy is shared with all parents."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experiential Tours Gallery */}
      <section className="py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl sm:text-7xl font-bold text-brand-navy mb-6 tracking-tight">
              Experiential <span className="text-brand-gold">Tours</span>
            </h2>
            <p className="text-xl text-text-medium max-w-2xl mx-auto italic">
              Traversing the length and breadth of our cultural heritage.
            </p>
          </div>

          {/* State Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tours.map((tour, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTourIndex(idx)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border-2 ${
                  activeTourIndex === idx 
                  ? "bg-brand-navy text-white border-brand-navy shadow-lg scale-105" 
                  : "bg-white text-brand-navy border-zinc-100 hover:border-brand-navy/30"
                }`}
              >
                {tour.name}
              </button>
            ))}
          </div>

          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTourIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {tours[activeTourIndex].images.map((image, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10 }}
                    className={`relative rounded-3xl overflow-hidden shadow-xl group transition-all duration-500 ${
                      i === 0 ? "col-span-2 row-span-2 h-[450px]" : "h-52"
                    }`}
                  >
                    <img 
                      src={image} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                      alt={`${tours[activeTourIndex].name} - ${i + 1}`} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-white">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-gold" />
                        <span className="font-bold text-sm">{tours[activeTourIndex].name}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 sm:px-12 bg-brand-crimson text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <Sun className="absolute top-0 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-heading text-4xl sm:text-6xl font-bold mb-8 leading-tight">
            Begin the journey of <br />
            <span className="text-brand-gold">Wisdom & Self-Discovery.</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Broaden your young mind, spark curiosity, and build the confidence required for the modern world through ancient principles.
          </p>
          <button className="px-10 py-5 rounded-full bg-white text-brand-crimson font-bold text-lg hover:bg-brand-gold hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl flex items-center gap-3 mx-auto">
            Register for Gnanavatika <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
