import React from "react";
import { Link } from "react-router-dom";
const Redirect = () => {
  return (
    <div>
      <p>
        This page demonstrate how to redirect a page like about upon something
        happen like a link is clicked.
      </p>
      <Link to="./unauth">Unauth</Link>
    </div>
  );
};

export default Redirect;
