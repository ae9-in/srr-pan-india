import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple hardcoded mock password: "admin"
    if (password === 'admin') {
      localStorage.setItem('srr_admin_auth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid password. Try "admin".');
    }
  };

  return (
    <div className="bg-surface-container-low min-h-screen flex items-center justify-center p-6 font-body-md text-on-surface">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="bg-surface p-8 rounded-2xl shadow-lg border border-outline-variant w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
            <i className="ph-fill ph-lock-key text-3xl"></i>
          </div>
          <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Admin Login</h2>
          <p className="font-body-md text-on-surface-variant mt-2">Enter your password to access the portal.</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="password" className="block mb-2 text-on-surface-variant text-xs font-label-md uppercase tracking-wider">
              Password
            </label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              className={`w-full bg-surface border ${error ? 'border-error' : 'border-outline-variant'} rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all`}
              placeholder="Enter password"
            />
            {error && <p className="text-error text-xs mt-2">{error}</p>}
          </div>
          <button 
            type="submit"
            className="w-full bg-primary text-on-primary py-3 rounded-full font-label-md hover:bg-primary-container transition-colors shadow-md"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-6">
          <a href="/" className="text-primary hover:underline text-sm font-label-md">Return to Website</a>
        </div>
      </motion.div>
    </div>
  );
}
