import { Link } from "react-router-dom";

const deliverables = [
  "Management visibility systems",
  "Operational dashboards",
  "Reporting intelligence platforms",
  "Data coordination systems",
  "Workflow monitoring environments",
  "Enterprise visibility infrastructure",
  "Operational analytics systems",
];

const focusAreas = [
  { icon: "fa-eye", color: "#13AAB3", bg: "rgba(19, 170, 179,0.1)", title: "Real-Time Operational Visibility", desc: "Creating centralized environments for monitoring workflows, reporting systems, and business operations." },
  { icon: "fa-chart-bar", color: "#2980B9", bg: "rgba(41,128,185,0.1)", title: "Management Reporting Systems", desc: "Building intelligent reporting infrastructures for enterprise-level visibility." },
  { icon: "fa-tasks", color: "#E67E22", bg: "rgba(230,126,34,0.1)", title: "Workflow Monitoring", desc: "Designing operational tracking systems that improve execution clarity and coordination." },
  { icon: "fa-database", color: "#27AE60", bg: "rgba(39,174,96,0.1)", title: "Data Visibility Infrastructure", desc: "Developing connected systems for structured operational insights and reporting access." },
];

const outcomes = [
  "Improved operational visibility",
  "Faster management reporting access",
  "Better workflow coordination",
  "Enhanced enterprise monitoring",
  "Increased operational transparency",
  "Smarter operational decision-making",
];

export default function SolutionsOperationalIntelligence() {
  return (
    <main style={{ background: "#F4F9FB", minHeight: "100vh" }}>
      <section className="hero case-study-hero" style={{ position: "relative", padding: "110px 0 100px", backgroundImage: "url(/images/operational_intel_dashboard.png", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14,25,33,0.97) 0%, rgba(14,25,33,0.75) 55%, rgba(14,25,33,0.4) 100%)", zIndex: 1 }} />
        <div className="container" style={{ position: "relative", zIndex: 2, color: "white" }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "500", marginBottom: "28px" }} onMouseOver={e => e.currentTarget.style.color = "#FFFFFF"} onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}>
            <i className="fas fa-arrow-left" /> Back to Home
          </Link>
          <span style={{ fontSize: "0.9rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>Solutions Ecosystem 03</span>
          <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", marginBottom: "28px", maxWidth: "860px", lineHeight: "1.1", fontWeight: "700" }}>Operational Intelligence Systems</h1>
          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19, 170, 179,0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1rem", fontWeight: "600", border: "1px solid rgba(19, 170, 179,0.4)" }}>Centralized Visibility &amp; Enterprise Monitoring</div>
        </div>
      </section>

      <div className="container" style={{ position: "relative", zIndex: 10, marginTop: "-80px", paddingBottom: "60px" }}>
        <div className="eco-card" style={{ background: "white", padding: "56px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.06)", marginBottom: "30px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Section Overview</span>
              <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "var(--color-primary)", fontWeight: "700" }}>Section Introduction</h2>
              <p style={{ color: "#395568", lineHeight: "1.9", fontSize: "1.1rem" }}>
                Businesses require centralized visibility systems capable of improving operational monitoring, workflow coordination, and strategic decision-making. Aurbient Technologies develops operational intelligence environments focused on real-time visibility, management reporting, and enterprise coordination.
              </p>
            </div>
            <div style={{ padding: "44px", background: "linear-gradient(135deg, var(--color-primary) 0%, #0a141b 100%)", color: "white", borderRadius: "20px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right" /></div>
              <h4 style={{ marginBottom: "16px", color: "var(--color-accent)", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "10px" }}><i className="fas fa-lightbulb" /> Key Insight</h4>
              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.15rem", margin: 0, position: "relative", zIndex: 2 }}>
                "Operational intelligence systems help businesses transform fragmented operational environments into connected decision ecosystems."
              </p>
            </div>
          </div>
        </div>


        {/* INTERACTIVE ANALYTICS UI */}
        <div style={{ marginBottom: "48px", background: "white", padding: "60px", borderRadius: "24px", border: "1.5px solid #E2EBE7", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <span style={{ fontSize: "0.85rem", color: "#E67E22", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>Insights</span>
            <h3 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)" }}>Real-Time Operational Telemetry</h3>
            <p style={{ color: "#58798C", fontSize: "1.1rem", maxWidth: "600px", margin: "16px auto 0" }}>Turning raw data streams into actionable management dashboards.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ background: "#F4F9FB", padding: "32px", borderRadius: "20px", border: "1px solid #E2EBE7" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--color-primary)" }}>Resource Utilization</h4>
                <span style={{ color: "#27AE60", fontWeight: "bold", fontSize: "0.9rem" }}>+14.2%</span>
              </div>
              {/* Fake Graph */}
              <div style={{ height: "120px", display: "flex", alignItems: "flex-end", gap: "10px" }}>
                {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: h + "%", background: i === 6 ? "var(--color-accent)" : "#CBE7E9", borderRadius: "4px 4px 0 0", transition: "height 0.5s ease" }}></div>
                ))}
              </div>
            </div>

            <div style={{ background: "#F4F9FB", padding: "32px", borderRadius: "20px", border: "1px solid #E2EBE7" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--color-primary)" }}>Anomaly Detections</h4>
                <span style={{ color: "#E67E22", fontWeight: "bold", fontSize: "0.9rem" }}>Active Monitoring</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: "12px", borderBottom: "1px solid #E2EBE7", fontSize: "0.95rem" }}>
                  <span style={{ color: "#395568" }}><i className="fas fa-exclamation-circle" style={{ color: "#E67E22", marginRight: "8px" }}></i> Supply Chain Delay</span>
                  <span style={{ color: "var(--color-primary)", fontWeight: "600" }}>Detected</span>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: "12px", borderBottom: "1px solid #E2EBE7", fontSize: "0.95rem" }}>
                  <span style={{ color: "#395568" }}><i className="fas fa-check-circle" style={{ color: "#27AE60", marginRight: "8px" }}></i> Database Sync</span>
                  <span style={{ color: "var(--color-primary)", fontWeight: "600" }}>Stable</span>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", fontSize: "0.95rem" }}>
                  <span style={{ color: "#395568" }}><i className="fas fa-check-circle" style={{ color: "#27AE60", marginRight: "8px" }}></i> API Response</span>
                  <span style={{ color: "var(--color-primary)", fontWeight: "600" }}>32ms</span>
                </li>
              </ul>
            </div>
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
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(19, 170, 179, 0.08)", color: "#13AAB3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
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
                    color: "#13AAB3", 
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
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(41, 128, 185, 0.08)", color: "#2980B9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
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
                    color: "#2980B9", 
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
            <p style={{ color: "#58798C", fontSize: "1.05rem" }}>Intelligence layers designed to improve operational monitoring and enterprise-level decision-making.</p>
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
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", marginBottom: "20px" }}>Build Enterprise-Level Visibility</h2>
            <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "rgba(255,255,255,0.7)", marginBottom: "40px" }}>Design centralized intelligence environments that give leadership real-time clarity across all operations.</p>
            <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)", padding: "16px 40px", borderRadius: "50px", fontWeight: "700", display: "inline-block", textDecoration: "none" }}>Discuss Implementation →</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
