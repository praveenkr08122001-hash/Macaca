import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { ConversationInsights } from './components/ConversationInsights';
import { EnterpriseSolutions } from './components/EnterpriseSolutions';
import { HowItWorks } from './components/HowItWorks';
import { BuiltForTeams } from './components/BuiltForTeams';
import { WhyMacaca } from './components/WhyMacaca';
import { PerformanceMetrics } from './components/PerformanceMetrics';
import { Testimonials } from './components/Testimonials';
import { SecurityBanner } from './components/SecurityBanner';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { CookieBanner } from './components/CookieBanner';
import { ScrollProgress3D } from './components/ScrollProgress3D';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoEmail, setDemoEmail] = useState('');
  const { scrollProgress } = useSmoothScroll();

  const handleOpenDemo = (email?: string) => {
    if (email) setDemoEmail(email);
    setIsDemoOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#06070a', color: '#f8fafc', position: 'relative', overflowX: 'clip' }}>
      {/* 3D WebGL Three.js Interactive Starfield & Core Scene */}

      {/* 3D Scroll Progress and Back-to-Top Action */}
      <ScrollProgress3D progress={scrollProgress} />

      {/* Top Navbar */}
      <Navbar onOpenDemo={() => handleOpenDemo()} />

      {/* Hero Section with True Orbiting Planets */}
      <Hero onOpenDemo={() => handleOpenDemo()} />

      {/* Meet the products with 3D Coverflow Transitions */}
      <ProductShowcase onOpenDemo={() => handleOpenDemo()} />

      {/* Smarter Conversations, Deeper Insights */}
      <ConversationInsights onOpenDemo={() => handleOpenDemo()} />

      {/* Enterprise AI Solutions with Hover to Expand */}
      <EnterpriseSolutions onOpenDemo={() => handleOpenDemo()} />

      {/* How it works */}
      <HowItWorks />

      {/* Built for every team */}
      <BuiltForTeams />

      {/* Why Macaca AI? */}
      <WhyMacaca />

      {/* Performance you can measure */}
      <PerformanceMetrics />

      {/* What our clients say */}
      <Testimonials />

      {/* Enterprise-grade security and control */}
      <SecurityBanner />

      {/* Frequently asked questions */}
      <FAQSection />

      {/* Ready to transform your business? CTA */}
      <CTASection onOpenDemo={(email) => handleOpenDemo(email)} />

      {/* Footer */}
      <Footer />

      {/* Interactive Demo Modal */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        initialEmail={demoEmail}
      />

      {/* Cookie Consent "Accept All" Banner */}
      <CookieBanner />
    </div>
  );
}

export default App;
