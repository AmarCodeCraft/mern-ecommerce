import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageShell from '../components/PageShell';

const cats = [
  { name:'Headphones & Audio', count:24, img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', color:'from-violet-50 to-white' },
  { name:'Smart Watches', count:18, img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop', color:'from-pink-50 to-white' },
  { name:'Laptops & Tablets', count:15, img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=400&auto=format&fit=crop', color:'from-purple-50 to-white' },
  { name:'Keyboards & Mice', count:22, img:'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=400&auto=format&fit=crop', color:'from-fuchsia-50 to-white' },
  { name:'Phone Accessories', count:30, img:'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=400&auto=format&fit=crop', color:'from-indigo-50 to-white' },
  { name:'Desk & Workspace', count:12, img:'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop', color:'from-rose-50 to-white' },
];

const Categories = () => (
  <PageShell title="Categories" description="Browse products by category." badge="Browse">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {cats.map((c,i)=>(
        <motion.a key={c.name} href="/products" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
          className={`group relative bg-gradient-to-br ${c.color} border border-[var(--border)] rounded-2xl p-6 min-h-[170px] overflow-hidden hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-card-hover)] transition-all`}>
          <h3 className="text-[15px] font-bold text-[var(--text-primary)] font-['Outfit']">{c.name}</h3>
          <p className="text-[13px] text-violet-600 mt-1 font-medium">{c.count} products</p>
          <div className="mt-3 flex items-center gap-1 text-[13px] text-violet-600 font-medium group-hover:gap-2 transition-all">Browse <ArrowRight className="w-3.5 h-3.5"/></div>
          <img src={c.img} alt={c.name} className="absolute right-0 bottom-0 h-[80%] w-auto object-contain opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"/>
        </motion.a>
      ))}
    </div>
  </PageShell>
);
export default Categories;
