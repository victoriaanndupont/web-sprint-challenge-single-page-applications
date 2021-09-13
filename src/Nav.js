import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/" className="nav">
        Home
      </Link>
      <Link id="order-pizza" to="/pizza" className="nav">
        I'm hungry!
      </Link>
    </>
  );
};

export default Nav;
