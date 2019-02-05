import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
const Render = () => {
  return (
    <div>
      This page tries to demonstrate how you can use render props to render a
      component, instead of components. You use render when you want to pass
      in-scope variables to the component. It takes an inline function.
      <Route
        path="/about"
        render={props => <About {...props} who="Someone" />}
      />
    </div>
  );
};

export default Render;
