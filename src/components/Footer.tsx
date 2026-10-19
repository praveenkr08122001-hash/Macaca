import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { MonkeyLogo } from './MonkeyLogo';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: '#040508',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '64px 0 32px 0',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '36px',
            marginBottom: '48px',
          }}
        >
          {/* Brand Col matching video */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <MonkeyLogo size={36} animated={false} />
              <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff' }}>
                Macaca<span style={{ color: '#38bdf8' }}>.ai</span>
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '340px' }}>
              Intelligent AI solutions for enterprise customer operations. Live call auditing, smart email triage, and conversational AI.
            </p>
          </div>

          {/* Col: Products */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Products
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Audit Chimp', 'Inbox Peel', 'Banana Bot'].map((link, i) => (
                <a key={i} href="#products" style={{ color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'} onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col: Company */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Company
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link, i) => (
                <a key={i} href="#" style={{ color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'} onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col: Contact matching video */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={14} color="#38bdf8" />
                <span>contact_us@macaca.ai</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} color="#38bdf8" />
                <span>+1 415 890 0000</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={14} color="#38bdf8" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.825rem',
            color: '#64748b',
          }}
        >
          <div>
            © 2026 Macaca.ai. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Security</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Privacy</a>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
              System Status
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
