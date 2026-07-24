import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Mic2, 
  Newspaper, 
  Languages, 
  Search, 
  MessageSquare, 
  History, 
  PenTool, 
  Paintbrush, 
  FileEdit, 
  Users,
  ChevronRight,
  Quote,
  Layers,
  Sparkles
} from "lucide-react";

interface ActivityItem {
  title: string;
  icon: any;
  image: string;
  content: string;
  color: string;
}

interface ActivityCategory {
  id: string;
  category: string;
  items: ActivityItem[];
}

const activities: ActivityCategory[] = [
  {
    id: "literature",
    category: "Literature-Based Activities",
    items: [
      {
        title: "Public Speaking Events",
        icon: Mic2,
        image: "https://images.unsplash.com/photo-1475721027187-402ad2989a3b?auto=format&fit=crop&q=80&w=1200",
        content: "Students participate in activities like speeches and debates on human rights issues. They are expected to hone their communication skills in voice modulation, body language, and eye contact. On the other hand, opinion formation makes them socially aware and reasonably confident.",
        color: "brand-blue"
      },
      {
        title: "News Reading",
        icon: Newspaper,
        image: "https://images.unsplash.com/photo-1504711432814-02012104192d?auto=format&fit=crop&q=80&w=1200",
        content: "Morning assemblies include a news-reading section, rotated among classes and students. It builds a journalistic approach to current events and, in doing so, improves pronunciation, fluency, and public speaking skills.",
        color: "brand-gold"
      },
      {
        title: "Spell Bee",
        icon: Languages,
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1200",
        content: "Students at VVP are encouraged to participate in the periodically conducted Spelling Bee exam. The direct impact is seen in students' linguistic and academic growth.",
        color: "brand-crimson"
      },
      {
        title: "Reading Challenge",
        icon: BookOpen,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1200",
        content: "Students must participate in the reading challenge, an online test conducted by the CBSE. The purpose of this test is to test and enhance their reading and comprehension skills.",
        color: "brand-blue"
      },
      {
        title: "Dictionary Making",
        icon: Search,
        image: "https://images.unsplash.com/photo-1544640808-32ca7251075b?auto=format&fit=crop&q=80&w=1200",
        content: "A dictionary can seem complex until students start making it themselves. The event demands students to research and build a dictionary while boosting their vocabulary.",
        color: "brand-gold"
      }
    ]
  },
  {
    id: "recitation",
    category: "Recitations & Storytelling",
    items: [
      {
        title: "Elocution",
        icon: MessageSquare,
        image: "https://images.unsplash.com/photo-1524178232363-1fb28f74b573?auto=format&fit=crop&q=80&w=1200",
        content: "Students practice expressive speech through poems, speeches, and literary recitation. This helps them fall in love with spoken language and appreciate its artistic components like literature and poetry, and its rhythm, tone, and expression.",
        color: "brand-crimson"
      },
      {
        title: "Storytelling Competitions",
        icon: History,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1200",
        content: "Students are encouraged to draft their own original stories and narrate them using voice modulation, gestures, and imagination. In the process, they improve their vocabulary, creativity, and presentation skills.",
        color: "brand-blue"
      },
      {
        title: "Declamation",
        icon: Users,
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200",
        content: "In the IX and X classes, students are assigned a famous personality and must imitate them. After which, they are assessed on the overall effectiveness of their performance.",
        color: "brand-gold"
      }
    ]
  },
  {
    id: "writing",
    category: "Writing & Creative Expression",
    items: [
      {
        title: "Slogan Writing",
        icon: PenTool,
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200",
        content: "Students are limited to single-line statements to communicate a strong, meaningful message. It massively improves their creative thinking and writing.",
        color: "brand-crimson"
      },
      {
        title: "Budding Authors Program",
        icon: FileEdit,
        image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&q=80&w=1200",
        content: "CBSE’s official Budding Authors Program is integrated into our school’s literary approach. Students write and submit original stories, and the best ones get published.",
        color: "brand-blue"
      },
      {
        title: "Creative Writing & Digital Painting",
        icon: Paintbrush,
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200",
        content: "Students create full-fledged stories and poems by combining language and visual arts. Integrated learning fosters creativity, self-expression, and storytelling abilities.",
        color: "brand-gold"
      },
      {
        title: "Poster Designing & Making",
        icon: Layers,
        image: "https://images.unsplash.com/photo-1547891269-0554ef5f6060?auto=format&fit=crop&q=80&w=1200",
        content: "Students design posters on the theme “Unity in Diversity.” It promotes harmony and inclusivity, while communicating a deep message artistically and visually.",
        color: "brand-blue"
      },
      {
        title: "Expression Series",
        icon: Quote,
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1200",
        content: "We provide CBSE’s official document that seeks their opinions on a range of topics. This easily inculcates writing skills in students.",
        color: "brand-crimson"
      }
    ]
  }
];

export function LiteraryEnrichment() {
  const [activeTab, setActiveTab] = useState<string>(activities[0].id);

  const activeCategory = activities.find(a => a.id === activeTab)!;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1491843330757-37443836d50f?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="Literary Hero"
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
              <Sparkles className="w-4 h-4" />
              Critical Thinking & Creativity
            </div>
            
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.95]">
              Literary & <br />
              <span className="text-brand-gold italic">Enrichment</span> Activities
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl">
              Engagement with literature and cognitive activities held on campus to improve students' critical thinking and creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Explorer Section */}
      <section className="py-24 px-6 sm:px-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto lg:flex gap-12 lg:gap-20">
          
          {/* Sticky Navigation Sidebar */}
          <aside className="lg:w-1/4 mb-12 lg:mb-0">
            <div className="sticky top-32 space-y-3">
              <div className="flex items-center gap-3 px-4 mb-6">
                <div className="w-1 h-4 bg-brand-gold rounded-full" />
                <h4 className="text-brand-navy/60 font-bold uppercase tracking-widest text-[10px]">Categories</h4>
              </div>

              {activities.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                    activeTab === cat.id 
                    ? "text-white shadow-lg translate-x-2" 
                    : "text-brand-navy hover:bg-white hover:shadow-sm border border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between relative z-10 font-bold text-base leading-tight">
                    <span>{cat.category}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeTab === cat.id ? "rotate-90 text-brand-gold" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                  </div>
                  {activeTab === cat.id && (
                    <motion.div 
                      layoutId="tabBackground"
                      className="absolute inset-0 bg-brand-navy"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}

              <div className="mt-10 p-8 bg-white rounded-[32px] border border-gray-100 shadow-sm">
                <Quote className="w-6 h-6 text-brand-gold mb-4" />
                <p className="text-brand-navy text-sm font-medium leading-relaxed italic opacity-80">
                  "Literature allows us to transcend our own boundaries and see the world through a thousand eyes."
                </p>
              </div>
            </div>
          </aside>

          {/* Dynamic Content Area */}
          <main className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-8 items-stretch"
              >
                {activeCategory.items.map((item) => (
                  <div 
                    key={item.title}
                    className="flex flex-col h-full rounded-[40px] overflow-hidden group bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                  >
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-navy/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <div className={`absolute top-6 left-6 p-2.5 rounded-xl backdrop-blur-md shadow-lg ${
                        item.color === 'brand-blue' ? 'bg-brand-blue/90' :
                        item.color === 'brand-gold' ? 'bg-brand-gold/90' :
                        'bg-brand-crimson/90'
                      } text-white`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <div className="p-8 sm:p-10 flex flex-col flex-grow">
                      <h3 className="font-heading text-2xl font-bold text-brand-navy mb-4 tracking-tight leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-text-medium leading-relaxed mb-8 opacity-70 flex-grow">
                        {item.content}
                      </p>
                      <div className={`h-1 w-12 rounded-full ${
                        item.color === 'brand-blue' ? 'bg-brand-blue' :
                        item.color === 'brand-gold' ? 'bg-brand-gold' :
                        'bg-brand-crimson'
                      } opacity-40 group-hover:opacity-100 transition-opacity`} />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </section>

      {/* Editorial Pull Quote */}
      <section className="py-32 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto rounded-[64px] bg-brand-navy p-12 sm:p-24 text-center relative overflow-hidden shadow-[0_50px_100px_rgba(15,31,70,0.2)]">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-crimson/10 rounded-full blur-[100px]" />
          
          <Quote className="w-16 h-16 text-brand-gold mx-auto mb-12 opacity-50" />
          
          <h2 className="font-heading text-4xl sm:text-6xl font-black text-white leading-tight mb-16 tracking-tighter">
            We provide specialized document access for a focus range of topics to <span className="text-brand-goldUnderline">inculcate writing skills</span> in every student.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
             <div className="flex items-center gap-3 text-white/40">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span className="uppercase text-xs font-bold tracking-widest">Slogan Writing</span>
             </div>
             <div className="flex items-center gap-3 text-white/40">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                <span className="uppercase text-xs font-bold tracking-widest">Poster Design</span>
             </div>
             <div className="flex items-center gap-3 text-white/40">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-crimson" />
                <span className="uppercase text-xs font-bold tracking-widest">Expression Series</span>
             </div>
          </div>
        </div>
      </section>

      {/* Academy Footer CTA */}
      <section className="py-24 px-6 sm:px-12 bg-brand-ivory/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
           <div>
              <h3 className="font-heading text-5xl font-bold text-brand-navy mb-6">Start Their Story.</h3>
              <p className="text-xl text-text-medium max-w-lg leading-relaxed">
                Connect with our admissions team to learn how our literary programs prepare students for a global future.
              </p>
           </div>
           <div className="flex flex-col sm:flex-row gap-6 lg:justify-end">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact" 
                className="px-12 py-6 bg-brand-crimson text-white font-bold rounded-2xl shadow-xl hover:shadow-brand-crimson/20 transition-all text-center"
              >
                Admission Enquiry
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/curriculum/pedagogy" 
                className="px-12 py-6 bg-white border border-gray-100 text-brand-navy font-bold rounded-2xl transition-all shadow-sm text-center"
              >
                View Teaching Methods
              </motion.a>
           </div>
        </div>
      </section>
    </div>
  );
}
