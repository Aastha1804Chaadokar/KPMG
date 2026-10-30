import React from 'react';

const VARIANTS = {
  primary: 'bg-blue-900 hover:bg-blue-950 text-white shadow-sm border border-transparent focus:ring-blue-800',
  secondary: 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 shadow-xs focus:ring-slate-300',
  outline: 'bg-transparent hover:bg-blue-50 text-blue-900 border border-blue-800 focus:ring-blue-700',
  ghost: 'bg-transparent hover:bg-slate-100 text-slate-600 focus:ring-slate-300',
  danger: 'bg-rose-700 hover:bg-rose-800 text-white shadow-sm border border-transparent focus:ring-rose-600',
  success: 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm border border-transparent focus:ring-emerald-600',
};

const SIZES = {
  xs: 'px-2 py-1 text-xs font-medium rounded',
  sm: 'px-3 py-1.5 text-xs font-medium rounded-md',
  md: 'px-4 py-2 text-sm font-medium rounded-md',
  lg: 'px-5 py-2.5 text-base font-medium rounded-md',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon,
  iconRight: IconRight,
  onClick,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${VARIANTS[variant] || VARIANTS.primary} ${SIZES[size] || SIZES.md} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      {children}
      {IconRight && <IconRight className="w-4 h-4 shrink-0" />}
    </button>
  );
}

