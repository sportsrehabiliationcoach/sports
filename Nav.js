import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  const navStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    justifyContent: "space-between",
    backgroundColor: "rgb(13,13,32)",
    color: "white",
    paddingBottom: "25px",
    paddingTop: "25px",
    position:"fixed",
    top:"0",
    width:"100%",
    zIndex:"1000",


  };
  const divStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "45px"
  }

  const aStyle = {
    color: "white",
    textDecoration: "none",
    justifyContent: "space-between",


  };

  const searchBarStyle = {
    marginLeft: 'auto', // Aligns the search bar to the right
    display: 'flex',
    gap: "25px",
    alignItems: 'center',
  };

  const inputStyle = {
    marginRight: '10px',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: 'purple',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };
  const svgStyle = {
    width: '20px',
    height: '20px',
    marginRight: '5px',
    alignItems: "center",
  }


  return (
    <div className="navbar" style={navStyle}>
      <div style={divStyle}>
        <Link to="/" style={aStyle}>Home</Link>
        <Link to="/about" style={aStyle}>About </Link>
        <Link to="/services" style={aStyle}>Services</Link>
        <Link to="/injuries" style={aStyle}>Injuries</Link>
        <Link to="/symptoms" style={aStyle}>Symptoms</Link>
        <Link to="/contact" style={aStyle}>Contact Us</Link>
      </div>
      <Link to="/signin" style={aStyle}>
        <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
        SignIn
      </Link>
      <div className="search-bar" style={searchBarStyle}>
        <input type="text" placeholder="Search..." style={inputStyle} />
        <button style={buttonStyle}>Search</button>
      </div>
    </div>
  );
}

export default Nav;
