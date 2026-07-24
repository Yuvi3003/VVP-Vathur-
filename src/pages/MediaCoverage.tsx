import React, { useRef } from "react";
import { motion } from "motion/react";
import { Newspaper, Video, Globe, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

interface NewsItem {
  title: string;
  publication: string;
  date: string;
  link: string;
  image: string;
}

const MEDIA_SECTIONS = [
  {
    title: "Digital News",
    description: "Featured across India's leading digital news platforms — from breaking school stories to deep-dives on our pedagogy, culture, and milestones.",
    icon: Globe,
    items: [
      {
        title: "Awareness on the services of farmers and soldiers",
        publication: "Andhra Jyothy",
        date: "28 Nov 2025",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?auto=format&fit=crop&q=80&w=400&h=160"
      },
      {
        title: "‘Jai Jawan, Jai Kisan’ celebration wide appreciation",
        publication: "Samyuktha Karnataka",
        date: "28 Nov 2025",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?auto=format&fit=crop&q=80&w=400&h=160"
      },
      {
        title: "Excellence in Social Service Awarded",
        publication: "Udayakala",
        date: "28 Nov 2025",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1585829365234-781f8c42a51d?auto=format&fit=crop&q=80&w=400&h=160"
      },
      {
        title: "Unveiling the Splendour of Agricultural Culture",
        publication: "Vishwavani",
        date: "27 Nov 2025",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=400&h=160"
      },
      {
        title: "Make children aware of culture and history",
        publication: "Prajavani",
        date: "06 June 2024",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=400&h=160"
      },
      {
        title: "Demystifying maths via harate, jugalbandi & activity",
        publication: "The Times of India",
        date: "14 Dec 2023",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?auto=format&fit=crop&q=80&w=400&h=160"
      },
      {
        title: "Neeraj Chopra surprises children in Bengaluru school",
        publication: "Olympics.com",
        date: "26 Mar 2023",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?auto=format&fit=crop&q=80&w=400&h=160"
      },
      {
        title: "10 impactful ways to boost interpersonal skills",
        publication: "Hindustan Times",
        date: "23 Dec 2022",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1585829365234-781f8c42a51d?auto=format&fit=crop&q=80&w=400&h=160"
      },
      {
        title: "Why ‘Life skills’ should be integral part of curriculum",
        publication: "The Times of India",
        date: "21 Aug 2022",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=400&h=160"
      },
      {
        title: "Bengaluru’s outstanding achievers shine bright",
        publication: "Bangalore Mirror",
        date: "18 Sep 2023",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1585829365234-781f8c42a51d?auto=format&fit=crop&q=80&w=400&h=160"
      },
      {
        title: "Vishwa Vidyapeeth Celebrates 75th Year of Independence",
        publication: "Prittle Prattle News",
        date: "16 Aug 2022",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=400&h=160"
      },
      {
        title: "School Campus Turned Into an Organic Farm",
        publication: "The Better India",
        date: "16 Jan 2022",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=400&h=160"
      },
      {
        title: "Teachers miss in-person classes, value hybrid schooling",
        publication: "Deccan Herald",
        date: "04 Sep 2021",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?auto=format&fit=crop&q=80&w=400&h=160"
      },
      {
        title: "What’s in store for school kids?",
        publication: "Deccan Herald",
        date: "17 Aug 2021",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=400&h=160"
      },
      {
        title: "ರಾಜ್ಯದ ಮೊಟ್ಟಮೊದಲ ಗಣಿತಮೇಳ ಚಾಲನೆ",
        publication: "Sarathi TV",
        date: "18 Dec 2023",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1585829365234-781f8c42a51d?auto=format&fit=crop&q=80&w=400&h=160"
      }
    ]
  },
  {
    title: "Print Media",
    description: "Our story, in newsprint. Coverage across English, Kannada, Telugu, and Malayalam dailies - capturing events, achievements, and the spirit of life at VVP.",
    icon: Newspaper,
    items: [
      {
        title: "ಭವ್ಯಭಾರತ ನಿರ್ಮಾಣ ವಿದ್ಯಾರ್ಥಿ & ಶಾಲೆಗಳಿಂದ ಮಾತ್ರ ಸಾಧ್ಯ.!",
        publication: "VVP Media Archive",
        date: "07 Dec 2025",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "ಯಲಹಂಕದ ವಿಶ್ವವಿದ್ಯಾಪೀಠ ಶಾಲೆಲಿ 3ದಿನ ಸಂಭ್ರಮದ ಜೈಜವಾನ್-ಜೈಕಿಸಾನ್ ಕಾರ್ಯಕ್ರಮ.!",
        publication: "VVP Media Archive",
        date: "01 Dec 2025",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "ದೇಶಭಕ್ತಿ, ಕೃಷಿ ಸಂಸ್ಕೃತಿಯ ವೈಭವ",
        publication: "VVP Media Archive",
        date: "28 Nov 2025",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "ಜೈ ಜವಾನ್ ಜೈ ಕಿಸಾನ್ ವಿಶ್ವ ವಿದ್ಯಾಪೀಠದಲ್ಲಿ ದೇಶಭಕ್ತಿ ಕೃಷಿ ಸಂಸ್ಕೃತಿಯ ವೈಭವದ ಅನಾವರಣ",
        publication: "VVP Media Archive",
        date: "28 Nov 2025",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "ವಿಶ್ವವಿದ್ಯಾಪೀಠ ಶಾಲೆಯಲ್ಲಿ ಭಾರತೀಯ ಕಲಾ ವೈಭವದ ಹಬ್ಬ..!!",
        publication: "VVP Media Archive",
        date: "03 Dec 2024",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1514525253344-99a42999afe2?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "ಪದ್ಮಶ್ರೀ ನಂಬಿ ನಾರಾಯಣನ್ ರಿಂದ ATARIKSHA KALAKSHETRA ಲೋಕಾರ್ಪಣೆ..!!",
        publication: "VVP Media Archive",
        date: "14 Oct 2024",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "ಯಲಹಂಕದ ವಿಶ್ವವಿದ್ಯಾಪೀಠ ವಿದ್ಯಾರ್ಥಿಗಳು ಲಡಾಕ್ ಆರ್ಮಿ ಮೇಳದಲ್ಲಿ ಭಾಗಿ..!!",
        publication: "VVP Media Archive",
        date: "03 Aug 2024",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "ಅದ್ದೂರಿ ಗುರುವಂದನೆ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಸಾಕ್ಷಿಯಾದ ಯಲಹಂಕದ ಹೊನ್ನೇನಹಳ್ಳಿ ವಿಶ್ವವಿದ್ಯಾಪೀಠ ಶಾಲೆ.",
        publication: "VVP Media Archive",
        date: "10 June 2024",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "ಮನ – ಮನೆಗೂ ರಾಮಾಯಣ: ತ್ರೇತಾಯುಗದ ರಾಮ ಕಲಿಯುಗಕ್ಕು ಅಗತ್ಯ",
        publication: "VVP Media Archive",
        date: "31 May 2024",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮದ ಮೂಲಕ ದೇಶಭಕ್ತಿ ಸಾರಿದ ವಿಶ್ವವಿದ್ಯಾಪೀಠ ಶಾಲಾ ಮಕ್ಕಳು",
        publication: "VVP Media Archive",
        date: "16 Jan 2024",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "ಯಲಹಂಕದ ವಿಶ್ವ ವಿದ್ಯಾಪೀಠ ಶಾಲೆಯಲ್ಲಿ ಗಣಿತ ಮೇಳ",
        publication: "VVP Media Archive",
        date: "19 Dec 2023",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "സ്കൂള്‍ വളപ്പില്‍ പഴങ്ങളും പച്ചക്കറികളും അതിജീവനത്തിന്‍റെ പുതുವഴി",
        publication: "VVP Media Archive",
        date: "13 July 2021",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    title: "News Videos",
    description: "Television and broadcast features covering our flagship events, signature programmes, and major campus moments - from the Bharatiya Kala Vaibhava festival to the Jai Jawan Jai Kisan celebration and the inauguration of our Space Lab.",
    icon: Video,
    items: [
      {
        title: "Awareness on the services of farmers and soldiers",
        publication: "VVP News Archive",
        date: "28 Nov 2025",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Excellence in Social Service Awarded",
        publication: "VVP News Archive",
        date: "28 Nov 2025",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "National Space Day Proud Moment at VVP",
        publication: "VVP News Archive",
        date: "09 Sep 2025",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Vishwa Vidyapeeth CBSE Special News Feature",
        publication: "VVP News Archive",
        date: "06 Nov 2025",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Special Broadcast: Group of Schools Vision",
        publication: "VVP News Archive",
        date: "10 June 2025",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1514525253344-99a42999afe2?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "State-of-the-Art Space Lab Inauguration",
        publication: "VVP News Archive",
        date: "15 Oct 2024",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Bharatiya Kala Vaibhava Annual Festival Highlights",
        publication: "VVP News Archive",
        date: "30 Nov 2024",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Ladak Army Fair: Student Participation Feature",
        publication: "VVP News Archive",
        date: "03 Aug 2024",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Guru Vandana: Grand Celebration Coverage",
        publication: "VVP News Archive",
        date: "10 June 2024",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Ramayana for Schools: Special Narrative Session",
        publication: "VVP News Archive",
        date: "31 May 2024",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Ganitha Mela: Mathematics Carnival at VVP",
        publication: "VVP News Archive",
        date: "19 Dec 2023",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Integrated Gurukula Documentary: Heritage in Education",
        publication: "VVP News Archive",
        date: "20 Nov 2024",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Organic Farming on Campus: A Success Story",
        publication: "VVP News Archive",
        date: "16 Jan 2022",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Neeraj Chopra Surprises Students at VVP Campus",
        publication: "VVP News Archive",
        date: "26 Mar 2023",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "GESS Awards Recognition: Our Journey Explored",
        publication: "VVP News Archive",
        date: "18 Sep 2023",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/media-coverage/",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
];

const FEATURED_CONTENT = [
  {
    title: "VVP Model United Nations",
    description: "Our flagship three-day Model UN conference, where students step into the shoes of diplomats from around the world — debating global issues, drafting resolutions, and building real skills in public speaking, negotiation, and critical thinking.",
    link: "https://vishwavidyapeeth.edu.in/cbse-varthur/mun/", 
    cta: "Visit the VVP MUN Site →",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
    icon: Globe,
    badge: "VVP MUN"
  }
];

export function MediaCoverage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="min-h-screen bg-brand-ivory font-sans">
      {/* Hero Section */}
      <section className="relative py-32 px-6 sm:px-12 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="News background" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/60 to-brand-navy" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-crimson text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8"
          >
            <Sparkles className="w-4 h-4" /> Global Recognition
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Press & <span className="text-brand-gold">Media Coverage</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto font-medium"
          >
            A glimpse of how Vishwa Vidyapeeth's work, events, and student stories have been covered by leading media - across digital platforms, print publications, and television. Browse our archive of features below.
          </motion.p>
        </div>
      </section>

      {/* Media Sections */}
      <section className="py-20 px-6 sm:px-12 space-y-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {MEDIA_SECTIONS.map((section, sIdx) => {
            const isVideoSection = section.title === "News Videos";

            return (
              <div key={sIdx} className={cn("mb-24 last:mb-0 relative")}>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-zinc-200 pb-10">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2.5 text-brand-crimson font-black uppercase tracking-[0.2em] text-[10px] mb-3">
                      <section.icon className="w-4 h-4" /> {section.title}
                    </div>
                    <h2 className="text-3xl font-bold text-brand-navy font-heading mb-4">{section.title}</h2>
                    <p className="text-base text-neutral-600 leading-relaxed font-medium">
                      {section.description}
                    </p>
                  </div>

                  {isVideoSection && (
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => scroll("left")}
                        className="p-3 rounded-full border border-zinc-200 hover:bg-brand-crimson hover:text-white hover:border-brand-crimson transition-all text-brand-navy"
                        aria-label="Scroll left"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => scroll("right")}
                        className="p-3 rounded-full border border-zinc-200 hover:bg-brand-crimson hover:text-white hover:border-brand-crimson transition-all text-brand-navy"
                        aria-label="Scroll right"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>

                <div 
                  ref={isVideoSection ? scrollContainerRef : null}
                  className={cn(
                    "grid gap-6 md:gap-8",
                    sIdx === 0 
                      ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-5" 
                      : isVideoSection
                        ? "flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  )}
                >
                  {section.items.map((item, iIdx) => (
                    <motion.div
                      key={item.title + iIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: iIdx * 0.05 }}
                      className={cn(
                        "group",
                        isVideoSection && "flex-none w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.33px)] snap-start"
                      )}
                    >
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "block bg-white border border-zinc-200 transition-all duration-500 overflow-hidden h-full",
                          sIdx === 0 ? "rounded-xl hover:shadow-lg" : "rounded-2xl hover:shadow-xl"
                        )}
                      >
                        {sIdx === 0 ? (
                          /* Compact Digital News Card (Logo Style) */
                          <div className="p-5 flex flex-col h-full min-h-[220px]">
                            <div className="mb-6 flex justify-between items-start">
                              <div className="w-24 h-10 rounded-lg bg-zinc-50 border border-zinc-100 p-1.5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <img 
                                  src={item.image} 
                                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" 
                                  alt={item.publication} 
                                />
                              </div>
                              <span className="text-zinc-400 text-[8px] font-bold uppercase tracking-widest">{item.date}</span>
                            </div>
                            
                            <div className="mb-4">
                              <span className="text-brand-crimson text-[9px] font-black uppercase tracking-widest block mb-2">{item.publication}</span>
                              <h3 className="text-[13px] font-bold text-brand-navy font-heading leading-tight group-hover:text-brand-crimson transition-colors line-clamp-3">
                                {item.title}
                              </h3>
                            </div>

                            <div className="mt-auto pt-4 flex items-center gap-1.5 text-brand-gold text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                              Read News <ArrowRight className="w-3 h-3" />
                            </div>
                          </div>
                        ) : (
                          /* Featured Media Card (Original Style) */
                          <>
                            <div className="aspect-video relative overflow-hidden">
                              <img 
                                src={item.image} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                alt={item.title} 
                              />
                              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                              {isVideoSection && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-12 h-12 rounded-full bg-brand-crimson/90 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                    <Video className="w-5 h-5" />
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="p-7">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-brand-crimson text-[9px] font-black uppercase tracking-widest">{item.publication}</span>
                                <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-widest">{item.date}</span>
                              </div>
                              <h3 className="text-lg font-bold text-brand-navy font-heading leading-tight group-hover:text-brand-crimson transition-colors line-clamp-2">
                                {item.title}
                              </h3>
                              <div className="mt-6 flex items-center gap-2 text-brand-gold text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                {isVideoSection ? "Watch Broadcast" : "View Feature"} <ArrowRight className="w-3.5 h-3.5 translate-y-[-1px]" />
                              </div>
                            </div>
                          </>
                        )}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Spotlight (MUN) - Final Section */}
      <section className="py-24 px-6 sm:px-12 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-2xl font-bold text-brand-navy font-heading">Spotlight & Projects</h2>
              <div className="h-px flex-1 bg-zinc-200 rounded-full" />
            </div>
            {FEATURED_CONTENT.map((item: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center text-brand-gold shadow-lg shadow-brand-navy/10">
                      {item.icon && <item.icon className="w-7 h-7" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-crimson">{item.badge}</span>
                      <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy font-heading">{item.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-xl text-neutral-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                  
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-zinc-200 rounded-2xl text-xs font-black uppercase tracking-widest text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all group shadow-sm hover:shadow-xl"
                  >
                    {item.cta || "Visit the VVP MUN Site →"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white group">
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.title} />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
