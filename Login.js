import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
function Login() {
  const [details, setDetails] = useState({ username: "", password: "" });
  const [showPassword, setshowPassword] = useState(false);
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
  if (!details.username || !details.password) {
      alert("Fill your credentials to login!");
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: details.username, password: details.password }),
      });

      const json = await response.json();
      if (json.success) {
        alert('Login successful!');
        navigate('/');
      } else {
        alert('Incorrect username or password!');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const showConfirmPassword = () => {
    setshowPassword(!showPassword);
  }
 const onChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }
  return (
    <div className="login-page">
      <form className="login" onSubmit={handleClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="form-inner">
          <h2>Enter your credentials!</h2>
          <div className="container">
           <input className='input' type="text" placeholder='username' name="username" value={details.username} onChange={onChange} />
            <div className='toggle'>
              <input className='input' type={showPassword?"text":"password"} placeholder='password' name="password" value={details.password} onChange={onChange} />
              <span className="password-toggle" onClick={showConfirmPassword}>
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
            <h4 class="forgot">Forgot password</h4>
            <div className='btn'>
              <button type="submit" className="log1">Login</button>
              <Link to='/signin'><button type="button" className="log2">REGISTER</button></Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
};



export default Login;
