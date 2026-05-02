import React from 'react';
import PageShell from '../components/PageShell';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

const Deals = () => {
  const { products } = useProducts();
  return (
    <PageShell title="Deals & Offers" description="Limited-time discounts on premium tech." badge="🔥 Hot Deals">
      <div className="bg-gradient-to-r from-violet-50 to-pink-50 border border-[var(--border-accent)] rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div><h3 className="text-[16px] font-bold text-[var(--text-primary)] font-['Outfit']">Flash Sale — Ends in 12:45:32</h3><p className="text-[13px] text-[var(--text-muted)]">Up to 40% off select items.</p></div>
        <span className="text-3xl font-extrabold text-gradient font-['Outfit']">40% OFF</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">{products.map(p=><ProductCard key={p._id} product={{...p,price:+(p.price*0.7).toFixed(2)}}/>)}</div>
    </PageShell>
  );
};
export default Deals;
