import { motion } from "motion/react";
import { 
  ChevronRight, 
  CheckCircle2, 
  GraduationCap, 
  Palette, 
  Activity, 
  BookOpen,
  ClipboardCheck,
  Languages,
  Calculator,
  FlaskConical,
  Globe,
  Cpu,
  FileText,
  BookMarked,
  BrainCircuit
} from "lucide-react";

const framework = {
  scholastic: [
    { title: "English", icon: Languages },
    { title: "Kannada / Hindi / Sanskrit", icon: BookOpen },
    { title: "Mathematics", icon: Calculator },
    { title: "Science", icon: FlaskConical },
    { title: "Social Science", icon: Globe },
    { title: "Computer Science", icon: Cpu },
  ],
  coScholastic: [
    "Bhagavad Gita – Life Lessons",
    "Art & Craft",
    "Music (Vocal)",
    "Dance (Folk & Classical)",
    "Co-Curricular Activities (CCA)",
    "Pottery",
    "Space Lab (with Genex team)",
    "Science & Math Lab (S2S)",
    "Olympiad (All Subjects)",
    "Club",
    "Inter School Competitions",
    "Happy Hour Sessions",
    "General Assembly",
    "House Assembly"
  ],
  sports: {
    physicalEducation: ["Kho Kho", "Athletics", "Throwball", "Jump Rope", "Carrom", "Table Tennis"],
    others: ["Basketball", "Football", "Skating", "Taekwondo", "Chess", "Yoga", "Cricket"]
  }
};

const assessment = [
  { 
    component: "Periodic Test", 
    marks: 10, 
    icon: FileText,
    details: "Conducted for 25 marks and converted to 10 marks for final term calculation. One test is held per academic term." 
  },
  { 
    component: "Term Exam", 
    marks: 70, 
    icon: BookMarked,
    details: "Half Yearly (Term 1) and Final (Term 2) exams, each conducted for 70 marks to evaluate comprehensive subject understanding." 
  },
  { 
    component: "Internal Assessment", 
    marks: 20, 
    icon: BrainCircuit,
    details: "Includes Notebook Submission (5), Subject Enrichment (5), and Creative & Critical Thinking (10) for holistic growth." 
  },
];

export function Middle() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050335392-49da42455938?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="Middle School Hero"
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
              Grades 6-8 • Middle School Program
            </div>
            
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.95]">
              Nurturing <br />
              <span className="text-brand-gold italic">Analytical</span> & <br />
              <span className="text-brand-crimson">Inquisitive</span> Minds
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl">
              Widening the range of subjects to reflect region's context, culture, and ethos while preparing for future academic success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Intro */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-8 leading-tight tracking-tight">
              A Curriculum Rooted in <span className="text-brand-crimson">Context & Ethos</span>
            </h2>
            <div className="space-y-6 text-xl text-text-medium leading-relaxed">
              <p>
                The program at Vishwa Vidyapeeth’s middle school in Varthur Bangalore widens the range of subjects that children focus on. The curriculum is outlined around the documentation provided by the respective boards.
              </p>
              <p>
                It is organized into the 6th, 7th & 8th grades to provide children with numerical, artistic, and linguistic skills that reflect the region's context, culture, and ethos. The program is focused on aligning the students with medium-term and long-term plans for effective learning.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-brand-ivory border-l-4 border-brand-gold">
                <p className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-2 opacity-60">Focus Area 1</p>
                <p className="text-brand-navy font-medium italic">Numerical, artistic, and linguistic skills.</p>
              </div>
              <div className="p-6 rounded-2xl bg-brand-ivory border-l-4 border-brand-blue">
                <p className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-2 opacity-60">Focus Area 2</p>
                <p className="text-brand-navy font-medium italic">Alignment with medium & long-term plans.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden shadow-2xl relative aspect-square lg:aspect-[4/5]"
          >
            <img 
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1000" 
              alt="Middle school students" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy/10" />
          </motion.div>
        </div>
      </section>

      {/* The Framework Section (Alternating Boxed Containers) */}
      <section className="py-24 bg-brand-ivory/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full border border-brand-gold/20 text-brand-navy text-sm font-bold mb-6 bg-white shadow-sm"
            >
              Academic Framework
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-6 tracking-tight"
            >
              The Complete <span className="text-brand-crimson">Middle School</span> Framework
            </motion.h2>
          </div>

          <div className="space-y-16">
            {/* 1. Scholastic */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[48px] sm:rounded-[64px] p-8 sm:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-white/50"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl font-bold text-brand-navy">Scholastic</h3>
                      <p className="text-xs font-bold text-brand-gold uppercase tracking-widest">Core Academic Pillars</p>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-12">
                    {framework.scholastic.map((subject, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-brand-ivory/30 border border-brand-ivory hover:border-brand-gold/30 hover:bg-white transition-all group">
                         <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-gold shadow-sm group-hover:scale-110 transition-transform">
                           <subject.icon className="w-5 h-5" />
                         </div>
                         <span className="font-bold text-brand-navy">{subject.title}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-brand-ivory">
                    <p className="text-text-medium italic leading-relaxed">
                      "Providing children with numerical, artistic, and linguistic skills that reflect the region's context."
                    </p>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 rounded-[40px] overflow-hidden shadow-2xl relative aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200" 
                    alt="Scholastic core" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* 2. Co-Scholastic (Alternate) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[48px] sm:rounded-[64px] p-8 sm:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-white/50"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="rounded-[40px] overflow-hidden shadow-2xl relative aspect-[4/3] group lg:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200" 
                    alt="Creative activities" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="lg:order-2">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                      <Palette className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl font-bold text-brand-navy">Co-Scholastic</h3>
                      <p className="text-xs font-bold text-brand-blue uppercase tracking-widest">Skill Enrichment</p>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {framework.coScholastic.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group transition-all">
                        <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 opacity-60 group-hover:opacity-100" />
                        <span className="text-text-medium text-base font-medium leading-tight group-hover:text-brand-navy">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-8 bg-brand-ivory/50 rounded-3xl border-l-4 border-brand-gold">
                    <p className="text-brand-navy font-medium italic leading-relaxed">
                      "Developing well-rounded personalities through diverse cultural and scientific exposure."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Sports */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[48px] sm:rounded-[64px] p-8 sm:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-white/50"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-brand-crimson/10 flex items-center justify-center text-brand-crimson">
                      <Activity className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl font-bold text-brand-navy">Sports</h3>
                      <p className="text-xs font-bold text-brand-crimson uppercase tracking-widest">Physical Excellence</p>
                    </div>
                  </div>
                  
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-brand-navy font-bold text-xl mb-6 flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-crimson" />
                        Physical Education
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {framework.sports.physicalEducation.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-brand-ivory shadow-sm hover:shadow-md hover:border-brand-crimson/20 transition-all">
                            <div className="w-2 h-2 rounded-full bg-brand-crimson/60" />
                            <span className="font-bold text-brand-navy">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-brand-navy font-bold text-xl mb-6 flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                        Others / Rotational
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {framework.sports.others.map((item, i) => (
                          <span key={i} className="px-5 py-2.5 rounded-xl bg-mist-grey text-text-medium text-sm font-bold hover:bg-brand-navy hover:text-white transition-all cursor-default">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 rounded-[40px] overflow-hidden shadow-2xl relative aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
                    alt="Sports" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-24 px-6 sm:px-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-4 tracking-tight"
            >
              Academic Assessment
            </motion.h2>
            <motion.div 
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               viewport={{ once: true }}
               className="w-32 h-1.5 bg-brand-gold mx-auto rounded-full origin-center"
            />
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mt-8 text-text-medium text-lg max-w-2xl mx-auto font-medium"
            >
              Each academic year is divided into two terms, each half-year. Assessment for each subject comprises the following components.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 text-left">
            {assessment.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-10 bg-white border border-gray-100 rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.06)] transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-navy mb-4">{item.component}</h3>
                <p className="text-text-medium text-lg leading-relaxed mb-6 font-normal">
                  {item.details}
                </p>
                <div className="flex items-center gap-2 pt-6 border-t border-gray-50">
                   <span className="text-sm font-bold text-brand-gold uppercase tracking-widest leading-none">Weightage:</span>
                   <span className="text-2xl font-bold text-brand-navy leading-none">{item.marks} Marks</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 max-w-4xl mx-auto">
            <div className="p-10 sm:p-12 bg-brand-navy rounded-[48px] text-white relative overflow-hidden text-left shadow-2xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
               
               <div className="relative z-10">
                 <h4 className="font-heading text-3xl font-bold mb-10 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-brand-gold flex items-center justify-center text-brand-navy">
                     <ChevronRight className="w-6 h-6" />
                   </div>
                   Final Calculation (Per Term)
                 </h4>
                 
                 <div className="space-y-8">
                   {assessment.map((item, i) => (
                     <div key={i} className="flex items-center justify-between py-5 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors px-4 rounded-xl">
                       <span className="text-white/80 font-bold text-lg">{item.component}</span>
                       <span className="font-bold text-2xl text-brand-gold">{item.marks}</span>
                     </div>
                   ))}
                   <div className="flex items-center justify-between pt-8 px-4">
                      <span className="text-brand-gold font-black text-2xl uppercase tracking-tighter">Term Total</span>
                      <span className="text-5xl font-black text-brand-gold">100</span>
                   </div>
                 </div>

                 <div className="mt-16 space-y-6">
                    <h5 className="font-heading text-gold text-xl font-bold mb-6 flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                        Important Guidelines
                    </h5>
                    <div className="grid sm:grid-cols-1 gap-4">
                      {[
                        "The primary medium of instruction across all grades is English.",
                        "Selecting both the second and third languages is necessary for all grades.",
                        "The second & third language policy is subject to change."
                      ].map((note, i) => (
                        <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                          <div className="w-7 h-7 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold text-xs font-bold shrink-0">
                            {i + 1}
                          </div>
                          <p className="text-white/80 font-medium leading-relaxed">{note}</p>
                        </div>
                      ))}
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 sm:px-12 bg-brand-ivory/50">
        <div className="max-w-7xl mx-auto rounded-[56px] overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-brand-navy" />
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000" 
            alt="School background" 
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="relative z-10 py-20 px-8 text-center text-white">
            <h2 className="font-heading text-4xl sm:text-6xl font-bold mb-8 tracking-tight">Begin Your Scholar's Journey</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
              Our Middle School environment prepares students for independent thought and future academic transitions.
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
                href="/contact?type=visit" 
                className="px-12 py-6 bg-white text-brand-navy font-bold rounded-2xl transition-all"
              >
                Schedule Site Visit
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
