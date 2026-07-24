import { motion } from "motion/react";
import React from "react";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  GraduationCap, 
  Languages, 
  Calculator, 
  Globe, 
  Cpu, 
  Palette, 
  Music, 
  Activity, 
  Heart,
  ChevronRight,
  Mic2,
  Ear,
  BookText,
  PenTool,
  CheckCircle2
} from "lucide-react";
import { cn } from "../lib/utils";

const framework = {
  scholastic: {
    grades1_4: [
      "English",
      "Kannada & Hindi",
      "Mathematics",
      "Environmental Studies (EVS)",
      "Computer Science"
    ],
    grade5: [
      "English",
      "Kannada / Hindi",
      "Kannada / Hindi / Sanskrit",
      "Mathematics",
      "Science",
      "Social Studies",
      "Computer Science"
    ]
  },
  coScholastic: [
    "Bhagavad Gita – Life Lessons",
    "Art & Craft",
    "Music – Indian Vocal Music with Keyboard",
    "Dance (Folk & Classical)",
    "Co-Curricular Activities (CCA)",
    "Pottery",
    "Space Lab (with Genex team)",
    "Science & Math Lab",
    "Olympiad (All Subjects)",
    "Club Activities",
    "Inter School Competitions",
    "Happy Hour Sessions",
    "General Assembly",
    "House Assembly",
    "Step-N-Learn"
  ],
  sports: {
    mandatory: ["Yoga", "Skating", "Taekwondo", "Chess"],
    optional: [
      "Basketball",
      "Football",
      "Gymnastics",
      "Kho Kho",
      "Athletics",
      "Throwball",
      "Jump Rope",
      "Carrom",
      "Table Tennis"
    ]
  }
};

const assessmentSkills = [
  { 
    name: "Listening", 
    icon: Ear, 
    description: "Developing the ability to understand spoken language, follow complex instructions, and identify key information in various contexts."
  },
  { 
    name: "Speaking", 
    icon: Mic2, 
    description: "Expressing ideas clearly and confidently, participating in discussions, and mastering correct pronunciation and intonation."
  },
  { 
    name: "Reading", 
    icon: BookText, 
    description: "Building strong comprehension skills, decoding complex texts, and fostering an enduring love for literature and lifelong reading."
  },
  { 
    name: "Writing", 
    icon: PenTool, 
    description: "Mastering creative expression, grammar, and structured storytelling to communicate ideas effectively across different genres."
  },
];

export function Primary() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1577891729319-f4871c6ecdf1?auto=format&fit=crop&q=80&w=2000" 
            alt="Students in classroom" 
            className="w-full h-full object-cover opacity-20"
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
              Grades 1-5 • Primary Program
            </div>
            
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.95]">
              Vishwa Vidyapeeth <br />
              <span className="text-brand-gold italic">Primary</span> <br />
              School Program
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl">
              Building on the foundations of Tarang to foster independent thinking, exploration, and idea formation.
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
              A Foundation for the <span className="text-brand-crimson">Next Scholastic</span> Grades
            </h2>
            <div className="space-y-6 text-xl text-text-medium leading-relaxed">
              <p>
                The primary program at Vishwa Vidyapeeth, the best primary school in Varthur, builds on the Tarang program. Since children have an essential foundation, the curriculum focuses on language learning, helping them explore, comprehend, and form ideas.
              </p>
              <p>
                The environment is positive and lively, and builds key skills in reading, writing, listening, and speaking, acting as a foundation for the next scholastic grades.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-brand-ivory border-l-4 border-brand-gold">
                <p className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-2 opacity-60">Connection 1</p>
                <p className="text-brand-navy font-medium italic">Building on the foundations of Tarang.</p>
              </div>
              <div className="p-6 rounded-2xl bg-brand-ivory border-l-4 border-brand-blue">
                <p className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-2 opacity-60">Connection 2</p>
                <p className="text-brand-navy font-medium italic">Laying foundations for future scholastic programs.</p>
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
              src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=1000" 
              alt="Primary student" 
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
              The Complete <span className="text-brand-crimson">Primary School</span> Framework
            </motion.h2>
          </div>

          <div className="space-y-16">
            {/* 1. Scholastic - Grades 1-4 */}
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
                      <p className="text-xs font-bold text-brand-gold uppercase tracking-widest">Academic Excellence</p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h4 className="font-heading text-2xl font-bold text-brand-navy mb-6">
                      <span className="italic text-brand-gold">Grades</span> 1/2/3/4
                    </h4>
                    <ul className="space-y-4">
                      {framework.scholastic.grades1_4.map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-text-medium text-lg font-medium">
                          <ChevronRight className="w-5 h-5 text-brand-blue flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-8 border-t border-brand-ivory">
                    <h4 className="font-heading text-lg font-bold text-brand-navy mb-4">Highlights:</h4>
                    <div className="flex flex-wrap gap-4">
                      {["Literacy & Numeracy", "Multilingual Learning", "Environmental Awareness"].map((h, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-ivory/50 text-brand-navy text-sm font-bold">
                          <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 rounded-[40px] overflow-hidden shadow-2xl relative aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200" 
                    alt="Scholastic core" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* 2. Scholastic - Grade 5 (Alternate) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[48px] sm:rounded-[64px] p-8 sm:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-white/50"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="rounded-[40px] overflow-hidden shadow-2xl relative aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1577891729319-f4871c6ecdf1?auto=format&fit=crop&q=80&w=1200" 
                    alt="Grade 5 transition" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                      <BookOpen className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl font-bold text-brand-navy">Foundation</h3>
                      <p className="text-xs font-bold text-brand-blue uppercase tracking-widest">Preparatory Year</p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h4 className="font-heading text-2xl font-bold text-brand-navy mb-6">
                      <span className="italic text-brand-gold">Grade</span> 5
                    </h4>
                    <ul className="space-y-4">
                      {framework.scholastic.grade5.map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-text-medium text-lg font-medium">
                          <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-brand-ivory">
                    <p className="text-text-medium italic leading-relaxed">
                      "Introduction to advanced scientific concepts and preparation for the next scholastic tier."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Co-Scholastic */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[48px] sm:rounded-[64px] p-8 sm:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-white/50"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                      <Palette className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl font-bold text-brand-navy">Co-Scholastic</h3>
                      <p className="text-xs font-bold text-brand-blue uppercase tracking-widest">Skill & Creative Enrichment</p>
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
                      "Fostering creativity and critical thinking through specialized labs and engagement sessions."
                    </p>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 rounded-[40px] overflow-hidden shadow-2xl relative aspect-[4/3] group">
                  <img 
                    src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Creative skills" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
            </motion.div>

            {/* 4. Sports */}
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
                    src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=1200" 
                    alt="Physical activities" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="lg:order-2">
                  <div className="flex items-center gap-4 mb-10">
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
                        Mandatory Athletics
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {framework.sports.mandatory.map((item, i) => (
                          <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-brand-ivory shadow-sm hover:shadow-md hover:border-brand-crimson/20 transition-all">
                            <CheckCircle2 className="w-5 h-5 text-brand-crimson/60" />
                            <span className="font-bold text-brand-navy">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-brand-navy font-bold text-xl mb-6 flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                        Optional / Rotational Exposure
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {framework.sports.optional.map((item, i) => (
                          <span key={i} className="px-5 py-2.5 rounded-xl bg-mist-grey text-text-medium text-sm font-bold hover:bg-brand-navy hover:text-white transition-all cursor-default">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-4"
            >
              Assessment for the Primary School Program
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-32 h-1 bg-brand-gold mx-auto rounded-full origin-center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentSkills.map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-start text-left h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-8">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-navy mb-6">{skill.name}</h3>
                <p className="text-text-medium leading-relaxed text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-brand-ivory/50 rounded-[32px] p-8 text-center max-w-4xl mx-auto border border-brand-gold/10"
          >
            <p className="text-brand-navy text-lg leading-relaxed italic">
              "Assessment for these four fundamental skills provides a clear image of students’ progress in today’s competitive world. Qualitative assessment includes assessing whether the overall student experience has improved in terms of joy, growth, and belonging."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notes */}

      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="p-10 sm:p-12 rounded-[48px] bg-brand-navy text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h3 className="font-heading text-3xl font-bold mb-10 flex items-center gap-3">
                <CheckCircle2 className="text-brand-gold" />
                Important Notes
              </h3>
              <div className="space-y-6">
                {[
                  "The primary medium of instruction across all grades is English.",
                  "Second- and third-language options are subject to availability and may be revised in response to curriculum updates and educational board guidelines.",
                  "Communicative Sanskrit is taught till Grade 2."
                ].map((note, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-xs shrink-0 mt-1">
                      {i + 1}
                    </div>
                    <p className="text-white/80 leading-relaxed">{note}</p>
                  </div>
                ))}
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
            <h2 className="font-heading text-4xl sm:text-6xl font-bold mb-8">Take the Next Step</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
              Our Primary School Program offers the perfect balance of academic rigor, physical well-being, and character growth.
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
