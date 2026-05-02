import React from 'react';
import PageShell from '../components/PageShell';

const Privacy = () => (
  <PageShell title="Privacy Policy" description="Last updated: May 1, 2026" badge="Legal">
    <div className="max-w-3xl mx-auto">
      {[
        { t:'1. Information We Collect', b:'We collect information you provide directly — name, email, shipping address, and payment info. We also collect usage data like browsing history and device information.' },
        { t:'2. How We Use Your Info', b:'To process orders, personalize your experience, send order updates, and improve our platform. You can opt out of marketing emails at any time.' },
        { t:'3. Data Protection', b:'We use SSL encryption, secure payment processing, and regular security audits. Payment info is never stored on our servers.' },
        { t:'4. Third-Party Sharing', b:'We do not sell your data. We share only with shipping carriers and payment processors necessary to fulfill your orders.' },
        { t:'5. Your Rights', b:'You can access, correct, or delete your personal data at any time from your account dashboard or by contacting support.' },
        { t:'6. Contact', b:'Questions? Email privacy@modernshop.com or visit our Contact page.' },
      ].map(s=><div key={s.t} className="mb-7"><h2 className="text-[16px] font-bold text-[var(--text-primary)] font-['Outfit'] mb-2">{s.t}</h2><p className="text-[13px] text-[var(--text-muted)] leading-relaxed">{s.b}</p></div>)}
    </div>
  </PageShell>
);
export default Privacy;
