import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './pages/auth/LoginPage';
import AppLayout from './components/layout/AppLayout';
import DashboardPage from './pages/dashboard/DashboardPage';
import ModulePlaceholder from './pages/placeholders/ModulePlaceholder';

// Protected Route Guard
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Public Route Guard (Redirect to dashboard if already logged in)
function PublicRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public Login Route */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      {/* Main Authenticated Application Layout */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />

        {/* Procurement Management */}
        <Route
          path="procurement/pr-indent"
          element={<ModulePlaceholder moduleKey="pr-indent" />}
        />
        <Route
          path="procurement/estimates"
          element={<ModulePlaceholder moduleKey="estimates" />}
        />
        <Route
          path="procurement/bqc"
          element={<ModulePlaceholder moduleKey="bqc" />}
        />

        {/* Tender Management */}
        <Route
          path="tenders/drafting"
          element={<ModulePlaceholder moduleKey="drafting" />}
        />
        <Route
          path="tenders/list"
          element={<ModulePlaceholder moduleKey="list" />}
        />
        <Route
          path="tenders/pre-bid-queries"
          element={<ModulePlaceholder moduleKey="pre-bid-queries" />}
        />
        <Route
          path="tenders/corrigendum"
          element={<ModulePlaceholder moduleKey="corrigendum" />}
        />

        {/* Bid Management */}
        <Route
          path="bids/submissions"
          element={<ModulePlaceholder moduleKey="submissions" />}
        />
        <Route
          path="bids/document-processing"
          element={<ModulePlaceholder moduleKey="document-processing" />}
        />

        {/* Bid Evaluation */}
        <Route
          path="evaluation/pq"
          element={<ModulePlaceholder moduleKey="pq" />}
        />
        <Route
          path="evaluation/technical"
          element={<ModulePlaceholder moduleKey="technical" />}
        />
        <Route
          path="evaluation/commercial"
          element={<ModulePlaceholder moduleKey="commercial" />}
        />
        <Route
          path="evaluation/comparative-statement"
          element={<ModulePlaceholder moduleKey="comparative-statement" />}
        />
        <Route
          path="evaluation/qcbs"
          element={<ModulePlaceholder moduleKey="qcbs" />}
        />

        {/* Post Evaluation */}
        <Route
          path="post-evaluation/pbg"
          element={<ModulePlaceholder moduleKey="pbg" />}
        />
        <Route
          path="post-evaluation/contracts"
          element={<ModulePlaceholder moduleKey="contracts" />}
        />

        {/* AI Assistant */}
        <Route
          path="ai-assistant"
          element={<ModulePlaceholder moduleKey="ai-assistant" />}
        />

        {/* Reports & Analytics */}
        <Route
          path="reports"
          element={<ModulePlaceholder moduleKey="reports" />}
        />

        {/* Administration */}
        <Route
          path="admin"
          element={<ModulePlaceholder moduleKey="admin" />}
        />
      </Route>

      {/* Catch-all Fallback */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
