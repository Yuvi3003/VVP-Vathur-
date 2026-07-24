import { cn } from "../lib/utils";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  Sprout, 
  Brush, 
  Hammer, 
  ShieldCheck, 
  Mic2, 
  Utensils, 
  Palette, 
  Music, 
  Theater,
  Trophy,
  Users,
  Flag,
  Target,
  Rocket,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Volume2,
  Zap,
  Award,
  HeartHandshake,
  Home,
  Sun,
  Globe,
  Building2
} from "lucide-react";

const dashaPrabodha = [
  { 
    id: 1, 
    title: "Bhagavad Gita, Vedas and Upanishads", 
    subtitle: "वेदोपनिषत् गीताध्यानम् च", 
    icon: Heart,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 2, 
    title: "Organic Farming", 
    subtitle: "कृषि कौशल्यम्", 
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 3, 
    title: "Clay Modeling", 
    subtitle: "मृत् कौशल्यम्", 
    icon: Brush,
    image: "https://images.unsplash.com/photo-1565191999001-551c187427bb?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 4, 
    title: "Woodwork", 
    subtitle: "काष्ठ कौशल्यम्", 
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 5, 
    title: "Taekwondo", 
    subtitle: "आत्मरक्षण कौशल्यम्", 
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 6, 
    title: "Public Speaking Skills", 
    subtitle: "वाक् कौशल्यम्", 
    icon: Mic2,
    image: "https://images.unsplash.com/photo-1475721027187-402ad2989a3b?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 7, 
    title: "Cooking", 
    subtitle: "पाक कौशल्यम्", 
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 8, 
    title: "Art Education", 
    subtitle: "कला कौशल्यम्", 
    icon: Palette,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 9, 
    title: "Music", 
    subtitle: "सङ्गीत कौशल्यम्", 
    icon: Music,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 10, 
    title: "Theatre", 
    subtitle: "नाठक कौशल्यम्", 
    icon: Theater,
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800"
  },
];

const houses = [
  {
    name: "House Atri",
    sage: "Sage Atri",
    title: "The Light of Yellow",
    color: "#FFD700", // Bright Yellow
    textColor: "text-brand-navy",
    description: "Bathed in the brilliance of yellow, House Atri takes its name from the revered Sage Atri, a symbol of humility, wisdom, and enlightenment. Just as sunlight nurtures life, members of House Atri illuminate the school with their curiosity, optimism, and commitment to learning. Here, every student is encouraged to seek knowledge with an open mind and a humble heart, striving for personal and collective excellence."
  },
  {
    name: "House Bharadwaja",
    sage: "Sage Bharadwaja",
    title: "The Flame of Red",
    color: "#9E1C22", // Crimson Red
    textColor: "text-white",
    description: "Radiating the vibrant energy of red, House Bharadwaja is inspired by the sage known for his boundless curiosity and inventive spirit. It symbolizes passion, strength, and continuous search for knowledge. Students approach challenges with courage, creativity, and enthusiasm, mirroring the transformative power of a flame."
  },
  {
    name: "House Vishwamitra",
    sage: "Sage Vishwamitra",
    title: "The Strength of White",
    color: "#FFFFFF", // Pure White
    textColor: "text-brand-navy",
    description: "Represented by the colour white, House Vishwamitra reflects purity, unity, and the courage to lead with integrity. This house encourages members to embark on their own journeys of growth and resilience, building a strong foundation of character and purpose."
  },
  {
    name: "House Vasista",
    sage: "Sage Vasista",
    title: "The Glow of Orange",
    color: "#F6A33D", // Vibrant Orange
    textColor: "text-brand-navy",
    description: "Orange represents House Vasista, symbolizing creativity and the warmth of community. Inspired by the sage’s wisdom and deep harmony with nature, this house champions eco-consciousness, empathy, and holistic well-being, radiating a glow that inspires everyone around."
  }
];

const clubs = [
  { name: "Public Speaking Club", icon: Mic2, image: "https://images.unsplash.com/photo-1475721027187-402ad2989a3b?auto=format&fit=crop&q=80&w=800" },
  { name: "Cookery Club", icon: Utensils, image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" },
  { name: "Organic Farming Club", icon: Sprout, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" },
  { name: "Cultural & Drama Theatre Club", icon: Theater, image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800" },
  { name: "Eco Club", icon: Sprout, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" },
  { name: "Quiz Club", icon: Sparkles, image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=800" },
  { name: "Green Guardians Club", icon: ShieldCheck, image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" },
  { name: "Brave Hearts League", icon: Heart, image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" },
  { name: "Innovation & Entrepreneurship Club", icon: Rocket, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" },
  { name: "Young Patriots Club", icon: Flag, image: "https://images.unsplash.com/photo-1532375811409-ca6ad8819864?auto=format&fit=crop&q=80&w=800" },
];

const activitiesData = [
  { title: "Nutrition Week", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800" },
  { title: "Field Trips", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800" },
  { title: "Training on Band Team", image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800" },
  { title: "Kannada Prajatantram", image: "https://images.unsplash.com/photo-1532375811409-ca6ad8819864?auto=format&fit=crop&q=80&w=1200" },
  { title: "Father's Day Celebration", image: "https://images.unsplash.com/photo-1484981184820-2e84ea0af397?auto=format&fit=crop&q=80&w=800" },
  { title: "Yoga for Self & Society", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" },
  { title: "Bootcamp", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" },
  { title: "Hindi Diwas Celebration", image: "https://images.unsplash.com/photo-1532188978303-4bfac2421d34?auto=format&fit=crop&q=80&w=800" },
  { title: "Sanskrit Diwas Celebration", image: "https://images.unsplash.com/photo-1545670723-196ed095498a?auto=format&fit=crop&q=80&w=800" },
  { title: "Awareness on Environment Day", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" },
];

const competitionsData = [
  { title: "Manak Inspire Awards", label: "Idea Competition", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" },
  { title: "Intra School Competition", label: "House Programmes", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" },
  { title: "Inter School Competition", label: "Competitive", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" },
  { title: "Aptitude Based Competitions", label: "Intellectual", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" },
  { title: "CBSE Games", label: "National Level", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800" },
];

const councilMembers = [
  { name: "Siddhant Sharma", role: "Head Boy", icon: Users, image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800" },
  { name: "Aryan Reddy", role: "Sports Captain", icon: Trophy, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
  { name: "Priya Menon", role: "Cultural Head", icon: Palette, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" },
  { name: "Kunal Singh", role: "Discipline Head", icon: ShieldCheck, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" },
  { name: "Meera Gupta", role: "Health & Safety", icon: Heart, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800" },
  { name: "Vikram Malhotra", role: "House Captain", icon: Flag, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
  { name: "Arjun Das", role: "Academic Secretary", icon: Target, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" },
  { name: "Ishita Kapoor", role: "Eco-Captain", icon: Sprout, image: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=800" },
  { name: "Kabir Singh", role: "Technology Head", icon: Zap, image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=800" },
  { name: "Ananya Roy", role: "Literary Head", icon: Mic2, image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=800" },
];

function CouncilSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPossibleIndices = Math.max(0, councilMembers.length - itemsToShow);

  const next = () => {
    setStartIndex((prev) => (prev + 1 > totalPossibleIndices ? 0 : prev + 1));
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 < 0 ? totalPossibleIndices : prev - 1));
  };

  const visibleMembers = councilMembers.slice(startIndex, startIndex + itemsToShow);

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-10 px-2 lg:px-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-1 bg-brand-gold rounded-full" />
          <h4 className="text-brand-navy font-bold uppercase tracking-widest text-xs">Council Board</h4>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={prev}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-white text-brand-navy border border-gray-200 hover:border-brand-navy hover:shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={next}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-white text-brand-navy border border-gray-200 hover:border-brand-navy hover:shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className={cn(
        "grid gap-4 sm:gap-6",
        itemsToShow === 1 ? "grid-cols-1" : itemsToShow === 2 ? "grid-cols-2" : "grid-cols-5"
      )}>
        <AnimatePresence mode="popLayout">
          {visibleMembers.map((member, i) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-4 relative shadow-md">
                <img src={member.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={member.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                  <member.icon className="w-4 h-4" />
                </div>
              </div>
              <h5 className="font-bold text-brand-navy mb-1 text-sm">{member.name}</h5>
              <p className="text-[10px] text-brand-crimson font-black uppercase tracking-widest leading-none">{member.role}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: totalPossibleIndices + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStartIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${startIndex === i ? 'w-6 bg-brand-gold' : 'w-1.5 bg-brand-navy/10 hover:bg-brand-navy/30'}`}
          />
        ))}
      </div>
    </div>
  );
}

function ClubsSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPossibleIndices = Math.max(0, clubs.length - itemsToShow);

  const next = () => {
    setStartIndex((prev) => (prev + 1 > totalPossibleIndices ? 0 : prev + 1));
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 < 0 ? totalPossibleIndices : prev - 1));
  };

  const visibleClubs = clubs.slice(startIndex, startIndex + itemsToShow);

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-12 px-2 lg:px-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-1 bg-brand-crimson rounded-full" />
          <h4 className="text-brand-navy font-bold uppercase tracking-widest text-xs">Clubs Catalog</h4>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white text-brand-navy border border-gray-200 hover:border-brand-navy hover:shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white text-brand-navy border border-gray-200 hover:border-brand-navy hover:shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className={cn(
        "grid gap-8",
        itemsToShow === 1 ? "grid-cols-1" : itemsToShow === 2 ? "grid-cols-2" : "grid-cols-3"
      )}>
        <AnimatePresence mode="popLayout">
          {visibleClubs.map((club, i) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              className="group relative h-80 rounded-[40px] overflow-hidden shadow-lg border border-gray-100"
            >
              <img src={club.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={club.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent opacity-90" />
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                   <club.icon className="w-6 h-6" />
                 </div>
                 <h4 className="text-white font-heading text-xl font-bold leading-tight group-hover:text-brand-gold transition-colors">
                   {club.name}
                 </h4>
                 <div className="mt-4 h-1 w-8 bg-brand-gold rounded-full transition-all duration-300 group-hover:w-16" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="mt-12 flex justify-center gap-2">
        {Array.from({ length: totalPossibleIndices + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStartIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${startIndex === i ? 'w-8 bg-brand-gold' : 'w-2 bg-brand-navy/10 hover:bg-brand-navy/30'}`}
          />
        ))}
      </div>
    </div>
  );
}

const signatureProgrammes = [
  {
    id: "mother-on-duty",
    title: "Mother On Duty",
    shortTitle: "Mother On Duty",
    badge: "Parent Partnership",
    icon: HeartHandshake,
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200",
    description: "Under this initiative, mothers join their children at the school and spend a day on campus, observing the school’s environment and daily routine. This directly bridges the gap between home and school, ensuring a shared commitment to the physical, intellectual, emotional, and social development of every child.",
    highlights: [
      "Mothers observe class activities and daily campus routine first-hand",
      "Directly bridges the gap between home and school learning environment",
      "Shared commitment for physical, intellectual, emotional & social growth"
    ]
  },
  {
    id: "parent-engagement",
    title: "Parent Engagement Programme",
    shortTitle: "Parent Engagement",
    badge: "Parent Workshops",
    icon: Users,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
    description: "Parents are a crucial part of children’s learning and development. We try our best to keep them involved with parent workshops, strengthening the partnership between school and home. Such sessions are part of effective parenting strategies to nurture confident, resilient, and well-rounded children.",
    highlights: [
      "Interactive workshops focused on parenting strategies & child psychology",
      "Strengthens the active partnership between school and home",
      "Nurtures confident, resilient, and well-rounded students"
    ]
  },
  {
    id: "home-visits",
    title: "Home Visits",
    shortTitle: "Home Visits",
    badge: "Faculty Care",
    icon: Home,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200",
    description: "Not just parents, but our teachers also conduct periodic visits to children’s homes. It gives teachers clear insight into how learning can be adapted for diverse families. It provides them with the first-hand opportunity to personalize instructions. Teachers shift from solving mindlessly to listening & understanding.",
    highlights: [
      "Periodic home visits by dedicated teachers for deeper insight",
      "First-hand opportunity to personalize instructions for diverse families",
      "Teachers shift from solving mindlessly to listening & understanding"
    ]
  },
  {
    id: "indian-culture",
    title: "Special Focus on Indian Culture & Traditions",
    shortTitle: "Indian Culture",
    badge: "Cultural Heritage",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=1200",
    description: "VVP has always been proud of its commitment to the deep-rooted culture, traditions, and values of India. Our students are encouraged to actively participate in cultural celebrations where they develop a positive self-identity, a sense of belonging, respect for others, and an appreciation of Unity in Diversity.",
    highlights: [
      "Proud commitment to deep-rooted culture, traditions, and values of India",
      "Active participation in vibrant, festive cultural celebrations",
      "Develops positive self-identity, belonging & Unity in Diversity"
    ]
  },
  {
    id: "china-exchange",
    title: "China Exchange & Collaboration Programme",
    shortTitle: "China Exchange",
    badge: "Global Leadership",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
    description: "Ms. Susheela Santosh, director of VVP, was invited by the Chinese government as part of an international educational exchange program. With respect to these meetings, VVP launched an ongoing cultural exchange programme where two graduate students visited the campus to exchange Mandarin, Hindi, English, and Kannada cultures.",
    institutions: [
      "Yunnan Minzu University (MDFZ)",
      "Xiamen Urban Planning Exhibition Centre, Xiamen University",
      "Fuzhou No.1 High School"
    ],
    highlights: [
      "Director's invitation by Chinese government for international exchange",
      "Exchange of Mandarin, Hindi, English, and Kannada cultures on campus",
      "Global educational perspective and cross-cultural learning for students"
    ]
  }
];

function SignatureProgrammeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProg = signatureProgrammes[activeIndex];

  const nextProg = () => {
    setActiveIndex((prev) => (prev + 1) % signatureProgrammes.length);
  };

  const prevProg = () => {
    setActiveIndex((prev) => (prev - 1 + signatureProgrammes.length) % signatureProgrammes.length);
  };

  return (
    <section className="py-20 bg-zinc-50 border-y border-zinc-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-crimson/10 text-brand-crimson text-xs font-bold mb-4 uppercase tracking-widest">
            Specialized Pedagogy
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-5 tracking-tight">
            Signature <span className="text-brand-crimson">Programme</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-medium leading-relaxed font-medium">
            We have multiple specialized programs that deliver the knowledge through innovative learning methods, increasing the effectiveness of our curriculum.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {signatureProgrammes.map((prog, idx) => {
            const Icon = prog.icon;
            const isActive = idx === activeIndex;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm",
                  isActive
                    ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/20 scale-105 ring-2 ring-brand-gold/50"
                    : "bg-white text-brand-navy/80 hover:bg-white hover:text-brand-navy border border-zinc-200/80 hover:border-brand-navy/30"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-brand-gold" : "text-brand-navy/60")} />
                <span>{prog.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Main Display Card */}
        <div className="bg-white rounded-[28px] sm:rounded-[36px] border border-zinc-200/80 shadow-2xl overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProg.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-0 min-h-[380px] sm:min-h-[420px] lg:min-h-[480px]"
            >
              {/* Image Column */}
              <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[280px] lg:min-h-full bg-brand-navy overflow-hidden group">
                <img
                  src={currentProg.image}
                  alt={currentProg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] lg:min-h-[480px]">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center text-brand-navy shrink-0">
                        <currentProg.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-crimson" />
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-brand-navy leading-tight">
                        {currentProg.title}
                      </h3>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      <button
                        onClick={prevProg}
                        className="w-10 h-10 rounded-xl bg-zinc-100 hover:bg-brand-navy hover:text-white flex items-center justify-center text-brand-navy transition-all duration-200"
                        title="Previous Programme"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextProg}
                        className="w-10 h-10 rounded-xl bg-zinc-100 hover:bg-brand-navy hover:text-white flex items-center justify-center text-brand-navy transition-all duration-200"
                        title="Next Programme"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-text-medium leading-relaxed font-medium mb-4">
                    {currentProg.description}
                  </p>

                  {/* Institutions Visited (If China Exchange) */}
                  {currentProg.institutions && (
                    <div className="mt-4 p-4 bg-brand-ivory/80 rounded-2xl border border-brand-gold/30">
                      <p className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-brand-crimson" />
                        Key Institutions Visited by Director Ms. Susheela Santosh:
                      </p>
                      <ul className="space-y-1">
                        {currentProg.institutions.map((inst, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-brand-navy font-semibold">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-crimson shrink-0" />
                            <span>{inst}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Mobile Navigation Controls */}
                <div className="flex sm:hidden items-center justify-between pt-4 mt-4 border-t border-zinc-100">
                  <span className="text-xs font-bold text-zinc-400">
                    {activeIndex + 1} of {signatureProgrammes.length}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={prevProg}
                      className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center text-brand-navy"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextProg}
                      className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center text-brand-navy"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 5-Card Mini Grid for Instant Previews in One Scroll */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {signatureProgrammes.map((prog, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "group text-left transition-all duration-300 flex flex-col gap-2 p-2 rounded-2xl bg-white border",
                  isActive
                    ? "ring-2 ring-brand-crimson border-transparent shadow-md scale-[1.02]"
                    : "border-zinc-200/80 hover:border-brand-navy/30 hover:shadow-sm opacity-80 hover:opacity-100"
                )}
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] w-full bg-zinc-100">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-1 pb-1">
                  <p className={cn(
                    "text-xs font-bold leading-snug line-clamp-2",
                    isActive ? "text-brand-crimson" : "text-brand-navy"
                  )}>
                    {prog.shortTitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Academia() {
  const [activeTab, setActiveTab] = useState<"activities" | "competitions">("activities");
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050353050-0b0152416b9f?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="Academia Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 sm:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-gold text-xs sm:text-sm font-bold mb-8 backdrop-blur-sm uppercase tracking-widest">
              Student Life • Holistic Excellence
            </div>
            
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.95]">
              Academic <br />
              <span className="text-brand-gold italic">Culture</span> & Life
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl">
              Let's talk about the academic life at Vishwa Vidyapeeth, Varthur. A space where real growth happens through expansion of abilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dasha Prabodha Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="max-w-2xl"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-bold mb-6 uppercase tracking-widest">
                Unique Initiative
              </div>
              <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-6 tracking-tight">
                Dasha <span className="text-brand-crimson">Prabodha</span>
              </h2>
              <p className="text-xl text-text-medium leading-relaxed">
                A unique skill-building initiative at VVP that focuses on teaching the 10 essential life skills before children reach age 10.
              </p>
            </motion.div>
            
            <div className="hidden md:flex gap-4">
              <div className="flex items-center gap-2 text-brand-navy/40 font-bold uppercase tracking-widest text-[10px]">
                <span>Infinite Exploration</span>
                <div className="w-12 h-[1px] bg-brand-navy/20" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex gap-6 py-4"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {/* Display twice for infinite effect */}
            {[...dashaPrabodha, ...dashaPrabodha].map((skill, index) => (
              <div 
                key={`${skill.id}-${index}`} 
                className="min-w-[240px] sm:min-w-[300px] h-[360px] sm:h-[400px] rounded-[40px] overflow-hidden relative shadow-lg border border-gray-100 flex-shrink-0 group"
              >
                <img 
                  src={skill.image} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt={skill.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
                
                <div className="absolute top-6 left-6">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-brand-gold shadow-lg">
                    <skill.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-brand-gold font-black text-[10px] uppercase tracking-widest mb-3 flex items-center gap-2">
                     <span className="w-4 h-[1px] bg-brand-gold" />
                     Skill #{skill.id}
                  </div>
                  <h3 className="text-white font-heading text-lg sm:text-xl font-bold mb-1 leading-tight whitespace-normal">
                    {skill.title}
                  </h3>
                  <p className="text-white/60 font-medium text-[10px] sm:text-xs italic">
                    {skill.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>


      </section>

      {/* Signature Programme Section */}
      <SignatureProgrammeSection />

      {/* House System */}
      <section className="py-24 bg-brand-ivory/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-32">
            <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-6 tracking-tight">
              The <span className="text-brand-crimson">House</span> System
            </h2>
            <p className="text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
              Every student and staff member is assigned a "house" to show teamwork, unity, and a sense of belonging.
            </p>
          </div>

          <div className="flex flex-col items-center gap-[40vh] pb-[40vh]">
            {houses.map((house, i) => (
              <div 
                key={house.name} 
                className="sticky w-full max-w-4xl px-4" 
                style={{ 
                  top: `${100 + i * 40}px`,
                  zIndex: i + 10
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`p-10 sm:p-20 rounded-[60px] shadow-2xl border border-gray-100 flex flex-col items-center text-center transition-all duration-700 ${house.textColor}`}
                  style={{ backgroundColor: house.color }}
                >
                  <div className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border ${house.name === "House Vishwamitra" ? "bg-brand-navy/10 border-brand-navy/20" : "bg-white/20 border-white/30"}`}>
                    {house.sage}
                  </div>
                  
                  <h3 className="font-heading text-4xl sm:text-6xl font-bold mb-4 tracking-tight">
                    {house.name}
                  </h3>
                  
                  <div className="w-20 h-1.5 bg-current opacity-30 rounded-full mb-8" />

                  <p className="text-lg font-black uppercase tracking-[0.3em] mb-10 opacity-90">
                    {house.title}
                  </p>

                  <p className="text-xl font-medium leading-relaxed opacity-90 max-w-2xl px-4">
                    {house.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Competitions Section */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-8 tracking-tight">
              Beyond the <span className="text-brand-crimson">Curriculum</span>
            </h2>
            
            {/* Tab Switched */}
            <div className="inline-flex p-1 bg-brand-ivory rounded-2xl mb-12 shadow-inner">
              <button
                onClick={() => setActiveTab("activities")}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === "activities" 
                  ? "bg-white text-brand-navy shadow-md" 
                  : "text-brand-navy/60 hover:text-brand-navy"
                }`}
              >
                School Activities
              </button>
              <button
                onClick={() => setActiveTab("competitions")}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === "competitions" 
                  ? "bg-white text-brand-navy shadow-md" 
                  : "text-brand-navy/60 hover:text-brand-navy"
                }`}
              >
                Competitive Events
              </button>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-xl text-text-medium leading-relaxed">
                {activeTab === "activities" 
                  ? "Real growth of a child happens when they expand their range of abilities. At VVP, our students explore and learn through diverse hands-on experiences."
                  : "Competitions build resilience, courage, and a successful mindset. We provide ample competitive opportunities to help students grow through experience."
                }
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {(activeTab === "activities" ? activitiesData : competitionsData).map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative h-80 rounded-[40px] overflow-hidden shadow-lg border border-gray-100"
              >
                <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent opacity-90" />
                
                <div className="absolute bottom-8 left-8 right-8">
                   {(item as any).label && (
                     <div className="text-brand-gold font-bold uppercase tracking-widest text-[10px] mb-2">
                       {(item as any).label}
                     </div>
                   )}
                   <h4 className="text-white font-heading text-xl font-bold leading-tight group-hover:text-brand-gold transition-colors">
                     {item.title}
                   </h4>
                   <div className="mt-4 h-1 w-8 bg-brand-gold rounded-full transition-all duration-300 group-hover:w-16" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Council */}
      <section className="py-24 px-6 sm:px-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold mb-6 uppercase tracking-widest">
              Student Leadership
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-8 tracking-tight">
              Student <span className="text-brand-crimson">Council</span>
            </h2>
            <p className="text-xl text-text-medium leading-relaxed">
              At VVP, the student council is democratically elected, representing the voice of the student body and fostering a culture of responsibility.
            </p>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Amplify Voices", desc: "Ensuring every student's perspective is heard.", icon: Volume2 },
                { title: "Leadership", desc: "Developing confidence through event management.", icon: Zap },
                { title: "Vibrant Culture", desc: "Nurturing a respectful school environment.", icon: Heart },
                { title: "Future Skills", desc: "Equipping students with decision-making skills.", icon: Award },
              ].map((mission, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                    <mission.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-brand-navy text-base mb-3">{mission.title}</h4>
                  <p className="text-sm text-text-medium leading-relaxed opacity-70">{mission.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <CouncilSlider />
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-24 px-6 sm:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-6 tracking-tight">
              Our <span className="text-brand-crimson">Clubs</span>
            </h2>
            <p className="text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
              Clubs at VVP provide students with a platform to explore their talents and participate in events that polish them.
            </p>
          </div>

          <ClubsSlider />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 sm:px-12 bg-brand-ivory/50">
        <div className="max-w-7xl mx-auto rounded-[56px] overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-brand-navy" />
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
            alt="School background" 
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="relative z-10 py-20 px-8 text-center text-white">
            <h2 className="font-heading text-4xl sm:text-6xl font-bold mb-8 tracking-tight">Join the VVP Life</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              Our campus experience extends far beyond the classroom, nurturing every dimension of a student's growth.
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
                className="px-12 py-6 bg-white text-brand-navy font-bold rounded-2xl transition-all shadow-lg"
              >
                View Curriculum
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
