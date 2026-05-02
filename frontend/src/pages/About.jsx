import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Globe, Heart } from 'lucide-react';
import PageShell from '../components/PageShell';

const About = () => (
  <PageShell title="About Us" description="We're on a mission to redefine how people experience technology." badge="Our Story">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
      <div>
        <h2 className="text-xl font-bold text-[var(--text-primary)] font-['Outfit'] mb-3">Built for the modern professional</h2>
        <p className="text-[14px] text-[var(--text-muted)] leading-relaxed mb-3">ModernShop was founded in 2024 with a simple belief: technology should be beautiful, functional, and accessible.</p>
        <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">Our team hand-selects every product, ensuring it meets our exacting standards for quality, design, and performance.</p>
      </div>
      <div className="bg-gradient-to-br from-violet-50 to-pink-50 border border-violet-200/40 rounded-2xl p-10 text-center">
        <p className="text-4xl font-extrabold text-gradient font-['Outfit']">10K+</p>
        <p className="text-[var(--text-muted)] mt-2 text-[14px]">Happy customers worldwide</p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {[{icon:Users,t:'Customer First',s:'Every decision starts with our customers.'},{icon:Zap,t:'Innovation',s:'We push boundaries in design & tech.'},{icon:Globe,t:'Global Reach',s:'Shipping to 50+ countries.'},{icon:Heart,t:'Quality',s:'Only the finest products make the cut.'}].map(({icon:I,t,s},i)=>(
        <motion.div key={t} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 shadow-[var(--shadow-card)]">
          <I className="w-5 h-5 text-violet-600 mb-2"/><h3 className="text-[14px] font-bold text-[var(--text-primary)]">{t}</h3><p className="text-[13px] text-[var(--text-muted)] mt-1">{s}</p>
        </motion.div>
      ))}
    </div>
  </PageShell>
);
export default About;
