import React, { useState } from 'react';
import './Signin.css';
import { Link, useNavigate } from "react-router-dom";


function Signin() {

  const [credentials, setCredentials] = useState({ username: "", password: "", confirmPassword: "" })
  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.username && !credentials.password) {
      alert("Please fill in the details!")
    }
    else if (!credentials.username) {
      alert("Enter the username");
    }

    else if (!credentials.password) {
      alert("Enter the password!");
    }
    else if (credentials.password.length < 5) {
      alert("Password must be at least 5 characters long");
      // return;
    }
    else if (credentials.password !== credentials.confirmPassword) {
      alert("passwords do not match!")
    } else {
      const response = await fetch("http://localhost:5000/api/signin", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: credentials.username, password: credentials.password })
      });

      const json = await response.json();
      if (json.success) {
        alert("Sign-in successful!");
        navigate('/');
      }
    }
  }

  const passwordToggle = () => {
    setshowPassword(!showPassword)
  }

  const confirmPasswordToggle = () => {
    setshowConfirmPassword(!showConfirmPassword)
  }



  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }


  return (
    <div className="signin-page">
      <form className="form" onSubmit={handleSubmit}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="form-inner">
          <h2>Welcome!</h2>
          <div className="content">
            <input className="input" type="text" placeholder="username" name='username' value={credentials.username} onChange={onChange} />
            <div className='toggle'>
              <input className="input" type={showPassword ? "text" : "password"} placeholder="Create strong password" name='password' value={credentials.password} onChange={onChange} />
              <span className="password-toggle" onClick={passwordToggle}>
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
            <div className='toggle'>
              <input className="input" type={showConfirmPassword?"text":"password"}placeholder="Confirm password" name='confirmPassword' value={credentials.confirmPassword} onChange={onChange} />
              <span className="password-toggle" onClick={confirmPasswordToggle}>
                {showConfirmPassword ? '🙈' : '👁️'}
              </span>
            </div>
            <Link to='/login'>Already have an account?</Link>


            <button type="submit" className="btn">SUBMIT</button>

          </div>
        </div>
      </form>
    </div>
  );
}


export default Signin;