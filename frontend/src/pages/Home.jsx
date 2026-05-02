import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, RotateCcw, Shield, Lock, Award, Headphones, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
import { Skeleton } from '../components/ui/Skeleton';

const Home = () => {
  const { products, loading, error } = useProducts();
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      <Helmet><title>ModernShop | Premium Tech</title><meta name="description" content="Curated premium tech accessories." /></Helmet>

      {/* ═══ HERO ═══ */}
      <div className="relative overflow-hidden bg-[var(--bg-card)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-violet-500/[0.06] rounded-full blur-[100px]" />
          <div className="absolute bottom-[-20%] right-[-5%] w-[400px] h-[400px] bg-pink-500/[0.04] rounded-full blur-[90px]" />
          <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-violet-400/[0.03] rounded-full blur-[70px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 lg:pt-16 lg:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[480px]">
            <motion.div initial={{ opacity:0, x:-30 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.6 }} className="relative z-10">
              <div className="inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-[13px] font-medium text-violet-600 border border-violet-200/60 mb-7">
                ✨ New Collection 2026
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] mb-5 font-['Outfit'] leading-[1.1]">
                Step Into The<br/>
                <span className="text-gradient">Luminous</span><br/>
                <span className="text-gradient">Void.</span>
              </h1>
              <p className="text-[15px] text-[var(--text-muted)] max-w-md mb-8 leading-relaxed">
                Beautifully engineered tech essentials designed for the absolute peak of modern performance.
              </p>
              <div className="flex gap-3 mb-10">
                <a href="#featured" className="group inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white px-7 py-3.5 rounded-xl font-semibold text-[14px] hover:brightness-110 transition-all shadow-[var(--shadow-btn)]">
                  Shop Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a href="#featured" className="inline-flex items-center gap-2 bg-[var(--bg-card)] text-[var(--text-primary)] px-7 py-3.5 rounded-xl font-medium text-[14px] border border-[var(--border)] hover:bg-[var(--bg-secondary)] transition-all shadow-[var(--shadow-card)]">
                  Explore Features
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Truck, t:'Free Shipping', s:'On all orders' },
                  { icon: RotateCcw, t:'30-Day Returns', s:'No questions asked' },
                  { icon: Shield, t:'2-Year Warranty', s:'Premium quality' },
                  { icon: Lock, t:'Secure Checkout', s:'SSL encrypted' },
                ].map(({ icon:I, t, s })=>(
                  <div key={t} className="flex items-center gap-2.5">
                    <I className="w-4 h-4 text-violet-600 flex-shrink-0" />
                    <div><p className="text-[11px] font-semibold text-[var(--text-primary)] leading-tight">{t}</p><p className="text-[10px] text-[var(--text-faint)]">{s}</p></div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating products */}
            <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.7, delay:0.1 }} className="relative z-10 h-[420px] lg:h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="w-[300px] h-[300px] bg-violet-500/[0.06] rounded-full blur-[70px]" /></div>
              <motion.div initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.3 }} className="absolute z-30" style={{ top:'10%', left:'25%', width:'50%' }}>
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop" alt="Headphones" className="w-full drop-shadow-[0_20px_40px_rgba(124,58,237,0.15)] hover:scale-105 transition-transform duration-500" />
              </motion.div>
              <motion.div initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.45 }} className="absolute z-20 w-[42%] right-0 top-[5%]">
                <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500&auto=format&fit=crop" alt="Laptop" className="w-full rounded-xl drop-shadow-[0_15px_30px_rgba(124,58,237,0.1)] hover:scale-105 transition-transform duration-500" />
              </motion.div>
              <motion.div initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.6 }} className="absolute z-40 w-[25%] right-[5%] bottom-[18%]">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop" alt="Watch" className="w-full rounded-xl drop-shadow-[0_15px_30px_rgba(124,58,237,0.1)] hover:scale-105 transition-transform duration-500" />
              </motion.div>
              <motion.div initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.5 }} className="absolute z-20 w-[28%] left-[5%] bottom-[10%]">
                <img src="https://images.unsplash.com/photo-1590658268037-6bf12f032f55?q=80&w=400&auto=format&fit=crop" alt="Earbuds" className="w-full rounded-xl drop-shadow-[0_15px_30px_rgba(124,58,237,0.1)] hover:scale-105 transition-transform duration-500" />
              </motion.div>
              <div className="absolute bottom-0 right-0 flex items-center gap-3 z-50">
                <button className="w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-faint)] hover:text-violet-600 hover:border-violet-300 transition-all shadow-sm"><ChevronLeft className="w-4 h-4" /></button>
                <div className="flex gap-1.5"><span className="w-5 h-1 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full" /><span className="w-1.5 h-1 bg-gray-300 rounded-full" /><span className="w-1.5 h-1 bg-gray-300 rounded-full" /><span className="w-1.5 h-1 bg-gray-300 rounded-full" /></div>
                <button className="w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-faint)] hover:text-violet-600 hover:border-violet-300 transition-all shadow-sm"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══ CATEGORY CARDS ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name:'Headphones', deal:'Up to 30% Off', img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop', color:'from-violet-100 to-white' },
            { name:'Smart Watches', deal:'Up to 25% Off', img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300&auto=format&fit=crop', color:'from-pink-50 to-white' },
            { name:'Laptops', deal:'Up to 20% Off', img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=300&auto=format&fit=crop', color:'from-purple-50 to-white' },
            { name:'Accessories', deal:'Up to 15% Off', img:'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=300&auto=format&fit=crop', color:'from-fuchsia-50 to-white' },
          ].map((c,i)=>(
            <motion.a key={c.name} href="/products" initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
              className={`group relative bg-gradient-to-br ${c.color} border border-[var(--border)] rounded-2xl p-5 min-h-[150px] overflow-hidden hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300`}>
              <div className="relative z-10">
                <h3 className="text-[14px] font-bold text-[var(--text-primary)] font-['Outfit']">{c.name}</h3>
                <p className="text-[12px] text-violet-600 mt-0.5 font-medium">{c.deal}</p>
                <div className="mt-4 w-7 h-7 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
              <img src={c.img} alt={c.name} className="absolute right-0 bottom-0 h-[85%] w-auto object-contain opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* ═══ TRUST BAR ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 shadow-[var(--shadow-card)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { icon: Award, t:'Premium Quality', s:'Carefully selected products' },
              { icon: Truck, t:'Fast & Free Delivery', s:'On all orders over $50' },
              { icon: Star, t:'Trusted by 10K+', s:'Happy customers worldwide' },
              { icon: Headphones, t:'24/7 Support', s:"We're here to help" },
            ].map(({ icon:I, t, s })=>(
              <div key={t} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-200/40 flex items-center justify-center flex-shrink-0"><I className="w-4 h-4 text-violet-600" /></div>
                <div><p className="text-[13px] font-semibold text-[var(--text-primary)]">{t}</p><p className="text-[11px] text-[var(--text-faint)]">{s}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ FEATURED PRODUCTS ═══ */}
      <div id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex justify-between items-end mb-10 border-b border-[var(--border)] pb-5">
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-['Outfit']">Featured Products</h2>
            <p className="mt-1.5 text-[14px] text-[var(--text-muted)]">Carefully selected essentials for your workspace.</p>
          </div>
          <a href="/products" className="hidden sm:block text-violet-600 font-medium hover:text-violet-700 transition-colors text-[13px]">View all →</a>
        </div>
        {error && <div className="p-4 bg-red-50 text-red-600 border border-red-200 rounded-xl mb-8 text-[13px]">Error loading products: {error}</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {loading ? Array(4).fill(0).map((_,i)=><div key={i} className="space-y-3"><Skeleton className="h-[340px] w-full rounded-2xl" /><Skeleton className="h-3 w-2/3" /><Skeleton className="h-3 w-1/3" /></div>)
            : products.map(p => <ProductCard key={p._id} product={p} />)}
        </div>
      </div>

      {/* ═══ PROMO BANNER ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="relative bg-gradient-to-r from-violet-600 to-pink-500 rounded-2xl overflow-hidden p-10 md:p-14">
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage:'radial-gradient(circle at 20% 120%, rgba(255,255,255,0.3), transparent 50%)' }} />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div><h3 className="text-2xl md:text-3xl font-bold text-white font-['Outfit'] mb-2">Get 20% Off Your First Order</h3><p className="text-white/80 max-w-lg text-[15px]">Subscribe and unlock exclusive deals, early access, and member-only perks.</p></div>
            <div className="flex gap-3 w-full md:w-auto">
              <input type="email" placeholder="Enter your email" className="bg-white/[0.15] backdrop-blur-md border border-white/20 rounded-xl px-5 py-3.5 text-white placeholder-white/50 text-[13px] focus:ring-2 focus:ring-white/30 outline-none flex-1 md:w-56" />
              <button className="bg-white text-violet-600 px-6 py-3.5 rounded-xl font-bold text-[13px] hover:bg-violet-50 transition-colors flex-shrink-0 shadow-lg">Subscribe</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Home;
