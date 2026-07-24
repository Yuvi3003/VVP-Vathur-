import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Trophy, 
  Target, 
  Award, 
  ChevronDown, 
  ChevronRight,
  Star, 
  GraduationCap, 
  Music, 
  CheckCircle2,
  Medal,
  Users,
  Crown,
  Sparkles,
  Search,
  School,
  ExternalLink,
  Filter
} from "lucide-react";
import { cn } from "../lib/utils";

const toppers = [
  {
    grade: "1A",
    students: [
      { rank: "1st Place", name: "Nehaal Deepak", medal: "Gold", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "2nd Place", name: "Dhanavanth Kishorre", medal: "Silver", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "3rd Place", name: "Kanuri Kartikeya", medal: "Bronze", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=533" }
    ]
  },
  {
    grade: "1B",
    students: [
      { rank: "1st Place", name: "Bhuvi H Reddy", medal: "Gold", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "2nd Place", name: "Nachiket Kiran Ayada", medal: "Silver", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "3rd Place", name: "Vedik R", medal: "Bronze", img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400&h=533" }
    ]
  },
  {
    grade: "2A",
    students: [
      { rank: "1st Place", name: "Divyansh Mishra & Praneeth Danda", medal: "Gold", img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "2nd Place", name: "Raima Sinha", medal: "Silver", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "3rd Place", name: "R. Geethanshi", medal: "Bronze", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=533" }
    ]
  },
  {
    grade: "3A",
    students: [
      { rank: "1st Place", name: "Rajveer Purnam", medal: "Gold", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "2nd Place", name: "Joshith Gudla", medal: "Silver", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "3rd Place", name: "Devanshi Gonuguntla", medal: "Bronze", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400&h=533" }
    ]
  },
  {
    grade: "4A",
    students: [
      { rank: "1st Place", name: "Leksha Ravikumar", medal: "Gold", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "2nd Place", name: "Eepsitha Rayasam", medal: "Silver", img: "https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "3rd Place", name: "Mokshaja Gottumukkala", medal: "Bronze", img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=400&h=533" }
    ]
  },
  {
    grade: "5A",
    students: [
      { rank: "1st Place", name: "Shree Gowri G M", medal: "Gold", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "2nd Place", name: "Anmol Seth", medal: "Silver", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "3rd Place", name: "Yashmitha R", medal: "Bronze", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=400&h=533" }
    ]
  },
  {
    grade: "6A",
    students: [
      { rank: "1st Place", name: "Meher Jai Parakala", medal: "Gold", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "2nd Place", name: "Sahasra Siri Kumaralli", medal: "Silver", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "3rd Place", name: "Akshath Nair", medal: "Bronze", img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=400&h=533" }
    ]
  },
  {
    grade: "7A",
    students: [
      { rank: "1st Place", name: "Aniket Krishna", medal: "Gold", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "2nd Place", name: "Srihitha Manne", medal: "Silver", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "3rd Place", name: "Ojasvini M Panchmatia", medal: "Bronze", img: "https://images.unsplash.com/photo-1532074205216-d0e5fc9ff369?auto=format&fit=crop&q=80&w=400&h=533" }
    ]
  },
  {
    grade: "8A",
    students: [
      { rank: "1st Place", name: "Ananya Suraj", medal: "Gold", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "2nd Place", name: "Kedhar Gottumukkala", medal: "Silver", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "3rd Place", name: "Chinmayi Chowdhary Amilineni", medal: "Bronze", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=533" }
    ]
  },
  {
    grade: "9A",
    students: [
      { rank: "1st Place", name: "Nikhila Sai Kumaralli", medal: "Gold", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "2nd Place", name: "Tanisha Verma", medal: "Silver", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "3rd Place", name: "Manasvini Puram", medal: "Bronze", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400&h=533" }
    ]
  },
  {
    grade: "10A",
    students: [
      { rank: "1st Place", name: "Shanmukha G M", medal: "Gold", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "2nd Place", name: "Ganavi Raj", medal: "Silver", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400&h=533" },
      { rank: "3rd Place", name: "Shresta P Reddy", medal: "Bronze", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400&h=533" }
    ]
  }
];

const openStateTaekwondoWinners = [
  { student: "Shresta P Reddy", grade: "10", medal: "Gold" },
  { student: "Kanishkaa Thrilochan", grade: "7", medal: "Gold" },
  { student: "Niharika P Reddy", grade: "8", medal: "Silver" },
  { student: "Ganavi Raj R", grade: "10", medal: "Silver" },
];

const karnatakaTaekwondoWinners = [
  { student: "Srihitha Mane", grade: "7", medal: "Gold" },
  { student: "Akshath Nair", grade: "6", medal: "Gold" },
  { student: "Nikitha", grade: "4", medal: "Gold" },
  { student: "Joshith Gudla", grade: "3", medal: "Gold" },
  { student: "Ashika Nair", grade: "2", medal: "Silver" },
  { student: "Rithvik N", grade: "3", medal: "Silver" },
  { student: "Manas Verma", grade: "4", medal: "Silver" },
  { student: "Tanvi A", grade: "4", medal: "Silver" },
  { student: "Shivang Vijay Nambiar", grade: "4", medal: "Silver" },
  { student: "Neha", grade: "4", medal: "Silver" },
  { student: "Alanis Aryal", grade: "4", medal: "Silver" },
  { student: "Bivhank S", grade: "5", medal: "Silver" },
  { student: "Ganavi Raj R", grade: "10", medal: "Silver" },
  { student: "Shresta P Reddy", grade: "10", medal: "Silver" },
  { student: "Nishchal S Reddy", grade: "1", medal: "Bronze" },
  { student: "Saanvi Raj R", grade: "1", medal: "Bronze" },
  { student: "Deekshith M Reddy", grade: "1", medal: "Bronze" },
  { student: "Dhanavanth Kishore", grade: "1", medal: "Bronze" },
  { student: "Shiena Vikas", grade: "2", medal: "Bronze" },
  { student: "Vrishank B Utnal", grade: "2", medal: "Bronze" },
  { student: "Divyansh Mishra", grade: "2", medal: "Bronze" },
  { student: "Ritisha S Poste", grade: "3", medal: "Bronze" },
  { student: "Devanshi Gonuguntla", grade: "3", medal: "Bronze" },
  { student: "Amogh Syamesh", grade: "4", medal: "Bronze" },
  { student: "Aarav N", grade: "6", medal: "Bronze" },
  { student: "Amaya Prakhar", grade: "4", medal: "Bronze" },
  { student: "Shreya P", grade: "4", medal: "Bronze" },
];

const yogaWinners = [
  { student: "Aadya Ayyagari", grade: "LKG", medal: "Silver" },
  { student: "Viren Adarsh Reddy", grade: "2", medal: "Silver" },
  { student: "Veronika V Gowda", grade: "LKG", medal: "Bronze" },
];

function MedalIcon({ medal, className }: { medal: string; className?: string }) {
  const color = medal.toLowerCase() === "gold" ? "text-brand-gold" : medal.toLowerCase() === "silver" ? "text-zinc-400" : "text-orange-700";
  return <Medal className={cn("w-5 h-5", color, className)} />;
}

function SportsWinnersTable({ winners, title, subtitle }: { winners: any[]; title: string; subtitle?: string }) {
  const [activeTab, setActiveTab] = useState<string>("All");
  
  const filteredWinners = useMemo(() => {
    if (activeTab === "All") return winners;
    return winners.filter(w => w.medal === activeTab);
  }, [activeTab, winners]);

  const tabs = ["All", "Gold", "Silver", "Bronze"];

  return (
    <div className="bg-white rounded-[40px] border border-zinc-100 shadow-sm overflow-hidden mb-12">
      <div className="p-8 border-b border-zinc-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-zinc-50/30">
        <div>
          <h4 className="font-heading text-xl font-bold text-brand-navy mb-1">{title}</h4>
          {subtitle && <p className="text-xs text-neutral-500 font-medium">{subtitle}</p>}
        </div>
        <div className="flex bg-white p-1.5 rounded-2xl border border-zinc-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all",
                activeTab === tab 
                  ? "bg-brand-navy text-white shadow-sm border border-brand-navy" 
                  : "text-zinc-400 hover:text-brand-navy"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-zinc-50/50">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 border-b border-zinc-100 italic">Student Name</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 border-b border-zinc-100 italic">Grade</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 border-b border-zinc-100 italic text-right">Medal Achievement</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-50">
            <AnimatePresence mode="popLayout">
              {filteredWinners.map((winner, idx) => (
                <motion.tr 
                  key={winner.student + idx}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  className="group hover:bg-zinc-50/30 transition-colors"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-zinc-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Users className="w-4 h-4 text-brand-navy/30" />
                      </div>
                      <span className="font-bold text-brand-navy text-sm">{winner.student}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-zinc-100 text-brand-navy font-bold text-[10px] uppercase tracking-tighter">
                      Grade {winner.grade}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white border border-zinc-100 shadow-sm group-hover:border-brand-gold/40 transition-all">
                      <MedalIcon medal={winner.medal} className="w-5 h-5" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-navy">{winner.medal}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
            {filteredWinners.length === 0 && (
              <tr>
                <td colSpan={3} className="px-8 py-20 text-center">
                  <div className="text-zinc-300 flex flex-col items-center gap-4">
                    <Filter className="w-12 h-12 opacity-20" />
                    <p className="text-sm font-medium italic">No {activeTab} medals recorded for this specific category.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ChampionshipAccordion({ title, subtitle, children, tally }: { title: string; subtitle?: string; children: React.ReactNode; tally?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 bg-white rounded-3xl border border-zinc-100 shadow-sm overflow-hidden transition-all hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex flex-col sm:flex-row sm:items-center justify-between text-left group"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <Trophy className="w-5 h-5 text-brand-gold" />
            <h4 className="font-heading text-xl font-bold text-brand-navy group-hover:text-brand-crimson transition-colors">{title}</h4>
          </div>
          {subtitle && <p className="text-sm text-text-medium opacity-70 mb-2">{subtitle}</p>}
          {tally && (
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-gold">
               {tally}
             </div>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-brand-navy mt-4 sm:mt-0"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-zinc-50/50"
          >
            <div className="p-8 pt-0">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function StudentAchievements() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Student Celebration" 
          />
          <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 text-brand-gold text-sm font-bold mb-8 uppercase tracking-[0.3em] border border-white/20 backdrop-blur-md"
          >
            Celebrating Excellence
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Student <span className="text-brand-gold">Achievements</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            A record of our students who have turned dedication into recognition — across academics, sports, co-curriculars, and merit awards.
          </motion.p>
        </div>
      </section>

      {/* Intro Block */}
      <section className="py-24 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-8">
              Celebrating Our Students - <span className="text-brand-crimson">Toppers, Champions & Scholars</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-xl text-text-medium leading-relaxed opacity-80">
                Excellence at Vishwa Vidyapeeth shows up in many forms - on the answer sheet, on the taekwondo mat, on the stage, and in the quiet confidence of a student receiving a scholarship.
              </p>
              <p className="text-lg text-brand-navy/60 leading-relaxed font-semibold italic">
                This page is a record of our students who have turned dedication into recognition - across academics, sports, co-curriculars, and merit awards.
              </p>
            </div>

            {/* Category Labels (Non-clickable tabs) */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Academics", color: "bg-brand-navy" },
                { label: "Sports", color: "bg-brand-crimson" },
                { label: "Co-Curriculars", color: "bg-brand-blue" },
                { label: "Merit Awards", color: "bg-brand-gold" }
              ].map((category, i) => (
                <div 
                  key={i}
                  className={cn(
                    "px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-md border border-white/10",
                    category.color
                  )}
                >
                  {category.label}
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Academic Toppers */}
      <section id="academic-toppers" className="py-24 px-6 sm:px-12 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto">
          {/* Centered Heading */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-brand-gold font-black uppercase tracking-widest text-xs mb-4">
              <GraduationCap className="w-5 h-5" /> Academic Excellence
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-6 tracking-tight">
              Class <span className="text-brand-crimson">Toppers</span>
            </h2>
            <div className="h-1.5 w-24 bg-brand-gold mx-auto mb-8 rounded-full" />
            <p className="text-xl text-text-medium leading-relaxed font-medium opacity-80">
              A salute to the students whose dedication, focus, and quiet hard work placed them at the top of their class. These results reflect the strength of our teaching and a culture that takes academics seriously.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {toppers.map((t, gradeIdx) => (
              <motion.div
                key={t.grade}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (gradeIdx % 3) * 0.1 }}
                className="bg-white rounded-[48px] border border-zinc-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 group"
              >
                <div className="bg-brand-navy p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-crimson opacity-0 group-hover:opacity-10 transition-opacity" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-brand-gold mb-3 border border-white/20">
                      <Crown className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white">Grade {t.grade}</h3>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mt-1">AY 2024–25 Champions</p>
                  </div>
                </div>
                
                <div className="p-8 space-y-8">
                  {t.students.map((student, sIdx) => {
                    const isGold = student.rank.includes("1st");
                    const isSilver = student.rank.includes("2nd");
                    const isBronze = student.rank.includes("3rd");

                    return (
                      <div key={sIdx} className="flex items-center gap-5 group/item">
                        <div className="relative w-16 h-16 shrink-0 group/img">
                          <img 
                            src={student.img} 
                            alt={student.name}
                            className="w-full h-full object-cover rounded-2xl shadow-sm border border-zinc-100 group-hover/img:scale-110 transition-transform duration-500"
                          />
                          <div className={cn(
                            "absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm",
                            isGold ? "bg-brand-gold" : isSilver ? "bg-zinc-300" : "bg-brand-crimson"
                          )}>
                            {isGold ? "1" : isSilver ? "2" : "3"}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className={cn(
                              "text-[10px] font-black uppercase tracking-tighter",
                              isGold ? "text-brand-gold" : isSilver ? "text-zinc-400" : "text-brand-crimson"
                            )}>
                              {student.rank}
                            </span>
                          </div>
                          <h4 className="font-bold text-brand-navy text-sm leading-tight group-hover/item:text-brand-crimson transition-colors truncate">
                            {student.name}
                          </h4>
                          <div className="flex items-center gap-1 mt-1">
                            <MedalIcon medal={student.medal} className="w-3 h-3" />
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">
                              {student.medal} Medalist
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Champions */}
      <section id="sports-champions" className="py-24 px-6 sm:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-brand-crimson font-black uppercase tracking-widest text-[10px] mb-6">
              <Target className="w-4 h-4 ml-1" /> Physical Excellence
            </div>
            <h2 className="font-heading text-5xl sm:text-7xl font-bold text-brand-navy mb-8 tracking-tighter">
              Sports <span className="text-brand-gold">Champions</span>
            </h2>
            <div className="h-1.5 w-24 bg-brand-gold mx-auto mb-12 rounded-full" />
          </div>

          {/* Taekwondo Section */}
          <div className="mb-40">
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-[24px] bg-brand-navy flex items-center justify-center text-white shadow-xl">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-brand-navy font-heading">Taekwondo</h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">AY 2024–25 Performance</p>
                  </div>
                </div>
                <p className="text-xl text-neutral-600 leading-relaxed font-normal">
                  Three major championships through the year. Three platforms for our students to prove what discipline, training, and the right environment can produce.
                </p>
                <div className="p-8 bg-zinc-50 rounded-[40px] border border-zinc-100 italic text-neutral-500 font-medium relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold/30" />
                  <p className="text-sm leading-relaxed">
                    "Inter-School & Open State-Level Taekwondo Championship (AY 2024–25) Hosted by Vishwa Vidyapeeth, Varthur, with Phoenix Taekwondo Academy and Karnataka Taekwondo. Over 400 athletes competed across Kyorugi (sparring) and Poomsae (forms)."
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-video rounded-[60px] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                  <img src="https://images.unsplash.com/photo-1552176544-93368297b819?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Taekwondo" />
                  <div className="absolute inset-0 bg-brand-navy/10" />
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-gold rounded-full opacity-10 animate-pulse" />
              </motion.div>
            </div>

            <SportsWinnersTable 
              title="Inter-School & Open State-Level Medalists"
              subtitle="Performance metrics from the championship hosted at Vishwa Vidyapeeth, Varthur"
              winners={openStateTaekwondoWinners}
            />

            <div className="bg-brand-navy rounded-[40px] p-8 sm:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 mb-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#D4A937_0%,transparent_70%)] group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <School className="w-6 h-6 text-brand-gold" />
                  <h4 className="text-2xl font-bold">3rd Karnataka Taekwondo Inter-School Championship</h4>
                </div>
                <p className="text-white/60 font-medium max-w-xl">Hosted by Shanthinikethan School, Hebbal. Our students demonstrated peak efficiency across all categories.</p>
              </div>
              <div className="relative z-10 flex gap-4">
                 {[
                   { val: "4", label: "Gold", color: "text-brand-gold" },
                   { val: "10", label: "Silver", color: "text-zinc-300" },
                   { val: "13", label: "Bronze", color: "text-orange-400" }
                 ].map((stat, i) => (
                   <div key={i} className="px-6 py-4 rounded-3xl bg-white/10 border border-white/20 text-center min-w-[100px]">
                      <div className={cn("font-black text-3xl mb-1", stat.color)}>{stat.val}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/40">{stat.label}</div>
                   </div>
                 ))}
              </div>
            </div>

            <SportsWinnersTable 
              title="3rd Karnataka Inter-School Winners"
              subtitle="Consolidated list of medalists from the Hebbal regional championship"
              winners={karnatakaTaekwondoWinners}
            />
          </div>

          {/* Yogasana Section */}
          <div>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:order-2 space-y-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-[24px] bg-brand-crimson flex items-center justify-center text-white shadow-xl">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-brand-navy font-heading">Yogasana</h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">Mental & Physical Grace</p>
                  </div>
                </div>
                <p className="text-xl text-neutral-600 leading-relaxed font-normal">
                  "Inter-School Yogasana Competition (23 November 2024) Hosted on our campus, with 200 students from 9 schools demonstrating discipline, balance, and grace."
                </p>
                <div className="flex items-center gap-6 p-6 rounded-[30px] border border-zinc-100 bg-zinc-50/80 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-gold group-hover:rotate-12 transition-transform">
                    <School className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-brand-navy/70">Hosted at the Vishwa Vidyapeeth Magadha Campus</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:order-1 relative"
              >
                <div className="aspect-[4/3] rounded-[60px] overflow-hidden shadow-2xl relative z-10 border-8 border-white transform -rotate-2">
                  <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Yogasana" />
                </div>
                <div className="absolute inset-0 bg-brand-crimson/10 rounded-[60px] translate-x-12 -translate-y-8 -z-10 blur-xl" />
              </motion.div>
            </div>

            <SportsWinnersTable 
              title="Inter-School Yogasana Competition Medalists"
              subtitle="Top athletes selected from 200 competitors across 9 regional schools"
              winners={yogaWinners}
            />
          </div>
        </div>
      </section>

      {/* Co-Curricular Wins */}
      <section className="py-24 px-6 sm:px-12 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <div className="inline-flex items-center gap-2 text-brand-gold font-black uppercase tracking-widest text-xs mb-6">
                  <Star className="w-4 h-4 ml-1" /> Beyond The Classroom
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-8 leading-tight">
                  Co-Curricular <span className="text-brand-crimson">Wins</span>
                </h2>
                <p className="text-xl text-text-medium leading-relaxed mb-10">
                  Beyond the mat and the classroom, our students continue to shine on stage and in creative competitions.
                </p>
                
                <div className="space-y-6">
                  {[
                    { 
                      icon: Music, 
                      title: "Sinchana Manjunath (Grade 9)", 
                      achievement: "2nd Place, Inter-school Dance Competition" 
                    },
                    { 
                      icon: Target, 
                      title: "Pratyusha Bhattacharjee (Grade 6)", 
                      achievement: "3rd Place, FIT India Poster Competition" 
                    }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-6 p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 flex items-center justify-center text-brand-navy shrink-0">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-navy mb-1">{item.title}</h4>
                        <p className="text-sm text-text-medium opacity-70 italic font-medium">{item.achievement}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-full object-cover" 
                    alt="Co-curricular achievement" 
                  />
                  <div className="absolute inset-0 bg-brand-navy/20" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-gold rounded-full opacity-10 blur-3xl" />
              </div>
           </div>
        </div>
      </section>

      {/* Merit Scholarship Recipients */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="w-20 h-20 rounded-3xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-8 text-brand-gold">
              <Award className="w-10 h-10" />
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-6">
              Merit Scholarship <span className="text-brand-crimson">Recipients</span>
            </h2>
            <div className="h-1 w-24 bg-brand-gold mx-auto mb-8 rounded-full" />
            <p className="text-xl text-text-medium leading-relaxed max-w-3xl mx-auto opacity-80 font-medium">
              Every Independence Day, we honour our top Grade 10 performer with a merit scholarship — a tradition that links academic excellence with the spirit of national pride.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                year: "AY 2024–25",
                name: "Mr Shanmukha M G",
                description: "Felicitation by Chief Guest Colonel B. Jai Govind (Retd) for outstanding performance in the Grade 10 CBSE Board Examinations.",
                image: "https://images.unsplash.com/photo-1523240693567-d7962177c250?auto=format&fit=crop&q=80&w=1200",
                badge: "Top Performer"
              },
              {
                year: "AY 2023–24",
                name: "Ms Sinchana Manjunath",
                description: "Honoured in the presence of Chief Guest Colonel Radhakrishnan for her excellence in the Grade 10 Board Examinations, on an Independence Day themed Viksith Bharat.",
                image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200",
                badge: "Viksith Bharat Award"
              }
            ].map((scholarship, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[48px] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={scholarship.image} 
                    alt={scholarship.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-6 left-6">
                    <div className="bg-brand-navy text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20 backdrop-blur-md">
                      {scholarship.year}
                    </div>
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border bg-brand-gold/10 text-brand-gold border-brand-gold/20 self-start">
                    <Star className="w-3 h-3" /> {scholarship.badge}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-crimson transition-colors">
                    {scholarship.name}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed font-medium">
                    {scholarship.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 sm:px-12 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1523580494863-6f30312248fd?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-heading text-4xl sm:text-6xl font-bold text-white mb-8 tracking-tight">
            Inspired by our <span className="text-brand-gold underline decoration-brand-gold/30 underline-offset-8">Champions?</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-12">
            Join a community that nurtures every talent, from the classroom to the sports field. Start your journey with Vishwa Vidyapeeth today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-5 bg-brand-gold text-brand-navy rounded-full font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-brand-gold/20 flex items-center gap-3 group">
              Admission Inquiry
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">
              Our Curriculum
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
