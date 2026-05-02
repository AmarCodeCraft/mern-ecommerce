import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Package, Settings, LogOut, User, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  if (!user) return (<div className="min-h-[70vh] flex flex-col items-center justify-center"><p className="text-[var(--text-muted)] mb-4">Please sign in.</p><Link to="/login"><Button>Sign In</Button></Link></div>);

  const orders = [
    { id:'ORD-2026-001', date:'Apr 28', status:'Delivered', total:249.99, items:2 },
    { id:'ORD-2026-002', date:'Apr 15', status:'Shipped', total:129.99, items:1 },
    { id:'ORD-2026-003', date:'Mar 30', status:'Processing', total:549.00, items:3 },
  ];
  const sc = { Delivered:'text-green-700 bg-green-50 border-green-200', Shipped:'text-violet-700 bg-violet-50 border-violet-200', Processing:'text-amber-700 bg-amber-50 border-amber-200' };

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen py-10">
      <Helmet><title>Dashboard | ModernShop</title></Helmet>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7 mb-8 flex flex-col sm:flex-row items-center gap-5 shadow-[var(--shadow-card)]">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-xl font-bold text-white font-['Outfit'] shadow-[0_0_20px_rgba(124,58,237,0.25)]">{user.name?.charAt(0).toUpperCase()}</div>
          <div className="flex-1 text-center sm:text-left"><h1 className="text-xl font-bold text-[var(--text-primary)] font-['Outfit']">{user.name}</h1><p className="text-[13px] text-[var(--text-muted)]">{user.email}</p></div>
          <div className="flex gap-2"><Button variant="outline" size="sm" icon={Settings}>Settings</Button><Button variant="danger" size="sm" icon={LogOut} onClick={()=>{logout();navigate('/');}}>Logout</Button></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {[{icon:ShoppingBag,l:'Total Orders',v:'3'},{icon:Package,l:'Delivered',v:'1'},{icon:User,l:'Member Since',v:'Apr 2026'}].map((s,i)=>(
            <motion.div key={s.l} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:i*0.08}} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 shadow-[var(--shadow-card)]">
              <s.icon className="w-4 h-4 text-violet-600 mb-2"/><p className="text-xl font-bold text-[var(--text-primary)] font-['Outfit']">{s.v}</p><p className="text-[12px] text-[var(--text-muted)] mt-0.5">{s.l}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
          <div className="p-5 border-b border-[var(--border)]"><h2 className="text-lg font-bold text-[var(--text-primary)] font-['Outfit']">Recent Orders</h2></div>
          <div className="divide-y divide-[var(--border)]">
            {orders.map((o,i)=>(
              <motion.div key={o.id} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:i*0.08}} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-[var(--bg-secondary)]/50 transition-colors">
                <div><p className="text-[13px] font-medium text-[var(--text-primary)]">{o.id}</p><p className="text-[11px] text-[var(--text-faint)] mt-0.5">{o.date} · {o.items} items</p></div>
                <div className="flex items-center gap-3"><span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${sc[o.status]}`}>{o.status}</span><p className="text-[13px] font-bold text-gradient min-w-[70px] text-right">${o.total.toFixed(2)}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
