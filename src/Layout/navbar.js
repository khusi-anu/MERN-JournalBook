import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./signedin";
import SignedOutLinks from "./signedout";

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue">
      <div className="container">
        <Link to="/" className="brand-logo">
          My Journal
        </Link>
        <SignedInLinks />
      </div>
    </nav>
  );
};

export default Navbar;
