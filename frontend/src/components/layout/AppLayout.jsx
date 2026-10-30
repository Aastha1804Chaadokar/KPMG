import React, { useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import SearchModal from './SearchModal';
import { ChevronRight, Home, ShieldCheck } from 'lucide-react';

export default function AppLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const location = useLocation();

  // Generate breadcrumb segments from current pathname
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbLabel = (seg) => {
    const map = {
      dashboard: 'Dashboard',
      procurement: 'Procurement Management',
      'pr-indent': 'PR / Indent',
      estimates: 'Estimate Management',
      bqc: 'BQC Management',
      tenders: 'Tender Management',
      drafting: 'Tender Drafting',
      list: 'Tender List',
      'pre-bid-queries': 'Pre-Bid Queries',
      corrigendum: 'Corrigendum',
      bids: 'Bid Management',
      submissions: 'Bid Submissions',
      'document-processing': 'Document Processing',
      evaluation: 'Bid Evaluation',
      pq: 'Prequalification (PQ)',
      technical: 'Technical Evaluation (TQ)',
      commercial: 'Commercial Evaluation',
      'comparative-statement': 'Comparative Statement',
      qcbs: 'QCBS',
      'post-evaluation': 'Post Evaluation',
      pbg: 'PBG Management',
      contracts: 'Contract Management',
      'ai-assistant': 'AI Assistant',
      reports: 'Reports & Analytics',
      admin: 'Administration',
    };
    return map[seg] || seg.replace(/-/g, ' ');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <div className="flex flex-1 min-h-screen">
        {/* Left Sidebar */}
        <Sidebar
          isCollapsed={isCollapsed}
          onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
          isMobileOpen={isMobileOpen}
          onCloseMobile={() => setIsMobileOpen(false)}
        />

        {/* Right Main Body */}
        <div className="flex-1 flex flex-col min-w-0">
          <Header
            onMobileMenuToggle={() => setIsMobileOpen(true)}
            onOpenSearch={() => setIsSearchOpen(true)}
          />

          {/* Breadcrumb strip */}
          <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-200/80 px-4 sm:px-6 py-2 flex items-center justify-between text-xs text-slate-500">
            <ol className="flex items-center space-x-2 truncate">
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center text-slate-500 hover:text-blue-900 transition-colors"
                >
                  <Home className="h-3.5 w-3.5 mr-1" />
                  <span>Home</span>
                </Link>
              </li>

              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return (
                  <li key={routeTo} className="flex items-center space-x-2">
                    <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" />
                    {isLast ? (
                      <span className="font-semibold text-slate-800 capitalize truncate">
                        {getBreadcrumbLabel(name)}
                      </span>
                    ) : (
                      <Link
                        to={routeTo}
                        className="text-slate-500 hover:text-blue-900 transition-colors capitalize truncate"
                      >
                        {getBreadcrumbLabel(name)}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>

            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-800" />
              <span>DPIIT SECURE PORTAL</span>
            </div>
          </nav>

          {/* Page Content Viewport */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
            <Outlet />
          </main>

          {/* Government Portal Footer */}
          <footer className="mt-auto border-t border-slate-200 bg-white px-4 sm:px-6 py-4 text-xs text-slate-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
              <div>
                <p className="font-semibold text-slate-700">
                  DPIIT AI/ML-Based Intelligent Procurement Management Solution
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Department for Promotion of Industry and Internal Trade • Ministry of Commerce and Industry • Government of India
                </p>
              </div>
              <div className="text-[11px] text-slate-400 space-y-0.5">
                <p>Designed in compliance with GFR 2017, CVC Guidelines & Manual for Procurement of Goods & Services</p>
                <p className="font-mono text-[10px] text-slate-500">Notice: Demo Environment • All mock transactions are non-binding</p>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Global Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}

