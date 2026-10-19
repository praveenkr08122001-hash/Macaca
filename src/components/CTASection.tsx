import React, { useState } from 'react';
import { Sparkles, CheckCircle2, PhoneCall } from 'lucide-react';

interface CTASectionProps {
  onOpenDemo: (email?: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenDemo }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        onOpenDemo(email);
        setSubmitted(false);
      }, 500);
    }
  };

  return (
    <section className="section-wrapper" style={{ padding: '60px 0 90px 0' }}>
      <div className="container">
        <div
          className="glass-panel"
          style={{
            padding: '64px 32px',
            textAlign: 'center',
            borderRadius: '28px',
            background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.28) 0%, rgba(15, 17, 28, 0.95) 75%)',
            border: '1px solid rgba(168, 85, 247, 0.4)',
            boxShadow: '0 30px 80px -20px rgba(124, 58, 237, 0.35), 0 0 40px rgba(6, 182, 212, 0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
            <span className="glass-pill">
              <Sparkles size={14} color="#38bdf8" />
              <span>Get Started Today</span>
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
              color: '#ffffff',
            }}
          >
            Ready to <span className="gradient-text-purple-cyan">transform</span> your business?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#cbd5e1',
              maxWidth: '600px',
              margin: '0 auto 34px auto',
              lineHeight: 1.6,
            }}
          >
            Talk to our team and see how Macaca AI can transform your voice analytics and customer experience.
          </p>

          {/* Email Capture Form matching video */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              maxWidth: '520px',
              margin: '0 auto 28px auto',
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
              style={{
                flex: '1 1 280px',
                padding: '14px 20px',
                borderRadius: '12px',
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                color: '#ffffff',
                fontSize: '0.95rem',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#38bdf8')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.18)')}
            />

            <button
              type="submit"
              className="btn-primary"
              style={{ padding: '14px 26px', fontSize: '0.95rem', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <PhoneCall size={16} />
              <span>{submitted ? 'Processing...' : 'Book a 15-min call'}</span>
            </button>
          </form>

          {/* Trust Guarantees from video */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
            {['SOC 2 Type II certified', '100% compliant', 'No credit card required'].map((item, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.825rem', color: '#94a3b8' }}>
                <CheckCircle2 size={14} color="#10b981" />
                <span>{item}</span>
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
