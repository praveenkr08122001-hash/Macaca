import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import { MonkeyLogo } from './MonkeyLogo';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(6, 7, 10, 0.88)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: '16px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo with animated Monkey */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <MonkeyLogo size={36} animated={true} />
          <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
            Macaca<span style={{ color: '#38bdf8' }}>.ai</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="desktop-nav">
          <a href="#products" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.925rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'} onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}>Products</a>
          <a href="#solutions" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.925rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'} onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}>Solutions</a>
          <a href="#how-it-works" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.925rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'} onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}>How it Works</a>
          <a href="#teams" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.925rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'} onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}>For Teams</a>
          <a href="#why-us" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.925rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'} onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}>Why Us</a>
          <a href="#faqs" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.925rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'} onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}>FAQs</a>
        </div>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={onOpenDemo}
            className="btn-primary"
            style={{ padding: '9px 20px', fontSize: '0.9rem' }}
          >
            <span>Book a 15-min Call</span>
            <ChevronRight size={16} />
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(11, 13, 20, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <a href="#products" onClick={() => setMobileMenuOpen(false)} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}>Products</a>
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}>Solutions</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}>How it Works</a>
          <a href="#teams" onClick={() => setMobileMenuOpen(false)} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}>For Teams</a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}>Why Us</a>
          <a href="#faqs" onClick={() => setMobileMenuOpen(false)} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}>FAQs</a>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
            className="btn-primary"
            style={{ width: '100%', marginTop: '8px' }}
          >
            Book a 15-min Call <ArrowRight size={16} />
          </button>
        </div>
      )}
    </nav>
  );
};
