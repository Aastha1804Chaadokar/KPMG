import React from 'react';
import { FilePlus, UploadCloud, CheckCircle2, FileSpreadsheet, Activity } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardBody, CardFooter } from '../common/Card';

const ACTIVITY_ICONS = {
  tender_created: {
    icon: FilePlus,
    color: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  doc_uploaded: {
    icon: UploadCloud,
    color: 'bg-purple-100 text-purple-800 border-purple-200',
  },
  approval_completed: {
    icon: CheckCircle2,
    color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
  eval_updated: {
    icon: FileSpreadsheet,
    color: 'bg-amber-100 text-amber-800 border-amber-200',
  },
};

export default function RecentActivities({ activities }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-blue-900" />
          <CardTitle subtitle="Chronological audit log of operations across DPIIT directorates">
            Recent Activities
          </CardTitle>
        </div>
      </CardHeader>

      <CardBody className="flex-1 p-4">
        <div className="flow-root">
          <ul className="-mb-6 space-y-4">
            {activities.map((act, idx) => {
              const config = ACTIVITY_ICONS[act.type] || ACTIVITY_ICONS.tender_created;
              const Icon = config.icon;
              const isLast = idx === activities.length - 1;

              return (
                <li key={act.id} className="relative flex items-start gap-3">
                  {/* Vertical connector line */}
                  {!isLast && (
                    <span
                      className="absolute top-6 left-3.5 -ml-px h-full w-0.5 bg-slate-200"
                      aria-hidden="true"
                    />
                  )}

                  {/* Icon circle */}
                  <div
                    className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full border shadow-2xs ${config.color} shrink-0`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </div>

                  {/* Activity Details */}
                  <div className="min-w-0 flex-1 pb-4">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold text-slate-900 truncate">
                        {act.title}
                      </p>
                      <span className="text-[10px] text-slate-400 font-mono whitespace-nowrap">
                        {act.timestamp}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {act.description}
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="font-medium text-slate-700">By: {act.author}</span>
                      <span>•</span>
                      <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px]">
                        {act.badge}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </CardBody>

      <CardFooter className="flex items-center justify-between">
        <span>Tamper-evident activity ledger</span>
        <span className="text-[11px] text-blue-800 font-medium cursor-pointer hover:underline">
          View Detailed Audit Log
        </span>
      </CardFooter>
    </Card>
  );
}
