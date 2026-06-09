import { Link } from "react-router-dom";
import { useState } from "react";
import logoImg from "../assets/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'solutions' | 'industries' | 'systems' | 'insights' | 'company' | null

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
                      Services <i className="fas fa-chevron-down dropdown-icon"></i>
                    </a>
                    <div className="mega-menu" style={{ width: '320px', left: '-20px' }}>
                        <div className="mega-grid" style={{ gridTemplateColumns: "1fr" }}>
                            <div className="mega-col">
                                <h4>Core Offerings</h4>
                                <Link to="/solutions/ai-automation" onClick={closeAll}>AI & Intelligent Automation</Link>
                                <Link to="/solutions/enterprise-infrastructure" onClick={closeAll}>Cloud & Digital Infrastructure</Link>
                                <Link to="/solutions/business-systems" onClick={closeAll}>Enterprise Software Engineering</Link>
                                <Link to="/solutions/operational-intelligence" onClick={closeAll}>Operational Intelligence</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* INDUSTRIES */}
                <div className={`nav-item dropdown-item ${activeDropdown === 'industries' ? 'active' : ''}`}>
                    <a href="#" className="nav-link" onClick={e => { e.preventDefault(); toggleDropdown('industries'); }}>
                      Industries <i className="fas fa-chevron-down dropdown-icon"></i>
                    </a>
                    <div className="mega-menu" style={{ left: '-80px', width: '260px' }}>
                        <div className="mega-col">
                            <Link to="/industries/manufacturing" onClick={closeAll}>Manufacturing</Link>
                            <Link to="/industries/industrial-operations" onClick={closeAll}>Industrial Operations</Link>
                            <Link to="/industries/retail-commerce" onClick={closeAll}>Retail & Commerce</Link>
                            <Link to="/industries/logistics" onClick={closeAll}>Logistics</Link>
                            <Link to="/industries/enterprise-operations" onClick={closeAll}>Enterprise Operations</Link>
                            <Link to="/industries/smes" onClick={closeAll}>SMEs</Link>
                        </div>
                    </div>
                </div>


                {/* INSIGHTS */}
                <div className={`nav-item dropdown-item ${activeDropdown === 'insights' ? 'active' : ''}`}>
                    <a href="#" className="nav-link" onClick={e => { e.preventDefault(); toggleDropdown('insights'); }}>
                      Insights <i className="fas fa-chevron-down dropdown-icon"></i>
                    </a>
                    <div className="mega-menu" style={{ left: 'auto', right: '0', width: '280px' }}>
                        <div className="mega-grid" style={{ gridTemplateColumns: "1fr", gap: "24px" }}>
                            <div className="mega-col">
                                <h4>Resources</h4>
                                <Link to="/insights" state={{ tab: "articles" }} onClick={closeAll} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                                  <i className="fas fa-th-large" style={{ color: 'var(--color-accent)', fontSize: '0.85rem' }}></i>
                                  Articles
                                </Link>
                                <Link to="/case-studies" onClick={closeAll} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                                  <i className="fas fa-chart-line" style={{ color: 'var(--color-accent)', fontSize: '0.85rem' }}></i>
                                  Case Studies
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COMPANY */}
                <div className={`nav-item dropdown-item ${activeDropdown === 'company' ? 'active' : ''}`}>
                    <a href="#" className="nav-link" onClick={e => { e.preventDefault(); toggleDropdown('company'); }}>
                      Company <i className="fas fa-chevron-down dropdown-icon"></i>
                    </a>
                    <div className="mega-menu" style={{ left: '-40px', width: '260px' }}>
                        <div className="mega-col">
                            <Link to="/company/vision-philosophy" onClick={closeAll}>Vision & Philosophy</Link>
                            <Link to="/company/engineering-culture" onClick={closeAll}>Engineering Culture</Link>
                            <Link to="/company/mission-ecosystem" onClick={closeAll}>Mission & Ecosystem</Link>
                            <Link to="/company/careers" onClick={closeAll}>Careers</Link>
                        </div>
                    </div>
                </div>

                <div className="nav-item cta-nav-item">
                  <Link to="/contact" className="btn-premium" onClick={closeAll}>Contact Us</Link>
                </div>
            </div>
        </div>
    </nav>
  );
}
