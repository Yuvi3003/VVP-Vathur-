import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050853863-33bc83f0639d?auto=format&fit=crop&q=80&w=2000" 
            alt="School Campus" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/80 to-brand-navy" />
        </div>

        <div className="container mx-auto px-6 sm:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Let’s Help You Take the <br />
              <span className="text-brand-gold italic">Right Step</span> for Your Child
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Choosing a school comes with questions. <br className="hidden sm:block" />
              We’re here to answer them — clearly and honestly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold text-brand-navy mb-8">Get In Touch</h2>
            <p className="text-text-medium mb-12 text-lg">
              Speak to our team or visit the campus to experience it yourself. We're here to guide you through the journey of your child's education.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-ivory flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-brand-navy mb-2">Vishwa Vidyapeeth Varthur</h3>
                  <p className="text-text-medium leading-relaxed max-w-sm">
                    Sy No.72, Nekkundi Dommasandra, Sarjapura Hobli, Anekal Taluku, Bengaluru-560087 <br />
                    (Varthur, Whitefield)
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-ivory flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-brand-navy mb-2">Call Us</h3>
                  <div className="space-y-1">
                    <p className="text-text-medium font-medium">7022009757 (General Enquiry)</p>
                    <p className="text-text-medium">7676227483 / 7676227480</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-ivory flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-brand-navy mb-2">Email Us</h3>
                  <p className="text-text-medium">enquiry@vishwavidyapeeth.edu.in</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-ivory flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-brand-navy mb-2">Visit Hours</h3>
                  <p className="text-text-medium">Monday — Saturday: 9:00 AM to 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Abstract Map area */}
            <div className="mt-12 w-full h-[300px] rounded-[32px] overflow-hidden bg-neutral-100 relative group">
               <img 
                 src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&q=80&w=1000" 
                 alt="Map Placeholder" 
                 className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <button className="bg-brand-navy text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-brand-blue transition-colors flex items-center gap-2">
                   View on Google Maps <ArrowRight className="w-4 h-4" />
                 </button>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-ivory p-8 sm:p-12 rounded-[40px] shadow-sm"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 text-brand-navy text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Quick Enquiry
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-navy mb-8">Send Us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-navy/60 uppercase tracking-widest pl-1">Parent Name</label>
                  <input type="text" className="w-full bg-white border border-transparent focus:border-brand-blue/30 rounded-2xl px-6 py-4 outline-none transition-all" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-navy/60 uppercase tracking-widest pl-1">Phone Number</label>
                  <input type="tel" className="w-full bg-white border border-transparent focus:border-brand-blue/30 rounded-2xl px-6 py-4 outline-none transition-all" placeholder="+91 XXX XXX XXXX" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-navy/60 uppercase tracking-widest pl-1">Email Address</label>
                <input type="email" className="w-full bg-white border border-transparent focus:border-brand-blue/30 rounded-2xl px-6 py-4 outline-none transition-all" placeholder="name@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-navy/60 uppercase tracking-widest pl-1">Seeking Admission For</label>
                <select className="w-full bg-white border border-transparent focus:border-brand-blue/30 rounded-2xl px-6 py-4 outline-none transition-all appearance-none cursor-pointer">
                  <option>Pre-Primary</option>
                  <option>Primary School</option>
                  <option>Middle School</option>
                  <option>Secondary School</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-navy/60 uppercase tracking-widest pl-1">Your Message</label>
                <textarea rows={4} className="w-full bg-white border border-transparent focus:border-brand-blue/30 rounded-2xl px-6 py-4 outline-none transition-all resize-none" placeholder="Tell us about your requirements or questions"></textarea>
              </div>

              <button className="w-full py-5 rounded-2xl bg-brand-navy text-white font-bold text-lg hover:bg-brand-blue hover:shadow-[0_10px_30px_rgba(30,63,175,0.2)] hover:-translate-y-1 transition-all duration-300">
                Submit Enquiry
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-brand-navy/50 italic">
              Our admissions officer will get back to you within 24 business hours.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
