import React from 'react';
import { cn } from './Skeleton';

const variants = {
  primary:   'bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-[var(--shadow-btn)] hover:shadow-[0_4px_16px_rgba(124,58,237,0.35)] hover:brightness-110',
  secondary: 'bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--bg-secondary)] shadow-[var(--shadow-card)]',
  outline:   'bg-transparent text-[var(--text-secondary)] border border-[var(--border)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]',
  ghost:     'bg-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-black/[0.03]',
  danger:    'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100',
};

const sizes = {
  sm: 'px-3.5 py-2 text-[12px] rounded-lg',
  md: 'px-5 py-2.5 text-[13px] rounded-xl',
  lg: 'px-7 py-3.5 text-[14px] rounded-xl',
};

const Button = ({ children, variant = 'primary', size = 'md', className, disabled, loading, icon: Icon, ...props }) => (
  <button
    className={cn(
      'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98]',
      variants[variant], sizes[size], className
    )}
    disabled={disabled || loading}
    {...props}
  >
    {loading && (
      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    )}
    {Icon && !loading && <Icon className="w-4 h-4" />}
    {children}
  </button>
);

export default Button;
