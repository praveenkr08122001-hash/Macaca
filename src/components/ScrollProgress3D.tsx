import React from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollProgress3DProps {
  progress: number;
}

export const ScrollProgress3D: React.FC<ScrollProgress3DProps> = ({ progress }) => {
  const scrollToTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number | string) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 3D Top Glowing Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          zIndex: 100,
          background: 'rgba(255, 255, 255, 0.05)',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #7c3aed 0%, #06b6d4 50%, #10b981 100%)',
            boxShadow: '0 0 16px rgba(6, 182, 212, 0.8), 0 0 8px rgba(124, 58, 237, 0.6)',
            transition: 'width 0.1s cubic-bezier(0.1, 1, 0.3, 1)',
          }}
        />
      </div>

      {/* Floating 3D Scroll-to-Top Button (Appears when scrolled > 15%) */}
      <div
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 40,
          opacity: progress > 15 ? 1 : 0,
          transform: progress > 15 ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.85)',
          pointerEvents: progress > 15 ? 'auto' : 'none',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          cursor: 'pointer',
        }}
        title="Scroll to Top"
        role="button"
        aria-label="Scroll to top"
      >
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'rgba(15, 17, 28, 0.85)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.7), 0 0 20px rgba(56, 189, 248, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#38bdf8',
            transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(0, 0, 0, 0.8), 0 0 30px rgba(56, 189, 248, 0.5)';
            e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.8)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.7), 0 0 20px rgba(56, 189, 248, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.35)';
          }}
        >
          <ArrowUp size={20} />
        </div>
      </div>
    </>
  );
};
