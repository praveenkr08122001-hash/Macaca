import React from 'react';
import { Sparkles, Cable, Brain, Zap, TrendingUp, RefreshCw } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/landingData';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cable': return <Cable size={22} color="#38bdf8" />;
      case 'Brain': return <Brain size={22} color="#a855f7" />;
      case 'Zap': return <Zap size={22} color="#f59e0b" />;
      case 'TrendingUp': return <TrendingUp size={22} color="#10b981" />;
      default: return <Sparkles size={22} color="#38bdf8" />;
    }
  };

  return (
    <section id="how-it-works" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header matching video */}
        <div className="section-badge">
          <span className="glass-pill">
            <Sparkles size={14} color="#38bdf8" />
            <span>Deployment Flow</span>
          </span>
        </div>

        <h2 className="section-title">
          How it <span className="gradient-text-purple-cyan">works</span>
        </h2>

        <p className="section-subtitle">
          From first connection to continuous improvement in four steps:
        </p>

        {/* 4 Cards Grid from video */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            position: 'relative',
            marginBottom: '40px',
          }}
        >
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.number}
              className="glass-panel"
              style={{
                padding: '30px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '20px',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span
                    style={{
                      fontSize: '1.75rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      color: 'rgba(255, 255, 255, 0.25)',
                    }}
                  >
                    {step.number}
                  </span>

                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Glow Pill from video */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              borderRadius: '9999px',
              background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.12) 0%, rgba(56, 189, 248, 0.12) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              boxShadow: '0 0 25px rgba(16, 185, 129, 0.15)',
            }}
          >
            <RefreshCw size={16} color="#10b981" />
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#6ee7b7' }}>
              Every result feeds back into the next conversation
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
