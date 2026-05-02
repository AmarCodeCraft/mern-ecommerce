import React from 'react';
import { motion } from 'framer-motion';
import PageShell from '../components/PageShell';

const brands = [
  { name:'Sony', tagline:'Premium audio & entertainment', products:45 },
  { name:'Apple', tagline:'Innovation at its finest', products:38 },
  { name:'Samsung', tagline:'Next-gen technology', products:52 },
  { name:'Bose', tagline:'Sound perfection', products:24 },
  { name:'Logitech', tagline:'Precision peripherals', products:31 },
  { name:'Razer', tagline:'For gamers, by gamers', products:28 },
];

const Brands = () => (
  <PageShell title="Our Brands" description="We partner with the world's leading tech brands." badge="Partners">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {brands.map((b,i)=>(
        <motion.a key={b.name} href="/products" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
          className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-card-hover)] transition-all text-center shadow-[var(--shadow-card)]">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-50 to-pink-50 border border-violet-200/40 flex items-center justify-center mx-auto mb-3">
            <span className="text-xl font-bold text-gradient font-['Outfit']">{b.name[0]}</span>
          </div>
          <h3 className="text-[15px] font-bold text-[var(--text-primary)] font-['Outfit']">{b.name}</h3>
          <p className="text-[13px] text-[var(--text-muted)] mt-1">{b.tagline}</p>
          <p className="text-[12px] text-violet-600 mt-2.5 font-medium">{b.products} Products</p>
        </motion.a>
      ))}
    </div>
  </PageShell>
);
export default Brands;
