import { Link } from "react-router-dom";
import logoFooterImg from "../assets/logo-footer.png";

export default function Footer() {
  return (
    <footer style={{ padding: "40px 0 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", paddingBottom: "28px" }}>

          {/* Brand */}
          <div style={{ maxWidth: "240px" }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
              <img
                src={logoFooterImg}
                alt="Aurbient Technologies"
                style={{
                  height: '38px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  flexShrink: 0
                }}
              />
              <div style={{ lineHeight: 1.15 }}>
                <div style={{ color: '#ffffff', fontWeight: '700', fontSize: '1.1rem', letterSpacing: '0.01em' }}>Aurbient</div>
                <div style={{ color: '#ffffff', fontWeight: '600', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.85 }}>Technologies</div>
              </div>
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

          {/* Case Studies */}
          <div>
            <h4 style={{ color: "white", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Case Studies</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: "Automation Ecosystems", to: "/case-studies/04" },
                { label: "ERP Intelligence", to: "/case-studies/05" },
                { label: "AI Workflow Systems", to: "/case-studies/02" },
                { label: "Operational Visibility", to: "/case-studies/01" },
                { label: "Cloud Infrastructure", to: "/case-studies/06" },
                { label: "Business Operating Layer", to: "/case-studies/03" },
              ].map((item) => (
                <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ color: "white", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Solutions</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: "AI Automation", to: "/solutions/ai-automation" },
                { label: "Operational Intelligence", to: "/solutions/operational-intelligence" },
                { label: "Business Systems", to: "/solutions/business-systems" },
                { label: "Enterprise Infrastructure", to: "/solutions/enterprise-infrastructure" },
              ].map((item) => (
                <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ color: "white", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Get In Touch With Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link to="/contact" style={{ color: "white", textDecoration: "none", fontWeight: "600", fontSize: "0.88rem", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "2px", width: "fit-content", marginBottom: "4px" }}>Connect with us →</Link>
              
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
