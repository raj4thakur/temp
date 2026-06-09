import { Link } from "react-router-dom";
import { useRef } from "react";
import { services } from "../data/services";

export default function ServicesSection() {
  const servicesSliderRef = useRef(null);

  const scrollServices = (direction) => {
    if (servicesSliderRef.current) {
      const scrollAmount = 380;
      servicesSliderRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section style={{ padding: "60px 0", background: "white" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
          <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>High-Performance Architecture</span>
          <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 16px 0" }}>Our Core Services</h2>
          <p style={{ color: "#58798C", fontSize: "1.1rem", margin: 0 }}>High-performance engineering designed to unify your enterprise operations.</p>
        </div>

        <div style={{ position: 'relative', margin: '0 auto', maxWidth: '100%', padding: '0 20px' }}>
          <button 
            className="testimonial-arrow"
            onClick={() => scrollServices('left')}
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
            onClick={() => scrollServices('right')}
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
            ref={servicesSliderRef}
            className="hide-scrollbar"
            style={{ 
              display: 'flex', gap: '30px', overflowX: 'auto', scrollSnapType: 'x mandatory',
              paddingBottom: '20px', scrollbarWidth: 'none', msOverflowStyle: 'none'
            }}
          >
          {services.map((serv, idx) => (
            <div key={idx} className="service-hex-card" style={{ flex: '0 0 auto', width: '350px', scrollSnapAlign: 'start' }}>
              <div className="service-hex-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 16px 0", fontSize: '1.6rem', color: 'var(--color-primary)', fontWeight: '800', lineHeight: '1.3' }}>{serv.title}</h3>
                  <p style={{ color: "#58798C", margin: 0, fontSize: '1.05rem', lineHeight: '1.75' }}>{serv.description}</p>
                </div>
                <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', color: 'var(--color-accent)', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Explore <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                </div>
              </div>
              
              <Link to={serv.path} className="service-hex-overlay" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80)` }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3>{serv.title}</h3>
                  <p>{serv.description}</p>
                  <span className="service-hex-link">Learn More <i className="fas fa-arrow-right"></i></span>
                </div>
              </Link>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
