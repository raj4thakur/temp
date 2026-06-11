import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [buildFeedback, setBuildFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const servicesSliderRef = useRef(null);
  const industrySliderRef = useRef(null);

  const scrollServices = (direction) => {
    if (servicesSliderRef.current) {
      const scrollAmount = 380;
      servicesSliderRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollIndustries = (direction) => {
    if (industrySliderRef.current) {
      const scrollAmount = 380;
      industrySliderRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const handleBuildSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !email.includes('@')) {
      setBuildFeedback('❌ Please provide your name and valid email to start the conversation.');
      return;
    }
    setBuildFeedback(`✓ Thank you, ${name}. An ecosystem architect will reach out within 24h. Let's build.`);
    setName('');
    setEmail('');
    setTimeout(() => setBuildFeedback(''), 5000);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { img: "/images/ai_automation_hero.png", title: "Automation Ecosystems" },
    { img: "/images/operational_intel_dashboard.png", title: "Operational Visibility" },
    { img: "/images/enterprise_infra_network.png", title: "Cloud Infrastructure" },
    { img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80", title: "AI Workflow Systems" }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(null);
  const [hoveredFAQ, setHoveredFAQ] = useState(null);
  const faqs = [
    {
      question: "How do you approach a new project?",
      answer: "We begin by understanding your business operations, workflows, and existing systems before recommending technology. Our goal is to identify operational bottlenecks, visibility gaps, and inefficiencies, then design solutions that create measurable business impact."
    },
    {
      question: "Do you only build software, or do you provide consulting as well?",
      answer: "We combine consulting, architecture, and implementation. Every engagement starts with understanding business objectives and operational challenges, ensuring that technology decisions align with long-term organizational goals."
    },
    {
      question: "What types of businesses do you work with?",
      answer: "We primarily support organizations in manufacturing, logistics, retail, and enterprise operations that are looking to improve visibility, automate workflows, modernize systems, and scale efficiently."
    },
    {
      question: "How do you determine if a business needs ERP, automation, or AI?",
      answer: "We assess existing processes, reporting structures, and operational challenges. In many cases, organizations need stronger operational foundations before introducing advanced automation or AI capabilities."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes. We design solutions that integrate with existing business applications, databases, ERP systems, and operational workflows wherever possible to minimize disruption and maximize adoption."
    },
    {
      question: "What makes Aurbient different from a traditional software vendor?",
      answer: "We focus on business operations first and technology second. Our approach combines systems thinking, operational understanding, and engineering expertise to create solutions that improve decision-making, efficiency, and scalability."
    },
    {
      question: "What outcomes can organizations expect?",
      answer: "Depending on the engagement, outcomes may include improved operational visibility, streamlined workflows, reduced manual effort, better reporting accuracy, stronger cross-department coordination, and more informed decision-making."
    },
    {
      question: "How do we get started?",
      answer: "The process begins with a strategy discussion where we review your current operations, challenges, and objectives. From there, we identify opportunities and propose a practical roadmap tailored to your business."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main style={{ background: "#F4F9FB" }}>
      {/* 1. Cinematic Hero Section */}
      <section className="hero" style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        background: 'linear-gradient(180deg, #FDFEFE 0%, #F4F9FB 100%)', 
        padding: '100px 0 80px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Subtle Ambient Background Gradients */}
        <div style={{ position: 'absolute', top: '-10%', left: '30%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(19, 170, 179,0.06) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(19, 170, 179,0.04) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }}></div>

        <div className="container hero-flex" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center' }}>
          <div className="hero-text">
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px', 
              background: 'rgba(19, 170, 179,0.08)', 
              color: 'var(--color-accent)', 
              borderRadius: '100px', 
              fontSize: '0.85rem', 
              fontWeight: '700', 
              letterSpacing: '1.5px', 
              textTransform: 'uppercase', 
              marginBottom: '28px',
              border: '1.5px solid rgba(19, 170, 179,0.15)'
            }}>
              <i className="fas fa-microchip" style={{ fontSize: '0.9rem' }}></i> Engineering & Technology Partner
            </span>
            
            <h1 style={{ 
              fontSize: 'clamp(2.8rem, 4.5vw, 4.2rem)', 
              lineHeight: '1.15', 
              fontWeight: '800', 
              color: 'var(--color-primary)', 
              marginBottom: '24px',
              letterSpacing: '-0.03em'
            }}>
              Architecting the <span style={{ color: 'var(--color-accent)' }}>Intelligent Enterprise</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#4B6B7F', 
              marginBottom: '40px', 
              maxWidth: '90%', 
              lineHeight: '1.75' 
            }}>
              We engineer mission-critical software, unified digital infrastructure, and AI-driven automation workflows that scale your business operations and eliminate friction.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <Link to="/contact" className="btn-premium" style={{
                  position: 'relative',
                  zIndex: 1,
                  background: "#26B7D6",
                  color: 'white',
                  padding: "18px 48px",
                  fontSize: '1.1rem',
                  borderRadius: '100px',
                  boxShadow: '0 8px 24px rgba(14, 25, 33, 0.15)',
                  transition: 'all 0.3s ease',
                  fontWeight: '700',
                  letterSpacing: '0.01em',
                  display: 'inline-block'
                }}>
                  Schedule a Strategic Consultation
                </Link>
              </div>
            </div>

          </div>

          {/* Interactive Slide Viewer */}
          <div className="hero-visual" style={{ 
            position: 'relative', 
            height: '520px', 
            width: '100%', 
            borderRadius: '32px', 
            overflow: 'hidden', 
            boxShadow: '0 30px 60px rgba(14,25,33,0.15)',
            border: '8px solid white'
          }}>
            {slides.map((slide, index) => (
              <div key={index} style={{ 
                position: 'absolute', 
                inset: 0, 
                opacity: currentSlide === index ? 1 : 0, 
                transition: 'opacity 1s ease-in-out', 
                zIndex: 1 
              }}>
                <img src={slide.img} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  background: 'linear-gradient(to top, rgba(14,25,33,0.9), transparent)', 
                  padding: '50px 32px 32px', 
                  color: 'white', 
                  zIndex: 2 
                }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', display: 'block', marginBottom: '8px' }}>Flagship Capability</span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', margin: 0 }}>{slide.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Deep Midnight Blue Stat Break (Philosophy Section) */}
      <section style={{ 
        padding: "60px 0", 
        background: "linear-gradient(135deg, var(--color-primary) 0%, #0C171F 100%)", 
        color: "white",
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(19, 170, 179,0.1) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", display: "block" }}>The Friction Gap</span>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "700", margin: "0 0 20px 0", lineHeight: "1.25", color: 'white' }}>
              Fragmented workflows, disconnected systems, operational blind spots.
            </h2>
            <p style={{ color: "#A5C5D6", fontSize: "1.15rem", lineHeight: "1.8", margin: 0 }}>
              Modern enterprises are built on fragile connective tissue — data silos, manual handoffs, invisible inefficiencies. The cost is not just time, but strategic inertia.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { stat: "73%", desc: "of leaders report disjointed systems block real-time decisions" },
              { stat: "58%", desc: "operational data never reaches execution layers" },
              { stat: "2.4x", desc: "faster scaling with orchestrated intelligence" }
            ].map((stat, i) => (
              <div key={i} className="eco-card" style={{ 
                background: "rgba(255, 255, 255, 0.03)", 
                border: "1px solid rgba(255, 255, 255, 0.08)", 
                padding: "40px", 
                borderRadius: "24px", 
                textAlign: "center",
                backdropFilter: "blur(10px)"
              }}>
                <h3 style={{ fontSize: "3.5rem", fontWeight: "800", color: "var(--color-accent)", margin: "0 0 12px 0", lineHeight: 1 }}>{stat.stat}</h3>
                <p style={{ color: "#E4F1F3", fontSize: "1.05rem", lineHeight: "1.6", margin: 0, opacity: 0.85 }}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Services Grid */}
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
                position: "absolute", 
                left: "-30px", 
                top: "50%", 
                transform: "translateY(-50%)", 
                width: "50px", 
                height: "50px", 
                borderRadius: "50%", 
                background: "white", 
                border: "1px solid #E2EBE7", 
                color: "var(--color-primary)", 
                fontSize: "1.1rem", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                cursor: "pointer", 
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                zIndex: 10,
                transition: "all 0.3s ease",
                outline: "none"
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <button 
              className="testimonial-arrow"
              onClick={() => scrollServices('right')}
              aria-label="Scroll right"
              style={{ 
                position: "absolute", 
                right: "-30px", 
                top: "50%", 
                transform: "translateY(-50%)", 
                width: "50px", 
                height: "50px", 
                borderRadius: "50%", 
                background: "white", 
                border: "1px solid #E2EBE7", 
                color: "var(--color-primary)", 
                fontSize: "1.1rem", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                cursor: "pointer", 
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                zIndex: 10,
                transition: "all 0.3s ease",
                outline: "none"
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <div 
              ref={servicesSliderRef}
              className="hide-scrollbar"
              style={{ 
                display: 'flex', 
                gap: '30px', 
                overflowX: 'auto', 
                scrollSnapType: 'x mandatory',
                paddingBottom: '20px',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
            {[
              { icon: "fa-brain", title: "AI and Process automation", desc: "Self-healing AI workflows and automation pipelines designed to scale operations and eliminate manual friction.", path: "/solutions/ai-automation", img: "/images/cobot-psychology.jpeg" },
              { icon: "fa-eye", title: "Operational Intelligence Systems", desc: "Centralized telemetry, data dashboards, and real-time monitoring solutions to unblock management visibility.", path: "/solutions/operational-intelligence", img: "/images/operational_intel_dashboard.png" },
              { icon: "fa-laptop-code", title: "ERP & Business Management Platforms", desc: "Mission-critical custom applications and unified management systems engineered for reliability and performance.", path: "/solutions/business-systems", img: "/images/business_systems_mockup.png" },
              { icon: "fa-layer-group", title: "Web & Enterprise Solutions", desc: "Enterprise-grade web and digital systems focused on communication clarity, operational accessibility, and professional business presence.", path: "/solutions/enterprise-infrastructure", img: "/images/enterprise_infra_network.png" }
            ].map((serv, idx) => (
              <Link to={serv.path} key={idx} className="service-hex-card" style={{ flex: '0 0 auto', width: '350px', scrollSnapAlign: 'start', textDecoration: 'none' }}>
                <div className="service-hex-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: "0 0 16px 0", fontSize: '1.6rem', color: 'var(--color-primary)', fontWeight: '800', lineHeight: '1.3' }}>{serv.title}</h3>
                    <p style={{ color: "#58798C", margin: 0, fontSize: '1.05rem', lineHeight: '1.75' }}>{serv.desc}</p>
                  </div>
                  <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', color: 'var(--color-accent)', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Explore <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                  </div>
                </div>
                
                <div className="service-hex-overlay" style={{ backgroundImage: `url(${serv.img})` }}>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3>{serv.title}</h3>
                    <p>{serv.desc}</p>
                    <span className="service-hex-link">Learn More <i className="fas fa-arrow-right"></i></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* 4. Transformation Layer Section */}
      <section style={{ padding: "60px 0", background: "#F4F9FB" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Operational Harmony</span>
              <h2 style={{ fontSize: "2.6rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 24px 0", lineHeight: "1.25" }}>
                From operational friction to intelligent flow
              </h2>
              <p style={{ color: "#395568", lineHeight: "1.8", fontSize: "1.15rem", marginBottom: "30px" }}>
                The transformation isn’t incremental — it’s a re-architecture of how work propagates through your organization. Aurbient designs the invisible layer that aligns systems, data, and teams into a singular intelligent motion.
              </p>
              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ flex: 1, padding: "20px", background: "white", borderRadius: "16px", border: "1px solid #E2EBE7" }}>
                  <h4 style={{ fontWeight: 700, margin: "0 0 8px 0", color: "var(--color-primary)" }}><i className="fas fa-bolt" style={{ color: "var(--color-accent)", marginRight: "8px" }}></i> Speed</h4>
                  <p style={{ margin: 0, color: "#58798C", fontSize: "0.95rem" }}>Removing manual latency and bottleneck dependency.</p>
                </div>
                <div style={{ flex: 1, padding: "20px", background: "white", borderRadius: "16px", border: "1px solid #E2EBE7" }}>
                  <h4 style={{ fontWeight: 700, margin: "0 0 8px 0", color: "var(--color-primary)" }}><i className="fas fa-bullseye" style={{ color: "var(--color-accent)", marginRight: "8px" }}></i> Precision</h4>
                  <p style={{ margin: 0, color: "#58798C", fontSize: "0.95rem" }}>Ensuring every data transmission has total integrity.</p>
                </div>
              </div>
            </div>
            
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "-5%", left: "-5%", width: "110%", height: "110%", background: "radial-gradient(circle, rgba(19, 170, 179,0.15) 0%, transparent 60%)", filter: "blur(30px)", zIndex: 0 }}></div>
              <img 
                src="/images/ai_automation_hero.png" 
                alt="Intelligent Flow Transformation" 
                style={{ width: "100%", height: "450px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 20px 45px rgba(14,25,33,0.12)", position: "relative", zIndex: 1 }} 
              />
            </div>
          </div>
        </div>
      </section>



      {/* 6. Industries as Living Ecosystems */}
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
                position: "absolute", 
                left: "-30px", 
                top: "50%", 
                transform: "translateY(-50%)", 
                width: "50px", 
                height: "50px", 
                borderRadius: "50%", 
                background: "white", 
                border: "1px solid #E2EBE7", 
                color: "var(--color-primary)", 
                fontSize: "1.1rem", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                cursor: "pointer", 
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                zIndex: 10,
                transition: "all 0.3s ease",
                outline: "none"
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <button 
              className="testimonial-arrow"
              onClick={() => scrollIndustries('right')}
              aria-label="Scroll right"
              style={{ 
                position: "absolute", 
                right: "-30px", 
                top: "50%", 
                transform: "translateY(-50%)", 
                width: "50px", 
                height: "50px", 
                borderRadius: "50%", 
                background: "white", 
                border: "1px solid #E2EBE7", 
                color: "var(--color-primary)", 
                fontSize: "1.1rem", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                cursor: "pointer", 
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                zIndex: 10,
                transition: "all 0.3s ease",
                outline: "none"
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <div 
              ref={industrySliderRef}
              className="hide-scrollbar"
              style={{ 
                display: 'flex', 
                gap: '30px', 
                overflowX: 'auto', 
                scrollSnapType: 'x mandatory',
                padding: '20px 20px 80px 20px',
                margin: '-20px -20px 0 -20px',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
            {[
              { path: "/industries/manufacturing", title: "Manufacturing", desc: "Intelligent production flow, IIoT synchronization, autonomous quality layers.", img: "/images/industry_manufacturing.png" },
              { path: "/industries/logistics", title: "Logistics", desc: "Orchestrated supply chains, demand intelligence, real-time fleet adaptation.", img: "/images/industry_logistics.png" },
              { path: "/industries/retail-commerce", title: "Retail", desc: "Inventory ecosystems, unified commerce, predictive customer operations.", img: "/images/industry_retail.png" },
              { path: "/industries/enterprise-operations", title: "Enterprise", desc: "Finance & HR automation, cognitive processes, enterprise operating layer.", img: "/images/industry_enterprise.png" }
            ].map((ind, i) => (
              <Link key={i} to={ind.path} className="industry-card" style={{ flex: '0 0 auto', width: '350px', scrollSnapAlign: 'start', backgroundImage: `url(${ind.img})` }}>
                <div className="industry-card-content">
                  <h3>{ind.title}</h3>
                  <p>{ind.desc}</p>
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

      {/* 7. Featured Case Studies */}
      <section style={{ padding: "60px 0", background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Proven Impact</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "600", color: "var(--color-primary)", margin: 0 }}>Featured Case Studies</h2>
            <p style={{ color: "#395568", marginTop: "16px", fontSize: "1.1rem" }}>Detailed architectural breakdowns of how we transform complex operational bottlenecks into streamlined, intelligent ecosystems.</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px", marginBottom: "48px" }}>
            {[
              {
                id: "01",
                title: "Improving Production Visibility Through Operational Digitization",
                industry: "Manufacturing / Industrial Operations",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
              },
              {
                id: "02",
                title: "Building an AI-Driven Sales & Management Ecosystem",
                industry: "Business Operations / Sales Management",
                img: "/images/business_systems_mockup.png"
              },
              {
                id: "03",
                title: "Modernizing Digital Infrastructure for Enterprise Communication",
                industry: "Enterprise / Digital Infrastructure",
                img: "/images/enterprise_infra_network.png"
              }
            ].map((caseStudy) => (
              <Link 
                key={caseStudy.id} 
                to={`/case-studies/${caseStudy.id}`} 
                style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}
              >
                <div className="eco-card" style={{ 
                  transition: "transform 0.3s ease, box-shadow 0.3s ease", 
                  display: "flex", 
                  flexDirection: "column", 
                  height: "100%", 
                  padding: 0, 
                  overflow: "hidden",
                  borderRadius: "24px",
                  background: "#F4F9FB",
                  border: "1.5px solid #E2EBE7"
                }}>
                  <img 
                    src={caseStudy.img} 
                    alt={caseStudy.title} 
                    style={{ width: "100%", height: "220px", objectFit: "cover" }} 
                  />
                  <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", display: "block", marginBottom: "12px" }}>Case Study {caseStudy.id}</span>
                    <h3 style={{ fontSize: "1.35rem", marginBottom: "16px", flex: 1, color: "var(--color-primary)", fontWeight: 700, lineHeight: 1.3 }}>{caseStudy.title}</h3>
                    <div style={{ color: "#58798C", fontSize: "0.9rem", fontWeight: "600" }}>{caseStudy.industry}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link to="/case-studies" className="btn-premium" style={{ background: "transparent", color: "var(--color-primary)", border: "2px solid rgba(26, 42, 53, 0.15)", padding: "16px 40px", fontSize: "1.1rem", borderRadius: "100px", display: "inline-block", fontWeight: "600", transition: "all 0.3s ease", textDecoration: "none" }}>
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>



      {/* 9. Testimonials (Operational Impact) */}
      <section style={{ padding: "80px 0", background: "white" }}>
        <div className="container">
          <div style={{ maxWidth: "850px", margin: "0 auto 40px", padding: "0 20px", textAlign: "left" }}>
            <span style={{ 
              fontSize: "0.75rem", 
              color: "#8CABB8", 
              textTransform: "uppercase", 
              fontWeight: "700", 
              letterSpacing: "1.5px", 
              display: "block", 
              marginBottom: "8px" 
            }}>
              Common Queries
            </span>
            <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)", margin: 0 }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: "#58798C", marginTop: "8px", fontSize: "1rem", lineHeight: "1.5" }}>
              Everything you need to know about partnering with Aurbient Technologies.
            </p>
          </div>
          
          <div style={{ maxWidth: "850px", margin: "0 auto", padding: "0 20px" }}>
            {faqs.map((item, index) => {
              const isOpen = activeTestimonial === index;
              const isHovered = hoveredFAQ === index;
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
                    onClick={() => setActiveTestimonial(isOpen ? null : index)}
                    onMouseEnter={() => setHoveredFAQ(index)}
                    onMouseLeave={() => setHoveredFAQ(null)}
                    style={{
                      width: "100%",
                      padding: "20px 0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: isHovered || isOpen ? "var(--color-accent)" : "var(--color-primary)",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      textAlign: "left",
                      lineHeight: "1.5",
                      fontFamily: "inherit",
                      transition: "color 0.2s ease"
                    }}
                  >
                    <span style={{ paddingRight: "20px" }}>{item.question}</span>
                    <i 
                      className="fas fa-chevron-down" 
                      style={{ 
                        transform: isOpen ? "rotate(180deg)" : "rotate(0)", 
                        transition: "transform 0.3s ease, color 0.3s ease",
                        color: isOpen ? "var(--color-accent)" : "#8CABB8",
                        marginLeft: "16px",
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

      {/* 10. Tech Integration Slider */}
      <section style={{ padding: "60px 0", background: "#F4F9FB", borderTop: "1px solid #E2EBE7", borderBottom: "1px solid #E2EBE7" }}>
        <div className="container" style={{ textAlign: "center", marginBottom: "30px" }}>
          <span style={{ fontSize: "0.85rem", color: "#58798C", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px" }}>Seamlessly interfacing with your ecosystem</span>
        </div>
        <div className="tech-slider">
          <div className="tech-slide-track">
            {[
              { name: "n8n", url: "https://cdn.simpleicons.org/n8n" },
              { name: "Zapier", url: "https://cdn.simpleicons.org/zapier" },
              { name: "Make", url: "https://cdn.simpleicons.org/make" },
              { name: "Apache Airflow", url: "https://cdn.simpleicons.org/apacheairflow" },
              { name: "Selenium", url: "https://cdn.simpleicons.org/selenium" },
              { name: "UiPath", url: "https://cdn.simpleicons.org/uipath" },
              { name: "Power Automate", url: "https://cdn.simpleicons.org/microsoftpowerautomate" },
              { name: "TensorFlow", url: "https://cdn.simpleicons.org/tensorflow" },
              { name: "PyTorch", url: "https://cdn.simpleicons.org/pytorch" },
              { name: "LangChain", url: "https://cdn.simpleicons.org/langchain" },
              { name: "Hugging Face", url: "https://cdn.simpleicons.org/huggingface" },
              { name: "Ollama", url: "https://cdn.simpleicons.org/ollama" },
              { name: "Gemini", url: "https://cdn.simpleicons.org/googlegemini" },
              { name: "Claude", url: "https://cdn.simpleicons.org/anthropic" },
              { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb" },
              { name: "Redis", url: "https://cdn.simpleicons.org/redis" },
              { name: "Elasticsearch", url: "https://cdn.simpleicons.org/elasticsearch" },
              { name: "Power BI", url: "https://cdn.simpleicons.org/powerbi" },
              { name: "Grafana", url: "https://cdn.simpleicons.org/grafana" },
              { name: "Tableau", url: "https://cdn.simpleicons.org/tableau" },
              // Duplicate for infinite scrolling
              { name: "n8n", url: "https://cdn.simpleicons.org/n8n" },
              { name: "Zapier", url: "https://cdn.simpleicons.org/zapier" },
              { name: "Make", url: "https://cdn.simpleicons.org/make" },
              { name: "Apache Airflow", url: "https://cdn.simpleicons.org/apacheairflow" },
              { name: "Selenium", url: "https://cdn.simpleicons.org/selenium" },
              { name: "UiPath", url: "https://cdn.simpleicons.org/uipath" },
              { name: "Power Automate", url: "https://cdn.simpleicons.org/microsoftpowerautomate" },
              { name: "TensorFlow", url: "https://cdn.simpleicons.org/tensorflow" },
              { name: "PyTorch", url: "https://cdn.simpleicons.org/pytorch" },
              { name: "LangChain", url: "https://cdn.simpleicons.org/langchain" },
              { name: "Hugging Face", url: "https://cdn.simpleicons.org/huggingface" },
              { name: "Ollama", url: "https://cdn.simpleicons.org/ollama" },
              { name: "Gemini", url: "https://cdn.simpleicons.org/googlegemini" },
              { name: "Claude", url: "https://cdn.simpleicons.org/anthropic" },
              { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb" },
              { name: "Redis", url: "https://cdn.simpleicons.org/redis" },
              { name: "Elasticsearch", url: "https://cdn.simpleicons.org/elasticsearch" },
              { name: "Power BI", url: "https://cdn.simpleicons.org/powerbi" },
              { name: "Grafana", url: "https://cdn.simpleicons.org/grafana" },
              { name: "Tableau", url: "https://cdn.simpleicons.org/tableau" }
            ].map((item, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: "100px" }}>
                <img 
                  src={item.url} 
                  alt={item.name} 
                  title={item.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }} 
                />
                <span style={{ display: "none", fontSize: "1.2rem", fontWeight: "700", color: "#58798C", whiteSpace: "nowrap" }}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA Layer */}
      <section style={{ padding: "60px 0", background: "var(--color-primary)", color: "white", position: "relative", overflow: "hidden" }}>
        <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'radial-gradient(circle at 80% 20%, rgba(19, 170, 179,0.15) 0%, transparent 50%)', pointerEvents: 'none' }}></div>
        <div className="container" id="build" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="build-ecosystem" style={{ background: "transparent", border: "none", padding: 0 }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "20px", display: "inline-block" }}>Get Started</span>
            <h2 style={{ fontSize: "3rem", fontWeight: "700", color: "white", marginBottom: "20px", letterSpacing: "-0.02em" }}>Let's Build Intelligent Operations Together</h2>
            <p style={{ margin: "20px auto 40px", maxWidth: "800px", color: "#A5C5D6", fontSize: "1.25rem", lineHeight: "1.8" }}>
              Transform manual processes, disconnected workflows, and operational inefficiencies into intelligent systems designed for growth, visibility, and scalability.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn-premium" style={{ 
                background: "var(--color-accent)", 
                color: "white", 
                padding: "18px 48px", 
                fontSize: "1.15rem", 
                borderRadius: "100px", 
                boxShadow: "0 10px 30px rgba(19, 170, 179, 0.3)", 
                textDecoration: "none", 
                display: "inline-block", 
                transition: "all 0.3s ease",
                fontWeight: "600"
              }}>
                Schedule a Strategic Consultation →
              </Link>
            </div>
            <p style={{ marginTop: "40px", fontSize: "0.85rem", color: "#A5C5D6", opacity: 0.8 }}>
              Discuss your operational challenges with our technology and automation consultants.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
