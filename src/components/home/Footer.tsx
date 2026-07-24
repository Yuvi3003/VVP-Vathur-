import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Instagram, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-navy pt-24 pb-12 px-6 sm:px-12 text-white/70">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6 text-white">
            <div className="w-10 h-10 rounded bg-brand-crimson flex items-center justify-center font-bold text-xl">V</div>
            <div className="font-heading font-bold text-xl leading-tight tracking-tight">Vishwa<br />Vidyapeeth</div>
          </div>
          <div className="text-sm leading-relaxed mb-6 space-y-1">
            <p>Sy No.72, Nekkundi Dommasandra,</p>
            <p>Sarjapura Hobli, Anekal Taluku,</p>
            <p>Bengaluru-560087</p>
          </div>
          <div className="text-sm leading-relaxed mb-6 space-y-1">
            <p>7022009757 / 7676227483</p>
            <p>enquiry@vishwavidyapeeth.edu.in</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-gold transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><Youtube className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><MessageCircle className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm flex flex-col">
            <Link to="/about" className="hover:text-brand-gold transition-colors w-fit">About VVP</Link>
            <Link to="/curriculum/pedagogy" className="hover:text-brand-gold transition-colors w-fit">Academic Structure</Link>
            <Link to="/student-life/academia" className="hover:text-brand-gold transition-colors w-fit">Student Life</Link>
            <Link to="/contact" className="hover:text-brand-gold transition-colors w-fit">Admissions</Link>
            <Link to="/#achievements" className="hover:text-brand-gold transition-colors w-fit">Achievements</Link>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Explore</h4>
          <ul className="space-y-3 text-sm flex flex-col">
            <Link to="/curriculum/pedagogy" className="hover:text-brand-gold transition-colors w-fit">Curriculum & Pedagogy</Link>
            <Link to="/student-life/academia" className="hover:text-brand-gold transition-colors w-fit">Academia</Link>
            <Link to="/student-life/gurukula" className="hover:text-brand-gold transition-colors w-fit">Back to Gurukula</Link>
            <Link to="/student-life/nutrition" className="hover:text-brand-gold transition-colors w-fit">Nutrition at VVP</Link>
            <Link to="/student-life/giving-back" className="hover:text-brand-gold transition-colors w-fit">Giving Back to Society</Link>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
          <div className="flex flex-col gap-3">
            <Link to="/contact" className="w-full px-6 py-3 rounded bg-brand-crimson text-white font-bold text-sm hover:bg-brand-crimson-hover transition-all text-center">
              Enquire Now
            </Link>
            <Link to="/contact" className="w-full px-6 py-3 rounded border border-white/60 text-white font-bold text-sm hover:border-white hover:bg-white/10 transition-all text-center">
              Register Now
            </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="opacity-70">Copyright © 2026 Vishwa Vidyapeeth Group of Schools. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors opacity-70 hover:opacity-100">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors opacity-70 hover:opacity-100">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
