import { motion } from "motion/react";
import { 
  Music, 
  Palette, 
  Trophy, 
  BookOpen, 
  Sprout, 
  Users, 
  Mic2, 
  Award, 
  Clock,
  Heart,
  ChevronRight,
  Theater
} from "lucide-react";

const activities = [
  {
    title: "Bhagavad Gita Classes",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
    description: "The Bhagavad Gita is a goldmine of instrumental life learnings. We conduct periodic classes that focus on profound knowledge of the holy book, developing a rational worldview and decision-making skills.",
    color: "brand-gold"
  },
  {
    title: "Sports & Athletics",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=1200",
    description: "Our sports program is dedicated to the physical, mental, and social development of the students. Students are exposed to numerous mandatory and optional activities that help them build leadership, teamwork, and resilience skills.",
    list: ["Volleyball", "Skating", "Taekwondo", "Kabaddi", "Football", "Yoga", "Table Tennis", "Cricket", "Jump Rope", "Carrom", "Kho-kho", "Basketball", "Chess"],
    color: "brand-crimson"
  },
  {
    title: "The Arts (Theatre, Music & Dance)",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1514525253361-bee8718a34e1?auto=format&fit=crop&q=80&w=1200",
    description: "Artistic activities provide students with a deep sense of spirituality and enhance creative focus and discipline. Engagement in dance, music, and drama activities positively impacts academic performance, critical thinking, and problem-solving.",
    subcategories: [
      { name: "Theatre", icon: Theater },
      { name: "Music", icon: Music },
      { name: "Dance", icon: Heart }
    ],
    color: "brand-blue"
  },
  {
    title: "Organic Farming",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
    description: "Our approach focuses on agriculture—the country's biggest industry. Organic farming activities integrate Science, Math, and Geography, and help children connect deeply with nature.",
    color: "brand-gold"
  },
  {
    title: "Clubs & Communities",
    icon: Users,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
    description: "Our school features specialised student communities where children can participate in collaborative activities driven by passion and exploration.",
    color: "brand-blue"
  },
  {
    title: "Speech & Debates",
    icon: Mic2,
    image: "https://images.unsplash.com/photo-1475721027187-402ad2989a3b?auto=format&fit=crop&q=80&w=1200",
    description: "Public speaking sessions are essential in developing students' confidence and self-esteem. Students are also expected to engage in research activities to deliver a polished presentation.",
    color: "brand-crimson"
  },
  {
    title: "Olympiads",
    icon: Award,
    image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&q=80&w=1200",
    description: "To broaden their conceptual knowledge, we frequently conduct exams that challenge children's problem-solving and logical thinking skills in modern fields.",
    color: "brand-gold"
  },
  {
    title: "Quality Circle Time (QCT)",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=1200",
    description: "A structured, safe, and supportive group time where students share, express, and solve together. We promote emotional, social, and ethical development through dialogue.",
    color: "brand-blue"
  }
];

export function CoScholastic() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="Co-Scholastic Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 sm:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-gold text-xs sm:text-sm font-bold mb-8 backdrop-blur-sm uppercase tracking-widest">
              Beyond Textbooks • Holistic Growth
            </div>
            
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.95]">
              Co-Scholastic <br />
              <span className="text-brand-gold italic">Excellence</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl">
              At Vishwa Vidyapeeth, education explores the area beyond textbooks. Our approach engages students in activities that promote physical, mental, and spiritual well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-24 bg-white px-6 sm:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 border-2 border-brand-ivory rounded-[40px] relative bg-brand-ivory/10"
          >
             <p className="font-heading text-2xl sm:text-3xl text-brand-navy font-bold italic leading-relaxed">
               "Our goal is to develop confidence, creativity, and curiosity through a balanced exploration of arts, sports, and ethics."
             </p>
          </motion.div>
        </div>
      </section>

      {/* Activity Sections */}
      {activities.map((item, index) => (
        <section 
          key={item.title} 
          className={`py-24 px-6 sm:px-12 ${index % 2 === 0 ? 'bg-white' : 'bg-brand-ivory/30'}`}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
            >
              <div className={`p-4 rounded-2xl inline-flex items-center justify-center mb-8 ${
                item.color === 'brand-blue' ? 'bg-brand-blue/10 text-brand-blue' :
                item.color === 'brand-gold' ? 'bg-brand-gold/10 text-brand-gold' :
                'bg-brand-crimson/10 text-brand-crimson'
              }`}>
                <item.icon className="w-8 h-8" />
              </div>
              
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-8 leading-[1.1] tracking-tight">
                {item.title}
              </h2>
              
              <p className="text-xl text-text-medium leading-relaxed mb-8">
                {item.description}
              </p>

              {item.list && (
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {item.list.map((sport) => (
                    <span key={sport} className="px-4 py-2 bg-white border border-brand-ivory rounded-xl text-sm font-bold text-brand-navy shadow-sm">
                      {sport}
                    </span>
                  ))}
                </div>
              )}

              {item.subcategories && (
                <div className="grid sm:grid-cols-3 gap-4 mb-10 text-center">
                  {item.subcategories.map((sub) => (
                    <div key={sub.name} className="p-4 rounded-2xl bg-brand-blue/5 border border-brand-blue/10">
                      <sub.icon className="w-6 h-6 mx-auto mb-2 text-brand-blue" />
                      <span className="font-bold text-brand-navy">{sub.name}</span>
                    </div>
                  ))}
                </div>
              )}
              
              <div className={`w-32 h-1.5 rounded-full ${
                item.color === 'brand-blue' ? 'bg-brand-blue' :
                item.color === 'brand-gold' ? 'bg-brand-gold' :
                'bg-brand-crimson'
              }`} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`rounded-[40px] overflow-hidden shadow-2xl relative aspect-[4/3] ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-navy/10" />
            </motion.div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="py-24 px-6 sm:px-12 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent opacity-50" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-6xl font-bold mb-8 tracking-tight"
          >
            Developing Well-Rounded <br />
            <span className="text-brand-gold italic">Personalities</span>
          </motion.h2>
          
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our co-scholastic program ensures every student grows vertically in knowledge and horizontally in character.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact" 
              className="px-12 py-6 bg-brand-crimson text-white font-bold rounded-2xl shadow-xl transition-all"
            >
              Admission Enquiry
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/curriculum/pedagogy" 
              className="px-12 py-6 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-2xl transition-all"
            >
              View Our Pedagogy
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
