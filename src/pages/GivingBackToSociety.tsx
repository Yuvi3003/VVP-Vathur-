import { motion } from "motion/react";
import { 
  Heart, 
  Droplets, 
  Sprout, 
  Trash2, 
  Smartphone as Bus, 
  UtensilsCrossed,
  Wind,
  CheckCircle2,
  Users,
  Brush,
  Volume2
} from "lucide-react";

const programs = [
  {
    id: "annadata",
    title: "Annadata Sukhibhava",
    subtitle: "Blessings to the Food Provider",
    description: "Literally meaning 'may the provider of food be blessed with happiness,' this program aims to instill gratitude and respect for farmers (food providers). This is an extension of the United Nations' Zero Hunger Challenge, focusing on the main Sustainable Development Goals.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200",
    activities: [
      {
        name: "Collection of raw materials",
        details: "Minimal Quantities (Pool) | Once every 15 days | Class Rotation"
      },
      {
        name: "On-campus food cooking & distribution",
        details: "Every Saturday | Served to needy people | Parent volunteering"
      }
    ],
    icon: UtensilsCrossed,
    color: "bg-brand-gold/10",
    accent: "text-brand-gold"
  },
  {
    id: "arivu",
    title: "Arivu Program",
    subtitle: "Health & Well-being",
    description: "This program takes care of the school bus drivers' health. The Yoga teachers undertake sessions for all drivers in the morning hours, after they are free from their bus routines. At VVP, we believe in the growth of everyone involved with the school. Bus drivers are included in all on-campus events.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
    activities: [
      {
        name: "Morning Yoga Sessions",
        details: "Conducted by Yoga teachers for drivers after their morning routes."
      },
      {
        name: "Inclusive Culture",
        details: "Drivers participate as integral members of the school in all on-campus events."
      }
    ],
    icon: Bus,
    color: "bg-brand-blue/10",
    accent: "text-brand-blue"
  },
  {
    id: "save-water",
    title: "Save Water, Live Better",
    subtitle: "Environmental Awareness",
    description: "The 'Save Water, Live Better' campaign was launched by Vishwa Vidyapeeth on 21st September, 2016. It emphasizes the importance of water conservation. Students are instructed (with visual aids and real-life exemplars) and encouraged to develop unique water conservation methods. To further raise awareness, a cyclothon was organized on Gandhi Jayanti that year.",
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=1200",
    activities: [
      {
        name: "Conservation Methods",
        details: "Students create and implement unique water-saving techniques."
      },
      {
        name: "Awareness Cyclothon",
        details: "Organized on Gandhi Jayanti to promote the message of conservation."
      }
    ],
    icon: Droplets,
    color: "bg-cyan-50",
    accent: "text-cyan-600"
  },
  {
    id: "swachh-bharat",
    title: "Swachh Bharat",
    subtitle: "Clean India Mission",
    description: "VVP proudly proclaims that it is a part of the Indian government's Clean India Mission. The school conducts various activities to foster cleanliness and responsibility among students.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=1200",
    icon: Wind,
    color: "bg-emerald-50",
    accent: "text-emerald-600",
    grid: [
      {
        category: "Creative & Life Skills",
        items: ["Making masks", "Making aprons"],
        icon: Brush
      },
      {
        category: "Community Service",
        items: ["Cleaning the school garden", "Helping the nurse at the infirmary"],
        icon: Users
      },
      {
        category: "Awareness Campaigns",
        items: ["Posters on hygiene etiquette", "Judicious use signs", "Energy saving awareness"],
        icon: Volume2
      },
      {
        category: "Gardening & Plantation",
        items: ["Tree planting", "Sowing seeds", "Growing Methi, Ragi, etc."],
        icon: Sprout
      }
    ]
  },
  {
    id: "itc-drive",
    title: "ITC Drive",
    subtitle: "Waste Segregation",
    description: "Vishwa Vidyapeeth has collaborated with ITC to encourage students and parents to segregate dry waste. The motivation behind this initiative is to give children attractive stationery items (colourful notebooks, pens, pencils, erasers, and more) in exchange for dry waste.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200",
    activities: [
      {
        name: "Dry Waste Segregation",
        details: "Encouraging students and parents to participate in waste management."
      },
      {
        name: "Incentive Scheme",
        details: "Attractive stationery provided in exchange for collected dry waste."
      }
    ],
    icon: Trash2,
    color: "bg-brand-crimson/10",
    accent: "text-brand-crimson"
  }
];

export function GivingBackToSociety() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Giving Back" 
          />
          <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold mb-6 uppercase tracking-widest border border-brand-gold/30"
          >
            <Heart className="w-4 h-4" /> Social Responsibility
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl sm:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Giving Back <span className="text-brand-gold">To Society</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
          >
            Since Vishwa Vidyapeeth is an endowment of a trust, we are strongly dedicated to preparing students to give back to society. Our unique programs encourage students to enter the field and give back to society. We want our students to experience the emotion of 'joy' by giving.
          </motion.p>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto space-y-32">
          {programs.map((program, i) => (
            <div key={program.id} id={program.id}>
              <div className="flex flex-col items-center text-center w-full mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8 flex flex-col items-center w-full"
                >
                  <div>
                    <h3 className={`text-sm font-black uppercase tracking-[0.25em] ${program.accent} mb-3`}>
                      {program.subtitle}
                    </h3>
                    <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy tracking-tight">
                      {program.title}
                    </h2>
                  </div>

                  <p className="text-xl text-text-medium leading-relaxed max-w-3xl mx-auto">
                    {program.description}
                  </p>

                  <div className="w-full relative group px-6 md:px-[116px]">
                    <div className="absolute inset-x-6 md:inset-x-[116px] inset-y-0 bg-brand-gold -rotate-1 rounded-[60px] opacity-10 group-hover:rotate-0 transition-transform duration-500" />
                    <div className="relative aspect-[16/9] rounded-[40px] sm:rounded-[60px] overflow-hidden shadow-2xl">
                      <img 
                        src={program.image} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                        alt={program.title} 
                      />
                    </div>
                  </div>

                  <div className={`w-full grid gap-6 pt-8 ${program.grid ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'}`}>
                    {program.activities && program.activities.map((activity, idx) => (
                      <div key={idx} className="flex flex-col items-center p-8 rounded-[40px] bg-zinc-50 border border-zinc-100 text-center">
                        <CheckCircle2 className={`w-8 h-8 ${program.accent} mb-4`} />
                        <p className="font-bold text-brand-navy text-lg mb-2">{activity.name}</p>
                        <p className="text-base text-text-medium opacity-70 leading-relaxed">{activity.details}</p>
                      </div>
                    ))}

                    {program.grid && program.grid.map((group, idx) => (
                      <div key={idx} className="p-8 rounded-[40px] bg-zinc-50 border border-zinc-100 text-center flex flex-col items-center group/item hover:bg-white hover:shadow-xl transition-all duration-300">
                        <div className={`w-12 h-12 rounded-2xl ${program.color} flex items-center justify-center ${program.accent} mb-6 group-hover/item:scale-110 transition-transform`}>
                          {group.icon ? <group.icon className="w-6 h-6" /> : <div className={`w-1.5 h-1.5 rounded-full ${program.accent.replace('text-', 'bg-')}`} />}
                        </div>
                        <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] ${program.accent} mb-6`}>
                          {group.category}
                        </h4>
                        <ul className="space-y-3">
                          {group.items.map((item, idy) => (
                            <li key={idy} className="text-sm text-brand-navy font-semibold flex items-center justify-center gap-2">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-crimson rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <UtensilsCrossed className="w-16 h-16 text-brand-gold mx-auto mb-10 opacity-50" />
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight italic">
            "We want our students to experience the emotion of <span className="text-brand-gold">'joy'</span> by giving."
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-crimson rounded-[60px] p-12 sm:p-20 relative overflow-hidden text-center sm:text-left">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 hidden lg:block">
               <Users className="w-full h-full text-white" />
            </div>
            
            <div className="relative z-10 max-w-xl">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Join our mission of <span className="text-brand-gold">giving back.</span>
              </h2>
              <p className="text-lg text-white/80 mb-10">
                Participation in our social programs is open to students, parents, and community members. Let's make a difference together.
              </p>
              <button className="px-10 py-5 rounded-full bg-white text-brand-crimson font-bold hover:bg-brand-gold hover:text-white transition-all transform hover:-translate-y-1 shadow-xl">
                Get Involved Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
