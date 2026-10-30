import React from 'react';
import {
  DASHBOARD_STATS,
  RECENT_TENDERS,
  PENDING_APPROVALS,
  RECENT_ACTIVITIES,
} from '../../data/mockData';
import StatCard from '../../components/dashboard/StatCard';
import RecentTendersTable from '../../components/dashboard/RecentTendersTable';
import PendingApprovalsTable from '../../components/dashboard/PendingApprovalsTable';
import RecentActivities from '../../components/dashboard/RecentActivities';
import QuickActions from '../../components/dashboard/QuickActions';
import { Info } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Dashboard Page Header */}
      <div className="bg-white p-5 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Procurement Management Dashboard
            </h1>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200">
              FY 2026-27
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Overview of procurement activities and tender operations.
          </p>
        </div>

        {/* Demo Notice Banner */}
        <div className="flex items-center gap-2 bg-amber-50/80 border border-amber-200 px-3 py-2 rounded-lg text-xs text-amber-900 self-start md:self-auto">
          <Info className="h-4 w-4 text-amber-700 shrink-0" />
          <div>
            <span className="font-semibold block sm:inline">Frontend Prototype: </span>
            <span className="text-amber-800">All figures and records represent synthetic demo data.</span>
          </div>
        </div>
      </div>

      {/* STATISTIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DASHBOARD_STATS.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* DASHBOARD SECTIONS */}
      {/* Row 1: Quick Actions & Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <QuickActions />
        </div>
        <div className="lg:col-span-1">
          <RecentActivities activities={RECENT_ACTIVITIES} />
        </div>
      </div>

      {/* Row 2: Recent Tenders Table */}
      <div>
        <RecentTendersTable tenders={RECENT_TENDERS} />
      </div>

      {/* Row 3: Pending Approvals Table */}
      <div>
        <PendingApprovalsTable approvals={PENDING_APPROVALS} />
      </div>
    </div>
  );
}
