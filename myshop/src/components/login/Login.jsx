import React, { useState, useEffect } from "react";
import './Login.scss';

const Login = ({setUserLoggedIn}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    useEffect(() => {
      const loggedInUser = localStorage.getItem('user');
      if (loggedInUser) {
        setUserLoggedIn(true);
      }
    }, [setUserLoggedIn]);
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (username && password) {
        localStorage.setItem('user', username);
        setUserLoggedIn(true);
      }
    };
  
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
};

export default Login;
