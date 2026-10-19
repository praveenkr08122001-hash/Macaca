import React from 'react';
import { Sparkles, Brain, TrendingUp, ShieldCheck, Zap, Users, Cloud } from 'lucide-react';
import { BENTO_FEATURES } from '../data/landingData';
import { TiltCard } from './TiltCard';

export const WhyMacaca: React.FC = () => {
  const getFeatureIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'Brain': return <Brain size={24} color={color} />;
      case 'TrendingUp': return <TrendingUp size={24} color={color} />;
      case 'ShieldCheck': return <ShieldCheck size={24} color={color} />;
      case 'Zap': return <Zap size={24} color={color} />;
      case 'Users': return <Users size={24} color={color} />;
      case 'Cloud': return <Cloud size={24} color={color} />;
      default: return <Sparkles size={24} color={color} />;
    }
  };

  return (
    <section id="why-us" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header matching video */}
        <div className="section-badge">
          <span className="glass-pill">
            <Sparkles size={14} color="#06b6d4" />
            <span>The Macaca Advantage</span>
          </span>
        </div>

        <h2 className="section-title">
          Why <span className="gradient-text-purple-cyan">Macaca AI?</span>
        </h2>

        <p className="section-subtitle">
          AI-powered precision. Primate-level perception. Enterprise-grade security.
        </p>

        {/* 6 Bento Grid Cards from video */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {BENTO_FEATURES.map((feat) => (
            <TiltCard
              key={feat.id}
              className="glass-panel card-3d-hover"
              maxTilt={8}
              style={{
                padding: '32px 28px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: `${feat.color}15`,
                    border: `1px solid ${feat.color}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {getFeatureIcon(feat.icon, feat.color)}
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
                  {feat.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  {feat.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: '24px',
                  height: '2px',
                  width: '100%',
                  background: `linear-gradient(90deg, ${feat.color}60 0%, transparent 100%)`,
                }}
              />
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
