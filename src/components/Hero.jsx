import React from 'react';
import GlassCard from './GlassCard';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">Next-Gen Enterprise Infrastructure</span>
        <h1>Scale your <span className="gradient-text">AI Intelligence</span></h1>
        <p>The premium infrastructure layer for modern enterprises. Build, deploy, and scale production-ready AI models with enterprise-grade security and reliability.</p>
        <div className="hero-actions">
          <button className="btn btn-primary btn-lg">Request Enterprise Demo</button>
          <button className="btn btn-outline btn-lg">View Infrastructure</button>
        </div>
      </div>
      
      <div className="hero-visual">
        <GlassCard className="main-card" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} animate={true}>
          <div className="card-header" style={{ display: 'flex', gap: '6px', marginBottom: '1.5rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }}></div>
          </div>
          <div className="card-body">
            <div style={{ background: 'rgba(255,255,255,0.05)', height: '10px', borderRadius: '5px', width: '100%', marginBottom: '1rem' }}></div>
            <div style={{ background: 'rgba(255,255,255,0.05)', height: '10px', borderRadius: '5px', width: '60%', marginBottom: '1rem' }}></div>
            <div className="graph-placeholder">
              <div className="bar" style={{ height: '60%' }}></div>
              <div className="bar" style={{ height: '80%' }}></div>
              <div className="bar" style={{ height: '40%' }}></div>
              <div className="bar" style={{ height: '90%' }}></div>
            </div>
          </div>
        </GlassCard>
        
        <GlassCard className="sub-card-1" style={{ top: '10%', right: '5%' }} animate={true}>
          <div className="card-body">
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '4px solid var(--primary)', marginBottom: '1rem' }}></div>
            <div style={{ background: 'rgba(255,255,255,0.05)', height: '10px', borderRadius: '5px', width: '30%' }}></div>
          </div>
        </GlassCard>

        <GlassCard className="sub-card-2" style={{ bottom: '10%', left: '0' }} animate={true}>
          <div className="card-body">
            <div style={{ background: 'rgba(255,255,255,0.05)', height: '10px', borderRadius: '5px', width: '60%' }}></div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Hero;
