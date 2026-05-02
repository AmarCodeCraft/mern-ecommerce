import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const tax = cartTotal*0.08, shipping = cartTotal>0?15:0, total = cartTotal+tax+shipping;

  if (cartItems.length === 0) return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[var(--bg-primary)] px-4">
      <Helmet><title>Cart | ModernShop</title></Helmet>
      <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} className="text-center">
        <div className="w-20 h-20 bg-violet-50 border border-violet-200/40 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
        </div>
        <h2 className="text-xl font-bold text-[var(--text-primary)] font-['Outfit'] mb-1.5">Your cart is empty</h2>
        <p className="text-[var(--text-muted)] text-[14px] mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white px-7 py-3 rounded-xl font-semibold text-[14px] shadow-[var(--shadow-btn)]">Shop Now</Link>
      </motion.div>
    </div>
  );

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen py-10">
      <Helmet><title>Cart | ModernShop</title></Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-[var(--text-primary)] font-['Outfit'] mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            {cartItems.map((item,i)=>(
              <motion.div key={item._id} initial={{ opacity:0, x:-16 }} animate={{ opacity:1, x:0 }} transition={{ delay:i*0.08 }}
                className="bg-[var(--bg-card)] rounded-2xl p-5 flex flex-col sm:flex-row gap-5 border border-[var(--border)] shadow-[var(--shadow-card)]">
                <div className="w-full sm:w-28 h-28 bg-[var(--bg-secondary)] rounded-xl overflow-hidden flex-shrink-0"><img src={item.image} alt={item.name} className="w-full h-full object-cover" /></div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div><h3 className="text-[15px] font-semibold text-[var(--text-primary)]">{item.name}</h3><p className="text-[11px] text-violet-600 uppercase tracking-wider mt-0.5">Premium Audio</p></div>
                    <p className="text-[15px] font-bold text-gradient">${(item.price*item.qty).toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-[var(--border)] rounded-xl px-3 py-1.5 bg-[var(--bg-secondary)] w-28 justify-between">
                      <button onClick={()=>updateQuantity(item._id,Math.max(1,item.qty-1))} className="text-[var(--text-faint)] hover:text-[var(--text-primary)]"><Minus className="w-3.5 h-3.5"/></button>
                      <span className="text-[13px] font-medium text-[var(--text-primary)]">{item.qty}</span>
                      <button onClick={()=>updateQuantity(item._id,item.qty+1)} className="text-[var(--text-faint)] hover:text-[var(--text-primary)]"><Plus className="w-3.5 h-3.5"/></button>
                    </div>
                    <button onClick={()=>removeFromCart(item._id)} className="text-[var(--text-faint)] hover:text-red-500 transition-colors p-1.5"><Trash2 className="w-4 h-4"/></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity:0, x:16 }} animate={{ opacity:1, x:0 }} className="lg:col-span-4 bg-[var(--bg-card)] rounded-2xl p-7 border border-[var(--border)] lg:sticky lg:top-24 shadow-[var(--shadow-card)]">
            <h2 className="text-lg font-bold text-[var(--text-primary)] font-['Outfit'] mb-5">Order Summary</h2>
            <div className="space-y-3 text-[13px] mb-6 border-b border-[var(--border)] pb-6">
              <div className="flex justify-between"><span className="text-[var(--text-muted)]">Subtotal</span><span className="font-medium text-[var(--text-primary)]">${cartTotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-[var(--text-muted)]">Shipping</span><span className="font-medium text-[var(--text-primary)]">${shipping.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-[var(--text-muted)]">Tax</span><span className="font-medium text-[var(--text-primary)]">${tax.toFixed(2)}</span></div>
            </div>
            <div className="flex justify-between items-center mb-6"><span className="font-bold text-[var(--text-primary)]">Total</span><span className="text-xl font-bold text-gradient">${total.toFixed(2)}</span></div>
            <Link to="/checkout" className="w-full bg-gradient-to-r from-violet-600 to-pink-500 text-white py-3.5 rounded-xl font-semibold text-[14px] shadow-[var(--shadow-btn)] flex items-center justify-center gap-2 group hover:brightness-110 transition-all">Checkout <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></Link>
            <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-[var(--text-faint)]"><ShieldCheck className="w-3.5 h-3.5 text-violet-600" /> Secure encrypted checkout</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
