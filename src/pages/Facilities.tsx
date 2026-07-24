import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Bus, 
  ShieldCheck, 
  Heart, 
  Trophy, 
  Laptop, 
  Library, 
  Microscope, 
  Utensils, 
  Stethoscope, 
  Clock, 
  MapPin, 
  Phone,
  ChevronRight,
  Shield,
  Eye,
  Umbrella,
  Flame,
  Users
} from "lucide-react";
import { cn } from "../lib/utils";

const learningSpaces = [
  "500+ digitally enabled smart classrooms",
  "Well-stocked library with curated reading collections",
  "Computer lab with the latest hardware and software",
  "Dedicated Math Lab and Space Lab (Nambi Antariksha Kalakshetra)",
  "Fully equipped Physics, Chemistry, and Biology laboratories",
  "Audiovisual room and Step-N-Learn experiential learning space",
  "Art and craft rooms"
];

const wellnessFacilities = [
  { icon: Utensils, title: "In-house Kitchen", desc: "Hygienic, nutritious meals prepared in a spacious dining hall." },
  { icon: Clock, title: "Day Care Services", desc: "Secure and caring environment for our younger students." },
  { icon: Stethoscope, title: "On-campus Infirmary", desc: "Qualified nurses and on-call doctors for all medical needs." },
  { icon: ShieldCheck, title: "Clean Water", desc: "Safe, regularly tested drinking water points across 18 acres." }
];

const transportFeatures = [
  "GPS tracking with real-time updates",
  "CCTV cameras",
  "Speed governors",
  "Seat belts",
  "First-aid kit",
  "Chip-enabled student ID cards for live tracking"
];

const busRoutesData = [
  { 
    id: 1, 
    name: "Katamnallur Gate", 
    stops: ["Gorivegere Main Road", "Kajisonenahalli Main Road", "Kannamangala Main Rd", "Chaithanya Samarpan", "Sandeep Vihar", "Purva Manohar", "Seegehalli", "ChikkaBanahalli Road", "Honey Pool Villas", "DS Max Sangam Grand", "Suraksha Fairview Ville", "Golden Blossom"]
  },
  { 
    id: 2, 
    name: "Kadugodi", 
    stops: ["Kadugodi", "VS Reddy Colony", "MVJ College Road", "Alembric Urban Forest", "Hope Farm Circle", "Prestige Park View", "Channasandra", "Nagondahalli Road", "Immadihalli Road"]
  },
  { 
    id: 3, 
    name: "WhiteField", 
    stops: ["Sathya Sai Layout", "Prestige White Meadows", "Disha Courtyard", "ECC Road", "Borewell Road", "Prestige Waterford", "Pattandur Agrahara", "Prestige Bougainvillea", "Sri Raghavendra Tiara", "Sumadhura Silver Ripples", "Casa Gopalan", "Sumadhura Aanandham", "Brigade Cosmopolis", "Sobha Rose", "Incor Carmel Heights", "Hagadur Circle"]
  },
  { 
    id: 4, 
    name: "HAL Marathalli", 
    stops: ["Murgeshpalya", "Basavanagar", "Yemlur Junction", "Epsilon Residential Villas", "Divyashree Apartment", "Marthalli Junction", "Purva Fountain Square", "Rohan Vasantham", "Kauvery Hospital", "Thubarahalli Bus Stop", "Spectra Cypress", "Mahaveer Maple", "DSR Vertex & Apex", "Siddapura Dmart", "Sumadhura LNR Lake Breeze Apartment", "Parimala Sun Ridge", "Nallurhalli Gate", "Ramgondahalli", "Varthur Kodi"]
  },
  { 
    id: 5, 
    name: "Mahadevapura", 
    stops: ["Singayyanapalya", "Maheshwara Temple Road", "Phoenix Market City", "Garudachar Palya", "Hoodi Circle", "Prestige Shantinikethan", "Seetharamapalya", "MTB Sumadhura Apartment", "Graphite India Junction", "Chinnappanahalli Main Road", "Gopalan Splendor Habitat", "AECS Layout", "Brookfield", "Kundalahalli", "Nallur Halli"]
  },
  { 
    id: 6, 
    name: "MunneKolala", 
    stops: ["Vagdevi School Road", "Sai Baba Temple Road", "Vibgyor School Road"]
  },
  { 
    id: 7, 
    name: "Kadubeesanahalli", 
    stops: ["Kadubeesanahalli", "Boganahalli", "JP Morgan", "New Horizon College Road", "Bellandur", "Panathur", "Dodda Kannalli Road", "Sobha Dream Acres", "Balagere Village", "Hilife Pearl", "Eco Life", "SSVR Laurel", "SSVR Tridax", "Lakefield Homes"]
  },
  { 
    id: 8, 
    name: "Varthur", 
    stops: ["Edgah Road", "Rajabhavi Road", "Sorhunase Road", "Madhuranagar 1st, 2nd & 3rd Stage", "Valepura", "Muthsandra", "Patel Layout Varthur", "Varthur Prakash Layout", "Candeur Rise", "Brigade Cornerstone Utopia", "Myhna Maple", "Candeur Signature", "Prestige Lakeside Habitat", "Halasahalli"]
  },
  { 
    id: 9, 
    name: "Gunjur", 
    stops: ["Gunjur Palya", "DS Max Sharewood", "Mohan Altura", "Evershinine Vrindavn", "Mythri Mithila", "BS Green", "Myhna Meadows", "Myhna Heights", "Candeur Landmark", "Gunjur", "Hosahalli", "Thippasandra"]
  },
  { 
    id: 10, 
    name: "HSR Layout", 
    stops: ["HSR Layout", "Agara", "Ibbalur Junction", "Sunsity Apartment", "Haralur Cross", "Kasavanahalli", "Salarpuria Sanctity", "Salarpuria Sattva Senorita", "Choodasandra Cross", "Dodda Kannahalli", "Carmelaram", "Chikka Bellandur", "Kodathi", "Mullur"]
  },
  { 
    id: 11, 
    name: "Sarjapur", 
    stops: ["Billapura", "Sarjapur", "Thindlu", "Dodda Thimmasandra", "Mahal Chodenahalli", "Mugalur", "Kugur", "Kamanahalli Circle", "Gonigettapura", "Bellikere", "Janthagondanahalli", "Signature Meadows"]
  },
  { 
    id: 12, 
    name: "Dommasandra", 
    stops: ["Yamare", "Dommasandra Circle", "TC Halli", "Chambenahalli", "V Kallhalli", "Ittangur", "Prestige City", "Kumari Oakville", "Ashish Green", "Adithya Homes", "Signature Crest", "The Classic Featherlite Sanctuary", "Neriga", "Kathriguppe"]
  },
  { 
    id: 13, 
    name: "Chikka Tirupati", 
    stops: ["Chikka Tirupati", "Empyrean Villas", "Yattakodi", "Kalkunte Agrahara", "Anugondanahally", "Muthkur", "Devangonthi", "Dunnasandra"]
  },
  { 
    id: 14, 
    name: "Hoskote", 
    stops: ["Hoskote", "Mallasandra", "Nadavathi", "Koralur", "Thirumalashettyhally", "Samethanahalli", "Harohalli Hoskote Road", "Chikkathirupathi Road", "Kadugodi Road", "Immadihalli Road", "Hoodi Main Road", "Borewell Road", "K R Puram", "Kundanahalli", "Varthur Road", "Marathahalli Main Road", "Doddanekkundi Main Road", "Belthur Main Road", "Whitefield", "Budigere Cross"]
  }
];

const safetyLayers = [
  { 
    title: "Layered Security", 
    icon: Shield,
    points: ["24/7 Security guarding", "Restricted visitor protocols", "Mandatory gate passes"]
  },
  { 
    title: "Digital Vigilance", 
    icon: Eye,
    points: ["Campus-wide CCTV", "Remote monitoring", "ID card tracking"]
  },
  { 
    title: "Health & Care", 
    icon: Stethoscope,
    points: ["Full-time counsellors", "Qualified nursing staff", "Social-emotional support"]
  },
  { 
    title: "Infrastructure Safety", 
    icon: Flame,
    points: ["Fire safety certification", "Fumigation fortnightly", "Disaster management drills"]
  }
];

export function Facilities() {
  const [activeRouteIndex, setActiveRouteIndex] = useState(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08759dfc3f0?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="Vishwa Vidyapeeth Campus" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/60 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-brand-gold font-black uppercase tracking-widest text-[10px] mb-6 px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <MapPin className="w-4 h-4" /> 18 Acre Serene Campus
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
              A Campus Built <br />
              <span className="text-brand-gold italic">Around Your Child</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed border-l-4 border-brand-gold pl-6 text-left">
              Spread across a low-pollution belt in Varthur, our campus is laid out in dedicated blocks that quietly nurture community, curiosity, and bright age-appropriate learning.
            </p>
          </motion.div>

          {/* Compact Quick Navigation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {[
              { id: "learning", label: "Learning", icon: BookOpen },
              { id: "wellness", label: "Wellness", icon: Heart },
              { id: "transport", label: "Transport", icon: Bus },
              { id: "safety", label: "Safety", icon: ShieldCheck }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <tab.icon className="w-3 h-3 text-brand-gold" />
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Spacing Adjuster */}
      <div className="h-px w-full bg-zinc-100" />

      {/* Learning Spaces */}
      <section id="learning" className="py-32 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-brand-crimson font-black uppercase tracking-widest text-[10px] mb-4">Academic Infrastructure</div>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-8">Learning <span className="text-brand-gold italic">Spaces</span></h2>
              <div className="space-y-4">
                {learningSpaces.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                    <span className="text-brand-navy font-bold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover" 
                  alt="Classroom" 
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-gold rounded-[40px] -z-10 mix-blend-multiply opacity-20 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section id="wellness" className="py-32 px-6 sm:px-12 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-6">Wellness & Daily Life</h2>
            <p className="text-neutral-600 italic">"Health and care are the foundations of effective education."</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wellnessFacilities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[40px] border border-zinc-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-brand-navy text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Activity Spaces Sub-section */}
          <div className="mt-32 bg-brand-navy rounded-[60px] overflow-hidden text-white">
            <div className="grid lg:grid-cols-2">
              <div className="p-16 flex flex-col justify-center">
                <h3 className="font-heading text-3xl font-bold mb-8">Sports & Activity Spaces</h3>
                <ul className="space-y-6">
                  {[
                    "Expansive outdoor grounds for cricket, football, and athletics",
                    "Indoor games rooms for chess, carrom, table tennis",
                    "Dedicated spaces for yoga, taekwondo, and skating"
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                      <span className="text-white/80 font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1000" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  alt="Sports Ground" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Transport with Route Tabs */}
      <section id="transport" className="py-32 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-4">Logistics & Safety</div>
            <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-4">School Transport</h2>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-crimson mb-8">Safe, tracked, and on time - every single day</h3>
            <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
              <p>
                Our fleet of <span className="font-bold text-brand-navy">GPS-enabled school buses</span> connects every major neighbourhood across Bangalore to our campus through <span className="font-bold text-brand-navy">14 carefully planned routes</span> for AY 2025–26.
              </p>
              <p>
                Every bus is staffed with trained drivers and a lady attendant, and most of our teachers also commute by bus - giving you a layer of supervision you won't easily find elsewhere.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
            <div className="bg-zinc-50 p-12 rounded-[60px] border border-zinc-100 h-full">
              <h4 className="font-bold text-brand-navy mb-8 text-xl">Every bus is equipped with:</h4>
              <div className="grid gap-4">
                {[
                  "GPS tracking with real-time updates",
                  "CCTV cameras",
                  "Speed governors",
                  "Seat belts",
                  "First-aid kit",
                  "Chip-enabled student ID cards for live tracking"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm font-bold text-brand-navy p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-brand-gold" />
                    {feature}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-neutral-500 italic">
                We continuously review routes for travel time efficiency, so your child spends less time on the road and more time at home.
              </p>
            </div>

            <div className="bg-brand-navy p-12 rounded-[60px] text-white h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h4 className="font-bold text-brand-gold mb-6 text-xl">A note for parents</h4>
                <div className="space-y-6 text-white/80 text-base leading-relaxed">
                  <p>
                    Transport is available to designated common pick-up points only — door-step service is not provided.
                  </p>
                  <p>
                    Stops may vary slightly based on your curriculum choice. Please confirm your route with our Transport Coordinator before finalising admission.
                  </p>
                </div>
                <div className="mt-10 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
                  <p className="text-[10px] font-black uppercase text-brand-gold mb-2 tracking-widest">Transport Coordinator</p>
                  <a href="tel:+917022009757" className="flex items-center gap-3 text-2xl font-bold text-white hover:text-brand-gold transition-colors">
                    <Phone className="w-6 h-6" /> +91 70220 09757
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] border border-zinc-200 shadow-2xl overflow-hidden flex flex-col h-[700px]">
            <div className="bg-brand-navy p-8 text-white shrink-0">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-bold text-xl flex items-center gap-3">
                  <Bus className="w-6 h-6 text-brand-gold" />
                  Detailed Bus Routes (AY 2025-26)
                </h3>
                <div className="text-[10px] font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10 text-brand-gold">
                  14 Active Routes
                </div>
              </div>
              <p className="text-white/60 text-[10px] mt-2 uppercase tracking-widest">Select a route below to view pick-up and drop points</p>
            </div>
                
                <div className="flex flex-1 overflow-hidden">
                  {/* Route Selector Sidebar */}
                  <div className="w-1/3 border-r border-zinc-100 overflow-y-auto bg-zinc-50/50 scrollbar-hide">
                    {busRoutesData.map((route, idx) => (
                      <button
                        key={route.id}
                        onClick={() => setActiveRouteIndex(idx)}
                        className={cn(
                          "w-full text-left p-6 transition-all border-l-4",
                          activeRouteIndex === idx
                            ? "bg-white border-brand-crimson shadow-sm"
                            : "border-transparent hover:bg-zinc-100/50"
                        )}
                      >
                        <div className={cn(
                          "text-[10px] font-black uppercase tracking-widest mb-1",
                          activeRouteIndex === idx ? "text-brand-crimson" : "text-zinc-400"
                        )}>
                          Route No {route.id}
                        </div>
                        <div className={cn(
                          "font-bold text-sm leading-tight",
                          activeRouteIndex === idx ? "text-brand-navy" : "text-neutral-500"
                        )}>
                          {route.name}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Route Detail Content */}
                  <div className="flex-1 overflow-y-auto p-8 relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeRouteIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="mb-8">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold mb-2">Coverage Area</h4>
                          <h3 className="text-2xl font-bold text-brand-navy">{busRoutesData[activeRouteIndex].name}</h3>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-4">Pick Up & Drop Points</h4>
                          {busRoutesData[activeRouteIndex].stops.map((stop, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 group hover:border-brand-crimson/20 hover:bg-white transition-all">
                              <div className="shrink-0 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-[10px] font-bold text-brand-navy border border-zinc-200">
                                {i + 1}
                              </div>
                              <span className="text-sm text-neutral-600 font-medium group-hover:text-brand-navy transition-colors">{stop}</span>
                            </div>
                          ))}
                        </div>

                        {busRoutesData[activeRouteIndex].stops.length === 0 && (
                          <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
                            <Bus className="w-12 h-12 mb-4" />
                            <p className="text-sm font-medium">Route details being updated.<br/>Please contact coordinator.</p>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </section>

      {/* Safety & Security - Verbatim PDF Content */}
      <section id="safety" className="py-24 px-6 sm:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-4">Internal Safety Audit</div>
              <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-8 leading-tight">Safety & Security</h2>
              <p className="text-xl text-neutral-600 leading-relaxed font-medium">
                Safety at Vishwa Vidyapeeth isn't a single policy — it's a layered system that touches every part of your child's day, from the moment they enter the gate to the second they reach home.
              </p>
            </motion.div>
          </div>

          <div className="space-y-40">
            {/* 01. Protocols & Surveillance */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div className="relative pl-8 border-l-4 border-brand-crimson">
                  <span className="absolute -left-4 -top-8 text-8xl font-black text-zinc-50 -z-10">01</span>
                  <h3 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-3">
                    <Shield className="text-brand-crimson w-6 h-6" />
                    Entry, Exit & Visitor Protocols
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    A trained security team monitors all entry and exit points 24/7. Visitors are admitted only with a valid Visitor Pass; prior appointments are mandatory except in medical emergencies. For early dismissals, a Gate Pass is issued only after approval from the Principal, Class Teacher, and School Office. If a parent cannot come, written authorisation via email or SMS is required.
                  </p>
                </div>
                <div className="relative pl-8 border-l-4 border-brand-gold">
                  <h3 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-3">
                    <Eye className="text-brand-gold w-6 h-6" />
                    24/7 CCTV Surveillance
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Cameras cover all entry/exit points, corridors, staircases, boundary walls, toilet entry zones, and play areas. Footage is monitored on-campus during school hours and remotely by senior leadership.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-[60px] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover" 
                    alt="Security Monitoring" 
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply" />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-crimson rounded-full -z-10 mix-blend-multiply opacity-5 animate-pulse" />
              </motion.div>
            </div>

            {/* 02. Health & Student Measures */}
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:order-2 space-y-12"
              >
                <div className="relative pl-8 border-l-4 border-brand-navy">
                  <span className="absolute -left-4 -top-8 text-8xl font-black text-zinc-50 -z-10">02</span>
                  <h3 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-3">
                    <Stethoscope className="text-brand-navy w-6 h-6" />
                    On-Campus Infirmary
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    A well-equipped infirmary staffed with a qualified nurse and on-call doctors handles first aid and minor concerns. Parents are informed immediately for medical issues; emergencies are escalated to the nearest hospital with parental consent.
                  </p>
                </div>
                <div className="bg-zinc-50 p-10 rounded-[40px] border border-zinc-100">
                  <h3 className="text-xl font-bold text-brand-navy mb-8">Student Safety Measures</h3>
                  <ul className="grid gap-4">
                    {[
                      "Mandatory school-issued ID cards for every student and staff member",
                      "Strict recruitment checks and verified records for all staff",
                      "Female security and attendants supervise during sports with male coaches",
                      "Teachers supervise all snack and lunch breaks",
                      "Active Anti-Sexual Harassment Committee (POCSO Matters)",
                      "Full-time counsellor for emotional and personal well-being",
                      "Awareness sessions on online safety and responsible social media",
                      "Strict confidentiality of student and family information"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-xs font-bold text-brand-navy uppercase tracking-tight">
                        <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:order-1 relative"
              >
                <div className="aspect-[3/4] rounded-[60px] overflow-hidden shadow-2xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt="Student Welfare" 
                  />
                  <div className="absolute inset-x-8 bottom-8 p-10 bg-white/10 backdrop-blur-md rounded-[32px] border border-white/20 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                     <p className="text-sm font-bold">Comprehensive Care</p>
                     <p className="text-xs text-white/70 italic">Qualified full-time medical and emotional support.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 03. Specialized Safety Grid */}
            <div className="space-y-12">
               <div className="flex items-end gap-6 mb-16">
                  <span className="text-7xl font-black text-zinc-100 leading-none">03</span>
                  <div className="pb-2">
                    <h3 className="text-3xl font-bold text-brand-navy">Environment & Operations</h3>
                    <div className="h-1 w-24 bg-brand-crimson mt-2" />
                  </div>
               </div>
               
               <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Washrooms & Hygiene",
                    desc: "Pre-Primary children are always escorted by female staff. Dedicated female attendants supervise washrooms. Toilets are cleaned regularly and campus is fumigated fortnightly.",
                    icon: Utensils,
                    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                  },
                  {
                    title: "Infrastructure Safety",
                    desc: "Fire extinguishers in every corridor. Safe drinking water with regular testing. Proper waste disposal. Clearly marked emergency exits on every floor.",
                    icon: Flame,
                    img: "https://images.unsplash.com/photo-1516054817193-41f66a1a91fb?auto=format&fit=crop&q=80&w=800"
                  },
                  {
                    title: "Disaster Management",
                    desc: "Complete preparedness programme with regular fire and earthquake drills, technical support from local authorities, and displayed evacuation plans.",
                    icon: ShieldCheck,
                    img: "https://images.unsplash.com/photo-1502781259889-389f9525cf32?auto=format&fit=crop&q=80&w=800"
                  }
                ].map((card, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-[48px] overflow-hidden border border-zinc-100 flex flex-col group hover:shadow-2xl transition-all h-full"
                  >
                    <div className="h-64 overflow-hidden relative">
                      <img src={card.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={card.title} />
                      <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-navy shadow-lg">
                        <card.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="p-10 flex-1">
                      <h4 className="text-xl font-bold text-brand-navy mb-4">{card.title}</h4>
                      <p className="text-sm text-neutral-500 leading-relaxed font-medium">{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 04. Dispersal & Emotional Safety */}
            <div className="grid lg:grid-cols-2 gap-20 items-center bg-zinc-50 rounded-[60px] p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                 <div className="aspect-square rounded-[48px] overflow-hidden shadow-2xl border-8 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1491843351663-f95982f9b68c?auto=format&fit=crop&q=80&w=1000" 
                      className="w-full h-full object-cover" 
                      alt="Dispersal Safety" 
                    />
                 </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12 relative z-10"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-navy text-white text-[9px] font-black uppercase tracking-widest rounded-full mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                    Verified Dispersal
                  </div>
                  <h3 className="text-3xl font-bold text-brand-navy mb-6">Dispersal Safety</h3>
                  <p className="text-neutral-600 leading-relaxed font-medium italic">
                    "Students are released only after verifying the identity of the parent or registered guardian. At least one lady staff member stays on campus until every child leaves."
                  </p>
                  <p className="text-neutral-500 text-sm mt-4">Teachers personally escort students to their buses or private vehicles.</p>
                </div>
                
                <div className="p-8 bg-brand-gold/10 rounded-3xl border border-brand-gold/20">
                  <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                    <Umbrella className="text-brand-gold w-5 h-5" />
                    Social & Emotional Safety
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Academic success rests on emotional well-being. From Pre-Primary upwards, students receive age-appropriate lessons on personal safety. Counsellors offer regular guidance and professional workshops for parents.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section - Verbatim PDF Content */}
      <section className="py-32 px-6 sm:px-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-crimson" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-brand-crimson font-black uppercase tracking-widest text-[10px] mb-4">Joint Responsibility</div>
              <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-8">A Partnership <br/><span className="text-brand-gold italic">with Parents</span></h2>
              <p className="text-xl text-neutral-500 font-medium">
                Safety is a two-way responsibility. We ask parents to support us by:
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
            {[
              "Uploading a clear photograph on the school diary and app for pick-up verification",
              "Sending the child's ID card or an authorisation letter (with valid ID proof) if someone else collects them",
              "Avoiding unscheduled visits to friends' or relatives' homes after the bus drop",
              "Ensuring the ID card is worn every single day",
              "Carpooling for PTMs, Annual Day, and large events",
              "Avoiding parking in front of the main gate"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex gap-6 p-8 rounded-[32px] bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-brand-gold/30 hover:shadow-xl transition-all"
              >
                <div className="shrink-0 w-10 h-10 rounded-2xl bg-white shadow-sm border border-zinc-100 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <p className="text-sm font-bold text-brand-navy/80 leading-relaxed flex-1">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-12 sm:p-20 rounded-[60px] border border-brand-gold/20 bg-brand-ivory relative overflow-hidden shadow-sm"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-1/4 -translate-y-1/4">
              <ShieldCheck className="w-64 h-64 text-brand-navy" />
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-brand-gold/20 mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson animate-pulse" />
                <span className="text-[10px] font-black uppercase text-brand-navy tracking-widest">Administrative Policy</span>
              </div>
              
              <h3 className="text-2xl sm:text-4xl font-bold text-brand-navy mb-12 leading-[1.3] italic opacity-95">
                "Vishwa Vidyapeeth maintains a <span className="text-brand-crimson">zero-tolerance policy</span> on safety, and we ask for the same partnership, patience, and respect from parents — especially towards our security and support staff."
              </h3>
              
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Patience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-crimson" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Respect</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-navy" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Protection</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-brand-navy rounded-[60px] p-12 sm:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full" />
            <div className="relative z-10">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-8">Experience our campus</h2>
              <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                The best way to understand our facilities and warm environment is to walk through the campus. We'd love to show you around.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto px-12 py-5 bg-brand-crimson text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-brand-crimson-hover transition-all shadow-xl hover:-translate-y-1">
                  Book a Campus Tour
                </button>
                <button className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/20 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all">
                  Contact Admissions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
