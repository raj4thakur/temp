const fs = require('fs');

const files = [
  'src/pages/SolutionsAIAutomation.jsx',
  'src/pages/SolutionsEnterpriseInfrastructure.jsx',
  'src/pages/SolutionsBusinessSystems.jsx',
  'src/pages/SolutionsOperationalIntelligence.jsx'
];

const uis = {
  'src/pages/SolutionsAIAutomation.jsx': `
        {/* INTERACTIVE AI PIPELINE UI */}
        <div style={{ marginBottom: "80px", background: "white", padding: "60px", borderRadius: "24px", border: "1.5px solid #E2EBE7", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>System Architecture</span>
            <h3 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)" }}>Intelligent Automation Pipeline</h3>
            <p style={{ color: "#58798C", fontSize: "1.1rem", maxWidth: "600px", margin: "16px auto 0" }}>How our AI systems process business data and execute automated workflows.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", position: "relative" }}>
            {/* Connecting Line */}
            <div style={{ position: "absolute", top: "40px", left: "12%", right: "12%", height: "3px", background: "linear-gradient(90deg, rgba(19,170,179,0.2) 0%, var(--color-accent) 50%, rgba(19,170,179,0.2) 100%)", zIndex: 1 }}></div>

            {[
              { step: "01", title: "Data Ingestion", desc: "Aggregating structured and unstructured data from ERPs, forms, and APIs.", icon: "fa-database" },
              { step: "02", title: "Cognitive Processing", desc: "Applying NLP and machine learning models to extract context and intent.", icon: "fa-brain" },
              { step: "03", title: "Automated Execution", desc: "Routing decisions, updating ledgers, and triggering external API actions.", icon: "fa-cogs" },
              { step: "04", title: "Operational Insight", desc: "Generating real-time reporting and predictive analytics for management.", icon: "fa-chart-pie" }
            ].map((node, idx) => (
              <div key={idx} style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "20px" }}>
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "white", border: "3px solid var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: "1.8rem", color: "var(--color-primary)", boxShadow: "0 10px 25px rgba(19,170,179,0.2)", position: "relative", transition: "all 0.3s" }}>
                  <i className={"fas " + node.icon}></i>
                  <div style={{ position: "absolute", top: "-10px", right: "-10px", background: "var(--color-primary)", color: "white", width: "28px", height: "28px", borderRadius: "50%", fontSize: "0.75rem", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center" }}>{node.step}</div>
                </div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>{node.title}</h4>
                <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6" }}>{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
`,
  'src/pages/SolutionsEnterpriseInfrastructure.jsx': `
        {/* INTERACTIVE CLOUD TOPOLOGY UI */}
        <div style={{ marginBottom: "80px", background: "white", padding: "60px", borderRadius: "24px", border: "1.5px solid #E2EBE7", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
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
`,
  'src/pages/SolutionsBusinessSystems.jsx': `
        {/* INTERACTIVE SOFTWARE STACK UI */}
        <div style={{ marginBottom: "80px", background: "white", padding: "60px", borderRadius: "24px", border: "1.5px solid #E2EBE7", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ fontSize: "0.85rem", color: "#2980B9", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>Architecture</span>
            <h3 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)" }}>Modular Software Systems</h3>
            <p style={{ color: "#58798C", fontSize: "1.1rem", maxWidth: "600px", margin: "16px auto 0" }}>Custom-engineered business software prioritizing maintainability and scale.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "700px", margin: "0 auto" }}>
            {[
              { level: "Presentation Layer", tech: "React / Vue / Mobile Interfaces", color: "#2980B9" },
              { level: "API Gateway & Logic", tech: "Node.js / Python / Microservices", color: "var(--color-accent)" },
              { level: "Data & State Management", tech: "PostgreSQL / Redis / MongoDB", color: "#27AE60" }
            ].map((node, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", padding: "24px 30px", background: "#F4F9FB", borderRadius: "16px", borderLeft: "6px solid " + node.color }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "6px" }}>{node.level}</h4>
                  <p style={{ color: "#58798C", margin: 0, fontSize: "0.95rem" }}>{node.tech}</p>
                </div>
                <i className="fas fa-layer-group" style={{ fontSize: "1.5rem", color: node.color, opacity: 0.8 }}></i>
              </div>
            ))}
          </div>
        </div>
`,
  'src/pages/SolutionsOperationalIntelligence.jsx': `
        {/* INTERACTIVE ANALYTICS UI */}
        <div style={{ marginBottom: "80px", background: "white", padding: "60px", borderRadius: "24px", border: "1.5px solid #E2EBE7", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ fontSize: "0.85rem", color: "#E67E22", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>Insights</span>
            <h3 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)" }}>Real-Time Operational Telemetry</h3>
            <p style={{ color: "#58798C", fontSize: "1.1rem", maxWidth: "600px", margin: "16px auto 0" }}>Turning raw data streams into actionable management dashboards.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ background: "#F4F9FB", padding: "32px", borderRadius: "20px", border: "1px solid #E2EBE7" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--color-primary)" }}>Resource Utilization</h4>
                <span style={{ color: "#27AE60", fontWeight: "bold", fontSize: "0.9rem" }}>+14.2%</span>
              </div>
              {/* Fake Graph */}
              <div style={{ height: "120px", display: "flex", alignItems: "flex-end", gap: "10px" }}>
                {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: h + "%", background: i === 6 ? "var(--color-accent)" : "#CBE7E9", borderRadius: "4px 4px 0 0", transition: "height 0.5s ease" }}></div>
                ))}
              </div>
            </div>

            <div style={{ background: "#F4F9FB", padding: "32px", borderRadius: "20px", border: "1px solid #E2EBE7" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--color-primary)" }}>Anomaly Detections</h4>
                <span style={{ color: "#E67E22", fontWeight: "bold", fontSize: "0.9rem" }}>Active Monitoring</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: "12px", borderBottom: "1px solid #E2EBE7", fontSize: "0.95rem" }}>
                  <span style={{ color: "#395568" }}><i className="fas fa-exclamation-circle" style={{ color: "#E67E22", marginRight: "8px" }}></i> Supply Chain Delay</span>
                  <span style={{ color: "var(--color-primary)", fontWeight: "600" }}>Detected</span>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: "12px", borderBottom: "1px solid #E2EBE7", fontSize: "0.95rem" }}>
                  <span style={{ color: "#395568" }}><i className="fas fa-check-circle" style={{ color: "#27AE60", marginRight: "8px" }}></i> Database Sync</span>
                  <span style={{ color: "var(--color-primary)", fontWeight: "600" }}>Stable</span>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", fontSize: "0.95rem" }}>
                  <span style={{ color: "#395568" }}><i className="fas fa-check-circle" style={{ color: "#27AE60", marginRight: "8px" }}></i> API Response</span>
                  <span style={{ color: "var(--color-primary)", fontWeight: "600" }}>32ms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
`
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Strip existing tasks array & activeTask state if it exists
  const tasksRegex = /const tasks = \[\s*\{[\s\S]*?\}\s*\];\s*const \[activeTask, setActiveTask\] = useState\(tasks\[0\]\);/;
  content = content.replace(tasksRegex, '');

  // Strip existing Interactive Console block if it exists
  const simulatorRegex = /\{\/\* INTERACTIVE AGENT PLAYGROUND CONSOLE \*\/\}[\s\S]*?<div style=\{\{ marginBottom: "60px" \}\}>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;
  content = content.replace(simulatorRegex, '');

  // Strip existing new UI if it's already there (to avoid duplicates if run multiple times)
  const existingUIRegex = /\{\/\* INTERACTIVE .*? UI \*\/\}[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\n/;
  content = content.replace(existingUIRegex, '');

  // Find the end of the section overview
  const overviewRegex = /(<h4 style=\{\{ marginBottom: "16px"[^>]*>.*?Key Insight<\/h4>\s*<p[^>]*>[\s\S]*?<\/p>\s*<\/div>\s*<\/div>\s*<\/div>)/;
  
  if (overviewRegex.test(content)) {
    content = content.replace(overviewRegex, '$1\n\n' + uis[file]);
  }

  fs.writeFileSync(file, content);
  console.log('Processed', file);
});