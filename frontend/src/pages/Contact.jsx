import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import PageShell from '../components/PageShell';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Contact = () => (
  <PageShell title="Contact Us" description="We'd love to hear from you." badge="Support">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7 space-y-4 shadow-[var(--shadow-card)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><Input label="First name" placeholder="John"/><Input label="Last name" placeholder="Doe"/></div>
        <Input label="Email" type="email" icon={Mail} placeholder="you@example.com"/>
        <div className="space-y-1.5"><label className="block text-[13px] font-medium text-[var(--text-secondary)]">Message</label><textarea rows={4} placeholder="How can we help?" className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 text-[13px] text-[var(--text-primary)] placeholder-[var(--text-faint)] outline-none focus:ring-1 focus:ring-violet-500/20 focus:border-violet-500/40 transition-all resize-none"/></div>
        <Button variant="primary" size="lg">Send Message</Button>
      </div>
      <div className="space-y-4">
        {[{icon:Mail,l:'Email',v:'support@modernshop.com'},{icon:Phone,l:'Phone',v:'+1 (555) 123-4567'},{icon:MapPin,l:'Address',v:'123 Tech Ave, San Francisco'}].map(({icon:I,l,v})=>(
          <div key={l} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 flex items-start gap-3 shadow-[var(--shadow-card)]">
            <div className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-200/40 flex items-center justify-center flex-shrink-0"><I className="w-4 h-4 text-violet-600"/></div>
            <div><p className="text-[13px] font-bold text-[var(--text-primary)]">{l}</p><p className="text-[13px] text-[var(--text-muted)] mt-0.5">{v}</p></div>
          </div>
        ))}
      </div>
    </div>
  </PageShell>
);
export default Contact;
