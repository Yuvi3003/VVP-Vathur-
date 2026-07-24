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
  Lightbulb,
  Award,
  Terminal
} from "lucide-react";

const framework = {
  scholastic: [
    { title: "English", icon: Languages },
    { title: "Kannada / Hindi / Sanskrit", icon: BookOpen },
    { title: "Mathematics", icon: Calculator },
    { title: "Science", icon: FlaskConical },
    { title: "Social Science", icon: Globe },
    { title: "Informational Technology (Optional)", icon: Terminal },
  ],
  coScholastic: [
    "Bhagavad Gita – Life Lessons",
    "Art & Craft",
    "Olympiad (All Subjects)",
    "Co-Curricular Activities (CCA)",
    "Club",
    "Inter School Competitions",
    "General Assembly",
    "House Assembly"
  ],
  sports: {
    physicalEducation: ["Kho Kho", "Athletics", "Throwball", "Jump Rope", "Carrom", "Table Tennis", "Chess"],
    others: ["Basketball", "Football", "Yoga", "Taekwondo"]
  }
};

const assessment = [
  { component: "Theory", marks: 80, icon: FileText, details: "Comprehensive written examination covering the entire academic syllabus." },
  { component: "Periodic Assessment", marks: 5, icon: ClipboardCheck, details: "Regular tests held throughout the term to track progress." },
  { component: "Multiple Assessment", marks: 5, icon: Lightbulb, details: "Various evaluation formats including quizzes and assignments." },
  { component: "Portfolio", marks: 5, icon: BookOpen, details: "Maintenance of student work, records, and class participation." },
  { component: "Subject Enrichment (SEA)", marks: 5, icon: Award, details: "Practical work, projects, and activities for deeper learning." },
];

export function Secondary() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="Secondary School Hero"
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
              Grades 9 & 10 • Secondary School Program
            </div>
            
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.95]">
              Specialized <br />
              <span className="text-brand-gold italic">Career</span> & <br />
              <span className="text-brand-crimson">Horizon</span> Widening
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl">
              Engaging students in a variety of subjects to enhance career prospects and find direction in specialized fields for the future.
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
              A Bridge to <span className="text-brand-crimson">Future Prospects</span>
            </h2>
            <div className="space-y-6 text-xl text-text-medium leading-relaxed">
              <p>
                The program at Vishwa Vidyapeeth High School in Bangalore widens students' horizons and engages them in the study of a variety of subjects to enhance their future career prospects.
              </p>
              <p>
                The high school program helps students find a direction in a specialized field for the future. The program encourages students to engage in intellectual inquiry while providing flexibility, responsiveness to change, and cultural awareness.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-brand-ivory border-l-4 border-brand-gold">
                <p className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-2 opacity-60">Objective 1</p>
                <p className="text-brand-navy font-medium italic">Creating individuals with significant potential.</p>
              </div>
              <div className="p-6 rounded-2xl bg-brand-ivory border-l-4 border-brand-blue">
                <p className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-2 opacity-60">Objective 2</p>
                <p className="text-brand-navy font-medium italic">Responsive to change and cultural awareness.</p>
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
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
              alt="High school discussion" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy/10" />
          </motion.div>
        </div>
      </section>

      {/* The Framework Section */}
      <section className="py-24 bg-brand-ivory/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full border border-brand-gold/20 text-brand-navy text-sm font-bold mb-6 bg-white shadow-sm"
            >
              Curriculum Framework
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-6 tracking-tight"
            >
              The Complete <span className="text-brand-crimson">High School</span> Framework
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
                      <p className="text-xs font-bold text-brand-gold uppercase tracking-widest">Board Standards</p>
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
                      "A selection of subjects designed to engage students in intellectual inquiry while providing career direction."
                    </p>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 rounded-[40px] overflow-hidden shadow-2xl relative aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200" 
                    alt="Scholastic core" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10" />
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
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
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
                      <p className="text-xs font-bold text-brand-blue uppercase tracking-widest">Skill & Ethics</p>
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
                      "Developing conscious individuals who potential to contribute significantly to society."
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
                      <p className="text-xs font-bold text-brand-crimson uppercase tracking-widest">Leadership & Fitness</p>
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
                        Others & Electives
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
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200" 
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
              Following the CBSE assessment pattern, our high school program ensures rigorous evaluation across multiple dimensions.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
            {assessment.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8 bg-white border border-gray-100 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-navy mb-3">{item.component}</h3>
                <p className="text-text-medium text-sm leading-relaxed mb-6">
                  {item.details}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                   <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest leading-none">Marks</span>
                   <span className="text-xl font-bold text-brand-navy leading-none">{item.marks}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 max-w-4xl mx-auto text-left">
            <div className="p-10 sm:p-12 bg-brand-navy rounded-[48px] text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
               
               <div className="relative z-10">
                 <h4 className="font-heading text-3xl font-bold mb-10 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-brand-gold flex items-center justify-center text-brand-navy">
                     <ChevronRight className="w-6 h-6" />
                   </div>
                   Final Calculation
                 </h4>
                 
                 <div className="grid sm:grid-cols-2 gap-x-20 gap-y-4">
                   <div className="space-y-4">
                     {assessment.slice(0, 3).map((item, i) => (
                       <div key={i} className="flex items-center justify-between py-4 border-b border-white/10 hover:bg-white/5 transition-colors px-4 rounded-xl">
                         <span className="text-white/80 font-bold text-lg">{item.component}</span>
                         <span className="font-bold text-2xl text-brand-gold">{item.marks}</span>
                       </div>
                     ))}
                   </div>
                   <div className="space-y-4">
                     {assessment.slice(3).map((item, i) => (
                       <div key={i} className="flex items-center justify-between py-4 border-b border-white/10 hover:bg-white/5 transition-colors px-4 rounded-xl">
                         <span className="text-white/80 font-bold text-lg">{item.component}</span>
                         <span className="font-bold text-2xl text-brand-gold">{item.marks}</span>
                       </div>
                     ))}
                     <div className="flex items-center justify-between pt-4 px-4">
                        <span className="text-brand-gold font-black text-2xl uppercase tracking-tighter">Total Marks</span>
                        <span className="text-5xl font-black text-brand-gold">100</span>
                     </div>
                   </div>
                 </div>

                 <div className="mt-16 space-y-6">
                    <h5 className="font-heading text-gold text-xl font-bold mb-6 flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                        Important Guidelines
                    </h5>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "The primary medium of instruction at our secondary school in Karnataka is English.",
                        "Students must choose one from football, basketball & taekwondo.",
                        "Assessment follows CBSE standards for maintaining note-taking quality."
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
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
            alt="School background" 
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="relative z-10 py-20 px-8 text-center text-white">
            <h2 className="font-heading text-4xl sm:text-6xl font-bold mb-8 tracking-tight">Embark on Superior Learning</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
              Our High School environment provides the intellectual inquiry and future career guidance every student needs.
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
