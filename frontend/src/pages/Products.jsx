import React from 'react';
import PageShell from '../components/PageShell';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
import { Skeleton } from '../components/ui/Skeleton';
import { SlidersHorizontal } from 'lucide-react';

const Products = () => {
  const { products, loading } = useProducts();
  const filters = ['All','Audio','Wearables','Workspace','Accessories'];
  return (
    <PageShell title="Shop All" description="Browse our entire collection of premium tech essentials." badge="Shop">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-52 flex-shrink-0">
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 sticky top-24 shadow-[var(--shadow-card)]">
            <h3 className="text-[13px] font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4"><SlidersHorizontal className="w-4 h-4 text-violet-600"/>Filters</h3>
            <div className="space-y-1">{filters.map((f,i)=><button key={f} className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-all ${i===0?'bg-violet-50 text-violet-600 font-medium border border-violet-200/50':'text-[var(--text-muted)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'}`}>{f}</button>)}</div>
            <div className="mt-5 pt-4 border-t border-[var(--border)]">
              <h4 className="text-[11px] text-[var(--text-faint)] uppercase tracking-wider mb-2">Price Range</h4>
              <div className="flex gap-2"><input placeholder="$0" className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg px-3 py-2 text-[12px] text-[var(--text-primary)] outline-none"/><input placeholder="$500" className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg px-3 py-2 text-[12px] text-[var(--text-primary)] outline-none"/></div>
            </div>
          </div>
        </aside>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-5">
            <p className="text-[13px] text-[var(--text-muted)]">{products.length} products</p>
            <select className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none shadow-sm"><option>Featured</option><option>Price: Low → High</option><option>Price: High → Low</option></select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{loading?Array(6).fill(0).map((_,i)=><Skeleton key={i} className="h-[360px] rounded-2xl"/>):products.map(p=><ProductCard key={p._id} product={p}/>)}</div>
        </div>
      </div>
    </PageShell>
  );
};
export default Products;
