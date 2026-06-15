import { Link } from "react-router-dom";
import latestLogoImg from "../assets/latest-logo.png";

export default function Footer() {
  return (
    <footer style={{ padding: "40px 0 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", paddingBottom: "28px" }}>

          {/* Brand */}
          <div style={{ maxWidth: "240px" }}>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <img
                src={latestLogoImg}
                alt="Aurbient Technologies"
                style={{
                  height: '42px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            <div style={{ lineHeight: "1.55", fontSize: "0.88rem", color: "#8CABB8" }}>
              Engineering the invisible intelligence for modern enterprise operations.
            </div>
            {/* Social */}
            <div style={{ marginTop: "14px" }}>
              <a
                href="https://www.linkedin.com/company/aurbient/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  color: "var(--color-accent)", textDecoration: "none",
                  fontSize: "0.88rem", fontWeight: "600",
                  border: "1px solid rgba(19,170,179,0.3)",
                  padding: "6px 14px", borderRadius: "20px",
                  transition: "all 0.2s"
                }}
                onMouseOver={e => { e.currentTarget.style.background = "rgba(19,170,179,0.1)"; }}
                onMouseOut={e => { e.currentTarget.style.background = "transparent"; }}
              >
                <i className="fab fa-linkedin" style={{ fontSize: "1rem" }} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "white", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: "About Us", to: "/about" },
                { label: "Vision & Philosophy", to: "/company/vision-philosophy" },
                { label: "Mission & Ecosystem", to: "/company/mission-ecosystem" },
                { label: "Engineering Culture", to: "/company/engineering-culture" },
                { label: "Careers", to: "/company/careers" },
              ].map((item) => (
                <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4 style={{ color: "white", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Industries</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: "Manufacturing", to: "/industries/manufacturing" },
                { label: "Industrial Operations", to: "/industries/industrial-operations" },
                { label: "Logistics & Supply Chain", to: "/industries/logistics" },
                { label: "Retail & Commerce", to: "/industries/retail-commerce" },
                { label: "Enterprise Operations", to: "/industries/enterprise-operations" },
                { label: "SME Transformation", to: "/industries/smes" },
              ].map((item) => (
                <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>
              ))}
            </div>
          </div>


          {/* Services */}
          <div>
            <h4 style={{ color: "white", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: "AI and Process automation", to: "/solutions/ai-automation" },
                { label: "Operational Intelligence Systems", to: "/solutions/operational-intelligence" },
                { label: "ERP & Business Management Platforms", to: "/solutions/business-systems" },
                { label: "Enterprise Software & Digital Systems", to: "/solutions/enterprise-infrastructure" },
              ].map((item) => (
                <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ color: "white", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Get In Touch With Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link to="/contact" style={{ color: "white", textDecoration: "none", fontWeight: "600", fontSize: "0.88rem", width: "fit-content", marginBottom: "4px" }}>Connect with us →</Link>
              
              <a href="tel:+918629919873" className="footer-link" style={{ fontSize: "0.85rem" }}>+91 8629919873</a>
              
              <div style={{ fontSize: "0.82rem", color: "#8CABB8", lineHeight: "1.4", marginBottom: "4px" }}>
                Indore, Madhya Pradesh-452001, India
              </div>
            </div>

            {/* General Contact */}
            <div style={{ paddingTop: "10px", borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "10px" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--color-accent)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "4px" }}>Reach Out</div>
              <a href="mailto:support@aurbient.com" className="footer-link" style={{ fontSize: "0.83rem" }}>support@aurbient.com</a>
            </div>
          </div>

        </div>

        <div style={{ textAlign: "center", padding: "18px 0", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "0.82rem" }}>
          © 2024 Aurbient Technologies — Calm enterprise futurism. Intelligent infrastructure.
        </div>
      </div>
    </footer>
  );
}
