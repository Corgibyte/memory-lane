import React from 'react';
import { Link } from "react-router-dom";

function Header() {

  return (
    <React.Fragment>
      <h1>Memory Something</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;