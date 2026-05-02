import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import PageShell from '../components/PageShell';

const faqs = [
  { q:'How long does shipping take?', a:'Standard 5-7 days. Express 2-3 days. Free on orders over $100.' },
  { q:'What is your return policy?', a:'30-day hassle-free returns. Items must be in original condition. We provide prepaid labels.' },
  { q:'Do you ship internationally?', a:'Yes, 50+ countries. International takes 7-14 business days.' },
  { q:'How do I track my order?', a:'Tracking number sent via email. Also available in your Dashboard.' },
  { q:'What payment methods do you accept?', a:'Visa, Mastercard, Amex, PayPal, Apple Pay, Google Pay. 256-bit SSL encrypted.' },
  { q:'Is my payment information secure?', a:'Yes. Industry-standard encryption. We never store full card details.' },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <PageShell title="Frequently Asked Questions" description="Quick answers to common questions." badge="FAQ">
      <div className="max-w-3xl mx-auto space-y-2.5">
        {faqs.map((f,i)=>(
          <div key={i} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
            <button onClick={()=>setOpen(open===i?null:i)} className="w-full px-5 py-4 flex justify-between items-center text-left">
              <span className="text-[14px] font-medium text-[var(--text-primary)]">{f.q}</span>
              <ChevronDown className={`w-4 h-4 text-[var(--text-faint)] transition-transform ${open===i?'rotate-180 text-violet-600':''}`}/>
            </button>
            {open===i&&<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} className="px-5 pb-4 text-[13px] text-[var(--text-muted)] leading-relaxed">{f.a}</motion.div>}
          </div>
        ))}
      </div>
    </PageShell>
  );
};
export default FAQ;
