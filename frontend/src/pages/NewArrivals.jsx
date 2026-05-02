import React from 'react';
import PageShell from '../components/PageShell';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

const NewArrivals = () => {
  const { products } = useProducts();
  return (
    <PageShell title="New Arrivals" description="The latest additions to our premium collection." badge="✨ Just Dropped">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">{products.map(p=><ProductCard key={p._id} product={p}/>)}</div>
    </PageShell>
  );
};
export default NewArrivals;
