import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { MODULE_DESCRIPTIONS } from '../../data/mockData';
import Button from '../../components/common/Button';
import Card, { CardHeader, CardTitle, CardBody, CardFooter } from '../../components/common/Card';
import Badge from '../../components/common/Badge';

export default function ModulePlaceholder({ moduleKey: explicitKey }) {
  const navigate = useNavigate();
  const location = useLocation();

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const derivedKey = explicitKey || pathSegments[pathSegments.length - 1];

  const info = MODULE_DESCRIPTIONS[derivedKey] || {
    title: derivedKey.replace(/-/g, ' ').toUpperCase(),
    category: pathSegments[0]?.toUpperCase() || 'Procurement',
    description: 'This procurement module is scheduled for implementation in upcoming development sprints.',
    rfpStage: 'DPIIT Procurement Lifecycle',
    features: [
      'Interactive workflow forms',
      'Integration with GFR 2017 compliance checks',
      'Export to official Ministry formats',
      'FastAPI backend endpoint connection'
    ],
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              {info.category}
            </span>
            <ChevronRight className="h-3 w-3 text-slate-300" />
            <Badge variant="warning" size="xs">
              Day 2+ Milestone
            </Badge>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {info.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
            {info.description}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate('/dashboard')}
            icon={ArrowLeft}
          >
            Dashboard
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/ai-assistant')}
            icon={Sparkles}
          >
            Ask AI Co-Pilot
          </Button>
        </div>
      </div>

      {/* Main Content Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Module Details & Blueprint */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle subtitle="Planned capabilities conforming to DPIIT RFP specifications">
                Module Blueprint & Technical Scope
              </CardTitle>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-700">
                    RFP Stage Alignment:
                  </span>
                  <span className="text-xs font-mono font-medium text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {info.rfpStage}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {info.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                  Key Module Capabilities (Roadmap)
                </h4>
                <div className="space-y-2.5">
                  {info.features.map((feat, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-100 bg-white hover:border-slate-200 transition-colors"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="text-xs text-slate-700 font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <span>Frontend Foundation Ready for FastAPI integration</span>
              <span className="text-[11px] text-slate-400">Schema defined</span>
            </CardFooter>
          </Card>
        </div>

        {/* Right Column: Status & Architecture Note */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle subtitle="Development status">Module Lifecycle</CardTitle>
            </CardHeader>
            <CardBody className="space-y-4 text-xs">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-blue-900 space-y-1">
                <span className="font-semibold block">Day 1 Foundation Active</span>
                <p className="text-[11px] text-blue-800 leading-relaxed">
                  Route registered, sidebar integrated, and breadcrumb layout initialized.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Planned Backend:</span>
                  <span className="font-mono font-medium text-slate-800">
                    FastAPI REST / Pydantic
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Governance Rule:</span>
                  <span className="font-medium text-slate-800">
                    GFR 2017 & CVC Manual
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">State Storage:</span>
                  <span className="font-mono font-medium text-slate-800">
                    PostgreSQL / PgVector (Future)
                  </span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-[11px]">
                <strong>Developer Notice:</strong> Do not build complete form workflows or mock database connections until Day 2.
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
