import React, { useState } from 'react';
import { ArrowRight, Sparkles, Headphones, Mail, Mic, Shield, BarChart2, MessageSquare, CheckCircle2, PhoneCall } from 'lucide-react';
import { AGENT_NODES, type AgentNode } from '../data/landingData';
import { MonkeyLogo } from './MonkeyLogo';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const [selectedAgent, setSelectedAgent] = useState<AgentNode>(AGENT_NODES[0]);

  const getAgentIcon = (iconName: string) => {
    switch (iconName) {
      case 'Headphones': return <Headphones size={20} color="#38bdf8" />;
      case 'Mail': return <Mail size={20} color="#10b981" />;
      case 'Mic': return <Mic size={20} color="#f59e0b" />;
      case 'Shield': return <Shield size={20} color="#a855f7" />;
      case 'BarChart2': return <BarChart2 size={20} color="#38bdf8" />;
      case 'MessageSquare': return <MessageSquare size={20} color="#06b6d4" />;
      default: return <Sparkles size={20} color="#a855f7" />;
    }
  };

  return (
    <section style={{ position: 'relative', paddingTop: '140px', paddingBottom: '70px', overflow: 'hidden' }}>
      {/* Ambient background glows */}
      <div className="ambient-glow-top" />
      <div className="ambient-glow-mid" />
      
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Column: Hero Text matching video */}
          <div style={{ zIndex: 2 }}>
            {/* Pill Badge */}
            <div style={{ marginBottom: '20px' }}>
              <span className="glass-pill" style={{ background: 'rgba(56, 189, 248, 0.08)', borderColor: 'rgba(56, 189, 248, 0.25)', color: '#38bdf8' }}>
                <Sparkles size={14} color="#38bdf8" />
                <span>AI-powered · Private-level perception · Enterprise-grade security</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
              }}
            >
              AI solutions that work like an{' '}
              <span className="gradient-text-purple-cyan">Organised workforce</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                maxWidth: '540px',
                marginBottom: '36px',
              }}
            >
              From real-time call auditing to smart inbox triage, our autonomous AI agents handle customer care, sales, and compliance across your business.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', marginBottom: '44px' }}>
              <button onClick={onOpenDemo} className="btn-primary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                <span>Start Free Trial</span>
                <ArrowRight size={18} />
              </button>
              
              <button onClick={onOpenDemo} className="btn-secondary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                <PhoneCall size={16} />
                <span>Book a 15-min Call</span>
              </button>
            </div>

            {/* Metrics Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#10b981" />
                <span style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600 }}>500+ Enterprise clients</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#38bdf8" />
                <span style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600 }}>SOC2 Type II certified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#a855f7" />
                <span style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600 }}>100% compliant</span>
              </div>
            </div>
          </div>

          {/* Right Column: True Rotating Planetary Orbit System */}
          <div style={{ position: 'relative', minHeight: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Center Orbit Circle */}
            <div
              className="hero-orbit-wrapper"
            >
              {/* Outer Glow Disc */}
              <div
                style={{
                  position: 'absolute',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(124, 58, 237, 0.12) 50%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />

              {/* Static Orbit Guide Track */}
              <div
                style={{
                  position: 'absolute',
                  width: '340px',
                  height: '340px',
                  borderRadius: '50%',
                  border: '1.5px dashed rgba(56, 189, 248, 0.3)',
                  boxShadow: '0 0 25px rgba(56, 189, 248, 0.12)',
                }}
              />

              {/* Center Neural Monkey Logo Card (Static Sun at the center) */}
              <div
                style={{
                  position: 'relative',
                  width: '120px',
                  height: '120px',
                  borderRadius: '28px',
                  background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
                  border: '2px solid rgba(168, 85, 247, 0.55)',
                  boxShadow: '0 0 50px rgba(124, 58, 237, 0.55), inset 0 0 20px rgba(168, 85, 247, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 15,
                  cursor: 'pointer',
                  animation: 'pulseGlow 3.5s ease-in-out infinite',
                }}
                title="Macaca AI Central Core"
              >
                <MonkeyLogo size={68} animated={true} />
              </div>

              {/* CONTINUOUS ROTATING PLANETARY ORBIT CONTAINER */}
              <div
                className="orbit-system"
                style={{
                  position: 'absolute',
                  width: '340px',
                  height: '340px',
                  borderRadius: '50%',
                  zIndex: 12,
                  pointerEvents: 'none',
                }}
              >
                {AGENT_NODES.map((agent) => {
                  const radius = 170; // half of 340px
                  const rad = (agent.angle * Math.PI) / 180;
                  const x = radius * Math.cos(rad);
                  const y = radius * Math.sin(rad);
                  const isSelected = selectedAgent.id === agent.id;

                  return (
                    <div
                      key={agent.id}
                      onClick={() => setSelectedAgent(agent)}
                      style={{
                        position: 'absolute',
                        left: `calc(50% + ${x}px - 26px)`,
                        top: `calc(50% + ${y}px - 26px)`,
                        width: '52px',
                        height: '52px',
                        cursor: 'pointer',
                        pointerEvents: 'auto',
                      }}
                      title={`${agent.name} - ${agent.metrics}`}
                    >
                      {/* Counter-rotating wrapper to keep icons upright as they orbit */}
                      <div
                        className="orbit-planet-counter"
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '16px',
                          background: isSelected ? 'rgba(30, 41, 59, 0.98)' : 'rgba(15, 23, 42, 0.9)',
                          backdropFilter: 'blur(12px)',
                          border: isSelected ? `2px solid ${agent.color}` : '1.5px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: isSelected ? `0 0 25px ${agent.color}` : '0 4px 18px rgba(0, 0, 0, 0.6)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                          transform: isSelected ? 'scale(1.18)' : 'scale(1)',
                        }}
                      >
                        {getAgentIcon(agent.iconName)}

                        {/* Tiny glowing satellite indicator */}
                        <span
                          style={{
                            position: 'absolute',
                            top: '-3px',
                            right: '-3px',
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: agent.color,
                            boxShadow: `0 0 8px ${agent.color}`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Floating Notification Badge 1: Top-Left "Call audited" (from video) */}
              <div
                className="glass-panel animate-float"
                style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-20px',
                  padding: '10px 16px',
                  borderRadius: '14px',
                  background: 'rgba(15, 17, 28, 0.94)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc' }}>Call audited</div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>QA score <strong style={{ color: '#38bdf8' }}>96/100</strong></div>
                </div>
              </div>

              {/* Floating Notification Badge 2: Bottom-Right "Email prioritised" (from video) */}
              <div
                className="glass-panel animate-float"
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                  padding: '10px 16px',
                  borderRadius: '14px',
                  background: 'rgba(15, 17, 28, 0.94)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  animationDelay: '1.5s',
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc' }}>Email prioritised</div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Urgent, reply in <strong style={{ color: '#10b981' }}>4 min</strong></div>
                </div>
              </div>

              {/* Floating Badge 3: Right "Voice 24/7" (from video) */}
              <div
                className="glass-panel"
                style={{
                  position: 'absolute',
                  top: '120px',
                  right: '-35px',
                  padding: '8px 14px',
                  borderRadius: '12px',
                  background: 'rgba(15, 17, 28, 0.94)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  zIndex: 18,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b', boxShadow: '0 0 6px #f59e0b' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f8fafc' }}>Voice 24/7</span>
              </div>

            </div>

          </div>

        </div>

        {/* Brand Logos Strip below Hero (from video) */}
        <div
          style={{
            marginTop: '70px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.1em', marginBottom: '20px' }}>
            TRUSTED BY FAST-GROWING ENTERPRISE TEAMS
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '40px',
            }}
          >
            {['IPSUM', 'IPSUM CORP', 'NEXUS-FLOW', 'MODERN.AI', 'VORTEX-SYS'].map((brand, i) => (
              <span
                key={i}
                style={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  color: 'rgba(255, 255, 255, 0.3)',
                  letterSpacing: '0.08em',
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
