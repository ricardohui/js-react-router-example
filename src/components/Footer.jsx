import React from "react";
import { withRouter } from "react-router";
const Footer = ({ match, location, history }) => {
  return (
    <div>
      Footer
      <br />
      you are now at {location.pathname}.
    </div>
  );
};

export default withRouter(Footer);
