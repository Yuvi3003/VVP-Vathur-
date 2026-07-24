import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef, useState } from "react";
import { Target, Eye, Quote, Shield, Lightbulb, Users, Heart, ChevronDown, BookOpen, UserCheck, Sparkles, Plus, Minus } from "lucide-react";
import { cn } from "../lib/utils";

const values = [
  {
    title: "Compassion",
    icon: Heart,
    desc: "We inculcate the value of empathy in all our children. They learn to respect the difference of opinions, and work as a team irrespective of the situational differences."
  },
  {
    title: "Uniqueness",
    icon: Target,
    desc: "Our aim is to encourage children to think outside the box. We encourage them to involve in risk taking, problem solving, and individual opinion formation."
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    desc: "One of the core interests that we build among the children includes curiosity, imagination, creativity, experimentation and perseverance."
  },
  {
    title: "Discipline",
    icon: Shield,
    desc: "We train children to take over their mind and body so that they can control their actions for productivity, better decision-making, and greater success in life."
  }
];

const advisoryBoard = [
  { 
    name: "Padma Bhushan Nambi Narayanan", 
    role: "ISRO Aerospace Scientist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  { 
    name: "Padma Shri Sujatha Ramdorai", 
    role: "PM Scientific Advisory Council Member",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
  },
  { 
    name: "Dr. Nithin Nagaraj", 
    role: "Electrical Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  },
  { 
    name: "Dr. Raghavendra Rao D", 
    role: "Consultant Spine Surgeon",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400"
  },
  { 
    name: "Shri Basavaraj Umarani", 
    role: "Visually-Impaired 'The Walking Computer'",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  }
];

const faqs = [
  {
    question: "Who are the founders of Vishwa Vidyapeeth?",
    answer: "Vishwa Vidyapeeth is managed by a not-for-profit charitable trust—CS Education Trust. The trustees are a dedicated group of professionals with diverse backgrounds and a deep commitment to excellence in education. They vow to impart education of the highest standard, keeping intact our Indian values, and establish Vishwa Vidyapeeth as the place where children achieve all-round growth and excellence."
  },
  {
    question: "How is Vishwa Vidyapeeth School different from other schools?",
    answer: "Vishwa Vidyapeeth was conceived with an idea to retain our Indian values and culture. It is a conscious community that works on the ‘Guru-Shishya’ model and is inspired by the works of our mentors over generations. We are indebted to the immense contribution of each teacher who has helped to shape the society today, and we want to work harmoniously with parents to educate our students to become model Indian citizens. We provide a strong foundation for their spirits and create a space that will help to ensure growth of the child in all directions. The highlights of our program are: High individual attention due to the limited number of students in each class; Superior education with top-notch facilities at an affordable cost; Child & parent-centric education with a regular parent engagement program to help parents with apt parenting techniques that will help us to nurture the child to their best potential; Transparency at its best with the Mother-on-Duty program; Emphasis on retaining our Indian culture and traditions through our diverse programs."
  },
  {
    question: "What rewards & recognition has Vishwa Vidyapeeth received?",
    answer: "We have received the following awards over the brief span of our existence: Awarded as the “High Happiness Quotient School” by Education World—Ranked No. 1 in Bangalore, No. 1 in Karnataka, and No. 2 in India.; Awarded most “Innovative School with Academic Excellence in Bangalore-Karnataka” by the Karnataka Governor; Most Innovative School with Academic Excellence in Bangalore (2022); International School Award Accreditation; No. 1 School in India for ‘Individual Attention’ & ‘Value for Money’ (4th national conference on K-12 leadership); Best Emerging Educational Institution and Best Institution for Infrastructure (Indus Foundation); Most promising school of the year (Global Leaders Foundation)"
  },
  {
    question: "Is the school affiliated to any religion?",
    answer: "We are a secular school and are neither affiliated to nor endorse any religion."
  },
  {
    question: "Is Criminal Background Verification (CBV) done for all the staff members?",
    answer: "Yes, a CBV check is done for all teaching and non-teaching staff."
  }
];

function FAQItem({ faq }: { faq: typeof faqs[0]; key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0 overflow-hidden group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group-hover:text-brand-blue transition-all"
      >
        <span className="font-heading font-bold text-lg sm:text-xl text-brand-navy leading-snug pr-8 transition-colors group-hover:text-brand-blue">
          {faq.question}
        </span>
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-brand-navy text-white rotate-180" : "bg-gray-100 text-brand-navy group-hover:bg-brand-blue/10"
        )}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "max-h-[800px] mb-8 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-text-medium leading-relaxed text-base sm:text-lg max-w-[90%]">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  return (
    <div ref={containerRef} className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-brand-navy overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546422904-90eab23c3d7e?auto=format&fit=crop&q=80&w=2000" 
            alt="School Campus" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/80 to-brand-navy" />
        </motion.div>

        <div className="container mx-auto px-6 sm:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-bold mb-8 backdrop-blur-sm uppercase tracking-widest">
              Established 2020
            </div>
            <h1 className="font-heading text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              About <span className="text-brand-gold italic">Vishwa Vidyapeeth</span> Varthur
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              A multi-curriculum school committed to excellence, managed by the C.S. Education Trust—a not-for-profit charitable trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 sm:px-12 bg-brand-ivory/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-text-medium leading-relaxed"
          >
            <p>
              Vishwa Vidyapeeth, Varthur, is a multi-curriculum school under the Vishwa Vidyapeeth Group of Schools. Established in 2020, we are managed by the C.S. Education Trust—a not-for-profit charitable trust committed to excellence in education.
            </p>
            <p>
              The Vishwa Vidyapeeth Group of Schools is an institution more than a decade old. Our name stands for <span className="text-brand-navy font-bold">"the sacred place for attaining education."</span>
            </p>
            <p>
              The school's curriculum promotes experiential learning in a stress-free environment. High standards of education carve an enjoyable and thriving journey for every child.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] overflow-hidden aspect-video shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000" 
              alt="Classroom"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-navy text-white p-12 rounded-[40px] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Eye className="w-32 h-32" />
            </div>
            <h2 className="font-heading text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy">
                <Eye className="w-5 h-5" />
              </span>
              Our Vision
            </h2>
            <blockquote className="text-2xl font-heading font-medium italic leading-relaxed mb-8">
              "Education is the manifestation of perfection already in man."
            </blockquote>
            <p className="text-brand-gold font-bold">— Swami Vivekananda</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-blue text-white p-12 rounded-[40px] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target className="w-32 h-32" />
            </div>
            <h2 className="font-heading text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy">
                <Target className="w-5 h-5" />
              </span>
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed">
              To provide a well-rounded curriculum, facilities and an environment which empower both the learner and the educator to reach their maximum potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guiding Statement */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-crimson/10 text-brand-crimson mb-8"
          >
            <BookOpen className="w-10 h-10" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy mb-12"
          >
            Guiding Statement
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="font-heading text-2xl sm:text-3xl text-brand-blue leading-relaxed font-bold">
              वि द्या ददाति वि नयंवि नयाद्याति पात्रताम ्। <br />
              पात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सखु म ्॥
            </div>
            <div className="max-w-2xl mx-auto text-xl text-text-medium italic leading-relaxed">
              "Education gives humility; humility gives character. From character one gets wealth, from wealth one gets righteousness, and in righteousness there is joy."
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values We Stand For */}
      <section className="py-24 px-6 sm:px-12 bg-brand-ivory/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-[48px] font-bold text-brand-navy mb-6">Values We Stand For</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 group transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <v.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-navy mb-4">{v.title}</h3>
                <p className="text-text-medium leading-relaxed text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-24 px-6 sm:px-12 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-brand-ivory/50" />
        
        <div className="max-w-[1000px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 pt-8"
          >
            <h2 className="font-heading text-3xl sm:text-[40px] font-bold text-brand-navy mb-4 tracking-tight">
              Director's Message
            </h2>
            <p className="text-lg font-medium text-brand-crimson">
              The Thought Behind Every Step Forward
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bg-brand-navy rounded-[40px] shadow-[0_20px_40px_rgba(15,31,70,0.15)] relative flex flex-col md:flex-row overflow-hidden"
          >
            {/* Portrait Image */}
            <div className="w-full md:w-2/5 h-[350px] sm:h-[400px] md:h-auto relative shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Director" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-brand-navy/10" />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-3/5 p-8 sm:p-10 lg:p-14 relative flex flex-col justify-center">
              {/* Decorative quotes */}
              <div className="absolute top-6 left-8 text-[120px] leading-none font-serif text-white/5 select-none pointer-events-none">"</div>
              
              <div className="relative z-10 text-white/90 text-sm sm:text-base leading-relaxed space-y-5">
                <p>
                  "The journey of a thousand miles begins with a single step. With every year, we continue working towards one goal: establishing Vishwa Vidyapeeth as a place that equips students with both intelligence and character to become future leaders of our country. The two core pillars of Vishwa Vidyapeeth: academics delivered by exceptional teachers and a structured, achievement-oriented school culture that are designed to provide students with the tools for success. A school with the 'Guru-Shishya' parampara, VVPCS balances co-curricular opportunities with academic excellence, fostering lifelong learning in a stress-free environment without compromising the quality of education."
                </p>
                
                <div className="pt-6 border-t border-white/10 mt-6 flex flex-col items-end text-right">
                  <div className="font-heading text-xl sm:text-2xl font-bold text-white mb-1">Ms Suseela Santhosh</div>
                  <div className="text-brand-gold text-xs sm:text-sm font-medium">Director, Vishwa Vidyapeeth Group of Schools</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-[48px] font-bold text-brand-navy mb-6">Our Advisory Board</h2>
            <p className="text-text-medium text-lg max-w-2xl mx-auto">
              Guided by visionaries and experts from diverse fields to ensure our students receive a globally competitive education grounded in strong values.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {advisoryBoard.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 h-full transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                  <div className="aspect-[4/5] relative overflow-hidden bg-brand-ivory">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="font-heading font-bold text-brand-navy text-lg mb-1">{member.name}</h4>
                    <p className="text-text-medium text-xs font-medium uppercase tracking-wider">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 sm:px-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-ivory/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
            
            {/* Left side: Heading */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/5"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-5 h-5 bg-brand-blue rounded-sm flex items-center justify-center text-white">
                  <Sparkles className="w-3 h-3 fill-white" />
                </div>
                <span className="text-brand-blue font-bold text-sm tracking-tight">FAQ</span>
              </div>
              
              <h2 className="font-heading text-5xl sm:text-6xl font-bold text-brand-navy mb-8 tracking-tight leading-[1.05]">
                Your Questions <br />
                <span className="text-brand-blue italic">Answered</span>
              </h2>
              
              <p className="text-xl text-text-medium leading-relaxed max-w-sm">
                Find clear answers and solutions to all your questions about our school quickly.
              </p>
              
              <div className="mt-12 hidden lg:block">
                <div className="p-8 rounded-[32px] bg-brand-ivory border border-gray-100 relative overflow-hidden group">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-gold/10 rounded-full blur-xl transition-transform group-hover:scale-150" />
                  <h4 className="font-heading font-bold text-lg text-brand-navy mb-2">Still have questions?</h4>
                  <p className="text-sm text-text-medium mb-6">We're here to help you understand every aspect of our program.</p>
                  <a href="/contact" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all">
                    Contact Admissions <ChevronDown className="-rotate-90 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right side: Accordion */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-3/5"
            >
              <div className="divide-y divide-gray-100">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} faq={faq} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
