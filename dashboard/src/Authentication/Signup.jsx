// import React, { useContext, useState } from 'react';
// import {
//   Grid,
//   Paper,
//   Tabs,
//   Tab,
//   Typography,
//   TextField,
//   IconButton,
//   Button,
//   Alert,
//   InputAdornment
// } from '@mui/material';
// import {
//   PersonOutline,
//   EmailOutlined,
//   LockOutlined,
//   Visibility,
//   VisibilityOff
// } from '@mui/icons-material';
// import { UserDataContext } from '../context/UserContext';
// import { useNavigate } from 'react-router';


// function Signup() {
//   const [activeTab, setActiveTab] = useState('signup');
//   const [showPassword, setShowPassword] = useState(false);

//   const [username, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const { handleRegister, handleLogin } = useContext(UserDataContext);

//   const navigate = useNavigate();

//   const handleAuth = async (e) => {
//     e.preventDefault();
//     try {
//       if (activeTab === 'login') {
//         const result = await handleLogin(email, password);
//         console.log(result);
//         navigate('/home');
//       } else {
//         const result = await handleRegister(username, email, password);
//         console.log(result);
//         setUserName('');
//         setEmail('');
//         setPassword('');
//         setError('');
//         setActiveTab('login');
//         navigate('/home')
//       }
//     } catch (err) {
//       console.log(err);
//       const message = err.response?.data?.message || 'Something went wrong';
//       setError(message);
//     }
//   };

//   return (
//     <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
//       <Grid item xs={11} sm={8} md={5} lg={4}>
//         <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
//           <Tabs
//             value={activeTab}
//             onChange={(e, newValue) => setActiveTab(newValue)}
//             centered
//             indicatorColor="primary"
//             textColor="primary"
//           >
//             <Tab label="Sign Up" value="signup" />
//             <Tab label="Login" value="login" />
//           </Tabs>

//           <Typography variant="h5" align="center" color="primary" sx={{ marginY: 2 }}>
//             {activeTab === 'signup' ? 'Create Account' : 'Login to Account'}
//           </Typography>

//           <form onSubmit={handleAuth}>
//             {activeTab === 'signup' && (
//               <TextField
//                 fullWidth
//                 margin="normal"
//                 label="Username"
//                 variant="outlined"
//                 value={username}
//                 onChange={(e) => setUserName(e.target.value)}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <PersonOutline color="primary" />
//                     </InputAdornment>
//                   )
//                 }}
//               />
//             )}

//             <TextField
//               fullWidth
//               margin="normal"
//               label="Email"
//               variant="outlined"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <EmailOutlined color="primary" />
//                   </InputAdornment>
//                 )
//               }}
//             />

//             <TextField
//               fullWidth
//               margin="normal"
//               label="Password"
//               variant="outlined"
//               type={showPassword ? 'text' : 'password'}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <LockOutlined color="primary" />
//                   </InputAdornment>
//                 ),
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                       {showPassword ? <VisibilityOff color="primary" /> : <Visibility color="primary" />}
//                     </IconButton>
//                   </InputAdornment>
//                 )
//               }}
//             />

//             <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
//               {activeTab === 'signup' ? 'Sign Up' : 'Login'}
//             </Button>
//           </form>

//           <Typography align="center" sx={{ marginTop: 2 }}>
//             {activeTab === 'signup'
//               ? 'Already have an account? Log in'
//               : "Don't have an account? Sign Up"}
//           </Typography>

//           {error && (
//             <Alert severity="error" sx={{ marginTop: 2 }}>
//               {error}
//             </Alert>
//           )}
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// }

// export default Signup;

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

  const { handleRegister, handleLogin } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === 'login') {
        const result = await handleLogin(email, password);
        console.log(result);
        navigate('/home');
      } else {
        const result = await handleRegister(username, email, password);
        console.log(result);
        setUserName('');
        setEmail('');
        setPassword('');
        setError('');
        setActiveTab('login');
        navigate('/home');
      }
    } catch (err) {
      console.log(err);
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