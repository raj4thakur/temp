import { useState } from "react";
import { Link } from "react-router-dom";

export default function MissionEcosystem() {
  const images = {
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  };

  return (
    <main style={{ background: "#F4F9FB" }}>
      <section className="hero" style={{ 
        position: "relative", padding: "180px 0 160px", minHeight: "75vh", display: "flex", alignItems: "center", overflow: "hidden" 
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${images.hero})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }}></div>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(14,25,33,0.4) 0%, rgba(14,25,33,0.9) 100%)", zIndex: 1 }}></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-text" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
            <div className="hero-badge" style={{ display: "inline-block", marginBottom: "24px", background: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "#E4F1F3", backdropFilter: "blur(10px)", padding: "6px 16px", borderRadius: "100px", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>
              <i className="fas fa-bullseye" style={{ marginRight: "8px", color: "var(--color-accent)" }}></i> Strategic Direction
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", marginBottom: "24px", color: "#FFFFFF", letterSpacing: "-0.02em", fontWeight: "700" }}>Mission & Ecosystem</h1>
            <p style={{ fontSize: "1.25rem", lineHeight: "1.85", color: "#E4F1F3", marginBottom: "0", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              To engineer intelligent operational systems that help businesses improve efficiency, automate workflows, enhance operational visibility, and scale through modern digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Operational Beliefs</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 20px 0" }}>What We Believe</h2>
            <p style={{ color: "#395568", fontSize: "1.15rem", lineHeight: "1.8" }}>
              We believe the future belongs to businesses capable of combining strategic thinking, operational clarity, intelligent automation, and scalable digital infrastructure.
            </p>
          </div>

          <div className="bento-grid">
            
            {/* Item 1 (Span 2) - Network Image */}
            <div className="bento-item-span-2 bento-item" style={{ position: "relative", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "40px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
              <div className="bento-bg-image" style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/belief_network.png)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,25,33,0.95) 0%, rgba(14,25,33,0.2) 100%)" }}></div>
              <div className="bento-text-content" style={{ position: "relative", zIndex: 1 }}>
                <span className="bento-badge" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "6px 14px", borderRadius: "20px", color: "var(--color-accent)", fontSize: "0.85rem", fontWeight: "700", marginBottom: "16px", display: "inline-block", border: "1px solid rgba(255,255,255,0.15)" }}>01 <i className="fas fa-network-wired" style={{ marginLeft: "6px" }}></i></span>
                <h4 className="bento-title" style={{ fontSize: "1.8rem", fontWeight: "700", color: "white", marginBottom: "12px" }}>Intelligent Systems Create Better Businesses</h4>
                <div className="bento-details">
                  <div className="bento-details-inner">
                    <p style={{ color: "#E4F1F3", lineHeight: "1.6", margin: 0, fontSize: "1.05rem", maxWidth: "90%" }}>Businesses grow more effectively when workflows, reporting environments, operational systems, and communication layers function together as connected ecosystems.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 (Span 1) - Automation Image */}
            <div className="bento-item" style={{ position: "relative", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "40px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
              <div className="bento-bg-image" style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/belief_automation.png)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,25,33,0.95) 0%, rgba(14,25,33,0.2) 100%)" }}></div>
              <div className="bento-text-content" style={{ position: "relative", zIndex: 1 }}>
                <span className="bento-badge" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "6px 14px", borderRadius: "20px", color: "var(--color-accent)", fontSize: "0.85rem", fontWeight: "700", marginBottom: "16px", display: "inline-block", border: "1px solid rgba(255,255,255,0.15)" }}>02 <i className="fas fa-robot" style={{ marginLeft: "6px" }}></i></span>
                <h4 className="bento-title" style={{ fontSize: "1.4rem", fontWeight: "700", color: "white", marginBottom: "12px" }}>Automation Should Improve Human Efficiency</h4>
                <div className="bento-details">
                  <div className="bento-details-inner">
                    <p style={{ color: "#E4F1F3", lineHeight: "1.6", margin: 0, fontSize: "1.05rem" }}>Automation should support teams by reducing repetitive operational dependency and improving execution speed.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3 (Span 1) - Scalability Image */}
            <div className="bento-item" style={{ position: "relative", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "40px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
              <div className="bento-bg-image" style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/belief_scalability.png)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,25,33,0.95) 0%, rgba(14,25,33,0.2) 100%)" }}></div>
              <div className="bento-text-content" style={{ position: "relative", zIndex: 1 }}>
                <span className="bento-badge" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "6px 14px", borderRadius: "20px", color: "var(--color-accent)", fontSize: "0.85rem", fontWeight: "700", marginBottom: "16px", display: "inline-block", border: "1px solid rgba(255,255,255,0.15)" }}>03 <i className="fas fa-server" style={{ marginLeft: "6px" }}></i></span>
                <h4 className="bento-title" style={{ fontSize: "1.4rem", fontWeight: "700", color: "white", marginBottom: "12px" }}>Scalability Requires Structure</h4>
                <div className="bento-details">
                  <div className="bento-details-inner">
                    <p style={{ color: "#E4F1F3", lineHeight: "1.6", margin: 0, fontSize: "1.05rem" }}>Long-term business growth requires scalable systems, operational clarity, and intelligent digital infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 4 (Span 2) - AI Core Image */}
            <div className="bento-item-span-2 bento-item" style={{ position: "relative", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "40px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
              <div className="bento-bg-image" style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/belief_ai_core.png)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,25,33,0.95) 0%, rgba(14,25,33,0.2) 100%)" }}></div>
              <div className="bento-text-content" style={{ position: "relative", zIndex: 1 }}>
                <span className="bento-badge" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "6px 14px", borderRadius: "20px", color: "var(--color-accent)", fontSize: "0.85rem", fontWeight: "700", marginBottom: "16px", display: "inline-block", border: "1px solid rgba(255,255,255,0.15)" }}>04 <i className="fas fa-brain" style={{ marginLeft: "6px" }}></i></span>
                <h4 className="bento-title" style={{ fontSize: "1.8rem", fontWeight: "700", color: "white", marginBottom: "12px" }}>AI Should Solve Real Operational Problems</h4>
                <div className="bento-details">
                  <div className="bento-details-inner">
                    <p style={{ color: "#E4F1F3", lineHeight: "1.6", margin: 0, fontSize: "1.05rem", maxWidth: "90%" }}>Artificial Intelligence becomes valuable when integrated into real business operations capable of improving visibility, efficiency, and decision-making.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 5 (Span 2) - Dashboard Image */}
            <div className="bento-item-span-2 bento-item" style={{ position: "relative", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "40px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
              <div className="bento-bg-image" style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/belief_dashboard.png)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,25,33,0.95) 0%, rgba(14,25,33,0.2) 100%)" }}></div>
              <div className="bento-text-content" style={{ position: "relative", zIndex: 1 }}>
                <span className="bento-badge" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "6px 14px", borderRadius: "20px", color: "var(--color-accent)", fontSize: "0.85rem", fontWeight: "700", marginBottom: "16px", display: "inline-block", border: "1px solid rgba(255,255,255,0.15)" }}>05 <i className="fas fa-eye" style={{ marginLeft: "6px" }}></i></span>
                <h4 className="bento-title" style={{ fontSize: "1.8rem", fontWeight: "700", color: "white", marginBottom: "12px" }}>Operational Visibility is Essential</h4>
                <div className="bento-details">
                  <div className="bento-details-inner">
                    <p style={{ color: "#E4F1F3", lineHeight: "1.6", margin: 0, fontSize: "1.05rem", maxWidth: "90%" }}>Leadership requires real-time insight into performance metrics. We build unified dashboards that eliminate data silos and expose core business truths.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 6 (Span 1) - Execution Image */}
            <div className="bento-item" style={{ position: "relative", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "40px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
              <div className="bento-bg-image" style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/belief_execution.png)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,25,33,0.95) 0%, rgba(14,25,33,0.2) 100%)" }}></div>
              <div className="bento-text-content" style={{ position: "relative", zIndex: 1 }}>
                <span className="bento-badge" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "6px 14px", borderRadius: "20px", color: "var(--color-accent)", fontSize: "0.85rem", fontWeight: "700", marginBottom: "16px", display: "inline-block", border: "1px solid rgba(255,255,255,0.15)" }}>06 <i className="fas fa-tachometer-alt" style={{ marginLeft: "6px" }}></i></span>
                <h4 className="bento-title" style={{ fontSize: "1.4rem", fontWeight: "700", color: "white", marginBottom: "12px" }}>Execution Must Be Frictionless</h4>
                <div className="bento-details">
                  <div className="bento-details-inner">
                    <p style={{ color: "#E4F1F3", lineHeight: "1.6", margin: 0, fontSize: "1.05rem", fontWeight: "500" }}>We engineer workflow systems that remove administrative bottlenecks, ensuring your workforce can focus strictly on high-value strategic execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0", background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", color: "white", textAlign: "center" }}>
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", display: "inline-block", background: "rgba(19, 170, 179, 0.15)", padding: "6px 16px", borderRadius: "20px" }}>The Future We Are Building</span>
            <h2 style={{ fontSize: "2.8rem", fontWeight: "700", margin: "0 0 30px 0", color: "white" }}>Long-Term Direction</h2>
            <p style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#E4F1F3", marginBottom: "40px", opacity: 0.9 }}>
              Aurbient Technologies aims to build the operational intelligence layer for modern businesses.
            </p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginBottom: "60px" }}>
              {["AI-driven operational ecosystems", "Intelligent enterprise infrastructure", "Automation architecture", "Business intelligence environments", "Enterprise workflow systems", "Scalable digital transformation ecosystems"].map((item, i) => (
                <span key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "10px 20px", borderRadius: "100px", fontSize: "0.95rem", color: "white", fontWeight: "500" }}>{item}</span>
              ))}
            </div>

            <div style={{ background: "rgba(9, 32, 39, 0.7)", backdropFilter: "blur(20px)", padding: "50px", borderRadius: "30px", border: "1px solid rgba(19,170,179,0.4)", boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 0 30px rgba(19,170,179,0.1)" }}>
              <p style={{ fontSize: "1.3rem", lineHeight: "1.8", color: "#E4F1F3", margin: 0, fontStyle: "italic", fontWeight: "400", letterSpacing: "0.5px" }}>
                <span style={{ color: "var(--color-accent)", fontSize: "1.8rem", lineHeight: "0", verticalAlign: "middle", marginRight: "8px" }}>"</span>
                Aurbient Technologies develops intelligent operational ecosystems designed to improve business visibility, workflow coordination, automation efficiency, and scalable enterprise growth through modern technology infrastructure and AI-driven transformation.
                <span style={{ color: "var(--color-accent)", fontSize: "1.8rem", lineHeight: "0", verticalAlign: "middle", marginLeft: "4px" }}>"</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
