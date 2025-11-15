import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginModal from './components/LoginModal';
import Dashboard from './components/Dashboard';

function Main() {
  const { user } = useAuth();
  return user ? <Dashboard /> : <LoginModal />;
}

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}
