import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageShell from '../components/PageShell';

const posts = [
  { title:'The Future of Wireless Audio in 2026', excerpt:'Exploring spatial audio, lossless streaming, and next-gen headphones.', date:'Apr 28, 2026', tag:'Technology' },
  { title:'How to Build the Perfect Home Office', excerpt:'A guide to ergonomic setups, lighting, and essential tech.', date:'Apr 20, 2026', tag:'Workspace' },
  { title:'Why We Only Sell Premium Products', excerpt:'Our founder explains the philosophy behind our curated approach.', date:'Apr 12, 2026', tag:'Company' },
  { title:'5 Must-Have Laptop Accessories', excerpt:'From docking stations to keyboards — essentials every pro needs.', date:'Apr 5, 2026', tag:'Guides' },
];

const Blog = () => (
  <PageShell title="Blog" description="Insights, guides, and stories from the team." badge="Read">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {posts.map((p,i)=>(
        <motion.article key={p.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
          className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-card-hover)] transition-all cursor-pointer shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-3 mb-3"><span className="text-[11px] font-medium text-violet-600 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-200/50">{p.tag}</span><span className="text-[11px] text-[var(--text-faint)]">{p.date}</span></div>
          <h3 className="text-[15px] font-bold text-[var(--text-primary)] font-['Outfit'] group-hover:text-violet-600 transition-colors">{p.title}</h3>
          <p className="text-[13px] text-[var(--text-muted)] mt-2 line-clamp-2">{p.excerpt}</p>
          <div className="mt-3 flex items-center gap-1 text-[13px] text-violet-600 font-medium group-hover:gap-2 transition-all">Read more <ArrowRight className="w-3.5 h-3.5"/></div>
        </motion.article>
      ))}
    </div>
  </PageShell>
);
export default Blog;
