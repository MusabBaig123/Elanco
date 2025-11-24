import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import "leaflet/dist/leaflet.css";


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

import ReportForm from "./Pages/Report/ReportForm";
import UploadImage from "./Pages/Report/UploadImage";

import InteractiveMap from "./Pages/Map/InteractiveMap";


// NEW PAGES
import SightingModalPage from "./Pages/Sightings/SightingModalPage";
import TimelinePage from "./Pages/Sightings/TimelinePage";
import QuickActionsPage from "./Pages/Sightings/QuickActionsPage";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* Main */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Menus */}
        <Route path="/map" element={<MapMenu />} />
        <Route path="/sightings" element={<SightingMenu />} />
        <Route path="/education" element={<EducationMenu />} />
        <Route path="/report" element={<ReportMenu />} />

        {/* Education */}
        <Route path="/education/species" element={<SpeciesGuide />} />
        <Route path="/education/prevention" element={<PreventionTips />} />
        <Route path="/education/activity" element={<SeasonalActivity />} />

        {/* Report */}
        <Route path="/report/form" element={<ReportForm />} />
        <Route path="/report/upload" element={<UploadImage />} />

        {/* Map */}
        <Route path="/map/view" element={<InteractiveMap />} />

        {/* Sightings */}

        <Route path="/sightings/modal" element={<SightingModalPage />} />
        <Route path="/sightings/timeline" element={<TimelinePage />} />
        <Route path="/sightings/actions" element={<QuickActionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
