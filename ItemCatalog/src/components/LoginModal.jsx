import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function LoginModal() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    login(username, password);
  }

  return (
    <div className="modal-bg">
      <div className="modal">
        <h2 style={{ margin: 0, marginBottom: '1.2em', textAlign: 'center', color: "#222" }}>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <div style={{ display: 'flex', justifyContent: 'center', margin: '1em 0' }}>
            <button type="submit">Log In</button>
          </div>
        </form>
        <div style={{ marginTop: '0.5em', display: 'flex', justifyContent: 'center', gap: '1.5em' }}>
          <button style={{ background: '#646cff', color: 'white', fontWeight: 'bold', fontSize: '1em', padding: '0.4em 1.5em' }}>Sign Up</button>
          <a href="#" style={{ color: '#3f51b5', alignSelf: 'center', textDecoration: 'underline' }}>Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}
