import React from 'react';
import { Sparkles, Headphones, TrendingUp, Shield, Sliders } from 'lucide-react';
import { TEAMS_DATA } from '../data/landingData';
import { TiltCard } from './TiltCard';

export const BuiltForTeams: React.FC = () => {
  const getTeamIcon = (iconName: string) => {
    switch (iconName) {
      case 'Headphones': return <Headphones size={22} color="#38bdf8" />;
      case 'TrendingUp': return <TrendingUp size={22} color="#a855f7" />;
      case 'Shield': return <Shield size={22} color="#10b981" />;
      case 'Sliders': return <Sliders size={22} color="#f59e0b" />;
      default: return <Sparkles size={22} color="#38bdf8" />;
    }
  };

  return (
    <section id="teams" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header matching video */}
        <div className="section-badge">
          <span className="glass-pill">
            <Sparkles size={14} color="#a855f7" />
            <span>Cross-Functional Impact</span>
          </span>
        </div>

        <h2 className="section-title">
          Built for every <span className="gradient-text-purple-cyan">team</span>
        </h2>

        <p className="section-subtitle">
          One platform for customer care, sales, compliance and core operations.
        </p>

        {/* 4 Cards Grid from video */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          {TEAMS_DATA.map((team) => (
            <TiltCard
              key={team.id}
              className="glass-panel card-3d-hover"
              maxTilt={7}
              style={{
                padding: '30px 24px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    marginBottom: '18px',
                  }}
                >
                  {getTeamIcon(team.icon)}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
                  {team.name}
                </h3>

                <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  {team.desc}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Systems Pill from video */}
        <div
          style={{
            padding: '16px 24px',
            background: 'rgba(11, 13, 20, 0.7)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <span style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Works with the systems you already use:
          </span>
          {['CRM', 'ERP', 'Phone systems', 'Email', 'Knowledge base', 'APIs'].map((tool, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#cbd5e1',
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              {tool}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
