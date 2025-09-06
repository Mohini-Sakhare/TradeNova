import React, { useContext, useState } from 'react';
import './auth.css';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router';

function Signup() {
  const [activeTab, setActiveTab] = useState('signup');
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { handleRegister, handleLogin, setUserData } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === 'login') {
        const result = await handleLogin(email, password);
        console.log(result);
        setUserData(result.data);
        navigate('/home');
      } else {
        const result = await handleRegister(username, email, password);
        console.log(result);
        setUserName('');
        setEmail('');
        setPassword('');
        setError('');
        setActiveTab('login');
        setUserData(result.data)
        navigate('/home');
      }
    } catch (err) {
      console.log(err);
      setUserData(null);
      const message = err.response?.data?.message || 'Something went wrong';
      setError(message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-tabs">
          <div
            className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')} 
          >
            Sign Up
          </div>
          <div
            className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </div>
        </div>

        <div className="auth-title">
          {activeTab === 'signup' ? 'Create Account' : 'Login to Account'}
        </div>

        <form className="auth-form" onSubmit={handleAuth}>
          {activeTab === 'signup' && (
            <input
              className="auth-input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          )}

          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="auth-input"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="auth-button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide Password' : 'Show Password'}
          </button>

          <button type="submit" className="auth-button">
            {activeTab === 'signup' ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="auth-switch">
          {activeTab === 'signup'
            ? 'Already have an account? Log in'
            : "Don't have an account? Sign Up"}
        </div>

        {error && <div className="auth-error">{error}</div>}
      </div>
    </div>
  );
}

export default Signup;