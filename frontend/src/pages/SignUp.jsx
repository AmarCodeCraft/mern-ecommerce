import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
  const navigate = useNavigate();
  const { register, loading, error, user, clearError } = useAuth();
  const [form, setForm] = useState({ name:'', email:'', password:'', confirmPassword:'' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => { if (user) navigate('/'); }, [user, navigate]);
  useEffect(() => { if (error) clearError(); }, [form]);

  const validate = () => { const e={}; if(!form.name.trim())e.name='Required'; if(!form.email.trim())e.email='Required'; else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))e.email='Invalid'; if(!form.password)e.password='Required'; else if(form.password.length<6)e.password='Min 6'; if(form.password!==form.confirmPassword)e.confirmPassword='No match'; return e; };
  const handleBlur = f => { setTouched(p=>({...p,[f]:true})); setErrors(p=>({...p,[f]:validate()[f]})); };
  const handleChange = (f,v) => { setForm(p=>({...p,[f]:v})); if(touched[f])setErrors(p=>({...p,[f]:undefined})); };
  const handleSubmit = async e => { e.preventDefault(); setTouched({name:true,email:true,password:true,confirmPassword:true}); const v=validate(); setErrors(v); if(Object.keys(v).length>0)return; try{await register(form.name,form.email,form.password);navigate('/');}catch{} };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-secondary)] px-4 py-16 relative overflow-hidden">
      <Helmet><title>Create Account | ModernShop</title></Helmet>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-violet-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="w-full max-w-[420px] relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block text-2xl font-bold tracking-tighter font-['Outfit']"><span className="text-[var(--text-primary)]">Modern</span><span className="text-gradient">Shop</span>.</Link>
          <h1 className="text-2xl font-bold text-[var(--text-primary)] font-['Outfit'] mt-6 mb-1.5">Create your account</h1>
          <p className="text-[var(--text-muted)] text-[14px]">Join thousands of happy shoppers.</p>
        </div>
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7 shadow-[var(--shadow-card)]">
          {error && <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-5 text-[13px] text-red-600">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <Input label="Full name" icon={User} placeholder="John Doe" value={form.name} onChange={e=>handleChange('name',e.target.value)} onBlur={()=>handleBlur('name')} error={touched.name?errors.name:undefined} />
            <Input label="Email" type="email" icon={Mail} placeholder="you@example.com" value={form.email} onChange={e=>handleChange('email',e.target.value)} onBlur={()=>handleBlur('email')} error={touched.email?errors.email:undefined} />
            <Input label="Password" type="password" icon={Lock} placeholder="••••••••" value={form.password} onChange={e=>handleChange('password',e.target.value)} onBlur={()=>handleBlur('password')} error={touched.password?errors.password:undefined} />
            <Input label="Confirm password" type="password" icon={Lock} placeholder="••••••••" value={form.confirmPassword} onChange={e=>handleChange('confirmPassword',e.target.value)} onBlur={()=>handleBlur('confirmPassword')} error={touched.confirmPassword?errors.confirmPassword:undefined} />
            <Button type="submit" variant="primary" size="lg" className="w-full" loading={loading}>Create Account <ArrowRight className="w-4 h-4" /></Button>
          </form>
          <p className="text-[11px] text-[var(--text-faint)] text-center mt-5">By signing up, you agree to our Terms and Privacy Policy.</p>
        </div>
        <p className="text-center text-[13px] text-[var(--text-faint)] mt-6">Already have an account? <Link to="/login" className="text-violet-600 hover:text-violet-700 font-medium">Sign in</Link></p>
      </motion.div>
    </div>
  );
};
export default SignUp;
