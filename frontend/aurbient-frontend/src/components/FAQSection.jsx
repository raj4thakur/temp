import { useState } from "react";
import { faq } from "../data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: "60px 0", background: "white" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
          <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Common Questions</span>
          <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: 0 }}>Consulting & Approach</h2>
          <p style={{ color: "#395568", marginTop: "16px", fontSize: "1.1rem" }}>Understanding how we align technology with business operations.</p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faq.map((item, index) => (
            <div key={index} style={{ marginBottom: "16px", border: "1px solid #E2EBE7", borderRadius: "12px", overflow: "hidden" }}>
              <button 
                onClick={() => toggleAccordion(index)}
                style={{ 
                  width: "100%", padding: "24px", background: "#F4F9FB", border: "none", 
                  display: "flex", justifyContent: "space-between", alignItems: "center", 
                  cursor: "pointer", textAlign: "left", color: "var(--color-primary)", 
                  fontSize: "1.1rem", fontWeight: "600", transition: "background 0.3s ease" 
                }}
              >
                {item.question}
                <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`} style={{ color: "var(--color-accent)", transition: "transform 0.3s ease" }}></i>
              </button>
              
              <div style={{ 
                maxHeight: openIndex === index ? "500px" : "0", 
                overflow: "hidden", transition: "max-height 0.3s ease", background: "white" 
              }}>
                <div style={{ padding: "24px", color: "#58798C", lineHeight: "1.7" }}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
