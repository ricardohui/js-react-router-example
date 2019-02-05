import React from "react";
import { Redirect } from "react-router-dom";
export default () => {
  return (
    <div>
      <Redirect to="/about" />
    </div>
  );
};
