import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FilePlus,
  FileText,
  FolderArchive,
  Sparkles,
  ArrowRight,
  Zap,
} from 'lucide-react';
import Card, { CardHeader, CardTitle, CardBody } from '../common/Card';

const ACTIONS = [
  {
    id: 'new-pr',
    title: 'Create New PR',
    subtitle: 'Initiate Purchase Requisition & BoQ',
    path: '/procurement/pr-indent',
    icon: FilePlus,
    accent: 'border-l-blue-800 hover:bg-blue-50/50',
    iconColor: 'bg-blue-100 text-blue-900',
  },
  {
    id: 'new-tender',
    title: 'Create Tender',
    subtitle: 'Draft RFP using GFR compliant templates',
    path: '/tenders/drafting',
    icon: FileText,
    accent: 'border-l-indigo-800 hover:bg-indigo-50/50',
    iconColor: 'bg-indigo-100 text-indigo-900',
  },
  {
    id: 'view-submissions',
    title: 'View Bid Submissions',
    subtitle: 'Access decrypted bidder submissions vault',
    path: '/bids/submissions',
    icon: FolderArchive,
    accent: 'border-l-slate-700 hover:bg-slate-50',
    iconColor: 'bg-slate-100 text-slate-800',
  },
  {
    id: 'open-ai',
    title: 'Open AI Assistant',
    subtitle: 'AI-assisted GFR scrutiny & RFP generation',
    path: '/ai-assistant',
    icon: Sparkles,
    accent: 'border-l-blue-600 hover:bg-blue-50/60',
    iconColor: 'bg-blue-600 text-white',
    badge: 'AI Co-Pilot',
  },
];

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-blue-900" />
          <CardTitle subtitle="Frequent procurement operations and fast-track workflows">
            Quick Actions
          </CardTitle>
        </div>
      </CardHeader>

      <CardBody className="p-4 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">
          {ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                type="button"
                onClick={() => navigate(action.path)}
                className={`p-3.5 rounded-lg border border-slate-200 border-l-4 ${action.accent} text-left transition-all duration-150 flex flex-col justify-between group cursor-pointer shadow-2xs hover:shadow-xs`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className={`p-2 rounded-lg ${action.iconColor} shrink-0`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  {action.badge && (
                    <span className="text-[10px] font-semibold bg-blue-100 text-blue-900 px-2 py-0.5 rounded-full border border-blue-200">
                      {action.badge}
                    </span>
                  )}
                </div>

                <div className="mt-3">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-900 transition-colors flex items-center justify-between">
                    <span>{action.title}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-blue-900 group-hover:translate-x-1 transition-all" />
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    {action.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
}

