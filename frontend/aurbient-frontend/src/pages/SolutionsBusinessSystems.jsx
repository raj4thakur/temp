import { Link } from "react-router-dom";

const deliverables = [
  "ERP-oriented workflow systems",
  "Enterprise management platforms",
  "Operational coordination environments",
  "Department visibility systems",
  "Reporting & management dashboards",
  "Workflow standardization platforms",
  "Enterprise process infrastructure",
];

const focusAreas = [
  { icon: "fa-sitemap", color: "#13AAB3", bg: "rgba(19, 170, 179,0.1)", title: "Enterprise Workflow Coordination", desc: "Building connected systems that improve cross-department operational execution." },
  { icon: "fa-eye", color: "#2980B9", bg: "rgba(41,128,185,0.1)", title: "Management Visibility", desc: "Developing centralized visibility systems for operational monitoring and reporting." },
  { icon: "fa-users-cog", color: "#E67E22", bg: "rgba(230,126,34,0.1)", title: "Department Coordination Systems", desc: "Creating structured operational environments capable of supporting enterprise collaboration." },
  { icon: "fa-th-large", color: "#27AE60", bg: "rgba(39,174,96,0.1)", title: "Operational Standardization", desc: "Designing scalable workflow architectures for long-term operational efficiency." },
];

const outcomes = [
  "Better departmental coordination",
  "Centralized operational visibility",
  "Improved reporting accessibility",
  "Enhanced management oversight",
  "Structured operational workflows",
  "Increased enterprise scalability",
];

export default function SolutionsBusinessSystems() {
  return (
    <main style={{ background: "#F4F9FB", minHeight: "100vh" }}>
      <section className="hero case-study-hero" style={{ position: "relative", padding: "110px 0 100px", backgroundImage: "url(/images/business_systems_mockup.png", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14,25,33,0.97) 0%, rgba(14,25,33,0.75) 55%, rgba(14,25,33,0.4) 100%)", zIndex: 1 }} />
        <div className="container" style={{ position: "relative", zIndex: 2, color: "white" }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "500", marginBottom: "28px" }} onMouseOver={e => e.currentTarget.style.color = "#FFFFFF"} onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}>
            <i className="fas fa-arrow-left" /> Back to Home
          </Link>
          <span style={{ fontSize: "0.9rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>Solutions Ecosystem 04</span>
          <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", marginBottom: "28px", maxWidth: "860px", lineHeight: "1.1", fontWeight: "700" }}>ERP &amp; Management Platforms</h1>
          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19, 170, 179,0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1rem", fontWeight: "600", border: "1px solid rgba(19, 170, 179,0.4)" }}>Enterprise Coordination &amp; Workflow Scalability</div>
        </div>
      </section>

      <div className="container" style={{ position: "relative", zIndex: 10, marginTop: "-80px", paddingBottom: "60px" }}>
        <div className="eco-card" style={{ background: "white", padding: "56px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.06)", marginBottom: "30px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Section Overview</span>
              <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "var(--color-primary)", fontWeight: "700" }}>Section Introduction</h2>
              <p style={{ color: "#395568", lineHeight: "1.9", fontSize: "1.1rem" }}>
                Modern enterprises require structured operational environments capable of supporting coordination, visibility, and scalable management workflows. Aurbient Technologies develops ERP-oriented operational systems focused on enterprise coordination and workflow scalability.
              </p>
            </div>
            <div style={{ padding: "44px", background: "linear-gradient(135deg, var(--color-primary) 0%, #0a141b 100%)", color: "white", borderRadius: "20px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right" /></div>
              <h4 style={{ marginBottom: "16px", color: "var(--color-accent)", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "10px" }}><i className="fas fa-lightbulb" /> Key Insight</h4>
              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.15rem", margin: 0, position: "relative", zIndex: 2 }}>
                "ERP environments become significantly more valuable when designed around operational clarity, coordination, and intelligent workflow management."
              </p>
            </div>
          </div>
        </div>


        {/* INTERACTIVE SOFTWARE STACK UI */}
        <div style={{ marginBottom: "48px", background: "white", padding: "60px", borderRadius: "24px", border: "1.5px solid #E2EBE7", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <span style={{ fontSize: "0.85rem", color: "#2980B9", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>Architecture</span>
            <h3 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)" }}>Modular Software Systems</h3>
            <p style={{ color: "#58798C", fontSize: "1.1rem", maxWidth: "600px", margin: "16px auto 0" }}>Custom-engineered business software prioritizing maintainability and scale.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "700px", margin: "0 auto" }}>
            {[
              { level: "Presentation Layer", tech: "React / Vue / Mobile Interfaces", color: "#2980B9" },
              { level: "API Gateway & Logic", tech: "Node.js / Python / Microservices", color: "var(--color-accent)" },
              { level: "Data & State Management", tech: "PostgreSQL / Redis / MongoDB", color: "#27AE60" }
            ].map((node, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", padding: "24px 30px", background: "#F4F9FB", borderRadius: "16px", borderLeft: "6px solid " + node.color }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "6px" }}>{node.level}</h4>
                  <p style={{ color: "#58798C", margin: 0, fontSize: "0.95rem" }}>{node.tech}</p>
                </div>
                <i className="fas fa-layer-group" style={{ fontSize: "1.5rem", color: node.color, opacity: 0.8 }}></i>
              </div>
            ))}
          </div>
        </div>


        {/* Editorial Split Flow (No Boxes) */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: "80px", 
          marginBottom: "60px",
          padding: "60px 0",
          borderTop: "1.5px solid rgba(17, 35, 48, 0.08)",
          borderBottom: "1.5px solid rgba(17, 35, 48, 0.08)"
        }}>
          {/* Left: What We Deliver */}
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.08)", color: "#10B981", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                <i className="fas fa-cogs"></i>
              </div>
              <h3 style={{ fontSize: "1.8rem", color: "var(--color-primary)", margin: 0, fontWeight: "700", letterSpacing: "-0.5px" }}>What We Deliver</h3>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {deliverables.map((item, i) => (
                <div key={i} className="editorial-item" style={{ 
                  display: "flex", 
                  gap: "20px", 
                  paddingBottom: "20px", 
                  borderBottom: "1px dashed rgba(17, 35, 48, 0.06)",
                  transition: "all 0.25s ease"
                }}>
                  <span style={{ 
                    fontFamily: "monospace", 
                    fontSize: "0.95rem", 
                    color: "#10B981", 
                    fontWeight: "700", 
                    paddingTop: "2px",
                    letterSpacing: "1px" 
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: "1.1rem", color: "#395568", lineHeight: "1.5", fontWeight: "500" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Business Outcomes */}
          <div style={{ position: "relative", borderLeft: "1.5px solid rgba(17, 35, 48, 0.08)", paddingLeft: "80px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(13, 148, 136, 0.08)", color: "#0D9488", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 style={{ fontSize: "1.8rem", color: "var(--color-primary)", margin: 0, fontWeight: "700", letterSpacing: "-0.5px" }}>Business Outcomes</h3>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {outcomes.map((item, i) => (
                <div key={i} className="editorial-item" style={{ 
                  display: "flex", 
                  gap: "20px", 
                  paddingBottom: "20px", 
                  borderBottom: "1px dashed rgba(17, 35, 48, 0.06)",
                  transition: "all 0.25s ease"
                }}>
                  <span style={{ 
                    fontFamily: "monospace", 
                    fontSize: "0.95rem", 
                    color: "#0D9488", 
                    fontWeight: "700", 
                    paddingTop: "2px",
                    letterSpacing: "1px" 
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: "1.1rem", color: "#395568", lineHeight: "1.5", fontWeight: "500" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "10px", display: "block" }}>Focus</span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Operational Focus Areas</h2>
            <p style={{ color: "#58798C", fontSize: "1.05rem" }}>Enterprise-grade coordination and management environments built for scalable operations.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "28px" }}>
            {focusAreas.map((area, i) => (
              <div key={i} className="eco-card" style={{ background: "white", padding: "36px", borderRadius: "18px", border: "1.5px solid #E2EBE7" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: area.bg, color: area.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "22px" }}>
                  <i className={`fas ${area.icon}`} />
                </div>
                <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "10px" }}>{area.title}</h4>
                <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <section style={{ padding: "72px 0", background: "linear-gradient(135deg, var(--color-primary) 0%, #0a141b 100%)", color: "white", textAlign: "center", borderRadius: "24px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 40px" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", marginBottom: "20px" }}>Design Your Enterprise Management Layer</h2>
            <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "rgba(255,255,255,0.7)", marginBottom: "40px" }}>Connect your operational departments through a unified, intelligent ERP environment built for scale.</p>
            <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)", padding: "16px 40px", borderRadius: "50px", fontWeight: "700", display: "inline-block", textDecoration: "none" }}>Discuss Implementation →</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
