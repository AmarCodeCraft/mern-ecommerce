import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Star, ShieldCheck, Truck, ArrowLeft, Plus, Minus } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import { Skeleton } from '../components/ui/Skeleton';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState('features');
  const product = products.find(p => p._id === id);

  if (loading) return (<div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12"><Skeleton className="h-[550px] w-full rounded-2xl" /><div className="space-y-5"><Skeleton className="h-10 w-3/4" /><Skeleton className="h-5 w-1/4" /></div></div>);
  if (!product) return <div className="text-center py-32 text-lg text-[var(--text-primary)]">Product not found</div>;

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pb-20">
      <Helmet><title>{product.name} | ModernShop</title></Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-[13px] text-[var(--text-muted)] hover:text-[var(--text-primary)] mb-7 group"><ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-0.5 transition-transform" /> Back</Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="lg:sticky lg:top-24 bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-[var(--shadow-card)] group">
            <div className="aspect-[4/5] relative"><img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
          </motion.div>
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}>
            <p className="text-[12px] font-semibold tracking-widest uppercase text-violet-600 mb-2">Premium Audio</p>
            <h1 className="text-3xl font-bold text-[var(--text-primary)] font-['Outfit'] mb-3">{product.name}</h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">{[...Array(5)].map((_,i)=><Star key={i} className={`w-4 h-4 ${i<Math.floor(product.rating)?'text-amber-500 fill-current':'text-gray-200'}`}/>)}</div>
              <span className="text-[13px] text-[var(--text-muted)]">{product.numReviews} reviews</span>
            </div>
            <p className="text-2xl font-bold text-gradient mb-6">${product.price.toFixed(2)}</p>
            <p className="text-[14px] text-[var(--text-muted)] leading-relaxed mb-8">Experience unparalleled sound quality and exquisite craftsmanship.</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <div className="flex items-center justify-between border border-[var(--border)] rounded-xl px-4 py-3 sm:w-28 bg-[var(--bg-secondary)]">
                <button onClick={()=>setQty(q=>Math.max(1,q-1))} className="text-[var(--text-faint)] hover:text-[var(--text-primary)]"><Minus className="w-4 h-4"/></button>
                <span className="text-[14px] font-medium text-[var(--text-primary)]">{qty}</span>
                <button onClick={()=>setQty(q=>q+1)} className="text-[var(--text-faint)] hover:text-[var(--text-primary)]"><Plus className="w-4 h-4"/></button>
              </div>
              <button onClick={()=>addToCart(product,qty)} className="flex-1 bg-gradient-to-r from-violet-600 to-pink-500 text-white px-8 py-3.5 rounded-xl font-semibold text-[14px] hover:brightness-110 shadow-[var(--shadow-btn)] transition-all">Add to Cart — ${(product.price*qty).toFixed(2)}</button>
            </div>
            <div className="grid grid-cols-2 gap-4 py-5 border-y border-[var(--border)] mb-8">
              <div className="flex items-center gap-2.5"><Truck className="w-4 h-4 text-violet-600"/><span className="text-[13px] text-[var(--text-secondary)]">Free Shipping</span></div>
              <div className="flex items-center gap-2.5"><ShieldCheck className="w-4 h-4 text-violet-600"/><span className="text-[13px] text-[var(--text-secondary)]">2-Year Warranty</span></div>
            </div>
            <div className="space-y-3">
              {['features','specifications','shipping'].map(t=>(
                <div key={t} className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--bg-card)] shadow-[var(--shadow-card)]">
                  <button onClick={()=>setTab(tab===t?'':t)} className="w-full px-5 py-3.5 flex justify-between items-center text-[14px] font-medium text-[var(--text-primary)]"><span className="capitalize">{t}</span><Plus className={`w-4 h-4 text-[var(--text-faint)] transition-transform ${tab===t?'rotate-45 text-violet-600':''}`}/></button>
                  {tab===t&&<div className="px-5 pb-4 text-[13px] text-[var(--text-muted)]">{t==='features'&&"Active noise cancellation, 40-hour battery, spatial audio."}{t==='specifications'&&"Weight: 250g. Drivers: 40mm. Bluetooth 5.3."}{t==='shipping'&&"Express 2-3 days. Free on all orders."}</div>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
