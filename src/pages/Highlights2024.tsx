import React from "react";
import { motion } from "motion/react";
import { 
  Users, 
  Calendar, 
  GraduationCap, 
  Globe, 
  BookOpen, 
  MapPin, 
  Sparkles, 
  Rocket, 
  Music, 
  Trophy, 
  Star,
  ChevronRight,
  ChevronLeft,
  Sun
} from "lucide-react";
import { cn } from "../lib/utils";

const personalities = [
  {
    name: "Dr. Nambi Narayanan",
    title: "Legendary ISRO Scientist",
    subtitle: "Padma Bhushan Awardee",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Sri Subbiah Arunan",
    title: "ISRO Scientist",
    subtitle: "Mars Orbiter Mission",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Sri Palam Kalyanasundaram",
    title: "The Man of the Millennium",
    subtitle: "Recognized Philanthropist",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Neeraj Chopra",
    title: "Olympic Gold Medallist",
    subtitle: "Javelin Throw Champion",
    img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Gary Kirsten",
    title: "Former Indian Cricket Coach",
    subtitle: "World Cup Winning Mentor",
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Mr. Gabe Gabrielle",
    title: "NASA Engineer",
    subtitle: "Kennedy Space Center",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

const signatureEvents = [
  {
    title: "VVP Model United Nations",
    date: "25–27 July 2024",
    description: "A three-day conference where students represented countries and debated global issues - a stage to think globally, argue thoughtfully, and listen well.",
    icon: Globe,
    img: "https://images.unsplash.com/photo-1526304640581-d334cd06f694?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Koti Gita Lekhana",
    date: "5 October 2024",
    description: "A 45-day Yajna in which students, parents, and staff handwrote verses from the Bhagavad Gita - later offered at Sri Krishna Temple, Sri Puthige Matha, Udupi. A quiet exercise in devotion and shared purpose.",
    icon: BookOpen,
    img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "The Art of Parenting Workshop",
    date: "5 October 2024",
    description: "A reflective workshop by educationist Dr. Gururaj Karajagi on compassionate communication, emotional intelligence, and mindful discipline - giving parents practical tools for modern parenting.",
    icon: Users,
    img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Nambi Antariksha Kalakshetra - Space Lab Inauguration",
    date: "14 October 2024",
    description: "Our state-of-the-art space lab, powered by Genex Space, inaugurated by Dr. Nambi Narayanan himself. The day also hosted the Nambi Space Quest Championship.",
    icon: Rocket,
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Protovillage Visit",
    date: "19 October 2024",
    description: "An immersive day at Proto Village exploring sustainable living, eco-friendly farming, and the value of self-reliant, community-led problem solving.",
    icon: Sun,
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Workshop by Mr Gabe Gabrielle",
    date: "6 November 2024",
    description: "NASA engineer Mr Gabe Gabrielle, from Kennedy Space Center, led a STEAM workshop with stories from real missions and an open Q&A — inspiring students to dream big in science and space.",
    icon: Rocket,
    img: "https://images.unsplash.com/photo-1516339901600-af13a73858a5?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Prani on Wheels",
    date: "16 November 2024",
    description: "A campus exhibition bringing diverse wildlife on site, with sessions on habitats, behaviour, and conservation - plus supervised, hands-on interactions.",
    icon: Sparkles,
    img: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Mountains of Life - Azim Premji Foundation",
    date: "20 November 2024",
    description: "A learning visit to the Azim Premji Foundation, exploring its work in transforming education and empowering rural communities - and what it means to make a difference at scale.",
    icon: MapPin,
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Inter-School Yogasana Competition",
    date: "23 November 2024",
    description: "A vibrant celebration of yoga hosted on our campus, inaugurated by Chief Guest Shri P. Gopala Krishna. Two hundred students from nine schools demonstrated discipline, balance, and grace.",
    icon: Trophy,
    img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Times of India Vocal & Instrumental Competition",
    date: "November 2024",
    description: "A showcase of young musical talent across vocal and instrumental categories - judged on melody, rhythm, expression, and stage presence.",
    icon: Music,
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Rashtra Jagruthi Singing Competition",
    date: "AY 2024–25",
    description: "A celebration of patriotism through music - students performed inspirational, nationalistic songs judged on melody, expression, and clarity.",
    icon: Music,
    img: "https://images.unsplash.com/photo-1514525253344-f814d0c9e58a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Bharatiya Kala Vaibhava",
    date: "29 Nov – 1 Dec 2024",
    description: "A three-day festival celebrating India's artistic heritage through classical dance, music, yoga, heritage walks, temple models, folk art exhibits, and live craft workshops.",
    icon: Music,
    img: "https://images.unsplash.com/photo-1514525253344-f814d0c9e58a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Inter-School & Open State Taekwondo Championship",
    date: "18 January 2025",
    description: "A landmark sporting moment - our athletes brought home 12 Gold, 13 Silver, and 18 Bronze medals, one of our strongest team performances yet.",
    icon: Trophy,
    img: "https://images.unsplash.com/photo-1552072805-2a9039d00e57?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Sky Gazing with Genex Space",
    date: "14 February 2025",
    description: "An evening of celestial observation for students and parents - viewing craters on the Moon, Jupiter, Mars, Venus, and prominent stars through high-powered telescopes.",
    icon: Star,
    img: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800"
  }
];

export function Highlights2024() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 1.1 
        : scrollLeft + clientWidth / 1.1;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050353051-bd290b206128?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30" 
            alt="School Highlights" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-transparent to-brand-navy" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-brand-gold font-black uppercase tracking-widest text-xs mb-6 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <Sparkles className="w-4 h-4" /> Academic Year Review
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
              Beyond the Classroom<br />
              <span className="text-brand-gold italic">Highlights of AY 2024–25</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              A year at Vishwa Vidyapeeth is never just about syllabus and exams. It's a year of conversations with scientists, cultural festivals, scholarly Yajnas, and experiences that shape students beyond the books.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Eminent Personalities */}
      <section className="py-24 px-6 sm:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-brand-crimson font-black uppercase tracking-widest text-xs mb-4">Inspiration on Campus</div>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
                Eminent Personalities
              </h2>
              <p className="mt-6 text-lg text-neutral-600">
                We believe students learn the most when they meet people who have already walked the paths they dream of walking. Our campus has welcomed legends from diverse fields.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {personalities.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-square rounded-[32px] overflow-hidden mb-4 border border-zinc-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-brand-gold/30">
                  <img src={person.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={person.name} />
                </div>
                <h4 className="font-bold text-brand-navy text-sm md:text-base mb-1 group-hover:text-brand-crimson transition-colors">{person.name}</h4>
                <p className="text-[10px] md:text-xs font-medium text-neutral-500 uppercase tracking-widest">{person.title}</p>
                <p className="text-[9px] text-brand-gold font-bold uppercase mt-0.5">{person.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Events Grid */}
      <section className="py-24 px-6 sm:px-12 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 px-4">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-4">Signature Events of the Year</h2>
              <div className="w-24 h-1 bg-brand-crimson mx-auto md:mx-0 rounded-full"></div>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 px-4 -mx-4"
          >
            {signatureEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="min-w-[85%] md:min-w-[45%] lg:min-w-[31.5%] snap-start bg-white rounded-[40px] overflow-hidden border border-zinc-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={event.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={event.title} />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-brand-navy shadow-sm border border-white/20">
                      <event.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-1.5 px-3 py-1 bg-brand-crimson/90 rounded-full w-fit">
                      <Calendar className="w-3.5 h-3.5" /> {event.date}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-lg font-bold text-brand-navy mb-4 group-hover:text-brand-crimson transition-colors leading-tight min-h-[3.5rem]">{event.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed line-clamp-4">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural & Heritage */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <div className="text-brand-gold font-black uppercase tracking-widest text-xs mb-4">Deeply Rooted</div>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-8 leading-tight">Cultural & Heritage <br/><span className="text-brand-crimson">Programmes</span></h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-brand-navy mb-3">Promotion of Sanskrit</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      A language we live with, not just teach. Every day opens with shlokas, and Bhagavad Gita classes are integrated within the academic timetable. We celebrate Sanskrit Saptaha and Sanskrit Day each year with great fervor.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-crimson text-white flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-brand-navy mb-3">Heritage Trips</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Students don't just read history — they walk through it. Recent trips have taken them to Hampi, Belur, Halebidu, Thanjavur, Pondicherry, and Bhoga Nandeeshwara Temple, guided by our Heritage Conservation Program.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-brand-navy rounded-[60px] overflow-hidden shadow-2xl relative z-10 rotate-3 transition-transform hover:rotate-0 duration-500">
                <img src="https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Cultural Heritage" />
              </div>
              <div className="absolute -inset-4 bg-brand-gold border-2 border-brand-gold/20 rounded-[60px] -z-10 -rotate-3"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 sm:px-12 bg-brand-navy text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-crimson/5 -skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-gold/5 skew-x-12 -translate-x-1/2" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.2em]">Join Our Community</span>
            </div>
            
            <h2 className="font-heading text-4xl sm:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
              Does your child's education <br/>
              <span className="text-brand-gold italic">inspire</span> them every day?
            </h2>
            
            <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Vishwa Vidyapeeth is more than a school; it's a sanctuary for curious minds. Experience our unique blend of modern science and timeless tradition firsthand.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button className="group relative px-10 py-5 bg-brand-crimson text-white rounded-full font-black uppercase tracking-widest text-[11px] overflow-hidden transition-all hover:shadow-2xl hover:shadow-brand-crimson/40 hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a Campus Tour <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-crimson to-burgundy transition-transform duration-300 group-hover:scale-105" />
              </button>
              
              <button className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all hover:border-white/20">
                Explore Curriculum
              </button>
            </div>
            
            <div className="mt-16 flex items-center justify-center gap-8 opacity-40">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">150+</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Events Yearly</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">25+</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Eminent Guests</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">100%</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Holistic Focus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
