import { Link } from "react-router-dom";

const deliverables = [
  "Workflow automation systems",
  "Process orchestration environments",
  "Reporting automation infrastructure",
  "Task coordination systems",
  "Operational automation workflows",
  "Process standardization systems",
  "Automated operational monitoring",
];

const focusAreas = [
  { icon: "fa-cogs", color: "#13AAB3", bg: "rgba(19,170,179,0.1)", title: "Workflow Automation", desc: "Automating repetitive operational tasks to improve efficiency and reduce manual dependency." },
  { icon: "fa-file-alt", color: "#2980B9", bg: "rgba(41,128,185,0.1)", title: "Reporting Infrastructure", desc: "Developing automated reporting systems for faster operational visibility and management access." },
  { icon: "fa-network-wired", color: "#E67E22", bg: "rgba(230,126,34,0.1)", title: "Process Coordination", desc: "Creating connected operational environments capable of improving workflow consistency." },
  { icon: "fa-sliders-h", color: "#27AE60", bg: "rgba(39,174,96,0.1)", title: "Operational Standardization", desc: "Building structured systems that improve scalability and execution reliability." },
];

const outcomes = [
  "Faster operational execution",
  "Improved workflow consistency",
  "Reduced repetitive manual work",
  "Better operational coordination",
  "Enhanced process visibility",
  "Increased efficiency across operations",
];

export default function SolutionsProcessOptimization() {
  return (
    <main style={{ background: "#F4F9FB", minHeight: "100vh" }}>
      <section className="hero case-study-hero" style={{ position: "relative", padding: "180px 0 160px", backgroundImage: "url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14,25,33,0.97) 0%, rgba(14,25,33,0.75) 55%, rgba(14,25,33,0.4) 100%)", zIndex: 1 }} />
        <div className="container" style={{ position: "relative", zIndex: 2, color: "white" }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "500", marginBottom: "28px" }} onMouseOver={e => e.currentTarget.style.color = "#FFFFFF"} onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}>
            <i className="fas fa-arrow-left" /> Back to Home
          </Link>
          <span style={{ fontSize: "0.9rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>Solutions Ecosystem 02</span>
          <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", marginBottom: "28px", maxWidth: "860px", lineHeight: "1.1", fontWeight: "700" }}>Business Process Automation</h1>
          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19,170,179,0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1rem", fontWeight: "600", border: "1px solid rgba(19,170,179,0.4)" }}>Workflow Efficiency &amp; Process Orchestration</div>
        </div>
      </section>

      <div className="container" style={{ position: "relative", zIndex: 10, marginTop: "-80px", paddingBottom: "100px" }}>
        <div className="eco-card" style={{ background: "white", padding: "56px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.06)", marginBottom: "50px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Section Overview</span>
              <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "var(--color-primary)", fontWeight: "700" }}>Section Introduction</h2>
              <p style={{ color: "#395568", lineHeight: "1.9", fontSize: "1.1rem" }}>
                Operational inefficiencies often originate from repetitive manual processes, fragmented workflows, and disconnected reporting systems. Aurbient Technologies develops automation ecosystems focused on improving execution speed, operational consistency, and workflow efficiency.
              </p>
            </div>
            <div style={{ padding: "44px", background: "linear-gradient(135deg, var(--color-primary) 0%, #0a141b 100%)", color: "white", borderRadius: "20px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right" /></div>
              <h4 style={{ marginBottom: "16px", color: "var(--color-accent)", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "10px" }}><i className="fas fa-lightbulb" /> Key Insight</h4>
              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.15rem", margin: 0, position: "relative", zIndex: 2 }}>
                "Modern automation systems should improve operational intelligence and workflow efficiency rather than simply replacing tasks."
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", marginBottom: "50px" }}>
          <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", borderTop: "4px solid var(--color-accent)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(19,170,179,0.1)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}><i className="fas fa-cubes" /></div>
              <h3 style={{ fontSize: "1.5rem", color: "var(--color-primary)", margin: 0, fontWeight: "700" }}>What We Deliver</h3>
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {deliverables.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "14px", color: "#395568", fontSize: "1.05rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--color-accent)", marginTop: "3px", flexShrink: 0 }}><i className="fas fa-check-circle" /></span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", borderTop: "4px solid #2980B9" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(41,128,185,0.1)", color: "#2980B9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}><i className="fas fa-chart-line" /></div>
              <h3 style={{ fontSize: "1.5rem", color: "var(--color-primary)", margin: 0, fontWeight: "700" }}>Business Outcomes</h3>
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {outcomes.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "14px", color: "#1a2a35", fontSize: "1.05rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#2980B9", marginTop: "3px", flexShrink: 0 }}><i className="fas fa-arrow-alt-circle-up" /></span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "10px", display: "block" }}>Focus</span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Operational Focus Areas</h2>
            <p style={{ color: "#58798C", fontSize: "1.05rem" }}>Structured automation layers designed to improve execution speed and workflow coordination.</p>
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
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", marginBottom: "20px" }}>Ready to Automate Your Operations?</h2>
            <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "rgba(255,255,255,0.7)", marginBottom: "40px" }}>Let's design structured automation ecosystems that eliminate friction and improve your operational execution.</p>
            <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)", padding: "16px 40px", borderRadius: "50px", fontWeight: "700", display: "inline-block", textDecoration: "none" }}>Discuss Implementation →</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
