import React, { useState, useEffect } from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner after 1 second if not already accepted
    const consent = localStorage.getItem('macaca_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('macaca_cookie_consent', 'accepted_all');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('macaca_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 99,
        width: '92%',
        maxWidth: '780px',
        animation: 'floatGentle 4s ease-in-out infinite',
      }}
    >
      <div
        className="glass-panel"
        style={{
          padding: '18px 24px',
          borderRadius: '20px',
          background: 'rgba(11, 13, 24, 0.96)',
          backdropFilter: 'blur(20px)',
          border: '1.5px solid rgba(56, 189, 248, 0.4)',
          boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.9), 0 0 30px rgba(56, 189, 248, 0.2)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        {/* Left Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1 1 320px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <ShieldCheck size={22} color="#38bdf8" />
          </div>

          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>
              We value your privacy & security
            </div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.4 }}>
              Macaca AI uses cookies and telemetry to analyze call latency, prevent fraud, and optimize enterprise agent performance.
            </div>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={handleDecline}
            style={{
              padding: '9px 16px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#cbd5e1',
              fontSize: '0.825rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)')}
          >
            Decline
          </button>

          <button
            onClick={handleAcceptAll}
            className="btn-primary"
            style={{
              padding: '9px 20px',
              fontSize: '0.85rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Check size={16} />
            <span>Accept All</span>
          </button>
        </div>
      </div>
    </div>
  );
};
