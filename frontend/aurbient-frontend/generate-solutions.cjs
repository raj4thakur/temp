const fs = require('fs');

const data = [
  { 
    name: 'SolutionsAIAutomation', 
    title: 'AI Integration & Workflows', 
    subtitle: 'Cognitive Processing & Task Automation',
    badge: 'Solutions Ecosystem 01',
    hero: '/images/solution_ai_automation.png',
    insight: '"Artificial Intelligence should augment operational velocity by embedding predictive logic directly into existing enterprise workflows."',
    overview: 'Modern enterprises must automate cognitive bottlenecks to maintain competitive scaling. Aurbient Technologies integrates AI layers that handle data ingestion, semantic routing, and automated decision-making frameworks across your business architecture.',
    deliverables: ['Predictive Analytics', 'Natural Language Processing', 'Automated Decision Systems', 'Contextual Data Routing', 'Intelligent Workflows'],
    outcomes: ['300% faster data processing', 'Zero manual routing errors', 'Predictive issue resolution', 'Seamless system integration', 'Augmented human workflows'],
    focuses: [
      { title: "Predictive Analytics", desc: "Embed forecasting models directly into operational loops to anticipate bottlenecks.", icon: "fa-chart-pie", color: "#13AAB3" },
      { title: "NLP Automation", desc: "Extract context from unstructured data streams, emails, and physical documents.", icon: "fa-language", color: "#3498db" },
      { title: "Decision Engines", desc: "Automate complex approval workflows using conditional AI logic trees.", icon: "fa-brain", color: "#e67e22" },
      { title: "Intelligent Routing", desc: "Dynamically route tasks and tickets based on predictive priority and urgency.", icon: "fa-route", color: "#2ecc71" }
    ],
    stats: [
      { label: "Data Processing Speed", value: "300%" },
      { label: "Manual Errors", value: "0%" },
      { label: "Workflow Efficiency", value: "+45%" }
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI GPT-4", "Python", "Kubernetes", "Redis"],
    timeline: [
      { phase: "01", title: "Data Audit", desc: "Evaluating your existing data structures and bottlenecks." },
      { phase: "02", title: "Model Training", desc: "Training specialized ML models on your proprietary data." },
      { phase: "03", title: "Deployment", desc: "Live integration into your existing operational workflows." }
    ]
  },
  { 
    name: 'SolutionsOperationalIntelligence', 
    title: 'Operational Intelligence', 
    subtitle: 'Real-time Visibility & Analytics',
    badge: 'Solutions Ecosystem 02',
    hero: '/images/solution_operational_intel.png',
    insight: '"Visibility is the precursor to agility. You cannot optimize a supply chain or process network without real-time observability."',
    overview: 'A disconnected business creates latency. We build centralized operational intelligence platforms that aggregate telemetry, financials, and logistics data into a unified, actionable command center.',
    deliverables: ['Real-time Dashboards', 'Data Aggregation Pipelines', 'Anomaly Detection', 'Executive Reporting', 'Unified Data Lakes'],
    outcomes: ['Complete ecosystem visibility', 'Instant anomaly alerts', 'Automated KPI tracking', 'Data-driven decision making', 'Unified executive reporting'],
    focuses: [
      { title: "Real-time Dashboards", desc: "Live visualizations of system health, production metrics, and financial flow.", icon: "fa-tachometer-alt", color: "#13AAB3" },
      { title: "Data Aggregation", desc: "Pull data from ERP, CRM, and bespoke systems into unified lakes.", icon: "fa-database", color: "#3498db" },
      { title: "Anomaly Detection", desc: "Identify operational deviations before they escalate into systemic failures.", icon: "fa-exclamation-triangle", color: "#e67e22" },
      { title: "Executive Reporting", desc: "Generate automated, high-level summaries for immediate stakeholder review.", icon: "fa-file-invoice-dollar", color: "#2ecc71" }
    ],
    stats: [
      { label: "Real-time Visibility", value: "100%" },
      { label: "Incident Response", value: "-60%" },
      { label: "Executive Reporting", value: "Automated" }
    ],
    technologies: ["Apache Kafka", "Elasticsearch", "Grafana", "Snowflake", "AWS Redshift", "Tableau"],
    timeline: [
      { phase: "01", title: "Ingestion", desc: "Connecting all siloed data sources into a central lake." },
      { phase: "02", title: "Processing", desc: "Normalizing data and setting up real-time telemetry." },
      { phase: "03", title: "Visualization", desc: "Deploying command center dashboards for stakeholders." }
    ]
  },
  { 
    name: 'SolutionsBusinessSystems', 
    title: 'Business Systems & ERP', 
    subtitle: 'Unified Enterprise Management',
    badge: 'Solutions Ecosystem 03',
    hero: '/images/solution_business_systems.png',
    insight: '"A fragmented ERP environment creates siloed departments. True management requires a synchronized digital nervous system."',
    overview: 'We consolidate fragmented operations into a single, highly coordinated enterprise ecosystem, enabling seamless resource planning, financial tracking, and departmental orchestration.',
    deliverables: ['Resource Planning Modules', 'Financial Coordination', 'Departmental Workflows', 'Asset Management', 'Custom ERP Engineering'],
    outcomes: ['Synchronized departmental data', 'Automated financial closing', 'End-to-end asset tracking', 'Standardized enterprise procedures', 'Reduction in software bloat'],
    focuses: [
      { title: "Resource Planning", desc: "Allocate capital and human resources dynamically based on active load.", icon: "fa-users-cog", color: "#13AAB3" },
      { title: "Financial Coordination", desc: "Automate ledger entries, tax compliance, and multi-currency reconciliation.", icon: "fa-coins", color: "#3498db" },
      { title: "Departmental Workflows", desc: "Ensure Sales, HR, and Operations communicate through a unified protocol.", icon: "fa-project-diagram", color: "#e67e22" },
      { title: "Asset Management", desc: "Track digital and physical assets across their entire lifecycle.", icon: "fa-boxes", color: "#2ecc71" }
    ],
    stats: [
      { label: "Software Bloat", value: "-40%" },
      { label: "Department Sync", value: "Instant" },
      { label: "Financial Closing", value: "2x Faster" }
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "GraphQL", "Docker", "Stripe Connect"],
    timeline: [
      { phase: "01", title: "Architecture", desc: "Mapping legacy ERP dependencies and workflows." },
      { phase: "02", title: "Consolidation", desc: "Merging fragmented tools into a unified platform." },
      { phase: "03", title: "Migration", desc: "Seamlessly transferring state without downtime." }
    ]
  },
  { 
    name: 'SolutionsEnterpriseInfrastructure', 
    title: 'Enterprise Infrastructure', 
    subtitle: 'Scalable & Resilient Architecture',
    badge: 'Solutions Ecosystem 04',
    hero: '/images/solution_enterprise_infra.png',
    insight: '"Enterprise software is only as robust as the infrastructure it runs on. Scalability must be built into the foundation, not bolted on."',
    overview: 'We deploy high-availability cloud foundations designed for zero downtime and infinite scale. Our infrastructure engineering ensures your platforms remain performant, secure, and resilient under any load.',
    deliverables: ['Cloud Native Architecture', 'High Availability Clusters', 'Security & Compliance', 'Edge Computing Setup', 'Disaster Recovery Systems'],
    outcomes: ['Zero unplanned downtime', 'Elastic scaling during peaks', 'Military-grade security posture', 'Automated disaster recovery', 'Reduced latency globally'],
    focuses: [
      { title: "Cloud Architecture", desc: "Deploy containerized microservices across scalable cloud environments.", icon: "fa-cloud", color: "#13AAB3" },
      { title: "High Availability", desc: "Multi-region redundancies ensure systems stay online during regional outages.", icon: "fa-server", color: "#3498db" },
      { title: "Security & Compliance", desc: "Bake Zero-Trust security and ISO compliance directly into the network layer.", icon: "fa-shield-alt", color: "#e67e22" },
      { title: "Disaster Recovery", desc: "Automated failovers and continuous backups protect critical enterprise data.", icon: "fa-life-ring", color: "#2ecc71" }
    ],
    stats: [
      { label: "Uptime Guarantee", value: "99.99%" },
      { label: "Global Latency", value: "&lt;50ms" },
      { label: "Security Compliance", value: "ISO 27001" }
    ],
    technologies: ["AWS", "Azure", "Terraform", "Kubernetes", "Cloudflare", "Datadog"],
    timeline: [
      { phase: "01", title: "Assessment", desc: "Stress-testing current infrastructure capabilities." },
      { phase: "02", title: "Provisioning", desc: "Deploying Infrastructure as Code (IaC) networks." },
      { phase: "03", title: "Cutover", desc: "Routing traffic to the new high-availability clusters." }
    ]
  },
  { 
    name: 'SolutionsProcessOptimization', 
    title: 'Process Optimization', 
    subtitle: 'Streamlined Operational Execution',
    badge: 'Solutions Ecosystem 05',
    hero: '/images/solution_process_opt.png',
    insight: '"Inefficiency scales just as fast as efficiency. Optimizing a core process yields compounding returns across the entire enterprise."',
    overview: 'We re-engineer legacy processes to drastically reduce waste, eliminate redundancies, and accelerate throughput across your operational environment.',
    deliverables: ['Lean Process Mapping', 'Bottleneck Resolution', 'Continuous Improvement loops', 'Six Sigma Alignment', 'Execution Automation'],
    outcomes: ['Dramatically faster throughput', 'Elimination of redundant tasks', 'Lower operational overhead', 'Standardized execution quality', 'Compounding efficiency gains'],
    focuses: [
      { title: "Lean Process Mapping", desc: "Identify and document every step of a workflow to highlight inefficiencies.", icon: "fa-map", color: "#13AAB3" },
      { title: "Bottleneck Resolution", desc: "Re-engineer specific constraints that slow down the entire system.", icon: "fa-filter", color: "#3498db" },
      { title: "Execution Automation", desc: "Replace manual steps with automated script triggers.", icon: "fa-robot", color: "#e67e22" },
      { title: "Continuous Improvement", desc: "Establish feedback loops that constantly tweak and optimize processes over time.", icon: "fa-sync-alt", color: "#2ecc71" }
    ],
    stats: [
      { label: "Process Velocity", value: "3x" },
      { label: "Operational Waste", value: "-75%" },
      { label: "Execution Quality", value: "Standardized" }
    ],
    technologies: ["BPMN 2.0", "Six Sigma", "UiPath", "Celonis", "Jira", "Confluence"],
    timeline: [
      { phase: "01", title: "Mapping", desc: "Visualizing the current state of operational workflows." },
      { phase: "02", title: "Engineering", desc: "Redesigning logic flows to remove bottlenecks." },
      { phase: "03", title: "Automation", desc: "Applying RPA and scripts to execute the new process." }
    ]
  },
  { 
    name: 'SolutionsSystemIntegration', 
    title: 'System Integration', 
    subtitle: 'Connected Software Ecosystems',
    badge: 'Solutions Ecosystem 06',
    hero: '/images/solution_system_integration.png',
    insight: '"Siloed software leads to siloed decision making. The modern enterprise must function as a single, connected ecosystem."',
    overview: 'We bridge disparate software tools, legacy systems, and modern SaaS applications into a singular, synchronized operational layer.',
    deliverables: ['API Architecture', 'Legacy System Bridging', 'Data Synchronization', 'Middleware Deployment', 'Event-Driven Architecture'],
    outcomes: ['Seamless cross-platform data flow', 'Elimination of double data entry', 'Modernized legacy systems', 'Real-time state synchronization', 'Centralized authentication'],
    focuses: [
      { title: "API Architecture", desc: "Build robust, secure APIs that allow isolated systems to communicate seamlessly.", icon: "fa-network-wired", color: "#13AAB3" },
      { title: "Legacy Bridging", desc: "Connect modern web applications to critical, on-premise legacy mainframes.", icon: "fa-bridge", color: "#3498db" },
      { title: "Data Synchronization", desc: "Ensure state changes in one system instantly reflect across all others.", icon: "fa-sync", color: "#e67e22" },
      { title: "Middleware Deployment", desc: "Implement message brokers and enterprise service buses for reliable transport.", icon: "fa-layer-group", color: "#2ecc71" }
    ],
    stats: [
      { label: "Data Silos", value: "Eliminated" },
      { label: "API Uptime", value: "99.9%" },
      { label: "System Sync", value: "Real-time" }
    ],
    technologies: ["GraphQL", "REST APIs", "RabbitMQ", "Apache Camel", "MuleSoft", "OAuth 2.0"],
    timeline: [
      { phase: "01", title: "API Mapping", desc: "Auditing existing endpoints and data structures." },
      { phase: "02", title: "Middleware", desc: "Deploying enterprise service buses for transport." },
      { phase: "03", title: "Synchronization", desc: "Enabling real-time bidirectional data flow." }
    ]
  }
];

data.forEach(p => {
  const deliverablesJSX = p.deliverables.map((item, i) => 
    '<li key={' + i + '} style={{ display: "flex", gap: "16px", color: "#395568", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}><span style={{ color: "var(--color-accent)", fontSize: "1.2rem" }}><i className="fas fa-check-circle"></i></span>' + item + '</li>'
  ).join('\\n              ');

  const outcomesJSX = p.outcomes.map((item, i) => 
    '<li key={' + i + '} style={{ display: "flex", gap: "16px", color: "#1a2a35", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}><span style={{ color: "#2980B9", fontSize: "1.2rem" }}><i className="fas fa-arrow-alt-circle-up"></i></span>' + item + '</li>'
  ).join('\\n              ');

  const focusesJSX = p.focuses.map((focus, i) => {
    let colorVar = "19,170,179";
    if (focus.color === "#3498db") colorVar = "52,152,219";
    if (focus.color === "#e67e22") colorVar = "230,126,34";
    if (focus.color === "#2ecc71") colorVar = "46,204,113";
    
    return '<div key={' + i + '} className="eco-card hover-lift" style={{ background: "white", padding: "36px", borderRadius: "16px", border: "1.5px solid #E2EBE7", display: "flex", flexDirection: "column", height: "100%" }}>\\n' +
           '  <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(' + colorVar + ', 0.1)", color: "' + focus.color + '", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: "24px" }}>\\n' +
           '    <i className="fas ' + focus.icon + '"></i>\\n' +
           '  </div>\\n' +
           '  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>' + focus.title + '</h4>\\n' +
           '  <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>' + focus.desc + '</p>\\n' +
           '</div>';
  }).join('\\n            ');

  const techJSX = p.technologies.map((tech, i) => 
    '<span key={' + i + '} style={{ display: "inline-block", padding: "8px 20px", background: "white", color: "var(--color-primary)", fontWeight: "600", borderRadius: "50px", fontSize: "0.95rem", border: "1px solid #E2EBE7", boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>' + tech + '</span>'
  ).join('\\n              ');

  const statsJSX = p.stats.map((stat, i) => 
    '<div key={' + i + '} style={{ textAlign: "center", padding: "0 20px" }}>\\n' +
    '  <div style={{ fontSize: "3.5rem", fontWeight: "800", color: "var(--color-accent)", lineHeight: "1", marginBottom: "8px" }}>' + stat.value + '</div>\\n' +
    '  <div style={{ fontSize: "1.05rem", color: "#58798C", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px" }}>' + stat.label + '</div>\\n' +
    '</div>'
  ).join('\\n            ');

  const timelineJSX = p.timeline.map((step, i) => 
    '<div key={' + i + '} className="hover-lift" style={{ flex: 1, minWidth: "250px", background: "white", padding: "30px", borderRadius: "16px", border: "1px solid #E2EBE7", position: "relative", zIndex: 2 }}>\\n' +
    '  <div style={{ position: "absolute", top: "-15px", left: "30px", background: "var(--color-primary)", color: "var(--color-accent)", padding: "4px 12px", borderRadius: "20px", fontWeight: "800", fontSize: "0.85rem", letterSpacing: "1px" }}>PHASE ' + step.phase + '</div>\\n' +
    '  <h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "10px", marginTop: "10px" }}>' + step.title + '</h4>\\n' +
    '  <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>' + step.desc + '</p>\\n' +
    '</div>'
  ).join('\\n            <div style={{ width: "30px", height: "2px", background: "#E2EBE7", flexShrink: 0, display: "none" }} className="timeline-connector"></div>\\n            ');

  const content = 'import { Link } from "react-router-dom";\\n\\n' +
    'export default function ' + p.name + '() {\\n' +
    '  return (\\n' +
    '    <main style={{ background: "#F4F9FB", minHeight: "100vh" }}>\\n' +
    '      <section className="hero case-study-hero" style={{ position: "relative", padding: "180px 0 160px", backgroundImage: "url(' + p.hero + ')", backgroundSize: "cover", backgroundPosition: "center" }}>\\n' +
    '        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14, 25, 33, 0.95) 0%, rgba(14, 25, 33, 0.7) 60%, rgba(14, 25, 33, 0.4) 100%)", zIndex: 1 }}></div>\\n' +
    '        <div className="container" style={{ position: "relative", zIndex: 2, color: "white" }}>\\n' +
    '          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255, 255, 255, 0.75)", textDecoration: "none", fontSize: "1rem", fontWeight: "500", marginBottom: "24px", transition: "all 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#FFFFFF"} onMouseOut={e => e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)"}>\\n' +
    '            <i className="fas fa-arrow-left"></i> Back to Home\\n' +
    '          </Link>\\n' +
    '          <span style={{ fontSize: "1rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>' + p.badge + '</span>\\n' +
    '          <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", marginBottom: "30px", maxWidth: "900px", lineHeight: "1.1", textShadow: "0 4px 20px rgba(0,0,0,0.4)", fontWeight: "700" }}>' + p.title + '</h1>\\n' +
    '          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19, 170, 179, 0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1.1rem", fontWeight: "600", border: "1px solid rgba(19, 170, 179, 0.4)" }}>' + p.subtitle + '</div>\\n' +
    '        </div>\\n' +
    '      </section>\\n\\n' +
    '      <div className="container" style={{ position: "relative", zIndex: 10, marginTop: "-80px", paddingBottom: "80px" }}>\\n' +
    '        <div className="eco-card hover-lift" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.05)", marginBottom: "50px" }}>\\n' +
    '          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "60px", alignItems: "center" }}>\\n' +
    '            <div>\\n' +
    '              <h3 style={{ fontSize: "2.2rem", marginBottom: "24px", color: "var(--color-primary)", fontWeight: "700" }}>Strategic Overview</h3>\\n' +
    '              <p style={{ color: "#395568", marginBottom: "20px", lineHeight: "1.9", fontSize: "1.15rem" }}>' + p.overview + '</p>\\n' +
    '              <div style={{ marginTop: "30px" }}>\\n' +
    '                <div style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px", color: "#6A7B87", fontWeight: "700", marginBottom: "16px" }}>Core Technologies</div>\\n' +
    '                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>\\n' +
    '                  ' + techJSX + '\\n' +
    '                </div>\\n' +
    '              </div>\\n' +
    '            </div>\\n' +
    '            <div className="hover-lift" style={{ padding: "40px", background: "linear-gradient(135deg, var(--color-primary) 0%, #0a141b 100%)", color: "white", borderRadius: "20px", boxShadow: "0 20px 40px rgba(26, 42, 53, 0.25)", position: "relative", overflow: "hidden" }}>\\n' +
    '              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right"></i></div>\\n' +
    '              <h4 style={{ marginBottom: "20px", color: "var(--color-accent)", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "12px", textTransform: "uppercase", letterSpacing: "1px" }}><i className="fas fa-lightbulb"></i> Key Insight</h4>\\n' +
    '              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.25rem", margin: 0, position: "relative", zIndex: 2 }}>' + p.insight + '</p>\\n' +
    '            </div>\\n' +
    '          </div>\\n' +
    '        </div>\\n\\n' +
    '        <div className="eco-card hover-lift" style={{ background: "white", padding: "60px 40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", marginBottom: "60px", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "40px" }}>\\n' +
    '          ' + statsJSX + '\\n' +
    '        </div>\\n\\n' +
    '        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "60px" }}>\\n' +
    '          <div className="eco-card hover-lift" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", borderTop: "4px solid var(--color-accent)" }}>\\n' +
    '            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>\\n' +
    '              <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(19, 170, 179, 0.1)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}><i className="fas fa-cubes"></i></div>\\n' +
    '              <h4 style={{ fontSize: "1.6rem", color: "var(--color-primary)", margin: 0, fontWeight: "600" }}>What We Deliver</h4>\\n' +
    '            </div>\\n' +
    '            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>\\n' +
    '              ' + deliverablesJSX + '\\n' +
    '            </ul>\\n' +
    '          </div>\\n' +
    '          <div className="eco-card hover-lift" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", borderTop: "4px solid #2980B9" }}>\\n' +
    '            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>\\n' +
    '              <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(41, 128, 185, 0.1)", color: "#2980B9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}><i className="fas fa-chart-line"></i></div>\\n' +
    '              <h4 style={{ fontSize: "1.6rem", color: "var(--color-primary)", margin: 0, fontWeight: "600" }}>Business Outcomes</h4>\\n' +
    '            </div>\\n' +
    '            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>\\n' +
    '              ' + outcomesJSX + '\\n' +
    '            </ul>\\n' +
    '          </div>\\n' +
    '        </div>\\n\\n' +
    '        <div style={{ marginBottom: "80px" }}>\\n' +
    '          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>\\n' +
    '            <h3 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Implementation Timeline</h3>\\n' +
    '            <p style={{ color: "#58798C", fontSize: "1.1rem" }}>A structured, predictable deployment methodology ensuring zero operational downtime.</p>\\n' +
    '          </div>\\n' +
    '          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>\\n' +
    '            ' + timelineJSX + '\\n' +
    '          </div>\\n' +
    '        </div>\\n\\n' +
    '        <div style={{ marginBottom: "80px" }}>\\n' +
    '          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>\\n' +
    '            <h3 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Operational Focus Areas</h3>\\n' +
    '            <p style={{ color: "#58798C", fontSize: "1.1rem" }}>Targeted engineering systems designed to coordinate modern enterprise ecosystems.</p>\\n' +
    '          </div>\\n' +
    '          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>\\n' +
    '            ' + focusesJSX + '\\n' +
    '          </div>\\n' +
    '        </div>\\n\\n' +
    '        <section style={{ padding: "80px 0", background: "linear-gradient(135deg, var(--color-primary) 0%, #0a141b 100%)", color: "white", textAlign: "center", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 50px rgba(14,25,33,0.15)" }}>\\n' +
    '          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 40px" }}>\\n' +
    '            <h2 style={{ fontSize: "2.8rem", fontWeight: "700", marginBottom: "24px", color: "white" }}>Ready to Optimize Operations?</h2>\\n' +
    '            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "rgba(255,255,255,0.7)", marginBottom: "40px" }}>Connect with our enterprise engineering division to review your architecture roadmap and begin deployment.</p>\\n' +
    '            <Link to="/contact" className="btn-premium hover-lift" style={{ background: "white", color: "var(--color-primary)", padding: "16px 40px", borderRadius: "50px", fontWeight: "700", display: "inline-block", textDecoration: "none" }}>Discuss Implementation &rarr;</Link>\\n' +
    '          </div>\\n' +
    '        </section>\\n' +
    '      </div>\\n' +
    '    </main>\\n' +
    '  );\\n' +
    '}\\n';

  const finalContent = content.replace(/\\n/g, '\n');
  fs.writeFileSync('src/pages/' + p.name + '.jsx', finalContent);
});
console.log('Successfully rewrote the 6 Solutions pages with Enhanced Analytics and Timeline Layouts.');
