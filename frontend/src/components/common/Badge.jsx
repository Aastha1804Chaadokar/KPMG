import React from 'react';

const VARIANT_MAP = {
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  warning: 'bg-amber-50 text-amber-700 border-amber-200',
  info: 'bg-blue-50 text-blue-700 border-blue-200',
  secondary: 'bg-slate-100 text-slate-700 border-slate-200',
  danger: 'bg-rose-50 text-rose-700 border-rose-200',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  neutral: 'bg-gray-100 text-gray-700 border-gray-200',
};

export default function Badge({ children, variant = 'neutral', size = 'sm', className = '' }) {
  const sizeClasses = size === 'xs' ? 'px-1.5 py-0.5 text-[11px]' : 'px-2.5 py-0.5 text-xs';
  const variantClass = VARIANT_MAP[variant] || VARIANT_MAP.neutral;

  return (
    <span
      className={`inline-flex items-center gap-1 font-medium rounded-full border tracking-wide ${sizeClasses} ${variantClass} ${className}`}
    >
      {children}
    </span>
  );
}

