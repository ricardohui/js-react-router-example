import React from "react";

export default ({ who }) => {
  return <h2>About {who || "Me"}</h2>;
};
