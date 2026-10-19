import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Volume2, Mail, MessageSquare } from 'lucide-react';
import { PRODUCTS_LIST } from '../data/landingData';
import mascotAudit from '../assets/mascot-audit.png';
import mascotInbox from '../assets/mascot-inbox.png';
import mascotBanana from '../assets/mascot-banana.png';

interface ProductShowcaseProps {
  onOpenDemo: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenDemo }) => {
  const [activeIndex, setActiveIndex] = useState(0); // 0: Audit Chimp, 1: Inbox Peel, 2: Banana Bot
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const mascotsMap = [mascotAudit, mascotInbox, mascotBanana];

  // Auto-play dynamic rotation every 4.2 seconds (pauses when user hovers or touches)
  useEffect(() => {
    if (isPaused) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === PRODUCTS_LIST.length - 1 ? 0 : prev + 1));
    }, 4200);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? PRODUCTS_LIST.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === PRODUCTS_LIST.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
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
    setTimeout(() => setIsPaused(false), 2500);
  };

  // Compute 3D Coverflow relative offset (-1, 0, 1)
  const getCardStyle = (index: number) => {
    const total = PRODUCTS_LIST.length;
    let diff = (index - activeIndex) % total;
    if (diff < -1) diff += total;
    if (diff > 1) diff -= total;

    const prod = PRODUCTS_LIST[index];

    if (diff === 0) {
      // CENTER ACTIVE CARD (Hero focus with deep 3D elevation & luminous halo)
      return {
        transform: 'translateX(0%) scale(1.04) translateZ(40px)',
        zIndex: 10,
        opacity: 1,
        filter: 'blur(0px)',
        pointerEvents: 'auto' as const,
        borderColor: `${prod.accentColor}95`,
        boxShadow: `0 30px 70px -15px ${prod.accentColor}45, 0 0 40px ${prod.accentColor}30, inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
        background: `linear-gradient(180deg, ${prod.accentColor}25 0%, rgba(15, 17, 28, 0.98) 100%)`,
      };
    } else if (diff === -1) {
      // LEFT PEEKING CARD (3D angled tilt)
      return {
        transform: 'translateX(-85%) scale(0.88) perspective(1000px) rotateY(14deg) translateZ(-20px)',
        zIndex: 5,
        opacity: 0.55,
        filter: 'blur(0.5px)',
        pointerEvents: 'auto' as const,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)',
        background: 'rgba(15, 17, 28, 0.85)',
      };
    } else {
      // RIGHT PEEKING CARD (3D angled tilt)
      return {
        transform: 'translateX(85%) scale(0.88) perspective(1000px) rotateY(-14deg) translateZ(-20px)',
        zIndex: 5,
        opacity: 0.55,
        filter: 'blur(0.5px)',
        pointerEvents: 'auto' as const,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)',
        background: 'rgba(15, 17, 28, 0.85)',
      };
    }
  };

  return (
    <section
      id="products"
      className="section-wrapper"
      style={{ position: 'relative', overflow: 'hidden' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Header */}
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
          Three autonomous AI tools that listen to calls, read emails and talk to customers.
        </p>

        {/* 3D Coverflow Carousel Stage */}
        <div
          style={{
            position: 'relative',
            maxWidth: '1000px',
            margin: '0 auto',
            minHeight: '620px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1200px',
          }}
        >
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 30,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(20, 24, 38, 0.95)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
              transition: 'all 0.25s',
            }}
            aria-label="Previous product"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#38bdf8';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.6)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.7)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 30,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(20, 24, 38, 0.95)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
              transition: 'all 0.25s',
            }}
            aria-label="Next product"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#38bdf8';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.6)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.7)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* 3D Stack Container with Touch Gestures */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '460px',
              minHeight: '580px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              touchAction: 'pan-y',
              transformStyle: 'preserve-3d',
            }}
          >
            {PRODUCTS_LIST.map((prod, idx) => {
              const dynamicStyle = getCardStyle(idx);
              const isCenter = idx === activeIndex;
              const cardMascot = mascotsMap[idx];

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
                    borderRadius: '26px',
                    cursor: isCenter ? 'default' : 'pointer',
                    transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease, box-shadow 0.5s ease, border-color 0.4s ease',
                    transformStyle: 'preserve-3d',
                    ...dynamicStyle,
                  }}
                >
                  {/* Top Bar with Mascot Badge Header */}
                  <div
                    style={{
                      padding: '10px 14px',
                      background: 'rgba(0, 0, 0, 0.45)',
                      borderRadius: '14px',
                      marginBottom: '18px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                      </div>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#94a3b8', marginLeft: '6px' }}>
                        {prod.url}
                      </span>
                    </div>

                    {/* Live Activity Beacon */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          backgroundColor: prod.accentColor,
                          boxShadow: `0 0 10px ${prod.accentColor}`,
                          animation: 'pulseGlow 2s ease-in-out infinite',
                        }}
                      />
                      <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: prod.accentColor, fontWeight: 700 }}>
                        ACTIVE
                      </span>
                    </div>
                  </div>

                  {/* ANIMATED MASCOT BANNER: Floating 3D mascot image */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 18px',
                      marginBottom: '16px',
                      borderRadius: '16px',
                      background: `linear-gradient(135deg, ${prod.accentColor}18 0%, rgba(255, 255, 255, 0.03) 100%)`,
                      border: `1px solid ${prod.accentColor}30`,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Floating Mascot Image with Halo */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', zIndex: 2 }}>
                      <div
                        className="mascot-float-anim"
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '16px',
                          background: 'rgba(15, 17, 28, 0.8)',
                          border: `1.5px solid ${prod.accentColor}60`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '6px',
                          boxShadow: `0 8px 24px ${prod.accentColor}30`,
                        }}
                      >
                        <img
                          src={cardMascot}
                          alt={prod.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            display: 'block',
                          }}
                        />
                      </div>

                      <div>
                        <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: prod.accentColor, fontWeight: 700, letterSpacing: '0.06em' }}>
                          {prod.tag}
                        </div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc' }}>
                          {prod.title}
                        </div>
                      </div>
                    </div>

                    {/* Ambient Glow Arc */}
                    <div
                      style={{
                        position: 'absolute',
                        right: '-20px',
                        top: '-20px',
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: prod.accentColor,
                        filter: 'blur(40px)',
                        opacity: 0.25,
                        pointerEvents: 'none',
                      }}
                    />
                  </div>

                  {/* DYNAMIC LIVE MOCKUP PREVIEW AREA */}
                  {/* 1. Audit Chimp: Real-time Soundwave and Compliance */}
                  {prod.id === 'audit-chimp' && (
                    <div
                      style={{
                        padding: '16px',
                        background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(124, 58, 237, 0.15) 100%)',
                        borderRadius: '16px',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                        marginBottom: '20px',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Volume2 size={16} color="#38bdf8" />
                          <span style={{ fontSize: '0.825rem', fontWeight: 700, color: '#f8fafc' }}>
                            Live Call #AC-9924
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            background: 'rgba(56, 189, 248, 0.25)',
                            color: '#38bdf8',
                            fontWeight: 700,
                            boxShadow: '0 0 10px rgba(56, 189, 248, 0.3)',
                          }}
                        >
                          QA Score 96/100
                        </span>
                      </div>

                      {/* Animated Sound Waveform Bars */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px',
                          height: '38px',
                          margin: '10px 0',
                        }}
                      >
                        {[14, 28, 12, 34, 20, 36, 24, 10, 32, 16, 30, 22, 28, 15, 32, 18].map((h, i) => (
                          <div
                            key={i}
                            style={{
                              width: '3.5px',
                              height: `${h}px`,
                              backgroundColor: '#38bdf8',
                              borderRadius: '2px',
                              boxShadow: '0 0 8px rgba(56, 189, 248, 0.5)',
                              animation: `waveBar ${0.75 + (i % 4) * 0.2}s ease-in-out infinite`,
                            }}
                          />
                        ))}
                      </div>

                      {/* Animated Audio Timeline Scrub Bar */}
                      <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', overflow: 'hidden', marginBottom: '8px' }}>
                        <div
                          style={{
                            height: '100%',
                            background: 'linear-gradient(90deg, #38bdf8, #a855f7)',
                            animation: 'audioScrub 4s linear infinite',
                          }}
                        />
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#cbd5e1' }}>
                        <span>PII Safety: <strong style={{ color: '#10b981' }}>Redacted</strong></span>
                        <span>Sentiment: <strong style={{ color: '#38bdf8' }}>Positive (98%)</strong></span>
                      </div>
                    </div>
                  )}

                  {/* 2. Inbox Peel: Live Email Triage with Laser Scanner */}
                  {prod.id === 'inbox-peel' && (
                    <div
                      style={{
                        padding: '16px',
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.12) 100%)',
                        borderRadius: '16px',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        marginBottom: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Laser Scanning Line across emails */}
                      <div
                        style={{
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          height: '2px',
                          background: 'linear-gradient(90deg, transparent, #10b981, #22d3ee, transparent)',
                          boxShadow: '0 0 12px #10b981',
                          animation: 'scanBeam 2.8s ease-in-out infinite',
                          pointerEvents: 'none',
                          zIndex: 5,
                        }}
                      />

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Mail size={15} color="#10b981" />
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc' }}>
                            Inbox Stream · Auto-Triage
                          </span>
                        </div>
                        <span style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                          3 NEW PARSED
                        </span>
                      </div>

                      {[
                        { title: 'Renewal contract update', badge: 'Urgent', color: '#ef4444', time: '1m ago' },
                        { title: 'API integration token', badge: 'Dev Ops', color: '#38bdf8', time: '4m ago' },
                        { title: 'Invoice payment proof', badge: 'Finance', color: '#10b981', time: '8m ago' }
                      ].map((item, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '7px 10px',
                            background: 'rgba(0, 0, 0, 0.35)',
                            borderRadius: '10px',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                          }}
                        >
                          <span style={{ fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 500 }}>
                            {item.title}
                          </span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '0.68rem', color: '#64748b' }}>{item.time}</span>
                            <span
                              style={{
                                fontSize: '0.68rem',
                                padding: '2px 8px',
                                borderRadius: '5px',
                                background: `${item.color}25`,
                                color: item.color,
                                fontWeight: 700,
                                border: `1px solid ${item.color}45`,
                              }}
                            >
                              {item.badge}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 3. Banana Bot: Dynamic Chat Simulation with Typing Dots */}
                  {prod.id === 'banana-bot' && (
                    <div
                      style={{
                        padding: '16px',
                        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(234, 88, 12, 0.12) 100%)',
                        borderRadius: '16px',
                        border: '1px solid rgba(245, 158, 11, 0.3)',
                        marginBottom: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        position: 'relative',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <MessageSquare size={15} color="#f59e0b" />
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc' }}>
                            Autonomous Voice & Chat
                          </span>
                        </div>
                        <span style={{ fontSize: '0.68rem', color: '#f59e0b', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                          LATENCY: 180ms
                        </span>
                      </div>

                      <div
                        style={{
                          alignSelf: 'flex-start',
                          background: 'rgba(255, 255, 255, 0.08)',
                          padding: '7px 12px',
                          borderRadius: '12px 12px 12px 2px',
                          fontSize: '0.78rem',
                          color: '#f8fafc',
                        }}
                      >
                        Can you update my delivery address to 4th Avenue?
                      </div>

                      <div
                        style={{
                          alignSelf: 'flex-end',
                          background: 'rgba(245, 158, 11, 0.25)',
                          border: '1px solid rgba(245, 158, 11, 0.45)',
                          padding: '7px 12px',
                          borderRadius: '12px 12px 2px 12px',
                          fontSize: '0.78rem',
                          color: '#fef3c7',
                          boxShadow: '0 0 15px rgba(245, 158, 11, 0.2)',
                        }}
                      >
                        Updated to 4th Avenue! Driver is notified.
                      </div>

                      {/* Live AI Typing Indicator */}
                      <div
                        style={{
                          alignSelf: 'flex-start',
                          background: 'rgba(255, 255, 255, 0.06)',
                          padding: '6px 12px',
                          borderRadius: '12px 12px 12px 2px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <span style={{ fontSize: '0.7rem', color: '#94a3b8', marginRight: '4px' }}>AI is replying</span>
                        {[0, 1, 2].map((dot) => (
                          <span
                            key={dot}
                            style={{
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              backgroundColor: '#f59e0b',
                              display: 'inline-block',
                              animation: `typingBounce 1.2s infinite ${dot * 0.2}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div style={{ marginBottom: '10px' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: prod.status === 'Available' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                        color: prod.status === 'Available' ? '#10b981' : '#f59e0b',
                        border: prod.status === 'Available' ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid rgba(245, 158, 11, 0.35)',
                        fontWeight: 700,
                      }}
                    >
                      {prod.status}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.55, marginBottom: '22px' }}>
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
                          <ArrowRight size={14} />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); onOpenDemo(); }}
                          className="btn-secondary"
                          style={{ padding: '10px 14px', fontSize: '0.85rem' }}
                        >
                          Live Demo
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={(e) => { e.stopPropagation(); onOpenDemo(); }}
                        className="btn-primary"
                        style={{
                          width: '100%',
                          padding: '11px 16px',
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

        {/* Dynamic Animated Dots Indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '28px' }}>
          {PRODUCTS_LIST.map((prod, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  width: isActive ? '34px' : '9px',
                  height: '9px',
                  borderRadius: '6px',
                  background: isActive ? prod.accentColor : 'rgba(255, 255, 255, 0.2)',
                  boxShadow: isActive ? `0 0 12px ${prod.accentColor}` : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  padding: 0,
                }}
                aria-label={`Go to slide ${i + 1}`}
                title={prod.title}
              />
            );
          })}
        </div>

        {/* Auto-rotation status hint */}
        <div style={{ textAlign: 'center', marginTop: '12px' }}>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
            {isPaused ? '⏸ Paused on hover' : '⚡ Auto-cycling every 4s · Tap cards or arrows to navigate'}
          </span>
        </div>
      </div>
    </section>
  );
};
