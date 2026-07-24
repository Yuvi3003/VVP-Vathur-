import { motion } from "motion/react";
import { 
  Brain, 
  Lightbulb, 
  Users, 
  HeartHandshake, 
  Rocket, 
  BookOpen, 
  Repeat, 
  Search, 
  Sprout, 
  MessagesSquare, 
  Layers,
  ChevronRight
} from "lucide-react";

const methodology = [
  {
    id: "neural-education",
    title: "Neural Education",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
    content: "This methodology is built around insights from neurological and psychological studies to design practices that foster independent and meaningful learning. This is implemented through the Challenge Mosaic Model (CMM), which provides students with experiential learning tiles, reflective activities, creative assignments, and co-learning opportunities. The goal is to deliver core conceptual + growth-oriented knowledge.",
    color: "brand-blue"
  },
  {
    id: "experiential-learning",
    title: "Experiential Learning",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1503676891284-8991b3528e1d?auto=format&fit=crop&q=80&w=1200",
    content: "We engage students in activities that improve their understanding of the subject matter. They experience all the concepts live in action for a deeper understanding. Internships and work experience help students compare various career paths.",
    color: "brand-gold"
  },
  {
    id: "project-based-learning",
    title: "Project-Based Learning",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    content: "All concepts are accompanied by relevant projects to establish the intricacies of real-world execution. Field trips and laboratory experiments are primary media where students hone teamwork, creativity, and problem-solving skills.",
    color: "brand-crimson"
  },
  {
    id: "community-service",
    title: "Community Service",
    icon: HeartHandshake,
    image: "https://images.unsplash.com/photo-1559027615-cd4451d13142?auto=format&fit=crop&q=80&w=1200",
    content: "Students engage in community service projects that foster responsibility, empathy, and social skills, helping them appreciate the value of contributing to society.",
    color: "brand-blue"
  },
  {
    id: "peer-learning",
    title: "Peer Learning",
    icon: Users,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
    content: "Students are encouraged to take on the role of instructor and help their peers understand the subject matter. In this process, both instructors and learners build a better understanding of the subject and develop strong communication, leadership, and teamwork skills.",
    color: "brand-gold"
  },
  {
    id: "flipped-learning",
    title: "Flipped Learning",
    icon: Repeat,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
    content: "With this approach, students receive foundational knowledge before class. Classroom time is solely devoted to interactive discussions, problem-solving, and collaborative tasks. This improves the overall learning experience.",
    color: "brand-crimson"
  },
  {
    id: "discovery-based-learning",
    title: "Discovery-Based Learning",
    icon: Search,
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=1200",
    content: "Students are encouraged to draw upon their prior knowledge and experiences, using intuition, imagination, and creativity to acquire new understanding.",
    color: "brand-blue"
  },
  {
    id: "s2s",
    title: "Seed 2 Sapling (S2S)",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=1200",
    content: "We have collaborated with the S2S team to support children’s overall growth and help them become curious innovators.",
    color: "brand-gold"
  },
  {
    id: "space-exploration",
    title: "Space Exploration",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    content: "Our special Genex Space program helps students explore aerospace concepts. This is combined with exposure to space instruments and props to deepen understanding of the universe.",
    color: "brand-crimson"
  },
  {
    id: "story-telling",
    title: "Story Telling",
    icon: MessagesSquare,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1200",
    content: "Conceptual knowledge is imparted through stories to enhance recall and retention through emotions, imagery, and sequence.",
    color: "brand-blue"
  },
  {
    id: "trans-disciplinary",
    title: "Trans-Disciplinary Learning",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1513258496099-48168024adb0?auto=format&fit=crop&q=80&w=1200",
    content: "This approach integrates concepts from multiple subjects to understand a central theme. It replicates how concepts are applied in a real-world setting.",
    color: "brand-gold"
  }
];

export function CurriculumPedagogy() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb28f74b573?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="Curriculum Hero"
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
              Innovative Teaching Methodologies
            </div>
            
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.95]">
              Curriculum & <br />
              <span className="text-brand-gold italic">Pedagogy</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl">
              Led by values of innovation, exploration, and social contribution, using diverse strategies to deliver a complete curriculum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methods Sections */}
      {methodology.map((method, index) => (
        <section 
          key={method.id} 
          className={`py-24 px-6 sm:px-12 ${index % 2 === 0 ? 'bg-white' : 'bg-brand-ivory/30'}`}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
            >
              <div className={`p-4 rounded-2xl inline-flex items-center justify-center mb-8 ${
                method.color === 'brand-blue' ? 'bg-brand-blue/10 text-brand-blue' :
                method.color === 'brand-gold' ? 'bg-brand-gold/10 text-brand-gold' :
                'bg-brand-crimson/10 text-brand-crimson'
              }`}>
                <method.icon className="w-8 h-8" />
              </div>
              
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-navy mb-8 leading-[1.1] tracking-tight">
                {method.title}
              </h2>
              
              <p className="text-xl text-text-medium leading-relaxed mb-8">
                {method.content}
              </p>
              
              <div className={`w-32 h-1.5 rounded-full ${
                method.color === 'brand-blue' ? 'bg-brand-blue' :
                method.color === 'brand-gold' ? 'bg-brand-gold' :
                'bg-brand-crimson'
              }`} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`rounded-[40px] overflow-hidden shadow-2xl relative aspect-[4/3] ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
            >
              <img 
                src={method.image} 
                alt={method.title} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-navy/10" />
            </motion.div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="py-24 px-6 sm:px-12 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent opacity-50" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-6xl font-bold mb-8 tracking-tight"
          >
            Nurturing Future <br />
            <span className="text-brand-gold italic">Global Leaders</span>
          </motion.h2>
          
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our pedagogical approach ensures every student discovers their hidden potential through personalized and interactive learning paths.
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
              href="/about" 
              className="px-12 py-6 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-2xl transition-all"
            >
              Explore Our Vision
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
