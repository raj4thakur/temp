import React from "react";
import ServicesSection from "../components/ServicesSection";
import FAQSection from "../components/FAQSection";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <main style={{ background: "#F4F9FB" }}>
      <section style={{ padding: "100px 0 70px", background: "linear-gradient(135deg, var(--color-primary) 0%, #0C171F 100%)", color: "white" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", display: "block" }}>What We Do</span>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "700", margin: "0 0 20px 0", lineHeight: "1.25" }}>
            Operational Systems & Intelligence
          </h1>
          <p style={{ color: "#A5C5D6", fontSize: "1.15rem", lineHeight: "1.8", margin: 0 }}>
            We design, build, and deploy high-performance engineering designed to unify your enterprise operations.
          </p>
        </div>
      </section>

      <ServicesSection />
      <FAQSection />

      {/* Final CTA Layer */}
      <section style={{ padding: "60px 0", background: "var(--color-primary)", color: "white", position: "relative", overflow: "hidden" }}>
        <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'radial-gradient(circle at 80% 20%, rgba(19,170,179,0.15) 0%, transparent 50%)', pointerEvents: 'none' }}></div>
        <div className="container" id="build" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="build-ecosystem" style={{ background: "transparent", border: "none", padding: 0 }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "20px", display: "inline-block" }}>Get Started</span>
            <h2 style={{ fontSize: "3rem", fontWeight: "700", color: "white", marginBottom: "20px", letterSpacing: "-0.02em" }}>Let’s build your intelligent infrastructure</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "30px" }}>
              <Link to="/contact" className="btn-premium" style={{ 
                background: "var(--color-accent)", color: "white", padding: "18px 48px", 
                fontSize: "1.15rem", borderRadius: "100px", boxShadow: "0 10px 30px rgba(19, 170, 179, 0.3)", 
                textDecoration: "none", display: "inline-block", transition: "all 0.3s ease", fontWeight: "600"
              }}>
                Book a Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
