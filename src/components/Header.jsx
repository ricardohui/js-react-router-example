import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/user/">Users</Link>
        </li>
        <li>
          <Link to="/topics/">Topics</Link>
        </li>
        <li>
          <Link to="/render">Render prop</Link>
        </li>
        <li>
          <Link to="/redirect">Redirect Demo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
