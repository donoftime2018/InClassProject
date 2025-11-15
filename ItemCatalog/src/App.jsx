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
      <div style={{
        width: '100%', textAlign: 'center', 
        fontSize: '2.2em', fontWeight: 'bold', 
        marginTop: '1.2em', marginBottom: '0.4em', 
        letterSpacing: '2px', color: '#213547'
      }}>
        Item Catalog
      </div>
      <Main />
    </AuthProvider>
  );
}
