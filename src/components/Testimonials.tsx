import React from 'react';
import { Sparkles, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/landingData';
import { TiltCard } from './TiltCard';

export const Testimonials: React.FC = () => {
  return (
    <section className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header matching video */}
        <div className="section-badge">
          <span className="glass-pill">
            <Sparkles size={14} color="#a855f7" />
            <span>Customer Stories</span>
          </span>
        </div>

        <h2 className="section-title">
          What our <span className="gradient-text-purple-cyan">clients say</span>
        </h2>

        <p className="section-subtitle">
          See how fast-growing teams scale their customer operations with Macaca AI.
        </p>

        {/* Feature Quote Banner matching video */}
        <TiltCard
          className="glass-panel card-3d-hover"
          maxTilt={4}
          style={{
            padding: '48px 36px',
            marginBottom: '40px',
            textAlign: 'center',
            borderRadius: '24px',
            background: 'linear-gradient(180deg, rgba(30, 27, 75, 0.45) 0%, rgba(15, 17, 28, 0.85) 100%)',
            borderColor: 'rgba(168, 85, 247, 0.35)',
            position: 'relative',
          }}
        >
          <Quote size={40} color="#a855f7" style={{ opacity: 0.35, margin: '0 auto 16px auto' }} />

          <blockquote
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              fontWeight: 600,
              color: '#f8fafc',
              lineHeight: 1.55,
              maxWidth: '820px',
              margin: '0 auto 24px auto',
              letterSpacing: '-0.01em',
            }}
          >
            "We scaled to 25,000+ daily call audits with Macaca AI in under three weeks. It's the single platform keeping our compliance spotless."
          </blockquote>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '1rem', fontWeight: 700, color: '#38bdf8' }}>Anjali R.</span>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Head of Customer Experience, FinTech Enterprise</span>
          </div>
        </TiltCard>

        {/* 3 Testimonials Grid matching video */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {TESTIMONIALS.map((t) => (
            <TiltCard
              key={t.id}
              className="glass-panel card-3d-hover"
              maxTilt={7}
              style={{
                padding: '28px 24px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Metric Badge */}
                <div style={{ marginBottom: '16px' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#10b981',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      fontWeight: 700,
                    }}
                  >
                    <CheckCircle2 size={12} color="#10b981" />
                    <span>{t.badge}</span>
                  </span>
                </div>

                <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '24px' }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>{t.author}</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{t.role}, {t.company}</div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
