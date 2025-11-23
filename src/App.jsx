import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

// Main Pages
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

// Submenu Pages
import MapMenu from "./Pages/Menus/MapMenu";
import SightingMenu from "./Pages/Menus/SightingMenu";
import EducationMenu from "./Pages/Menus/EducationMenu";
import ReportMenu from "./Pages/Menus/ReportMenu";

import SpeciesGuide from "./Pages/Education/SpeciesGuide";
import PreventionTips from "./Pages/Education/PreventionTips";
import SeasonalActivity from "./Pages/Education/SeasonalActivity";

import ReportSightingForm from "./Pages/ReportSighting/ReportSightingForm";


export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* Main menu */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Submenu pages */}
        <Route path="/map" element={<MapMenu />} />
        <Route path="/sightings" element={<SightingMenu />} />
        <Route path="/education" element={<EducationMenu />} />
        <Route path="/report" element={<ReportMenu />} />

        <Route path="/education/species" element={<SpeciesGuide />} />
        <Route path="/education/prevention" element={<PreventionTips />} />
        <Route path="/education/activity" element={<SeasonalActivity />} />

        <Route path="/report/form" element={<ReportSightingForm />} />

      </Routes>
    </BrowserRouter>
  );
}
