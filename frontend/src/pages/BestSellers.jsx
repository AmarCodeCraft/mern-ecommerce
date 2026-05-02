import React from 'react';
import PageShell from '../components/PageShell';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

const BestSellers = () => {
  const { products } = useProducts();
  return (
    <PageShell title="Best Sellers" description="Our most popular products, loved by thousands." badge="🏆 Top Rated">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">{[...products].sort((a,b)=>b.rating-a.rating).map(p=><ProductCard key={p._id} product={p}/>)}</div>
    </PageShell>
  );
};
export default BestSellers;
