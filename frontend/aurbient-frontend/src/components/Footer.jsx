import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function Footer() {
  return (
    <footer style={{ padding: "40px 0 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1.5rem", paddingBottom: "28px" }}>

          {/* Brand */}
          <div style={{ maxWidth: "240px" }}>
            
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: "16px" }}>
              {/* Bottom layer: Pure white silhouette of the entire logo to make the text visible */}
              <img 
                src={logoImg} 
                alt="" 
                style={{ 
                  height: '38px', 
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)' 
                }} 
              />
              {/* Top layer: Original untouched logo, masked to only show the cyan 'a' icon on the left */}
              <img 
                src={logoImg} 
                alt="Aurbient Technologies" 
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '38px', 
                  objectFit: 'contain',
                  WebkitMaskImage: 'linear-gradient(to right, black 15%, transparent 28%)',
                  maskImage: 'linear-gradient(to right, black 15%, transparent 28%)'
                }} 
              />
            </div>

            <p style={{ lineHeight: "1.55", fontSize: "0.88rem" }}>
              Engineering the invisible intelligence for modern enterprise operations.
            </p>
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
            {[
              { label: "About Us", to: "/about" },
              { label: "Vision & Philosophy", to: "/company/vision-philosophy" },
              { label: "Mission & Ecosystem", to: "/company/mission-ecosystem" },
              { label: "Engineering Culture", to: "/company/engineering-culture" },
              { label: "Insights", to: "/insights" },
              { label: "Case Studies", to: "/case-studies" },
              { label: "Careers", to: "/company/careers" },
            ].map((item) => (
              <p key={item.to} style={{ marginBottom: "0.4rem" }}>
                <Link to={item.to} style={{ color: "inherit", textDecoration: "none", fontSize: "0.88rem" }}>{item.label}</Link>
              </p>
            ))}
          </div>

          {/* Industries */}
          <div>
            <h4 style={{ color: "white", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Industries</h4>
            {[
              { label: "Manufacturing", to: "/industries/manufacturing" },
              { label: "Industrial Operations", to: "/industries/industrial-operations" },
              { label: "Logistics & Supply Chain", to: "/industries/logistics" },
              { label: "Retail & Commerce", to: "/industries/retail-commerce" },
              { label: "Enterprise Operations", to: "/industries/enterprise-operations" },
              { label: "SME Transformation", to: "/industries/smes" },
            ].map((item) => (
              <p key={item.to} style={{ marginBottom: "0.4rem" }}>
                <Link to={item.to} style={{ color: "inherit", textDecoration: "none", fontSize: "0.88rem" }}>{item.label}</Link>
              </p>
            ))}
          </div>

          {/* Systems */}
          <div>
            <h4 style={{ color: "white", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Systems</h4>
            {[
              { label: "Automation Ecosystems", to: "/systems/automation-ecosystems" },
              { label: "ERP Intelligence", to: "/systems/erp-intelligence" },
              { label: "AI Workflow Systems", to: "/systems/ai-workflow-systems" },
              { label: "Operational Visibility", to: "/systems/operational-visibility" },
              { label: "Cloud Infrastructure", to: "/systems/cloud-infrastructure" },
              { label: "Business Operating Layer", to: "/systems/business-operating-layer" },
            ].map((item) => (
              <p key={item.to} style={{ marginBottom: "0.4rem" }}>
                <Link to={item.to} style={{ color: "inherit", textDecoration: "none", fontSize: "0.88rem" }}>{item.label}</Link>
              </p>
            ))}
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ color: "white", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Solutions</h4>
            {[
              { label: "AI Automation", to: "/solutions/ai-automation" },
              { label: "Operational Intelligence", to: "/solutions/operational-intelligence" },
              { label: "Business Systems", to: "/solutions/business-systems" },
              { label: "Enterprise Infrastructure", to: "/solutions/enterprise-infrastructure" },
              { label: "Process Optimization", to: "/solutions/process-optimization" },
              { label: "System Integration", to: "/solutions/system-integration" },
            ].map((item) => (
              <p key={item.to} style={{ marginBottom: "0.4rem" }}>
                <Link to={item.to} style={{ color: "inherit", textDecoration: "none", fontSize: "0.88rem" }}>{item.label}</Link>
              </p>
            ))}
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ color: "white", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Connect</h4>
            <p style={{ marginBottom: "0.5rem" }}>
              <Link to="/contact" style={{ color: "inherit", textDecoration: "none", fontWeight: "600", fontSize: "0.88rem", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "2px" }}>Let's Build →</Link>
            </p>

            {/* Phone */}
            <p style={{ marginTop: "14px", marginBottom: "0.4rem" }}>
              <a href="tel:+918629919873" style={{ color: "inherit", textDecoration: "none", fontSize: "0.85rem" }}>+91 8629919873</a>
            </p>

            {/* Address */}
            <p style={{ fontSize: "0.82rem", color: "#bbb", marginTop: "8px", lineHeight: "1.4", marginBottom: "14px" }}>
              Indore, Madhya Pradesh-452001, India
            </p>

            {/* Management & Support */}
            <div style={{ paddingTop: "10px", borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "14px" }}>
              <p style={{ fontSize: "0.75rem", color: "var(--color-accent)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "6px" }}>Management & Support</p>
              <a href="mailto:rajthakur.aurbient@gmail.com" style={{ color: "inherit", textDecoration: "none", fontSize: "0.83rem", display: "block" }}>rajthakur.aurbient@gmail.com</a>
            </div>

            {/* Company email */}
            <div style={{ paddingTop: "10px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontSize: "0.75rem", color: "var(--color-accent)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "6px" }}>Company Email</p>
              <a href="mailto:aurbient@gmail.com" style={{ color: "inherit", textDecoration: "none", fontSize: "0.85rem" }}>aurbient@gmail.com</a>
            </div>

            {/* LinkedIn */}
            <div style={{ marginTop: "14px" }}>
              <a
                href="https://www.linkedin.com/company/aurbient/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-accent)", textDecoration: "none", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                <i className="fab fa-linkedin" /> Follow on LinkedIn
              </a>
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
