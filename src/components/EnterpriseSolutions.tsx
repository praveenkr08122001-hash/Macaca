import React, { useState, useRef } from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ENTERPRISE_TABS } from '../data/landingData';

interface EnterpriseSolutionsProps {
  onOpenDemo: () => void;
}

export const EnterpriseSolutions: React.FC<EnterpriseSolutionsProps> = ({ onOpenDemo }) => {
  const [activeTabId, setActiveTabId] = useState(ENTERPRISE_TABS[0].id);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (id: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    // Subtle 40ms buffer to prevent frantic jitter during quick cursor passes
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveTabId(id);
    }, 40);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  return (
    <section id="solutions" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header matching video */}
        <div className="section-badge">
          <span className="glass-pill">
            <Sparkles size={14} color="#a855f7" />
            <span>Enterprise Scale</span>
          </span>
        </div>

        <h2 className="section-title">
          Enterprise <span className="gradient-text-purple-cyan">AI Solutions</span>
        </h2>

        <p className="section-subtitle">
          Our agentic AI solutions are designed to scale with fast-growing businesses. We build smart, context-aware agents that understand emotion, and intent, giving you clarity where it counts.
        </p>

        {/* Mobile Tab Selector Bar for small screens */}
        <div
          className="mobile-tab-bar"
          style={{
            display: 'none',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '12px',
            marginBottom: '16px',
            scrollbarWidth: 'none',
          }}
        >
          {ENTERPRISE_TABS.map((tab) => {
            const isSelected = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '12px',
                  border: isSelected ? `1.5px solid ${tab.accentColor}` : '1px solid rgba(255, 255, 255, 0.1)',
                  background: isSelected ? `${tab.accentColor}25` : 'rgba(15, 17, 28, 0.8)',
                  color: isSelected ? '#ffffff' : '#94a3b8',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  flexShrink: 0,
                }}
              >
                <span style={{ color: tab.accentColor, fontFamily: 'var(--font-mono)' }}>{tab.number}</span>
                <span>{tab.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Buttery Smooth Horizontal Expandable Accordion */}
        <div
          onMouseLeave={handleMouseLeave}
          style={{
            display: 'flex',
            gap: '16px',
            minHeight: '460px',
            overflowX: 'auto',
            paddingBottom: '16px',
            alignItems: 'stretch',
          }}
        >
          {ENTERPRISE_TABS.map((tab) => {
            const isExpanded = tab.id === activeTabId;

            return (
              <div
                key={tab.id}
                onMouseEnter={() => handleMouseEnter(tab.id)}
                onClick={() => setActiveTabId(tab.id)}
                className="glass-panel"
                style={{
                  flex: isExpanded ? '4 1 580px' : '0 0 84px',
                  minWidth: isExpanded ? '340px' : '84px',
                  maxWidth: isExpanded ? '800px' : '84px',
                  borderRadius: '24px',
                  padding: '28px 24px',
                  cursor: isExpanded ? 'default' : 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  background: isExpanded
                    ? `linear-gradient(135deg, ${tab.accentColor}18 0%, rgba(15, 17, 28, 0.98) 100%)`
                    : 'rgba(15, 17, 28, 0.7)',
                  border: isExpanded
                    ? `2px solid ${tab.accentColor}90`
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isExpanded
                    ? `0 25px 60px -15px ${tab.accentColor}40, 0 0 30px ${tab.accentColor}15`
                    : '0 4px 15px rgba(0, 0, 0, 0.3)',
                  transition: 'flex 0.65s cubic-bezier(0.16, 1, 0.3, 1), min-width 0.65s cubic-bezier(0.16, 1, 0.3, 1), max-width 0.65s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
                }}
              >
                {/* 1. COLLAPSED VERTICAL VIEW (Fades out when expanded) */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    padding: '24px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    opacity: isExpanded ? 0 : 1,
                    pointerEvents: isExpanded ? 'none' : 'auto',
                    transition: 'opacity 0.25s ease',
                    zIndex: isExpanded ? 1 : 3,
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: tab.accentColor,
                      padding: '4px',
                    }}
                  >
                    {tab.number}
                  </div>

                  <div
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: '#cbd5e1',
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {tab.shortTitle}
                  </div>

                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: tab.accentColor,
                      boxShadow: `0 0 10px ${tab.accentColor}`,
                    }}
                  />
                </div>

                {/* 2. EXPANDED RICH VIEW (Fades in smoothly with gentle slide) */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    minWidth: '320px',
                    opacity: isExpanded ? 1 : 0,
                    pointerEvents: isExpanded ? 'auto' : 'none',
                    transform: isExpanded ? 'translateX(0)' : 'translateX(15px)',
                    transition: 'opacity 0.45s ease 0.12s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.08s',
                    zIndex: isExpanded ? 3 : 1,
                  }}
                >
                  <div>
                    {/* Top tag */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: `${tab.accentColor}20`,
                          color: tab.accentColor,
                          fontWeight: 700,
                        }}
                      >
                        Step {tab.number} · {tab.shortTitle}
                      </span>

                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        Hover over other tabs to switch
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: 'clamp(1.35rem, 2.2vw, 1.8rem)',
                        fontWeight: 800,
                        color: '#f8fafc',
                        lineHeight: 1.25,
                        marginBottom: '12px',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {tab.title}
                    </h3>

                    <p style={{ fontSize: '0.925rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '22px' }}>
                      {tab.sub}
                    </p>

                    {/* Bullets */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                      {tab.bullets.map((b, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <CheckCircle2 size={16} color={tab.accentColor} style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5 }}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Impact Box */}
                  <div
                    style={{
                      padding: '16px 20px',
                      background: 'rgba(0, 0, 0, 0.45)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '14px',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {tab.impactLabel}
                      </div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: tab.accentColor, lineHeight: 1.1 }}>
                        {tab.impactValue}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '2px' }}>
                        {tab.impactSub}
                      </div>
                    </div>

                    <button
                      onClick={(e) => { e.stopPropagation(); onOpenDemo(); }}
                      className="btn-primary"
                      style={{ padding: '9px 18px', fontSize: '0.85rem' }}
                    >
                      <span>Deploy Solution</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
