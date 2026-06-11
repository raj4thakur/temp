import { useState } from "react";
import { faq } from "../data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: "80px 0", background: "white" }}>
      <div className="container">
        {/* Title area matching Lyft Pink header/subtitle style */}
        <div style={{ maxWidth: "800px", margin: "0 auto 40px", textAlign: "left" }}>
          <span style={{ 
            fontSize: "0.75rem", 
            color: "#8CABB8", 
            textTransform: "uppercase", 
            fontWeight: "700", 
            letterSpacing: "1.5px", 
            display: "block", 
            marginBottom: "8px" 
          }}>
            Common Questions
          </span>
          <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)", margin: 0 }}>
            Consulting & Approach
          </h2>
          <p style={{ color: "#58798C", marginTop: "8px", fontSize: "1rem", lineHeight: "1.5" }}>
            Understanding how we align technology with business operations.
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            const isHovered = hoveredIndex === index;
            return (
              <div 
                key={index} 
                style={{ 
                  borderBottom: "1px solid #E2EBE7",
                  borderTop: index === 0 ? "1px solid #E2EBE7" : "none",
                  transition: "all 0.3s ease"
                }}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ 
                    width: "100%", 
                    padding: "20px 0", 
                    background: "none", 
                    border: "none", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    cursor: "pointer", 
                    textAlign: "left", 
                    color: isHovered || isOpen ? "var(--color-accent)" : "var(--color-primary)", 
                    fontSize: "1.1rem", 
                    fontWeight: "600",
                    transition: "color 0.2s ease",
                    fontFamily: "inherit"
                  }}
                >
                  <span style={{ paddingRight: "20px" }}>{item.question}</span>
                  <i 
                    className="fas fa-chevron-down" 
                    style={{ 
                      color: isOpen ? "var(--color-accent)" : "#8CABB8", 
                      transform: isOpen ? "rotate(180deg)" : "rotate(0)", 
                      transition: "transform 0.3s ease, color 0.3s ease",
                      flexShrink: 0
                    }}
                  />
                </button>
                
                <div style={{ 
                  maxHeight: isOpen ? "500px" : "0", 
                  opacity: isOpen ? 1 : 0,
                  overflow: "hidden", 
                  transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease"
                }}>
                  <div style={{ padding: "0 0 20px 0", color: "#58798C", lineHeight: "1.7", fontSize: "0.95rem" }}>
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
