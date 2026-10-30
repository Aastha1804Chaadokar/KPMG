import React, { useState } from 'react';
import { CheckCircle2, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import Card, { CardHeader, CardTitle, CardFooter } from '../common/Card';

export default function PendingApprovalsTable({ approvals: initialApprovals }) {
  const [approvalsList, setApprovalsList] = useState(initialApprovals);
  const [activeApproval, setActiveApproval] = useState(null);
  const [approvedSuccessId, setApprovedSuccessId] = useState(null);

  const handleApprove = (item) => {
    setApprovalsList((prev) => prev.filter((a) => a.referenceId !== item.referenceId));
    setActiveApproval(null);
    setApprovedSuccessId(item.referenceId);

    setTimeout(() => {
      setApprovedSuccessId(null);
    }, 4000);
  };

  return (
    <>
      <Card>
        <CardHeader
          action={
            <div className="flex items-center gap-2">
              <span className="text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-medium">
                {approvalsList.length} Action(s) Required
              </span>
            </div>
          }
        >
          <div className="flex items-center gap-2">
            <CardTitle subtitle="Sanctions, BQC criteria, and evaluation clearances awaiting sign-off">
              Pending Approvals
            </CardTitle>
          </div>
        </CardHeader>

        {approvedSuccessId && (
          <div className="mx-5 my-2 p-2.5 bg-emerald-50 border border-emerald-200 rounded-md text-xs text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>
              Approval successfully recorded for Reference <strong>{approvedSuccessId}</strong> (Demo simulation).
            </span>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4">Reference ID</th>
                <th className="py-3 px-4">Procurement Stage</th>
                <th className="py-3 px-4">Assigned To</th>
                <th className="py-3 px-4">Pending Since</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {approvalsList.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-400">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 mx-auto mb-1" />
                    All pending approvals have been cleared in this session!
                  </td>
                </tr>
              ) : (
                approvalsList.map((item) => (
                  <tr key={item.referenceId} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-semibold text-slate-900 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span>{item.referenceId}</span>
                        {item.priority === 'High' && (
                          <span className="w-2 h-2 rounded-full bg-rose-500" title="High Priority" />
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Ref: {item.tenderRef}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-800">
                      <div>{item.procurementStage}</div>
                      <span className="text-[10px] text-slate-400">{item.department}</span>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="font-medium text-slate-800">{item.assignedTo}</div>
                      <span className="text-[10px] text-slate-400">{item.role}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap font-mono text-[11px]">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3 text-slate-400" />
                        {item.pendingSince}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <Button
                        size="xs"
                        variant="primary"
                        onClick={() => setActiveApproval(item)}
                      >
                        Review
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <CardFooter className="flex items-center justify-between">
          <span>Multi-tier delegation adhering to Manual for Procurement</span>
          <span className="text-[11px] text-slate-400">Electronic Sign-off Protocol</span>
        </CardFooter>
      </Card>

      {/* Approval Review Modal */}
      {activeApproval && (
        <Modal
          isOpen={!!activeApproval}
          onClose={() => setActiveApproval(null)}
          title={`Approval Scrutiny • ${activeApproval.referenceId}`}
          maxWidth="max-w-lg"
          footer={
            <>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setActiveApproval(null)}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => setActiveApproval(null)}
              >
                Return with Queries
              </Button>
              <Button
                variant="success"
                size="sm"
                onClick={() => handleApprove(activeApproval)}
                icon={ShieldCheck}
              >
                Accord Approval
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-amber-900">
                  Authority Delegation Verification
                </p>
                <p className="text-[11px] text-amber-800 mt-0.5">
                  You are reviewing this procurement file as{' '}
                  <strong>{activeApproval.assignedTo} ({activeApproval.role})</strong>.
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Stage:</span>
                <span className="font-semibold text-slate-800">
                  {activeApproval.procurementStage}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Related Tender:</span>
                <span className="font-mono font-medium text-blue-900">
                  {activeApproval.tenderRef}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Initiating Directorate:</span>
                <span className="font-medium text-slate-800">
                  {activeApproval.department}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Elapsed Time:</span>
                <span className="font-mono text-slate-700">
                  {activeApproval.pendingSince}
                </span>
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded border border-slate-200">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Approver's Official Remarks (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Concurred as per GFR 2017 delegation provisions..."
                defaultValue="Verified. Specifications and criteria found conforming to Ministry procurement directives."
                className="w-full text-xs p-2 rounded border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-blue-800"
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
