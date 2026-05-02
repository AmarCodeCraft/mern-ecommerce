import React from 'react';
import PageShell from '../components/PageShell';

const Terms = () => (
  <PageShell title="Terms & Conditions" description="Last updated: May 1, 2026" badge="Legal">
    <div className="max-w-3xl mx-auto">
      {[
        { t:'1. Acceptance', b:'By using ModernShop, you agree to these terms. If you disagree, please do not use our services.' },
        { t:'2. Accounts', b:'Provide accurate info. You are responsible for your account security and all activities under it.' },
        { t:'3. Orders & Payments', b:'Prices in USD, subject to change. We may cancel orders due to errors, stock issues, or suspected fraud.' },
        { t:'4. Shipping', b:'Delivery times are estimates. We are not responsible for carrier delays or customs processing.' },
        { t:'5. Returns', b:'30-day returns in original condition. Refunds processed within 5-10 business days.' },
        { t:'6. Intellectual Property', b:'All content is property of ModernShop. Do not reproduce without permission.' },
        { t:'7. Liability', b:'We are not liable for indirect or consequential damages. Total liability shall not exceed the product purchase price.' },
        { t:'8. Changes', b:'We may update these terms at any time. Continued use constitutes acceptance.' },
      ].map(s=><div key={s.t} className="mb-7"><h2 className="text-[16px] font-bold text-[var(--text-primary)] font-['Outfit'] mb-2">{s.t}</h2><p className="text-[13px] text-[var(--text-muted)] leading-relaxed">{s.b}</p></div>)}
    </div>
  </PageShell>
);
export default Terms;
