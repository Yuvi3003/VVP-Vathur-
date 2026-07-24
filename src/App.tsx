/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/home/Navbar";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { PrePrimary } from "./pages/PrePrimary";
import { Primary } from "./pages/Primary";
import { Middle } from "./pages/Middle";
import { Secondary } from "./pages/Secondary";
import { CurriculumPedagogy } from "./pages/CurriculumPedagogy";
import { CoScholastic } from "./pages/CoScholastic";
import { LiteraryEnrichment } from "./pages/LiteraryEnrichment";
import { Academia } from "./pages/Academia";
import { GivingBackToSociety } from "./pages/GivingBackToSociety";
import { Nutrition } from "./pages/Nutrition";
import { BackToGurukula } from "./pages/BackToGurukula";
import { Admissions } from "./pages/Admissions";
import { StudentAchievements } from "./pages/StudentAchievements";
import { PressRelease } from "./pages/PressRelease";
import { MediaCoverage } from "./pages/MediaCoverage";
import { Highlights2024 } from "./pages/Highlights2024";
import { Facilities } from "./pages/Facilities";
import { Footer } from "./components/home/Footer";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Small timeout to allow the DOM to fully render/load
      const timer = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics/pre-primary" element={<PrePrimary />} />
          <Route path="/academics/primary" element={<Primary />} />
          <Route path="/academics/middle" element={<Middle />} />
          <Route path="/academics/secondary" element={<Secondary />} />
          <Route path="/curriculum/pedagogy" element={<CurriculumPedagogy />} />
          <Route path="/curriculum/co-scholastic" element={<CoScholastic />} />
          <Route path="/curriculum/literary" element={<LiteraryEnrichment />} />
          <Route path="/student-life/academia" element={<Academia />} />
          <Route path="/student-life/giving-back" element={<GivingBackToSociety />} />
          <Route path="/student-life/nutrition" element={<Nutrition />} />
          <Route path="/student-life/gurukula" element={<BackToGurukula />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/achievements" element={<StudentAchievements />} />
          <Route path="/media/press-release" element={<PressRelease />} />
          <Route path="/media/media-coverage" element={<MediaCoverage />} />
          <Route path="/highlights-2024" element={<Highlights2024 />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
