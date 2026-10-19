import React from 'react';
import { Sparkles } from 'lucide-react';
import { PERFORMANCE_STATS } from '../data/landingData';

export const PerformanceMetrics: React.FC = () => {
  return (
    <section className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header matching video */}
        <div className="section-badge">
          <span className="glass-pill">
            <Sparkles size={14} color="#10b981" />
            <span>Proven Benchmarks</span>
          </span>
        </div>

        <h2 className="section-title">
          Performance you can <span className="gradient-text-purple-cyan">measure</span>
        </h2>

        <p className="section-subtitle">
          Numbers from the teams already running on Macaca AI.
        </p>

        {/* 4 Cards from video */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '24px',
          }}
        >
          {PERFORMANCE_STATS.map((m, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '36px 24px',
                textAlign: 'center',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2.75rem, 5vw, 3.5rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.03em',
                  color: m.color,
                  marginBottom: '10px',
                  lineHeight: 1,
                }}
              >
                {m.value}
              </div>

              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
