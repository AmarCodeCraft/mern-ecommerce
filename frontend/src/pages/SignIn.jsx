import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
  const navigate = useNavigate();
  const { login, loading, error, user, clearError } = useAuth();
  const [form, setForm] = useState({ email:'', password:'' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => { if (user) navigate('/'); }, [user, navigate]);
  useEffect(() => { if (error) clearError(); }, [form]);

  const validate = () => { const e={}; if(!form.email.trim())e.email='Email is required'; else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))e.email='Enter a valid email'; if(!form.password)e.password='Password is required'; else if(form.password.length<6)e.password='Min 6 characters'; return e; };
  const handleBlur = f => { setTouched(p=>({...p,[f]:true})); setErrors(p=>({...p,[f]:validate()[f]})); };
  const handleChange = (f,v) => { setForm(p=>({...p,[f]:v})); if(touched[f])setErrors(p=>({...p,[f]:undefined})); };
  const handleSubmit = async e => { e.preventDefault(); setTouched({email:true,password:true}); const v=validate(); setErrors(v); if(Object.keys(v).length>0)return; try{await login(form.email,form.password);navigate('/');}catch{} };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-secondary)] px-4 py-16 relative overflow-hidden">
      <Helmet><title>Sign In | ModernShop</title></Helmet>
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-pink-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="w-full max-w-[420px] relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block text-2xl font-bold tracking-tighter font-['Outfit']"><span className="text-[var(--text-primary)]">Modern</span><span className="text-gradient">Shop</span>.</Link>
          <h1 className="text-2xl font-bold text-[var(--text-primary)] font-['Outfit'] mt-6 mb-1.5">Welcome back</h1>
          <p className="text-[var(--text-muted)] text-[14px]">Sign in to access your account and orders.</p>
        </div>
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7 shadow-[var(--shadow-card)]">
          {error && <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-5 text-[13px] text-red-600">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <Input label="Email address" type="email" icon={Mail} placeholder="you@example.com" value={form.email} onChange={e=>handleChange('email',e.target.value)} onBlur={()=>handleBlur('email')} error={touched.email?errors.email:undefined} />
            <Input label="Password" type="password" icon={Lock} placeholder="••••••••" value={form.password} onChange={e=>handleChange('password',e.target.value)} onBlur={()=>handleBlur('password')} error={touched.password?errors.password:undefined} />
            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 text-violet-600 focus:ring-violet-500/20" /><span className="text-[13px] text-[var(--text-muted)]">Remember me</span></label>
              <a href="#" className="text-[13px] text-violet-600 hover:text-violet-700 transition-colors">Forgot password?</a>
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full mt-1" loading={loading}>Sign In <ArrowRight className="w-4 h-4" /></Button>
          </form>
          <div className="relative my-6"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[var(--border)]" /></div><div className="relative flex justify-center text-[11px]"><span className="bg-[var(--bg-card)] px-3 text-[var(--text-faint)] uppercase tracking-wider">or continue with</span></div></div>
          <div className="grid grid-cols-2 gap-2.5">
            <Button variant="outline" size="md" className="text-[12px]">
              <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </Button>
            <Button variant="outline" size="md" className="text-[12px]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </Button>
          </div>
        </div>
        <p className="text-center text-[13px] text-[var(--text-faint)] mt-6">Don't have an account? <Link to="/register" className="text-violet-600 hover:text-violet-700 font-medium">Create one</Link></p>
      </motion.div>
    </div>
  );
};
export default SignIn;
