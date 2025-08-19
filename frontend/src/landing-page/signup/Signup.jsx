import React, { useContext, useState } from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { UserDataContext } from '../../context/UserContext';

function Signup() {
  const [activeTab, setActiveTab] = useState('signup');
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { handleRegister, handleLogin } = useContext(UserDataContext);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === 'login') {
        const result = await handleLogin(email, password);
        console.log(result);
      } else {
        const result = await handleRegister(username, email, password);
        console.log(result);
        setUserName('');
        setEmail('');
        setPassword('');
        setError('');
        setActiveTab('login');
      }
    } catch (err) {
      console.log(err);
      const message = err.response?.data?.message || 'Something went wrong';
      setError(message);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-secondary-subtle">
      <div className="col-11 col-sm-8 col-md-5 col-lg-4 p-4 bg-white shadow-sm border rounded">
        <ul className="nav nav-pills mb-4 justify-content-center">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'signup' ? 'active' : ''} border`}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'login' ? 'active' : ''} border`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
          </li>
        </ul>

        <h4 className="text-primary text-center mb-3">
          {activeTab === 'signup' ? 'Create Account' : 'Login to Account'}
        </h4>

        <form onSubmit={handleAuth}>
          {activeTab === 'signup' && (
            <div className="mb-3 input-group">
              <span className="input-group-text bg-white border-end-0">
                <FiUser className="text-primary" />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          )}

          <div className="mb-3 input-group">
            <span className="input-group-text bg-white border-end-0">
              <FiMail className="text-primary" />
            </span>
            <input
              type="email"
              className="form-control border-start-0"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4 input-group">
            <span className="input-group-text bg-white border-end-0">
              <FiLock className="text-primary" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control border-start-0"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="input-group-text bg-white border">
              {showPassword ? (
                <IoEyeOff
                  onClick={() => setShowPassword(false)}
                  className="text-primary fs-3"
                />
              ) : (
                <IoEye
                  onClick={() => setShowPassword(true)}
                  className="text-primary fs-3"
                />
              )}
            </span>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {activeTab === 'signup' ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p className="text-center mt-3">
          {activeTab === 'signup'
            ? 'Already have an account? Log in'
            : "Don't have an account? Sign Up"}
        </p>

        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
    </div>
  );
}

export default Signup;