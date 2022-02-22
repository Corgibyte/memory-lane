import React from 'react';
import { Link } from "react-router-dom";

const liStyle = {
  display: "inline",
  padding: "0.5rem",
  fontSize: "large"
};

const navStyle = {
  display: "flex",
  padding: "0",
  margin: "0"
}

const pushRightStyle = {
  marginLeft: "auto"
};

function Header() {

  return (
    <React.Fragment>
      <h1>Memory Something</h1>
      <ul style={navStyle}>
        <li style={liStyle}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ ...liStyle, ...pushRightStyle }}>
          <Link to="/signin">Sign In</Link>
        </li>
        <li style={liStyle}>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li style={liStyle}>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;