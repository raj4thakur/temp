import { Link } from "react-router-dom";

const deliverables = [
  "Cloud-connected infrastructure systems",
  "Scalable backend environments",
  "Enterprise deployment architecture",
  "Integrated operational ecosystems",
  "Digital scalability systems",
  "Infrastructure optimization environments",
  "Connected enterprise platforms",
];

const focusAreas = [
  { icon: "fa-layer-group", color: "#13AAB3", bg: "rgba(19,170,179,0.1)", title: "Scalable System Architecture", desc: "Building modern infrastructure capable of supporting operational growth and digital scalability." },
  { icon: "fa-server", color: "#2980B9", bg: "rgba(41,128,185,0.1)", title: "Enterprise Infrastructure Systems", desc: "Developing connected digital environments for operational continuity and performance." },
  { icon: "fa-cloud-upload-alt", color: "#E67E22", bg: "rgba(230,126,34,0.1)", title: "Cloud & Deployment Environments", desc: "Creating scalable deployment systems designed for enterprise-grade reliability." },
  { icon: "fa-plug", color: "#27AE60", bg: "rgba(39,174,96,0.1)", title: "Operational Connectivity", desc: "Integrating infrastructure layers that support intelligent operational workflows." },
];

const outcomes = [
  "Improved system scalability",
  "Better operational continuity",
  "Enhanced infrastructure reliability",
  "Scalable digital growth support",
  "Stronger operational connectivity",
  "Future-ready enterprise systems",
];

export default function SolutionsEnterpriseInfrastructure() {
  return (
    <main style={{ background: "#F4F9FB", minHeight: "100vh" }}>
      <section className="hero case-study-hero" style={{ position: "relative", padding: "110px 0 100px", backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14,25,33,0.97) 0%, rgba(14,25,33,0.75) 55%, rgba(14,25,33,0.4) 100%)", zIndex: 1 }} />
        <div className="container" style={{ position: "relative", zIndex: 2, color: "white" }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "500", marginBottom: "28px" }} onMouseOver={e => e.currentTarget.style.color = "#FFFFFF"} onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}>
            <i className="fas fa-arrow-left" /> Back to Home
          </Link>
          <span style={{ fontSize: "0.9rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>Solutions Ecosystem 05</span>
          <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", marginBottom: "28px", maxWidth: "860px", lineHeight: "1.1", fontWeight: "700" }}>Scalable Digital Infrastructure</h1>
          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19,170,179,0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1rem", fontWeight: "600", border: "1px solid rgba(19,170,179,0.4)" }}>Cloud Architecture &amp; Enterprise-Grade Deployment</div>
        </div>
      </section>

      <div className="container" style={{ position: "relative", zIndex: 10, marginTop: "-80px", paddingBottom: "60px" }}>
        <div className="eco-card" style={{ background: "white", padding: "56px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.06)", marginBottom: "30px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Section Overview</span>
              <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "var(--color-primary)", fontWeight: "700" }}>Section Introduction</h2>
              <p style={{ color: "#395568", lineHeight: "1.9", fontSize: "1.1rem" }}>
                Scalable digital infrastructure forms the foundation of modern operational ecosystems. Aurbient Technologies develops enterprise-grade digital infrastructure designed to support scalability, performance, operational continuity, and intelligent system integration.
              </p>
            </div>
            <div style={{ padding: "44px", background: "linear-gradient(135deg, var(--color-primary) 0%, #0a141b 100%)", color: "white", borderRadius: "20px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right" /></div>
              <h4 style={{ marginBottom: "16px", color: "var(--color-accent)", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "10px" }}><i className="fas fa-lightbulb" /> Key Insight</h4>
              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.15rem", margin: 0, position: "relative", zIndex: 2 }}>
                "Modern businesses require scalable digital infrastructure capable of supporting intelligent operations, automation ecosystems, and long-term growth."
              </p>
            </div>
          </div>
        </div>


        {/* INTERACTIVE CLOUD TOPOLOGY UI */}
        <div style={{ marginBottom: "48px", background: "white", padding: "60px", borderRadius: "24px", border: "1.5px solid #E2EBE7", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>Topology</span>
            <h3 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)" }}>Digital Infrastructure Ecosystem</h3>
            <p style={{ color: "#58798C", fontSize: "1.1rem", maxWidth: "600px", margin: "16px auto 0" }}>High-availability, secure, and scalable cloud networks for modern enterprises.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
            {[
              { title: "Edge Network", details: "Global CDN, Load Balancing, DDoS Protection", icon: "fa-network-wired" },
              { title: "Compute Cluster", details: "Auto-scaling containers, Serverless functions", icon: "fa-server" },
              { title: "Data Lake", details: "Encrypted storage, Redundant backups, Analytics", icon: "fa-database" }
            ].map((node, idx) => (
              <div key={idx} className="eco-card" style={{ background: "white", border: "1.5px solid #E2EBE7", borderRadius: "16px", padding: "30px", transition: "transform 0.3s ease, border-color 0.3s ease", cursor: "pointer" }} onMouseOver={e => e.currentTarget.style.borderColor = 'var(--color-accent)'} onMouseOut={e => e.currentTarget.style.borderColor = '#E2EBE7'}>
                <div style={{ width: "60px", height: "60px", borderRadius: "14px", background: "rgba(19,170,179,0.1)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", marginBottom: "20px" }}>
                  <i className={"fas " + node.icon}></i>
                </div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "12px", color: "var(--color-primary)" }}>{node.title}</h4>
                <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>{node.details}</p>
              </div>
            ))}
          </div>
        </div>


        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", marginBottom: "30px" }}>
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
                <li key={i} style={{ display: "flex", gap: "14px", color: "#395568", fontSize: "1.05rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#2980B9", marginTop: "3px", flexShrink: 0 }}><i className="fas fa-arrow-alt-circle-up" /></span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "10px", display: "block" }}>Focus</span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Operational Focus Areas</h2>
            <p style={{ color: "#58798C", fontSize: "1.05rem" }}>Infrastructure environments designed to support intelligent operations, connectivity, and enterprise-grade performance.</p>
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
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", marginBottom: "20px" }}>Build Future-Ready Infrastructure</h2>
            <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "rgba(255,255,255,0.7)", marginBottom: "40px" }}>Design enterprise-grade systems capable of supporting intelligent operations, automation, and long-term scalability.</p>
            <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)", padding: "16px 40px", borderRadius: "50px", fontWeight: "700", display: "inline-block", textDecoration: "none" }}>Discuss Implementation →</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
