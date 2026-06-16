import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const images = {
    hero: "/images/careers_office_space.png",
    ecosystem: "/images/philosophy_ecosystem.png"
  };

  return (
    <main style={{ background: "#F4F9FB" }}>
      {/* Cinematic Brand Foundation Hero */}
      <section className="hero" style={{ 
        position: "relative", 
        padding: "110px 0 100px", 
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden" 
      }}>
        {/* Background Image Layer */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${images.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0
        }}></div>
        {/* Gradient Overlay for high-end readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(14,25,33,0.8) 0%, rgba(14,25,33,0.95) 100%)",
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-text" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
            <div className="hero-badge" style={{ 
              display: "inline-block", 
              marginBottom: "24px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#E4F1F3",
              backdropFilter: "blur(10px)",
              padding: "6px 16px",
              borderRadius: "100px",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontWeight: "600"
            }}>
              <i className="fas fa-building" style={{ marginRight: "8px", color: "var(--color-accent)" }}></i> Company Overview
            </div>
            <h1 style={{ 
              fontSize: "clamp(3rem, 5vw, 4.5rem)", 
              lineHeight: "1.1", 
              marginBottom: "24px", 
              color: "#FFFFFF", 
              letterSpacing: "-0.02em",
              fontWeight: "700"
            }}>Aurbient Technologies</h1>
            <h2 style={{ fontSize: "1.2rem", color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "600", marginBottom: "32px" }}>Company Identity & Brand Foundation</h2>
            <p style={{ 
              fontSize: "1.25rem", 
              lineHeight: "1.85", 
              color: "#E4F1F3", 
              marginBottom: "0",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto"
            }}>
              Aurbient Technologies is a technology and automation company focused on building intelligent operational systems for modern businesses. We develop connected operational environments designed to support long-term business growth and intelligent operational transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section style={{ padding: "80px 0", background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "stretch" }}>
            {/* Vision */}
            <div className="eco-card" style={{ background: "#F4F9FB", padding: "50px", borderRadius: "24px", borderTop: "4px solid var(--color-primary)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "60px", height: "60px", background: "var(--color-primary)", color: "white", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", marginBottom: "24px" }}>
                <i className="fas fa-eye"></i>
              </div>
              <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 20px 0" }}>Our Vision</h3>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8", margin: "0 0 20px 0" }}>
                To become a globally recognized intelligent technology company helping businesses transform operations through AI-driven systems, automation infrastructure, and scalable digital ecosystems.
              </p>
            </div>

            {/* Mission */}
            <div className="eco-card" style={{ background: "#F4F9FB", padding: "50px", borderRadius: "24px", borderTop: "4px solid var(--color-accent)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "60px", height: "60px", background: "rgba(19, 170, 179, 0.15)", color: "var(--color-accent)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", marginBottom: "24px" }}>
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 20px 0" }}>Our Mission</h3>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8", margin: "0 0 20px 0" }}>
                To engineer intelligent operational systems that help businesses improve efficiency, automate workflows, enhance operational visibility, and scale through modern digital infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Ecosystem Image */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", color: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Company Philosophy</span>
              <h2 style={{ fontSize: "2.6rem", fontWeight: "700", margin: "0 0 30px 0", lineHeight: "1.2" }}>
                Technology should function as an ecosystem.
              </h2>
              <p style={{ fontSize: "1.15rem", color: "#E4F1F3", lineHeight: "1.8", marginBottom: "30px", opacity: 0.9 }}>
                It must improve how businesses communicate, operate, coordinate, and scale. We focus on designing systems that align technology with real operational challenges.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Operational clarity drives better decisions.",
                  "Intelligent systems improve execution.",
                  "Automation reduces operational friction.",
                  "Scalable infrastructure creates resilience."
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", gap: "16px", alignItems: "flex-start", fontSize: "1.1rem", lineHeight: "1.6" }}>
                    <span style={{ color: "var(--color-accent)", marginTop: "4px" }}><i className="fas fa-check-circle"></i></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "-5%", left: "-5%", width: "110%", height: "110%", background: "radial-gradient(circle, rgba(19,170,179,0.2) 0%, transparent 60%)", filter: "blur(30px)", zIndex: 0 }}></div>
              <img 
                src={images.ecosystem} 
                alt="Aurbient Operational Ecosystem" 
                style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 20px 50px rgba(0,0,0,0.3)", position: "relative", zIndex: 1, border: "1px solid rgba(255,255,255,0.1)" }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Minimal CTA */}
      <section style={{ padding: "80px 0", background: "white", textAlign: "center" }}>
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "20px" }}>Ready to transform your operations?</h2>
            <p style={{ color: "#58798C", fontSize: "1.15rem", lineHeight: "1.8", marginBottom: "40px" }}>
              Partner with Aurbient Technologies to build intelligent, scalable systems tailored to your enterprise.
            </p>
            <Link to="/contact" className="btn-premium" style={{ background: "var(--color-primary)", color: "white", padding: "16px 48px", fontSize: "1.1rem", borderRadius: "100px", display: "inline-block", textDecoration: "none" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
