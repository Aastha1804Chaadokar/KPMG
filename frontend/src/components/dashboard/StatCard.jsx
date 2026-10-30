import React from 'react';
import { TrendingUp, Clock, AlertCircle, FileSpreadsheet } from 'lucide-react';

const ICON_MAP = {
  'total-tenders': FileSpreadsheet,
  'active-tenders': Clock,
  'pending-approvals': AlertCircle,
  'bids-eval': TrendingUp,
};

const BORDER_ACCENT = {
  blue: 'border-l-blue-800 text-blue-900',
  emerald: 'border-l-emerald-600 text-emerald-800',
  amber: 'border-l-amber-600 text-amber-800',
  indigo: 'border-l-indigo-700 text-indigo-900',
};

const ICON_BG = {
  blue: 'bg-blue-50 text-blue-800',
  emerald: 'bg-emerald-50 text-emerald-700',
  amber: 'bg-amber-50 text-amber-700',
  indigo: 'bg-indigo-50 text-indigo-700',
};

export default function StatCard({ stat }) {
  const Icon = ICON_MAP[stat.id] || FileSpreadsheet;
  const accentClass = BORDER_ACCENT[stat.color] || BORDER_ACCENT.blue;
  const iconBg = ICON_BG[stat.color] || ICON_BG.blue;

  return (
    <div
      className={`bg-white rounded-lg border border-slate-200/90 border-l-4 ${accentClass} p-5 shadow-xs hover:shadow-sm transition-all duration-150`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            {stat.title}
          </span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight text-slate-900 font-sans">
              {stat.value}
            </span>
          </div>
        </div>

        <div className={`p-2.5 rounded-lg ${iconBg} shrink-0`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="font-medium text-slate-700">{stat.change}</span>
        <span className="text-slate-400 text-[11px]">{stat.period}</span>
      </div>
      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{stat.description}</p>
    </div>
  );
}

