import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const PageShell = ({ title, description, badge, children }) => (
  <div className="bg-[var(--bg-primary)] min-h-screen">
    <Helmet>
      <title>{title} | ModernShop</title>
      {description && <meta name="description" content={description} />}
    </Helmet>

    <div className="relative border-b border-[var(--border)] overflow-hidden bg-[var(--bg-card)]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/[0.04] rounded-full blur-[80px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {badge && (
            <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-[11px] font-semibold text-violet-600 border border-violet-200/60 mb-4 tracking-wide">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] font-['Outfit'] tracking-tight">{title}</h1>
          {description && <p className="text-[var(--text-muted)] mt-3 max-w-2xl text-[15px] leading-relaxed">{description}</p>}
        </motion.div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {children}
    </div>
  </div>
);

export default PageShell;
