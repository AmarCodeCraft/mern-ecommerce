import React, { forwardRef, useState } from 'react';
import { cn } from './Skeleton';
import { Eye, EyeOff } from 'lucide-react';

const Input = forwardRef(({ label, error, icon: Icon, type = 'text', className, containerClassName, ...props }, ref) => {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className={cn('space-y-1.5', containerClassName)}>
      {label && <label className="block text-[13px] font-medium text-[var(--text-secondary)]">{label}</label>}
      <div className="relative">
        {Icon && <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10"><Icon className={cn('w-4 h-4', error ? 'text-red-400' : 'text-[var(--text-faint)]')} /></div>}
        <input
          ref={ref}
          type={isPassword ? (show ? 'text' : 'password') : type}
          className={cn(
            'w-full bg-[var(--bg-card)] border rounded-xl py-3 text-[13px] text-[var(--text-primary)] placeholder-[var(--text-faint)] transition-all duration-200 outline-none',
            Icon ? 'pl-10' : 'pl-4',
            isPassword ? 'pr-11' : 'pr-4',
            error ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500/20' : 'border-[var(--border)] focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 hover:border-[var(--border-hover)]',
            className
          )}
          {...props}
        />
        {isPassword && (
          <button type="button" onClick={() => setShow(!show)} className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[var(--text-faint)] hover:text-[var(--text-secondary)] transition-colors">
            {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>
      {error && <p className="text-[11px] text-red-500 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500" />{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
