import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ClipboardCheck, 
  FileText, 
  Users, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Heart,
  GraduationCap,
  School,
  Download,
  ExternalLink,
  BookOpen
} from "lucide-react";
import { cn } from "../lib/utils";

const admissionSteps = [
  {
    id: 1,
    title: "1. Submit the Online Enquiry",
    desc: "Fill in the enquiry form. Our team will reach out — or visit campus between 9 am and 4 pm, Monday to Saturday.",
    icon: ClipboardCheck
  },
  {
    id: 2,
    title: "2. Receive the Admission Form",
    desc: "Pay ₹1,000 (UPI/Cash), fill the form online, and upload the required documents.",
    icon: FileText
  },
  {
    id: 3,
    title: "3. Document Verification",
    desc: "Once verified, we'll fix a date for your family interaction.",
    icon: ShieldCheck
  },
  {
    id: 4,
    title: "4. Family Interaction",
    desc: "A relaxed meeting with our Head of School or Academics. No interview, no preparation — just a conversation. Online interactions are available for parents living far away.",
    icon: Users
  },
  {
    id: 5,
    title: "5. Confirm & Join",
    desc: "On receiving your confirmation email, pay the prescribed fee and submit any pending documents. The admissions office handles everything from there.",
    icon: CheckCircle2
  }
];

const holidays = [
  { srNo: 1, date: "26 June 2026", day: "Friday", event: "Muharram" },
  { srNo: 2, date: "15 August 2026", day: "Saturday", event: "Independence Day" },
  { srNo: 3, date: "21 August 2026", day: "Friday", event: "Varamahalakshmi Vratam" },
  { srNo: 4, date: "26 August 2026", day: "Wednesday", event: "Eid-Milad" },
  { srNo: 5, date: "14 September 2026", day: "Monday", event: "Ganesh Chaturthi" },
  { srNo: 6, date: "2 October 2026", day: "Friday", event: "Gandhi Jayanthi" },
  { srNo: 7, date: "10 October 2026", day: "Saturday", event: "Mahalaya Amavasya" },
  { srNo: 8, date: "19 October 2026", day: "Monday", event: "Maha Navami / Ayudha Pooja" },
  { srNo: 9, date: "20 October 2026", day: "Tuesday", event: "Vijayadashami" },
  { srNo: 10, date: "26 October 2026", day: "Monday", event: "Valmiki Jayanthi" },
  { srNo: 11, date: "1 November 2026", day: "Sunday", event: "Kannada Rajyotsava" },
  { srNo: 12, date: "8 November 2026", day: "Sunday", event: "Naraka Chaturdashi" },
  { srNo: 13, date: "10 November 2026", day: "Tuesday", event: "Balipadiyami" },
  { srNo: 14, date: "27 November 2026", day: "Friday", event: "Kanakadasa Jayanthi" },
  { srNo: 15, date: "25 December 2026", day: "Friday", event: "Christmas" },
  { srNo: 16, date: "1 January 2027", day: "Friday", event: "New Year" },
  { srNo: 17, date: "15 January 2027", day: "Friday", event: "Makara Sankranthi" },
  { srNo: 18, date: "26 January 2027", day: "Tuesday", event: "Republic Day" },
  { srNo: 19, date: "6 March 2027", day: "Saturday", event: "Maha Shivaratri" },
  { srNo: 20, date: "9 March 2027", day: "Tuesday", event: "Eid-ul-Fitr" },
  { srNo: 21, date: "26 March 2027", day: "Friday", event: "Good Friday" },
  { srNo: 22, date: "7 April 2027", day: "Wednesday", event: "Ugadi" },
  { srNo: 23, date: "14 April 2027", day: "Wednesday", event: "Ambedkar Jayanthi" },
  { srNo: 24, date: "1 May 2027", day: "Saturday", event: "May Day" },
  { srNo: 25, date: "9 May 2027", day: "Sunday", event: "Basava Jayanthi" },
  { srNo: 26, date: "16 May 2027", day: "Sunday", event: "Bakrid" }
];

const vacations = [
  { name: "Dussehra Vacation", dates: "15/10/26 to 20/10/26", opening: "21st October 2026, Wednesday" },
  { name: "Deepavali Vacation", dates: "07/11/26 to 10/11/26", opening: "11th November 2026, Wednesday" },
  { name: "Winter Vacation", dates: "25/12/26 to 03/01/27", opening: "4th January 2027, Monday" }
];

const faqs = [
  {
    category: "Admissions & Eligibility",
    questions: [
      {
        q: "To which classes are admissions open?",
        a: "Playgroup to Class 1 are typically open every year. For higher grades, admissions depend on seat availability. Please check with our admissions office."
      },
      {
        q: "Will the age limit be relaxed under any circumstances?",
        a: "No, age limits are not relaxed. Being age-appropriate for a class helps your child learn with confidence, master skills better, and avoid age-restriction issues at the Class 10 board stage."
      },
      {
        q: "Are the Birth Certificate and Transfer Certificate compulsory?",
        a: "Yes. The Birth Certificate is mandatory at the time of joining. The Transfer Certificate (original copy) must be submitted one month before school reopens in June."
      },
      {
        q: "What is the fee structure?",
        a: "Fee details are not published online and are shared during your campus visit, based on the curriculum and class. We design fees to balance affordability with the quality of education we deliver."
      },
      {
        q: "What will the interview be like? Do I need to prepare my child?",
        a: "We don't conduct interviews. Our family interaction is a relaxed meeting designed to help us know your child and you. There's nothing to prepare for."
      },
      {
        q: "Can the admission process be completed online if I live far away?",
        a: "Yes. For parents relocating from other states or countries, we offer the entire interaction online — same steps, same outcome."
      },
      {
        q: "Are uniforms and books provided by the school?",
        a: "We share authorised vendor details. The Uniform Store is open throughout the year for additional purchases."
      }
    ]
  },
  {
    category: "Academics & School Life",
    questions: [
      {
        q: "What are the school timings?",
        a: "● Pre-Primary: 7:55 am – 12:20 pm (Mon–Fri)\n● Primary: 7:55 am – 2:45 pm (Mon–Fri)\n● Middle & Secondary: 7:55 am – 2:45 pm (Mon–Fri); 7:55 am – 2:45 pm (1st Saturday); 7:55 am – 1:00 pm (2nd & 5th Saturday). 3rd & 4th Saturdays are holidays."
      },
      {
        q: "How many students are there per class?",
        a: "● Nursery — 15 to 20\n● LKG & UKG — 20 to 25\n● Class 1 and above — 35 (average per section)"
      },
      {
        q: "What is the teacher-student ratio?",
        a: "1:10."
      },
      {
        q: "What languages are offered?",
        a: "English is the medium of instruction. We also offer Kannada, Hindi, and Sanskrit."
      },
      {
        q: "How is academic progress communicated?",
        a: "Through PTMs (held three times a year) and one-on-one meetings with the Class Teacher and Coordinator as needed."
      },
      {
        q: "How accessible are the teachers and Principal?",
        a: "Highly. Parents can reach teachers, coordinators, administrators, or senior leadership via email or prior appointment. Our Mother-on-Duty programme gives you a direct window into daily school life."
      },
      {
        q: "How is daily communication handled?",
        a: "Through our school management app — circulars, homework, fee details, payment portal, newsletters, and report cards all live in one place."
      },
      {
        q: "Are academics, sports, and music given equal importance?",
        a: "Yes. Our curriculum balances academic rigour with co-scholastic depth, age-appropriately, so your child grows disciplined, well-mannered, confident, and humble all at once."
      },
      {
        q: "How often are educational tours organised?",
        a: "Once a quarter, varying by class."
      }
    ]
  },
  {
    category: "Day-to-Day & Safety",
    questions: [
      {
        q: "Does my child need to be fully toilet-trained for pre-primary?",
        a: "No. Lady assistants and teachers accompany children to the restroom. Toilet training is part of the gradual grooming process — never rushed, never forced."
      },
      {
        q: "Are day care options available?",
        a: "Yes — until 4:30 pm for all students, with parent pick-up. Pre-Primary children can opt for day care till 2:45 pm with transport. Only authorised persons with proper ID are allowed at pick-up."
      },
      {
        q: "What happens if my child falls ill at school?",
        a: "Minor injuries are treated on campus. For anything that needs further medical attention, parents are contacted immediately. No medicine is administered without written parental permission."
      },
      {
        q: "What is your child safety policy?",
        a: "Strict recruitment norms, criminal background verification (CBV) for all teaching and non-teaching staff, female security guards, 24/7 CCTV surveillance, and no unauthorised personnel inside the campus at any time."
      },
      {
        q: "How do you handle disciplinary violations?",
        a: "We take discipline seriously and handle violations sensitively. Our strict discipline and complaint redressal policy is shared with all parents."
      }
    ]
  }
];

function renderAnswerText(text: string) {
  const lines = text.split("\n");
  const hasBullets = lines.some(l => l.trim().startsWith("●") || l.trim().startsWith("•") || l.trim().startsWith("-"));

  if (hasBullets) {
    return (
      <div className="space-y-2 text-text-medium">
        {lines.map((line, i) => {
          const trimmed = line.trim();
          if (trimmed.startsWith("●") || trimmed.startsWith("•") || trimmed.startsWith("-")) {
            return (
              <div key={i} className="flex items-start gap-2 ml-4">
                <span className="text-brand-gold mt-1.5 shrink-0 text-xs">●</span>
                <span className="leading-relaxed font-medium">{trimmed.substring(1).trim()}</span>
              </div>
            );
          }
          return <p key={i} className="leading-relaxed">{line}</p>;
        })}
      </div>
    );
  }

  return (
    <div className="space-y-4 text-text-medium leading-relaxed font-medium">
      {lines.map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </div>
  );
}

function AccordionItem({ question, answer }: { question: string; answer: string; key?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-brand-crimson transition-colors"
      >
        <span className="text-lg font-bold text-brand-navy">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-brand-gold shrink-0 ml-4"
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
            className="overflow-hidden"
          >
            <div className="pb-8">
              {renderAnswerText(answer)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FaqTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap justify-center gap-3">
        {faqs.map((group, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={cn(
              "px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border-2",
              activeTab === idx 
                ? "bg-brand-navy text-white border-brand-navy shadow-lg" 
                : "bg-white text-brand-navy border-zinc-100 hover:border-brand-navy/30"
            )}
          >
            {group.category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-zinc-50 rounded-[40px] p-8 sm:p-12 border border-zinc-100 shadow-sm animate-fade-in"
        >
          <div className="divide-y divide-zinc-200">
            {faqs[activeTab].questions.map((faq, i) => (
              <AccordionItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function Admissions() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="School Admissions" 
          />
          <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-gold/20 text-brand-gold text-sm font-bold mb-8 uppercase tracking-[0.3em] border border-brand-gold/30"
          >
            Join Our Community
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-6xl sm:text-8xl font-bold text-white mb-10 tracking-tight"
          >
            Admissions <span className="text-brand-gold">at Vishwa Vidyapeeth</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/95 leading-relaxed max-w-4xl mx-auto font-medium"
          >
            Choosing a school is one of the most important decisions a parent makes. We've made the journey to ours as simple, transparent, and human as possible - no entrance exam pressure, no formal interviews, just honest conversations between us and you.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-8 leading-tight">
                Simple, Transparent, & <br />
                <span className="text-brand-crimson">Human Journey</span>
              </h2>
              <p className="text-xl text-text-medium leading-relaxed mb-10 opacity-85">
                We believe admission is not a filter but the beginning of a lifelong partnership. Our admissions process values the child and seeks to minimize stress for the entire family.
              </p>
              <div className="p-8 rounded-[40px] bg-brand-ivory border-l-8 border-brand-gold shadow-lg">
                <span className="block text-brand-navy font-black text-sm uppercase tracking-widest mb-4">Current Status</span>
                <p className="text-2xl font-heading font-bold text-brand-navy">
                  Admissions are now open for <span className="text-brand-crimson">Playgroup through Class IX</span> for the upcoming academic year.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Teacher Ratio", value: "1:10", icon: Users },
                { label: "Simple Steps", value: "05", icon: ClipboardCheck },
                { label: "Transparent", value: "100%", icon: ShieldCheck },
                { label: "Holistic", value: "Care", icon: Heart },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[40px] shadow-sm border border-zinc-100 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 flex items-center justify-center text-brand-gold mb-4">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-brand-navy mb-1">{stat.value}</div>
                  <div className="text-xs font-black uppercase tracking-widest text-text-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process (Horizontal Stepper Style) */}
      <section className="py-24 px-6 sm:px-12 bg-zinc-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-[0.02]">
           <GraduationCap className="w-96 h-96 rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
             <h2 className="font-heading text-5xl sm:text-7xl font-bold text-brand-navy mb-6 tracking-tight">
               The Admission <span className="text-brand-crimson">Process</span>
             </h2>
             <p className="text-xl text-text-medium">From first enquiry to first day, in five simple steps.</p>
          </div>

          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-gold/20 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid lg:grid-cols-5 gap-8 relative z-20">
              {admissionSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group bg-white p-8 rounded-[40px] border border-zinc-100 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-20 h-20 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy mb-8 border-4 border-white shadow-md group-hover:bg-brand-crimson group-hover:text-white transition-all relative">
                    <step.icon className="w-8 h-8" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-gold text-brand-navy text-sm font-black flex items-center justify-center">0{step.id}</div>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-brand-navy mb-4 min-h-[56px] flex items-center justify-center leading-snug">{step.title}</h4>
                  <p className="text-sm text-text-medium leading-relaxed font-medium opacity-80">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Criteria, Documents & Fee Note */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Age & Eligibility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-navy text-white p-12 rounded-[50px] shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="relative z-10">
                <div className="w-16 h-1 bg-brand-gold mb-10 rounded-full" />
                <h3 className="font-heading text-4xl font-bold mb-8">Age & Eligibility</h3>
                <p className="text-lg opacity-90 mb-10 leading-relaxed font-medium">
                  Admissions are open for Playgroup to Class IX. Age criteria varies by grade — please confirm the exact bracket with our admissions office at the time of enquiry. Age limits are not relaxed for any class.
                </p>
              </div>
              <div className="relative z-10 flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                 <ShieldCheck className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
                 <p className="text-xs font-bold opacity-90 italic">Admissions are open for Playgroup to Class IX. Age criteria varies by grade.</p>
              </div>
            </motion.div>

            {/* Documents Required */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-50 p-12 rounded-[50px] border border-zinc-100 shadow-sm relative overflow-hidden"
            >
              <h3 className="font-heading text-4xl font-bold text-brand-navy mb-10">Documents Required</h3>
              <ul className="space-y-6">
                {[
                  { title: "Completed online admission form", desc: "Submitted directly through the portal." },
                  { title: "Birth Certificate (mandatory at the time of joining)", desc: "Original copy to be presented during verification." },
                  { title: "Transfer Certificate from previous school", desc: "Original copy, submitted one month before school reopens in June." }
                ].map((doc, idx) => (
                  <motion.li 
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex gap-5 group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-navy mb-1 leading-snug">{doc.title}</h5>
                      <p className="text-xs text-text-medium opacity-70 leading-relaxed">{doc.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* A Note on Fees */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-ivory p-12 rounded-[50px] border border-brand-gold/20 shadow-lg relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-1 bg-brand-crimson mb-10 rounded-full" />
                <h3 className="font-heading text-4xl font-bold text-brand-navy mb-8">A Note on Fees</h3>
                <p className="text-lg text-brand-navy leading-relaxed font-semibold opacity-90 mb-10">
                  Fee details are shared during your campus visit, based on the class and curriculum chosen. Our structure is designed to keep parent burden minimal while sustaining the quality of learning we offer.
                </p>
              </div>
              <div className="p-6 bg-white rounded-3xl border border-brand-gold/10 shadow-sm">
                <span className="block text-brand-crimson font-black text-xs uppercase tracking-widest mb-2">Visitor Info</span>
                <p className="text-xs text-text-medium leading-relaxed font-bold">Please schedule a school tour with our desk coordinators to receive class-wise curriculum fee guides.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Quick Links / Download Section */}
      <section className="py-16 px-6 sm:px-12 bg-white border-t border-zinc-100">
         <div className="max-w-4xl mx-auto rounded-[40px] bg-brand-navy text-white p-10 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 text-brand-gold font-black uppercase tracking-widest text-[10px] mb-3">
                  <BookOpen className="w-3.5 h-3.5" /> Core Resources
                </div>
                <h3 className="font-heading text-3xl font-bold">Quick Admission Links</h3>
                <p className="text-white/80 mt-2 text-sm font-medium">Access the formal enquiry portal, admission parameters, or prospectus.</p>
              </div>
              <div className="flex flex-wrap gap-4 shrink-0">
                 <a 
                   href="#" 
                   className="px-6 py-4 rounded-full bg-brand-gold text-brand-navy font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-white hover:text-brand-navy transition-all"
                 >
                   Online Enquiry Form <ExternalLink className="w-4 h-4" />
                 </a>
                 <a 
                   href="#" 
                   className="px-6 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
                 >
                   Download School Brochure <Download className="w-4 h-4" />
                 </a>
                 <a 
                   href="#" 
                   className="px-6 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
                 >
                   Admission Procedure PDF <Download className="w-4 h-4" />
                 </a>
              </div>
            </div>
         </div>
      </section>

      {/* Calendar Section */}
      <section className="py-24 px-6 sm:px-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl font-bold text-brand-navy mb-6 tracking-tight">
              School <span className="text-brand-crimson">Calendar</span> — AY 2026–27
            </h2>
            <p className="text-xl text-text-medium max-w-2xl mx-auto">Planned holidays and vacation periods to help you align your family commitments.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-12">
              <h4 className="font-heading text-2xl font-bold text-brand-navy mb-8 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-brand-crimson" /> Holidays
              </h4>
              <div className="overflow-auto max-h-[500px] rounded-[40px] shadow-2xl border border-zinc-100 bg-white custom-scrollbar">
                <table className="w-full min-w-[600px] border-collapse sticky-header">
                  <thead className="sticky top-0 z-10">
                    <tr className="bg-brand-navy text-white text-left">
                      <th className="py-6 px-10 font-bold uppercase tracking-widest text-xs w-[120px]">Sr. No</th>
                      <th className="py-6 px-10 font-bold uppercase tracking-widest text-xs">Date</th>
                      <th className="py-6 px-10 font-bold uppercase tracking-widest text-xs">Day</th>
                      <th className="py-6 px-10 font-bold uppercase tracking-widest text-xs">Holiday</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holidays.map((h, i) => (
                      <tr key={i} className="border-b border-zinc-50 last:border-0 hover:bg-zinc-50 transition-colors">
                        <td className="py-5 px-10 font-bold text-brand-navy/60">{h.srNo}</td>
                        <td className="py-5 px-10 font-bold text-brand-navy">{h.date}</td>
                        <td className="py-5 px-10 text-brand-crimson font-medium">{h.day}</td>
                        <td className="py-5 px-10 text-text-bold font-bold text-brand-navy">{h.event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-12 mt-12">
               <h4 className="font-heading text-2xl font-bold text-brand-navy mb-8 flex items-center gap-3">
                <Clock className="w-6 h-6 text-brand-gold" /> Vacations
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {vacations.map((v, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-[40px] shadow-lg border border-zinc-100"
                  >
                    <h5 className="font-bold text-brand-navy mb-4 leading-tight min-h-[48px] flex items-center">{v.name}</h5>
                    <div className="space-y-4">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-1">Dates</div>
                        <div className="text-sm font-black text-brand-navy">{v.dates}</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-brand-crimson mb-1">Re-opening</div>
                        <div className="text-sm font-black text-brand-navy">{v.opening}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-24 px-6 sm:px-12 bg-white border-y border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-bold text-brand-navy mb-6 tracking-tight">
              Frequently <span className="text-brand-gold">Asked Questions</span>
            </h2>
            <p className="text-xl text-text-medium">Everything you need to know about joining Vishwa Vidyapeeth.</p>
          </div>

          <FaqTabs />
        </div>
      </section>

      {/* Admissions Team Connect */}
      <section className="py-24 px-6 sm:px-12 bg-brand-ivory relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
               <div className="absolute inset-0 bg-brand-navy rounded-[60px] rotate-3 opacity-[0.05]" />
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" className="relative rounded-[60px] shadow-2xl object-cover aspect-square w-full" alt="Counseling" />
               <div className="absolute -bottom-10 -right-10 p-10 bg-brand-navy text-white rounded-3xl shadow-2xl hidden md:block max-w-sm border-t-4 border-brand-gold shadow-brand-navy/30">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-brand-gold shrink-0" />
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Admission Desk</div>
                        <div className="font-bold text-sm">+91 70220 09757</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                      <Phone className="w-6 h-6 text-brand-gold shrink-0" />
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest opacity-60">General Information</div>
                        <div className="font-bold text-sm">+91 76762 27483</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                      <Phone className="w-6 h-6 text-brand-gold shrink-0" />
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Transport Coordinator</div>
                        <div className="font-bold text-sm">+91 76762 27480</div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            <div>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-8 leading-tight">
                Connect with Our <br />
                <span className="text-brand-crimson">Admissions Team</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-navy shrink-0 shadow-sm">
                    <Clock className="w-6 h-6 text-brand-crimson" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-navy mb-2 uppercase tracking-wider text-xs">Office Hours</h5>
                    <p className="text-text-medium leading-relaxed font-semibold">
                      Monday to Friday — 7:30 am to 4:30 pm <br />
                      1st, 2nd & 5th Saturday — 7:30 am to 4:00 pm <br />
                      3rd & 4th Saturday — 9:00 am to 4:00 pm <br />
                      Sunday — 10:00 am to 2:00 pm
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-navy shrink-0 shadow-sm">
                    <Mail className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-navy mb-2 uppercase tracking-wider text-xs">Email Us</h5>
                    <p className="text-text-medium leading-relaxed font-bold text-brand-crimson">enquiry@vishwavidyapeeth.edu.in</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:hidden">
                    <div className="p-4 bg-white/80 rounded-2xl flex flex-col gap-2 shadow-sm border border-zinc-100">
                      <div className="text-xs font-black text-brand-navy">Admission Desk: +91 70220 09757</div>
                      <div className="text-xs font-black text-brand-navy">General Info: +91 76762 27483</div>
                      <div className="text-xs font-black text-brand-navy">Transport Coordinator: +91 76762 27480</div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                  <a href="#" className="flex-1 px-8 py-5 rounded-full bg-brand-crimson text-white font-bold hover:bg-brand-crimson-hover transition-all flex items-center justify-center gap-3 shadow-xl group">
                    Submit Online Enquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#" className="flex-1 px-8 py-5 rounded-full border-2 border-brand-navy text-brand-navy font-bold hover:bg-brand-navy hover:text-white transition-all text-center">
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-12 rounded-full" />
          <h2 className="font-heading text-4xl font-bold italic mb-8 opacity-90 leading-relaxed">
            Ready to start the conversation?
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
            The first step is the simplest - a quick enquiry, and our admissions team will take it from there.
          </p>
          <div className="flex justify-center mb-12">
            <a href="#" className="px-8 py-5 rounded-full bg-brand-crimson hover:bg-brand-crimson-hover text-white font-bold transition-all inline-flex items-center gap-3 shadow-xl">
              Submit Online Enquiry
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 text-brand-gold font-black uppercase tracking-[0.3em] text-sm">
            <School className="w-5 h-5" /> VVP Admissions 2026-27
          </div>
        </div>
      </section>
    </main>
  );
}
