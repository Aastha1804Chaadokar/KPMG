import React, { createContext, useContext, useState } from 'react';
import { DEMO_CREDENTIALS, ALTERNATE_DEMO_USERS } from '../data/mockData';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('dpiit_demo_session');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Fallback if localStorage is restricted
    }
    return null;
  });

  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  // Login handler - frontend demo mode only
  const login = (email, password, rememberMe = false) => {
    setLoading(true);
    setAuthError('');

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const matchingUser = ALTERNATE_DEMO_USERS.find(
          (u) => u.email.toLowerCase() === email.trim().toLowerCase()
        );

        if (
          (email.trim().toLowerCase() === DEMO_CREDENTIALS.email.toLowerCase() &&
            password === DEMO_CREDENTIALS.password) ||
          (matchingUser && (password === DEMO_CREDENTIALS.password || password === 'demo' || password.length >= 4))
        ) {
          const sessionUser = matchingUser || {
            email: DEMO_CREDENTIALS.email,
            name: DEMO_CREDENTIALS.name,
            role: DEMO_CREDENTIALS.role,
            designation: DEMO_CREDENTIALS.designation,
            department: DEMO_CREDENTIALS.department,
          };

          const fullUserData = {
            ...sessionUser,
            lastLogin: new Date().toLocaleTimeString('en-IN', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            }),
            sessionType: 'Frontend Demo Session (Non-production)',
          };

          setUser(fullUserData);
          if (rememberMe) {
            try {
              localStorage.setItem('dpiit_demo_session', JSON.stringify(fullUserData));
            } catch {
              // ignore
            }
          }
          setLoading(false);
          resolve(fullUserData);
        } else {
          setLoading(false);
          setAuthError(
            'Invalid credentials. Please use the demo credentials provided below.'
          );
          reject(new Error('Invalid demo credentials'));
        }
      }, 350);
    });
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('dpiit_demo_session');
    } catch {
      // ignore
    }
  };

  const quickSwitchUser = (demoUser) => {
    const fullUserData = {
      ...demoUser,
      department: 'DPIIT, Ministry of Commerce & Industry',
      lastLogin: new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      sessionType: 'Frontend Demo Session (Non-production)',
    };
    setUser(fullUserData);
    try {
      localStorage.setItem('dpiit_demo_session', JSON.stringify(fullUserData));
    } catch {
      // ignore
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        authError,
        setAuthError,
        login,
        logout,
        quickSwitchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
