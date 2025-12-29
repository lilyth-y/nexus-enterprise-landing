import React, { useState } from 'react';
import { X, CheckCircle, Mail, Lock, User, ArrowRight } from 'lucide-react';
import GlassCard from './GlassCard';

const SignUpModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1: Form, 2: Success
  const [formData, setFormData] = useState({ email: '', fullName: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Invalid email address';
    if (formData.fullName.length < 2) newErrors.fullName = 'Name too short';
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  return (
    <div className="modal-overlay" style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '1rem'
    }} onClick={onClose}>
      <GlassCard 
        style={{ width: '100%', maxWidth: '450px', position: 'relative', padding: '3rem' }} 
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} style={{ 
          position: 'absolute', top: '1.5rem', right: '1.5rem', 
          background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' 
        }}>
          <X size={24} />
        </button>

        {step === 1 ? (
          <>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Join the <span className="gradient-text">Elite</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Start your 14-day free enterprise trial.</p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div className="input-group">
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    style={{ 
                      width: '100%', padding: '1rem 1rem 1rem 3rem', background: 'rgba(255,255,255,0.03)', 
                      border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white' 
                    }}
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                {errors.fullName && <small style={{ color: '#ef4444', marginTop: '4px', display: 'block' }}>{errors.fullName}</small>}
              </div>

              <div className="input-group">
                <div style={{ position: 'relative' }}>
                  <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                  <input 
                    type="email" 
                    placeholder="Work Email"
                    style={{ 
                      width: '100%', padding: '1rem 1rem 1rem 3rem', background: 'rgba(255,255,255,0.03)', 
                      border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white' 
                    }}
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                {errors.email && <small style={{ color: '#ef4444', marginTop: '4px', display: 'block' }}>{errors.email}</small>}
              </div>

              <div className="input-group">
                <div style={{ position: 'relative' }}>
                  <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                  <input 
                    type="password" 
                    placeholder="Create Password"
                    style={{ 
                      width: '100%', padding: '1rem 1rem 1rem 3rem', background: 'rgba(255,255,255,0.03)', 
                      border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white' 
                    }}
                    value={formData.password}
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
                {errors.password && <small style={{ color: '#ef4444', marginTop: '4px', display: 'block' }}>{errors.password}</small>}
              </div>

              <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }} disabled={loading}>
                {loading ? 'Provisioning Account...' : 'Initialize Infrastructure'}
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>
              <CheckCircle size={80} strokeWidth={1} style={{ margin: '0 auto' }} />
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome to Nexus</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Your enterprise environment is being deployed. Check your email for access instructions.</p>
            <button className="btn btn-primary" onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto' }}>
              Enter Console <ArrowRight size={18} />
            </button>
          </div>
        )}
      </GlassCard>
    </div>
  );
};

export default SignUpModal;
