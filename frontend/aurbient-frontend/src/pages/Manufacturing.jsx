import { Link } from "react-router-dom";

export default function Manufacturing() {
  const image = "/images/industry_manufacturing_hero.png";

  return (
    <main style={{ background: "#F4F9FB", minHeight: "100vh" }}>
      {/* Immersive Cinematic Hero Header */}
      <section className="hero case-study-hero" style={{ 
        position: "relative", 
        padding: "100px 0 100px", 
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14, 25, 33, 0.95) 0%, rgba(14, 25, 33, 0.5) 60%, rgba(14, 25, 33, 0.7) 100%)", zIndex: 1 }}></div>
        
        <div className="container" style={{ position: "relative", zIndex: 2, color: "white" }}>
          <Link 
            to="/" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              color: "rgba(255, 255, 255, 0.75)", 
              textDecoration: "none", 
              fontSize: "1rem", 
              fontWeight: "500", 
              marginBottom: "24px", 
              transition: "all 0.2s" 
            }}
            onMouseOver={e => e.currentTarget.style.color = "#FFFFFF"}
            onMouseOut={e => e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)"}
          >
            <i className="fas fa-arrow-left"></i> Back to Industries
          </Link>
          <span style={{ fontSize: "1rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>Industries Ecosystem 01</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "30px", maxWidth: "900px", lineHeight: "1.15", textShadow: "0 4px 20px rgba(0,0,0,0.4)", fontWeight: "600" }}>Manufacturing & Smart Factory Operations</h1>
          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19, 170, 179, 0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1rem", fontWeight: "600", border: "1px solid rgba(19, 170, 179, 0.4)" }}>
            IIoT Telemetry & Assembly Orchestration Console
          </div>
        </div>
      </section>

      {/* Main Overlapping Content Layout */}
      <div className="container" style={{ position: "relative", zIndex: 10, marginTop: "-80px", paddingBottom: "80px" }}>
        
        {/* Executive Overview */}
        <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.05)", marginBottom: "30px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "2rem", marginBottom: "24px", color: "var(--color-primary)", fontWeight: "600" }}>Intelligent Production Architecture</h3>
              <p style={{ color: "#395568", marginBottom: "20px", lineHeight: "1.9", fontSize: "1.15rem" }}>
                Modern manufacturing requires highly synchronized automation networks capable of linking factory telemetry with enterprise-level planning systems.
              </p>
              <p style={{ color: "#395568", marginBottom: "0", lineHeight: "1.9", fontSize: "1.15rem" }}>
                Aurbient Technologies designs automated smart factory layers that bring predictive intelligence, unified telemetry coordination, and real-time observability to your assembly operations.
              </p>
            </div>
            <div style={{ padding: "40px", background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", color: "white", borderRadius: "20px", boxShadow: "0 20px 40px rgba(26, 42, 53, 0.25)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right"></i></div>
              <h4 style={{ marginBottom: "20px", color: "var(--color-accent)", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                <i className="fas fa-lightbulb"></i> Key Insight
              </h4>
              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.2rem", margin: 0, position: "relative", zIndex: 2 }}>
                "Automation is not just about robotic assembly; it is about synchronizing telemetry streams to eliminate downtime and maximize production clarity."
              </p>
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
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(2, 132, 199, 0.08)", color: "#0284C7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                <i className="fas fa-cogs"></i>
              </div>
              <h3 style={{ fontSize: "1.8rem", color: "var(--color-primary)", margin: 0, fontWeight: "700", letterSpacing: "-0.5px" }}>What We Deliver</h3>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                "IIoT telemetry ingestion engines",
                "Computer vision QA integration",
                "Predictive failure alert pipelines",
                "Automatic parts reordering loops",
                "Unified factory floor dashboard",
                "Downtime bottleneck auditing",
                "SCADA / ERP data bridges"
              ].map((item, i) => (
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
                    color: "#0284C7", 
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
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(79, 70, 229, 0.08)", color: "#4F46E5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 style={{ fontSize: "1.8rem", color: "var(--color-primary)", margin: 0, fontWeight: "700", letterSpacing: "-0.5px" }}>Business Outcomes</h3>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                "85% reduction in unplanned downtime",
                "99.2% computer-vision QA accuracy",
                "15% improvement in floor throughput",
                "Unified operations management",
                "Zero manual telemetry entry delays",
                "Fully synchronized supply orders"
              ].map((item, i) => (
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
                    color: "#4F46E5", 
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

        {/* Operational Focus Areas Grid */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
            <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Operational Focus Areas</h3>
            <p style={{ color: "#58798C", fontSize: "1.1rem" }}>Targeted engineering systems designed to coordinate modern smart factory assemblies.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
            {[
              {
                title: "Predictive Maintenance",
                desc: "Analyze machine telemetry to predict component failures before they occur, scheduling maintenance automatically.",
                icon: "fa-tools",
                color: "#13AAB3"
              },
              {
                title: "Automated Quality Control",
                desc: "Deploy computer vision models to inspect products on the assembly line with greater accuracy than human QA.",
                icon: "fa-clipboard-check",
                color: "#3498db"
              },
              {
                title: "Supply Chain Synchronization",
                desc: "Automatically adjust production schedules and raw material orders based on real-time stock levels.",
                icon: "fa-truck-loading",
                color: "#e67e22"
              },
              {
                title: "IIoT Telemetry Aggregation",
                desc: "Link physical plant sensors and MES networks directly to centralized enterprise management software.",
                icon: "fa-network-wired",
                color: "#2ecc71"
              }
            ].map((focus, i) => (
              <div key={i} className="eco-card" style={{ background: "white", padding: "36px", borderRadius: "16px", border: "1.5px solid #E2EBE7", display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background: `rgba(${focus.color === "#13AAB3" ? "19, 170, 179" : focus.color === "#3498db" ? "52,152,219" : focus.color === "#e67e22" ? "230,126,34" : "46,204,113"}, 0.1)`,
                  color: focus.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                  marginBottom: "24px"
                }}>
                  <i className={`fas ${focus.icon}`}></i>
                </div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>{focus.title}</h4>
                <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>{focus.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Footer */}
        <section style={{ padding: "80px 0", background: "var(--color-primary)", color: "white", textAlign: "center", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 50px rgba(14,25,33,0.15)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 40px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "24px", color: "white" }}>Stop Reacting to Machine Failures</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", opacity: 0.9, marginBottom: "40px" }}>
              Ready to implement predictive factory systems? Our engineering team will help configure automated coordination pipelines suited to your manufacturing scale.
            </p>
            <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)" }}>
              Discuss Implementation &rarr;
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
