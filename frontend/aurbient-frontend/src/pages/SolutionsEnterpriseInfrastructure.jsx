import { Link } from "react-router-dom";

const deliverables = [
  "Corporate website development",
  "Interactive customer portals",
  "Bespoke web applications",
  "High-performance landing pages",
  "E-commerce platforms",
];

const focusAreas = [
  { icon: "fa-laptop-code", color: "#13AAB3", bg: "rgba(19, 170, 179,0.1)", title: "Corporate Websites", desc: "Fast, beautiful, and SEO-optimized websites that represent your brand." },
  { icon: "fa-users", color: "#2980B9", bg: "rgba(41,128,185,0.1)", title: "Customer Portals", desc: "Secure environments where your clients can manage their accounts and access data." },
  { icon: "fa-mobile-alt", color: "#E67E22", bg: "rgba(230,126,34,0.1)", title: "Web Applications", desc: "Interactive applications accessible from anywhere on any device." },
  { icon: "fa-shopping-cart", color: "#27AE60", bg: "rgba(39,174,96,0.1)", title: "E-Commerce", desc: "Scalable online stores designed for high conversions and smooth checkout." },
];

const outcomes = [
  "Professional digital presence",
  "Enhanced customer experience",
  "Higher conversion rates",
  "Secure user authentication",
  "Reliable, fast performance"
];

export default function SolutionsEnterpriseInfrastructure() {
  return (
    <main style={{ background: "#F4F9FB", minHeight: "100vh" }}>
      <section className="hero case-study-hero" style={{ position: "relative", padding: "110px 0 100px", backgroundImage: "url(/images/enterprise_infra_network.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14,25,33,0.97) 0%, rgba(14,25,33,0.75) 55%, rgba(14,25,33,0.4) 100%)", zIndex: 1 }} />
        <div className="container" style={{ position: "relative", zIndex: 2, color: "white" }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "500", marginBottom: "28px", transition: "all 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#FFFFFF"} onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}>
            <i className="fas fa-arrow-left" /> Back to Home
          </Link>
          <span style={{ fontSize: "0.9rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>Solutions Ecosystem 04</span>
          <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", marginBottom: "28px", maxWidth: "860px", lineHeight: "1.1", fontWeight: "700" }}>Custom Software &amp; Digital Solutions</h1>
          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19, 170, 179,0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1rem", fontWeight: "600", border: "1px solid rgba(19, 170, 179,0.4)" }}>Websites, Portals &amp; Web Apps</div>
        </div>
      </section>

      <div className="container" style={{ position: "relative", zIndex: 10, marginTop: "-80px", paddingBottom: "60px" }}>

        {/* Overview + Insight */}
        <div className="eco-card" style={{ background: "white", padding: "56px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.06)", marginBottom: "30px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Section Overview</span>
              <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "var(--color-primary)", fontWeight: "700" }}>Elevate Your Digital Presence</h2>
              <p style={{ color: "#395568", lineHeight: "1.9", fontSize: "1.1rem" }}>
                Your digital presence and customer-facing tools define your brand. We build high-performance websites, interactive customer portals, and bespoke web applications that provide seamless experiences for your users and clients. From design to deployment, we engineer digital solutions that look incredible and perform flawlessly.
              </p>
            </div>
            <div style={{ padding: "44px", background: "linear-gradient(135deg, var(--color-primary) 0%, #0a141b 100%)", color: "white", borderRadius: "20px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right" /></div>
              <h4 style={{ marginBottom: "16px", color: "var(--color-accent)", fontSize: "1rem", display: "flex", alignItems: "center", gap: "10px", textTransform: "uppercase", letterSpacing: "1px" }}><i className="fas fa-lightbulb" /> Key Insight</h4>
              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.15rem", margin: 0, position: "relative", zIndex: 2 }}>
                "In the modern era, your software and website are often the very first interaction a customer has with your business. Make it count."
              </p>
            </div>
          </div>
        </div>

        {/* INTERACTIVE UI */}
        <div style={{ marginBottom: "48px", background: "white", padding: "60px", borderRadius: "24px", border: "1.5px solid #E2EBE7", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>System Architecture</span>
            <h3 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)" }}>Our Development Process</h3>
            <p style={{ color: "#58798C", fontSize: "1.1rem", maxWidth: "600px", margin: "16px auto 0" }}>How we bring digital products to life.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", position: "relative" }}>
            {/* Connecting Line */}
            <div style={{ position: "absolute", top: "40px", left: "12%", right: "12%", height: "3px", background: "linear-gradient(90deg, rgba(19, 170, 179,0.2) 0%, var(--color-accent) 50%, rgba(19, 170, 179,0.2) 100%)", zIndex: 1 }}></div>

            {[
              { step: "01", title: "UI/UX Design", desc: "Crafting beautiful, intuitive interfaces.", icon: "fa-paint-brush" },
              { step: "02", title: "Frontend Build", desc: "Building fast, responsive web applications.", icon: "fa-laptop-code" },
              { step: "03", title: "Backend Systems", desc: "Creating secure, scalable server architectures.", icon: "fa-server" },
              { step: "04", title: "Launch & Support", desc: "Deploying to production with ongoing maintenance.", icon: "fa-check-circle" }
            ].map((node, idx) => (
              <div key={idx} style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "20px" }}>
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "white", border: "3px solid var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: "1.8rem", color: "var(--color-primary)", boxShadow: "0 10px 25px rgba(19, 170, 179,0.2)", position: "relative", transition: "all 0.3s" }}>
                  <i className={"fas " + node.icon}></i>
                  <div style={{ position: "absolute", top: "-10px", right: "-10px", background: "var(--color-primary)", color: "white", width: "28px", height: "28px", borderRadius: "50%", fontSize: "0.75rem", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center" }}>{node.step}</div>
                </div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>{node.title}</h4>
                <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6" }}>{node.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Split Flow */}
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
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(236, 72, 153, 0.08)", color: "#EC4899", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
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
                    color: "#EC4899", 
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
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(139, 92, 246, 0.08)", color: "#8B5CF6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
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
                    color: "#8B5CF6", 
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

        {/* Operational Focus Areas */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "10px", display: "block" }}>Focus</span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Digital Products</h2>
            <p style={{ color: "#58798C", fontSize: "1.05rem" }}>Modern digital infrastructure to connect with your customers.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "28px" }}>
            {focusAreas.map((area, i) => (
              <div key={i} className="eco-card" style={{ background: "white", padding: "36px", borderRadius: "18px", border: "1.5px solid #E2EBE7", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: area.bg, color: area.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "22px" }}>
                  <i className={`fas ${area.icon}`} />
                </div>
                <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "10px" }}>{area.title}</h4>
                <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section style={{ padding: "72px 0", background: "linear-gradient(135deg, var(--color-primary) 0%, #0a141b 100%)", color: "white", textAlign: "center", borderRadius: "24px", overflow: "hidden" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 40px" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", marginBottom: "20px" }}>Ready to Build Your Digital Presence?</h2>
            <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "rgba(255,255,255,0.7)", marginBottom: "40px" }}>Let's design and engineer software that your customers will love using.</p>
            <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)", padding: "16px 40px", borderRadius: "50px", fontWeight: "700", display: "inline-block", textDecoration: "none" }}>Discuss Implementation →</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
