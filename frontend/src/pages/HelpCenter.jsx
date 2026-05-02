import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import PageShell from '../components/PageShell';

const topics = [
  { title:'Getting Started', desc:'Create an account and place your first order.', articles:8 },
  { title:'Orders & Shipping', desc:'Track orders and delivery info.', articles:12 },
  { title:'Returns & Refunds', desc:'Hassle-free returns and refund policy.', articles:6 },
  { title:'Account & Security', desc:'Manage profile and settings.', articles:5 },
  { title:'Payment Methods', desc:'Accepted payment options.', articles:4 },
  { title:'Product Support', desc:'Tech help and warranty info.', articles:9 },
];

const HelpCenter = () => (
  <PageShell title="Help Center" description="Find answers to common questions.">
    <div className="max-w-xl mx-auto mb-10">
      <div className="relative"><Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-faint)]"/>
      <input placeholder="Search for help..." className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-xl pl-11 pr-4 py-3.5 text-[var(--text-primary)] placeholder-[var(--text-faint)] text-[14px] outline-none focus:ring-1 focus:ring-violet-500/20 focus:border-violet-500/40 transition-all shadow-[var(--shadow-card)]"/></div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {topics.map(t=>(
        <a key={t.title} href="#" className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-card-hover)] transition-all shadow-[var(--shadow-card)]">
          <h3 className="text-[14px] font-bold text-[var(--text-primary)] group-hover:text-violet-600 transition-colors">{t.title}</h3>
          <p className="text-[13px] text-[var(--text-muted)] mt-1.5">{t.desc}</p>
          <div className="mt-3 flex items-center gap-1 text-[11px] text-violet-600 font-medium">{t.articles} articles <ArrowRight className="w-3 h-3"/></div>
        </a>
      ))}
    </div>
  </PageShell>
);
export default HelpCenter;
