// src/App.jsx
import { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Insights from "./pages/Insights";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import "./App.css";

// Solutions Pages
import SolutionsAIAutomation from "./pages/SolutionsAIAutomation";
import SolutionsOperationalIntelligence from "./pages/SolutionsOperationalIntelligence";
import SolutionsBusinessSystems from "./pages/SolutionsBusinessSystems";
import SolutionsEnterpriseInfrastructure from "./pages/SolutionsEnterpriseInfrastructure";

// Company Subpages
import Careers from "./pages/Careers";

// ScrollToTop utility that triggers on route shifts
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Simple routes without AnimatePresence to avoid React 19 + framer-motion v11 conflicts at root level
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/technology" element={<Technology />} />
      
      {/* Specific Solutions Pages */}
      <Route path="/solutions/ai-automation" element={<SolutionsAIAutomation />} />
      <Route path="/solutions/operational-intelligence" element={<SolutionsOperationalIntelligence />} />
      <Route path="/solutions/business-systems" element={<SolutionsBusinessSystems />} />
      <Route path="/solutions/enterprise-infrastructure" element={<SolutionsEnterpriseInfrastructure />} />

      {/* Specific Company Pages */}
      <Route path="/company/careers" element={<Careers />} />

      <Route path="/insights" element={<Insights />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/:id" element={<CaseStudies />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
