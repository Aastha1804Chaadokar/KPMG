import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, ArrowRight, Sparkles, Building2, Layers } from 'lucide-react';
import { RECENT_TENDERS } from '../../data/mockData';

const MODULE_SEARCH_ITEMS = [
  { title: 'Dashboard', path: '/dashboard', category: 'Navigation', icon: Layers },
  { title: 'PR / Indent Management', path: '/procurement/pr-indent', category: 'Procurement', icon: FileText },
  { title: 'Estimate Management', path: '/procurement/estimates', category: 'Procurement', icon: FileText },
  { title: 'BQC (Bidder Qualification) Management', path: '/procurement/bqc', category: 'Procurement', icon: FileText },
  { title: 'Tender Drafting (RFP Builder)', path: '/tenders/drafting', category: 'Tenders', icon: FileText },
  { title: 'Tender Master Directory', path: '/tenders/list', category: 'Tenders', icon: FileText },
  { title: 'Pre-Bid Queries & Clarifications', path: '/tenders/pre-bid-queries', category: 'Tenders', icon: FileText },
  { title: 'Corrigendum & Addendum Publisher', path: '/tenders/corrigendum', category: 'Tenders', icon: FileText },
  { title: 'Bid Submissions Vault', path: '/bids/submissions', category: 'Bids', icon: FileText },
  { title: 'Document Processing & OCR Extraction', path: '/bids/document-processing', category: 'Bids', icon: FileText },
  { title: 'Prequalification (PQ) Evaluation', path: '/evaluation/pq', category: 'Evaluation', icon: FileText },
  { title: 'Technical Evaluation (TQ)', path: '/evaluation/technical', category: 'Evaluation', icon: FileText },
  { title: 'Commercial Evaluation & L1 Discovery', path: '/evaluation/commercial', category: 'Evaluation', icon: FileText },
  { title: 'Comparative Statement (CS)', path: '/evaluation/comparative-statement', category: 'Evaluation', icon: FileText },
  { title: 'QCBS (Quality & Cost Based Selection)', path: '/evaluation/qcbs', category: 'Evaluation', icon: FileText },
  { title: 'PBG (Performance Bank Guarantee)', path: '/post-evaluation/pbg', category: 'Post Evaluation', icon: FileText },
  { title: 'Contract Management & SLA', path: '/post-evaluation/contracts', category: 'Post Evaluation', icon: FileText },
  { title: 'AI Procurement Assistant & Co-Pilot', path: '/ai-assistant', category: 'AI Tools', icon: Sparkles },
  { title: 'Reports & Analytics', path: '/reports', category: 'Reporting', icon: Layers },
  { title: 'Administration & RBAC', path: '/admin', category: 'System', icon: Building2 },
];

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const query = searchTerm.toLowerCase().trim();

  // Filter modules
  const filteredModules = MODULE_SEARCH_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)
  );

  // Filter tenders
  const filteredTenders = RECENT_TENDERS.filter(
    (t) =>
      t.tenderId.toLowerCase().includes(query) ||
      t.title.toLowerCase().includes(query) ||
      t.department.toLowerCase().includes(query)
  );

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />
      <div className="flex min-h-full items-start justify-center p-4 pt-16 sm:pt-24">
        <div
          className="relative w-full max-w-2xl transform overflow-hidden rounded-xl bg-white text-left shadow-2xl transition-all border border-slate-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="flex items-center border-b border-slate-200 px-4 py-3 bg-white">
            <Search className="h-5 w-5 text-slate-400 mr-3 shrink-0" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search tenders by ID, title, department, or module..."
              className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 mr-2 rounded hover:bg-slate-100"
              >
                Clear
              </button>
            )}
            <kbd className="hidden sm:inline-block rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500 border border-slate-200">
              ESC
            </kbd>
          </div>

          {/* Results list */}
          <div className="max-h-96 overflow-y-auto p-3 space-y-4 text-xs">
            {/* Modules / Navigation */}
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">
                Portal Modules & Actions ({filteredModules.length})
              </div>
              <div className="mt-1 space-y-1">
                {filteredModules.slice(0, 6).map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.path}
                      onClick={() => handleSelect(item.path)}
                      className="w-full text-left flex items-center justify-between px-3 py-2 rounded-lg hover:bg-blue-50/80 group transition-colors text-slate-700 hover:text-blue-900"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-slate-400 group-hover:text-blue-700" />
                        <div>
                          <p className="font-medium text-slate-800 group-hover:text-blue-900">
                            {item.title}
                          </p>
                          <span className="text-[11px] text-slate-400">{item.category}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tenders */}
            {filteredTenders.length > 0 && (
              <div className="border-t border-slate-100 pt-3">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">
                  Matching Tenders ({filteredTenders.length})
                </div>
                <div className="mt-1 space-y-1">
                  {filteredTenders.slice(0, 4).map((tender) => (
                    <button
                      key={tender.tenderId}
                      onClick={() => handleSelect('/tenders/list')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 group transition-colors border border-transparent hover:border-slate-200"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold text-blue-900">
                          {tender.tenderId}
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {tender.status}
                        </span>
                      </div>
                      <p className="text-slate-800 font-medium text-xs mt-0.5 line-clamp-1">
                        {tender.title}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{tender.department}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filteredModules.length === 0 && filteredTenders.length === 0 && (
              <div className="py-8 text-center text-slate-400">
                <p className="text-sm">No results found for "{searchTerm}"</p>
                <p className="text-xs text-slate-400 mt-1">Try searching for "Tender", "BQC", "QCBS", or "Estimate"</p>
              </div>
            )}
          </div>

          {/* Footer tips */}
          <div className="border-t border-slate-100 px-4 py-2.5 bg-slate-50 text-[11px] text-slate-500 flex items-center justify-between">
            <span>DPIIT Procurement Intelligence Search</span>
            <span className="text-slate-400">Use arrow keys or click to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
