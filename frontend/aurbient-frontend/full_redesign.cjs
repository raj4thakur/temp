const fs = require('fs');

const createAIAutomationPage = () => `import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SolutionsAIAutomation() {
  return (
    <main style={{ background: "#050B14", color: "#fff", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Section */}
      <section style={{ position: "relative", padding: "200px 0 160px", overflow: "hidden" }}>
        {/* Abstract AI Background */}
        <div style={{ position: "absolute", top: "-50%", left: "-50%", width: "200%", height: "200%", background: "radial-gradient(circle at 50% 50%, rgba(19, 170, 179, 0.15), transparent 60%)", zIndex: 0, animation: "spin 60s linear infinite" }} />
        <div style={{ position: "absolute", inset: 0, background: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80')", backgroundSize: "cover", opacity: 0.2, mixBlendMode: "overlay" }} />
        
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "500", marginBottom: "30px", transition: "color 0.3s" }} onMouseOver={e => e.currentTarget.style.color = "#13AAB3"} onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
            <i className="fas fa-arrow-left" /> Back to Home
          </Link>
          
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 16px", background: "rgba(19,170,179,0.1)", border: "1px solid rgba(19,170,179,0.3)", borderRadius: "50px", color: "#13AAB3", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "24px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#13AAB3", boxShadow: "0 0 10px #13AAB3" }} />
            Core Solution 01
          </div>
          
          <h1 style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: "800", lineHeight: "1.05", marginBottom: "30px", maxWidth: "900px", background: "linear-gradient(180deg, #FFFFFF 0%, #A0B4C0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            AI &amp; Intelligent <br/>Automation
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#87A4B6", maxWidth: "650px", lineHeight: "1.7", marginBottom: "50px" }}>
            Transforming manual workflows into predictive, self-executing systems. We embed cognitive models directly into your operational logic to drive autonomous decision-making at scale.
          </p>
          
          <div style={{ display: "flex", gap: "20px" }}>
            <Link to="/contact" style={{ padding: "18px 40px", background: "var(--color-accent)", color: "var(--color-primary)", borderRadius: "50px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem", transition: "transform 0.3s, boxShadow 0.3s" }} onMouseOver={e => e.currentTarget.style.boxShadow = "0 10px 30px rgba(19,170,179,0.4)"} onMouseOut={e => e.currentTarget.style.boxShadow = "none"}>
              Deploy AI Solutions
            </Link>
            <a href="#architecture" style={{ padding: "18px 40px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", borderRadius: "50px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem", transition: "background 0.3s" }} onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"} onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}>
              Explore Architecture
            </a>
          </div>
        </div>
      </section>

      {/* Neural Pipeline Interactive */}
      <section id="architecture" style={{ padding: "120px 0", background: "#081018", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "white", marginBottom: "16px" }}>Intelligent Processing Pipeline</h2>
            <p style={{ color: "#87A4B6", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>How our neural architectures ingest, interpret, and execute operational directives autonomously.</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", position: "relative" }}>
            {/* Energy Line */}
            <div style={{ position: "absolute", top: "50%", left: "10%", right: "10%", height: "2px", background: "rgba(19,170,179,0.2)", zIndex: 0 }}>
              <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "20%", background: "#13AAB3", boxShadow: "0 0 20px #13AAB3", animation: "slideRight 4s infinite linear" }} />
            </div>

            {[
              { title: "Ingestion Layer", desc: "Real-time aggregation from APIs, databases, and IoT sensors.", icon: "fa-satellite-dish" },
              { title: "Cognitive Engine", desc: "NLP and Machine Learning contextualization and intent matching.", icon: "fa-brain" },
              { title: "Decision Matrix", desc: "Automated logic routing and predictive probability scoring.", icon: "fa-network-wired" },
              { title: "Execution API", desc: "System updates, triggered alerts, and automated ledger actions.", icon: "fa-bolt" }
            ].map((node, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", padding: "40px 30px", borderRadius: "20px", position: "relative", zIndex: 1, backdropFilter: "blur(10px)", transition: "transform 0.3s, borderColor 0.3s", cursor: "pointer" }} onMouseOver={e => {e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.borderColor = "#13AAB3"}} onMouseOut={e => {e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}}>
                <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(19,170,179,0.1)", border: "1px solid rgba(19,170,179,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", color: "#13AAB3", marginBottom: "24px" }}>
                  <i className={"fas " + node.icon} />
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "white", marginBottom: "12px" }}>{node.title}</h3>
                <p style={{ color: "#87A4B6", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section style={{ padding: "120px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "2.8rem", fontWeight: "700", marginBottom: "30px", lineHeight: "1.2" }}>Beyond Automation.<br/>Into <span style={{ color: "#13AAB3" }}>Cognition.</span></h2>
              <p style={{ fontSize: "1.15rem", color: "#87A4B6", lineHeight: "1.8", marginBottom: "40px" }}>
                Traditional RPA fails when processes deviate. Our AI architectures adapt dynamically to unstructured data, recognizing intent and mitigating edge cases without human intervention.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
                {["Unstructured Data Parsing", "Semantic Threat Analysis", "Predictive Demand Forecasting", "Autonomous Agent Ecosystems"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.1rem", color: "white", fontWeight: "500" }}>
                    <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(19,170,179,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#13AAB3", fontSize: "0.8rem" }}>
                      <i className="fas fa-check" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "linear-gradient(145deg, #111A24 0%, #080D12 100%)", borderRadius: "30px", padding: "50px", border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px" }}>
                <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "600", color: "white" }}>Model Confidence</h3>
                <span style={{ padding: "4px 12px", background: "rgba(39,201,63,0.1)", color: "#27C93F", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "700" }}>99.8% Accuracy</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[ { label: "Intent Recognition", val: 98 }, { label: "Data Extraction", val: 99 }, { label: "Anomaly Detection", val: 96 } ].map((stat, i) => (
                  <div key={i}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "0.9rem", color: "#87A4B6" }}>
                      <span>{stat.label}</span>
                      <span>{stat.val}%</span>
                    </div>
                    <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.05)", borderRadius: "10px", overflow: "hidden" }}>
                      <div style={{ width: \`\${stat.val}%\`, height: "100%", background: "#13AAB3", borderRadius: "10px" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{\`
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes slideRight { 0% { left: -20%; } 100% { left: 120%; } }
      \`}</style>
    </main>
  );
}
`;

const createCloudInfraPage = () => `import { Link } from "react-router-dom";

export default function SolutionsEnterpriseInfrastructure() {
  return (
    <main style={{ background: "#F8FAFC", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* Tech Header */}
      <section style={{ padding: "180px 0 120px", background: "linear-gradient(180deg, #E2E8F0 0%, #F8FAFC 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", backgroundImage: "linear-gradient(rgba(41, 128, 185, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(41, 128, 185, 0.05) 1px, transparent 1px)", backgroundSize: "40px 40px", zIndex: 0 }} />
        
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", background: "white", borderRadius: "50px", color: "#2980B9", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "30px", boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
            <i className="fas fa-server" /> Enterprise Infrastructure
          </div>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: "800", color: "#0F172A", marginBottom: "24px", letterSpacing: "-1px" }}>
            The Foundation for <br/><span style={{ color: "#2980B9" }}>Global Scale.</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#475569", maxWidth: "700px", margin: "0 auto 40px", lineHeight: "1.8" }}>
            We architect, deploy, and manage highly resilient cloud environments. Secure by design, infinitely scalable by nature.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <Link to="/contact" style={{ padding: "16px 36px", background: "#0F172A", color: "white", borderRadius: "12px", fontWeight: "600", textDecoration: "none", transition: "all 0.2s", boxShadow: "0 10px 20px rgba(15,23,42,0.2)" }} onMouseOver={e => e.currentTarget.style.transform = "translateY(-3px)"} onMouseOut={e => e.currentTarget.style.transform = "none"}>
              Build Your Infrastructure
            </Link>
          </div>
        </div>
      </section>

      {/* Network Topology */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ background: "#0F172A", borderRadius: "32px", padding: "80px", position: "relative", overflow: "hidden", color: "white" }}>
            {/* Map Background */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.05 }} />
            
            <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px" }}>
              <div>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "16px" }}>Global Architecture</h2>
                <p style={{ color: "#94A3B8", fontSize: "1.1rem", maxWidth: "500px", margin: 0 }}>High-availability multi-region clusters ensuring 99.999% uptime for mission-critical enterprise applications.</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "3rem", fontWeight: "800", color: "#38BDF8" }}>99.999%</div>
                <div style={{ color: "#94A3B8", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem" }}>Guaranteed SLA</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
              {[
                { title: "Edge Content Delivery", text: "Sub-10ms global latency caching.", val: "120+ Edge Nodes", icon: "fa-bolt" },
                { title: "Container Orchestration", text: "Auto-scaling Kubernetes clusters.", val: "Dynamic Scaling", icon: "fa-cubes" },
                { title: "Redundant Data Lakes", text: "Multi-AZ replication and failover.", val: "Zero Data Loss", icon: "fa-database" }
              ].map((item, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "40px", backdropFilter: "blur(10px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(56, 189, 248, 0.1)", color: "#38BDF8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>
                      <i className={"fas " + item.icon} />
                    </div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "700", margin: 0 }}>{item.title}</h3>
                  </div>
                  <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "24px" }}>{item.text}</p>
                  <div style={{ padding: "8px 16px", background: "rgba(255,255,255,0.05)", borderRadius: "8px", display: "inline-block", fontSize: "0.85rem", fontWeight: "600", color: "#38BDF8" }}>{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ padding: "80px 0 140px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "60px" }}>
            <div>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "700", color: "#0F172A", marginBottom: "24px" }}>Infrastructure Capabilities</h2>
              <p style={{ color: "#475569", fontSize: "1.1rem", lineHeight: "1.7" }}>We handle the complexity of the cloud so you can focus on shipping product. From VPC design to automated CI/CD pipelines.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {[
                { title: "VPC & Network Security", desc: "Private subnets, NAT gateways, and WAF configuration." },
                { title: "Serverless Architecture", desc: "Event-driven compute scaling down to zero cost." },
                { title: "Infrastructure as Code", desc: "Terraform & Ansible provisioned environments." },
                { title: "CI/CD Pipelines", desc: "Automated testing, building, and zero-downtime deployment." }
              ].map((cap, i) => (
                <div key={i} style={{ padding: "30px", background: "white", borderRadius: "16px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#0F172A", marginBottom: "12px" }}>{cap.title}</h4>
                  <p style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
`;

const createBusinessSystemsPage = () => `import { Link } from "react-router-dom";

export default function SolutionsBusinessSystems() {
  return (
    <main style={{ background: "#FFFFFF", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* Minimal Header */}
      <section style={{ padding: "160px 0 100px", borderBottom: "1px solid #F1F5F9" }}>
        <div className="container">
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#64748B", textDecoration: "none", fontSize: "0.95rem", fontWeight: "600", marginBottom: "40px" }} onMouseOver={e => e.currentTarget.style.color = "#0F172A"} onMouseOut={e => e.currentTarget.style.color = "#64748B"}>
            <i className="fas fa-arrow-left" /> Back to Home
          </Link>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.85rem", color: "#10B981", textTransform: "uppercase", fontWeight: "800", letterSpacing: "2px", display: "block", marginBottom: "20px" }}>Enterprise Software Engineering</span>
              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "800", color: "#0F172A", lineHeight: "1.1", marginBottom: "30px", letterSpacing: "-1px" }}>
                Modular Systems for Complex Operations.
              </h1>
              <p style={{ fontSize: "1.2rem", color: "#475569", lineHeight: "1.7", marginBottom: "40px" }}>
                We engineer bespoke software architectures designed to unify fragmented departments, integrate legacy ERPs, and provide crystal-clear operational visibility.
              </p>
              <Link to="/contact" style={{ padding: "18px 40px", background: "#10B981", color: "white", borderRadius: "8px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem", display: "inline-block", boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)" }}>
                Start a Project
              </Link>
            </div>
            <div style={{ position: "relative" }}>
              {/* Abstract Software Stack Visual */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { label: "Frontend Experience Layer", color: "#3B82F6", width: "100%" },
                  { label: "GraphQL / REST API Gateway", color: "#8B5CF6", width: "85%" },
                  { label: "Microservices Logic Hub", color: "#F59E0B", width: "95%" },
                  { label: "PostgreSQL Data Core", color: "#10B981", width: "70%" }
                ].map((layer, i) => (
                  <div key={i} style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "24px", position: "relative", overflow: "hidden", transform: \`translateX(\${i * 10}px)\`, boxShadow: "0 10px 20px rgba(0,0,0,0.02)" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "6px", background: layer.color }} />
                    <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: "700", color: "#0F172A", paddingLeft: "12px" }}>{layer.label}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: "120px 0", background: "#F8FAFC" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#0F172A", marginBottom: "16px" }}>Engineered for the Enterprise</h2>
            <p style={{ color: "#64748B", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>Scalable, maintainable, and deeply integrated into your existing business fabric.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
            {[
              { title: "Legacy Integration", desc: "Custom adaptors to sync modern web interfaces with archaic mainframes and SAP/Oracle ERPs.", icon: "fa-plug", color: "#3B82F6" },
              { title: "RBAC Security", desc: "Granular Role-Based Access Control ensuring strict compliance and department-level data silos.", icon: "fa-shield-alt", color: "#10B981" },
              { title: "Real-time State", desc: "WebSockets and event-driven architecture for instant UI updates across global teams.", icon: "fa-sync", color: "#F59E0B" },
              { title: "Custom Dashboards", desc: "Tailored reporting interfaces combining multiple data streams into unified executive views.", icon: "fa-chart-bar", color: "#8B5CF6" },
              { title: "Modular Codebase", desc: "Strictly typed TypeScript architectures prioritizing long-term maintainability and low technical debt.", icon: "fa-code", color: "#EF4444" },
              { title: "Cross-Platform", desc: "Progressive Web Apps and native integrations that perform seamlessly from desktop to factory floor.", icon: "fa-mobile-alt", color: "#0F172A" }
            ].map((feat, i) => (
              <div key={i} style={{ background: "white", padding: "40px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", transition: "transform 0.3s" }} onMouseOver={e => e.currentTarget.style.transform = "translateY(-5px)"} onMouseOut={e => e.currentTarget.style.transform = "none"}>
                <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: \`\${feat.color}15\`, color: feat.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "20px" }}>
                  <i className={"fas " + feat.icon} />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#0F172A", marginBottom: "12px" }}>{feat.title}</h3>
                <p style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
`;

const createOperationalIntelligencePage = () => `import { Link } from "react-router-dom";

export default function SolutionsOperationalIntelligence() {
  return (
    <main style={{ background: "#0F172A", color: "white", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* Dashboard Layout Header */}
      <section style={{ paddingTop: "140px", paddingBottom: "100px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "600", marginBottom: "40px" }} onMouseOver={e => e.currentTarget.style.color = "white"} onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
            <i className="fas fa-arrow-left" /> Back to Home
          </Link>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ maxWidth: "600px" }}>
              <span style={{ fontSize: "0.85rem", color: "#F59E0B", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "16px" }}>Operational Intelligence</span>
              <h1 style={{ fontSize: "3.5rem", fontWeight: "800", marginBottom: "20px", lineHeight: "1.1" }}>Turn Data into <br/>Decisions.</h1>
              <p style={{ fontSize: "1.15rem", color: "#94A3B8", lineHeight: "1.7" }}>Deploy central intelligence hubs that monitor KPIs, forecast bottlenecks, and visualize complex supply chain metadata in real-time.</p>
            </div>
            <div>
              <Link to="/contact" style={{ padding: "16px 32px", background: "#F59E0B", color: "#0F172A", borderRadius: "8px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Visual */}
      <section style={{ padding: "80px 0 120px", background: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzFFMjkyRicgc3Ryb2tlLXdpZHRoPScxJyBzdHJva2Utb3BhY2l0eT0nMC41Jz48cGF0aCBkPSdNMCA1MGgxMDBNMTAgMHYxMDBNMzAgMHYxMDBNNTAgMHYxMDBNNzAgMHYxMDBNOTAgMHYxMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcgLz48L2c+PC9zdmc+')", backgroundSize: "100px 100px" }}>
        <div className="container">
          <div style={{ background: "#1E293B", borderRadius: "24px", padding: "40px", border: "1px solid #334155", boxShadow: "0 25px 50px rgba(0,0,0,0.4)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px", borderBottom: "1px solid #334155", paddingBottom: "20px" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "700", margin: 0 }}>Executive Telemetry</h3>
              <div style={{ display: "flex", gap: "10px" }}>
                <span style={{ padding: "6px 12px", background: "rgba(16, 185, 129, 0.1)", color: "#10B981", borderRadius: "6px", fontSize: "0.85rem", fontWeight: "600" }}><i className="fas fa-circle" style={{ fontSize: "0.6rem", marginRight: "6px" }}/> Live Sync</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "40px" }}>
              {/* Stat Cards */}
              {[
                { label: "Global Efficiency Yield", val: "94.2%", trend: "+2.4%", color: "#10B981" },
                { label: "Active Bottlenecks", val: "2", trend: "-1", color: "#F59E0B" },
                { label: "Processing Latency", val: "14ms", trend: "-2ms", color: "#3B82F6" }
              ].map((stat, i) => (
                <div key={i} style={{ background: "#0F172A", padding: "24px", borderRadius: "16px", border: "1px solid #334155" }}>
                  <div style={{ color: "#94A3B8", fontSize: "0.9rem", fontWeight: "600", textTransform: "uppercase", marginBottom: "12px" }}>{stat.label}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                    <span style={{ fontSize: "2.5rem", fontWeight: "800" }}>{stat.val}</span>
                    <span style={{ color: stat.color, fontWeight: "600", fontSize: "0.95rem" }}>{stat.trend}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>
              {/* Chart Placeholder */}
              <div style={{ background: "#0F172A", padding: "30px", borderRadius: "16px", border: "1px solid #334155", height: "300px", display: "flex", alignItems: "flex-end", gap: "12px", position: "relative" }}>
                <div style={{ position: "absolute", top: "30px", left: "30px", color: "#94A3B8", fontWeight: "600" }}>Output Volume (7 Days)</div>
                {[30, 45, 60, 50, 75, 65, 90].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: \`\${h}%\`, background: i === 6 ? "#3B82F6" : "#1E293B", borderRadius: "6px 6px 0 0", position: "relative" }}>
                    <div style={{ position: "absolute", top: "-25px", width: "100%", textAlign: "center", fontSize: "0.8rem", color: i === 6 ? "#3B82F6" : "#64748B", fontWeight: "bold" }}>{h}k</div>
                  </div>
                ))}
              </div>

              {/* Anomalies List */}
              <div style={{ background: "#0F172A", padding: "30px", borderRadius: "16px", border: "1px solid #334155" }}>
                <div style={{ color: "#94A3B8", fontWeight: "600", marginBottom: "20px" }}>Detected Anomalies</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ color: "#EF4444", marginTop: "2px" }}><i className="fas fa-exclamation-triangle"/></div>
                    <div>
                      <div style={{ fontSize: "0.95rem", fontWeight: "600", marginBottom: "4px" }}>Inventory Shortfall</div>
                      <div style={{ fontSize: "0.85rem", color: "#64748B" }}>Facility B requires raw materials restock within 48hrs.</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ color: "#F59E0B", marginTop: "2px" }}><i className="fas fa-exclamation-circle"/></div>
                    <div>
                      <div style={{ fontSize: "0.95rem", fontWeight: "600", marginBottom: "4px" }}>Logistics Delay</div>
                      <div style={{ fontSize: "0.85rem", color: "#64748B" }}>Route 4 experiencing 2-hour delay due to weather.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
`;

fs.writeFileSync('src/pages/SolutionsAIAutomation.jsx', createAIAutomationPage());
fs.writeFileSync('src/pages/SolutionsEnterpriseInfrastructure.jsx', createCloudInfraPage());
fs.writeFileSync('src/pages/SolutionsBusinessSystems.jsx', createBusinessSystemsPage());
fs.writeFileSync('src/pages/SolutionsOperationalIntelligence.jsx', createOperationalIntelligencePage());

console.log("All 4 pages fully redesigned with custom layouts!");
