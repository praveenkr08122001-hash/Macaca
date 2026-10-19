import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Volume2 } from 'lucide-react';
import { PRODUCTS_LIST } from '../data/landingData';

interface ProductShowcaseProps {
  onOpenDemo: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenDemo }) => {
  const [activeIndex, setActiveIndex] = useState(0); // 0: Audit Chimp, 1: Inbox Peel, 2: Banana Bot

  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? PRODUCTS_LIST.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === PRODUCTS_LIST.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStart(null);
  };

  // Compute relative offset (-1, 0, 1) for circular 3-item list
  const getCardStyle = (index: number) => {
    const total = PRODUCTS_LIST.length;
    let diff = (index - activeIndex) % total;
    if (diff < -1) diff += total;
    if (diff > 1) diff -= total;

    const prod = PRODUCTS_LIST[index];

    if (diff === 0) {
      // CENTER ACTIVE CARD
      return {
        transform: 'translateX(0%) scale(1.03) translateZ(30px)',
        zIndex: 10,
        opacity: 1,
        filter: 'blur(0px)',
        pointerEvents: 'auto' as const,
        borderColor: `${prod.accentColor}90`,
        boxShadow: `0 25px 60px -15px ${prod.accentColor}40, 0 0 35px ${prod.accentColor}25`,
        background: `linear-gradient(180deg, ${prod.accentColor}20 0%, rgba(15, 17, 28, 0.98) 100%)`,
      };
    } else if (diff === -1) {
      // LEFT PEEKING CARD
      return {
        transform: 'translateX(-85%) scale(0.88) perspective(1000px) rotateY(12deg)',
        zIndex: 5,
        opacity: 0.5,
        filter: 'blur(0.5px)',
        pointerEvents: 'auto' as const,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)',
        background: 'rgba(15, 17, 28, 0.85)',
      };
    } else {
      // RIGHT PEEKING CARD
      return {
        transform: 'translateX(85%) scale(0.88) perspective(1000px) rotateY(-12deg)',
        zIndex: 5,
        opacity: 0.5,
        filter: 'blur(0.5px)',
        pointerEvents: 'auto' as const,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)',
        background: 'rgba(15, 17, 28, 0.85)',
      };
    }
  };

  return (
    <section id="products" className="section-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Header matching video */}
        <div className="section-badge">
          <span className="glass-pill">
            <Sparkles size={14} color="#38bdf8" />
            <span>Product Ecosystem</span>
          </span>
        </div>

        <h2 className="section-title">
          Meet the <span className="gradient-text-purple-cyan">products</span>
        </h2>

        <p className="section-subtitle">
          Three AI tools that listen to calls, read emails and talk to customers.
        </p>

        {/* 3D Coverflow Carousel Stage */}
        <div
          style={{
            position: 'relative',
            maxWidth: '1000px',
            margin: '0 auto',
            minHeight: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 30,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(20, 24, 38, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
              transition: 'all 0.2s',
            }}
            aria-label="Previous product"
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#38bdf8'; e.currentTarget.style.boxShadow = '0 0 15px rgba(56, 189, 248, 0.5)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.7)'; }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 30,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(20, 24, 38, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
              transition: 'all 0.2s',
            }}
            aria-label="Next product"
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#38bdf8'; e.currentTarget.style.boxShadow = '0 0 15px rgba(56, 189, 248, 0.5)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.7)'; }}
          >
            <ChevronRight size={24} />
          </button>

          {/* 3D Stack Container */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '440px',
              height: '520px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              touchAction: 'pan-y',
            }}
          >
            {PRODUCTS_LIST.map((prod, idx) => {
              const dynamicStyle = getCardStyle(idx);
              const isCenter = idx === activeIndex;

              return (
                <div
                  key={prod.id}
                  onClick={() => setActiveIndex(idx)}
                  className="glass-panel"
                  style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    padding: '28px',
                    borderRadius: '24px',
                    cursor: isCenter ? 'default' : 'pointer',
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    ...dynamicStyle,
                  }}
                >
                  {/* Top Window Bar matching video */}
                  <div
                    style={{
                      padding: '10px 14px',
                      background: 'rgba(0, 0, 0, 0.45)',
                      borderRadius: '12px',
                      marginBottom: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                      {prod.url}
                    </span>
                  </div>

                  {/* Mockup Preview Area matching video */}
                  {prod.id === 'audit-chimp' && (
                    <div
                      style={{
                        padding: '16px',
                        background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(124, 58, 237, 0.15) 100%)',
                        borderRadius: '16px',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                        marginBottom: '20px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Volume2 size={16} color="#38bdf8" />
                          <span style={{ fontSize: '0.825rem', fontWeight: 700, color: '#f8fafc' }}>Call #AC-9924</span>
                        </div>
                        <span style={{ fontSize: '0.72rem', padding: '2px 8px', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', fontWeight: 700 }}>
                          QA 96
                        </span>
                      </div>

                      {/* Animated Sound Waveform */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3.5px', height: '36px', margin: '8px 0' }}>
                        {[16, 26, 12, 34, 18, 30, 22, 10, 28, 14, 32, 20, 26, 15].map((h, i) => (
                          <div
                            key={i}
                            style={{
                              width: '3.5px',
                              height: `${h}px`,
                              backgroundColor: '#38bdf8',
                              borderRadius: '2px',
                              animation: `waveBar ${0.8 + (i % 3) * 0.25}s ease-in-out infinite`,
                            }}
                          />
                        ))}
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#cbd5e1', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <span>Compliance: <strong style={{ color: '#10b981' }}>100% pass</strong></span>
                        <span>Mood: <strong style={{ color: '#c4b5fd' }}>Relieved</strong></span>
                      </div>
                    </div>
                  )}

                  {prod.id === 'banana-bot' && (
                    <div
                      style={{
                        padding: '16px',
                        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(234, 88, 12, 0.12) 100%)',
                        borderRadius: '16px',
                        border: '1px solid rgba(245, 158, 11, 0.25)',
                        marginBottom: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <div style={{ alignSelf: 'flex-start', background: 'rgba(255, 255, 255, 0.08)', padding: '6px 12px', borderRadius: '10px 10px 10px 2px', fontSize: '0.78rem', color: '#f8fafc' }}>
                        Where is my order?
                      </div>
                      <div style={{ alignSelf: 'flex-end', background: 'rgba(245, 158, 11, 0.25)', border: '1px solid rgba(245, 158, 11, 0.4)', padding: '6px 12px', borderRadius: '10px 10px 2px 10px', fontSize: '0.78rem', color: '#fef3c7' }}>
                        Out for delivery, arriving by 3 pm.
                      </div>
                      <div style={{ alignSelf: 'flex-start', background: 'rgba(255, 255, 255, 0.08)', padding: '6px 12px', borderRadius: '10px 10px 10px 2px', fontSize: '0.78rem', color: '#f8fafc' }}>
                        Thanks, that was fast!
                      </div>
                    </div>
                  )}

                  {prod.id === 'inbox-peel' && (
                    <div
                      style={{
                        padding: '16px',
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.12) 100%)',
                        borderRadius: '16px',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        marginBottom: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      {[
                        { title: 'Renewal tier change', badge: 'Urgent', color: '#ef4444' },
                        { title: 'Invoice question', badge: 'Billing', color: '#38bdf8' },
                        { title: 'Quick hello', badge: 'Normal', color: '#94a3b8' }
                      ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', background: 'rgba(0,0,0,0.25)', borderRadius: '8px' }}>
                          <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>{item.title}</span>
                          <span style={{ fontSize: '0.68rem', padding: '2px 6px', borderRadius: '4px', background: `${item.color}20`, color: item.color, fontWeight: 700 }}>
                            {item.badge}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Status Badge */}
                  <div style={{ marginBottom: '10px' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: prod.status === 'Available' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                        color: prod.status === 'Available' ? '#10b981' : '#f59e0b',
                        border: prod.status === 'Available' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(245, 158, 11, 0.3)',
                        fontWeight: 600,
                      }}
                    >
                      {prod.status}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
                    {prod.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.55, marginBottom: '24px' }}>
                    {prod.description}
                  </p>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {prod.id === 'audit-chimp' ? (
                      <>
                        <button
                          onClick={(e) => { e.stopPropagation(); onOpenDemo(); }}
                          className="btn-primary"
                          style={{ flex: 1, padding: '10px 14px', fontSize: '0.85rem' }}
                        >
                          <span>Explore {prod.title}</span>
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); onOpenDemo(); }}
                          className="btn-secondary"
                          style={{ padding: '10px 14px', fontSize: '0.85rem' }}
                        >
                          Book demo
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={(e) => { e.stopPropagation(); onOpenDemo(); }}
                        className="btn-primary"
                        style={{
                          width: '100%',
                          padding: '10px 16px',
                          fontSize: '0.85rem',
                          background: `linear-gradient(135deg, ${prod.accentColor} 0%, #7c3aed 100%)`,
                        }}
                      >
                        <span>{prod.status === 'Coming soon' ? 'Join early access' : 'Learn more'}</span>
                        <ArrowRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Dots Indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '30px' }}>
          {PRODUCTS_LIST.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: i === activeIndex ? '28px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === activeIndex ? '#38bdf8' : 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
