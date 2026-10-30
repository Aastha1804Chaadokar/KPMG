import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Bell,
  Menu,
  ChevronDown,
  LogOut,
  Shield,
  CheckCircle,
  ExternalLink,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { NOTIFICATIONS_DATA, ALTERNATE_DEMO_USERS } from '../../data/mockData';
import Badge from '../common/Badge';

export default function Header({ onMobileMenuToggle, onOpenSearch }) {
  const { user, logout, quickSwitchUser } = useAuth();
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showRoleSwitcher, setShowRoleSwitcher] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  const unreadCount = notifications.filter((n) => n.unread).length;

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setIsNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
        setShowRoleSwitcher(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, unread: false })));
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-2xs">
      {/* Top micro banner for Government of India portal */}
      <div className="bg-slate-900 text-slate-300 text-[11px] px-4 py-1 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-medium text-slate-200">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            GOVERNMENT OF INDIA
          </span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-300">
            Ministry of Commerce and Industry
          </span>
          <span className="hidden lg:inline text-slate-500">|</span>
          <span className="hidden lg:inline text-slate-400">
            Department for Promotion of Industry and Internal Trade (DPIIT)
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="text-[10px] uppercase font-mono tracking-wider bg-slate-800 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
            Demo Environment (Day 1)
          </span>
          <span className="hidden sm:inline">GFR 2017 & CVC Compliant</span>
        </div>
      </div>

      {/* Main Header bar */}
      <div className="px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Left: Mobile Toggle & Portal Identity */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMobileMenuToggle}
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3">
            {/* Government Emblem Seal representation */}
            <div className="w-9 h-9 rounded-md bg-blue-900 text-white flex items-center justify-center font-serif font-bold text-sm shadow-xs border border-blue-800">
              <span className="tracking-tighter">सत्यमेव</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-none">
                  DPIIT Intelligent Procurement Management Portal
                </h1>
                <span className="hidden sm:inline-flex items-center text-[10px] font-semibold bg-blue-50 text-blue-800 border border-blue-200 px-1.5 py-0.5 rounded">
                  AI/ML Powered
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block mt-0.5">
                Centralized e-Procurement, Indent & Tender Lifecycle Management
              </p>
            </div>
          </div>
        </div>

        {/* Right: Search, Notifications & User Dropdown */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Interactive Search trigger */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50/80 text-slate-500 text-xs hover:border-slate-300 hover:bg-slate-100 transition-colors w-32 sm:w-60 justify-between cursor-pointer"
          >
            <span className="flex items-center gap-1.5 truncate">
              <Search className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              <span className="truncate">Search tenders, indent...</span>
            </span>
            <kbd className="hidden sm:inline-block rounded bg-white px-1.5 py-0.5 text-[10px] font-mono text-slate-400 border border-slate-200">
              Ctrl+K
            </kbd>
          </button>

          {/* Notifications Dropdown */}
          <div className="relative" ref={notifRef}>
            <button
              type="button"
              onClick={() => setIsNotifOpen(!isNotifOpen)}
              className="relative p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="View notifications"
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white shadow-xs animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Menu */}
            {isNotifOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-xl bg-white shadow-xl border border-slate-200 z-50 overflow-hidden">
                <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Procurement Alerts
                    </h4>
                    <span className="text-[11px] text-slate-500">
                      {unreadCount} unread action items
                    </span>
                  </div>
                  {unreadCount > 0 && (
                    <button
                      type="button"
                      onClick={markAllAsRead}
                      className="text-xs text-blue-700 hover:text-blue-900 font-medium cursor-pointer"
                    >
                      Mark all read
                    </button>
                  )}
                </div>

                <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                  {notifications.map((item) => (
                    <div
                      key={item.id}
                      className={`p-3.5 text-xs transition-colors hover:bg-slate-50/80 ${
                        item.unread ? 'bg-blue-50/40' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                          {item.unread && (
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                          )}
                          <span>{item.title}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                        {item.message}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 bg-slate-50 border-t border-slate-200 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setIsNotifOpen(false);
                      navigate('/reports');
                    }}
                    className="text-xs font-semibold text-blue-800 hover:text-blue-950 flex items-center justify-center gap-1 w-full"
                  >
                    View All Audit & Notification Logs
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              type="button"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-bold uppercase shadow-2xs">
                {user?.name ? user.name.slice(0, 2) : 'RV'}
              </div>
              <div className="hidden md:block text-left">
                <div className="text-xs font-semibold text-slate-800 leading-tight flex items-center gap-1">
                  <span>{user?.name || 'Rajesh Verma'}</span>
                </div>
                <span className="text-[10px] text-slate-500 line-clamp-1">
                  {user?.role || 'Procurement Officer'}
                </span>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400 hidden sm:block" />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-xl bg-white shadow-xl border border-slate-200 z-50 overflow-hidden divide-y divide-slate-100">
                {/* User info box */}
                <div className="p-4 bg-slate-50/70">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-bold shadow-xs">
                      {user?.name ? user.name.slice(0, 2) : 'RV'}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-slate-900 truncate">
                        {user?.name || 'Rajesh Verma'}
                      </p>
                      <p className="text-[11px] text-slate-500 truncate">
                        {user?.email || 'procurement.officer@dpiit.gov.in'}
                      </p>
                      <div className="mt-1 flex items-center gap-1">
                        <Badge variant="info" size="xs">
                          {user?.role || 'Procurement Officer'}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-200/80 text-[11px] text-slate-500 space-y-0.5">
                    <div className="flex justify-between">
                      <span>Division:</span>
                      <span className="font-medium text-slate-700">DPIIT / IT Directorate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Session:</span>
                      <span className="font-medium text-emerald-600">Active (Demo)</span>
                    </div>
                  </div>
                </div>

                {/* Quick Switch Roles */}
                <div className="p-2">
                  <button
                    type="button"
                    onClick={() => setShowRoleSwitcher(!showRoleSwitcher)}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100 flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <SlidersHorizontal className="h-3.5 w-3.5 text-slate-400" />
                      Switch Demo Role
                    </span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 text-slate-400 transition-transform ${
                        showRoleSwitcher ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {showRoleSwitcher && (
                    <div className="mt-1 space-y-1 pl-2">
                      {ALTERNATE_DEMO_USERS.map((u) => (
                        <button
                          key={u.email}
                          type="button"
                          onClick={() => {
                            quickSwitchUser(u);
                            setIsProfileOpen(false);
                            setShowRoleSwitcher(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 rounded text-xs flex items-center justify-between transition-colors ${
                            user?.email === u.email
                              ? 'bg-blue-50 text-blue-900 font-semibold'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <div>
                            <p>{u.name}</p>
                            <span className="text-[10px] text-slate-400">{u.designation}</span>
                          </div>
                          {user?.email === u.email && (
                            <CheckCircle className="h-3.5 w-3.5 text-blue-700 shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="p-2 space-y-1">
                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileOpen(false);
                      navigate('/admin');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100 flex items-center gap-2 cursor-pointer"
                  >
                    <Shield className="h-3.5 w-3.5 text-slate-400" />
                    Security & Governance
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileOpen(false);
                      navigate('/ai-assistant');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100 flex items-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                    Open AI Procurement Co-Pilot
                  </button>
                </div>

                {/* Logout option */}
                <div className="p-2">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-rose-700 hover:bg-rose-50 flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <LogOut className="h-3.5 w-3.5 text-rose-600" />
                    Sign Out (Demo Session)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
