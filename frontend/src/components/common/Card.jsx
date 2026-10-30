import React from 'react';

export default function Card({ children, className = '', hover = false }) {
  return (
    <div
      className={`bg-white rounded-lg border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-150 ${
        hover ? 'hover:shadow-sm hover:border-slate-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', action }) {
  return (
    <div className={`px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-4 ${className}`}>
      <div className="flex-1 min-w-0">{children}</div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function CardTitle({ children, className = '', subtitle }) {
  return (
    <div>
      <h3 className={`text-base font-semibold text-slate-900 tracking-tight ${className}`}>{children}</h3>
      {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
    </div>
  );
}

export function CardBody({ children, className = '' }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }) {
  return <div className={`px-5 py-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 ${className}`}>{children}</div>;
}

