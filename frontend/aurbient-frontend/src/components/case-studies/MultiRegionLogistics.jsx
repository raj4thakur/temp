import { useState } from "react";
import { Link } from "react-router-dom";

export default function MultiRegionLogistics() {
  const images = {
    hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"
  };

  const logisticsNodes = [
    {
      name: "Localized Vector Engine",
      badge: "Routing Node",
      color: "#13AAB3",
      endpoints: ["Vector map grid API", "Dynamic delay calculator", "Optimal route resolver"],
      description: "Integrates localized coordinates and live traffic conditions to construct high-speed routing maps dynamically."
    },
    {
      name: "Parallel Routing Processor",
      badge: "Compute Node",
      color: "#3498db",
      endpoints: ["Parallel thread pool", "Path latency monitor", "Conflict resolution gateway"],
      description: "Runs pathfinding recalculations in parallel across multiple CPU cores to bypass regional database bottlenecks."
    },
    {
      name: "Predictive Dispatch API",
      badge: "API Edge",
      color: "#2980B9",
      endpoints: ["Carrier schedule webhook", "Live ETA sync socket", "Automated waybill generator"],
      description: "Dispatches automated instructions to drivers, triggers waybills, and reconciles pickup queues in real-time."
    },
    {
      name: "Regional Sync Hubs",
      badge: "Sync Edge",
      color: "#e67e22",
      endpoints: ["Database replication pool", "Offline queue database", "Central reporting listener"],
      description: "Syncs localized databases and offline logs with the central enterprise registry once network paths clear."
    }
  ];

  const [activeNode, setActiveNode] = useState(logisticsNodes[0]);

  return (
    <main style={{ background: "#F4F9FB", minHeight: "100vh" }}>
      {/* Immersive Cinematic Hero Header */}
      <section className="hero case-study-hero" style={{ 
        position: "relative", 
        padding: "100px 0 100px", 
        backgroundImage: `url(${images.hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14, 25, 33, 0.95) 0%, rgba(14, 25, 33, 0.5) 60%, rgba(14, 25, 33, 0.7) 100%)", zIndex: 1 }}></div>
        
        <div className="container" style={{ position: "relative", zIndex: 2, color: "white" }}>
          <Link 
            to="/case-studies" 
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
            <i className="fas fa-arrow-left"></i> Back to Case Studies
          </Link>
          <span style={{ fontSize: "1rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>Case Study 06</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "30px", maxWidth: "900px", lineHeight: "1.15", textShadow: "0 4px 20px rgba(0,0,0,0.4)", fontWeight: "600" }}>Automating Apex Group's Multi-Region Logistics Pipeline</h1>
          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19, 170, 179, 0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1rem", fontWeight: "600", border: "1px solid rgba(19, 170, 179, 0.4)" }}>
            High-Speed Parallel Dispatch & Vector Routing Mesh
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container" style={{ position: "relative", zIndex: 10, marginTop: "-80px", paddingBottom: "80px" }}>
        
        {/* Executive Overview */}
        <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.05)", marginBottom: "30px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "2rem", marginBottom: "24px", color: "var(--color-primary)", fontWeight: "600" }}>Logistical Overview</h3>
              <p style={{ color: "#395568", marginBottom: "20px", lineHeight: "1.9", fontSize: "1.15rem" }}>
                Apex Group faced severe delivery delays due to routing conflicts across multiple geographical regions. Traditional dispatch systems were unable to recalculate paths fast enough to prevent logistical bottlenecks.
              </p>
              <p style={{ color: "#395568", marginBottom: "0", lineHeight: "1.9", fontSize: "1.15rem" }}>
                Aurbient Technologies integrated a localized vector retrieval network that processes routing paths in parallel, allowing for real-time conflict resolution before dispatch.
              </p>
            </div>
            <div style={{ padding: "40px", background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", color: "white", borderRadius: "20px", boxShadow: "0 20px 40px rgba(26, 42, 53, 0.25)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right"></i></div>
              <h4 style={{ marginBottom: "20px", color: "var(--color-accent)", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                <i className="fas fa-lightbulb"></i> Strategic Insight
              </h4>
              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.2rem", margin: 0, position: "relative", zIndex: 2 }}>
                "Localized vector processing allows for real-time dispatch decisions that traditional relational databases cannot support."
              </p>
            </div>
          </div>
        </div>

        {/* LOGISTICS NODES INTERACTIVE EXPLORER */}
        <div style={{ marginBottom: "36px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>Pipeline Architecture</span>
            <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)" }}>Logistics Core Sync Matrix</h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "40px", alignItems: "start" }}>
            
            {/* Left buttons selection list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {logisticsNodes.map((node, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveNode(node)}
                  style={{
                    background: activeNode.name === node.name ? "white" : "transparent",
                    border: "1.5px solid",
                    borderColor: activeNode.name === node.name ? node.color : "#E2EBE7",
                    borderRadius: "16px",
                    padding: "24px",
                    textAlign: "left",
                    cursor: "pointer",
                    boxShadow: activeNode.name === node.name ? "0 10px 30px rgba(0,0,0,0.04)" : "none",
                    transition: "all 0.2s"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "var(--color-primary)", margin: 0 }}>{node.name}</h4>
                    <span style={{ fontSize: "0.75rem", background: activeNode.name === node.name ? `${node.color}20` : "#F4F9FB", color: node.color, padding: "2px 10px", borderRadius: "12px", fontWeight: "bold" }}>
                      {node.badge}
                    </span>
                  </div>
                  <p style={{ color: "#58798C", fontSize: "0.85rem", margin: 0, lineHeight: "1.5" }}>Click to view API grid...</p>
                </button>
              ))}
            </div>

            {/* Right visual details card */}
            <div className="eco-card" style={{ 
              background: "white", 
              padding: "45px", 
              borderRadius: "24px", 
              border: "1.5px solid #E2EBE7",
              boxShadow: "0 15px 45px rgba(0,0,0,0.03)"
            }}>
              <span style={{ fontSize: "0.8rem", color: activeNode.color, textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Orchestration Engine</span>
              <h3 style={{ fontSize: "1.6rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "20px" }}>{activeNode.name} Integration</h3>
              <p style={{ color: "#395568", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "30px" }}>{activeNode.description}</p>
              
              <div style={{ background: "#F4F9FB", padding: "30px", borderRadius: "16px", border: "1px dashed #E2EBE7" }}>
                <h4 style={{ fontSize: "0.9rem", color: "var(--color-primary)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>Pipeline Endpoints:</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {activeNode.endpoints.map((end, i) => (
                    <div key={i} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "0.95rem", color: "#395568" }}>
                      <span style={{ color: activeNode.color }}><i className="fas fa-link"></i></span>
                      <span style={{ fontFamily: "monospace", fontSize: "0.9rem" }}>{end}</span>
                      <span style={{ marginLeft: "auto", fontSize: "0.75rem", background: "rgba(39, 201, 63, 0.15)", color: "#27c93f", padding: "2px 8px", borderRadius: "10px", fontWeight: "bold" }}>ACTIVE</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* side-by-side deliverables & outcomes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "36px" }}>
          
          {/* Deliverables Column */}
          <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", borderTop: "4px solid var(--color-accent)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(19, 170, 179, 0.1)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}>
                <i className="fas fa-cogs"></i>
              </div>
              <h4 style={{ fontSize: "1.6rem", color: "var(--color-primary)", margin: 0, fontWeight: "600" }}>What We Deliver</h4>
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Localized Vector Retrieval Network",
                "Parallel Routing Processor",
                "Predictive Dispatch API",
                "Regional Sync Nodes",
                "Real-time conflict resolution dashboards",
                "Multi-region database synchronization"
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "16px", color: "#395568", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}>
                  <span style={{ color: "var(--color-accent)", fontSize: "1.2rem" }}><i className="fas fa-check-circle"></i></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Outcomes Column */}
          <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", borderTop: "4px solid #2980B9" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(41, 128, 185, 0.1)", color: "#2980B9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}>
                <i className="fas fa-chart-line"></i>
              </div>
              <h4 style={{ fontSize: "1.6rem", color: "var(--color-primary)", margin: 0, fontWeight: "600" }}>Business Outcomes</h4>
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "42% Reduction in Delivery Delay Rates",
                "Instant routing conflict resolution",
                "Unified multi-region dispatch",
                "Lower fuel and operational costs",
                "Streamlined driver scheduling",
                "Scalable cloud-native logistical control"
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "16px", color: "#395568", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}>
                  <span style={{ color: "#2980B9", fontSize: "1.2rem" }}><i className="fas fa-arrow-alt-circle-up"></i></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Operational Focus Areas Grid */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
            <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Operational Focus Areas</h3>
            <p style={{ color: "#58798C", fontSize: "1.1rem" }}>Targeted logistics frameworks designed to optimize routing flows and coordinate multi-region dispatch ecosystems.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
            {[
              {
                title: "Route Latency Optimization",
                desc: "Speed up navigation calculations dynamically to avoid delays from road works or gridlock.",
                icon: "fa-route",
                color: "#13AAB3"
              },
              {
                title: "Real-time Conflict Resolution",
                desc: "Mitigate route overlaps and dispatch clashes before they delay localized shipping fleets.",
                icon: "fa-exclamation-triangle",
                color: "#3498db"
              },
              {
                title: "Unified Dispatch Control",
                desc: "Coordinate shipping hubs, waybills, and carriers in one centralized API hub.",
                icon: "fa-network-wired",
                color: "#e67e22"
              },
              {
                title: "Vector-based Database Processing",
                desc: "Leverage parallel computing to search location coordinates at multi-gigabyte scale.",
                icon: "fa-database",
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
            <h2 style={{ fontSize: "2.5rem", marginBottom: "24px", color: "white" }}>Optimize Your Transport Mesh</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", opacity: 0.9, marginBottom: "40px" }}>
              Work with our parallel computing specialists to implement real-time vector routing that bypasses traditional dispatch limits.
            </p>
            <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)" }}>
              Initiate Discovery Discovery &rarr;
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
