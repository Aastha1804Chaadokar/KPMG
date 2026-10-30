import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Eye, ArrowUpRight, FileCheck, ExternalLink } from 'lucide-react';
import Badge from '../common/Badge';
import Modal from '../common/Modal';
import Button from '../common/Button';
import Card, { CardHeader, CardTitle, CardFooter } from '../common/Card';

export default function RecentTendersTable({ tenders }) {
  const navigate = useNavigate();
  const [selectedTender, setSelectedTender] = useState(null);
  const [filterText, setFilterText] = useState('');

  const filteredTenders = tenders.filter((t) => {
    return (
      t.tenderId.toLowerCase().includes(filterText.toLowerCase()) ||
      t.title.toLowerCase().includes(filterText.toLowerCase()) ||
      t.department.toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <>
      <Card>
        <CardHeader
          action={
            <div className="flex items-center gap-2">
              <div className="relative hidden sm:block">
                <Search className="h-3.5 w-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter recent tenders..."
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  className="pl-8 pr-3 py-1.5 text-xs rounded-md border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-800 w-44"
                />
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => navigate('/tenders/list')}
                iconRight={ArrowUpRight}
              >
                View Master List
              </Button>
            </div>
          }
        >
          <div className="flex items-center gap-2">
            <CardTitle subtitle="Real-time status of active and recent procurement notices">
              Recent Tenders
            </CardTitle>
            <span className="text-[11px] font-mono bg-blue-50 text-blue-800 px-2 py-0.5 rounded border border-blue-200">
              Demo Records: {filteredTenders.length}
            </span>
          </div>
        </CardHeader>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4">Tender ID</th>
                <th className="py-3 px-4">Tender Title</th>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Last Updated</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredTenders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-400">
                    No tenders match the current filter criteria.
                  </td>
                </tr>
              ) : (
                filteredTenders.map((tender) => (
                  <tr
                    key={tender.tenderId}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="py-3.5 px-4 font-mono font-semibold text-blue-900 whitespace-nowrap">
                      {tender.tenderId}
                    </td>
                    <td className="py-3.5 px-4 max-w-xs font-medium text-slate-800">
                      <div className="line-clamp-1 group-hover:text-blue-900 transition-colors">
                        {tender.title}
                      </div>
                      <span className="text-[10px] text-slate-400">
                        Est. Value: {tender.estimatedValue} • Bids: {tender.bidsReceived}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 max-w-[180px] truncate">
                      {tender.department}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <Badge variant={tender.statusVariant}>{tender.status}</Badge>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap font-mono text-[11px]">
                      {tender.lastUpdated}
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <Button
                        size="xs"
                        variant="secondary"
                        onClick={() => setSelectedTender(tender)}
                        icon={Eye}
                      >
                        Inspect
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <CardFooter className="flex items-center justify-between">
          <span>Showing {filteredTenders.length} of {tenders.length} recent tenders</span>
          <span className="text-[11px] text-slate-400">Source: DPIIT Central Procurement Registry (Demo)</span>
        </CardFooter>
      </Card>

      {/* Tender Quick Inspection Modal */}
      {selectedTender && (
        <Modal
          isOpen={!!selectedTender}
          onClose={() => setSelectedTender(null)}
          title={`Tender Details • ${selectedTender.tenderId}`}
          maxWidth="max-w-2xl"
          footer={
            <>
              <Button variant="secondary" size="sm" onClick={() => setSelectedTender(null)}>
                Close Preview
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  setSelectedTender(null);
                  navigate('/tenders/list');
                }}
                iconRight={ExternalLink}
              >
                Go to Tender Workspace
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100 flex items-start gap-3">
              <FileCheck className="h-5 w-5 text-blue-800 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  {selectedTender.title}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Assigned Department: {selectedTender.department}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                  Tender Stage
                </span>
                <span className="font-semibold text-slate-800 mt-1 block">
                  {selectedTender.status}
                </span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                  Estimated Value
                </span>
                <span className="font-semibold text-blue-900 mt-1 block">
                  {selectedTender.estimatedValue}
                </span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                  Bids Received
                </span>
                <span className="font-semibold text-slate-800 mt-1 block">
                  {selectedTender.bidsReceived} Submissions
                </span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                  Last Updated
                </span>
                <span className="font-medium text-slate-700 mt-1 block font-mono text-[11px]">
                  {selectedTender.lastUpdated}
                </span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                  GFR Compliance
                </span>
                <span className="font-semibold text-emerald-700 mt-1 block">
                  Rule 161 Verified
                </span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                  Evaluation Method
                </span>
                <span className="font-semibold text-slate-800 mt-1 block">
                  Two-Stage QCBS / L1
                </span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded text-xs text-slate-600 border border-slate-200">
              <span className="font-semibold text-slate-800 block mb-1">
                Demo Workflow Note:
              </span>
              Full tender dossiers, BoQ matrices, technical comparative sheets, and vendor queries will be fully interactive in the subsequent development milestones.
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
