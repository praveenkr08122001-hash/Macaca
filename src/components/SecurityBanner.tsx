import React from 'react';
import { ShieldCheck, Lock, FileCheck2, Database } from 'lucide-react';

export const SecurityBanner: React.FC = () => {
  return (
    <section className="section-wrapper" style={{ padding: '30px 0' }}>
      <div className="container">
        <div
          className="glass-panel"
          style={{
            padding: '44px 36px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(15, 17, 28, 0.95) 0%, rgba(20, 24, 45, 0.85) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(139, 92, 246, 0.1)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center',
          }}
        >
          {/* Left Text matching video */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
              <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: '#10b981', letterSpacing: '0.08em' }}>
                Bank-Grade Compliance
              </span>
            </div>

            <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', marginBottom: '12px' }}>
              Enterprise-grade security and control
            </h3>

            <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '500px' }}>
              Built for industries where data security is non-negotiable. Deploy on our cloud or within your own environment, with a clear record of every action.
            </p>
          </div>

          {/* Right Badges Grid matching video */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '14px',
            }}
          >
            {[
              { title: 'SOC 2 Type II certified', sub: 'Audited enterprise controls', icon: ShieldCheck, color: '#a855f7' },
              { title: 'HIPAA compliant', sub: 'Zero PII data exposure', icon: Lock, color: '#38bdf8' },
              { title: 'Instant audit trails', sub: 'Every token & prompt logged', icon: FileCheck2, color: '#10b981' },
              { title: 'Full data ownership', sub: 'Deploy on your own VPC', icon: Database, color: '#f59e0b' }
            ].map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div
                  key={i}
                  style={{
                    padding: '16px 14px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}
                >
                  <Icon size={20} color={badge.color} style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>
                      {badge.title}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                      {badge.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
