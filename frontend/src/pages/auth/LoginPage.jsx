import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  AlertCircle,
  KeyRound,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { DEMO_CREDENTIALS, ALTERNATE_DEMO_USERS } from '../../data/mockData';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';

export default function LoginPage() {
  const { login, loading, authError, setAuthError } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [showForgotModal, setShowForgotModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setAuthError('Please enter both Email ID and Password.');
      return;
    }

    try {
      await login(email, password, rememberMe);
      navigate('/dashboard');
    } catch {
      // Error handled by AuthContext
    }
  };

  const handleFillDemo = (userAccount) => {
    setEmail(userAccount.email);
    setPassword(DEMO_CREDENTIALS.password);
    setAuthError('');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between font-sans">
      {/* Top Government Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs px-4 py-1.5 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-medium text-slate-200">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            GOVERNMENT OF INDIA
          </span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-300">
            Ministry of Commerce and Industry
          </span>
        </div>
        <div className="text-[11px] text-slate-400">
          Official Single-Sign-On Simulation
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          {/* Header Card / Branding */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-900 text-white shadow-md border border-blue-800 mb-3">
              <span className="font-serif font-bold text-lg tracking-tight">सत्यमेव</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
              DPIIT AI/ML-Based Intelligent Procurement Management Solution
            </h1>
            <p className="text-xs text-slate-600 mt-1">
              Department for Promotion of Industry and Internal Trade
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <div className="mb-5 pb-3 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900">Official Portal Login</h2>
                <p className="text-xs text-slate-500">Enter your official credentials</p>
              </div>
              <span className="text-[10px] font-semibold bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded">
                Demo Portal
              </span>
            </div>

            {/* Error Message */}
            {authError && (
              <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-800">
                <AlertCircle className="h-4 w-4 text-rose-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold block">Authentication Failed</span>
                  <span>{authError}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username / Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Official Email / Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. procurement.officer@dpiit.gov.in"
                    className="w-full text-xs pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full text-xs pl-9 pr-10 py-2.5 rounded-lg border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 focus:outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600 select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 text-blue-900 focus:ring-blue-800"
                  />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-xs text-blue-800 hover:text-blue-950 font-medium hover:underline cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full mt-2 font-semibold"
                disabled={loading}
              >
                {loading ? 'Authenticating...' : 'Sign In to Portal'}
              </Button>
            </form>

            {/* Clear Demo Credentials Box */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <KeyRound className="h-3.5 w-3.5 text-blue-800" />
                  Frontend Demo Credentials
                </span>
                <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Demo Only
                </span>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Email:</span>
                  <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-[11px] text-slate-800">
                    {DEMO_CREDENTIALS.email}
                  </code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Password:</span>
                  <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-[11px] text-slate-800">
                    {DEMO_CREDENTIALS.password}
                  </code>
                </div>
              </div>

              {/* Auto-fill buttons */}
              <div className="mt-3 grid grid-cols-1 gap-1.5">
                <button
                  type="button"
                  onClick={() => handleFillDemo(DEMO_CREDENTIALS)}
                  className="w-full py-1.5 px-3 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 text-xs font-medium transition-colors text-center cursor-pointer"
                >
                  Quick Fill: Procurement Officer (Default)
                </button>
                <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                  <button
                    type="button"
                    onClick={() => handleFillDemo(ALTERNATE_DEMO_USERS[1])}
                    className="py-1 px-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium border border-slate-200 transition-colors cursor-pointer"
                  >
                    Fill: Approver (JS & FA)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleFillDemo(ALTERNATE_DEMO_USERS[2])}
                    className="py-1 px-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium border border-slate-200 transition-colors cursor-pointer"
                  >
                    Fill: Tech Evaluator
                  </button>
                </div>
              </div>
            </div>

            {/* Non-security disclaimer notice as required by guidelines */}
            <div className="mt-4 p-2.5 rounded bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900 leading-snug">
              <span className="font-semibold">Notice:</span> This is a frontend demo interface for initial UI evaluation. It does not perform production identity verification or provide real security.
            </div>
          </div>

          {/* Help link / Footer */}
          <div className="text-center text-xs text-slate-500 mt-4">
            <span>Facing difficulties? </span>
            <span className="text-blue-900 hover:underline cursor-pointer">
              Contact DPIIT NIC IT Helpdesk
            </span>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <Modal
        isOpen={showForgotModal}
        onClose={() => setShowForgotModal(false)}
        title="Password Assistance • DPIIT Portal"
        footer={
          <Button
            variant="primary"
            size="sm"
            onClick={() => setShowForgotModal(false)}
          >
            Acknowledge & Close
          </Button>
        }
      >
        <div className="space-y-3 text-xs text-slate-600">
          <p>
            In the live production portal, password resets are governed via Govt. of India Single Sign-On (Parichay / Jan Parichay) and authenticated via registered mobile OTP / DSC token.
          </p>
          <div className="p-3 bg-blue-50 rounded border border-blue-200 text-blue-900">
            <strong>For Day 1 Demo Evaluation:</strong> Please use the sample demo credentials pre-configured on the login screen (<code>{DEMO_CREDENTIALS.email}</code> / <code>{DEMO_CREDENTIALS.password}</code>).
          </div>
        </div>
      </Modal>

      {/* Subtle Footer */}
      <div className="border-t border-slate-200 bg-white py-3 px-4 text-center text-xs text-slate-500">
        Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry, Government of India
      </div>
    </div>
  );
}
