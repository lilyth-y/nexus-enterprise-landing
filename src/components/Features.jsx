import React, { useEffect, useRef, useState } from 'react';
import GlassCard from './GlassCard';

const Features = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: '⚡', title: 'Ultra Fast', desc: 'Optimized for lightning-speed interactions and 100/100 performance scores.' },
    { icon: '🛡️', title: 'Secure by Design', desc: 'Enterprise-grade security baked into every layer of the platform.' },
    { icon: '📈', title: 'Deep Analytics', desc: 'Gain insights with our real-time data visualization engine.' }
  ];

  return (
    <section id="features" ref={sectionRef} className={`section-reveal ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">Engineered for <span className="gradient-text">Performance</span></h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <GlassCard key={i} className="feature-card">
            <div className="icon" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{f.icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>{f.title}</h3>
            <p style={{ color: 'var(--text-muted)' }}>{f.desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Features;
