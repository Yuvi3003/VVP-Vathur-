import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  PlayCircle, 
  Newspaper, 
  Globe, 
  Mail, 
  ArrowRight,
  Video,
  FileText,
  Calendar,
  Sparkles,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "../lib/utils";

const MEDIA_CONTENT = {
  news: [
    {
      year: "Academic Year 2025–26",
      events: [
        {
          title: "ISKCON Sanskriti Heritage Fest 2025",
          date: "23 September 2025",
          description: "Our students returned with pride from the Interschool ISKCON Sanskriti Heritage Fest, sweeping prizes across Vocal Music, Storytelling, and more.",
          fullDescription: "Our students returned with pride from the Interschool ISKCON Sanskriti Heritage Fest, sweeping prizes across Vocal Music, Storytelling, Bhagavad Gita Shloka Chanting, Handwriting, Coloring, and Group Rangoli competitions. A celebration of cultural roots, creative talent, and the values we live by every day.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1514894780063-587428b5aee6?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1514894780063-587428b5aee6?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590072223844-00a1cb6579f1?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1583344177242-45e0d4eb0768?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1563456860010-095ee83fcf63?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Cultural"
        },
        {
          title: "CBSE Workshop on NCF",
          date: "23 August 2025",
          description: "We were honoured to host the CBSE Workshop on NCF 2023 for over 60 educators committed to shaping the future.",
          fullDescription: "We were honoured to host the CBSE Workshop on NCF 2023 — organised by the Centre of Excellence, Bangalore — welcoming over 60 educators committed to shaping the future of Indian education. Resource persons Mrs Gowri B. Nataraja and Ms Chinmoyee Basu led an insightful session on NCF principles under the NEP 2020 framework.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Academic"
        },
        {
          title: "Space Carnival 2025",
          date: "23 August 2025",
          description: "In collaboration with Genex Space, our campus hosted a full-day Space Carnival for 400+ students.",
          fullDescription: "In collaboration with Genex Space, our campus hosted a full-day Space Carnival for 400+ students across Bengaluru. From a Space Lab visit and Mobile Planetarium shows to solar observation, rocket launches, space art, and the Fly Your Plane challenge — a day built to inspire tomorrow's scientists, explorers, and astronauts.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Science"
        },
        {
          title: "Visit to HAL Aerospace Museum",
          date: "5 August 2025",
          description: "Our Grade 5 and 6 students stepped inside the HAL Aerospace Museum, exploring vintage aircraft.",
          fullDescription: "Our Grade 5 and 6 students stepped inside the HAL Aerospace Museum, Bengaluru — exploring vintage aircraft, flight simulators, and the science of aerodynamics. A meaningful glimpse into HAL's role in national defence and the spirit of Jai Jawan.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1569154941061-e231146bb0e1?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1569154941061-e231146bb0e1?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1579412691970-adca15598124?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1570535942475-408991b058a7?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Field Trip"
        },
        {
          title: "Visit to DGQA, MOD",
          date: "16 July 2025",
          description: "Grades 8–10 visited the DGQA, learning how science safeguards India's defence equipment.",
          fullDescription: "Grades 8–10 visited the DGQA, Ministry of Defence in Bengaluru, learning first-hand how science safeguards the quality and reliability of India's defence equipment. The visit opened student eyes to real-world careers in research, engineering, and national service.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1579412691970-adca15598124?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1579412691970-adca15598124?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Field Trip"
        },
        {
          title: "Blood Donation Camp",
          date: "21 June 2025",
          description: "In partnership with Sankalp Blood Center, our campus hosted a Blood Donation Camp.",
          fullDescription: "In partnership with Sankalp Blood Center, our campus hosted a Blood Donation Camp — with parents, staff, and well-wishers coming together for a cause that saves lives. A quiet, powerful lesson for our students in empathy, service, and civic responsibility.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1615461066841-6116ecaabb04?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1615461066841-6116ecaabb04?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1579154212602-995166687071?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1584362946521-4835848bb019?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1536856782524-706006504abc?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Community Service"
        },
        {
          title: "Check N Mate Chess Tournament",
          date: "31 May 2025",
          description: "Our campus turned into a festival of minds and moves, hosting over 1,500 players.",
          fullDescription: "Our campus turned into a festival of minds and moves, hosting over 1,500 players and 2,000+ parents from across India in partnership with Check N Mate Chess Academy. We were honoured to welcome Grandmaster Laxman as our Chief Guest, whose interactive session with young players was the highlight of the weekend.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1529692236671-f1f6e9460272?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1529692236671-f1f6e9460272?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1604928141064-201ce675ac1f?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Sports"
        }
      ]
    },
    {
      year: "Academic Year 2024–25",
      events: [
        {
          title: "Veerangana Utsav 2025",
          date: "8 March 2025",
          description: "A spirited celebration of empowerment, togetherness, and the women who shape our community.",
          fullDescription: "Our Supermoms and teachers took to the stage with dance, music, poetry, and performances that honoured the power, passion, and perseverance of women. A spirited celebration of empowerment, togetherness, and the women who shape our community every day.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1511578334221-d302cb585b75?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Cultural"
        },
        {
          title: "Ankvijyaaneeyam",
          date: "1 March 2025",
          description: "Our young scientists showcased curiosity through live experiments and Vedic Mathematics.",
          fullDescription: "Our young scientists and mathematicians showcased curiosity through live experiments, pre-mathematical concepts, music, dance, and a touch of Vedic Mathematics shlokas — a reminder of how beautifully simple math could be in ancient times. A day of hands-on discovery and joyful learning.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1564325724739-bae0bd08bc09?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Academic"
        },
        {
          title: "Sports Day 2025",
          date: "24 February 2025",
          description: "From our tiniest Nursery stars to fierce Grade 10 competitors, every student brought their A-game.",
          fullDescription: "From our tiniest Nursery stars to fierce Grade 10 competitors, every student brought their A-game to a day filled with grit, giggles, and unstoppable smiles. A reminder that Sports Day isn't only about winning — it's about participating, pushing limits, and celebrating every small victory.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1461896756913-647565801d1b?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1461896756913-647565801d1b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1526676023671-fbf74fb38a9a?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Sports"
        },
        {
          title: "Sky Gazing",
          date: "14 February 2025",
          description: "An evening of celestial observation viewing craters on the Moon, Jupiter, and Mars.",
          fullDescription: "An evening of celestial observation for students and parents — viewing craters on the Moon, Jupiter, Mars, Venus, and prominent stars through high-powered telescopes, paired with a soulful narration of the Ramayana by our Director, Ms Suseela Santhosh.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1516339901600-2e1a6298ed34?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1516339901600-2e1a6298ed34?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1536697246747-085350a0218a?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1516339901600-2e1a6298ed34?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Science"
        },
        {
          title: "Annual Day 2024–25",
          date: "25 January 2025",
          description: "A grand celebration of India's diverse folk cultures through dance and music.",
          fullDescription: "A grand celebration of India's diverse folk cultures through dance, music, and visual storytelling. Honoured by Chief Guest Dr. Sarada Chandrasekaran and Guest of Honour Col. P.L. Jayram (Retd), the evening was a stunning showcase of our students' talent and our nation's living traditions.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1514525253344-99a42999afe2?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1514525253344-99a42999afe2?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1547048967-154df6640829?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Cultural"
        },
        {
          title: "Rapid Chess Tournament",
          date: "1 December 2024",
          description: "Our campus transformed into a battlefield of minds as players across all age categories competed.",
          fullDescription: "Our campus transformed into a battlefield of minds as players across all age categories competed in rapid chess. A celebration of patience, strategy, and the quiet brilliance of the game.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1529692236671-f1f6e9460272?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1604928141064-201ce675ac1f?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Sports"
        },
        {
          title: "Inter-School Yogasana",
          date: "23 November 2024",
          description: "A vibrant celebration of yoga hosted on our campus, with 200 students from nine schools.",
          fullDescription: "A vibrant celebration of yoga hosted on our campus, inaugurated by Chief Guest Shri P. Gopala Krishna — recipient of the Rajyotsava, Dasara, and Kreeda Ratna Awards. Two hundred students from nine schools demonstrated discipline, balance, and grace.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1506126613408-eca07958f359?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1588282322673-c31965a75c3e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Sports"
        },
        {
          title: "Mountains of Life",
          date: "21 November 2024",
          description: "A learning visit to the Azim Premji Foundation, exploring transformations in education.",
          fullDescription: "A learning visit to the Azim Premji Foundation, exploring its work in transforming education and empowering rural communities — and what it means to make a difference at scale.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Field Trip"
        },
        {
          title: "Prani on Wheels",
          date: "16 November 2024",
          description: "A campus exhibition bringing diverse wildlife on site, with hands-on sessions.",
          fullDescription: "A campus exhibition bringing diverse wildlife on site, with sessions on habitats, behaviour, and conservation — plus supervised, hands-on interactions that left students with a deeper appreciation for the natural world.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544433330-94d528cc1b1b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1474511320723-9a5617389965?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Science"
        },
        {
          title: "Space Talk",
          date: "6 November 2024",
          description: "NASA engineer Mr Gabe Gabrielle led a STEAM workshop with stories from missions.",
          fullDescription: "NASA engineer Mr Gabe Gabrielle, from Kennedy Space Center, led a STEAM workshop with stories from real missions and an open Q&A — inspiring our students to dream big in science and space exploration.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Science"
        },
        {
          title: "Space Lab Inauguration",
          date: "14 October 2024",
          description: "Our state-of-the-art space lab was inaugurated by Padma Bhushan Dr. Nambi Narayanan.",
          fullDescription: "Our state-of-the-art space lab, powered by Genex Space, was inaugurated by Padma Bhushan Dr. Nambi Narayanan himself — a historic moment for the campus. The day also hosted the Nambi Space Quest Championship.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Science"
        },
        {
          title: "Art of Parenting",
          date: "5 October 2024",
          description: "A reflective workshop by Dr. Gururaj Karajagi on compassionate communication and discipline.",
          fullDescription: "A reflective workshop by renowned educationist Dr. Gururaj Karajagi on compassionate communication, emotional intelligence, and mindful discipline — giving parents practical tools for modern parenting.",
          link: "https://vishwavidyapeeth.edu.in/cbse-varthur/news-and-events/",
          image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800",
          gallery: [
            "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1511551203524-9a24350a5e83?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1502086223501-7ea297f05a54?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
          ],
          badge: "Workshop"
        }
      ]
    }
  ],
  videos: [
    {
      title: "Bharatiya Kala Vaibhava",
      description: "A Journey Through India’s Living Heritage - exploring the depth and diversity of Indian cultural traditions through student performances.",
      link: "https://vishwavidyapeeth.edu.in/cbse-varthur/video-gallery/",
      image: "https://images.unsplash.com/photo-1514525253344-99a42999afe2?auto=format&fit=crop&q=80&w=800",
      icon: PlayCircle,
      badge: "Culture"
    },
    {
      title: "Experiential Math Learning",
      description: "How we simplify complex mathematical concepts through hands-on activities, making math both fun and logical for every learner.",
      link: "https://vishwavidyapeeth.edu.in/cbse-varthur/video-gallery/",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
      icon: PlayCircle,
      badge: "Pedagogy"
    },
    {
      title: "Vishwa Vidyapeeth Group of Schools",
      description: "A comprehensive look at the Vishwa Vidyapeeth philosophy, campuses, and our commitment to holistic education.",
      link: "https://vishwavidyapeeth.edu.in/cbse-varthur/video-gallery/",
      image: "https://images.unsplash.com/photo-1523050335392-93851179ae09?auto=format&fit=crop&q=80&w=800",
      icon: PlayCircle,
      badge: "Overview"
    },
    {
      title: "Educational Neuroscience",
      description: "Understanding how the brain learns and applying scientific insights to enhance our classroom teaching strategies.",
      link: "https://vishwavidyapeeth.edu.in/cbse-varthur/video-gallery/",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
      icon: PlayCircle,
      badge: "Science"
    },
    {
      title: "Why Choose VVP?",
      description: "Exploring the unique features, values, and environment that make Vishwa Vidyapeeth the preferred choice for families.",
      link: "https://vishwavidyapeeth.edu.in/cbse-varthur/video-gallery/",
      image: "https://images.unsplash.com/photo-1497633762265-9a179a639d6c?auto=format&fit=crop&q=80&w=800",
      icon: PlayCircle,
      badge: "Admissions"
    },
    {
      title: "What Constitutes VVP",
      description: "Deep diving into the pillars of our institution - from infrastructure to our unique integrated curriculum.",
      link: "https://vishwavidyapeeth.edu.in/cbse-varthur/video-gallery/",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      icon: PlayCircle,
      badge: "Philosophy"
    },
    {
      title: "Guru Shishya Parampara",
      description: "Reviving the ancient teacher-student bond in a modern setting, fostering respect, mentorship, and lifelong learning.",
      link: "https://vishwavidyapeeth.edu.in/cbse-varthur/video-gallery/",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
      icon: PlayCircle,
      badge: "Tradition"
    },
    {
      title: "Leadership Training at VVP",
      description: "Empowering students with 21st-century leadership skills through specialized workshops and student council initiatives.",
      link: "https://vishwavidyapeeth.edu.in/cbse-varthur/video-gallery/",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      icon: PlayCircle,
      badge: "Leadership"
    },
    {
      title: "Winner: Best School Happiness Quotient",
      description: "Exploring why VVP won the award for the happiest school and how we prioritize mental well-being alongside academics.",
      link: "https://vishwavidyapeeth.edu.in/cbse-varthur/video-gallery/",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800",
      icon: PlayCircle,
      badge: "Award"
    },
    {
      title: "Advisory Board",
      description: "Meet the luminaries and industry experts who guide the vision and strategic direction of our group of schools.",
      link: "https://vishwavidyapeeth.edu.in/cbse-varthur/video-gallery/",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
      icon: PlayCircle,
      badge: "Governance"
    },
    {
      title: "Application of Gita Teachings",
      description: "Integrating the timeless wisdom of the Bhagavad Gita into modern-day ethics, discipline, and personal growth for students.",
      link: "https://vishwavidyapeeth.edu.in/cbse-varthur/video-gallery/",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      icon: PlayCircle,
      badge: "Values"
    },
    {
      title: "Yoga at VVP",
      description: "A look at our daily yoga and mindfulness sessions that help students build physical strength and mental focus.",
      link: "https://vishwavidyapeeth.edu.in/cbse-varthur/video-gallery/",
      image: "https://images.unsplash.com/photo-1506126613408-eca07958f359?auto=format&fit=crop&q=80&w=800",
      icon: PlayCircle,
      badge: "Wellness"
    },
    {
      title: "Parent Engagement Programme",
      description: "How we partner with parents to create a strong support system for the holistic development of every child.",
      link: "https://vishwavidyapeeth.edu.in/cbse-varthur/video-gallery/",
      image: "https://images.unsplash.com/photo-1511551203524-9a24350a5e83?auto=format&fit=crop&q=80&w=800",
      icon: PlayCircle,
      badge: "Community"
    },
    {
      title: "Know more about us",
      description: "A deeper dive into the world of Vishwa Vidyapeeth - our heritage, our vision, and our people.",
      link: "https://vishwavidyapeeth.edu.in/cbse-varthur/video-gallery/",
      image: "https://images.unsplash.com/photo-1523240715639-9942f1025a60?auto=format&fit=crop&q=80&w=800",
      icon: PlayCircle,
      badge: "About"
    }
  ],
  print: {
    archive: [
      {
        year: "Academic Year 2024–25",
        issues: [
          { month: "March", year: "2025", image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=400", link: "https://vishwavidyapeeth.edu.in/cbse-varthur/newsletter/" },
          { month: "February", year: "2025", image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=400", link: "https://vishwavidyapeeth.edu.in/cbse-varthur/newsletter/" },
          { month: "January", year: "2025", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=400", link: "https://vishwavidyapeeth.edu.in/cbse-varthur/newsletter/" },
          { month: "December", year: "2024", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400", link: "https://vishwavidyapeeth.edu.in/cbse-varthur/newsletter/" },
          { month: "November", year: "2024", image: "https://images.unsplash.com/photo-1585829365294-11ec7f7ec762?auto=format&fit=crop&q=80&w=400", link: "https://vishwavidyapeeth.edu.in/cbse-varthur/newsletter/" },
          { month: "October", year: "2024", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400", link: "https://vishwavidyapeeth.edu.in/cbse-varthur/newsletter/" },
          { month: "September", year: "2024", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400", link: "https://vishwavidyapeeth.edu.in/cbse-varthur/newsletter/" },
          { month: "August", year: "2024", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400", link: "https://vishwavidyapeeth.edu.in/cbse-varthur/newsletter/" },
          { month: "July", year: "2024", image: "https://images.unsplash.com/photo-1497633762265-9a179a639d6c?auto=format&fit=crop&q=80&w=400", link: "https://vishwavidyapeeth.edu.in/cbse-varthur/newsletter/" },
          { month: "June", year: "2024", image: "https://images.unsplash.com/photo-1495446815901-a7297e63b58d?auto=format&fit=crop&q=80&w=400", link: "https://vishwavidyapeeth.edu.in/cbse-varthur/newsletter/" },
          { month: "May", year: "2024", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=400", link: "https://vishwavidyapeeth.edu.in/cbse-varthur/newsletter/" },
          { month: "April", year: "2024", image: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?auto=format&fit=crop&q=80&w=400", link: "https://vishwavidyapeeth.edu.in/cbse-varthur/newsletter/" },
        ]
      }
    ],
    featured: [
      {
        title: "VVP Model United Nations",
        description: "Our flagship three-day Model UN conference, where students step into the shoes of diplomats from around the world — debating global issues, drafting resolutions, and building real skills in public speaking, negotiation, and critical thinking.",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/mun/", 
        cta: "Visit the VVP MUN Site →",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
        icon: Globe,
        badge: "VVP MUN"
      }
    ],
    preprimary: [
      {
        title: "Preprimary Video Newsletter - Term 1",
        description: "A joyful look at our youngest learners as they explore, play, and grow in their first months of the academic year.",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/newsletter/",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800",
        icon: PlayCircle,
        badge: "Nursery"
      },
      {
        title: "Preprimary Video Newsletter - Term 2",
        description: "Celebrating childhood curiosity and creative expression through music, art, and sensory play activities.",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/newsletter/",
        image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800",
        icon: PlayCircle,
        badge: "PP-I"
      },
      {
        title: "Preprimary Video Newsletter - Term 3",
        description: "Focusing on wellness, social interaction, and the foundational values that shape our early years curriculum.",
        link: "https://vishwavidyapeeth.edu.in/cbse-varthur/newsletter/",
        image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=800",
        icon: PlayCircle,
        badge: "PP-II"
      }
    ]
  }
};

export function PressRelease() {
  const [activeTab, setActiveTab] = useState<"news" | "videos" | "print">("news");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedNewsletterYear, setSelectedNewsletterYear] = useState(MEDIA_CONTENT.print.archive[0].year);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const activeNewsYear = MEDIA_CONTENT.news.find(n => n.year.includes(selectedYear)) || MEDIA_CONTENT.news[0];
  const activeNewsletterGroup = MEDIA_CONTENT.print.archive.find(g => g.year === selectedNewsletterYear) || MEDIA_CONTENT.print.archive[0];

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedEvent]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 sm:px-12 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Press Release Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/80 to-brand-navy" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-crimson/20 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em] border border-brand-gold/20 mb-8"
          >
            <Sparkles className="w-4 h-4" /> Press Release Hub
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Our <span className="text-brand-gold">Press Releases</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            Stay updated with the latest official announcements, news coverage, and campus stories.
            This hub gathers our press releases, video stories, and newsletters.
          </motion.p>
        </div>
      </section>

      {/* Tabs Selection */}
      <section className="py-3 pl-[1px] bg-white border-b border-zinc-100 sticky top-24 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center flex-wrap gap-2 sm:gap-4 font-sans">
            {[
              { id: "news", label: "News & Events", icon: Newspaper },
              { id: "videos", label: "Video Gallery", icon: Video },
              { id: "print", label: "Newsletter", icon: FileText },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex items-center gap-3 px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300",
                  activeTab === tab.id 
                    ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/20 scale-105" 
                    : "text-zinc-400 hover:text-brand-navy hover:bg-zinc-50"
                )}
              >
                <tab.icon className={cn("w-4 h-4 sm:w-5 sm:h-5", activeTab === tab.id ? "text-brand-gold" : "text-zinc-300")} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 sm:px-12 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + (activeTab === 'news' ? selectedYear : activeTab === 'print' ? selectedNewsletterYear : '')}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-24"
            >
              {activeTab === 'news' ? (
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-zinc-200 pb-10">
                    <div>
                      <h2 className="text-3xl font-bold text-brand-navy font-heading mb-2">News & Events</h2>
                      <p className="text-zinc-500 font-medium">Capturing the life and spirit of our campus across the academic years.</p>
                    </div>

                    <div className="flex p-1 bg-zinc-100 rounded-2xl w-fit">
                      {["2025", "2024"].map((year) => (
                        <button
                          key={year}
                          onClick={() => setSelectedYear(year)}
                          className={cn(
                            "px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                            selectedYear === year 
                              ? "bg-white text-brand-navy shadow-md scale-105" 
                              : "text-zinc-400 hover:text-brand-navy"
                          )}
                        >
                          Year {year}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeNewsYear.events.map((item: any, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => setSelectedEvent(item)}
                        className="group bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 font-sans cursor-pointer"
                      >
                        <div className="aspect-[16/10] relative overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full bg-brand-navy/90 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest border border-white/10">
                              {item.badge}
                            </span>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-navy/20 backdrop-blur-[2px]">
                            <div className="w-12 h-12 rounded-full bg-white text-brand-navy flex items-center justify-center shadow-xl">
                              <Maximize2 className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-brand-crimson font-black text-[9px] uppercase tracking-widest mb-2">
                            <Calendar className="w-3 h-3" /> {item.date}
                          </div>
                          <h3 className="text-lg font-bold text-brand-navy font-heading mb-3 group-hover:text-brand-crimson transition-colors line-clamp-2 min-h-[3rem]">
                            {item.title}
                          </h3>
                          <p className="text-sm text-neutral-500 leading-relaxed font-medium mb-6 line-clamp-3">
                            {item.description}
                          </p>
                          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-navy hover:text-brand-crimson transition-colors group/link">
                            Expand Story <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : activeTab === 'videos' ? (
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-zinc-200 pb-10">
                    <div>
                      <h2 className="text-3xl font-bold text-brand-navy font-heading mb-2">Video Gallery</h2>
                      <p className="text-zinc-500 font-medium">A window into our campus life, cultural celebrations, and unique pedagogy.</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MEDIA_CONTENT.videos.map((item: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="group bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300"
                      >
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={item.image} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            alt={item.title} 
                          />
                          <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full bg-brand-navy/90 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest border border-white/10">
                              {item.badge}
                            </span>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-brand-crimson/90 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                              <PlayCircle className="w-6 h-6" />
                            </div>
                          </div>
                        </div>

                        <div className="p-7">
                          <h3 className="text-lg font-bold text-brand-navy font-heading mb-3 group-hover:text-brand-crimson transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-neutral-500 leading-relaxed font-medium mb-6 line-clamp-2">
                            {item.description}
                          </p>
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-navy hover:text-brand-crimson transition-colors group/link"
                          >
                            Watch Video <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-32">
                  {/* Newsletters Group (Archive) */}
                  <div className="space-y-12">
                    <div className="flex items-center gap-6">
                      <h2 className="text-2xl font-bold text-brand-navy font-heading">Newsletter Archive - {activeNewsletterGroup.year}</h2>
                      <div className="h-px flex-1 bg-zinc-200 rounded-full" />
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
                      {activeNewsletterGroup.issues.map((issue: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.03 }}
                          className="group perspective-1000"
                        >
                          <a 
                            href={issue.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <div className="bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                              <div className="aspect-[3/4] relative overflow-hidden bg-zinc-100 preserve-3d">
                                {/* The "Book Cover" portion */}
                                <motion.div 
                                  className="absolute inset-0 z-20 origin-left transition-transform duration-700 ease-out group-hover:[transform:rotateY(-25deg)] shadow-[2px_0_10px_rgba(0,0,0,0.1)]"
                                  style={{ transformStyle: 'preserve-3d' }}
                                >
                                  <img 
                                    src={issue.image} 
                                    alt={`Issue ${issue.month} ${issue.year}`} 
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100" 
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-brand-navy/20" />
                                  <div className="absolute bottom-3 left-3 right-3 text-white">
                                    <p className="text-[7px] font-black uppercase tracking-[0.2em] opacity-80 mb-0.5">Archive</p>
                                    <p className="text-sm font-bold font-heading leading-tight">{issue.month} {issue.year}</p>
                                  </div>
                                </motion.div>
  
                                {/* Inside "Pages" visual effect */}
                                <div className="absolute inset-0 z-10 bg-white translate-x-[2px] border-l-4 border-zinc-200">
                                  <div className="p-4 space-y-2 opacity-30">
                                    <div className="h-2 w-3/4 bg-zinc-100 rounded" />
                                    <div className="h-2 w-full bg-zinc-100 rounded" />
                                    <div className="h-2 w-5/6 bg-zinc-100 rounded" />
                                    <div className="h-2 w-full bg-zinc-100 rounded" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Preprimary Newsletter Section */}
                  <div className="space-y-12">
                    <div className="flex items-center gap-6">
                      <h2 className="text-2xl font-bold text-brand-navy font-heading">Preprimary Newsletter</h2>
                      <div className="h-px flex-1 bg-zinc-200 rounded-full" />
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {MEDIA_CONTENT.print.preprimary.map((item: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="group bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                          <div className="aspect-video relative overflow-hidden">
                            <img 
                              src={item.image} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                              alt={item.title} 
                            />
                            <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors" />
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 rounded-full bg-brand-navy/90 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest border border-white/10">
                                {item.badge}
                              </span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-14 h-14 rounded-full bg-brand-crimson/90 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                <PlayCircle className="w-6 h-6" />
                              </div>
                            </div>
                          </div>

                          <div className="p-7">
                            <h3 className="text-lg font-bold text-brand-navy font-heading mb-3 group-hover:text-brand-crimson transition-colors line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-neutral-500 leading-relaxed font-medium mb-6 line-clamp-2">
                              {item.description}
                            </p>
                            <a 
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-navy hover:text-brand-crimson transition-colors group/link"
                            >
                              Watch Newsletter <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Featured Spotlight (MUN) - Final Section */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-2xl font-bold text-brand-navy font-heading">Spotlight & Projects</h2>
              <div className="h-px flex-1 bg-zinc-200 rounded-full" />
            </div>
            {MEDIA_CONTENT.print.featured.map((item: any, idx: number) => (
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

      {/* Newsletter Signup CTA */}
      <section className="py-24 px-6 sm:px-12 bg-brand-crimson relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80&w=2000')] bg-cover mix-blend-overlay" />
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h2 className="font-heading text-4xl sm:text-6xl font-bold mb-8 tracking-tight">
            Never Miss <span className="text-brand-gold">a Milestone</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed mb-12 font-medium">
            Join the Vishwa Vidyapeeth community newsletter for monthly updates, 
            student achievements, and campus highlights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="w-full sm:w-80 px-8 py-5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all"
            />
            <button className="whitespace-nowrap px-10 py-5 bg-brand-gold text-brand-navy rounded-full font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-brand-gold/20">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
      {/* Event Details Modal Overlay */}
      <AnimatePresence>
        {selectedEvent && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 bg-brand-navy/60 backdrop-blur-md z-[100] cursor-zoom-out"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 sm:top-4 sm:bottom-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-[95%] sm:max-w-5xl bg-white z-[101] rounded-none sm:rounded-[32px] shadow-2xl overflow-hidden font-sans border border-white/20"
            >
              <div className="h-full overflow-y-auto no-scrollbar">
                <div className="relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all shadow-xl group"
                  >
                    <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                  </button>

                  <div className="flex flex-col min-h-full">
                    {/* Visual Hero Section - Top (More Compact) */}
                    <div className="bg-brand-navy relative overflow-hidden h-[200px] sm:h-[250px] flex-shrink-0">
                      <img 
                        src={selectedEvent.image} 
                        className="absolute inset-0 w-full h-full object-cover opacity-50" 
                        alt={selectedEvent.title} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/30" />
                      <div className="absolute bottom-8 left-6 right-6 sm:left-12 sm:right-12 z-10 max-w-5xl mx-auto w-full">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <span className="px-3 py-1.5 rounded-full bg-brand-crimson text-white text-[9px] font-black uppercase tracking-widest mb-4 inline-block">
                            {selectedEvent.badge}
                          </span>
                          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white leading-tight mb-3 max-w-3xl">
                            {selectedEvent.title}
                          </h2>
                          <div className="flex items-center gap-3 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em]">
                            <Calendar className="w-4 h-4 text-brand-gold/50" /> {selectedEvent.date}
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Content Section - Below (Tighter spacing) */}
                    <div className="bg-white px-6 sm:px-12 py-8 lg:py-10">
                      <div className="max-w-5xl mx-auto">
                        <div className="space-y-12">
                          {/* Main Story */}
                          <div className="w-full">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 text-brand-navy text-[9px] font-black uppercase tracking-widest mb-4">
                              <Sparkles className="w-3.5 h-3.5 text-brand-gold" /> Highlights
                            </div>
                            
                            <div className="mb-8">
                              <p className="text-base sm:text-lg text-brand-navy leading-relaxed font-medium border-l-4 border-brand-gold pl-6 italic">
                                {selectedEvent.fullDescription}
                              </p>
                            </div>
                          </div>

                          {/* Image Showcase Gallery - Full Width Slider */}
                          <div className="w-full">
                            <div className="flex items-center justify-between mb-8">
                              <div className="flex items-center gap-3">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 whitespace-nowrap">Visual Archive</h3>
                                <div className="h-px w-24 bg-zinc-100" />
                              </div>
                              
                              <div className="flex gap-2">
                                <button 
                                  onClick={() => scrollGallery('left')}
                                  className="w-10 h-10 rounded-xl bg-zinc-50 hover:bg-brand-navy hover:text-white flex items-center justify-center transition-all border border-zinc-100 shadow-sm"
                                >
                                  <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button 
                                  onClick={() => scrollGallery('right')}
                                  className="w-10 h-10 rounded-xl bg-zinc-50 hover:bg-brand-navy hover:text-white flex items-center justify-center transition-all border border-zinc-100 shadow-sm"
                                >
                                  <ChevronRight className="w-5 h-5" />
                                </button>
                              </div>
                            </div>

                            <div 
                              ref={scrollRef}
                              className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
                            >
                              {(selectedEvent.gallery || []).map((imgUrl: string, idx: number) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] snap-start"
                                >
                                  <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-zinc-100 shadow-sm group cursor-pointer relative">
                                    <img 
                                      src={imgUrl} 
                                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                      alt={`Showcase ${idx + 1}`} 
                                    />
                                    <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition-colors" />
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-16 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                          <p className="text-zinc-400 text-[9px] font-bold uppercase tracking-widest">© 2026 Vishwa Vidyapeeth</p>
                          <div className="flex gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/30" />
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson/30" />
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/30" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
