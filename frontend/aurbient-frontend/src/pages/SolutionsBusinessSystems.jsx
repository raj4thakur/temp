import { Link } from "react-router-dom";

export default function SolutionsBusinessSystems() {
  return (
    <main style={{ background: "#F4F9FB", minHeight: "100vh" }}>
      <section className="hero case-study-hero" style={{ position: "relative", padding: "180px 0 160px", backgroundImage: "url(/images/solution_business_systems.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14, 25, 33, 0.95) 0%, rgba(14, 25, 33, 0.7) 60%, rgba(14, 25, 33, 0.4) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2, color: "white" }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255, 255, 255, 0.75)", textDecoration: "none", fontSize: "1rem", fontWeight: "500", marginBottom: "24px", transition: "all 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#FFFFFF"} onMouseOut={e => e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)"}>
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
          <span style={{ fontSize: "1rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>Solutions Ecosystem 03</span>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", marginBottom: "30px", maxWidth: "900px", lineHeight: "1.1", textShadow: "0 4px 20px rgba(0,0,0,0.4)", fontWeight: "700" }}>Business Systems & ERP</h1>
          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19, 170, 179, 0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1.1rem", fontWeight: "600", border: "1px solid rgba(19, 170, 179, 0.4)" }}>Unified Enterprise Management</div>
        </div>
      </section>

      <div className="container" style={{ position: "relative", zIndex: 10, marginTop: "-80px", paddingBottom: "80px" }}>
        <div className="eco-card hover-lift" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.05)", marginBottom: "50px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "2.2rem", marginBottom: "24px", color: "var(--color-primary)", fontWeight: "700" }}>Strategic Overview</h3>
              <p style={{ color: "#395568", marginBottom: "20px", lineHeight: "1.9", fontSize: "1.15rem" }}>We consolidate fragmented operations into a single, highly coordinated enterprise ecosystem, enabling seamless resource planning, financial tracking, and departmental orchestration.</p>
              <div style={{ marginTop: "30px" }}>
                <div style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px", color: "#6A7B87", fontWeight: "700", marginBottom: "16px" }}>Core Technologies</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <span key={0} style={{ display: "inline-block", padding: "8px 20px", background: "white", color: "var(--color-primary)", fontWeight: "600", borderRadius: "50px", fontSize: "0.95rem", border: "1px solid #E2EBE7", boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>Node.js</span>
              <span key={1} style={{ display: "inline-block", padding: "8px 20px", background: "white", color: "var(--color-primary)", fontWeight: "600", borderRadius: "50px", fontSize: "0.95rem", border: "1px solid #E2EBE7", boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>React</span>
              <span key={2} style={{ display: "inline-block", padding: "8px 20px", background: "white", color: "var(--color-primary)", fontWeight: "600", borderRadius: "50px", fontSize: "0.95rem", border: "1px solid #E2EBE7", boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>PostgreSQL</span>
              <span key={3} style={{ display: "inline-block", padding: "8px 20px", background: "white", color: "var(--color-primary)", fontWeight: "600", borderRadius: "50px", fontSize: "0.95rem", border: "1px solid #E2EBE7", boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>GraphQL</span>
              <span key={4} style={{ display: "inline-block", padding: "8px 20px", background: "white", color: "var(--color-primary)", fontWeight: "600", borderRadius: "50px", fontSize: "0.95rem", border: "1px solid #E2EBE7", boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>Docker</span>
              <span key={5} style={{ display: "inline-block", padding: "8px 20px", background: "white", color: "var(--color-primary)", fontWeight: "600", borderRadius: "50px", fontSize: "0.95rem", border: "1px solid #E2EBE7", boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>Stripe Connect</span>
                </div>
              </div>
            </div>
            <div className="hover-lift" style={{ padding: "40px", background: "linear-gradient(135deg, var(--color-primary) 0%, #0a141b 100%)", color: "white", borderRadius: "20px", boxShadow: "0 20px 40px rgba(26, 42, 53, 0.25)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right"></i></div>
              <h4 style={{ marginBottom: "20px", color: "var(--color-accent)", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "12px", textTransform: "uppercase", letterSpacing: "1px" }}><i className="fas fa-lightbulb"></i> Key Insight</h4>
              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.25rem", margin: 0, position: "relative", zIndex: 2 }}>"A fragmented ERP environment creates siloed departments. True management requires a synchronized digital nervous system."</p>
            </div>
          </div>
        </div>

        <div className="eco-card hover-lift" style={{ background: "white", padding: "60px 40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", marginBottom: "60px", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "40px" }}>
          <div key={0} style={{ textAlign: "center", padding: "0 20px" }}>
  <div style={{ fontSize: "3.5rem", fontWeight: "800", color: "var(--color-accent)", lineHeight: "1", marginBottom: "8px" }}>-40%</div>
  <div style={{ fontSize: "1.05rem", color: "#58798C", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px" }}>Software Bloat</div>
</div>
            <div key={1} style={{ textAlign: "center", padding: "0 20px" }}>
  <div style={{ fontSize: "3.5rem", fontWeight: "800", color: "var(--color-accent)", lineHeight: "1", marginBottom: "8px" }}>Instant</div>
  <div style={{ fontSize: "1.05rem", color: "#58798C", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px" }}>Department Sync</div>
</div>
            <div key={2} style={{ textAlign: "center", padding: "0 20px" }}>
  <div style={{ fontSize: "3.5rem", fontWeight: "800", color: "var(--color-accent)", lineHeight: "1", marginBottom: "8px" }}>2x Faster</div>
  <div style={{ fontSize: "1.05rem", color: "#58798C", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px" }}>Financial Closing</div>
</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "60px" }}>
          <div className="eco-card hover-lift" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", borderTop: "4px solid var(--color-accent)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(19, 170, 179, 0.1)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}><i className="fas fa-cubes"></i></div>
              <h4 style={{ fontSize: "1.6rem", color: "var(--color-primary)", margin: 0, fontWeight: "600" }}>What We Deliver</h4>
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              <li key={0} style={{ display: "flex", gap: "16px", color: "#395568", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}><span style={{ color: "var(--color-accent)", fontSize: "1.2rem" }}><i className="fas fa-check-circle"></i></span>Resource Planning Modules</li>
              <li key={1} style={{ display: "flex", gap: "16px", color: "#395568", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}><span style={{ color: "var(--color-accent)", fontSize: "1.2rem" }}><i className="fas fa-check-circle"></i></span>Financial Coordination</li>
              <li key={2} style={{ display: "flex", gap: "16px", color: "#395568", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}><span style={{ color: "var(--color-accent)", fontSize: "1.2rem" }}><i className="fas fa-check-circle"></i></span>Departmental Workflows</li>
              <li key={3} style={{ display: "flex", gap: "16px", color: "#395568", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}><span style={{ color: "var(--color-accent)", fontSize: "1.2rem" }}><i className="fas fa-check-circle"></i></span>Asset Management</li>
              <li key={4} style={{ display: "flex", gap: "16px", color: "#395568", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}><span style={{ color: "var(--color-accent)", fontSize: "1.2rem" }}><i className="fas fa-check-circle"></i></span>Custom ERP Engineering</li>
            </ul>
          </div>
          <div className="eco-card hover-lift" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", borderTop: "4px solid #2980B9" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(41, 128, 185, 0.1)", color: "#2980B9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}><i className="fas fa-chart-line"></i></div>
              <h4 style={{ fontSize: "1.6rem", color: "var(--color-primary)", margin: 0, fontWeight: "600" }}>Business Outcomes</h4>
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              <li key={0} style={{ display: "flex", gap: "16px", color: "#1a2a35", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}><span style={{ color: "#2980B9", fontSize: "1.2rem" }}><i className="fas fa-arrow-alt-circle-up"></i></span>Synchronized departmental data</li>
              <li key={1} style={{ display: "flex", gap: "16px", color: "#1a2a35", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}><span style={{ color: "#2980B9", fontSize: "1.2rem" }}><i className="fas fa-arrow-alt-circle-up"></i></span>Automated financial closing</li>
              <li key={2} style={{ display: "flex", gap: "16px", color: "#1a2a35", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}><span style={{ color: "#2980B9", fontSize: "1.2rem" }}><i className="fas fa-arrow-alt-circle-up"></i></span>End-to-end asset tracking</li>
              <li key={3} style={{ display: "flex", gap: "16px", color: "#1a2a35", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}><span style={{ color: "#2980B9", fontSize: "1.2rem" }}><i className="fas fa-arrow-alt-circle-up"></i></span>Standardized enterprise procedures</li>
              <li key={4} style={{ display: "flex", gap: "16px", color: "#1a2a35", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}><span style={{ color: "#2980B9", fontSize: "1.2rem" }}><i className="fas fa-arrow-alt-circle-up"></i></span>Reduction in software bloat</li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
            <h3 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Implementation Timeline</h3>
            <p style={{ color: "#58798C", fontSize: "1.1rem" }}>A structured, predictable deployment methodology ensuring zero operational downtime.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
            <div key={0} className="hover-lift" style={{ flex: 1, minWidth: "250px", background: "white", padding: "30px", borderRadius: "16px", border: "1px solid #E2EBE7", position: "relative", zIndex: 2 }}>
  <div style={{ position: "absolute", top: "-15px", left: "30px", background: "var(--color-primary)", color: "var(--color-accent)", padding: "4px 12px", borderRadius: "20px", fontWeight: "800", fontSize: "0.85rem", letterSpacing: "1px" }}>PHASE 01</div>
  <h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "10px", marginTop: "10px" }}>Architecture</h4>
  <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Mapping legacy ERP dependencies and workflows.</p>
</div>
            <div style={{ width: "30px", height: "2px", background: "#E2EBE7", flexShrink: 0, display: "none" }} className="timeline-connector"></div>
            <div key={1} className="hover-lift" style={{ flex: 1, minWidth: "250px", background: "white", padding: "30px", borderRadius: "16px", border: "1px solid #E2EBE7", position: "relative", zIndex: 2 }}>
  <div style={{ position: "absolute", top: "-15px", left: "30px", background: "var(--color-primary)", color: "var(--color-accent)", padding: "4px 12px", borderRadius: "20px", fontWeight: "800", fontSize: "0.85rem", letterSpacing: "1px" }}>PHASE 02</div>
  <h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "10px", marginTop: "10px" }}>Consolidation</h4>
  <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Merging fragmented tools into a unified platform.</p>
</div>
            <div style={{ width: "30px", height: "2px", background: "#E2EBE7", flexShrink: 0, display: "none" }} className="timeline-connector"></div>
            <div key={2} className="hover-lift" style={{ flex: 1, minWidth: "250px", background: "white", padding: "30px", borderRadius: "16px", border: "1px solid #E2EBE7", position: "relative", zIndex: 2 }}>
  <div style={{ position: "absolute", top: "-15px", left: "30px", background: "var(--color-primary)", color: "var(--color-accent)", padding: "4px 12px", borderRadius: "20px", fontWeight: "800", fontSize: "0.85rem", letterSpacing: "1px" }}>PHASE 03</div>
  <h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "10px", marginTop: "10px" }}>Migration</h4>
  <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Seamlessly transferring state without downtime.</p>
</div>
          </div>
        </div>

        <div style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
            <h3 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Operational Focus Areas</h3>
            <p style={{ color: "#58798C", fontSize: "1.1rem" }}>Targeted engineering systems designed to coordinate modern enterprise ecosystems.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
            <div key={0} className="eco-card hover-lift" style={{ background: "white", padding: "36px", borderRadius: "16px", border: "1.5px solid #E2EBE7", display: "flex", flexDirection: "column", height: "100%" }}>
  <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(19,170,179, 0.1)", color: "#13AAB3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: "24px" }}>
    <i className="fas fa-users-cog"></i>
  </div>
  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>Resource Planning</h4>
  <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Allocate capital and human resources dynamically based on active load.</p>
</div>
            <div key={1} className="eco-card hover-lift" style={{ background: "white", padding: "36px", borderRadius: "16px", border: "1.5px solid #E2EBE7", display: "flex", flexDirection: "column", height: "100%" }}>
  <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(52,152,219, 0.1)", color: "#3498db", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: "24px" }}>
    <i className="fas fa-coins"></i>
  </div>
  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>Financial Coordination</h4>
  <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Automate ledger entries, tax compliance, and multi-currency reconciliation.</p>
</div>
            <div key={2} className="eco-card hover-lift" style={{ background: "white", padding: "36px", borderRadius: "16px", border: "1.5px solid #E2EBE7", display: "flex", flexDirection: "column", height: "100%" }}>
  <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(230,126,34, 0.1)", color: "#e67e22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: "24px" }}>
    <i className="fas fa-project-diagram"></i>
  </div>
  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>Departmental Workflows</h4>
  <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Ensure Sales, HR, and Operations communicate through a unified protocol.</p>
</div>
            <div key={3} className="eco-card hover-lift" style={{ background: "white", padding: "36px", borderRadius: "16px", border: "1.5px solid #E2EBE7", display: "flex", flexDirection: "column", height: "100%" }}>
  <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(46,204,113, 0.1)", color: "#2ecc71", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: "24px" }}>
    <i className="fas fa-boxes"></i>
  </div>
  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>Asset Management</h4>
  <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Track digital and physical assets across their entire lifecycle.</p>
</div>
          </div>
        </div>

        <section style={{ padding: "80px 0", background: "linear-gradient(135deg, var(--color-primary) 0%, #0a141b 100%)", color: "white", textAlign: "center", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 50px rgba(14,25,33,0.15)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 40px" }}>
            <h2 style={{ fontSize: "2.8rem", fontWeight: "700", marginBottom: "24px", color: "white" }}>Ready to Optimize Operations?</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "rgba(255,255,255,0.7)", marginBottom: "40px" }}>Connect with our enterprise engineering division to review your architecture roadmap and begin deployment.</p>
            <Link to="/contact" className="btn-premium hover-lift" style={{ background: "white", color: "var(--color-primary)", padding: "16px 40px", borderRadius: "50px", fontWeight: "700", display: "inline-block", textDecoration: "none" }}>Discuss Implementation &rarr;</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
