export interface AgentNode {
  id: string;
  name: string;
  role: string;
  iconName: string;
  angle: number;
  color: string;
  status: 'active' | 'syncing' | 'processing';
  metrics: string;
  description: string;
}

export interface ProductItem {
  id: string;
  tag: string;
  title: string;
  url: string;
  status: 'Available' | 'Coming soon';
  description: string;
  accentColor: string;
  gradient: string;
  mockupType: 'audit' | 'chat' | 'email';
}

export interface EnterpriseTab {
  id: string;
  number: string;
  shortTitle: string;
  title: string;
  sub: string;
  impactLabel: string;
  impactValue: string;
  impactSub: string;
  accentColor: string;
  bullets: string[];
}

export const AGENT_NODES: AgentNode[] = [
  {
    id: 'headphones',
    name: 'Voice Agent',
    role: 'Live Telephony & Call Auditing',
    iconName: 'Headphones',
    angle: 270, // top
    color: '#38bdf8',
    status: 'active',
    metrics: 'QA 96/100',
    description: 'Real-time call sentiment, turn-by-turn analysis and compliance verification.'
  },
  {
    id: 'mail',
    name: 'Inbox Peel',
    role: 'Email Prioritization & Triage',
    iconName: 'Mail',
    angle: 330,
    color: '#10b981',
    status: 'active',
    metrics: 'Reply in 4 min',
    description: 'Instant urgency classification and automated triage for incoming emails.'
  },
  {
    id: 'mic',
    name: 'Banana Bot',
    role: 'Autonomous Voice Synthesis',
    iconName: 'Mic',
    angle: 30,
    color: '#f59e0b',
    status: 'active',
    metrics: 'Voice 24/7',
    description: 'Sub-second natural conversational voice bot handling queries round the clock.'
  },
  {
    id: 'shield',
    name: 'Compliance Sentinel',
    role: 'Policy Adherence & Redaction',
    iconName: 'Shield',
    angle: 90,
    color: '#a855f7',
    status: 'active',
    metrics: '100% Pass',
    description: 'Continuous monitoring of PII safety and institutional compliance guardrails.'
  },
  {
    id: 'chart',
    name: 'Audit Analytics',
    role: 'Telemetry & Operational Trends',
    iconName: 'BarChart2',
    angle: 150,
    color: '#38bdf8',
    status: 'syncing',
    metrics: '1M+ calls',
    description: 'Aggregates team performance and delivers proactive coaching insights.'
  },
  {
    id: 'chat',
    name: 'Customer Care',
    role: 'Multi-Channel Chat Resolution',
    iconName: 'MessageSquare',
    angle: 210,
    color: '#06b6d4',
    status: 'active',
    metrics: '98% CSAT',
    description: 'Context-aware resolution across chat, WhatsApp, and messaging channels.'
  }
];

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: 'audit-chimp',
    tag: 'AI Call Auditing System',
    title: 'Audit Chimp',
    url: 'macaca.ai/audit-chimp',
    status: 'Available',
    description: 'Turn conversations into actionable insights. Audit, analyze and improve every customer call.',
    accentColor: '#38bdf8',
    gradient: 'from-blue-600/30 via-indigo-600/20 to-purple-700/30',
    mockupType: 'audit',
  },
  {
    id: 'inbox-peel',
    tag: 'Email Analytics Software',
    title: 'Inbox Peel',
    url: 'macaca.ai/inbox-peel',
    status: 'Coming soon',
    description: 'Analyze and prioritize your inbox. Spot urgent sender intent before delays occur.',
    accentColor: '#10b981',
    gradient: 'from-emerald-500/25 to-teal-800/25',
    mockupType: 'email',
  },
  {
    id: 'banana-bot',
    tag: 'Voice AI Agents',
    title: 'Banana Bot',
    url: 'macaca.ai/banana-bot',
    status: 'Coming soon',
    description: 'Automate responses and resolve queries across all channels, so customers are happy 24/7.',
    accentColor: '#f59e0b',
    gradient: 'from-amber-500/30 via-orange-500/20 to-yellow-600/20',
    mockupType: 'chat',
  }
];

export const ENTERPRISE_TABS: EnterpriseTab[] = [
  {
    id: 'tab-cx',
    number: '01',
    shortTitle: 'Customer Experience',
    title: 'Autonomous Customer Experience (CX) Optimization',
    sub: 'AI agents that dynamically adapt, learn, and personalize customer journeys across channels.',
    impactLabel: 'IMPACT',
    impactValue: '50%',
    impactSub: 'Higher CSAT, reduced churn, and up to 50% lower support costs.',
    accentColor: '#38bdf8',
    bullets: [
      'Tailors responses based on user intent, past interactions, and sentiment in real time',
      'Automates routine queries while escalating high-impact cases with full context',
      'Continuously improves based on feedback and customer behavior'
    ]
  },
  {
    id: 'tab-process',
    number: '02',
    shortTitle: 'Process Automation',
    title: 'AI-Driven Business Process Automation',
    sub: 'Autonomous agent mesh that monitors, manages, and optimizes internal workflows across departments.',
    impactLabel: 'IMPACT',
    impactValue: '10x Faster',
    impactSub: 'Increased operational efficiency, faster turnaround times, and near-zero error rates.',
    accentColor: '#a855f7',
    bullets: [
      'Automates complex tasks like invoice processing, HR onboarding, and IT ticket resolution',
      'Coordinates across systems (ERP, CRM, DBs) without manual intervention',
      'Makes decisions and takes actions based on policy, data, and outcomes'
    ]
  },
  {
    id: 'tab-decision',
    number: '03',
    shortTitle: 'Decision Intelligence',
    title: 'Enterprise Decision Intelligence',
    sub: 'Agentic AI that continuously gathers data, runs simulations, and recommends or executes strategic decisions.',
    impactLabel: 'IMPACT',
    impactValue: 'Lower risk',
    impactSub: 'Faster, more confident executive decisions with lower risk and greater agility.',
    accentColor: '#f59e0b',
    bullets: [
      'Predicts market shifts, supply chain risks, and financial impacts using real-time data',
      'Drivers scenario-based recommendations backed by probabilistic reasoning',
      'Acts as a co-pilot to leadership, alerting, advising, and auto-acting when authorized'
    ]
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Connect',
    description: 'Link your voice system, inbox, or CRM. We support all major platforms with instant integration.',
    icon: 'Cable'
  },
  {
    number: '02',
    title: 'Understand',
    description: 'Agents read tone, emotion and intent across every call, email and customer chat in real time.',
    icon: 'Brain'
  },
  {
    number: '03',
    title: 'Act',
    description: 'Routine work is automated. Urgent cases go to your team with full context and recommendations.',
    icon: 'Zap'
  },
  {
    number: '04',
    title: 'Improve',
    description: 'Feedback and outcome data feed back into the system, so agents improve with every iteration.',
    icon: 'TrendingUp'
  }
];

export const TEAMS_DATA = [
  {
    id: 'care',
    name: 'Customer care',
    icon: 'Headphones',
    desc: 'Understand every query, track customer sentiment, and resolve issues with full context.'
  },
  {
    id: 'sales',
    name: 'Sales',
    icon: 'TrendingUp',
    desc: 'Spot leads and urgent opportunities in calls and emails before they go cold.'
  },
  {
    id: 'compliance',
    name: 'Compliance',
    icon: 'Shield',
    desc: 'Monitor policy adherence in real-time and generate audit trails instantly.'
  },
  {
    id: 'core-ops',
    name: 'Core operations',
    icon: 'Sliders',
    desc: 'Automate status updates, dispatching, and IT tickets across your existing systems.'
  }
];

export const BENTO_FEATURES = [
  {
    id: 'feat-1',
    title: 'Monkey-smart analytics',
    desc: 'Clear, actionable insights for every customer interaction without manual tagging.',
    icon: 'Brain',
    color: '#a855f7'
  },
  {
    id: 'feat-2',
    title: 'Performance that swings',
    desc: 'Track your KPIs live and get smart recommendations that elevate team productivity.',
    icon: 'TrendingUp',
    color: '#38bdf8'
  },
  {
    id: 'feat-3',
    title: 'Always-on compliance',
    desc: 'Full automated compliance checks and audit trails for every single conversation.',
    icon: 'ShieldCheck',
    color: '#10b981'
  },
  {
    id: 'feat-4',
    title: 'Blazing-fast processing',
    desc: 'Handle thousands of interactions with sub-second replies and zero lag.',
    icon: 'Zap',
    color: '#f59e0b'
  },
  {
    id: 'feat-5',
    title: 'Empowered agents',
    desc: 'AI suggestions and live guidance help human teams resolve complex cases faster.',
    icon: 'Users',
    color: '#ec4899'
  },
  {
    id: 'feat-6',
    title: 'Flexible deployment',
    desc: 'Use our secure cloud or your own VPC. Your data stays strictly yours.',
    icon: 'Cloud',
    color: '#06b6d4'
  }
];

export const PERFORMANCE_STATS = [
  { value: '1M+', label: 'Calls analyzed daily', color: '#38bdf8' },
  { value: '95%', label: 'Customer satisfaction', color: '#a855f7' },
  { value: '500+', label: 'Enterprise clients', color: '#38bdf8' },
  { value: '40%', label: 'Efficiency improvement', color: '#10b981' }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    badge: '98% higher first-call resolution',
    quote: 'Macaca AI completely changed how our team operates. Call audits that used to take days now happen in real-time with flawless accuracy.',
    author: 'Anjali R.',
    role: 'Head of Customer Experience',
    company: 'FinTech Enterprise'
  },
  {
    id: 't-2',
    badge: '45% faster response times',
    quote: 'Inbox Peel is a game-changer for reducing response time by prioritizing what actually matters before tickets escalate to management.',
    author: 'Marcus H.',
    role: 'VP of Operations',
    company: 'SaaS Platform'
  },
  {
    id: 't-3',
    badge: 'Real-time compliance peace of mind',
    quote: 'The live call auditing with Audit Chimp has reduced our QA review cycle drastically while maintaining our strict banking compliance.',
    author: 'Elena D.',
    role: 'QA Director',
    company: 'Global BPO'
  }
];

export const FAQS = [
  {
    id: 'faq-1',
    question: 'Is our data secure?',
    answer: 'Yes. We operate with strict enterprise encryption (AES-256 in transit and at rest), SOC 2 Type II certification, and a zero-data retention guarantee on base LLM models.'
  },
  {
    id: 'faq-2',
    question: 'How quickly can we get started?',
    answer: 'You can connect your voice system, email inbox, or CRM in under 15 minutes. Custom VPC deployments typically take 2-4 business days.'
  },
  {
    id: 'faq-3',
    question: 'Can we use our own models?',
    answer: 'Yes! Macaca AI supports multi-model flexibility: connect your private Azure OpenAI, Google Cloud Vertex, AWS Bedrock, or self-hosted open-weights models.'
  },
  {
    id: 'faq-4',
    question: 'Which product should we start with?',
    answer: 'Most enterprises start with Audit Chimp for instant call auditing or Inbox Peel for email prioritization, then expand to autonomous Banana Bot agents.'
  },
  {
    id: 'faq-5',
    question: 'Do AI agents replace our team?',
    answer: 'No. Macaca AI acts like an organized workforce multiplier that handles repetitive triage, audits, and routine calls, freeing your human experts for high-empathy, critical decisions.'
  }
];
