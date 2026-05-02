import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import PageShell from '../components/PageShell';

const jobs = [
  { title:'Senior Frontend Engineer', dept:'Engineering', loc:'Remote', type:'Full-time' },
  { title:'Product Designer', dept:'Design', loc:'San Francisco', type:'Full-time' },
  { title:'Backend Engineer', dept:'Engineering', loc:'Remote', type:'Full-time' },
  { title:'Marketing Manager', dept:'Marketing', loc:'New York', type:'Full-time' },
  { title:'Support Lead', dept:'Support', loc:'Remote', type:'Full-time' },
];

const Careers = () => (
  <PageShell title="Careers" description="Join our team and help shape the future of e-commerce." badge="We're Hiring">
    <div className="space-y-3">
      {jobs.map((j,i)=>(
        <motion.div key={j.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}}
          className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-card-hover)] transition-all group shadow-[var(--shadow-card)]">
          <div><h3 className="text-[14px] font-bold text-[var(--text-primary)] group-hover:text-violet-600 transition-colors">{j.title}</h3><p className="text-[12px] text-[var(--text-muted)] mt-0.5">{j.dept}</p></div>
          <div className="flex items-center gap-3 text-[12px] text-[var(--text-faint)]">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/>{j.loc}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3"/>{j.type}</span>
            <button className="bg-violet-50 text-violet-600 border border-violet-200/50 px-3.5 py-1 rounded-lg text-[12px] font-medium hover:bg-violet-100 transition-all">Apply</button>
          </div>
        </motion.div>
      ))}
    </div>
  </PageShell>
);
export default Careers;
