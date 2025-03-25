import React, { useState } from 'react';
import '../styles/AuthModal.css';

function AuthModal({ show, onClose }) {
  const [authMode, setAuthMode] = useState('login');

  return (
    <div className={`auth-modal ${show ? 'visible' : ''}`}>
      <div className="auth-content">
        <button onClick={onClose} className="close-button">X</button>
        {authMode === 'login' ? (
          <form>
            <h3>Login</h3>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        ) : (
          <form>
            <h3>Sign Up</h3>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
          </form>
        )}
        <button onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}>
          Switch to {authMode === 'login' ? 'Sign Up' : 'Login'}
        </button>
      </div>
    </div>
  );
}

export default AuthModal;