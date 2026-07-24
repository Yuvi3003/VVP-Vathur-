import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import React, { useState, useEffect } from "react";

const NAV_ITEMS = [
  {
    title: "About Us",
    href: "/about"
  },
  {
    title: "Academics",
    children: [
      {
        title: "Academic Structure",
        children: [
          { title: "Pre Primary", href: "/academics/pre-primary" },
          { title: "Primary", href: "/academics/primary" },
          { title: "Middle", href: "/academics/middle" },
          { title: "Secondary", href: "/academics/secondary" },
        ]
      },
      {
        title: "Curriculum & Learning",
        children: [
          { title: "Curriculum & Pedagogy", href: "/curriculum/pedagogy" },
          { title: "Co-Scholastic", href: "/curriculum/co-scholastic" },
          { title: "Literary & Enrichment Activities", href: "/curriculum/literary" },
        ]
      }
    ]
  },
  {
    title: "Student Life",
    children: [
      { title: "Academia", href: "/student-life/academia" },
      {
        title: "Values & Culture",
        children: [
          { title: "Back To Gurukula", href: "/student-life/gurukula" },
          { title: "Giving Back To Society", href: "/student-life/giving-back" },
        ]
      },
      {
        title: "Student Wellbeing",
        children: [
          { title: "Nutrition at VVP", href: "/student-life/nutrition" },
        ]
      }
    ]
  },
  { title: "Admissions", href: "/admissions" },
  {
    title: "Achievements",
    children: [
      { title: "Student Achievements", href: "/achievements" },
      { title: "Highlights of AY 2024–25", href: "/highlights-2024" }
    ]
  },
  {
    title: "Media",
    children: [
      { title: "Press Release", href: "/media/press-release" },
      { title: "Media Coverage", href: "/media/media-coverage" }
    ]
  },
  { title: "Facilities", href: "/facilities" },
  { title: "Contact Us", href: "/contact" },
];

function DesktopDropdown({ item, scrolled }: { item: any; scrolled: boolean; key?: React.Key }) {
  if (!item.children) {
    return (
      <Link to={item.href} className={cn("hover:text-brand-crimson transition-colors py-2 whitespace-nowrap", scrolled ? "text-brand-navy" : "text-white/90")}>
        {item.title}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button className={cn("flex items-center gap-1 hover:text-brand-crimson transition-colors py-2 whitespace-nowrap", scrolled ? "text-brand-navy" : "text-white/90")}>
        {item.title}
        <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" />
      </button>

      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-64">
          {item.children.map((child: any, i: number) => (
            <div key={i} className="relative group/sub">
              {child.children ? (
                <>
                  <button className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-text-medium hover:bg-gray-50 hover:text-brand-crimson transition-colors text-left">
                    <span>{child.title}</span>
                    <ChevronRight className="w-3 h-3 opacity-70" />
                  </button>
                  <div className="absolute top-0 left-full pl-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-64">
                       {child.children.map((sub: any, j: number) => (
                         <Link key={j} to={sub.href} className="block px-4 py-2.5 text-sm text-text-medium hover:bg-gray-50 hover:text-brand-crimson transition-colors">
                           {sub.title}
                         </Link>
                       ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link to={child.href} className="block px-4 py-2.5 text-sm text-text-medium hover:bg-gray-50 hover:text-brand-crimson transition-colors">
                  {child.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({ item, onItemClick }: { item: any, onItemClick: () => void, key?: React.Key }) {
  const [open, setOpen] = useState(false);
  
  if (!item.children) {
    return (
      <Link to={item.href} onClick={onItemClick} className="block py-3 text-lg font-medium text-primary-navy border-b border-gray-100">
        {item.title}
      </Link>
    );
  }

  return (
    <div className="border-b border-gray-100">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-3 text-lg font-medium text-brand-navy">
        {item.title}
        <ChevronDown className={cn("w-5 h-5 transition-transform", open ? "rotate-180" : "text-gray-400")} />
      </button>
      {open && (
        <div className="pb-3 pl-4 flex flex-col gap-1">
          {item.children.map((child: any, i: number) => (
            <MobileNavSubItem key={i} item={child} onItemClick={onItemClick} />
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNavSubItem({ item, onItemClick }: { item: any, onItemClick: () => void, key?: React.Key }) {
  const [open, setOpen] = useState(false);
  
  if (!item.children) {
    return (
      <Link to={item.href} onClick={onItemClick} className="block py-2 text-base text-text-medium">
        {item.title}
      </Link>
    );
  }

  return (
    <div>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-2 text-base font-medium text-text-medium">
        {item.title}
        <ChevronDown className={cn("w-4 h-4 transition-transform", open ? "rotate-180" : "text-gray-400")} />
      </button>
      {open && (
        <div className="pb-2 pl-4 flex flex-col border-l-2 border-gray-100 ml-2 mt-1">
          {item.children.map((sub: any, i: number) => (
            <Link key={i} to={sub.href} onClick={onItemClick} className="block py-2 pl-3 text-sm text-text-medium">
              {sub.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 h-24 flex items-center justify-between",
          scrolled || mobileMenuOpen ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent text-white"
        )}
      >
        <motion.div
           className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold origin-left z-50"
           style={{ scaleX }}
        />
        <Link to="/" className="flex items-center gap-2 relative z-50">
          <div className="w-10 h-10 rounded bg-brand-crimson flex items-center justify-center text-white font-bold text-xl">
            V
          </div>
          <div className={cn("font-heading font-bold text-xl leading-tight tracking-tight", scrolled || mobileMenuOpen ? "text-brand-navy" : "text-white")}>
            Vishwa<br />Vidyapeeth
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-5 lg:gap-8 font-medium text-[15px]">
          {NAV_ITEMS.map((item, i) => (
            <DesktopDropdown key={i} item={item} scrolled={scrolled} />
          ))}
        </div>

        <div className="flex items-center gap-4 relative z-50">
          <Link 
            to="/contact"
            className={cn(
              "hidden md:block px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-[0_4px_14px_0_rgba(158,28,34,0.2)] hover:shadow-[0_6px_20px_rgba(158,28,34,0.23)] hover:-translate-y-0.5",
              scrolled || mobileMenuOpen ? "bg-brand-crimson text-white" : "bg-white text-brand-navy"
            )}
          >
            Enquire Now
          </Link>
          <button 
            className={cn("xl:hidden p-2 rounded-lg transition-colors", scrolled || mobileMenuOpen ? "text-brand-navy hover:bg-gray-100" : "text-white hover:bg-white/10")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-[100px] pb-8 px-6 overflow-y-auto"
          >
            <div className="flex flex-col">
              {NAV_ITEMS.map((item, i) => (
                <MobileNavItem key={i} item={item} onItemClick={() => setMobileMenuOpen(false)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
