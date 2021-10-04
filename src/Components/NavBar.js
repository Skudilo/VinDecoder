import React from "react";
import { Link } from "react-router-dom";

const MyComponent = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/variables">
        Variables
      </Link>
    </div>
  );
};

export default MyComponent;
