import { Link } from "react-router-dom";
import logoImg from "../../../../staticfiles/images/AurbientT.webp";

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
                <div style={{ maxWidth: "300px" }}>
                    <div className="logo" style={{ color: "white" }}>
                        <img src={logoImg} alt="Aurbient Technologies" style={{ height: '55px', objectFit: 'contain' }} />
                    </div>
                    <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
                        Engineering the invisible intelligence for modern enterprise operations.
                    </p>
                </div>
                <div>
                    <h4 style={{ color: "white", marginBottom: "1rem" }}>Company</h4>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>About Us</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/company/vision-philosophy" style={{ color: "inherit", textDecoration: "none" }}>Vision & Philosophy</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/company/mission-ecosystem" style={{ color: "inherit", textDecoration: "none" }}>Mission & Ecosystem</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/company/engineering-culture" style={{ color: "inherit", textDecoration: "none" }}>Engineering Culture</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/insights" style={{ color: "inherit", textDecoration: "none" }}>Insights</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/case-studies" style={{ color: "inherit", textDecoration: "none" }}>Case Studies</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/company/careers" style={{ color: "inherit", textDecoration: "none" }}>Careers</Link></p>
                </div>
                <div>
                    <h4 style={{ color: "white", marginBottom: "1rem" }}>Industries</h4>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/industries/manufacturing" style={{ color: "inherit", textDecoration: "none" }}>Manufacturing</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/industries/industrial-operations" style={{ color: "inherit", textDecoration: "none" }}>Industrial Operations</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/industries/logistics" style={{ color: "inherit", textDecoration: "none" }}>Logistics & Supply Chain</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/industries/retail-commerce" style={{ color: "inherit", textDecoration: "none" }}>Retail & Commerce</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/industries/enterprise-operations" style={{ color: "inherit", textDecoration: "none" }}>Enterprise Operations</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/industries/smes" style={{ color: "inherit", textDecoration: "none" }}>SME Transformation</Link></p>
                </div>
                <div>
                    <h4 style={{ color: "white", marginBottom: "1rem" }}>Systems</h4>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/systems/automation-ecosystems" style={{ color: "inherit", textDecoration: "none" }}>Automation Ecosystems</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/systems/erp-intelligence" style={{ color: "inherit", textDecoration: "none" }}>ERP Intelligence</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/systems/ai-workflow-systems" style={{ color: "inherit", textDecoration: "none" }}>AI Workflow Systems</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/systems/operational-visibility" style={{ color: "inherit", textDecoration: "none" }}>Operational Visibility</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/systems/cloud-infrastructure" style={{ color: "inherit", textDecoration: "none" }}>Cloud Infrastructure</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/systems/business-operating-layer" style={{ color: "inherit", textDecoration: "none" }}>Business Operating Layer</Link></p>
                </div>
                <div>
                    <h4 style={{ color: "white", marginBottom: "1rem" }}>Solutions</h4>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/solutions/ai-automation" style={{ color: "inherit", textDecoration: "none" }}>AI Automation</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/solutions/operational-intelligence" style={{ color: "inherit", textDecoration: "none" }}>Operational Intelligence</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/solutions/business-systems" style={{ color: "inherit", textDecoration: "none" }}>Business Systems</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/solutions/enterprise-infrastructure" style={{ color: "inherit", textDecoration: "none" }}>Enterprise Infrastructure</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/solutions/process-optimization" style={{ color: "inherit", textDecoration: "none" }}>Process Optimization</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/solutions/system-integration" style={{ color: "inherit", textDecoration: "none" }}>System Integration</Link></p>
                </div>
                <div>
                    <h4 style={{ color: "white", marginBottom: "1rem" }}>Connect</h4>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/contact" style={{ color: "inherit", textDecoration: "none", fontWeight: "600", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "2px" }}>Let's Build</Link></p>
                    <p style={{ marginBottom: "0.5rem", marginTop: "12px" }}><a href="mailto:rajthakur.aurbient@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>rajthakur.aurbient@gmail.com</a></p>
                    <p style={{ marginBottom: "0.5rem" }}><a href="tel:+918629919873" style={{ color: "inherit", textDecoration: "none" }}>+91 8629919873</a></p>
                    <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem", color: "#ccc", marginTop: "1rem", lineHeight: "1.4" }}>
                      Indore, Madhya Pradesh-452001, India
                    </p>
                </div>
            </div>
            <div className="copyright" style={{ textAlign: "center", paddingTop: "40px", marginTop: "32px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                © 2024 Aurbient Technologies — Calm enterprise futurism. Intelligent infrastructure.
            </div>
        </div>
    </footer>
  );
}
