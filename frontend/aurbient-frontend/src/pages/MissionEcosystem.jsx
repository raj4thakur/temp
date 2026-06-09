import { useState } from "react";
import { Link } from "react-router-dom";

export default function MissionEcosystem() {
  const images = {
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  };

  const [activeBelief, setActiveBelief] = useState(0);

  const beliefs = [
    { num: "01", icon: "fa-network-wired", title: "Intelligent Systems Create Better Businesses", desc: "Businesses grow more effectively when workflows, reporting environments, operational systems, and communication layers function together as connected ecosystems.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" },
    { num: "02", icon: "fa-robot", title: "Automation Should Improve Human Efficiency", desc: "Automation should support teams by reducing repetitive operational dependency and improving execution speed.", img: "/images/cobot-psychology.jpeg" },
    { num: "03", icon: "fa-server", title: "Scalability Requires Structure", desc: "Long-term business growth requires scalable systems, operational clarity, and intelligent digital infrastructure.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" },
    { num: "04", icon: "fa-brain", title: "AI Should Solve Real Operational Problems", desc: "Artificial Intelligence becomes valuable when integrated into real business operations capable of improving visibility, efficiency, and decision-making.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80" },
    { num: "05", icon: "fa-eye", title: "Operational Visibility is Essential", desc: "Leadership requires real-time insight into performance metrics. We build unified dashboards that eliminate data silos and expose core business truths.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" },
    { num: "06", icon: "fa-tachometer-alt", title: "Execution Must Be Frictionless", desc: "We engineer workflow systems that remove administrative bottlenecks, ensuring your workforce can focus strictly on high-value strategic execution.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80" }
  ];

  return (
    <main style={{ background: "#F4F9FB" }}>
      <section className="hero" style={{ 
        position: "relative", padding: "110px 0 100px", minHeight: "75vh", display: "flex", alignItems: "center", overflow: "hidden" 
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

      <section style={{ padding: "60px 0", background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Operational Beliefs</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 20px 0" }}>What We Believe</h2>
            <p style={{ color: "#395568", fontSize: "1.15rem", lineHeight: "1.8" }}>
              We believe the future belongs to businesses capable of combining strategic thinking, operational clarity, intelligent automation, and scalable digital infrastructure.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
            {/* Left Column: Titles/Descriptions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {beliefs.map((belief, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveBelief(idx)}
                  style={{
                    padding: '32px',
                    borderRadius: '20px',
                    background: activeBelief === idx ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.7)',
                    border: activeBelief === idx ? '1px solid transparent' : '1px solid #E2EBE7',
                    boxShadow: activeBelief === idx ? '0 15px 40px rgba(14,25,33,0.1)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease'
                  }}
                >
                  <span style={{ 
                    background: activeBelief === idx ? 'rgba(255,255,255,0.1)' : '#F4F9FB',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    color: activeBelief === idx ? 'var(--color-accent)' : 'var(--color-primary)', 
                    fontWeight: '700', 
                    fontSize: '0.85rem', 
                    marginBottom: '16px', 
                    display: 'inline-block' 
                  }}>
                    {belief.num} <i className={`fas ${belief.icon}`} style={{ marginLeft: '6px' }}></i>
                  </span>
                  <h4 style={{ color: activeBelief === idx ? 'white' : 'var(--color-primary)', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 12px 0', transition: 'color 0.4s ease' }}>{belief.title}</h4>
                  <p style={{ color: activeBelief === idx ? '#E4F1F3' : '#58798C', margin: 0, fontSize: '1.05rem', lineHeight: '1.7', transition: 'color 0.4s ease' }}>{belief.desc}</p>
                </div>
              ))}
            </div>

            {/* Right Column: Sticky Image Viewer */}
            <div style={{ position: 'sticky', top: '120px', height: '600px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(14, 25, 33, 0.15)', background: 'var(--color-primary)' }}>
              {beliefs.map((belief, idx) => (
                <div 
                  key={idx}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${belief.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: activeBelief === idx ? 1 : 0,
                    transition: 'opacity 0.6s ease',
                    zIndex: activeBelief === idx ? 1 : 0
                  }}
                />
              ))}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,25,33,0.6) 0%, transparent 40%)', zIndex: 2, pointerEvents: 'none' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", color: "white", textAlign: "center" }}>
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", display: "inline-block", background: "rgba(19, 170, 179, 0.15)", padding: "6px 16px", borderRadius: "20px" }}>The Future We Are Building</span>
            <h2 style={{ fontSize: "2.8rem", fontWeight: "700", margin: "0 0 30px 0", color: "white" }}>Long-Term Direction</h2>
            <p style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#E4F1F3", marginBottom: "40px", opacity: 0.9 }}>
              Aurbient Technologies aims to build the operational intelligence layer for modern businesses.
            </p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginBottom: "36px" }}>
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
