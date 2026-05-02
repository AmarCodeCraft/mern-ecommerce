import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Skeleton = ({ className, ...props }) => (
  <div className={cn("animate-pulse rounded-xl bg-[var(--bg-secondary)]", className)} {...props} />
);
