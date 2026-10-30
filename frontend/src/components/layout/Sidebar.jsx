import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  FileText,
  Layers,
  Scale,
  Award,
  Sparkles,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronRight,
  PanelLeftClose,
  PanelLeft,
  X,
} from 'lucide-react';

const NAVIGATION_ITEMS = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Procurement Management',
    icon: ShoppingBag,
    submenu: [
      { name: 'PR / Indent', path: '/procurement/pr-indent' },
      { name: 'Estimate Management', path: '/procurement/estimates' },
      { name: 'BQC Management', path: '/procurement/bqc' },
    ],
  },
  {
    name: 'Tender Management',
    icon: FileText,
    submenu: [
      { name: 'Tender Drafting', path: '/tenders/drafting' },
      { name: 'Tender List', path: '/tenders/list' },
      { name: 'Pre-Bid Queries', path: '/tenders/pre-bid-queries' },
      { name: 'Corrigendum', path: '/tenders/corrigendum' },
    ],
  },
  {
    name: 'Bid Management',
    icon: Layers,
    submenu: [
      { name: 'Bid Submissions', path: '/bids/submissions' },
      { name: 'Document Processing', path: '/bids/document-processing' },
    ],
  },
  {
    name: 'Bid Evaluation',
    icon: Scale,
    submenu: [
      { name: 'Prequalification (PQ)', path: '/evaluation/pq' },
      { name: 'Technical Evaluation (TQ)', path: '/evaluation/technical' },
      { name: 'Commercial Evaluation', path: '/evaluation/commercial' },
      { name: 'Comparative Statement', path: '/evaluation/comparative-statement' },
      { name: 'QCBS', path: '/evaluation/qcbs' },
    ],
  },
  {
    name: 'Post Evaluation',
    icon: Award,
    submenu: [
      { name: 'PBG Management', path: '/post-evaluation/pbg' },
      { name: 'Contract Management', path: '/post-evaluation/contracts' },
    ],
  },
  {
    name: 'AI Assistant',
    path: '/ai-assistant',
    icon: Sparkles,
    highlight: true,
  },
  {
    name: 'Reports & Analytics',
    path: '/reports',
    icon: BarChart3,
  },
  {
    name: 'Administration',
    path: '/admin',
    icon: Settings,
  },
];

export default function Sidebar({
  isCollapsed,
  onToggleCollapse,
  isMobileOpen,
  onCloseMobile,
}) {
  const location = useLocation();

  // Keep track of which submenus are expanded
  const [expandedMenus, setExpandedMenus] = useState(() => {
    const currentPath = location.pathname;
    const initial = {};
    NAVIGATION_ITEMS.forEach((item) => {
      if (item.submenu) {
        const hasActiveChild = item.submenu.some(
          (sub) => sub.path === currentPath || currentPath.startsWith(sub.path)
        );
        if (hasActiveChild) {
          initial[item.name] = true;
        }
      }
    });
    return initial;
  });

  // Expand parent when location changes
  useEffect(() => {
    NAVIGATION_ITEMS.forEach((item) => {
      if (item.submenu) {
        const hasActiveChild = item.submenu.some(
          (sub) => sub.path === location.pathname || location.pathname.startsWith(sub.path)
        );
        if (hasActiveChild) {
          setExpandedMenus((prev) => ({ ...prev, [item.name]: true }));
        }
      }
    });
  }, [location.pathname]);

  const toggleSubmenu = (menuName) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col bg-slate-900 text-slate-200 transition-all duration-200 ease-in-out lg:static border-r border-slate-800 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${isCollapsed ? 'lg:w-20' : 'lg:w-64'} w-64`}
      >
        {/* Sidebar Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-slate-800/80 bg-slate-950/40">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shrink-0 shadow-sm">
              <span className="text-xs tracking-wider">DP</span>
            </div>
            {!isCollapsed && (
              <div className="min-w-0">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-100 block truncate">
                  DPIIT Portal
                </span>
                <span className="text-[10px] text-blue-400 font-medium block truncate">
                  Procurement Suite
                </span>
              </div>
            )}
          </div>

          {/* Mobile close button */}
          <button
            type="button"
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Desktop collapse toggle */}
          <button
            type="button"
            onClick={onToggleCollapse}
            className="hidden lg:flex p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isCollapsed ? (
              <PanelLeft className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5 scrollbar-thin scrollbar-thumb-slate-800">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon;
            const hasSubmenu = !!item.submenu;
            const isExpanded = !!expandedMenus[item.name];
            const isDirectActive = item.path === location.pathname;
            const hasActiveChild =
              hasSubmenu &&
              item.submenu.some(
                (sub) => sub.path === location.pathname || location.pathname.startsWith(sub.path)
              );

            if (!hasSubmenu) {
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={onCloseMobile}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-blue-700 text-white shadow-xs'
                        : item.highlight
                        ? 'text-blue-300 hover:bg-blue-900/40 hover:text-blue-200'
                        : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                    } ${isCollapsed ? 'justify-center px-2' : ''}`
                  }
                  title={isCollapsed ? item.name : undefined}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      isDirectActive
                        ? 'text-white'
                        : item.highlight
                        ? 'text-blue-400'
                        : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  />
                  {!isCollapsed && (
                    <span className="truncate flex-1 flex items-center justify-between">
                      {item.name}
                      {item.highlight && (
                        <span className="text-[9px] bg-blue-500/30 text-blue-300 border border-blue-400/30 px-1.5 py-0.2 rounded font-semibold uppercase">
                          AI
                        </span>
                      )}
                    </span>
                  )}
                </NavLink>
              );
            }

            // Submenu Item
            return (
              <div key={item.name} className="space-y-1">
                <button
                  type="button"
                  onClick={() => {
                    if (isCollapsed) {
                      onToggleCollapse();
                    }
                    toggleSubmenu(item.name);
                  }}
                  className={`w-full group flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    hasActiveChild
                      ? 'bg-slate-800 text-white font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  } ${isCollapsed ? 'justify-center px-2' : 'justify-between'}`}
                  title={isCollapsed ? item.name : undefined}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon
                      className={`h-4 w-4 shrink-0 ${
                        hasActiveChild ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    />
                    {!isCollapsed && (
                      <span className="truncate text-left">{item.name}</span>
                    )}
                  </div>

                  {!isCollapsed && (
                    <span className="shrink-0 text-slate-400">
                      {isExpanded ? (
                        <ChevronDown className="h-3.5 w-3.5" />
                      ) : (
                        <ChevronRight className="h-3.5 w-3.5" />
                      )}
                    </span>
                  )}
                </button>

                {/* Submenu links */}
                {!isCollapsed && isExpanded && (
                  <div className="pl-8 pr-1 space-y-1 pt-0.5 pb-1 border-l border-slate-800 ml-5">
                    {item.submenu.map((sub) => (
                      <NavLink
                        key={sub.path}
                        to={sub.path}
                        onClick={onCloseMobile}
                        className={({ isActive }) =>
                          `block py-1.5 px-2.5 rounded-md text-[11px] font-medium transition-colors ${
                            isActive
                              ? 'bg-blue-600/90 text-white shadow-xs'
                              : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sidebar Footer info */}
        <div className="p-3 border-t border-slate-800/80 bg-slate-950/60 text-xs text-slate-400">
          {!isCollapsed ? (
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">System Mode</span>
                <span className="inline-flex items-center gap-1 text-emerald-400 font-mono text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  ONLINE
                </span>
              </div>
              <p className="text-[10px] text-slate-400 truncate">
                Govt. Portal Release v1.0.4
              </p>
            </div>
          ) : (
            <div className="flex justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400" title="System Online"></span>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
