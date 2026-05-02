import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CreditCard, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();
  const [step, setStep] = useState(1);
  const [shipping, setShipping] = useState({name:'',address:'',city:'',zip:'',country:''});
  const [payment, setPayment] = useState({card:'',expiry:'',cvc:''});
  const tax=cartTotal*0.08, ship=cartTotal>100?0:15, total=cartTotal+tax+ship;

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen py-10">
      <Helmet><title>Checkout | ModernShop</title></Helmet>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-[var(--text-primary)] font-['Outfit'] mb-8">Checkout</h1>
        <div className="flex items-center gap-3 mb-10">
          {['Shipping','Payment','Confirm'].map((s,i)=>(
            <div key={s} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold transition-all ${step>i+1?'bg-green-500 text-white':step===i+1?'bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-[0_0_12px_rgba(124,58,237,0.3)]':'bg-[var(--bg-secondary)] text-[var(--text-faint)] border border-[var(--border)]'}`}>{i+1}</div>
              <span className={`text-[13px] font-medium ${step>=i+1?'text-[var(--text-primary)]':'text-[var(--text-faint)]'}`}>{s}</span>
              {i<2&&<div className={`w-10 h-px ${step>i+1?'bg-green-500':'bg-[var(--border)]'}`}/>}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div key={step} initial={{opacity:0,x:-16}} animate={{opacity:1,x:0}} className="lg:col-span-7">
            {step===1&&(<div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7 space-y-4 shadow-[var(--shadow-card)]">
              <h2 className="text-lg font-bold text-[var(--text-primary)] font-['Outfit'] flex items-center gap-2"><Truck className="w-5 h-5 text-violet-600"/>Shipping</h2>
              <Input label="Full name" placeholder="John Doe" value={shipping.name} onChange={e=>setShipping({...shipping,name:e.target.value})}/>
              <Input label="Address" placeholder="123 Main St" value={shipping.address} onChange={e=>setShipping({...shipping,address:e.target.value})}/>
              <div className="grid grid-cols-2 gap-3"><Input label="City" placeholder="NYC" value={shipping.city} onChange={e=>setShipping({...shipping,city:e.target.value})}/><Input label="ZIP" placeholder="10001" value={shipping.zip} onChange={e=>setShipping({...shipping,zip:e.target.value})}/></div>
              <Input label="Country" placeholder="United States" value={shipping.country} onChange={e=>setShipping({...shipping,country:e.target.value})}/>
              <Button variant="primary" size="lg" className="w-full" onClick={()=>setStep(2)}>Continue <ArrowRight className="w-4 h-4"/></Button>
            </div>)}
            {step===2&&(<div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7 space-y-4 shadow-[var(--shadow-card)]">
              <h2 className="text-lg font-bold text-[var(--text-primary)] font-['Outfit'] flex items-center gap-2"><CreditCard className="w-5 h-5 text-violet-600"/>Payment</h2>
              <Input label="Card number" placeholder="4242 4242 4242 4242" value={payment.card} onChange={e=>setPayment({...payment,card:e.target.value})}/>
              <div className="grid grid-cols-2 gap-3"><Input label="Expiry" placeholder="MM/YY" value={payment.expiry} onChange={e=>setPayment({...payment,expiry:e.target.value})}/><Input label="CVC" placeholder="123" value={payment.cvc} onChange={e=>setPayment({...payment,cvc:e.target.value})}/></div>
              <div className="flex gap-3"><Button variant="secondary" size="lg" onClick={()=>setStep(1)}>Back</Button><Button variant="primary" size="lg" className="flex-1" onClick={()=>setStep(3)}>Review <ArrowRight className="w-4 h-4"/></Button></div>
            </div>)}
            {step===3&&(<div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7 space-y-5 shadow-[var(--shadow-card)]">
              <h2 className="text-lg font-bold text-[var(--text-primary)] font-['Outfit']">Confirm Order</h2>
              <div className="border-b border-[var(--border)] pb-4 space-y-2"><p className="text-[13px] text-[var(--text-muted)]">Ship to: <span className="text-[var(--text-primary)]">{shipping.name}, {shipping.city}</span></p><p className="text-[13px] text-[var(--text-muted)]">Card: <span className="text-[var(--text-primary)]">•••• {payment.card.slice(-4)}</span></p></div>
              {cartItems.map(item=>(<div key={item._id} className="flex items-center gap-3"><div className="w-12 h-12 bg-[var(--bg-secondary)] rounded-lg overflow-hidden"><img src={item.image} alt="" className="w-full h-full object-cover"/></div><div className="flex-1"><p className="text-[13px] text-[var(--text-primary)] font-medium">{item.name}</p><p className="text-[11px] text-[var(--text-faint)]">Qty: {item.qty}</p></div><p className="text-[13px] font-medium text-gradient">${(item.price*item.qty).toFixed(2)}</p></div>))}
              <div className="flex gap-3 pt-3"><Button variant="secondary" size="lg" onClick={()=>setStep(2)}>Back</Button><Button variant="primary" size="lg" className="flex-1">Place Order — ${total.toFixed(2)}</Button></div>
            </div>)}
          </motion.div>
          <div className="lg:col-span-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7 lg:sticky lg:top-24 h-fit shadow-[var(--shadow-card)]">
            <h2 className="text-lg font-bold text-[var(--text-primary)] font-['Outfit'] mb-5">Summary</h2>
            <div className="space-y-3 text-[13px] border-b border-[var(--border)] pb-5 mb-5">
              <div className="flex justify-between text-[var(--text-muted)]"><span>Subtotal</span><span className="text-[var(--text-primary)]">${cartTotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-[var(--text-muted)]"><span>Shipping</span><span className="text-[var(--text-primary)]">{ship===0?'Free':'$'+ship.toFixed(2)}</span></div>
              <div className="flex justify-between text-[var(--text-muted)]"><span>Tax</span><span className="text-[var(--text-primary)]">${tax.toFixed(2)}</span></div>
            </div>
            <div className="flex justify-between items-center"><span className="font-bold text-[var(--text-primary)]">Total</span><span className="text-xl font-bold text-gradient">${total.toFixed(2)}</span></div>
            <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-[var(--text-faint)]"><ShieldCheck className="w-3.5 h-3.5 text-violet-600"/>Secure 256-bit checkout</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
