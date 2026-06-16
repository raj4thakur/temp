import { Link } from "react-router-dom";
import { useState } from "react";
import logoImg from "../assets/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const closeAll = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
        <div className="container nav-flex">
            <Link to="/" className="logo" onClick={closeAll} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img src={logoImg} alt="Aurbient Technologies" style={{ height: '44px', objectFit: 'contain' }} />
            </Link>
            
            {/* Hamburger Button */}
            <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle Navigation">
              <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>
            
            <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                {/* SERVICES */}
                <div className={`nav-item dropdown-item ${activeDropdown === 'solutions' ? 'active' : ''}`}>
                    <a href="#" className="nav-link" onClick={e => { e.preventDefault(); toggleDropdown('solutions'); }}>
                      Services
                    </a>
                    <div className="mega-menu" style={{ width: '320px', left: '-20px' }}>
                        <div className="mega-grid" style={{ gridTemplateColumns: "1fr" }}>
                            <div className="mega-col">
                                <h4>Core Offerings</h4>
                                <Link to="/solutions/ai-automation" onClick={closeAll}>Workflow Automation</Link>
                                <Link to="/solutions/operational-intelligence" onClick={closeAll}>Business Visibility & Reporting</Link>
                                <Link to="/solutions/business-systems" onClick={closeAll}>Business Management Systems</Link>
                                <Link to="/solutions/enterprise-infrastructure" onClick={closeAll}>Custom Software & Digital Solutions</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* INSIGHTS */}
                <div className={`nav-item dropdown-item ${activeDropdown === 'insights' ? 'active' : ''}`}>
                    <a href="#" className="nav-link" onClick={e => { e.preventDefault(); toggleDropdown('insights'); }}>
                      Insights
                    </a>
                    <div className="mega-menu" style={{ left: '-40px', width: '200px' }}>
                        <div className="mega-col">
                            <Link to="/insights" onClick={closeAll}>Articles</Link>
                            <Link to="/case-studies" onClick={closeAll}>Case Studies</Link>
                        </div>
                    </div>
                </div>

                {/* ABOUT */}
                <div className="nav-item">
                    <Link to="/about" className="nav-link" onClick={closeAll}>
                      About
                    </Link>
                </div>

                {/* CAREERS (Button Style) */}
                <div className="nav-item">
                    <Link to="/company/careers" className="nav-link" onClick={closeAll}>
                      Careers
                    </Link>
                </div>

                {/* CTA */}
                <div className="nav-item cta-nav-item">
                  <Link to="/contact" className="btn-premium" onClick={closeAll}>Contact</Link>
                </div>
            </div>
        </div>
    </nav>
  );
}
