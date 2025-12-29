import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntegrationHub from './components/IntegrationHub'
import InfrastructureLogs from './components/InfrastructureLogs'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import Features from './components/Features'
import TrustSection from './components/TrustSection'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import SignUpModal from './components/SignUpModal'

function App() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      <div 
        className="glow-bg" 
        style={{
          background: `
            radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.2), transparent 40%),
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15), transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15), transparent 40%)
          `
        }}
      />
      
      <Navbar onSignUp={() => setIsModalOpen(true)} />
      
      <main>
        <Hero />
        <IntegrationHub />
        <InfrastructureLogs />
        <AnalyticsDashboard />
        <Features />
        <TrustSection />
        <Pricing />
      </main>

      <Footer />
      <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App
