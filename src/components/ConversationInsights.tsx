import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Send } from 'lucide-react';

interface ConversationInsightsProps {
  onOpenDemo: () => void;
}

export const ConversationInsights: React.FC<ConversationInsightsProps> = ({ onOpenDemo }) => {
  const [activeCustomer, setActiveCustomer] = useState('Sarah Johnson');
  const [inputMessage, setInputMessage] = useState('');

  const customers = [
    { name: 'Sarah Johnson', topic: 'Order Tracking', time: 'Just now', badge: 'Active' },
    { name: 'Mike Chen', topic: 'Refund Inquiry', time: '2m ago', badge: 'Resolved' },
    { name: 'Priya Sharma', topic: 'Password Reset', time: '5m ago', badge: 'Auto' },
    { name: 'David Lee', topic: 'Billing Issue', time: '8m ago', badge: 'Tier-2' },
  ];

  return (
    <section className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Column matching video */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <span className="glass-pill">
                <Sparkles size={14} color="#38bdf8" />
                <span>Live Auditing & Intelligence</span>
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
              }}
            >
              Smarter <span className="gradient-text-purple-cyan">Conversations</span>.<br />
              Deeper Insights.
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.65, marginBottom: '28px' }}>
              From sentiment analysis to compliance monitoring, Audit Chimp gives you complete clarity into every customer interaction across channels.
            </p>

            {/* Checkpoints from video */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {[
                'Understand customer queries',
                'Track sentiment and emotion',
                'Detect urgent and important messages',
                'Integrate with your existing tools'
              ].map((text, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'rgba(56, 189, 248, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CheckCircle2 size={16} color="#38bdf8" />
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f8fafc' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <button onClick={onOpenDemo} className="btn-primary" style={{ padding: '12px 26px' }}>
              <span>Explore Audit Chimp</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column: Exact Dashboard UI mockup from video */}
          <div
            className="glass-panel"
            style={{
              padding: '20px',
              borderRadius: '24px',
              background: 'rgba(15, 18, 30, 0.95)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 35px rgba(56, 189, 248, 0.1)',
            }}
          >
            {/* Top Bar matching video */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '14px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>
                  Macaca <span style={{ color: '#38bdf8' }}>AI</span>
                </span>
                <span style={{ fontSize: '0.72rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 600 }}>
                  Dashboard
                </span>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Knowledge Base</span>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Settings</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>Auto-pilot On</span>
              </div>
            </div>

            {/* Split Panel: Inbox list & Chat Thread */}
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '14px', minHeight: '260px' }}>
              
              {/* Left Customer List */}
              <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.06)', paddingRight: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Live Queue
                </div>
                {customers.map((c, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveCustomer(c.name)}
                    style={{
                      padding: '8px',
                      borderRadius: '8px',
                      background: activeCustomer === c.name ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                      border: activeCustomer === c.name ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f8fafc', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {c.name}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>{c.topic}</div>
                    <div style={{ fontSize: '0.62rem', color: '#64748b' }}>{c.time}</div>
                  </div>
                ))}
              </div>

              {/* Right Chat Stream */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {/* User message */}
                  <div style={{ alignSelf: 'flex-start', maxWidth: '85%', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '12px 12px 12px 2px', padding: '10px 14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginBottom: '2px' }}>{activeCustomer}</div>
                    <div style={{ fontSize: '0.825rem', color: '#f1f5f9' }}>
                      "Sure! Here's my order number: #ORD-10492"
                    </div>
                  </div>

                  {/* AI response */}
                  <div style={{ alignSelf: 'flex-end', maxWidth: '88%', background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.18) 0%, rgba(124, 58, 237, 0.2) 100%)', borderRadius: '12px 12px 2px 12px', padding: '12px 14px', border: '1px solid rgba(56, 189, 248, 0.35)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#38bdf8' }}>Audit Chimp Agent</span>
                      <span style={{ fontSize: '0.62rem', color: '#10b981' }}>Verified via CRM</span>
                    </div>
                    <div style={{ fontSize: '0.825rem', color: '#f8fafc', lineHeight: 1.45 }}>
                      "Thanks! Your order is scheduled for delivery today by 3:00 PM via FedEx Priority. I've sent live tracking to your mobile."
                    </div>
                  </div>
                </div>

                {/* Input Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    background: 'rgba(0,0,0,0.4)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    marginTop: '14px',
                  }}
                >
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type a message or trigger an action..."
                    style={{
                      flex: 1,
                      background: 'none',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '0.8rem',
                      outline: 'none',
                    }}
                  />
                  <button
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      background: '#38bdf8',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#000',
                    }}
                  >
                    <Send size={14} />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
