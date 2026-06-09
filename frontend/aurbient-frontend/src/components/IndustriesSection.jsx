import { Link } from "react-router-dom";
import { useRef } from "react";
import { industries } from "../data/industries";

export default function IndustriesSection() {
  const industrySliderRef = useRef(null);

  const scrollIndustries = (direction) => {
    if (industrySliderRef.current) {
      const scrollAmount = 380;
      industrySliderRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section style={{ padding: "60px 0", background: "#F4F9FB", borderTop: "1px solid #E2EBE7" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Cross-Industry Domain Mastery</span>
          <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: 0 }}>Industries as living ecosystems</h2>
          <p style={{ color: "#395568", marginTop: "16px", fontSize: "1.1rem" }}>Connected workflows, operational depth, and intelligence scaled across domains</p>
        </div>

        <div style={{ position: 'relative', margin: '0 auto', maxWidth: '100%', padding: '0 20px' }}>
          <button 
            className="testimonial-arrow"
            onClick={() => scrollIndustries('left')}
            aria-label="Scroll left"
            style={{ 
              position: "absolute", left: "-30px", top: "50%", transform: "translateY(-50%)", 
              width: "50px", height: "50px", borderRadius: "50%", background: "white", 
              border: "1px solid #E2EBE7", color: "var(--color-primary)", fontSize: "1.1rem", 
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", 
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)", zIndex: 10, transition: "all 0.3s ease", outline: "none"
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button 
            className="testimonial-arrow"
            onClick={() => scrollIndustries('right')}
            aria-label="Scroll right"
            style={{ 
              position: "absolute", right: "-30px", top: "50%", transform: "translateY(-50%)", 
              width: "50px", height: "50px", borderRadius: "50%", background: "white", 
              border: "1px solid #E2EBE7", color: "var(--color-primary)", fontSize: "1.1rem", 
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", 
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)", zIndex: 10, transition: "all 0.3s ease", outline: "none"
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <div 
            ref={industrySliderRef}
            className="hide-scrollbar"
            style={{ 
              display: 'flex', gap: '30px', overflowX: 'auto', scrollSnapType: 'x mandatory',
              padding: '20px 20px 80px 20px', margin: '-20px -20px 0 -20px',
              scrollbarWidth: 'none', msOverflowStyle: 'none'
            }}
          >
          {industries.map((ind, i) => (
            <Link key={i} to={ind.path} className="industry-card" style={{ flex: '0 0 auto', width: '350px', scrollSnapAlign: 'start', backgroundImage: `url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80)` }}>
              <div className="industry-card-content">
                <h3>{ind.title}</h3>
                <p>{ind.description}</p>
                <span className="industry-card-link">
                  Explore <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                </span>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
