import React, { useState } from 'react';
import { Sparkles, Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/landingData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header matching video */}
        <div className="section-badge">
          <span className="glass-pill">
            <Sparkles size={14} color="#38bdf8" />
            <span>Got Questions?</span>
          </span>
        </div>

        <h2 className="section-title">
          Frequently asked <span className="gradient-text-purple-cyan">questions</span>
        </h2>

        <p className="section-subtitle">
          Quick answers before you book a call.
        </p>

        {/* Accordion List */}
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="glass-panel"
                style={{
                  padding: '20px 24px',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  borderColor: isOpen ? 'rgba(56, 189, 248, 0.4)' : 'rgba(255, 255, 255, 0.08)',
                  background: isOpen ? 'rgba(26, 21, 56, 0.65)' : 'rgba(15, 17, 28, 0.6)',
                  transition: 'all 0.25s ease',
                }}
                onClick={() => toggleFAQ(faq.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#f8fafc', margin: 0 }}>
                    {faq.question}
                  </h3>

                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: isOpen ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: isOpen ? '#38bdf8' : '#94a3b8',
                      transition: 'all 0.2s',
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </div>

                {isOpen && (
                  <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
